'use strict';
const menu = document.querySelector('.menu');
window.onscroll = function () {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        menu.classList.add("white-bg");
    }
    else {
        menu.classList.remove("white-bg");
    }
};