// // Add shadow on header when scrolling
// (() => {
// const header = document.querySelector('.main-header');
// function toggleShadow() {
// header.classList.toggle('shadow-sm', window.scrollY > 10);
// }
// window.addEventListener('scroll', toggleShadow, { passive: true });
// toggleShadow();
// })();

// // Smooth scroll and active menu highlight
// (() => {
// const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// navLinks.forEach(link =>
// link.addEventListener('click', e => {
// const targetId = link.getAttribute('href');
// if (targetId.startsWith('#') && document.querySelector(targetId)) {
// e.preventDefault();
// document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
// }
// }));

// const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

// const observer = new IntersectionObserver((entries) => {
// entries.forEach(entry => {
// navLinks.forEach(link => link.classList.remove('active'));
// if(entry.isIntersecting && entry.target.id){
// const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${entry.target.id}"]`);
// if(activeLink) activeLink.classList.add('active');
// }
// });
// }, {rootMargin: '-50% 0px -50% 0px', threshold: 0});

// sections.forEach(section => observer.observe(section));
// })();

// Bootstrap carousel init handled by data attributes automatically

// Sticky Header with Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".feature-card, .hero-content").forEach((el) => {
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const expanded =
        mobileMenuBtn.getAttribute("aria-expanded") === "true" || false;
      mobileMenuBtn.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });
  }

  // Mobile dropdown toggle
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        const navItem = e.target.closest('.nav-item');
        if (navItem && navItem.querySelector('.dropdown')) {
          const dropdown = navItem.querySelector('.dropdown');
          dropdown.classList.toggle('active');
        }
      }
    });

    // Sticky header effect
    const header = document.querySelector('.header-container');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.style.transform = 'translateY(-50px)';
        header.style.opacity = '0.95';
      } else {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
      }
    });


    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        window.innerWidth <= 768 &&
        !e.target.closest('.nav-menu') &&
        !e.target.closest('.mobile-menu-btn') &&
        navMenu.classList.contains('active')
      ) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', false);
        dropdowns.forEach((dropdown) => dropdown.classList.remove('active'));
      }
    });
});
