from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder

class OopObject(BaseModel):
    id: int
    nom: str
    age: int
    def __init__(self, id, nom, age):
        super().__init__(id=id, nom=nom, age=age)

    def to_json(self):
        return jsonable_encoder(self)