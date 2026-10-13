/**
 * ===================================================================
 * JAVASCRIPT: Contact Form Handler & Feedback Toast
 * Description: Validates message inputs and displays interactive toast feedback
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const contactToast = document.getElementById('contactToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');
  const toastIcon = contactToast ? contactToast.querySelector('i') : null;

  function showToast(title, desc, isSuccess = true) {
    if (!contactToast) return;
    if (toastTitle) toastTitle.textContent = title;
    if (toastDesc) toastDesc.textContent = desc;

    if (toastIcon) {
      if (isSuccess) {
        toastIcon.className = 'fa-solid fa-circle-check text-success fs-4';
      } else {
        toastIcon.className = 'fa-solid fa-triangle-exclamation text-warning fs-4';
      }
    }

    contactToast.classList.add('show');
    setTimeout(() => {
      contactToast.classList.remove('show');
    }, 5500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const subjectInput = document.getElementById('userSubject');
      const messageInput = document.getElementById('userMessage');
      const submitBtn = document.getElementById('submitBtn');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : 'ติดต่อจากเว็บไซต์ Portfolio';
      const message = messageInput ? messageInput.value.trim() : '';

      // Basic Validation
      if (!name || !email || !message) {
        showToast('กรุณากรอกข้อมูลให้ครบ', 'กรุณากรอกชื่อ อีเมล และข้อความก่อนกดส่งครับ', false);
        return;
      }

      // Check valid email pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showToast('อีเมลไม่ถูกต้อง', 'กรุณาใส่อีเมลในรูปแบบที่ถูกต้อง เช่น example@gmail.com', false);
        return;
      }

      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> กำลังส่งข้อความ...';

      try {
        // Send directly to formsubmit.co via AJAX
        const response = await fetch('https://formsubmit.co/ajax/nongaorn35@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: `[Portfolio Contact] ${subject} - จากคุณ ${name}`,
            message: message,
            _template: 'table'
          })
        });

        const data = await response.json();

        if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
          showToast(
            'ส่งข้อความสำเร็จ!',
            `ขอบคุณครับ คุณ ${name} ระบบได้ส่งข้อมูลไปยัง nongaorn35@gmail.com เรียบร้อยแล้ว`,
            true
          );
          contactForm.reset();
        } else {
          // If service requires first-time activation or returns error, provide direct mailto link
          throw new Error(data.message || 'เกิดข้อผิดพลาดในการส่ง');
        }
      } catch (err) {
        console.warn('FormSubmit AJAX failed, opening mail client as fallback:', err);
        showToast(
          'เปิดโปรแกรมอีเมล',
          'กำลังเปิดโปรแกรมส่งอีเมลในเครื่องของคุณไปยัง nongaorn35@gmail.com...',
          true
        );
        // Fallback to mailto link directly
        const mailtoUri = `mailto:nongaorn35@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${encodeURIComponent('จากคุณ: ' + name + '\nอีเมล: ' + email + '\n\nข้อความ:\n' + message)}`;
        window.location.href = mailtoUri;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
  }
});
