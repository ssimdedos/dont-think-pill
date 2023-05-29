from typing import Union
from OopObject import OopObject
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder

from http import HTTPStatus

from fastapi.responses import JSONResponse

from ResponseBuilder import ResponseBuilder

app = FastAPI()
db=[OopObject(0, "nom", 26)]

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/items", status_code=HTTPStatus.OK, response_model=list[OopObject])
async def search() -> list[OopObject]:
    return ResponseBuilder.buildOKCodeResponse(db)

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    try:
        return ResponseBuilder.buildOKCodeResponse(db[item_id])
    except IndexError:
        return ResponseBuilder.buildNotFoundResponse()

@app.post("/items", status_code=HTTPStatus.CREATED)
async def add_item(obj: OopObject):
    obj.id=len(db)
    db.append(obj)
    headers={"location": "/items/"+ obj.id}
    return JSONResponse(content={}, headers=headers)

@app.put("/items/{item_id}", status_code=HTTPStatus.OK)
async def update_item(item_id: int, obj: OopObject):
    try:
        db[id]= obj
        break
    except IndexError:
        return ResponseBuilder.buildNotFoundResponse()

@app.delete("/items/{item_id}")
async def update_item(item_id: int):
    del db[key]