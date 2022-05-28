"use strict";

const mobileNav = document.getElementsByClassName("mobileNav")[0];
const mobileNavDiv = document.getElementsByClassName("mobile-nav")[0];
const mobileNavButtons = document.getElementsByClassName("disable-mobile-nav");

mobileNav.addEventListener("click", function () {
  mobileNavDiv.classList.toggle("toggleMobileNav");
  mobileNav.classList.toggle("toggleButtonUp");
});

// WHEN PRESSED ON MOBILE LINK DISABLES MOBILE NAV BAR

for (x of mobileNavButtons) {
  x.addEventListener("click", () => {
    mobileNavDiv.classList.toggle("toggleMobileNav");
    mobileNav.classList.toggle("toggleButtonUp");
  });
}
