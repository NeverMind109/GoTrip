$(function () {
  $(".destinations__photos").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    infinite: true,
    nextArrow:
      '<button class="destinations__slider-button"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="68" height="68" rx="34" fill="#8B8B8B" /><rect width="68" height="68" rx="34" fill="url(#paint0_linear_8748_2)"/><path class="destinations__slider-arrow" d="M37 27L27.3258 33.1563C26.7083 33.5493 26.7083 34.4507 27.3258 34.8437L37 41" stroke="#FEFEFE" stroke-width="5" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_8748_2" x1="35.6806" y1="-19.8022" x2="94.3386" y2="28.6236" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7B4E" /><stop offset="1" stop-color="#FF584E" /></linearGradient></defs></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
