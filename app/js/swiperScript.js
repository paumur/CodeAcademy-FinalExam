"use strict";

// SWIPER SCRIPT --------------------------------------------------------------
var section3Buttons = document.getElementsByClassName("card-hover");
slider3.slideTo(0);
section3Buttons[0].classList.add("selected");

for (var x of section3Buttons) {
  x.addEventListener("click", function () {
    for (var y of section3Buttons) {
      y.classList.remove("selected");
    }

    this.classList.add("selected");

    var index = this.getAttribute("index");

    slider3.slideTo(index);
  });
}

slider3.on("slideChange", function () {
  var realIndex = slider3.realIndex;
  if (realIndex === 0) {
    var buttons = document.getElementsByClassName("card-hover");
    for (var y of buttons) {
      y.classList.remove("selected");
    }

    buttons[1].classList.add("selected");
  }
  if (realIndex === 1) {
    var buttons = document.getElementsByClassName("card-hover");
    for (var y of buttons) {
      y.classList.remove("selected");
    }

    buttons[2].classList.add("selected");
  }
  if (realIndex === 2) {
    var buttons = document.getElementsByClassName("card-hover");
    for (var y of buttons) {
      y.classList.remove("selected");
    }

    buttons[0].classList.add("selected");
  }
});

// ---------------------------------------------------------------------------
