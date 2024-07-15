import { Request, Response } from "express";
import * as clubsServices from "../services/clubs-services";
const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await clubsServices.getAllClubsService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await clubsServices.getClubByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export {
    getClubs,
    getClubById
}