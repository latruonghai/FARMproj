from fastapi import APIRouter
from app.backend.api.routers import user

router = APIRouter()
router.include_router(user.route, tags=["User"])
