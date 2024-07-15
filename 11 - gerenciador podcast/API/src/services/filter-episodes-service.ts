// import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCodes } from "../utils/status-code";

export const serviceFilterEpisodes = async (url?: string | undefined): Promise<PodcastTransferModel> => {
    
    const queryString = url?.split("?p=")[1] || "";

    const data = await repoPodcast(queryString);

    let responseFormat: PodcastTransferModel = {
        statusCode:  data.length !== 0 ? StatusCodes.OK : StatusCodes.NoCONTENT,
        body: data
    }

    return responseFormat;
}