// JAVASCRIPT NUMBERS PRECISION
// Numbers

// Numeric variables: declaration -> Integer & Float
// Integer
let a = 23;
console.log(a); // EO: 23

// Float
let b = 0.1;
console.log(b); // EO: 20.23

// Precision | Precisión
let c = 0.2;
console.log(b + c); // EO: 0.30000000000000004 -> Esto ocurre por cómo está almacenado en memoria este dato -> Cómo JS trata a las variables y qué tipo de memoria les asigna a cada una de ellas

// Entonces, ¿cómo podríamos obtener este '0.3'?
// Utilizar el operador round() -> redondea hacia abajo sin decimales
console.log(Math.round((0.1 + 0.2) * 100) / 100); // EO: 0.3

// Solventar esta 'dedicación' en memoria, existesn varias librerías que nos pueden ayudar a solventar esta casuística
