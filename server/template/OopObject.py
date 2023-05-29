from pydantic import BaseModel

class OopObject(BaseModel):
    id: int
    nom: str
    age: int
    def __init__(self, id, nom, age):
        super().__init__(id=id, nom=nom, age=age)