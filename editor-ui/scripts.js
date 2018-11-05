//define "playing" property of video
//shoutout to my saviour, Raees Bhatti, on StackOverflow
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function() {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

function timelinePlayPause() {
  //initialise video and play/pause button elements as JS vars
  var timelineVideo = document.getElementById("timeline-video");
  var timelinePlayPauseButton = document.getElementById("timelinePlayPause");

  //play the video and change icon
  if(timelineVideo.playing) {
    timelineVideo.pause();
    timelinePlayPauseButton.src = "icons/pngs/Play.png";
  } else if(timelineVideo.paused) {
    timelineVideo.play();
    timelinePlayPauseButton.src = "icons/pngs/Pause.png";
  }
}

function sourcePlayPause() {
  //initialise video and play/pause button elements as JS vars
  var sourceVideo = document.getElementById("source-video");
  var sourcePlayPauseButton = document.getElementById("sourcePlayPause");

  //play the video and change icon
  if(sourceVideo.playing) {
    sourceVideo.pause();
    sourcePlayPauseButton.src = "icons/pngs/Play.png";
  } else if(sourceVideo.paused) {
    sourceVideo.play();
    sourcePlayPauseButton.src = "icons/pngs/Pause.png";
  }
}