from fastapi.responses import JSONResponse
from ErrorCodeBody import ErrorCodeBody


class ResponseBuilder:
    @classmethod
    def buildOKCodeResponse():
        return JSONResponse(content={}, status_code=200)

    @classmethod
    def buildOKCodeResponse(body:OopObject):
        return JSONResponse(content=body.to_json(), status_code=200)

    @classmethod
    def buildOKCodeResponse(bodies:list[OopObject]):
        return JSONResponse(content=list(map(lambda obj:obj.to_json())), status_code=200)

    @classmethod
    def buildCreatedCodeResponse():
        return JSONResponse(content={}, status_code=201)

    @classmethod
    def buildUnmodifiedCodeResponse():
        return JSONResponse(content={}, status_code=304)

    @classmethod
    def buildClientErrorResponse(message: str):
        return JSONResponse(content=ErrorCodeBody(message).to_json(), status_code=400)

    @classmethod
    def buildUnAuthenticatedResponse():
        return JSONResponse(content=ErrorCodeBody("Need Authentication", "/login").to_json(), status_code=401)

    @classmethod
    def buildForbiddenResponse():
        return JSONResponse(content=ErrorCodeBody("No rights granted").to_json(), status_code=403)

    @classmethod
    def buildNotFoundResponse():
        return JSONResponse(content=ErrorCodeBody("Not found").to_json(), status_code=404)
	