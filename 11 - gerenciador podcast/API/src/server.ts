import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controller/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";


export const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        //queryString
        const baseUrl = req.url?.split("?")[0];

        if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res);
        }
        else if (req.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
            await getFilterEpisodes(req, res);
        }

    });

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
});