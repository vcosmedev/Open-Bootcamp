// Comparaciones
// Igualdad

if (5 == 5) {
  console.log("5 es igual a 5");
}

if (5 === 5) {
  console.log("5 es estrictamente igual a 5");
}

let a = 5;
let b = 5;

// '==' compara únicamente el valor
if (a == 5) {
  console.log("'a' es igual a 'b' - Débil");
}
// '===' compara el valor y el tipo de valor
if (a === b) {
  console.log("'a' es igual a 'b' - Fuerte");
}

let c = "5";
console.log(typeof c); // EO: string
let d = 5;
console.log(typeof d); // EO: number

if (c === d) {
  console.log(
    "'c' es estrictamente igual a 'd' - Son el mismo valor y el mismo tipo de valor"
  );
} else {
  console.log(
    "'c' no es estrictamente igual a 'd' - No son el mismo tipo de valor"
  );
}
// EO: 'c' no es estrictamente igual a 'd' - No son el mismo tipo de valor

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

// Comparaciones
// Desigualdad

let e = 4;
let f = "4";

// '!=' compara la desigualdad únicamente del valor
if (e != f) {
  console.log("'e' desigual a 'f' - Débil"); // No entra porque débilemnte no se cumple que 4 != "4"
  // EO: no output, no entra
}
// '===' comprueba que sea dieferente o en el valor o en el tipo de valor
if (e !== f) {
  console.log("'e' es estrictamente diferente a 'f' - Fuerte"); // Entra porque se cumple, al menos, que 4 !== "4"
  // EO: "'e' es estrictamente diferente a 'f' - Fuerte"
}
// Fuertemente diferentes, débimente iguales

// Comparaciones mayor que > y menor que <
let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min"); // EO: 'max es mayor que min'
}

if (max >= min) {
  console.log("max es mayor que min"); // EO: 'max es mayor que min'
}

if (max < min) {
  console.log("max es mayor que min"); // EO: 'max es mayor que min'
}

if (max <= min) {
  console.log("max es mayor que min"); // EO: 'max es mayor que min'
}
