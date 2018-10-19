//initialise array of attributes
var existingFilterAttributes = new Array();

//sets filter attributes
function enterAllAttributes(existingFilterAttributes, video) {
  console.log(existingFilterAttributes);
  video.style.filter = existingFilterAttributes.join(" ");
  //solution provided by u/Michelle-Obamas-Arms on Reddit
  console.log(video.style.filter);
}

function setGrayscale() {
  //gets video
  var video = document.getElementById("posting-letter");
  //console.log(video);
  //gets grayscale value from grayscale control
  var gsValue = document.getElementById("grayscaleControl").value;
  
  //checks whether value entered is valid, displays alert if invalid
  invalidValueAlert(gsValue, "invalidValueAlertGrayscale", 0, 100);

  existingFilterAttributes = video.style.filter.split(" ");
  //returns existing filter attributes as array
  //cycle through each one to check for grayscale
  //then set it
  for(attributeNum in existingFilterAttributes) {
    //checks if there is existing grayscale attribute
    if(existingFilterAttributes[attributeNum].includes("grayscale")) {
      existingFilterAttributes[attributeNum] = "grayscale(" + gsValue + "%)";
      //sets attribute value IN ARRAY ONLY to user-inputted value
    }

    //if no filters have been set...
    if(existingFilterAttributes.length <= 1) {
      existingFilterAttributes[0] = "grayscale(" + gsValue + "%)";
      //add grayscale property to array (grayscale property will be set later!)
    }
  }

  enterAllAttributes(existingFilterAttributes, video);
  //applies CSS filters to video
}

function setSaturation() {
  //gets video
  var video = document.getElementById("posting-letter");
  //gets saturation value from saturation control
  var satValue = document.getElementById("saturationControl").value;
  //gets value of saturation control textarea
  
  invalidValueAlert(satValue, "invalidValueAlertSaturation", 0, Number.MAX_SAFE_INTEGER);
  //no max value (for deep-frying purposes) so max value is largest possible int

  existingFilterAttributes = video.style.filter.split(" ");
  //returns existing filter attributes as array
  //cycle through each one to check for saturation
  //then set it
  for(attributeNum in existingFilterAttributes) {
    if(existingFilterAttributes[attributeNum].includes("saturate")) {
      existingFilterAttributes[attributeNum] = "saturate(" + satValue + "%)";
      //sets attribute value IN ARRAY ONLY to user-inputted value
    }

    //if no filters have been set...
    if(existingFilterAttributes.length <= 1) {
      existingFilterAttributes[0] = "saturate(" + satValue + "%)";
    }
  }

  enterAllAttributes(existingFilterAttributes, video);
  //applies CSS filters to video
}
