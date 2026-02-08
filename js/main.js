/* ========================================
   SIGNALEIGHT — GSAP Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* --- A. Navbar Logo Hover --- */
  const logoEl = document.querySelector('.navbar-logo');
  const logoPaths = document.querySelectorAll('.logo-path');

  if (logoEl && logoPaths.length) {
    logoEl.addEventListener('mouseenter', () => {
      gsap.to(logoPaths, {
        rotation: 15,
        duration: 0.4,
        ease: 'power3.out',
        transformOrigin: 'center center'
      });
    });

    logoEl.addEventListener('mouseleave', () => {
      gsap.to(logoPaths, {
        rotation: 0,
        duration: 0.4,
        ease: 'power3.out',
        transformOrigin: 'center center'
      });
    });
  }

  /* --- B. Hero Text Reveal --- */
  const heroLines = document.querySelectorAll('.hero .line-text');
  if (heroLines.length) {
    gsap.to(heroLines, {
      y: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.15,
      delay: 0.5
    });
  }

  /* --- C. Hero Video Parallax --- */
  const videoContainer = document.querySelector('.hero-video-container');
  if (videoContainer) {
    gsap.to(videoContainer, {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  /* --- D. Services Section Header Reveal --- */
  const servicesHeader = document.querySelectorAll('.services .section-header .line-text');
  if (servicesHeader.length) {
    gsap.to(servicesHeader, {
      y: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.services .section-header',
        start: 'top 80%'
      }
    });
  }

  /* --- E. Services Cards Stagger --- */
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length) {
    gsap.from(serviceCards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
      }
    });
  }

  /* --- F. Mobile Card Light-Up on Scroll --- */
  const isMobile = window.matchMedia('(max-width: 768px)');

  function setupCardLightUp() {
    if (!isMobile.matches) return;

    document.querySelectorAll('.service-card').forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 65%',
        end: 'bottom 35%',
        onEnter: () => card.classList.add('is-lit'),
        onLeave: () => card.classList.remove('is-lit'),
        onEnterBack: () => card.classList.add('is-lit'),
        onLeaveBack: () => card.classList.remove('is-lit')
      });
    });
  }

  setupCardLightUp();

  /* --- G. Contact Section Text Reveal --- */
  const contactHeader = document.querySelectorAll('.contact .section-header .line-text');
  if (contactHeader.length) {
    gsap.to(contactHeader, {
      y: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.contact .section-header',
        start: 'top 80%'
      }
    });
  }

  /* --- G. Magnetic CTA Button --- */
  const ctaPill = document.querySelector('.cta-pill');
  if (ctaPill) {
    ctaPill.addEventListener('mousemove', (e) => {
      const rect = ctaPill.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(ctaPill, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power3.out'
      });
    });

    ctaPill.addEventListener('mouseleave', () => {
      gsap.to(ctaPill, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  }

  /* --- H. Footer Horizontal Scroll Shift --- */
  const footerLogo = document.querySelector('.footer-logo');
  if (footerLogo) {
    gsap.to(footerLogo, {
      x: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }

  /* --- I. Contact Form Reveal --- */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    gsap.from(contactForm, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 85%'
      }
    });
  }
});
