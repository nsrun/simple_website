// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    if (body.dataset.theme === 'dark') {
      body.dataset.theme = 'light';
    } else {
      body.dataset.theme = 'dark';
    }
    localStorage.setItem('theme', body.dataset.theme);
  });
}

// Load saved theme on start
const savedTheme = localStorage.getItem('theme') || 'light';
body.dataset.theme = savedTheme;

// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    if (name && email && message) {
      alert('Thank you, ' + name + '! Your message has been sent. I'll reply soon.');
      contactForm.reset();
    } else {
      alert('Please fill all fields.');
    }
  });
}

// Intersection Observer for scroll animations (polyfill-free, modern browsers)
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    }
  }, observerOptions);

  // Observe sections and cards
  const elements = document.querySelectorAll('.section, .service-card');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  }
}

// Service cards hover effects
const serviceCards = document.querySelectorAll('.service-card');
for (let i = 0; i < serviceCards.length; i++) {
  const card = serviceCards[i];
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-12px) scale(1.02)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
}

console.log('Simple Portfolio loaded successfully!');

