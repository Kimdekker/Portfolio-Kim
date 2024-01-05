console.log("Hello theyer");

//Observer for projects

//FIRST
const flyInUnderCases = document.querySelector('.projectOne');
const observerCases = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerCases.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

observerCases.observe(observerCases);



//SECOND
const flyInUnderScdCases = document.querySelector('.projectTwo');
const observerScdCases = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerScdCases.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

observerScdCases.observe(observerScdCases);



//THIRD
const flyInUnderTrdCases = document.querySelector('.projectThree');
const observerTrdCases = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerTrdCases.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

observerTrdCases.observe(observerTrdCases);