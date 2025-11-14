document.addEventListener('DOMContentLoaded', () => {

  // Menú móvil
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));

  // Scroll-to-top
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Lazy-load YouTube
  document.querySelectorAll('.yt').forEach(div => {
    div.addEventListener('click', () => {
      const id = div.dataset.id;
      div.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" loading="lazy" allowfullscreen></iframe>`;
    });
  });
  
  // --- FUNCIONALIDAD DEL NUEVO CARRUSEL DE PROYECTOS ---
  const track = document.querySelector('.carousel-track');
  if (track) { // Solo ejecuta si el carrusel existe en la página
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    let currentIndex = 0;

    const updateCarousel = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';

      // Ocultar/mostrar botones al llegar al final
      prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
      
      const visibleSlides = Math.floor(track.parentElement.offsetWidth / slideWidth);
      if (currentIndex >= slides.length - visibleSlides) {
        nextButton.style.display = 'none';
      } else {
        nextButton.style.display = 'block';
      }
    };

    nextButton.addEventListener('click', () => {
      currentIndex++;
      updateCarousel();
    });

    prevButton.addEventListener('click', () => {
      currentIndex--;
      updateCarousel();
    });
    
    // Actualizar en el inicio y si cambia el tamaño de la ventana
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
  }
});
