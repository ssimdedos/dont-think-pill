from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder

class ErrorCodeBody(BaseModel):
    def __init__(self, message, url):
        self.message=message
        self.url=url

    def __init__(self, message):
        self.message=message
        self.url=""
    
    def to_json(self):
        return jsonable_encoder(self)