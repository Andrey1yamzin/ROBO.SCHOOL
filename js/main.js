'use strict'
window.addEventListener('DOMContentLoaded', function(){
    //меню бургер
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
// ------------------------------------------------------------------------- //

    let parentFooterBlock = document.querySelector(".footer-content");
    let parentChildrenFooterBlock = document.querySelector(".footer__logo");
    let portableTlement = document.querySelector(".footer__subtitle");

    window.addEventListener('resize', function(){
        let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        if(viewportWidth <= 480){
            if(!portableTlement.classList.contains('rescheduled')){
                parentFooterBlock.insertBefore(portableTlement, parentFooterBlock.children[2]);
                portableTlement.classList.add('rescheduled');
            }
        }else{
            if(portableTlement.classList.contains('rescheduled')){
                parentChildrenFooterBlock.insertBefore(portableTlement, parentChildrenFooterBlock.children[1]);
                portableTlement.classList.remove('rescheduled');
            }
        }
    })
})