// ARROW FUNCTIONS + FUNCIONES ANÓNIMAS

const arr = [1, 5, 6, 2, 7, 12, 8, 92];

const doubleArr = arr.map(function (value) {
  return value * 2;
});

console.log(doubleArr); // EO: [ 2, 10, 12, 4, 14, 24, 16, 184 ]

// Se podría optimizar el código anterior a través de una arrow function de la siguiente forma:

const doubleArrArrow = arr.map((value) => value * 2); // ARROW FUNCTION + FUNCIÓN ANÓNIMA (no tiene nombre aunque se define directamente)
console.log(doubleArrArrow); // EO: [ 2, 10, 12, 4, 14, 24, 16, 184 ]

// const doubleValue = value => {
//     return value * 2;
// }

console.log(double(7)); // EO: 14
// console.log(doubleValue);
// EO: Cannot access 'doubleValue' before initialization -> HOISTING -> Arrow functions, solo puede accederse a ellas una vez inicilizadas, no antes

const doubleValue = (value) => value * 2;

function double(value) {
  return value * 2;
}

const arr3 = arr.map(doubleValue);
console.log(arr3); // EO: [ 2, 10, 12, 4, 14, 24, 16, 184 ]
