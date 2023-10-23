//Mouse
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});


//Dark light mode toggle
var darkModeSwitch = document.querySelector('header nav ul li:first-of-type button');

darkModeSwitch.onclick = switchTheme

function switchTheme() {
    var bodySwitchColor = document.querySelector('body');
    var iconDarkmode = document.querySelector('header nav ul li:first-of-type button img');

  bodySwitchColor.classList.toggle('darkmode');
  iconDarkmode.classList.toggle('upsidedown');
}


//Reduced motion toogle
var motionSwitch = document.querySelector('header nav ul li:last-of-type button');

motionSwitch.onclick = motionYesNo

function motionYesNo() {
    var motionInPage = document.querySelector('body');
    var iconMotion = document.querySelector('header nav ul li:last-of-type button img');

    motionInPage.classList.toggle('reducedmotion');
    iconMotion.classList.toggle('upsidedown');
}

// var menuBtn = document.querySelector('header button');

// menuBtn.onclick = foldMenu

// function foldMenu() {
//   var menuBtn = document.querySelector('header nav');
//   var lineOne = document.querySelector('header button span:nth-of-type(1)');
//   var lineTwo = document.querySelector('header button span:nth-of-type(2)');
//   var lineThree = document.querySelector('header button span:nth-of-type(3)');

//   menuBtn.classList.toggle('showmenu');
//   lineOne.classList.toggle('rotateplus');
//   lineTwo.classList.toggle('leave');
//   lineThree.classList.toggle('rotatemin');
// }





// //Intersection observer code
// const flyInUnder = document.querySelector('main section:nth-of-type(4)');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.2
// });

// observer.observe(flyInUnder);