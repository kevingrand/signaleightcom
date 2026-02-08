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

    const cards = document.querySelectorAll('.service-card');
    let activeCard = null;

    cards.forEach((card) => {
      const glow = document.createElement('div');
      glow.classList.add('card-glow');
      card.appendChild(glow);
    });

    function lightUp(card) {
      if (card === activeCard) return;

      if (activeCard) {
        const prev = activeCard;
        gsap.to(prev.querySelector('.card-glow'), { opacity: 0, duration: 0.5, ease: 'power2.inOut' });
        gsap.to(prev.querySelector('.service-icon'), { color: 'rgba(255,255,255,0.5)', duration: 0.5, ease: 'power2.inOut' });
        gsap.to(prev.querySelector('.service-name'), { color: '#FFFFFF', duration: 0.5, ease: 'power2.inOut' });
        gsap.to(prev.querySelector('.service-desc'), { color: 'rgba(255,255,255,0.45)', duration: 0.5, ease: 'power2.inOut' });
      }

      activeCard = card;
      gsap.to(card.querySelector('.card-glow'), { opacity: 1, duration: 0.6, ease: 'power2.inOut' });
      gsap.to(card.querySelector('.service-icon'), { color: '#050505', duration: 0.6, ease: 'power2.inOut' });
      gsap.to(card.querySelector('.service-name'), { color: '#050505', duration: 0.6, ease: 'power2.inOut' });
      gsap.to(card.querySelector('.service-desc'), { color: 'rgba(5,5,5,0.6)', duration: 0.6, ease: 'power2.inOut' });
    }

    function dimAll() {
      if (!activeCard) return;
      const prev = activeCard;
      activeCard = null;
      gsap.to(prev.querySelector('.card-glow'), { opacity: 0, duration: 0.5, ease: 'power2.inOut' });
      gsap.to(prev.querySelector('.service-icon'), { color: 'rgba(255,255,255,0.5)', duration: 0.5, ease: 'power2.inOut' });
      gsap.to(prev.querySelector('.service-name'), { color: '#FFFFFF', duration: 0.5, ease: 'power2.inOut' });
      gsap.to(prev.querySelector('.service-desc'), { color: 'rgba(255,255,255,0.45)', duration: 0.5, ease: 'power2.inOut' });
    }

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => lightUp(card),
        onEnterBack: () => lightUp(card),
        onLeave: () => { if (activeCard === card) dimAll(); },
        onLeaveBack: () => { if (activeCard === card) dimAll(); }
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

  /* --- H. Portfolio Header Reveal --- */
  const portfolioHeader = document.querySelectorAll('.portfolio .section-header .line-text');
  if (portfolioHeader.length) {
    gsap.to(portfolioHeader, {
      y: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.portfolio .section-header',
        start: 'top 80%'
      }
    });
  }

  /* --- I. Portfolio Draggable Carousel --- */
  const track = document.querySelector('.portfolio-track');
  if (track) {
    const slides = track.querySelectorAll('.portfolio-slide');
    const totalWidth = Array.from(slides).reduce((sum, s) => sum + s.offsetWidth, 0)
      + (slides.length - 1) * parseFloat(getComputedStyle(track).gap || 0);
    const maxDrag = -(totalWidth - track.parentElement.offsetWidth);

    const autoScroll = gsap.to(track, {
      x: maxDrag,
      duration: 15,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

    if (typeof Draggable !== 'undefined') {
      Draggable.create(track, {
        type: 'x',
        bounds: { minX: maxDrag, maxX: 0 },
        inertia: true,
        edgeResistance: 0.75,
        throwResistance: 2000,
        onDragStart: () => autoScroll.pause(),
        onThrowComplete: () => {
          const currentX = gsap.getProperty(track, 'x');
          const progress = Math.abs(currentX / maxDrag);
          autoScroll.progress(progress).play();
        }
      });
    }

    track.addEventListener('mouseenter', () => autoScroll.pause());
    track.addEventListener('mouseleave', () => autoScroll.play());

    gsap.from(slides, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.portfolio',
        start: 'top 75%'
      }
    });
  }

  /* --- J. Footer Horizontal Scroll Shift --- */
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
