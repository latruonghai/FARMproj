from app.backend.config import collectionUser

async def create_user(user_dict):
    
    document = user_dict

    result = await collectionUser.insert_one(document)
    
    return document