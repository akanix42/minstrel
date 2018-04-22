<template>
  <div>
    <div>
      <h4>Direct URL</h4>
      <button @click="playAudio">Play Audio</button>
      <audio 
        :src="directUrl"
        controls/>
      <a :href="directUrl">{{ directUrl }}</a>
    </div>
    <div>
      <h4>Streamed URL</h4>
      <button @click="playAudioStream">Play Audio</button>
      <audio
        :src="streamUrl"
        controls/>
      <a :href="streamUrl">{{ streamUrl }}</a>
    </div>
    <div>
      <h4>Transcoded URL</h4>
      <button @click="playTranscodedAudioStream">Play Audio</button>
      <audio
        :src="transcodedUrl"
        controls/>
      <a :href="transcodedUrl">{{ transcodedUrl }}</a>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Howl } from 'howler';
const files = [
  '/I know a song.m4a&contentType=m4a',
  '/09 Life With You.flac&contentType=flac',
];
const file = files[0];

const directUrl = Meteor.absoluteUrl(file);
let streamUrl = Meteor.absoluteUrl(
  // '/audio-stream?filename=I know a song.m4a&contentType=m4a',
  // '/audio-stream?filename=09 Life With You.flac&contentType=flac',
  `/audio-stream?filename=${file}`,
);
// streamUrl =
//   // 'http://192.168.0.55:3046/audio-stream?filename=09 Life With You.flac&contentType=flac';
//   // 'http://192.168.0.55:3046/audio-stream?filename=I know a song.m4a&contentType=m4a';
//   `http://192.168.0.55:3046/audio-stream?filename=${file}`;
const transcodedUrl = Meteor.absoluteUrl(
  `/transcoded-audio-stream?filename=${file}`,
);
export default {
  data() {
    return {
      startAt: 0,
      directUrl,
      streamUrl,
      transcodedUrl,
      sound: null,
    };
  },
  methods: {
    playAudio() {
      // this.sound = new Howl({
      //   src: directUrl,
      //   html5: true,
      // });
      // sound.play();
      this.playSound({
        src: directUrl,
        html5: true,
      });
    },
    playAudioStream() {
      // this.sound = new Howl({
      //   src: streamUrl,
      //   html5: true,
      // });
      // sound.play();
      this.playSound({
        src: streamUrl,
        html5: true,
      });
    },
    playTranscodedAudioStream() {
      // this.sound = new Howl({
      //   src: transcodedUrl + `&startAt=${this.startAt}`,
      //   html5: true,
      // });
      // sound.play();
      this.playSound({
        src: transcodedUrl + `&startAt=${this.startAt}`,
        html5: true,
      });
      this.startAt += 10;
    },
    playSound(sound) {
      if (this.sound) {
        this.sound.stop();
        this.sound.unload();
      }
      this.sound = new Howl(sound);
      this.sound.play();
    },
  },
};
</script>

<style lang="scss" module>
.play {
  font-size: 20px;
}
</style>
