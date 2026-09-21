// Crown Packing And Shipping - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('open');
      body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav when clicking overlay
    mainNav.addEventListener('click', function (e) {
      if (e.target === mainNav) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
      }
    });

    // Close nav on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        body.style.overflow = '';
      }
    });
  }

  // --- Active Nav Link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.endsWith(currentPage))) {
      link.classList.add('active');
    }
  });

  // --- Contact Form Submit ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const successMsg = document.getElementById('successMsg');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Get Free Quote';
        btn.disabled = false;
        contactForm.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
        }
      }, 1400);
    });
  }

  // --- Counter Animation ---
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString() + (el.getAttribute('data-suffix') || '');
    }, 16);
  }

  const counters = document.querySelectorAll('.counter-number[data-target]');
  if (counters.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => observer.observe(c));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Sticky header shadow ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,0.15)'
        : '0 2px 12px rgba(0,0,0,0.10)';
    });
  }

  // --- Back to top button ---
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
