import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods:["GET", "POST"]
})

const teams = [
    { id: 1, name: "Ferrari", base: "Maranello" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
]

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Ayrton Senna", team: "McLaren" }
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);

    return teams;
})

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);

    return drivers;
})

interface DriverParams {
    id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    console.log(id)
    const driver = drivers.find((d) => d.id == id);

    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver not Found" };
    }else {
        response.type("application/json").code(200);
        return {driver};
    }
});

server.listen({ port: 3333 }, () => {
    console.log("server init")
})

