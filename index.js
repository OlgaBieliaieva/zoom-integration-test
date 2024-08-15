// import axios from "axios";
// import "dotenv/config";

// async function getAccessToken() {
//   try {
//     const data = `${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`;
//     const token = Buffer.from(data).toString("base64");

//     const res = await axios.post(
//       `${process.env.ZOOM_BASE_AUTH_URL}?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
//       {},
//       {
//         headers: {
//           Authorization: `Basic ${token}`,
//         },
//       }
//     );

//     return res.data.access_token;
//   } catch (error) {}
// }

// async function getMeetings() {
//   try {
//     const token = await getAccessToken();
//     console.log(token);

//     const response = await axios.get(
//       `${process.env.ZOOM_BASE_URL}/users/me/meetings`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = response.data;
//     return data;
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// async function createMeeting(
//   topic,
//   start_time,
//   type,
//   duration,
//   timezone,
//   agenda
// ) {
//   try {
//     const token = await getAccessToken();
//     console.log(token);
//     const response = await axios.post(
//       `${process.env.ZOOM_BASE_URL}/users/me/meetings`,
//       {
//         topic,
//         type,
//         start_time,
//         duration,
//         timezone,
//         agenda,
//         settings: {
//           host_video: true,
//           participant_video: true,
//           join_before_host: false,
//           mute_upon_entry: true,
//           watermark: false,
//           use_pmi: false,
//           approval_type: 0,
//           audio: "both",
//           auto_recording: "none",
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const body = response.data;
//     return body;
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// async function updateMeeting(meetingId, changes) {
//   const token = await getAccessToken();
//   console.log(token);

//   const response = await axios.patch(
//     `${process.env.ZOOM_BASE_URL}/meetings/${meetingId}`,
//     changes,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const body = response.data;
//   return body;
// }

// async function deleteMeeting(meetingId) {
//   const token = await getAccessToken();
//   console.log(token);

//   const response = await axios.delete(
//     `${process.env.ZOOM_BASE_URL}/meetings/${meetingId}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const body = response.data;
//   return body;
// }

// // (async () => {
//   // console.log(getAccessToken());

//   // console.log(await getMeetings());
//   // console.log(
//   //   await createMeeting(
//   //     "CodingWithAdo new meeting",
//   //     "2024-08-12T16:00:00",
//   //     2,
//   //     40,
//   //     "Europe/Kiev",
//   //     "Team meeting for future videos"
//   //   )
//   // );
//   // console.log(await getMeetings());
//   // console.log(
//   //   await updateMeeting(89631395615, {
//   //     topic: "My meeting",
//   //     start_time: "2024-08-12T16:10:00",
//   //   })
//   // );
//   // console.log(
//   //   await deleteMeeting(89631395615)
//   // );
//   // console.log(await getMeetings());
// // })();
