//initialise array of attributes
var existingFilterAttributes = new Array();

//sets filter attributes
function enterAllAttributes(existingFilterAttributes, video) {
  //console.log(existingFilterAttributes);
  video.style.filter = existingFilterAttributes.join(" ");
  //solution provided by u/Michelle-Obamas-Arms on Reddit
}

function setGrayscale() {
  //gets video
  var video = document.getElementById("posting-letter");
  //console.log(video);
  //gets grayscale value from grayscale control
  var gsValue = document.getElementById("grayscaleControl").value;
  
  //checks whether value entered is valid, displays alert if invalid
  invalidValueAlert(gsValue, "invalidValueAlertGrayscale", 0, 100);

  //if no filters have been set...
  if(video.style.filter === "") {
    video.style.filter = "grayscale(" + gsValue + "%)";
    console.log(`No filters previously set. Directly applying filter "grayscale(${gsValue}%)".`);
    return;
    //immediately exits function (no filters set)
  }

  existingFilterAttributes = video.style.filter.split(" ");
  //returns existing filter attributes as array
  //cycle through each one to check for grayscale
  //then set it
  var existingGSAttributeChecker = false;
  for(var attributeNum in existingFilterAttributes) {
    //checks if there is existing grayscale attribute
    if(existingFilterAttributes[attributeNum].includes("grayscale")) {
      existingGSAttributeChecker = true;
      existingFilterAttributes[attributeNum] = "grayscale(" + gsValue + "%)";
      //sets attribute value IN ARRAY ONLY to user-inputted value
      console.log(existingFilterAttributes);
    }
    /* else {
      existingFilterAttributes.push("grayscale(" + gsValue + "%)");
      console.log(existingFilterAttributes);
    } */
  }

  if(existingGSAttributeChecker === false) {
    existingFilterAttributes.push("grayscale(" + gsValue + "%)");
  }
  //reason for multiple application bug: above loop writes one extra grayscale attribute for each non-grayscale attribute.

  enterAllAttributes(existingFilterAttributes, video);
  //applies CSS filters to video
}

function setSaturation() {
  //gets video
  var video = document.getElementById("posting-letter");
  //gets saturation value from saturation control
  var satValue = document.getElementById("saturationControl").value;
  //gets value of saturation control textarea
  
  invalidValueAlert(satValue, "invalidValueAlertSaturation", 0, Infinity);
  //no max value (for deep-frying purposes) so max value is infinity

  //if no filters have been set...
  if(video.style.filter === "") {
    video.style.filter = "saturate(" + satValue + "%)";
    console.log(`No filters previously set. Directly applying filter "saturate(${satValue}%)".`);
    return;
    //immediately exits function (no filters set)
  }

  existingFilterAttributes = video.style.filter.split(" ");
  //returns existing filter attributes as array
  //cycle through each one to check for saturation
  //then set it
  for(var attributeNum in existingFilterAttributes) {
    if(existingFilterAttributes[attributeNum].includes("saturate")) {
      existingFilterAttributes[attributeNum] = "saturate(" + satValue + "%)";
      //sets attribute value IN ARRAY ONLY to user-inputted value
    } else {
      existingFilterAttributes.push("saturate(" + satValue + "%)");
    }
  }

  enterAllAttributes(existingFilterAttributes, video);
  //applies CSS filters to video
}

function setContrast() {
  //gets video
  var video = document.getElementById("posting-letter");
  //console.log(video);
  //gets contrast value from contrast control
  var conValue = document.getElementById("contrastControl").value;

  invalidValueAlert(conValue, "invalidValueAlertContrast", 0, Infinity);
  //no max value (for deep-frying purposes) so max value is infinity
  
  //if no filters have been set...
  if(video.style.filter === "") {
    video.style.filter = "contrast(" + conValue + "%)";
    console.log(`No filters previously set. Directly applying filter "contrast(${conValue}%)".`);
    return;
    //immediately exits function (no filters set)
  }

  existingFilterAttributes = video.style.filter.split(" ");
  //returns existing filter attributes as array
  //cycle through each one to check for contrast
  //then set it
  for(var attributeNum in existingFilterAttributes) {
    if(existingFilterAttributes[attributeNum].includes("contrast")) {
      existingFilterAttributes[attributeNum] = "contrast(" + conValue + "%)";
      //sets attribute value IN ARRAY ONLY to user-inputted value
    } else {
      existingFilterAttributes.push("contrast(" + conValue + "%)");
    }
  }

  enterAllAttributes(existingFilterAttributes, video);
}
