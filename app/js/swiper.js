const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  },
});

var swiper2 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper2-pagination",
  },
  direction: "horizontal",
  loop: true,

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },
});

var slider3 = new Swiper(".slider3", {
  loop: "true",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
