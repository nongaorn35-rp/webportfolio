/**
 * ===================================================================
 * JAVASCRIPT: Navigation Bar Multi-page Handler
 * Description: Sticky navbar on scroll, active page highlight, mobile auto-collapse
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');

  /**
   * 1. Sticky Navbar styling on scroll
   */
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check

  /**
   * 2. Highlight Active Page Link based on current URL pathname
   */
  function highlightCurrentPage() {
    const currentPath = window.location.pathname.toLowerCase();
    const currentPage = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute('href');
      if (!linkHref) return;

      const linkPage = linkHref.split('/').pop().split('#')[0] || 'index.html';

      if (
        currentPage === linkPage ||
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === '/' && linkPage === 'index.html')
      ) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  highlightCurrentPage();

  /**
   * 3. Mobile Navigation Auto-close on click
   */
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
});
