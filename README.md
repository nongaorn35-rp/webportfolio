# Creative Media Student Portfolio Website 🎨
เว็บไซต์ Portfolio ส่วนตัวสำหรับนักศึกษาสาขาสื่อนฤมิต (Creative Media)

Landing Page ที่ออกแบบด้วยแนวคิด **Modern, Creative, Premium, Minimal, Glassmorphism, Gradient** ในธีมสี **ฟ้า - เหลือง (Blue & Yellow)** สำหรับนำเสนอผลงาน Motion Graphic, Visual Identity, การถ่ายภาพ, UI/UX Design, วิดีโอ และสื่อปัญญาประดิษฐ์ (Generative AI)

---

## 🌟 จุดเด่นและฟีเจอร์ (Key Features)

- **🎨 Modern Creative Design**: ออกแบบด้วยสไตล์ Glassmorphism ผสานแสงเงาและ Gradient ที่สะดุดตา
- **📱 Fully Responsive**: รองรับการแสดงผลทุกขนาดหน้าจอ (Smartphones, Tablets, Laptops, Desktops)
- **🌓 Dark / Light Mode**: สลับโหมดสว่าง-มืด พร้อมบันทึกสถานะลงใน `localStorage`
- **🚀 Smooth Scroll & Sticky Navbar**: แถบเมนูด้านบนโปร่งแสงแบบกระจก เลื่อนตามหน้าจอ พร้อมระบบตรวจจับตำแหน่งอัตโนมัติ (ScrollSpy)
- **⚡ Interactive Elements**:
  - แอนิเมชันเปิดหน้าเว็บ (Preloader)
  - เอฟเฟกต์พิมพ์ดีดตำแหน่ง (Typewriter Effect)
  - วงแหวนอวตารเรืองแสงหมุนตลอดเวลา (Rotating Dual-Gradient Ring)
  - Scroll Reveal แอนิเมชันเปิดตัวการ์ดเมื่อเลื่อนหน้าจอ
  - ตัวเลขนับสถิติอัตโนมัติ (Animated Counters)
  - แถบวัดระดับทักษะความสามารถ (Skill Progress Bars)
  - ปุ่มตัวกรองผลงานตามหมวดหมู่ (Portfolio Filter Tabs)
  - ป๊อปอัปแสดงรายละเอียดผลงานเชิงลึก (Project Details Modal)
  - แบบฟอร์มติดต่อพร้อมการแจ้งเตือนความสำเร็จ (Toast Notification)
  - ปุ่มเลื่อนกลับสู่ด้านบน (Scroll to Top)

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```
webportfolio/
├── index.html                  # Landing Page หลัก
├── about.html                  # หน้าแสดงประวัติและเป้าหมายการทำงาน
├── skills.html                 # หน้าแสดงทักษะความสามารถ 10 ด้าน
├── portfolio.html              # หน้าแสดงผลงานและแกลเลอรี
├── contact.html                # หน้าแบบฟอร์มและช่องทางติดต่อ
├── assets/
│   ├── css/
│   │   ├── style.css           # Global Theme, Variables, Reset, Preloader
│   │   ├── navbar.css          # Navigation Bar, Glassmorphism, Dark/Light Mode
│   │   ├── hero.css            # Hero Section, Glowing Rings, Badges
│   │   ├── about.css           # About Me, Education Timeline, Career Goals
│   │   ├── skills.css          # 10 Skill Cards, Progress Bars, Tool Badges
│   │   ├── portfolio.css       # 6 Project Cards Grid, Filter Tabs, Modal
│   │   ├── contact.css         # Contact Channels, Form Styling, Toast
│   │   └── footer.css          # Footer, Copyright, Scroll to Top Button
│   ├── js/
│   │   ├── main.js             # Initializer & Preloader
│   │   ├── theme.js            # Dark/Light Mode Switcher
│   │   ├── navbar.js           # Sticky Nav & ScrollSpy
│   │   ├── animations.js       # Scroll Reveal, Counter, Typewriter
│   │   ├── portfolio.js        # Filter & Modal Showcase Handler
│   │   └── contact.js          # Contact Form Validation & Toast
│   └── images/
│       ├── avatar.svg          # เวกเตอร์อวตารนักศึกษาสื่อนฤมิต
│       ├── favicon.svg         # ไอคอนโลโก้ประจำเว็บไซต์
│       ├── project-1-motion.svg
│       ├── project-2-branding.svg
│       ├── project-3-photo.svg
│       ├── project-4-uiux.svg
│       ├── project-5-film.svg
│       └── project-6-ai.svg
└── README.md
```

---

## 🛠️ เทคโนโลยีที่ใช้ (Technologies Used)

- **HTML5** & **Semantic Web**
- **CSS3** (Flexbox, CSS Grid, Glassmorphism, CSS Variables, Keyframe Animations)
- **JavaScript (ES6+)** (DOM Manipulation, IntersectionObserver API, LocalStorage)
- **Bootstrap 5.3** (Responsive Grid System, Components, Modals)
- **Google Fonts** (Prompt & Plus Jakarta Sans)
- **Font Awesome 6** (Vector Icons)

---

## 🌐 วิธีเปิดใช้งานเว็บไซต์บน GitHub Pages

1. ไปที่แท็บ **Settings** ของ Repository บน GitHub
2. เลือกเมนู **Pages** ที่แถบเมนูด้านซ้าย
3. ในส่วน **Build and deployment**:
   - Source: เลือก **Deploy from a branch**
   - Branch: เลือก **main** และโฟลเดอร์ **/ (root)**
4. กด **Save** รอระบบประมวลผลประมาณ 1-2 นาที
5. คุณจะได้รับ URL สำหรับเข้าชมเว็บไซต์ เช่น `https://<your-username>.github.io/<repo-name>/`

---

© 2026 My Portfolio | Designed by Your Name
