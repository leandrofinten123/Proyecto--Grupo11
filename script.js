const swiper = new Swiper('.swiper-cero', {
    // Parametros para el slider
    direction: 'horizontal',
    loop: true,
    effect: "slider",
    slidesPerGroupAuto: true,
    spaceBetween: 15,
    autoplay: {delay:15000, pauseOnMouseEnter: true, disableOnInteraction: false,},

    breakpoints: {
      // cuando el width >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroupAuto: true,
      },

      700: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroupAuto: true,
      },
    },

    // paginacion 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // flechas del slider
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

