import { HttpResponseModel } from "../models/httpResponseModel"

const noContent = async (): Promise<HttpResponseModel> => {
    return {
        statusCode: 204,
        body: null
    }
}

const ok = async (data: any): Promise<HttpResponseModel> => {

    return {
        statusCode: 200,
        body: data
    }
}

const badRequest = async():Promise<HttpResponseModel> =>{
    return{
        statusCode:400,
        body: null
    }
}

const created = async():Promise<HttpResponseModel> =>{
    return {
        statusCode: 201,
        body: {
            message: "successful"
        }
    }
}
export { ok, noContent, badRequest, created}