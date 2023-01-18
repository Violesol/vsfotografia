var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    breakpoints: {
        850: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
        },


        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3
          },
      } 
  });