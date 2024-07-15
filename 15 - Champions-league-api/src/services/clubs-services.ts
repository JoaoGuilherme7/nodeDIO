import { HttpResponseModel } from "../models/httpResponseModel";
import * as httpResponse from "../utils/http-helper";
import * as clubsRepository from "../repositories/clubs-repository";
import { clubsModel } from "../models/clubsModel";

async function getAllClubsService(): Promise<HttpResponseModel> {
    let response = null;
    let data: clubsModel[];

    data = await clubsRepository.getAllCLubs();
    response =
        data ?
            httpResponse.ok(data)
            : httpResponse.noContent();

    return response;
}

async function getClubByIdService(id: number): Promise<HttpResponseModel> {
    let response = null;
    let data: clubsModel;

    data = await clubsRepository.getClubById(id);
    response =
        data ?
            await httpResponse.ok(data)
            : await httpResponse.noContent();


    return response;
}

export {
    getAllClubsService,
    getClubByIdService
}