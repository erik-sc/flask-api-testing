import requests

def fetch_user_data(access_token):
    hed = {'Authorization': 'Bearer ' + access_token}

    sync_get_users_url = 'https://api.todoist.com/sync/v9/user'
    response = requests.get(sync_get_users_url, headers=hed)
    return response.json()

def fetch_tasks(access_token):
    hed = {'Authorization': 'Bearer ' + access_token}

    rest_get_tasks = 'https://api.todoist.com/rest/v2/tasks'
    response = requests.get(rest_get_tasks, headers=hed)
    return response.json()
