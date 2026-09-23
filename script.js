/* -------------------------------------------------------------
   Suman Jee - Executive Portfolio Interactive Logic
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Animated Counter Effect for Stats
  const statNumbers = document.querySelectorAll('.stat-number');

  const animateCounters = () => {
    statNumbers.forEach((stat) => {
      const target = +stat.getAttribute('data-target');
      const prefix = stat.getAttribute('data-prefix') || '';
      const suffix = stat.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 50;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          stat.innerText = prefix + Math.ceil(count).toLocaleString() + suffix;
          setTimeout(updateCount, 30);
        } else {
          stat.innerText = prefix + target.toLocaleString() + suffix;
        }
      };

      updateCount();
    });
  };

  // Trigger counter animation on load or scroll
  let animated = false;
  const statsSection = document.querySelector('.hero-stats');

  const handleScroll = () => {
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && !animated) {
      animated = true;
      animateCounters();
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger if already in view

  // 3. Dynamic Active Navigation Link highlighting on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach((item) => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
});
