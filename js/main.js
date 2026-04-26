// === Navigation: Scrolled state ===
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// === Accordion ===
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = body.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.accordion-header').forEach(b => b.classList.remove('active'));

    // Open clicked (if it was closed)
    if (!isOpen) {
      body.classList.add('open');
      btn.classList.add('active');
    }
  });
});
