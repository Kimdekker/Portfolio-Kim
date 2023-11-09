//Mouse
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});



//Loader
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');

    // Simulate loading time (in this case, 2.1 seconds)
    setTimeout(function() {
        loaderWrapper.classList.add('loaded');
    }, 2100);
});




//Dark light mode toggle
var darkModeSwitch = document.querySelector('header nav ul li:first-of-type button');

darkModeSwitch.onclick = switchTheme;

// Check local storage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('darkmode');
    document.querySelector('header nav ul li:first-of-type button img').classList.add('upsidedown');
}

function switchTheme() {
    var bodySwitchColor = document.querySelector('body');
    var iconDarkmode = document.querySelector('header nav ul li:first-of-type button img');

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



//Observer for left projects
const flyInUnder = document.querySelector('.leftProject');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

observer.observe(flyInUnder);



//Observer for the brain

const brain = document.querySelector('.brain');
let addedClass = false;

const scrollbrain = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && window.scrollY > window.innerHeight * 0.5) {
      entry.target.classList.add('scrollbrain');
      addedClass = true;
    }
  });
}, {
  threshold: [0]
});

scrollbrain.observe(brain);

window.addEventListener('scroll', () => {
  if (!addedClass && window.scrollY > window.innerHeight * 0.5) {
    brain.classList.add('scrollbrain');
    addedClass = true;
  } else if (addedClass && window.scrollY <= window.innerHeight * 0.5) {
    brain.classList.remove('scrollbrain');
    addedClass = false;
  }
});


//Observer for H2 of homepage intro
const left = document.querySelector('.left');
let addLeftSwing = false;

const swingLeft = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && window.scrollY > window.innerHeight * 0.4) {
      entry.target.classList.add('swingleft');
      addLeftSwing = true;
    }
  });
}, {
  threshold: [0]
});

swingLeft.observe(left);

window.addEventListener('scroll', () => {
  if (!addLeftSwing && window.scrollY > window.innerHeight * 0.4) {
    left.classList.add('swingleft');
    addLeftSwing = true;
  } else if (addLeftSwing && window.scrollY <= window.innerHeight * 0.4) {
    left.classList.remove('swingleft');
    addLeftSwing = false;
  }
});




//Observer for skills part of homepage intro
const left2 = document.querySelector('.left2');
let addLeftSwing2 = false;

const swingLeft2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && window.scrollY > window.innerHeight * 0.4) {
      entry.target.classList.add('swingleft');
      addLeftSwing2 = true;
    }
  });
}, {
  threshold: [0]
});

swingLeft2.observe(left2);

window.addEventListener('scroll', () => {
  if (!addLeftSwing2 && window.scrollY > window.innerHeight * 0.4) {
    left2.classList.add('swingleft');
    addLeftSwing2 = true;
  } else if (addLeftSwing2 && window.scrollY <= window.innerHeight * 0.4) {
    left2.classList.remove('swingleft');
    addLeftSwing2 = false;
  }
});






//Observer for right part of homepage intro
const right = document.querySelector('.right');
let addrightSwing = false;

const swingRight = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && window.scrollY > window.innerHeight * 0.4) {
      entry.target.classList.add('swingright');
      addrightSwing = true;
    }
  });
}, {
  threshold: [0]
});

swingRight.observe(right);

window.addEventListener('scroll', () => {
  if (!addrightSwing && window.scrollY > window.innerHeight * 0.4) {
    right.classList.add('swingright');
    addrightSwing = true;
  } else if (addrightSwing && window.scrollY <= window.innerHeight * 0.4) {
    right.classList.remove('swingright');
    addrightSwing = false;
  }
});


