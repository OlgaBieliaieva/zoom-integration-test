import axios from "axios";
import "dotenv/config";



async function getAccessToken() {
  try {
    const clientId = "YGPlOb7eSfKKnObxQuHh8A";
    const clientSecret = "VdMR9koS741Qk2YZL6JxeERmobps6E6m";
    const accountId = "wWSCOW1BT8-Ucd273EaAVw";
    const data = `${clientId}:${clientSecret}`;
    const token = Buffer.from(data).toString("base64");

    const res = await axios.post(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
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

async function getMeetings() {
  try {
    const token = await getAccessToken();
    console.log(token);

    const response = await axios.get(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

async function createMeeting(
  topic,
  start_time,
  type,
  duration,
  timezone,
  agenda
) {
  try {
    const token = await getAccessToken();
    console.log(token);
    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic,
        type,
        start_time,
        duration,
        timezone,
        agenda,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          watermark: false,
          use_pmi: false,
          approval_type: 0,
          audio: "both",
          auto_recording: "none",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const body = response.data;
    return body;
  } catch (error) {
    console.error("Error", error);
  }
}

(async () => {
  // console.log(getAccessToken());

  console.log(await getMeetings());
  console.log(await createMeeting('CodingWithAdo new meeting','2024-08-09T16:00:00',2,40,'Europe/Kiev','Team meeting for future videos'));
  console.log(await getMeetings());
})();
