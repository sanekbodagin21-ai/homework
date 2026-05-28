export function brandList () {
const button = document.querySelector(`.menu__link-button`);
const container = document.querySelector(`.menu__list-container`)

button.addEventListener("click", () => {
    button.classList.toggle(`list__opened`);
    const buttonCharacteristic = button.classList.contains(`list__opened`);
    if (buttonCharacteristic) {
        const list = document.createElement(`ul`);
        container.appendChild(list);
        list.className = `shop__list`;
        list.innerHTML = `
    <li class="shop__element"><a href="#">Versace</a></li>
    <li class="shop__element"><a href="#">Zara</a></li>
    <li class="shop__element"><a href="#">Gussi</a></li>
    <li class="shop__element"><a href="#">Prada</a></li>
    <li class="shop__element"><a href="#">Calvin Klein</a></li>
    `
    } else {
        closeList();
    }

    function closeList() {
        button.classList.remove(`list__opened`);
        const existingList = container.querySelector('.shop__list');
        if (existingList) {
        existingList.classList.add(`closing`);
        setTimeout(() => {
            existingList.remove(); 
        }, 300);
    }
    }

document.addEventListener("click", (event) => {
    const isButtonClick = button.contains(event.target);
    const isContainerClick = container.contains(event.target);
    if ( !isButtonClick && !isContainerClick && button.classList.contains(`list__opened`)){
        closeList();
    };
});
});
};



