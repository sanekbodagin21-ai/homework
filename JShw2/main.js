// Задача 1.
const number = +prompt("Введите число", 0);
let result;

if ( number % 2 === 0) {
    result = "Число чётное"
} else {
    result = "Число нечётное"
}
console.log(result);

// Задача 2.
const age = +prompt("Введите возраст", 0);
const discount = age < 18 ? 10 : ( age >= 18 && age < 65 ? 20 : 30);
console.log(`Скидка ${discount}%`);


// Задача 3.
const username = prompt("Введите имя пользователя");
const password = +prompt("Введите пароль");
const ADMIN = "admin";
const USER = "user";
const PASSWORD = "123456"

if ((username == ADMIN || username == USER) && password == PASSWORD ) {
    alert("Доступ разрешён")
} else {
    alert("Доступ запрещён")
}

// Задача 4.
const weight = +prompt("Введите вес посылки в килограммах.")
if (weight <= 0) {
    alert("Некорректный вес посылки")
}

const type = prompt("Введите тип доставки. Допустимые варианты: `Стандарт`, `Экспресс`, `Премиум`.")
if ( type !== "Стандарт" && type !== "Экспресс" && type !== "Премиум" ) {
    alert("Некорректный тип доставки")
}

const cost = weight < 1 ? 5 : ( weight > 5 ? 15 : 10);
console.log(`Стоимость доставки ${cost}$ `)

let coefficient;
switch (type) {
    case "Стандарт":
        coefficient = 1;
    break
    case "Экспресс":
        coefficient = 1.5;
    break
    case "Премиум":
        coefficient = 2;
    break
    default:
        alert("Коэффициент не выявлен.");
}

const conclusion = cost * coefficient;
alert(`Итоговая стоимость доставки ${conclusion}`)