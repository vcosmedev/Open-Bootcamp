// Declarar variables

var variableVar_;
let varibleLet_;

// const constante;

var a = 1;
console.log(a);

a = 4;
console.log(a);

const constant = "Hi there! I'm a constant :)";
console.log(constant);

// const constant = "I'm also a constant const" // Expected output: 'constant' has already been declared (17:6)

let b = 3;
console.log(b);

b = 5;
console.log(b);

// Diferencia entre LET y VAR

// var -> globally
var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  var variable = "Soy la segunda variable";
}

console.log(variable); // EO: 'Soy la segunda variable'

// let -> locally
let variableLet = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  let variableLet = "Soy la segunda variable";
}

console.log(variableLet); // EO: 'Hola soy una variable VAR'

// Typeof
console.log(typeof 1); // EO: number
console.log(typeof "hello"); // EO: number
console.log(typeof false); // EO: boolean
console.log(typeof null); // EO: object
console.log(typeof undefined); // EO: undefined
console.log(typeof variableLet); // EO: string
console.log(typeof variableLet_); // EO: undefined

let num = 4;
console.log(typeof num); // EO: number -> Indica de qué tipo primitivo es la variable

// Reasignar valor, ejemplo (NO es buena práctica, solo ejemplo a efectos didácticos):

let number = 6;
console.log(typeof number); // EO: numbre

number = "Seis";
console.log(typeof number); // EO: string
