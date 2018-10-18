function setGrayscale() {
  var video = document.getElementById("posting-letter");
  var gsValue = document.getElementById("grayscaleControl").value;
  var valueIsNum = /^\d+$/.test(gsValue);
  //gets value of grayscale control textarea
  if(!valueIsNum || gsValue < 0 || gsValue > 100) {
    //console.log("qepowerk");
    var valueAlerts = document.getElementsByClassName("invalidValueAlertGrayscale");
    for(var i = 0; i < valueAlerts.length; i++) {
      valueAlerts[i].style.display = "inline-block";
    }
  }
  //checks whether string entered is a number

  if(video.style.webkitFilter === "") {
    video.style.webkitFilter = "grayscale(" + gsValue + "%)";
  } else {
    var existingFilterAttributes = video.style.webkitFilter.split(" ");
    //returns existing filter attributes as array
    //cycle through each one to check for grayscale
    //then set it
    video.style.webkitFilter = "";
    for(attributeNum in existingFilterAttributes) {
      if(existingFilterAttributes[attributeNum].includes("grayscale")) {
        existingFilterAttributes[attributeNum] = "grayscale(" + gsValue + "%)";
        //sets attribute value in array to user-inputted value
      }
      //console.log(existingFilterAttributes[attributeNum]);
      //video.style.webkitFilter += existingFilterAttributes[attributeNum];
    }
    //console.log(existingFilterAttributes);
  }
}

//port changes to saturation function after basic method completed
function setSaturation() {
  var video = document.getElementById("posting-letter");
  var satValue = document.getElementById("saturationControl").value;
  //gets value of saturation control textarea
  //video.setAttribute("style", "filter: saturate(" + satValue + "%)");
  video.style.webkitFilter = video.style.webkitFilter + " saturate(" + satValue + "%)";
}