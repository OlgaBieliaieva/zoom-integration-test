import * as zoomTokenServices from "../services/zoomTokenServices.js";
import NodeCache from "node-cache";

const tokenCache = new NodeCache();

const zoomToken = async (req, res, next) => {
  let zoomAccessToken = tokenCache.get("zoomToken");
  if (zoomAccessToken) {
    req.zoomAccessToken = zoomAccessToken;
    next();
  }
  zoomAccessToken = await zoomTokenServices.getAccessToken();
  req.zoomAccessToken = zoomAccessToken;
  tokenCache.set("zoomToken", zoomAccessToken, 3590);

  next();
};
export default zoomToken;
