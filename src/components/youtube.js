var loaded = false;

var loadApi = function () {
  return new Promise (function (resolve) {
    console.log('in promise', loaded)
    if (!loaded){
      var loop = setInterval(() => {
        if (window.YT){
          clearInterval(loop);
          setTimeout(() => {
            loaded = true;
            resolve(window.YT);
          },100);
        }
      },100);

      /*window.onYouTubeIframeAPIReady = function() {
        console.log('onYouTubeIframeAPIReady');

      };*/

      var tag = document.createElement('script'),
        firstScriptTag = document.getElementsByTagName('script')[0];

      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    if (loaded){
      resolve(window.YT)
    }
  });
};

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
