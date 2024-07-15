import { clubsModel } from "../models/clubsModel";
import fs from "fs/promises";


export async function getAllCLubs(): Promise<clubsModel[]> {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const db: clubsModel[] = JSON.parse(data);
    return db;
}

export async function getClubById(id: number): Promise<clubsModel> {
    const db: clubsModel[] = await getAllCLubs();
    const index = db.findIndex(c => c.id == id);
    return db[index];
}