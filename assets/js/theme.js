/**
 * ===================================================================
 * JAVASCRIPT: Theme Manager (Dark / Light Mode)
 * Description: Toggles theme between dark and light modes with localStorage persistence
 * ===================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_theme';
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  /**
   * Get current stored theme or default to system preference (or dark)
   */
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    // Default to dark mode for modern creative media vibe
    return 'dark';
  }

  /**
   * Apply theme to root html element and update toggle icon
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggleBtn.setAttribute('title', 'สลับเป็นโหมดกลางคืน (Dark Mode)');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggleBtn.setAttribute('title', 'สลับเป็นโหมดสว่าง (Light Mode)');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
      }
    }
  }

  // Initialize theme immediately on page load
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Setup click event listener once DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    }
  });
})();
