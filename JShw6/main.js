"use strict";

// Задание 1.
const users = [
  {name: "Alex", age: 24, isAdmin: false},
  {name: "Bob", age: 13, isAdmin: false},
  {name: "John", age: 31, isAdmin: true},
  {name: "Jane", age: 20, isAdmin: false},
]
users.push( { name: "Ann", age: 19, isAdmin: false }, { name: "Jack", age: 43, isAdmin: true });

// Задание 2.
const getUserAverageAge = users => {
  let sum = 0;
  users.forEach( user => {
    sum += user.age
  })
  return sum / users.length;
};

// Задание 3.

function getAllAdmins (users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i])
    }
  }
  return admins
}

console.log(getAllAdmins(users));

// Задание 4.

function first (arr, n) {
if ( n == 0) {
  return [];
} if ( n == undefined ) {
  return arr[0];
} if ( n > arr.length) {
  console.error(`Число не может быть больше длины массива: ${arr.length}`);
}
return arr.slice(0, n);
}

console.log(first(users, 4 ));
