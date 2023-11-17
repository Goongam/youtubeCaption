const { google } = require("googleapis");
const { authenticate } = require("@google-cloud/local-auth");
const path = require('path');

/**
 * 참고 링크
 * googleapis sample: https://github.com/googleapis/google-api-nodejs-client/blob/main/samples/youtube/upload.js
 * blog: https://joypinkgom.tistory.com/31
 * docs: https://developers.google.com/youtube/v3/docs/captions/download?hl=ko&apix=true
 */
const youtube = google.youtube("v3");

async function test() {
// 방법1
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, "./oauth2.keys.json"),
    scopes: [
      "https://www.googleapis.com/auth/youtube.upload",
      "https://www.googleapis.com/auth/youtube",
      "https://www.googleapis.com/auth/youtube.force-ssl"
    ],
  });


  google.options({auth});
  const list = await youtube.captions.download({
      id:'AUieDaapXiEPLAspgZffqn_hKbA3wQn6OEto_9fvVPJx40Khun8',
      key:process.env.API_KEY, //TODO: 환경변수 라이브러리 설치
    });

    console.log(list);
    
}

test();
