// Menú móvil
const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// Scroll-to-top
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Lazy-load YouTube
document.querySelectorAll('.yt').forEach(div => {
  div.addEventListener('click', () => {
    const id = div.dataset.id;
    div.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" loading="lazy" allowfullscreen></iframe>`;
  });
});
