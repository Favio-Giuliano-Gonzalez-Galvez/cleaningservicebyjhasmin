    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu li a').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));








    // Services Section Animation
document.addEventListener('DOMContentLoaded', function() {
  // Animate service cards on scroll
  const serviceCards = document.querySelectorAll('.service-card');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  serviceCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
  
  // Service card hover effect for touch devices
  if ('ontouchstart' in window) {
    serviceCards.forEach(card => {
      card.addEventListener('touchstart', function() {
        this.classList.toggle('hover-effect');
      });
    });
  }
});








// Smooth scroll para enlaces de ancla con offset para el header fijo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Actualizar la URL sin recargar la página
      history.pushState(null, null, targetId);
    }
  });
});










// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('cleaningForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const email = document.getElementById('email').value;
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // If validation passes, prepare email
      const service = document.getElementById('service').value || 'Not specified';
      const phone = document.getElementById('phone').value || 'Not provided';
      
      const subject = `New Cleaning Service Inquiry: ${service}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      
      // Open email client
      window.location.href = `mailto:jgalvezf93@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success message
      alert('Thank you for your message! Your email client will open to send your message.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Animate contact methods on scroll
  const contactMethods = document.querySelectorAll('.contact-method');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  contactMethods.forEach(method => {
    method.style.opacity = 0;
    method.style.transform = 'translateX(-30px)';
    method.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(method);
  });
});













// About Section Animation and Image Carousel
document.addEventListener('DOMContentLoaded', function() {
  // Image Carousel Functionality
  const initCarousel = () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;
    let carouselInterval;

    // Create dots for each slide
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    // Function to go to a specific slide
    const goToSlide = (slideIndex) => {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      
      currentSlide = slideIndex;
      
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    };

    // Function to go to next slide
    const nextSlide = () => {
      const nextIndex = (currentSlide + 1) % slides.length;
      goToSlide(nextIndex);
    };

    // Start auto carousel
    const startCarousel = () => {
      carouselInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    };

    // Stop auto carousel when hovering over carousel
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(carouselInterval);
    });

    // Resume auto carousel when not hovering
    carouselContainer.addEventListener('mouseleave', () => {
      startCarousel();
    });

    // Start the carousel
    startCarousel();
  };

  // Initialize carousel if it exists on the page
  if (document.querySelector('.image-carousel')) {
    initCarousel();
  }

  // Animate about content on scroll
  const aboutContent = document.querySelector('.about-content');
  const aboutImage = document.querySelector('.about-image');
  const valueCards = document.querySelectorAll('.value-card');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Animate about content
  if (aboutContent) {
    aboutContent.style.opacity = 0;
    aboutContent.style.transform = 'translateX(-30px)';
    aboutContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(aboutContent);
  }
  
  // Animate about image
  if (aboutImage) {
    aboutImage.style.opacity = 0;
    aboutImage.style.transform = 'translateX(30px)';
    aboutImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(aboutImage);
  }
  
  // Animate value cards
  valueCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    observer.observe(card);
  });
  
  // Add hover effect for touch devices
  if ('ontouchstart' in window) {
    valueCards.forEach(card => {
      card.addEventListener('touchstart', function() {
        this.classList.toggle('hover-effect');
      });
    });
  }
});











// Footer functionality
document.addEventListener('DOMContentLoaded', function() {
  // Newsletter form validation
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
    });
  }
  
  // Animate footer elements on scroll
  const footerColumns = document.querySelectorAll('.footer-column');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  footerColumns.forEach((column, index) => {
    column.style.opacity = 0;
    column.style.transform = 'translateY(30px)';
    column.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(column);
  });
});