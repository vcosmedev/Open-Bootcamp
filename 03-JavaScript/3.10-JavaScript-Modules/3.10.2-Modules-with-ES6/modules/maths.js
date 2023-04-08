export function addition(a, b) {
  return a + b;
}

export function multiplication(a, b) {
  return a * b;
}

export function exponential(a, b) {
  return a ** b;
}

export function factorial(a) {
  // Factorial (5) -> 5 * 4 * 3 * 2 * 1
  let factorial = 1;
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

// ¿Cómo exportar módulos?
// Antes de ES6 solo existía una, actualmente tenemos dos:
// 2- Import ES6 - import
/// 2.1- Ir a package.json
// 2.1.1- Indicar el tipo de importación -> "type": "module"
// A partir de ahora, para exportar se hace con la palabra reservada "export" al inicio de una función
/// 2.2- En el documento donde queramos usar las funciones, se utiliza en su lugar la palabra reservada "import" -> import { functionName } from './../.../'

////// NO SOLAMENTE SE EXPORTAN E IMPORTAN FUNCIONES, TAMBIÉN SE PUEDEN IMPORT Y EXPORT CONSTANTES
export const name = "maths";
