'use strict'
window.addEventListener('DOMContentLoaded', function(){
    let menu = document.querySelector('.header__menu');
    let buttonOpen = document.querySelector('.menu-open');
    let buttonClose = document.querySelector('.menu-close');
    buttonOpen.addEventListener('click',openMenu);
    buttonClose.addEventListener('click',clodesMenu);


    function openMenu(){
        menu.classList.remove('hidden__menu');
        menu.classList.add('visible__menu');
        buttonClose.classList.remove('hidden__button-close');
        buttonClose.classList.add('visible__button-close');
        document.body.classList.add('lock');
    }
    function clodesMenu(){
        menu.classList.remove('visible__menu');
        menu.classList.add('hidden__menu');
        buttonClose.classList.remove('visible__button-close');
        buttonClose.classList.add('hidden__button-close');
        document.body.classList.remove('lock');
        
    }
})