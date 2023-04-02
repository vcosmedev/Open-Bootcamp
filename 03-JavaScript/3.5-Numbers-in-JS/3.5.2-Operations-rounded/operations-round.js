// MAIN arithmetic operations
let a = 3.5;
let b = 4.8;

// Addition (+)
console.log(a + b);
// Substraction (-)
console.log(a - b);
// Multiplication (*)
console.log(a * b);
// Divison (/)
console.log(a / b);

// NUMBERS REPRESENTATION IN STRINGS
// typeof
console.log(typeof a); // EO: number
// toString()
let a_string = a.toString();
console.log(a_string);
console.log(typeof a_string); // EO: string

// ROUND FLOAT NUMBERS
let c = 3.3;
let d = c * 3;

console.log(d); // EO: 9.899999999999999
console.log(typeof d); // number

// .toFixed() -> limitar número de decimales al parámetro que se le haya pasado
console.log(d.toFixed(0)); // EO: 10 -> Hay que pasar un parámetro el cual indicará el número de decimales que se desea
console.log(d.toFixed(1)); // EO: 9.9 -> Hay que pasar un parámetro el cual indicará el número de decimales que se desea
console.log(d.toFixed(2)); // EO: 9.90 -> Hay que pasar un parámetro el cual indicará el número de decimales que se desea

// typeof + .toFixed()
console.log(typeof d.toFixed(2)); // EO: string

// Another example
let e = 1839.56245523246;
console.log(e.toFixed(2)); // EO: 1839.56
// Can be possible to convert an integer into a float number, for example:
let f = 2232778345;
console.log(f.toFixed(2));

// .toPrecision(x) -> realiza un redondeo científico; límita el número de cifras significativas
// Pasar cuántos dígitos se requieren que tenga como precisión, es decir, número de cifras significativas que se quiere que tenga este número
console.log(e.toPrecision(4)); // EO: 1840
console.log(e.toPrecision(6)); // EO: 1839.56
console.log(e.toPrecision(7)); // EO: 1839.562
console.log(e.toPrecision(9)); // EO: 1839.56246

// Another example, with variable 'f' (integer number):
console.log(f.toPrecision(7)); // EO: 2.232778e+9 -> Devuelve número con notación científica -> 2.232778e+9 = 2.232778 * 10^9

// .toPrecision() devuelve un STRING
console.log(typeof f.toPrecision(3)); // EO: string
