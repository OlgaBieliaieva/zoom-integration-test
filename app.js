import express from "express";
import morgan from "morgan";
import cors from "cors";
import axios from "axios";
import "dotenv/config";
// import userRouter from "./routes/userRouter.js";
import meetingsRouter from "./routes/meetingsRouter.js";

const { PORT = 3000 } = process.env;

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/zoom/user", userRouter);
app.use("/api/zoom/meetings", meetingsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// app.get('/',async (req,res)=>{
//     const code = req.query.code;

//     try{
//         const response = await axios.post('https://zoom.us/oauth/token',null,{
//             params:{
//                 grant_type: 'authorization_code',
//                 code:code,
//                 redirect_uri: process.env.REDIRECT_URI
//             },
//             headers:{
//                 'Authorization':`Basic ${Buffer.from(`${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`).toString('base64')}`
//             }
//         });
//         res.send(response.data.access_token);
//     }catch(error){
//         console.error('Error',error);
//         res.send('Error');
//     }

// });

// app.get('/auth/zoom',(req,res)=>{
//     const clientId = process.env.ZOOM_API_KEY;
//     const redirect_uri = encodeURIComponent(process.env.ZOOM_REDIRECT_URI);
//     const responseType = 'code';
//     const authorizationUrl = `https://zoom.us/oauth/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirect_uri}`;
//     res.redirect(authorizationUrl);
// });

// app.get('/callback',async(req,res)=>{
//     const code = req.query.code;
//     if(!code){
//         return res.status(400).send('No code provided');
//     }
//     try{
//         const response = await axios.post('https://zoom.us/oauth/token',null,{params:{
//             grant_type:'authorization_code',
//             code,
//             redirect_uri:process.env.REDIRECT_URI
//         },headers:{
//             'Authorization':`Basic ${Buffer.from(`${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`).toString('base64')}`,
//             'Content-Type':'application/x-www-form-urlencoded'
//         }});
//         res.json(response.data);
//     }catch(error){
//         console.error('Error:',error);
//         res.send('Error obtaining token');
//     }
// })

// app.get('/refreshToken',async(req,res)=>{
//     try{
//         const refresh_token = req.query.refreshToken;

//         const response = await axios.post('https://zoom.us/oauth/token',null,{
//             params:{
//                 grant_type:'refresh_token',
//                 refresh_token
//             },
//             headers:{
//                 'Authorization':`Basic ${Buffer.from(`${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`).toString('base64')}`,
//                 'Content-Type':'application/x-www-form-urlencoded'
//             }
//         });

//         res.json(response.data);

//     }catch(error){
//         console.error('Error',error);
//         res.send('Error refreshing token')
//     }
// })

app.listen(PORT, () => {
  console.log("Example app listening on port 3000!");
});
