var swiper = new Swiper(".gallery", {
  loop: true,
  speed: 1000,
  spaceBetween:0,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');

swiper.autoplay.stop();

btnStart.addEventListener('click', () => {
  swiper.autoplay.start();
})
btnStop.addEventListener('click', () => {
  swiper.autoplay.stop();
})