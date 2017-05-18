<template>
  <div class="youtube-video">
    <div ref="mount"></div>
  </div>
</template>

<script>
import youtube from 'root/components/youtube';
export default {
  name: 'youtube-video',
  props: ['id'],
  data () {
    return {
      video: null,
    }
  },
  methods: {
    loadVideo (id) {
      this.video = new window.YT.Player(this.$refs.mount, {
        videoId: id,
        events: {
          'onReady': function() {
          }
        }
      });
    },
    pauseVideo () {
      this.video && this.video.pauseVideo && this.video.pauseVideo();
    }
  },
  created () {
    this.eb.$on('route-change', this.pauseVideo);
  },
  mounted () {
    youtube.loadApi()
      .then(() => {
        this.loadVideo(this.id)
      })
      .catch((e) => {
        console.log('youtube load error: ', e)
      });
  },
  destroyed () {
    this.eb.$off('route-change', this.pauseVideo);
  }
}
</script>

<style lang="scss">
  .youtube-video {
    position:relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
    iframe, object, embed {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
  }
</style>
