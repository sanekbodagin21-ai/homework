// Задание 1.

function calculateFinalPrice( basePrice, percentDiscount, taxRate) {
  const discountedProduct = basePrice - (basePrice * percentDiscount / 100);
  const taxAmount = discountedProduct * taxRate;
  return discountedProduct + taxAmount;
}
console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2.

function checkAccess ( name, password ) {
if ( name == "admin" && password == "123456") {
  return "Доступ разрешён";
} else {
  return "Доступ запрещён";
}
}
console.log(checkAccess("admin", "123456"));

//Задача 3.

const getTimeOfDay = currentTime => {
  if ( currentTime <= 23) {
    return currentTime >= 18 ? "Вечер" : ( currentTime >= 12 ? "День" : (currentTime >= 6 ? "Утро" : "Ночь"));
  } 
  else {
    return "Некорректное время"
  }
}
const timeOfDay = getTimeOfDay(14);
console.log(timeOfDay);

//Задача 4.

function findFirstEven (start, end) {
  if (start % 2 === 0 && end % 2 === 0) {
    return start;
  } else if ( start % 2 === 0 && end % 2 !== 0) {
    return start;
  } else if ( start % 2 !== 0 && end % 2 === 0) {
    return end;
  } else {
    return "Чётных чисел нет";
  }
}

console.log(findFirstEven(1, 10))
console.log(findFirstEven(9, 9))