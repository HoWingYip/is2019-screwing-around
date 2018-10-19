//checks validity of value entered
/*
arguments: value to check, css id of alert, min value of filter
attribute, max value of filter attribute
*/
function invalidValueAlert(value, elementId, min, max) {
  //checks whether string entered is a number
  var valueIsNum = /^\d+$/.test(value);
  //gets value of grayscale control textarea
  if(!valueIsNum || value < min || value > max) {
    var valueAlert = document.getElementById(elementId);
    valueAlert.style.display = "inline-block";
  }
}
