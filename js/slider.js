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
simulateTouch:true,



//количество перелистыванных слайдов
slidesPerGroup:1,
//отцентрирование 1 слайда
// centeredSlides: true,
//бесконечность
// loop: true,
// loopedSlides:1,
freeMode: false,
// spped:100,
breakpoints: {
    320:{
        slidesPerView:1,
        spaceBetween:20,
    },
    481:{
        slidesPerView:2,
        spaceBetween:20,
    },
    637:{
        slidesPerView:3,
        spaceBetween:20,
    },
    
    767:{
        slidesPerView:3,
        spaceBetween:40,
    },
    992:{
        slidesPerView:3,
        spaceBetween:30,
    },
    1920:{
        slidesPerView:3,
        spaceBetween:40,
    }
}
}
);

//колличество показов и перелистываний нужно через функцию получать при разрешении разные выводы
