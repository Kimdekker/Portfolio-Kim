//Observer aside links
const links = document.querySelectorAll('main > div > aside nav ul li a');
const sections = document.querySelectorAll('main > div > div > section');

const focusState = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetId = entry.target.getAttribute('href').substring(1);
      const correspondingSection = document.getElementById(targetId);
      
      if (correspondingSection) {
        links.forEach(link => link.classList.remove('focused'));
        entry.target.classList.add('focused');
      }
    }
  });
}, {
  threshold: [0.5]  // Adjust the threshold as needed
});

links.forEach(link => {
  focusState.observe(link);
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
      const targetId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`main > div > aside nav ul li a[href="#${targetId}"]`);
      
      if (correspondingLink) {
        links.forEach(link => link.classList.remove('focused'));
        correspondingLink.classList.add('focused');
      }
    }
  });
});
