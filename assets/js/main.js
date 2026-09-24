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

  console.log('%c🎨 Creative Media Portfolio Loaded Successfully!', 'color: #0ea5e9; font-size: 14px; font-weight: bold;');
});
