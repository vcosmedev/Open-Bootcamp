// Una variable que contenga tu altura en centímetros (entero):
let height_cm = 170;

// Una variable que contenga tu altura en metros (número de coma flotante):
let height_m = 1.7;

// Una variable que contenga tu peso en kilogramos (número de coma flotante):
let weight_kg = 70.1;

// Una variable que contenga tu altura en metros redondeada hacia arriba:
let height_rounded_m = Math.round(height_m);
console.log(height_rounded_m); // EO: 2

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo:
let weight_rounded_kg = weight_kg;
console.log(Math.floor(weight_kg)); // EO: 70

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript:
let value_max_plus_one = Number.MAX_VALUE + 1;
console.log(value_max_plus_one); // EO: 1.7976931348623157e+308

let value_max = Number.MAX_VALUE;
console.log(value_max); // EO: 1.7976931348623157e+308

if (value_max_plus_one === value_max) {
  console.log("Both are equal!!!!"); // EO: Both are equal!!!!
} else {
  console.log("I'm afraid are not equal :(");
}

console.log(typeof value_max_plus_one); // EO: number
console.log(typeof value_max); // EO: number
