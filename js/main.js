/* Contenido final para el archivo js/main.js */

// MEJORA: Espera a que todo el HTML esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

  // Menú móvil
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));

  // Scroll-to-top (tu versión con 'smooth' es genial)
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  topBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

  // Lazy-load YouTube
  document.querySelectorAll('.yt').forEach(div => {
    div.addEventListener('click', () => {
      // CORREGIDO: Usamos 'dataset.youtubeid' para que coincida con el HTML
      const id = div.dataset.youtubeid;
      
      // MEJORA: Añadimos title y permisos al iframe
      div.innerHTML = `<iframe 
        src="https://www.youtube.com/embed/${id}?autoplay=1" 
        title="Reproductor de video de YouTube" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>`;
    });
  });
  
});
