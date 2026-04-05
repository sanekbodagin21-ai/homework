// Задание 1.

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}
//Задание 2.

const number = +prompt("Введите число", 0);
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(factorial);

//Задача 3.

let board = "";

for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
        row += "Ч";
    } else {
        row += "Б";
    }
    }
    board += row + "\n";
}
console.log(board);
