from fastapi import APIRouter, HTTPException
from app.backend.db.models.user import User
from app.backend.respositories.user import create_user

# from app.backend.config.db import conn

route = APIRouter()

# Create User
@route.post("/user", response_model=User)
async def post_user(user: User):
    response = await create_user(user.dict())
    
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

