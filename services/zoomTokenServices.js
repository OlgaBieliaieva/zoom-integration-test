import axios from "axios";
import "dotenv/config";

export async function getAccessToken() {
  try {
    const data = `${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`;
    const token = Buffer.from(data).toString("base64");

    const res = await axios.post(
      `${process.env.ZOOM_BASE_AUTH_URL}?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
      {},
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    return res.data.access_token;
  } catch (error) {}
}
