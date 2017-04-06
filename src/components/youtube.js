var loaded = false;

var loadApi = new Promise (function (resolve) {
  if (!loaded){
    var tag = document.createElement('script'),
      firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  window.onYouTubeIframeAPIReady = function() {
    loaded = true;
    resolve(window.YT);
  };

  if (loaded){
    resolve(window.YT)
  }
})

var initVideo = function(id, initedVideos) {
  var container = document.querySelector('[video-id="' + id + '"] .insertPoint');
  //console.log('initedVideos', initedVideos);
  if (!initedVideos[id]) {
    initedVideos[id] = new window.YT.Player(container, {
      videoId: id,
      events: {
        'onReady': function() {
        }
      }
    });
  }
};

module.exports = {
  loadApi,
  initVideo
}