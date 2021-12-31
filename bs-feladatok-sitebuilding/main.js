'use strict';
const menu = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        menu.classList.add("navbar-white-bg");
    }
    else {
        menu.classList.remove("navbar-white-bg");
    }
};