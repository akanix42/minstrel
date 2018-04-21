import bytes from 'bytes';
import * as fs from 'fs';
import mime from 'mime-types';
import * as path from 'path';
import app from '../express';
import paths from '../paths';

app.get('/audio-stream', function(req, res) {
  const contentType = mime.lookup(req.query.contentType);
  const filePath = `${paths.audio}/${req.query.filename}`;
  /* Taken from https://medium.com/@daspinola/video-stream-with-node-js-and-html5-320b3191a6b6 */
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range as string;
  const maxChunkSize = bytes.parse('1mb');
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    let end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    let chunkSize = end - start + 1;
    if (chunkSize > maxChunkSize) {
      chunkSize = maxChunkSize;
      end = start + chunkSize - 1;
    }
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': contentType,
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': contentType,
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});
