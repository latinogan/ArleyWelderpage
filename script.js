document.addEventListener('DOMContentLoaded', () => {
  // Manejo del Loader
  const loaderWrapper = document.getElementById('loader-wrapper');
  
  const hideLoader = () => {
    if (loaderWrapper && !loaderWrapper.classList.contains('loader-hidden')) {
      loaderWrapper.classList.add('loader-hidden');
    }
  };

  // 1. Ocultar inmediatamente si el sitio ya terminó de cargar
  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    // 2. Escuchar el evento load si aún se está descargando
    window.addEventListener('load', hideLoader);
  }

  // 3. Fallback de seguridad: Oculta el loader tras 2.5 segundos máximo
  setTimeout(hideLoader, 2500);

  // Manejo del Menú Hamburguesa
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('is-open')) {
          primaryNav.classList.remove('is-open');
          navToggle.classList.remove('is-active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});

// Manejo del Filtro de Galería
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0 && galleryItems.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Quitar clase 'active' de todos los botones y asignarla al clickeado
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Obtener la categoría del botón
      const filterValue = button.getAttribute('data-filter');

      // 3. Filtrar las imágenes
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === itemCategory) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
}