from fastapi import FastAPI
from app.backend.api.routers.api import router
from fastapi.middleware.cors import CORSMiddleware
# from app.backend.config.db import collection


def createRouter():
    app = FastAPI()
    app.include_router(router)

    origins = ["https://localhost:3000"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"]
    )
    return app


app = createRouter()
