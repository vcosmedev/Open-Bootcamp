// Tipos primitivos

// Number
4;

// String
("Hello World!");
("Hello World!");
`Hello World`;

// Boolean
true;
false;

// Null & Undefined
null; // -> Espacio vacío en memoria
undefined; // -> Valor vacío, no especificado en memoria

// Null, Undefined, false, 0 --> TODAS SON FALSY
if (null) {
  console.log("OK");
} else {
  console.log("NOT OK");
}

if (undefined) {
  console.log("OK");
} else {
  console.log("NOT OK");
}

if (false) {
  console.log("OK");
} else {
  console.log("NOT OK");
}

if (0) {
  console.log("OK");
} else {
  console.log("NOT OK");
}

if (true) {
  console.log("OK");
} else {
  console.log("NOT OK");
}

//   Aunque todas son FALSY aunque no son el mismo tipo
console.log(undefined === null);
console.log(null === false);
console.log(false === 0);
console.log(0 === undefined);
