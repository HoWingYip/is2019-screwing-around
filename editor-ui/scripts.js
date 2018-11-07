//define "playing" property of video
//shoutout to my saviour, Raees Bhatti, on StackOverflow
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function() {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

window.onload = () => {
  /* seek bar update function */
  //credits: https://blog.teamtreehouse.com/building-custom-controls-for-html5-videos

  //timeline video scrubber code
  var timelineVideo = document.getElementById("timeline-video");
  var timelineScrubber = document.getElementById("timelineScrubber");
  var timelinePlayPauseButton = document.getElementById("timelinePlayPause");

  //scrub video on scrubber drag
  timelineScrubber.addEventListener("change", () => {
    timelineVideo.currentTime = timelineVideo.duration * (timelineScrubber.value / 100);
  });

  //move scrubber as video plays
  timelineVideo.addEventListener("timeupdate", () => {
    timelineScrubber.value = 100 / timelineVideo.duration * timelineVideo.currentTime;
  });

  //pause video while scrubber is being dragged, and
  //play it when it stops being dragged
  timelineScrubber.addEventListener("mousedown", () => {
    timelineVideo.pause();
    timelinePlayPauseButton.src = "icons/pngs/Play.png";
  });

  //source video scrubber code
  var sourceVideo = document.getElementById("source-video");
  var sourceScrubber = document.getElementById("sourceScrubber");
  var sourcePlayPauseButton = document.getElementById("sourcePlayPause");

  //scrub video on scrubber drag
  sourceScrubber.addEventListener("change", () => {
    sourceVideo.currentTime = sourceVideo.duration * (sourceScrubber.value / 100);
  });

  //move scrubber as video plays
  sourceVideo.addEventListener("timeupdate", () => {
    sourceScrubber.value = 100 / sourceVideo.duration * sourceVideo.currentTime;
  });

  //pause video while scrubber is being dragged, and
  //play it when it stops being dragged
  sourceScrubber.addEventListener("mousedown", () => {
    sourceVideo.pause();
    sourcePlayPauseButton.src = "icons/pngs/Play.png";
  });

  /* timer update functions */

  //timeline timer code
  var timelineCurrentTimeIndicator = document.getElementById("timelineCurrentTime");
  var timelineDurationIndicator = document.getElementById("timelineDuration");

  //show timeline video duration
  timelineVideo.addEventListener("durationchange", () => {
    if(timelineVideo.duration < 60) {
      timelineDurationIndicator.innerHTML = "0:" + Math.floor(timelineVideo.duration);
    } else if (timelineVideo.duration >= 60) {
      var durationMinutes = Math.floor(timelineVideo.duration / 60);
      var durationSeconds = Math.floor(timelineVideo.duration - durationMinutes * 60);
      timelineDurationIndicator.innerHTML = durationMinutes + ":" + durationSeconds;
    }
  });

  //update timeline current time indicator
  timelineVideo.addEventListener("timeupdate", () => {
    if(timelineVideo.duration < 60) {
      timelineCurrentTimeIndicator.innerHTML = "0:" + ("0" + Math.floor(timelineVideo.currentTime)).slice(-2); /* formats seconds value to 2 digits */
    } else if(timelineVideo.duration >= 60) {
      var currentMinutes = Math.floor(timelineVideo.currentTime / 60);
      var currentSeconds = Math.floor(timelineVideo.currentTime - currentMinutes * 60);
      timelineCurrentTimeIndicator.innerHTML = currentMinutes + ":" + ("0" + Math.floor(currentSeconds)).slice(-2);
    }
  });

  //source timer code
  var sourceCurrentTimeIndicator = document.getElementById("sourceCurrentTime");
  var sourceDurationIndicator = document.getElementById("sourceDuration");

  //show source video duration
  sourceVideo.addEventListener("durationchange", () => {
    if(sourceVideo.duration < 60) {
      sourceDurationIndicator.innerHTML = "0:" + Math.floor(sourceVideo.duration);
    } else if (sourceVideo.duration >= 60) {
      var durationMinutes = Math.floor(sourceVideo.duration / 60);
      var durationSeconds = Math.floor(sourceVideo.duration - durationMinutes * 60);
      sourceDurationIndicator.innerHTML = durationMinutes + ":" + durationSeconds;
    }
  });

  //update source current time indicator
  sourceVideo.addEventListener("timeupdate", () => {
    if(sourceVideo.duration < 60) {
      sourceCurrentTimeIndicator.innerHTML = "0:" + ("0" + Math.floor(sourceVideo.currentTime)).slice(-2); /* formats seconds value to 2 digits */
    } else if(sourceVideo.duration >= 60) {
      var currentMinutes = Math.floor(sourceVideo.currentTime / 60);
      var currentSeconds = Math.floor(sourceVideo.currentTime - currentMinutes * 60);
      sourceCurrentTimeIndicator.innerHTML = currentMinutes + ":" + ("0" + Math.floor(currentSeconds)).slice(-2);
    }
  });
};

/* skip to start functions */

function timelineSkipToStart() {
  var timelineVideo = document.getElementById("timeline-video");
  var timelinePlayPauseButton = document.getElementById("timelinePlayPause");
  
  timelineVideo.pause();
  timelineVideo.currentTime = 0;
  timelinePlayPauseButton.src = "icons/pngs/Play.png";
}

function sourceSkipToStart() {
  var sourceVideo = document.getElementById("source-video");
  var sourcePlayPauseButton = document.getElementById("sourcePlayPause");

  sourceVideo.pause();
  sourceVideo.currentTime = 0;
  sourcePlayPauseButton.src = "icons/pngs/Play.png";
}

/* rewind functions */



/* play/pause functions */

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

/* fast-forward function */



/* skip to end functions */

function timelineSkipToEnd() {
  var timelineVideo = document.getElementById("timeline-video");
  var timelinePlayPauseButton = document.getElementById("timelinePlayPause");

  timelineVideo.pause();
  timelineVideo.currentTime = timelineVideo.duration;
  timelinePlayPauseButton.src = "icons/pngs/Play.png";
}

function sourceSkipToEnd() {
  var sourceVideo = document.getElementById("source-video");
  var sourcePlayPauseButton = document.getElementById("sourcePlayPause");

  sourceVideo.pause();
  sourceVideo.currentTime = sourceVideo.duration;
  sourcePlayPauseButton.src = "icons/pngs/Play.png";
}
