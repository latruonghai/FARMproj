from fastapi import APIRouter
from app.backend.db.models.user import User
# from app.backend.config.db import conn

route = APIRouter()

@route.get("/user")
def hell():
    return {"telel": "hello"}