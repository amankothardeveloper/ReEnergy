"use client";

import { useEffect } from 'react';

/**
 * Custom hook for home page effects and interactions
 * Converted from jQuery to vanilla JavaScript for Next.js compatibility
 */
export default function useHomeEffects() {
  useEffect(() => {
    // Wait for DOM to be ready
    if (typeof window === 'undefined') return;

    // Import AOS (Animate On Scroll) dynamically
    import('aos').then((AOS) => {
      import('aos/dist/aos.css');
      AOS.default.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    });

    // Import WOW.js for elements with 'wow' class
    import('wowjs').then((WOW) => {
      // Import WOW.js CSS
      import('wowjs/css/libs/animate.css');
      
      // Initialize WOW.js
      const wow = new WOW.WOW({
        boxClass: 'wow',      // Class name to reveal on scroll
        animateClass: 'animated', // Animation CSS class
        offset: 0,            // Distance to start animation (px)
        mobile: true,         // Trigger animations on mobile
        live: true,           // Act on asynchronously loaded content
        scrollContainer: null // Optional scroll container selector
      });
      wow.init();
    });

    // Import Swiper dynamically
    let Swiper;
    import('swiper').then((module) => {
      Swiper = module.default;
      initializeSliders();
    });

    // Sidebar Toggle
    const initSidebarToggle = () => {
      const offcanvasClose = document.querySelectorAll('.offcanvas__close, .offcanvas__overlay');
      const sidebarToggle = document.querySelector('.sidebar__toggle');
      const offcanvasInfo = document.querySelector('.offcanvas__info');
      const offcanvasOverlay = document.querySelector('.offcanvas__overlay');

      offcanvasClose.forEach(el => {
        el?.addEventListener('click', () => {
          offcanvasInfo?.classList.remove('info-open');
          offcanvasOverlay?.classList.remove('overlay-open');
        });
      });

      sidebarToggle?.addEventListener('click', () => {
        offcanvasInfo?.classList.add('info-open');
        offcanvasOverlay?.classList.add('overlay-open');
      });
    };

    // Body Overlay
    const initBodyOverlay = () => {
      const bodyOverlay = document.querySelector('.body-overlay');
      bodyOverlay?.addEventListener('click', () => {
        document.querySelector('.offcanvas__area')?.classList.remove('offcanvas-opened');
        document.querySelector('.df-search-area')?.classList.remove('opened');
        bodyOverlay.classList.remove('opened');
      });
    };

    // Sticky Header
    const initStickyHeader = () => {
      const handleScroll = () => {
        const headerSticky = document.getElementById('header-sticky');
        if (window.scrollY > 250) {
          headerSticky?.classList.add('sticky');
        } else {
          headerSticky?.classList.remove('sticky');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Initialize Swiper Sliders
    const initializeSliders = () => {
      if (!Swiper) return;

      // Hero Slider
      const heroSlider = document.querySelector('.hero-slider');
      if (heroSlider) {
        new Swiper('.hero-slider', {
          loop: true,
          slidesPerView: 1,
          effect: 'fade',
          speed: 3000,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.dot-2',
            clickable: true,
          },
          navigation: {
            nextEl: '.array-prev',
            prevEl: '.array-next',
          },
        });
      }

      // Hero Slider 2
      const heroSlider2 = document.querySelector('.hero-slider-2');
      if (heroSlider2) {
        new Swiper('.hero-slider-2', {
          speed: 1500,
          loop: true,
          slidesPerView: 1,
          autoplay: true,
          effect: 'fade',
          pagination: {
            el: '.dot',
            clickable: true,
          },
        });
      }

      // Brand Slider
      const brandSlider = document.querySelector('.brand-slider');
      if (brandSlider) {
        new Swiper('.brand-slider', {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            767: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          },
        });
      }

      // Service Slider
      const serviceSlider = document.querySelector('.service-slider');
      if (serviceSlider) {
        new Swiper('.service-slider', {
          spaceBetween: 30,
          speed: 1500,
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          breakpoints: {
            1199: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            767: { slidesPerView: 2 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          },
        });
      }

      // Project Slider
      const projectSlider = document.querySelector('.project-slider');
      if (projectSlider) {
        new Swiper('.project-slider', {
          spaceBetween: 30,
          speed: 1500,
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          breakpoints: {
            1399: { slidesPerView: 3 },
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          },
        });
      }

      // Testimonial Slider - with delay to ensure DOM is ready
      setTimeout(() => {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        if (testimonialSlider) {
          new Swiper('.testimonial-slider', {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            centeredSlides: false,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.testimonial-slider .dot-2',
              clickable: true,
              dynamicBullets: false,
            },
            navigation: {
              nextEl: '.testimonial-slider .swiper-button-next',
              prevEl: '.testimonial-slider .swiper-button-prev',
            },
            breakpoints: {
              1400: { slidesPerView: 1 },
              1199: { slidesPerView: 1 },
              991: { slidesPerView: 1 },
              767: { slidesPerView: 1 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            },
          });
        }
      }, 100);
    };

    // Search Popup
    const initSearchPopup = () => {
      const searchWrap = document.querySelector('.search-wrap');
      const searchTrigger = document.querySelector('.search-trigger');
      const searchClose = document.querySelector('.search-close');
      const navSearch = document.querySelector('.nav-search');

      searchTrigger?.addEventListener('click', (e) => {
        e.preventDefault();
        searchWrap?.classList.toggle('open');
        navSearch?.classList.add('open');
        searchClose?.classList.add('open');
      });

      searchClose?.addEventListener('click', (e) => {
        e.preventDefault();
        searchWrap?.classList.remove('open');
        navSearch?.classList.remove('open');
        searchClose?.classList.remove('open');
      });

      document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.search-trigger') && !e.target.closest('.main-search-input')) {
          searchWrap?.classList.remove('open');
          navSearch?.classList.remove('open');
          searchClose?.classList.remove('open');
        }
      });
    };

    // Mouse Cursor
    const initMouseCursor = () => {
      const cursorInner = document.querySelector('.cursor-inner');
      const cursorOuter = document.querySelector('.cursor-outer');

      if (!cursorInner || !cursorOuter) return;

      window.addEventListener('mousemove', (e) => {
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });

      // Add hover effect for links and cursor-pointer elements
      const hoverElements = document.querySelectorAll('a, .cursor-pointer');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorInner.classList.add('cursor-hover');
          cursorOuter.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          cursorInner.classList.remove('cursor-hover');
          cursorOuter.classList.remove('cursor-hover');
        });
      });

      cursorInner.style.visibility = 'visible';
      cursorOuter.style.visibility = 'visible';
    };

    // Team Hover Image
    const initTeamHover = () => {
      const teamItems = document.querySelectorAll('.team-items');

      function followImageCursor(event, teamItem) {
        const contentBox = teamItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        const imageElement = teamItem.children[2];
        if (imageElement) {
          imageElement.style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
        }
      }

      teamItems.forEach((item) => {
        item.addEventListener('mousemove', (event) => {
          followImageCursor(event, item);
        });
      });
    };

    // Counter Up (simplified version without plugin)
    const initCounterUp = () => {
      const counters = document.querySelectorAll('.count');
      
      const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count') || counter.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      };

      // Use Intersection Observer to trigger counter when visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(counter => observer.observe(counter));
    };

    // Initialize all features
    initSidebarToggle();
    initBodyOverlay();
    const cleanupScroll = initStickyHeader();
    initSearchPopup();
    initMouseCursor();
    initTeamHover();
    initCounterUp();

    // Cleanup function
    return () => {
      if (cleanupScroll) cleanupScroll();
    };
  }, []);
}
