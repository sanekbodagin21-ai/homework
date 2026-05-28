export function seeMore () {
const newNewArrivalsCards = [
{
    id: 1,
    link: "#",
    img: "./images/receipts-img/receipts-8.png",
    alt: "Чёрные потёртые узкие джинсы",
    title: "Потертые узкие джинсы",
    rating: 4.5,
    price: "₽8000",
    pastPrice: "₽10000",
    discount: "20%",
},
{
    id: 2,
    link: "#",
    img: "./images/receipts-img/receipts-7.webp",
    alt: "Джинсовые голубые шорты-бермуды",
    title: "Свободные бермуды",
    rating: 5,
    price: "₽6000",
},
{
    id: 3,
    link: "#",
    img: "./images/receipts-img/receipts-6.png",
    alt: "Оранжевая футболка с ярким принтом",
    title: "Футболка «Courage»",
    rating: 4.5,
    price: "₽7500",
    pastPrice: "₽10000",
    discount: "25%",
},
{
    id: 4,
    link: "#",
    img: "./images/receipts-img/receipts-5.png",
    alt: "Зелёная рубашка с длинными рукавами в чёрную полоску",
    title: "Рубашка в полоску",
    rating: 4,
    price: "₽9000",
},
]
const newSalesLeadersCards = [
{
    id: 1,
    link: "#",
    img: "./images/receipts-img/receipts-8.png",
    alt: "Чёрные потёртые узкие джинсы",
    title: "Потертые узкие джинсы",
    rating: 4.5,
    price: "₽7000",
    pastPrice: "₽10000",
    discount: "30%",
},
{
    id: 2,
    link: "#",
    img: "./images/receipts-img/receipts-3.png",
    alt: "Рубашка в красно-синюю клетку",
    title: "Клетчатая рубашка",
    rating: 4.5,
    price: "₽3500",
},
{
    id: 3,
    link: "#",
    img: "./images/receipts-img/receipts-4.png",
    alt: "Оранжевая футболка с черными рукавами и черными полосами",
    title: "Футболка с полосами",
    rating: 5,
    price: "₽5000",
},
{
    id: 4,
    link: "#",
    img: "./images/receipts-img/receipts-1.png",
    alt: "Черная базовая футболка с надписью 'New rules'",
    title: "Футболка с лентой",
    rating: 4,
    price: "₽4000",
},
]


function createCard (product) {
    const card = document.createElement(`article`);
    card.className = `receipts__product`
    card.innerHTML = `
    <a href="${product.link}" class="receipts__product-link">
        <div class="receipts__product-card">
            <picture>
                <img class="receipts__product-card-image" src="${product.img}"
                alt="${product.alt}">
            </picture>
        </div>
        <div class="receipts__product-info">
            <h2 class="product__info-title text__s-bold">${product.title}</h2>
            <div class="product__info-rating" aria-label="Рейтинг товара ${product.rating} из 5 звезд">
                <div class="product__rating">
                    <div class="product__rating-star" aria-hidden="true">
                    ${renderStar(product.rating)}
                    </div>
                    <div class="product__rating-text text__xs" aria-hidden="true">${product.rating}/<span class="product__rating-text--accent">5</span></div>
                    </div>
                    </div>
                    <div class="product__info-cost">
                        <p class="product__info-price" aria-label="Цена товара">${product.price}</p>
                        ${product.pastPrice ? `<p class="product__info-last-price" aria-label="Старая цена товара">${product.pastPrice}</p>` : ``}
                        ${product.discount ? `<div class="product__info-discount" aria-label="Скидка на товар">${product.discount}</div>` : ``}
                    </div>
        </div>
    </a>
    `;
    return card;
};

const starIcons = {
    full: `./icons/raiting__stars-icons/raiting__star-icon.svg`,
    half: `./icons/raiting__stars-icons/raiting__half-star-icon.svg`
}

function renderStar (rating) {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStars = (rating % 1 >= 0.5) ? 1 : 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(`<img src="${starIcons.full}" class="rating__star-icon">`);
    };
    if (halfStars) {
        stars.push(`<img src="${starIcons.half}" class="rating__star-icon">`);
    }
    return stars.join(``)
}


function setupSeeMoreButton(buttonSelector, containerSelector, cardsData) {
    const button = document.querySelector(buttonSelector);
    const container = document.querySelector(containerSelector);
    let isLoaded = false;       
    let addedCards = []; 
    function addCards() {
        cardsData.forEach (product => {
            const card = createCard(product);
            container.appendChild(card);
            addedCards.push(card);
        });
        isLoaded = true;
        button.textContent = "Скрыть"
    };
    function removeCards() {
        addedCards.forEach(card => {
            card.remove();
        });
        addedCards = [];
            isLoaded = false;
            button.textContent = "Посмотреть ещё";
    };

    button.addEventListener('click', () => {
            if (!isLoaded) {
                addCards();
            } else {
                removeCards();
            }
        });
};

setupSeeMoreButton(
    '.receipts__button--first',     
    '.receipts__products--first',    
    newNewArrivalsCards                       
);
    
setupSeeMoreButton(
    '.receipts__button--second',     
    '.receipts__products--second',   
    newSalesLeadersCards                  
);
};

