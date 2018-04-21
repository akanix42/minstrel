<template>
  <div>
    <div>
      <button @click="playAudio">Play Audio</button>
      <audio 
        :src="directUrl"
        controls/>
    </div>
    <div>
      <button @click="playAudioStream">Play Audio</button>
      <audio
        :src="streamUrl"
        controls/>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Howl } from 'howler';
const directUrl = Meteor.absoluteUrl('/I know a song.m4a');
let streamUrl = Meteor.absoluteUrl(
  // '/audio-stream?filename=I know a song.m4a&contentType=m4a',
  '/audio-stream?filename=09 Life With You.flac&contentType=flac',
);
streamUrl =
  'http://192.168.0.55:3046/audio-stream?filename=09 Life With You.flac&contentType=flac';
export default {
  data() {
    return {
      directUrl,
      streamUrl,
    };
  },
  methods: {
    playAudio() {
      const sound = new Howl({
        src: directUrl,
        html5: true,
      });
      sound.play();
    },
    playAudioStream() {
      const sound = new Howl({
        src: streamUrl,
        html5: true,
      });
      sound.play();
    },
  },
};
</script>

<style lang="scss" module>
.play {
  font-size: 20px;
}
</style>
