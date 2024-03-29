
//event listener for pressing key
//the e is the event parameter, the event is what is being passed to the event handler
//only needed when we need info relating the the event
//using arrow function
document.addEventListener("keydown", e => {
  //if left arrow is clicked
  if (e.key === "ArrowLeft") {
    //runs function for moving dodger left
    moveDodgerLeft();
    //this would give info about the event. the type, key, etc. list of info
    console.log(e)
  }
});


function moveDodgerLeft() {
  //takes the dodger position in px, so removes px to get it to number format (still a string, just no px)
  const leftNumbers = dodger.style.left.replace("px", "");
  //converts into number format, its just the number, but still in string format
  const left = parseInt(leftNumbers, 10);
  //sets boundary to stay on screen
   if (left > 0) {
    //moves dodger by one px
    dodger.style.left = `${left - 1}px`;
  }
}
//same function for right key, but function format
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);
   if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
