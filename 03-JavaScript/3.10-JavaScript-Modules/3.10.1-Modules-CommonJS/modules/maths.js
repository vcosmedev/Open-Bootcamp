function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

function exponential(a, b) {
  return a ** b;
}

function factorial(a) {
  // Factorial (5) -> 5 * 4 * 3 * 2 * 1
  let factorial = 1;
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

// ¿Cómo exportar módulos?
// Antes de ES6 solo existía una, actualmente tenemos dos:
// 1- CommonJS - require
// 1.1- Hacer públicas las funciones
module.exports = {
  addition,
  multiplication,
  exponential,
  factorial,
};
// Ya pueden ser importadas las funciones desde el archivo donde serán utilizadas

// 2- Import ES6 - import
