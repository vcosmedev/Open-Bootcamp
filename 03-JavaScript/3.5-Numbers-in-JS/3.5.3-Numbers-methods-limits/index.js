// JavaScript es un lenguaje donde los objetos que se declaran están basados en protipos

// OBTENER VALORES NUMÉRICOS A PARTIR DE LITERALES - .valueOf() OPERATOR
let a = 2;
// Definir valores numéricos como parte de un prototipo
let b = new Number(3);

console.log(a); // EO: 2
console.log(b); // EO: Number 3 {}
console.log(a + b); // EO: 5 -> Suma el VALOR de la variable 'a' con el VALOR de la variable 'b'

console.log(b.valueOf()); // EO: 3 -> Obtener los valores primitivos de una variable declarada

let str = new String("Hi! This is a string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
// NaN -> Se muestra cuando se está intentando utilizar un método de variables exclusivamente numéricas en algo que no es un número
let n = Number("bye");
console.log(n); // EO: NaN
// Para prevenir o 'adelantarnos' a este error, podemos utilizar lo siguiente:
console.log(isNaN(n)); // EO: true

let numerator = 19;
let denominator = 0;
let denominator_null = null;

console.log(numerator / denominator); // EO: Infinity -> Técnicamente, es una indeterminación
console.log(numerator / denominator_null); // EO: Infinity

// CONVERTIR UN STRING A VALORES NUMÉRICOS: Number, parseInt, parseFloat
let num1 = "5.89";
let num2 = 17.2;

console.log(typeof num1); // EO: string

// Sumar variable num1 (string) + num2 (number):
console.log(num1 + num2); // EO: 5.8917.2 -> Está concatenando -> ERROR DE CONCEPTO

// Primera opción: operador Number, premite convertir un string en un número
console.log(Number(num1) + num2); // EO: 23.09 -> Ejecuta la suma porque typeof Number(num1) es un number

// Segunda opción: parseInt y parseFloat
// En programación, el denomitativo 'parse' significa extruir un valor dentro de otro (pegar/convertir un valor a otro)
console.log(parseInt(num1)); // EO: 5 -> Obvia la parte decimal, lo convierte a entero
console.log(parseFloat(num1)); // EO: 5.89 -> En este caso sí está teniendo en cuenta la parte decimal

let num3 = 4;
console.log(parseInt(num3)); // EO: 4
console.log(parseFloat(num3)); // EO: 4

// HEXADECIMAL NUMBER SYSTEM (base 16)
// Todos los números hexadecimales empiezan por '0x...'
// No existen decimales (float) dentro de los números hexadecimales
let numHex = "0x3a5b7";
console.log(parseInt(numHex)); // EO: 239031

let numHexLot = "0x4a18n";
console.log(parseInt(numHexLot)); // EO: 239031

// OBTENER VALROES MÁXIMO Y MÍNIMO EN JAVASCRIPT
// EPSILON -> Mínima diferencia que existe entre un número y otro
let min_precision_JS = Number.EPSILON; // -> Propiedad
let min_value_JS = Number.MIN_VALUE;
let max_value_JS = Number.MAX_VALUE;

console.log(min_precision_JS); // EO: 2.220446049250313e-16 -> Mínimo valor con el que podemos trabajar en JS
console.log(min_value_JS); // EO: 5e-324 -> Mínimo valor con el que podemos trabajar en JS
console.log(max_value_JS); // EO: 1.7976931348623157e+308 -> Máximo valor con el que podemos trabajar en JS
