//Задача 1.
const firstName = "Екатерина";
const lastName = "Козлова";
const isStudent = true;

//Задача 2.
const age = 18;
const currentYear = 2026;
const birthYear = (currentYear - age);

//Задача 3.
console.log(`Меня зовут ${firstName}, мне ${age} лет. Я ученица курса: ${isStudent}`);

//Задача 4.
let a = `12`;
let b = +`395`;
let c = Number(`1348`);
let d = Boolean(0);
let e = Boolean(` `);
let result = a + b + c + d + e;
// Получается string 123951348falsetrue
// a = строка "12", b = число 395, т.к. перед ним "+", c = число 1348, т.к. перед ним "Number", d = false, e = true, т.к. `` с пробелом внутри. При операторе "+" конкатенация объединяет строки и числа, отчего получается только строка.


