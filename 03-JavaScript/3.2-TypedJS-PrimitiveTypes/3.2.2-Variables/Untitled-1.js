// Declarar variables

var variableVar;
let varibleLet;

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
// let -> locally

var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  var variable = "Soy la segunda variable";
}

console.log(variable);
