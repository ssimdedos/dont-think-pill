from pydantic import BaseModel

class OopObject(BaseModel):
    def __init__(self, id, nom, age):
        self.id=0
        self.nom = nom
        self.age = age