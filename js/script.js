window.onload = function () {
  // navbar
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

  // timeline
  var timelineBlocksDiv = document.querySelector('#tiles');

  var startDate = new Date(2018, 5, 23);
  var endDate = new Date(2019, 8, 25);
  var now = new Date();

  var differenceTotal = endDate.getTime() - startDate.getTime();
  var differenceNow = now.getTime() - startDate.getTime();
  var differenceRatio = 1;

  if (now < endDate) {
    differenceRatio = Math.floor(differenceNow / differenceTotal * 10) / 10
  }

  var imageElements = '';
  var imageFirst = '<img src="img/earth_';
  var imageLast = '.png" alt="Earth Block">';

  for (var i = 0; i < differenceRatio * 10 - 1; i += 1) {
    imageElements += imageFirst + (i === 0 ? 'left' : 'middle') + imageLast;
  }
  imageElements += imageFirst + 'right' + imageLast;

  timelineBlocksDiv.innerHTML += imageElements;

  animateScript();

  // timeline animation
  var tID;

  function stopAnimate() {
    clearInterval(tID);
  }

  function animateScript() {
    var position = 192; //start position for the image slicer
    var left = -50; //start position for the image slicer
    var interval = 100; //100 ms of interval for the setInterval()
    var posDiff = 192; //diff as a variable for position offset
    var leftDiff = 15;

    var moleElement = timelineBlocksDiv.getElementsByTagName('p')[0];

    tID = setInterval(function () {
      moleElement.style.backgroundPosition = '-' + position + 'px';
      if (position < 1728) {
        position += posDiff;
      } else {
        position = 192;
      }

      moleElement.style.left = left + 'px';
      if (left < timelineBlocksDiv.offsetWidth * differenceRatio - 192*0.8) {
        left += leftDiff;
      } else {
        moleElement.style.background = 'url(\'img/mole.png\')';
        stopAnimate();
      }
    }, interval);
  }
};