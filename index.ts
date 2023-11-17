// const {youtube_v3} = require('googleapis');
import { google } from "googleapis";
// const youtube = new youtube_v3.Resource$Comments({ _options: {} });

const youtube = google.youtube("v3");

async function test() {
  const list = await youtube.captions.list({
    part: ["id"],
    videoId: "pIUXq-Djv7U",
    key: "AIzaSyCk4-_htYZa0sxXhHQmSAgwIB5JPz1LSws",
  });

  console.log(list);
}

test();
