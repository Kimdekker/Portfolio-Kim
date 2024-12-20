//Mouse
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});



//Loader
window.addEventListener('load', function () {
  const loaderWrapper = document.querySelector('.loader-wrapper');

  // Simulate loading time (in this case, 2.1 seconds)
  setTimeout(function () {
    loaderWrapper.classList.add('loaded');
  }, 2100);
});




//Dark light mode toggle
var darkModeSwitch = document.querySelector('header nav ul li:nth-of-type(2) button');

darkModeSwitch.onclick = switchTheme;

// Check local storage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('darkmode');
  document.querySelector('header nav ul li:nth-of-type(2) button img').classList.add('upsidedown');
}

function switchTheme() {
  var bodySwitchColor = document.querySelector('body');
  var iconDarkmode = document.querySelector('header nav ul li:nth-of-type(2) button img');

  bodySwitchColor.classList.toggle('darkmode');
  iconDarkmode.classList.toggle('upsidedown');

  // Update local storage to reflect dark mode preference
  if (bodySwitchColor.classList.contains('darkmode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}



//Menu openen
var menuBtn = document.querySelector('header nav:nth-of-type(2) button');

menuBtn.onclick = foldMenu

function foldMenu() {
  var foldedMenu = document.querySelector('header nav:last-of-type');
  var lineOne = document.querySelector('header nav:nth-of-type(2) button span:nth-of-type(1)');
  var lineTwo = document.querySelector('header nav:nth-of-type(2) button span:nth-of-type(2)');
  var lineThree = document.querySelector('header nav:nth-of-type(2) button span:nth-of-type(3)');

  foldedMenu.classList.toggle('showmenu');
  lineOne.classList.toggle('rotateplus');
  lineTwo.classList.toggle('leave');
  lineThree.classList.toggle('rotatemin');
}



