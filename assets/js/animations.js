/**
 * ===================================================================
 * JAVASCRIPT: Animations & Interactive Micro-effects
 * Description: Scroll Reveal, Number Counter, Typewriter, Scroll-To-Top
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /**
   * 1. Scroll-To-Top Button Functionality
   */
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * 2. Scroll Reveal Animations with IntersectionObserver
   */
  const revealElements = document.querySelectorAll('.reveal-init');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add('reveal-active'));
  }

  /**
   * 3. Skill Progress Bar Fill Animation
   */
  const skillCards = document.querySelectorAll('.skill-card');

  if ('IntersectionObserver' in window && skillCards.length > 0) {
    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-progress-fill');
            if (fill) {
              const targetWidth = fill.getAttribute('data-level') || '85%';
              fill.style.width = targetWidth;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    skillCards.forEach((card) => skillObserver.observe(card));
  }

  /**
   * 4. Animated Number Counters in About Section
   */
  const counterElements = document.querySelectorAll('.counter-val');

  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10) || 0;
            const suffix = el.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 1500;
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(current) + suffix;
              }
            }, stepTime);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach((el) => counterObserver.observe(el));
  }

  /**
   * 5. Typewriter Effect in Hero Subtitle
   */
  const typewriterTarget = document.getElementById('typewriterText');
  if (typewriterTarget) {
    const words = [
      'Creative Media Student',
      'Motion Graphic Designer',
      'UI/UX & Web Developer',
      'Visual Storyteller'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterTarget.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterTarget.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Finished typing word, pause before deleting
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }
});
