(() => {
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('shadow-sm', window.scrollY > 10);
  });
})();

(() => {
  const links = document.querySelectorAll('.navbar-nav a.nav-link[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if(target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const sections = Array.from(links)
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      links.forEach(l => l.classList.remove('active'));
      if(entry.isIntersecting && entry.target.id) {
        const activeLink = document.querySelector('.navbar-nav a.nav-link[href="#' + entry.target.id + '"]');
        if(activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
})();
