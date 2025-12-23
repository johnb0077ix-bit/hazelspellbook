// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('active');
  
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.classList.toggle('active');
}

// Fade In Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
  
  // Remove loader after page loads
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 2500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 1)';
    header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
});

// Add parallax effect to hero sections
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroes = document.querySelectorAll('.hero');
  
  heroes.forEach(hero => {
    const speed = 0.5;
    hero.style.backgroundPositionY = -(scrolled * speed) + 'px';
  });
});