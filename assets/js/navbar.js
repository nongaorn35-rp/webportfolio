/**
 * ===================================================================
 * JAVASCRIPT: Navigation & ScrollSpy
 * Description: Sticky navbar on scroll, active nav links, mobile auto-collapse
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const navbarCollapse = document.getElementById('navbarContent');

  /**
   * 1. Sticky Navbar styling on scroll
   */
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check

  /**
   * 2. Active Link on Scroll (ScrollSpy)
   */
  function handleScrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const targetLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);

      if (targetLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', handleScrollSpy);
  handleScrollSpy(); // Initial check

  /**
   * 3. Mobile Navigation Auto-close on click
   */
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap Collapse API to hide
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
