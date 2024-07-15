import { Request, Response } from "express";

import * as playersServices from "../services/players-services";

import { PlayerModel } from "../models/playersModel";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await playersServices.getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playersServices.getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue: PlayerModel = req.body;
    const httpResponse = await playersServices.createPlayerService(bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playersServices.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const bodyValue:PlayerModel = req.body;
    const httpResponse = await playersServices.updatePlayerService(bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}