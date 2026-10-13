/**
 * ===================================================================
 * JAVASCRIPT: Portfolio Filter & Modal Showcase
 * Description: Category filtering and project detail modal populator
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Staggered Category Filtering (Slide from Left to Right, No Center Jump)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
  let filterTimeouts = [];

  function clearFilterTimeouts() {
    filterTimeouts.forEach((t) => clearTimeout(t));
    filterTimeouts = [];
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      clearFilterTimeouts();

      // Toggle active class on buttons
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      const matchingItems = [];
      const nonMatchingItems = [];

      portfolioItems.forEach((item) => {
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

      // Smooth staggered animation: items reveal sequentially from left to right
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

  // 2. Project Data Dictionary for Modal Pop-up
  const projectDetails = {
    '1': {
      title: 'CYBERPUNK NEO-BANGKOK',
      category: 'Motion Graphic & 3D Animation',
      image: 'assets/images/project-1-motion.svg',
      year: '2026',
      client: 'Creative Media Showcase / Thesis Concept',
      tools: ['ibis paint x, canva'],
      description: 'งานแอนิเมชัน 3 มิติแนว Cyberpunk ผสมผสานสถาปัตยกรรมกรุงเทพมหานครแห่งอนาคต ถ่ายทอดการเคลื่อนไหวของแสงนีออน ป้ายโฆษณาโฮโลแกรม และบรรยากาศเมืองดิจิทัลที่เปี่ยมด้วยจินตนาการทางสื่อนฤมิต',
      link: 'https://behance.net'
    },
    '2': {
      title: 'LUMINA COFFEE ROASTERS',
      category: 'Brand Identity & Packaging',
      image: 'assets/images/project-2-branding.svg',
      year: '2025',
      client: 'Specialty Coffee Brand',
      tools: ['ibis paint x, canva'],
      description: 'การออกแบบอัตลักษณ์แบรนด์ร้านกาแฟคั่วบดระดับพรีเมียม ตั้งแต่โลโก้ มู้ดโทนสี บรรจุภัณฑ์ซองกาแฟ ไปจนถึงสื่อประชาสัมพันธ์หน้าร้าน เน้นความเรียบหรู ทันสมัย และดึงดูดสายตาผู้บริโภคยุคใหม่',
      link: 'https://behance.net'
    },
    '3': {
      title: 'AURORA FESTIVAL 2026',
      category: 'Photography & Visual Recap',
      image: 'assets/images/project-3-photo.svg',
      year: '2026',
      client: 'Music & Light Festival',
      tools: ['ibis paint x, canva'],
      description: 'ชุดภาพถ่ายบันทึกภาพบรรยากาศ</tool_call>ลดนตรีและศิลปะแสงไฟยามค่ำคืน การจัดองค์ประกอบภาพในสภาวะแสงน้อย การเกลี่ยสีโทน Cinematic และการจับจังหวะอารมณ์ของผู้เข้าร่วมงานอย่างมีชีวิตชีวา',
      link: 'https://behance.net'
    },
    '4': {
      title: 'METAVERSE ART GALLERY',
      category: 'UI/UX Design & Web Interaction',
      image: 'assets/images/project-4-uiux.svg',
      year: '2025',
      client: 'Virtual Exhibition Platform',
      tools: ['ibis paint x, canva'],
      description: 'ออกแบบระบบโครงสร้าง UI/UX และหน้าอินเทอร์เฟซสำหรับนิทรรศการศิลปะเสมือนจริง ออกแบบ User Flow ที่ใช้งานง่าย รองรับการแสดงผลทุกหน้าจอ พร้อมระบบ Interactive Hotspot เพื่อให้ผู้ชมมีส่วนร่วมกับงานศิลปะ',
      link: 'https://behance.net'
    },
    '5': {
      title: 'ECHOES OF NATURE',
      category: 'Video Editing & Color Grading',
      image: 'assets/images/project-5-film.svg',
      year: '2025',
      client: 'Eco Documentary Short Film',
      tools: ['ibis paint x, canva'],
      description: 'หนังสั้นเชิงสารคดีที่ถ่ายทอดความงดงามและเสียงสะท้อนของธรรมชาติ มีการลำดับภาพแบบ Dynamic ตัดต่อเสียงอย่างประณีต และการย้อมสี (Color Grading) ในโทนอารมณ์ที่ลึกซึ้งและกระตุ้นการอนุรักษ์สิ่งแวดล้อม',
      link: 'https://youtube.com'
    },
    '6': {
      title: 'SYNTHESIS AI LAB',
      category: 'AI Tools & Generative Media',
      image: 'assets/images/project-6-ai.svg',
      year: '2026',
      client: 'Experimental Art Exploration',
      tools: ['ibis paint x, canva'],
      description: 'การทดลองสร้างสรรค์ผลงานภาพและวิดีโอด้วยเทคโนโลยี Generative AI ร่วมกับทักษะการกำกับงานศิลป์ (Art Direction) เพื่อสำรวจความเป็นไปได้ใหม่ของการสื่อสารภาพและการเล่าเรื่องในยุคปัญญาประดิษฐ์',
      link: 'https://behance.net'


      
    },

     '7': {
      title: 'LOGO DESIGN PROJECT',
      category: 'Logo Design',
      image: 'assets/images/project-7-logo.svg',
      year: '2026',
      client: 'Client Branding Project',
      tools: ['ibis paint x, canva'],
      description: 'ออกแบบโลโก้สำหรับแบรนด์ใหม่ แสดงความคิดสร้างสรรค์และแนวคิดการออกแบบที่สะท้อนถึงเอกลักษณ์ของแบรนด์',
      link: 'https://behance.net'
    },

    '8': {
      title: 'LOGO DESIGN PROJECT',
      category: 'Logo Design',
      image: 'assets/images/project-8-logo.svg',
      year: '2025',
      client: 'Personal Portfolio Project',
      tools: ['ibis paint x, canva'],
      description: 'ชุดผลงานกราฟิกดีไซน์ที่แสดงถึงความสามารถในการออกแบบสื่อสิ่งพิมพ์และดิจิทัล รวมถึงการสร้างสรรค์งานกราฟิกที่มีเอกลักษณ์',
      link: 'https://behance.net'
    },
     '9': {
      title: 'LOGO DESIGN PROJECT',
      category: 'Logo Design',
      image: 'assets/images/project-9-logo.svg',
      year: '2025',
      client: 'Freelance Branding Project',
      tools: ['ibis paint x, canva'],
      description: 'การออกแบบโลโก้สำหรับลูกค้าอิสระ แสดงถึงความคิดสร้างสรรค์และการปรับตัวให้เข้ากับความต้องการของลูกค้าแต่ละราย',
      link: 'https://behance.net'
    }
  };

  // 3. Modal Population Trigger
  const viewBtns = document.querySelectorAll('.btn-view-project');
  const modalElem = document.getElementById('projectModal');
  let projectModal = null;

  if (modalElem && typeof bootstrap !== 'undefined') {
    projectModal = new bootstrap.Modal(modalElem);
  }

  viewBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const data = projectDetails[projectId];

      if (data && modalElem) {
        document.getElementById('modalProjectTitle').textContent = data.title;
        document.getElementById('modalProjectCategory').textContent = data.category;
        document.getElementById('modalProjectImg').setAttribute('src', data.image);
        document.getElementById('modalProjectDesc').textContent = data.description;
        document.getElementById('modalProjectClient').textContent = data.client;
        document.getElementById('modalProjectYear').textContent = data.year;

        const toolsContainer = document.getElementById('modalProjectTools');
        toolsContainer.innerHTML = '';
        data.tools.forEach((tool) => {
          const tag = document.createElement('span');
          tag.className = 'modal-tag';
          tag.textContent = tool;
          toolsContainer.appendChild(tag);
        });

        const externalLink = document.getElementById('modalProjectLink');
        if (externalLink) {
          externalLink.setAttribute('href', data.link);
        }

        if (projectModal) {
          projectModal.show();
        }
      }
    });
  });
});
