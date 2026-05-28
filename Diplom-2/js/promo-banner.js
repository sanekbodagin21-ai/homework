export function promoBanner () {
const lastCloseDate = localStorage.getItem(`promoBannerLastClosed`);
const today = new Date().toDateString();

if (lastCloseDate !== today) {
const body = document.querySelector(`.page__body`);
const banner = document.createElement(`div`);
banner.className = `promo-banner`;
banner.innerHTML = `
        <p class="promo-banner__text">Зарегистрируйтесь и получите скидку 20% на первую покупку. </p>
        <a class="promo-banner__link" href="#">Зарегистрироваться сейчас</a>
        <button class="promo-banner__close" aria-label="Закрыть уведомление о скидках">
            <img src="./icons/cross-icon.svg">
        </button> 
        `
body.prepend(banner);

const bannerHeight = banner.offsetHeight;
body.style.paddingTop = bannerHeight + 'px';

const cross = banner.querySelector(`.promo-banner__close`);
cross.addEventListener("click", () => {
    localStorage.setItem('promoBannerLastClosed', today);
    banner.classList.add(`promo-banner--closing`);
    banner.addEventListener("animationend", () => {
        body.style.paddingTop = "0";
        banner.remove();
    })
});
};
};


