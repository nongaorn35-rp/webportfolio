/**
 * ===================================================================
 * JAVASCRIPT: Contact Form Handler & Feedback Toast
 * Description: Validates message inputs and displays interactive toast feedback
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const contactToast = document.getElementById('contactToast');
  const toastMessage = document.getElementById('toastMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('senderSubject');
      const messageInput = document.getElementById('senderMessage');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      // Basic HTML5 validation check
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนในช่องที่จำเป็น');
        return;
      }

      // Simulate sending state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> กำลังส่งข้อความ...';

      setTimeout(() => {
        // Reset submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        // Reset form inputs
        contactForm.reset();

        // Show toast notification
        if (contactToast) {
          if (toastMessage) {
            toastMessage.textContent = `ขอบคุณครับ คุณ ${nameInput.value} ข้อความของคุณถูกส่งเรียบร้อยแล้ว!`;
          }
          contactToast.classList.add('show');

          // Auto-hide toast after 4.5 seconds
          setTimeout(() => {
            contactToast.classList.remove('show');
          }, 4500);
        }
      }, 1000);
    });
  }
});
