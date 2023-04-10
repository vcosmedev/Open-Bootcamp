// RUN AND DEBUG EXTENSION

const person = {
  name: "Víctor",
  age: 31,
};

console.log(person);

function getDoubleAge(age) {
  return 2 * age;
}

const doubleAge = getDoubleAge(person.age);
console.log(doubleAge);
// Breakpoint: an intentional stopping or pausing place in a program, put in place for debugging purposes.

// Ejemplo con bucle for:
function getArr(age) {
  let numArr = [];

  for (let i = 0; i < 10; i++) {
    const number = age + i;
    console.log(number);
    // numArr.push(number);
    numArr = [...numArr, number];
  }
  return numArr;
}

const arr = getArr(person.age);

console.log(numArr);
