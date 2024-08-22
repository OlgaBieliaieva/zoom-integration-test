import express from "express";
import meetingSDKToken from "../middlewares/meetingSDKToken.js";
import meetingSDKControllers from "../controllers/meetingSDKControllers.js";

const meetingSDKRouter = express.Router();

// meetingsRouter.get("/all", zoomToken, meetingsControllers.getAll);
// meetingsRouter.get("/:type", zoomToken, meetingsControllers.getByType);
// meetingsRouter.get("/:id", zoomToken, meetingsControllers.getById);
meetingSDKRouter.post("/auth", meetingSDKToken, meetingSDKControllers.getSignature);
// meetingsRouter.patch("/:id/update", zoomToken, meetingsControllers.updateMeeting);
// meetingsRouter.delete("/:id/delete", zoomToken, meetingsControllers.deleteMeeting)


export default meetingSDKRouter;