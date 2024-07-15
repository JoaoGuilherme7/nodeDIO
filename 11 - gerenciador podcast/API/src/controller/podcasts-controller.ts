import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episode-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    let content:PodcastTransferModel = await serviceListEpisodes();
    res.writeHead(content.statusCode, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content.body));
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    let content:PodcastTransferModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content.body));
}