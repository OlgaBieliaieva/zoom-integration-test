import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as meetingsServices from "../services/meetingsServices.js";

const getAll = async (req, res) => {
  const { zoomAccessToken } = req;

  const result = await meetingsServices.getAllMeetings(zoomAccessToken);

  res.json(result);
};

const getByType = async (req, res) => {
  const { zoomAccessToken } = req;
  const { type } = req.params;

  const result = await meetingsServices.getMeetingsByType(
    zoomAccessToken,
    type
  );

  res.json(result);
};

const getById = async (req, res) => {
  const { zoomAccessToken } = req;
  const { id } = req.params;

  const result = await meetingsServices.getMeetingById(zoomAccessToken, id);
  console.log(result);

  res.json(result);
};

export const addMeeting = async (req, res) => {
  const { zoomAccessToken } = req;
  const { topic, start_time, agenda } = req.body;
  const result = await meetingsServices.createMeeting(
    zoomAccessToken,
    topic,
    start_time,
    agenda
  );
  res.json(result);
};

export const updateMeeting = async (req, res) => {
  const { zoomAccessToken } = req;
  const { id } = req.params;
  const result = await meetingsServices.updateMeeting(
    zoomAccessToken,
    id,
    req.body
  );
  if (result === 204) {
    res.json({ message: `Meeting ${id} updated` });
  } else {
    res.json(result);
  }
};

export const deleteMeeting = async (req, res) => {
  const { zoomAccessToken } = req;
  const { id } = req.params;
  const result = await meetingsServices.deleteMeeting(zoomAccessToken, id);
  if (result === 204) {
    res.json({ message: `Meeting ${id} deleted` });
  } else {
    res.json(result);
  }
};
export default {
  getAll: ctrlWrapper(getAll),
  getByType: ctrlWrapper(getByType),
  getById: ctrlWrapper(getById),
  addMeeting: ctrlWrapper(addMeeting),
  updateMeeting: ctrlWrapper(updateMeeting),
  deleteMeeting: ctrlWrapper(deleteMeeting),
};
