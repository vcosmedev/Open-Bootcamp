import { addition, exponential, factorial, name } from "./modules/maths.js";

// INCLUSO, SI SE QUIERE IMPORTAR TODAS LAS PROPIEDADES, MÉTODOS O FUNC DE ESTE MÓDULO:
// import * as mathsModule from "./modules/maths.js";

// Import habiendo exportado con 'default' en el módulo
import getAuthor, { book, getYear } from "./modules/literature.js";

const add = addition(28, 31);
console.log(add);
// const add = mathsModule.addition(28, 31);
// console.log(add);

const exp = exponential(2, 21);
console.log(exp);
// const exp = mathsModule.exponential(2, 21);
// console.log(exp);

const fact = factorial(10);
console.log(fact);
// const fact = mathsModule.factorial(10);
// console.log(fact);

console.log(name);
// console.log(mathsModule.name);

console.log(getAuthor());
console.log(book);
console.log(getYear());
