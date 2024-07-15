import { Router } from "express";
import * as playersController from "./crontrollers/players-controller";
import * as clubsController from "./crontrollers/clubs-controller"

export const router  = Router();

router.get("/clubs", clubsController.getClubs);
router.get("/clubs/:id", clubsController.getClubById);

router.get("/players", playersController.getPlayer);
router.get("/players/:id", playersController.getPlayerById);
router.post("/players", playersController.postPlayer);
router.delete("/players/:id", playersController.deletePlayer);
router.patch("/players", playersController.updatePlayer);