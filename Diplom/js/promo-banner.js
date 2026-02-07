document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.promo-banner');
    const closeBtn = document.querySelector('.promo-banner__close');
    const body = document.body;

    if (!banner || !closeBtn) return;

    // Получаем реальную высоту баннера
    const bannerHeight = banner.offsetHeight;

    // Сдвигаем сайт вниз при загрузке
body.style.paddingTop = bannerHeight + 'px';

    closeBtn.addEventListener('click', () => {
        // Прячем баннер
        banner.classList.add('promo-banner--hidden');

        // Возвращаем сайт наверх
        body.style.paddingTop = '0';

        // (опционально) полностью убираем баннер из DOM после анимации
        setTimeout(() => {
            banner.remove();
        }, 300);
    });
});