import express from "express";
import zoomToken from "../middlewares/zoomToken.js";
import meetingsControllers from "../controllers/meetingsControllers.js";

const meetingsRouter = express.Router();

meetingsRouter.get("/all", zoomToken, meetingsControllers.getAll);
meetingsRouter.get("/:type", zoomToken, meetingsControllers.getByType);
meetingsRouter.get("/:id", zoomToken, meetingsControllers.getById);
meetingsRouter.post("/add", zoomToken, meetingsControllers.addMeeting);
meetingsRouter.patch("/:id/update", zoomToken, meetingsControllers.updateMeeting);
meetingsRouter.delete("/:id/delete", zoomToken, meetingsControllers.deleteMeeting)


export default meetingsRouter;
