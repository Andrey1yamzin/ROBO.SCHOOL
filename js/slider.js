'use strict'

new Swiper('.coaches-slider', {
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
scrollbar: {
    el:'.swiper-scrollbar',
    draggable: true
},
//отключение перетаскивания
simulateTouch:false,
//колличество для показа
slidesPerView:3,
//отступы между слайдами
spaceBetween:40,
//количество перелистыванных слайдов
slidesPerGroup:1,
//отцентрирование 1 слайда
// centeredSlides: true,
//бесконечность
// loop: true,
// loopedSlides:1,
freeMode: false,
// spped:100,
}
);

//колличество показов и перелистываний нужно через функцию получать при разрешении разные выводы
