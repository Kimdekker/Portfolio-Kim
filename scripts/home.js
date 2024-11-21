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


//Observer for projects
//FIRST
const flyInUnder = document.querySelector('.projectOne');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});
observer.observe(flyInUnder);
//SECOND
const flyInUnderScd = document.querySelector('.projectTwo');
const observerScd = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerScd.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});
observerScd.observe(flyInUnderScd);
//THIRD
const flyInUnderTrd = document.querySelector('.projectThree');
const observerTrd = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerTrd.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});
observerTrd.observe(flyInUnderTrd);