import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (queryString?: string): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if (queryString) {
        queryString.toLowerCase();

        //Filter using categories, podcast name and episode name
        jsonFile = jsonFile.filter((podcast: PodcastModel) => {
            return podcast.podcastName.toLowerCase() === queryString ||
            podcast.categories.join('').toLowerCase().includes(queryString) ||
            podcast.episode.toLowerCase().includes(queryString);
        });
    }

    return jsonFile
}