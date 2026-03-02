// ================================================================
// ALTIGA AGRI SOLUTIONS – Shared Components
// ================================================================

function getNavHTML(activePage) {
  const links = [
    { href: 'index.html',   label: 'Home' },
    { href: 'about.html',   label: 'About Us' },
    { href: 'products.html', label: 'Products', dropdown: [
        { href: 'products.html?category=insecticides',  icon: 'fa-bug',          label: 'Insecticides' },
        { href: 'products.html?category=fungicides',    icon: 'fa-leaf',         label: 'Fungicides' },
        { href: 'products.html?category=weedicides',    icon: 'fa-seedling',     label: 'Weedicides' },
        { href: 'products.html?category=fertilizers',   icon: 'fa-flask',        label: 'Fertilizers' },
        { href: 'products.html?category=micronutrients',icon: 'fa-atom',         label: 'Micronutrients' },
        { href: 'products.html?category=adjuvants',     icon: 'fa-vial',         label: 'Adjuvants' },
    ]},
    { href: 'crops.html',   label: 'Crop Solutions' },
    { href: 'dealers.html', label: 'Dealer Locator' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const items = links.map(link => {
    const isActive = link.href === activePage || (link.dropdown && activePage === 'products.html');
    if (link.dropdown) {
      return `<li class="nav-item dropdown">
        <a href="${link.href}" class="nav-link${isActive?' active':''}">
          ${link.label} <i class="fas fa-chevron-down chevron"></i>
        </a>
        <ul class="dropdown-menu">
          ${link.dropdown.map(d => `<li><a href="${d.href}"><i class="fas ${d.icon}"></i>${d.label}</a></li>`).join('')}
        </ul>
      </li>`;
    }
    return `<li class="nav-item"><a href="${link.href}" class="nav-link${link.href===activePage?' active':''}">${link.label}</a></li>`;
  }).join('');

  return `<nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-icon"><img src="images/Logo/altiga.png" alt="Altiga Logo"></div>
        <div class="nav-logo-text">
          <span class="nav-logo-main">Altiga Agri</span>
          <span class="nav-logo-sub">Solutions (Pvt.) Ltd</span>
        </div>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu"><i class="fas fa-bars"></i></button>
      <ul class="nav-menu" id="navMenu">${items}</ul>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `<footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="nav-logo" style="margin-bottom:.5rem;display:inline-flex;">
            <div class="nav-logo-icon"><img src="images/Logo/altiga.png" alt="Altiga"></div>
            <div class="nav-logo-text">
              <span class="nav-logo-main">Altiga Agri</span>
              <span class="nav-logo-sub">Solutions (Pvt.) Ltd</span>
            </div>
          </a>
          <p class="footer-brand-desc">Leading Pakistan's agricultural transformation with innovative, high-quality crop protection solutions. Committed to quality, sustainability, and farmer prosperity.</p>
          <div class="footer-social">
            <a href="https://wa.me/923058366461" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="crops.html">Crop Solutions</a></li>
            <li><a href="dealers.html">Dealer Locator</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="products.html?category=insecticides">Insecticides</a></li>
            <li><a href="products.html?category=fungicides">Fungicides</a></li>
            <li><a href="products.html?category=weedicides">Weedicides</a></li>
            <li><a href="products.html?category=fertilizers">Fertilizers</a></li>
            <li><a href="products.html?category=micronutrients">Micronutrients</a></li>
            <li><a href="products.html?category=adjuvants">Adjuvants</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Info</h4>
          <div class="footer-contact-list">
            <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>Eastern Bypass Industrial Zone Plot No 4, Swat House, Quetta, Balochistan</span></div>
            <div class="footer-contact-item"><i class="fas fa-phone"></i><span><a href="tel:+923058366461">+92 305 8366461</a></span></div>
            <div class="footer-contact-item"><i class="fas fa-envelope"></i><span><a href="mailto:altigaagrisolutionsqta@gmail.com">altigaagrisolutionsqta@gmail.com</a></span></div>
            <div class="footer-contact-item"><i class="fas fa-clock"></i><span>Mon–Sat: 9:00 AM – 6:00 PM</span></div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Altiga Agri Solutions (Pvt.) Ltd. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// Get bottom navigation HTML for mobile
defunction getBottomNavHTML() {
  return `<nav class="mobile-bottom-nav">
  <div class="mobile-bottom-nav-inner">
    <a href="index.html" class="mobile-nav-item" data-page="index">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </a>
    <a href="products.html" class="mobile-nav-item" data-page="products">
      <i class="fas fa-flask"></i>
      <span>Products</span>
    </a>
    <a href="crops.html" class="mobile-nav-item" data-page="crops">
      <i class="fas fa-seedling"></i>
      <span>Crops</span>
    </a>
    <a href="dealers.html" class="mobile-nav-item" data-page="dealers">
      <i class="fas fa-map-marker-alt"></i>
      <span>Dealers</span>
    </a>
    <a href="contact.html" class="mobile-nav-item" data-page="contact">
      <i class="fas fa-phone"></i>
      <span>Contact</span>
    </a>
  </div>
</nav>
<script>
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageName = currentPage.replace('.html', '') || 'index';
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    if (item.dataset.page === pageName) {
      item.classList.add('active');
    }
  });
})();
<\/script>`;
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  // Toggle menu on hamburger click
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    toggle.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Handle touch events for better mobile response
  toggle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    toggle.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
    toggle.setAttribute('aria-expanded', isOpen);
  }, { passive: false });

  // Mobile dropdown toggle
  document.querySelectorAll('.nav-item.dropdown .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 880) {
        e.preventDefault();
        link.closest('.nav-item').classList.toggle('open');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880 && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initScrollAnimate() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimate();
});
