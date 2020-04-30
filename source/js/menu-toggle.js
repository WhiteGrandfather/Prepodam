'use strict';

(function () {
  var pageHeaderElement = document.querySelector('.page-header');
  var navMainElement = pageHeaderElement.querySelector('.page-header__nav-container');
  var menuToggleElement = pageHeaderElement.querySelector('.menu-toggle');
  var userNavElement = pageHeaderElement.querySelector('.user-nav');

  pageHeaderElement.classList.remove('page-header--nojs');
  navMainElement.classList.remove('page-header__nav-container--nojs');
  userNavElement.classList.remove('user-nav--nojs');
  navMainElement.classList.add('page-header__nav-container--closed');
  userNavElement.classList.add('user-nav--closed');

  var onMenuToggle = function () {
    if (navMainElement.classList.contains('page-header__nav-container--closed')) {
      navMainElement.classList.remove('page-header__nav-container--closed');
      navMainElement.classList.add('page-header__nav-container--opened');
      menuToggleElement.classList.add('menu-toggle--cross');
      pageHeaderElement.classList.add('page-header--nav-container-opened');
      userNavElement.classList.remove('user-nav--closed');
      userNavElement.classList.add('user-nav--opened');
    } else {
      navMainElement.classList.add('page-header__nav-container--closed');
      navMainElement.classList.remove('page-header__nav-container--opened');
      menuToggleElement.classList.remove('menu-toggle--cross');
      pageHeaderElement.classList.remove('page-header--nav-container-opened');
      userNavElement.classList.add('user-nav--closed');
      userNavElement.classList.remove('user-nav--opened');
    }

    // if (userNavElement.classList.contains('user-nav--closed')) {
    //   userNavElement.classList.remove('user-nav--closed');
    //   userNavElement.classList.add('user-nav--opened');
    //   menuToggleElement.classList.add('menu-toggle--cross');
    // } else {
    //   userNavElement.classList.add('user-nav--closed');
    //   userNavElement.classList.remove('user-nav--opened');
    //   menuToggleElement.classList.remove('menu-toggle--cross');
    // }
  };

  menuToggleElement.addEventListener('click', onMenuToggle);
})()
