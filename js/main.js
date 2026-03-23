/* ============================================
   MAIN.JS — Scroll Reveal + Analytics Helpers
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Scroll Reveal --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
  }

  /* --- CTA Click Tracking (Яндекс.Метрика) --- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Яндекс.Метрика — раскомментируйте и замените XXXXXXXX на ваш номер счётчика:
      // ym(XXXXXXXX, 'reachGoal', 'catalog_click');
    });
  });

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
