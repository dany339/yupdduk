/* BRAND!!!---------------------------------------------- */

// allergie swiper(MENU)
if ($(".online-slider").length) {
  const allergieSwiper = new Swiper(".online-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".online-slider-wrap .swiper-pagination",
      type: "fraction",
    },

    breakpoints: {
      1440: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}
