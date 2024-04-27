function initCarousel() {
  // ваш код...
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel__inner');
    const slides = carouselInner.querySelectorAll('.carousel__slide');
    const arrowLeft = carousel.querySelector('.carousel__arrow_left');
    const arrowRight = carousel.querySelector('.carousel__arrow_right');
  
    let currentSlide = 0; // Текущий слайд (начинается с 0)
    const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
    let offset = 0; // Смещение карусели
  
    function showSlide(index) {
      offset = -index * slideWidth;
      carouselInner.style.setProperty('transform', `translateX(${offset}px)`); // Использовать style.setProperty
      updateButtons();
    }
  
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    }
  
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    }
  
    function updateButtons() {
      arrowLeft.style.display = currentSlide === 0 ? 'none' : '';
      arrowRight.style.display = currentSlide === slides.length - 1 ? 'none' : '';
    }
  
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
  
    showSlide(currentSlide); //Показать начальный слайд
  }