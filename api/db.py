import sqlalchemy as db
from sqlalchemy import select
from sqlalchemy.orm import Session

DB_URL = "postgresql://postgres:postgres@localhost:5432/taskhero"

engine = db.create_engine(DB_URL)

session = Session(engine)
