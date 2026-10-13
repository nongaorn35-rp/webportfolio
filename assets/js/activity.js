/**
 * ===================================================================
 * JAVASCRIPT: Activity & Workshop Filter & Modal
 * Description: Smooth staggered category filtering (Slide from Left to Right, No Center Jump)
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.activity-filter-btn');
  const activityItems = Array.from(document.querySelectorAll('.activity-item'));
  let filterTimeouts = [];

  function clearFilterTimeouts() {
    filterTimeouts.forEach((t) => clearTimeout(t));
    filterTimeouts = [];
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        clearFilterTimeouts();

        filterBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        const matchingItems = [];
        const nonMatchingItems = [];

        activityItems.forEach((item) => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            matchingItems.push(item);
          } else {
            nonMatchingItems.push(item);
          }
        });

        // Immediately remove non-matching items from the grid flow so they don't hold layout slots
        nonMatchingItems.forEach((item) => {
          item.style.display = 'none';
          item.style.opacity = '0';
          item.style.transform = 'translateX(-30px)';
        });

        // Prepare matching items at their leftward initial state
        matchingItems.forEach((item) => {
          item.style.display = ''; // Restore default Bootstrap column
          item.style.opacity = '0';
          item.style.transform = 'translateX(-30px)';
          item.style.transition = 'none';
        });

        // Force browser reflow so initial state takes effect instantly
        if (matchingItems.length > 0) {
          void matchingItems[0].offsetWidth;
        }

        // Smooth staggered reveal: items slide in sequentially from left to right
        matchingItems.forEach((item, index) => {
          const timeout = setTimeout(() => {
            item.style.transition = 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, index * 80);
          filterTimeouts.push(timeout);
        });
      });
    });
  }
});
