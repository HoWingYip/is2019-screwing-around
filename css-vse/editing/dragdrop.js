
function drag() {
  
}

function allowDrop(event) {
  event.preventDefault();
  //allows drop event to fire
}

function drop(dropEvent) {
  //initialise videos
  var videoAbove = document.getElementById("above");
  var videoBelow = document.getElementById("below");
  //initialise split divs
  var splitLeft = document.getElementById("split-left");
  var splitRight = document.getElementById("split-right");

  //put video into 2nd div
  splitRight.appendChild(videoAbove);
  videoAbove.style.width = 300/7 + "%";
  videoAbove.style.height = 300/7 + "%";
  videoAbove.style.position = "fixed";

  //set position of video
  var xPos = dropEvent.clientX;
  var yPos = dropEvent.clientY;
  videoAbove.style.top = yPos + "px";
  videoAbove.style.left = xPos + "px";
}
