import { HttpResponseModel } from "../models/httpResponseModel";
import { PlayerModel } from "../models/playersModel";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

async function getPlayerService() {
    let data = await PlayerRepository.findAllPlayers();
    let response = null;

    if (data)
        response = await httpResponse.ok(data);
    else
        response = await httpResponse.noContent();

    return response;
}

async function getPlayerByIdService(id: number) {

    let data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data)
        response = await httpResponse.ok(data);
    else
        response = await httpResponse.noContent();

    return response;


}

async function createPlayerService(player: PlayerModel): Promise<HttpResponseModel> {
    let response: HttpResponseModel;

    if (Object.keys(player).length === 0)
        response = await httpResponse.badRequest();
    else {
        await PlayerRepository.insertPlayer(player);
        response = await httpResponse.created();
    }

    return response;
}

async function deletePlayerService(id: number): Promise<HttpResponseModel> {
    let response = null;

    if (!id)
        response = await httpResponse.badRequest();

    else {
        await PlayerRepository.deletePlayer(id);
        response = await httpResponse.ok({ message: "deleted" });
    }
    return response;
}

async function updatePlayerService(player: PlayerModel): Promise<HttpResponseModel> {
    let response = null;
    let madeIt: boolean = false;

    if (Object.keys(player).length == 0)
        response = await httpResponse.badRequest();


    else {
        madeIt = await PlayerRepository.editPlayer(player);

        response =
            madeIt ?
                await httpResponse.ok({ message: "edited" })
                : await httpResponse.badRequest();
    }

    return response;
}

export {
    getPlayerService,
    getPlayerByIdService,
    createPlayerService,
    deletePlayerService,
    updatePlayerService
}