/**
 * ===================================================================
 * JAVASCRIPT: Main Application Initializer
 * Description: Preloader handler, smooth scroll initialization, and global events
 * ===================================================================
 */

// 1. Hide Preloader when the page has fully loaded
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }, 400); // Brief delay for smooth branding experience
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // 2. Smooth scrolling for internal anchor links (#home, #about, etc.)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 3. Initialize Bootstrap Tooltips if any exist
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // 4. Floating Purple & Yellow Particles Generator (Theme Embers)
  initHeroParticles();

  console.log('%c🎨 Creative Media Portfolio Loaded Successfully!', 'color: #0ea5e9; font-size: 14px; font-weight: bold;');
});

/**
 * Generates floating purple and yellow glowing particle dots across the hero section
 */
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  container.innerHTML = '';
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    const dot = document.createElement('div');
    const isPurple = Math.random() > 0.45; // ~55% purple, 45% yellow
    dot.className = `floating-dot ${isPurple ? 'dot-purple' : 'dot-yellow'}`;

    const size = Math.floor(Math.random() * 7) + 4; // 4px to 10px
    const left = (Math.random() * 98 + 1).toFixed(2); // 1% to 99%
    const duration = (Math.random() * 6 + 5.5).toFixed(2); // 5.5s to 11.5s
    const delay = -(Math.random() * 10).toFixed(2); // negative delay for immediate presence
    const drift = (Math.random() * 60 - 30).toFixed(0); // -30px to +30px

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${left}%`;
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `${delay}s`;
    dot.style.setProperty('--drift-x', `${drift}px`);

    container.appendChild(dot);
  }
}
