from typing import Union
from OopObject import OopObject
from fastapi import FastAPI

from fastapi.responses import JSONResponse

app = FastAPI()
db={}

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return db[item_id]

@app.get("/items/")
async def search(crit: str):
    return {"item_id": item_id, "q": q}

@app.post("/items", status_code=201)
async def add_item():
    content={}
    headers={}
    return JSONResponse(content=content, headers=headers)

@app.put("/items/{item_id}")
async def update_item(item_id: int, obj: OopObject):
    db[id]= jsonable_encoder(item)

@app.delete("/items/{item_id}")
async def update_item(item_id: int):
    del db[key]