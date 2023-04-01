// Factorial 10, bucle for

let number = 10;
let result = 1;

for (let i = number; i > 0; i--) {
  result *= i;
}
console.log(result); // EO: 33628800

for (let i = number; i >= 1; i--) {
  number = number * i;
}
console.log(result); // EO: 33628800
