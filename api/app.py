from flask import Flask, jsonify, session, request
from flask_session import Session
from flask_cors import CORS
from .todoist_service import fetch_user_data, fetch_tasks
import uuid
import urllib.parse
import requests
from functools import wraps
from dotenv import load_dotenv
import os

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"], headers=['Content-Type'],
            expose_headers=['Access-Control-Allow-Origin'], supports_credentials=True)
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
SCOPE = "data:read_write"

TOKEN_SESSION_KEY = "access_token"
STATE_SESSION_KEY = "state"
USER_ID_SESSION_KEY = "user_id"


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return '', 401
        return f(*args, **kwargs)
    return decorated_function


@app.route('/todoist/auth', methods=['GET'])
def get_auth_url():
    state = str(uuid.uuid4())

    params = {
        'client_id': CLIENT_ID,
        'state': state,
        'scope': SCOPE
    }

    query_string = urllib.parse.urlencode(params)
    authorization_url = f"https://todoist.com/oauth/authorize?{query_string}"

    session['state'] = state
    print(session)

    return jsonify({'authorization_url': authorization_url})


@app.route('/login', methods=['POST'])
def login():
    print(session['state'])
    if (session.get(STATE_SESSION_KEY) == None):
        return '', 401

    request_body = request.json
    code = request_body['code']
    state = request_body['state']

    if (state != session.get(STATE_SESSION_KEY)):
        session.pop(STATE_SESSION_KEY, None)
        return {'error': "Compromised"}, 400

    data = {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'code': code
    }

    response = requests.post(
        'https://todoist.com/oauth/access_token', data=data)
    if response.status_code == 200:
        access_token = response.json()[TOKEN_SESSION_KEY]
        session[TOKEN_SESSION_KEY] = access_token

        user_id = fetch_user_data(access_token=access_token)['id']
        session[USER_ID_SESSION_KEY] = user_id
        return '', 204

    else:
        session.pop(STATE_SESSION_KEY, None)
        return {'error': "Auth error"}, 400


@app.route('/logout', methods=['POST'])
@login_required
def logout():
    session.clear()
    return '', 204


@app.route("/tasks", methods=['GET'])
@login_required
def get_tasks():
    return fetch_tasks(access_token=session[TOKEN_SESSION_KEY])


@app.route('/user', methods=['GET'])
@login_required
def get_user_data():
    return fetch_user_data(access_token=session[TOKEN_SESSION_KEY])
