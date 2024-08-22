import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getSignature = (req, res) => {
  res.status(200).json(req.signature);
};

export default {
  getSignature: ctrlWrapper(getSignature),
};
