const { google } = require("googleapis");
// const { authenticate } = require("@google-cloud/local-auth");
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 3000;
dotenv.config();

//로그인 url: https://accounts.google.com/o/oauth2/v2/auth?client_id=984820113102-dsnit5cepaodq5s5h45l407n9famgj8n.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:3000/oauth2callback&scope=https://www.googleapis.com/auth/youtube.force-ssl

const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/oauth2callback', async (req, res)=>{
  const token = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(token);
  
  await test2(token);
  res.send('hi');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function test2(){
  // console.log('test');
  
  const videoId = 'AUieDaY5hGuDR-tmOJEB3VonAY9p_jz11HUHfRE8CiKS';
  const url = `https://youtube.googleapis.com/youtube/v3/captions/${videoId}?key=${process.env.API_KEY}`;
  const access_token = 'accesstoken입력';
  axios.get(url, {
    headers:{
      "Authorization": `Bearer ${access_token}`
    }
  }).then((res) => console.log(res.data))
  
}


/**
 * 참고 링크
 * googleapis sample: https://github.com/googleapis/google-api-nodejs-client/blob/main/samples/youtube/upload.js
 * blog: https://joypinkgom.tistory.com/31
 * docs: https://developers.google.com/youtube/v3/docs/captions/download?hl=ko&apix=true
 */
// const youtube = google.youtube("v3");

// async function test(access_token) {
//   const list = await youtube.captions.download({
//       id:'AUieDaapXiEPLAspgZffqn_hKbA3wQn6OEto_9fvVPJx40Khun8',
//       key:process.env.API_KEY,
//     });

//     console.log(list);
// }