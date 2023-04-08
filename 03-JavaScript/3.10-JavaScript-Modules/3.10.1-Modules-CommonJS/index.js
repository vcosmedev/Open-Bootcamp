// ¿QUÉ ES UN MÓDULO?
// Parte de código que puede ser reutilizada en un programa

// function addition(a, b) {
//   return a + b;
// }

// function multiplication(a, b) {
//   return a * b;
// }

// function exponential(a, b) {
//   return a ** b;
// }

// function factorial(a) {
//   // Factorial (5) -> 5 * 4 * 3 * 2 * 1
//   let factorial = 1;
//   for (let i = 2; i <= a; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

/// Importar funciones del módulo 'Maths'

// const mathsModule = require("./modules/maths");
//// Otra forma similar
// const factorial = mathsModule.factorial;
//// Existe otra forma más sencilla de declarar, con la deconstrucción de los objetos:
// const { factorial, addition } = mathsModule;
//// Otra forma más:
const { factorial, addition } = require("./modules/maths.js");

// console.log(mathsModule.exponential); // .addition .multiplication .factorial

//// const fact = mathsModule.factorial(5);
const fact = factorial(5);
console.log(fact);

//// const fact = mathsModule.addition(5);
const add = addition(12, 90);
console.log(add);
