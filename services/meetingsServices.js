import axios from "axios";
import "dotenv/config";

export async function getAllMeetings(token) {
  try {
    const response = await axios.get(
      `${process.env.ZOOM_BASE_URL}/users/me/meetings`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function getMeetingsByType(token, type) {
  try {
    console.log(type);

    const response = await axios.get(
      `${process.env.ZOOM_BASE_URL}/users/me/meetings?type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function getMeetingById(token, id) {
  try {
    const response = await axios.get(
      `${process.env.ZOOM_BASE_URL}/meetings/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    // return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function createMeeting(token, topic, start_time, agenda) {
  try {
    const response = await axios.post(
      `${process.env.ZOOM_BASE_URL}/users/me/meetings`,
      {
        topic,
        start_time,
        agenda,
        type: 2,
        timezone: "Europe/Kiev",
        duration: 40,
        settings: {
          host_video: false,
          participant_video: false,
          join_before_host: false,
          mute_upon_entry: true,
          watermark: false,
          use_pmi: false,
          waiting_room: true,
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

export async function updateMeeting(token, meetingId, params) {
  const response = await axios.patch(
    `${process.env.ZOOM_BASE_URL}/meetings/${meetingId}`,
    params,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.status;
}

export async function deleteMeeting(token, meetingId) {
  const response = await axios.delete(
    `${process.env.ZOOM_BASE_URL}/meetings/${meetingId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.status;
}
