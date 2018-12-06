window.onload = function () {
  var nav = document.getElementsByTagName('nav')[0];
  var header = document.getElementsByTagName('header')[0];
  var main = document.getElementsByTagName('main')[0];

  window.onscroll = function () {
    if (window.pageYOffset >= header.offsetHeight) {
      nav.classList.add('fixed-top');
      main.classList.add('fixed-top-nav-padding');
    } else {
      nav.classList.remove('fixed-top');
      main.classList.remove('fixed-top-nav-padding');
    }
  };
};