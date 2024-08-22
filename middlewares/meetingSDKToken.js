import { KJUR } from "jsrsasign";
import "dotenv/config";

const meetingSDKToken = async (req, res, next) => {
  try {
    let signature = "";
    const iat = Math.round(new Date().getTime() / 1000);
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };

    const { meetingNumber, role } = req.body;
    const sdkKey = process.env.ZOOM_SDK_CLIENT_ID;
    const sdkSecret = process.env.ZOOM_SDK_CLIENT_SECRET;

    const oPayload = {
      app_key: sdkKey,
      iat,
      exp,
      mn: meetingNumber,
      role: role,
      tokenExp: exp,
    };

    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    signature = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);

    req.signature = signature;

    next();
  } catch (error) {
    next({ error });
  }
};

export default meetingSDKToken;
