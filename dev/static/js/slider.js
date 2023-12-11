const swiper = new Swiper('.about-swiper-container', {
    slidesPerView: 1.4,
    direction: 'horizontal',
    spaceBetween: 20,
    draggable: true,
    grabCursor: true,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            direction: 'horizontal',
            spaceBetween: 20,
            draggable: true,
            grabCursor: true,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
        },

        768: {
            slidesPerView: 'auto',
            direction: 'horizontal',
            spaceBetween: 20,
            draggable: true,
            grabCursor: true,
            slidesOffsetBefore: 36,
            slidesOffsetAfter: 36,
        },

        1280: {
            slidesPerView: 'auto',
            direction: 'horizontal',
            spaceBetween: 20,
            draggable: true,
            grabCursor: true,
            slidesOffsetBefore: 70,
            slidesOffsetAfter: 70,
            centerInsufficientSlides: true,
        }
    }
});