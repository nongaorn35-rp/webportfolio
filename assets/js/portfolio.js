/**
 * ===================================================================
 * JAVASCRIPT: Portfolio Filter & Modal Showcase
 * Description: Category filtering and project detail modal populator
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active class on buttons
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
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
      tools: ['Blender 4.0', 'After Effects', 'Cinema 4D', 'Octane Render'],
      description: 'งานแอนิเมชัน 3 มิติแนว Cyberpunk ผสมผสานสถาปัตยกรรมกรุงเทพมหานครแห่งอนาคต ถ่ายทอดการเคลื่อนไหวของแสงนีออน ป้ายโฆษณาโฮโลแกรม และบรรยากาศเมืองดิจิทัลที่เปี่ยมด้วยจินตนาการทางสื่อนฤมิต',
      link: 'https://behance.net'
    },
    '2': {
      title: 'LUMINA COFFEE ROASTERS',
      category: 'Brand Identity & Packaging',
      image: 'assets/images/project-2-branding.svg',
      year: '2025',
      client: 'Specialty Coffee Brand',
      tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Dimension'],
      description: 'การออกแบบอัตลักษณ์แบรนด์ร้านกาแฟคั่วบดระดับพรีเมียม ตั้งแต่โลโก้ มู้ดโทนสี บรรจุภัณฑ์ซองกาแฟ ไปจนถึงสื่อประชาสัมพันธ์หน้าร้าน เน้นความเรียบหรู ทันสมัย และดึงดูดสายตาผู้บริโภคยุคใหม่',
      link: 'https://behance.net'
    },
    '3': {
      title: 'AURORA FESTIVAL 2026',
      category: 'Photography & Visual Recap',
      image: 'assets/images/project-3-photo.svg',
      year: '2026',
      client: 'Music & Light Festival',
      tools: ['Sony A7IV', 'Lightroom Classic', 'Capture One', 'Photoshop'],
      description: 'ชุดภาพถ่ายบันทึกภาพบรรยากาศเทศกาลดนตรีและศิลปะแสงไฟยามค่ำคืน การจัดองค์ประกอบภาพในสภาวะแสงน้อย การเกลี่ยสีโทน Cinematic และการจับจังหวะอารมณ์ของผู้เข้าร่วมงานอย่างมีชีวิตชีวา',
      link: 'https://behance.net'
    },
    '4': {
      title: 'METAVERSE ART GALLERY',
      category: 'UI/UX Design & Web Interaction',
      image: 'assets/images/project-4-uiux.svg',
      year: '2025',
      client: 'Virtual Exhibition Platform',
      tools: ['Figma', 'HTML5/CSS3', 'JavaScript', 'Three.js Concept'],
      description: 'ออกแบบระบบโครงสร้าง UI/UX และหน้าอินเทอร์เฟซสำหรับนิทรรศการศิลปะเสมือนจริง ออกแบบ User Flow ที่ใช้งานง่าย รองรับการแสดงผลทุกหน้าจอ พร้อมระบบ Interactive Hotspot เพื่อให้ผู้ชมมีส่วนร่วมกับงานศิลปะ',
      link: 'https://github.com'
    },
    '5': {
      title: 'ECHOES OF NATURE',
      category: 'Video Editing & Color Grading',
      image: 'assets/images/project-5-film.svg',
      year: '2025',
      client: 'Eco Documentary Short Film',
      tools: ['DaVinci Resolve', 'Premiere Pro', 'Audition', 'FilmConvert'],
      description: 'หนังสั้นเชิงสารคดีที่ถ่ายทอดความงดงามและเสียงสะท้อนของธรรมชาติ มีการลำดับภาพแบบ Dynamic ตัดต่อเสียงอย่างประณีต และการย้อมสี (Color Grading) ในโทนอารมณ์ที่ลึกซึ้งและกระตุ้นการอนุรักษ์สิ่งแวดล้อม',
      link: 'https://youtube.com'
    },
    '6': {
      title: 'SYNTHESIS AI LAB',
      category: 'AI Tools & Generative Media',
      image: 'assets/images/project-6-ai.svg',
      year: '2026',
      client: 'Experimental Art Exploration',
      tools: ['Midjourney v6', 'ComfyUI', 'Runway Gen-2', 'Photoshop AI'],
      description: 'การทดลองสร้างสรรค์ผลงานภาพและวิดีโอด้วยเทคโนโลยี Generative AI ร่วมกับทักษะการกำกับงานศิลป์ (Art Direction) เพื่อสำรวจความเป็นไปได้ใหม่ของการสื่อสารภาพและการเล่าเรื่องในยุคปัญญาประดิษฐ์',
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
