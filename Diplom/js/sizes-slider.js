export const sizesSlider = () => {
    new Swiper(".reviews__slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 120,
        loop: true,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            prevEl: ".reviews__slider-button--prev",
            nextEl: ".reviews__slider-button--next",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: true,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 120,
            },
        },
    });
};

