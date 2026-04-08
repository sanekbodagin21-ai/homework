// Задача 1.

const person = {
  name: "Екатерина",
  surname: "Козлова",
  age: 18,
  "place of residence": "Rostov-on-Don",
};

console.log(person);

// Задача 2.

const isEmpty = object => {
  for (const key in object) {
    return false;
  };
  return true;
};

// Задача 3.

const task = {
  title: "title",
  description: "description",
  isCompleted: true,
}
function cloneAndModify ( object, modifications) {
  const clonedObject = {...object, ...modifications};
  for (let key in clonedObject) {
    console.log(`${key}: ${clonedObject[key]}`);
    return clonedObject
  }
}

// Задача 4.

const callAllMethods = object => {
  for ( let key in object) {
    if ( typeof object[key] === "function") {
      object[key]();
    }
  }
}

