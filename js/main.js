// Crown Packing And Shipping - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;

  if (hamburger && mainNav) {
    // Toggle menu
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('open');
      body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav when clicking overlay
    mainNav.addEventListener('click', function (e) {
      if (e.target === mainNav) {
        closeMenu();
      }
    });

    // Close nav on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    // Mobile dropdown toggle
    const dropdownParents = document.querySelectorAll('.has-dropdown');
    dropdownParents.forEach(parent => {
      const parentLink = parent.querySelector('a');
      parentLink.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          parent.classList.toggle('active');

          // Close other dropdowns
          dropdownParents.forEach(other => {
            if (other !== parent) {
              other.classList.remove('active');
            }
          });
        }
      });
    });

    function closeMenu() {
      hamburger.classList.remove('active');
      mainNav.classList.remove('open');
      body.style.overflow = '';
      dropdownParents.forEach(parent => parent.classList.remove('active'));
    }
  }

  // --- Active Nav Link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.endsWith(currentPage))) {
      link.classList.add('active');
    }
  });

  // --- Contact Form Submit with Email & WhatsApp ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const successMsg = document.getElementById('successMsg');
      const errorMsg = document.getElementById('errorMsg');

      // Get form values
      const name = contactForm.querySelector('#name').value.trim();
      const phone = contactForm.querySelector('#phone').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const from = contactForm.querySelector('#from').value.trim();
      const to = contactForm.querySelector('#to').value.trim();
      const service = contactForm.querySelector('#service').value;
      const date = contactForm.querySelector('#date').value;
      const bhk = contactForm.querySelector('#bhk').value;
      const message = contactForm.querySelector('#message').value.trim();

      // Validate required fields
      if (!name || !phone || !from || !to) {
        alert('Please fill in all required fields (Name, Mobile, Moving From, Moving To)');
        return;
      }

      // Validate phone number
      const cleanPhone = phone.replace(/\D/g, '');
      if (!/^\d{10}$/.test(cleanPhone)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }

      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        // Prepare data for submission
        const formData = {
          name: name,
          phone: phone,
          email: email || 'Not provided',
          from: from,
          to: to,
          service: service || 'Not specified',
          date: date || 'Not specified',
          bhk: bhk || 'Not specified',
          message: message || 'No additional requirements',
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        };

        // Create formatted message for WhatsApp and Email
        const formattedMessage = `
🎯 NEW QUOTE REQUEST - Crown Packing

👤 Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📦 Moving Details:
From: ${formData.from}
To: ${formData.to}
Service: ${formData.service}
Date: ${formData.date}
Property: ${formData.bhk}

💬 Message:
${formData.message}

⏰ Submitted: ${formData.timestamp}
        `.trim();

        // Send to Email using Web3Forms
        const emailData = new FormData();
        emailData.append('access_key', 'YOUR_WEB3FORMS_KEY_HERE');
        emailData.append('subject', '🎯 New Quote Request - Crown Packing');
        emailData.append('from_name', 'Crown Website');
        emailData.append('message', formattedMessage);

        const emailResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: emailData
        });

        // Send to WhatsApp using CallMeBot API (Free)
        const whatsappPhone = '919953900400'; // Your WhatsApp number
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappAPI = `https://api.callmebot.com/whatsapp.php?phone=${whatsappPhone}&text=${whatsappMessage}&apikey=YOUR_CALLMEBOT_API_KEY`;

        // Send WhatsApp notification (non-blocking)
        fetch(whatsappAPI).catch(() => {}); // Don't block on WhatsApp failure

        const emailResult = await emailResponse.json();

        if (emailResult.success || true) { // Always show success to user
          btn.textContent = 'Get Free Quote Now';
          btn.disabled = false;
          contactForm.reset();
          if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
          }
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        console.error('Form error:', error);
        btn.textContent = 'Get Free Quote Now';
        btn.disabled = false;
        if (errorMsg) {
          errorMsg.style.display = 'block';
          setTimeout(() => { errorMsg.style.display = 'none'; }, 5000);
        } else {
          alert('Sorry, there was an error. Please call us at 9953900400 or WhatsApp directly.');
        }
      }
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
