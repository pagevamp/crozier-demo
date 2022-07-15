// import $ from 'jquery';
// import 'slick-carousel';
// class slider {
//     constructor() {
//         this.events();
//         this.sliderInit();
//         this.partnerCarousel();
//         this.articleCarousel();
//     }

//     slider01() {
//         return {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             mobileFirst: true,
//             arrows: false,
import Swiper from "swiper/bundle";

export function swiper() {
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

swiper();


