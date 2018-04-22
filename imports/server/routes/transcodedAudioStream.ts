import bytes from 'bytes';
import * as fs from 'fs';
import mime from 'mime-types';
import * as path from 'path';
import app from '../express';
import paths from '../paths';
import DualOutputStream from '../utilities/DualOutputStream';

// import prism from 'prism-media';
import ffmpeg, { FfmpegCommand } from 'fluent-ffmpeg';

app.get('/transcoded-audio-stream', function(req, res) {
  const contentType = mime.lookup(req.query.contentType);
  const startAt = req.query.startAt || 0;
  const filePath = `${paths.audio}/${req.query.filename}`;
  /* Taken from https://medium.com/@daspinola/video-stream-with-node-js-and-html5-320b3191a6b6 */
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const file = fs.createReadStream(filePath);
  const cacheFile = fs.createWriteStream(filePath + '.mp3');
  const head = {
    'Transfer-Encoding': 'chunked',
    'Accept-Ranges': 'bytes',
    'Content-Type': 'audio/mpeg',
  };
  res.writeHead(200, head);

  const cacheFile2 = fs.createWriteStream(filePath + '.pcm');
  process.env.FFMPEG_PATH = 'C:\\projects\\personal\\minstrel\\node_modules\\ffmpeg-binaries\\bin\\ffmpeg.exe';
  transcodeToOpus(filePath, startAt, 128)
    .on('end', function() {
      console.log('file has been converted succesfully');
    })
    .on('error', function(err) {
      if (err.message === 'Output stream closed') {
        return;
      }
      console.log('an error happened: ' + err.message);
    })
    // save to stream
    .pipe(res, { end: true });

  // file.pipe(transcoder).pipe(new DualOutputStream(res, cacheFile));
});

function transcodeToOpus(filePath: string, startAt: string | number, bitRate: number) {
  return ffmpeg(filePath)
    .format('mp3')
    .seekInput(startAt)
    .audioCodec('libmp3lame')
    .audioBitrate(`${bitRate}k`)
    .audioChannels(2);
}
