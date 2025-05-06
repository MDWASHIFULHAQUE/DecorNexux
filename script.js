// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Responsive navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Alert when a feature is clicked (demo only)
document.querySelectorAll('.feature').forEach(feature => {
  feature.addEventListener('click', () => {
    alert("This feature will be available soon!");
  });
});

// Contact form validation (if you have a form)
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for contacting us! We will reach out to you soon.');
    contactForm.reset();
  });
}
