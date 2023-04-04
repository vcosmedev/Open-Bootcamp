// OBTENER UN ARRAY A PARTIR DE OTRO ARRAY
// .slice()

const arr = ["hola", 1, 2, 3, true, null, "adiós"];
console.log(arr.slice(3, 6)); // EO: [ 3, true, null ]

// .slice() NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(arr); // EO: [ 'hola', 1, 2, 3, true, null, 'adiós' ]

// Asignar resultado del método a una variable
const arr2 = arr.slice(3, 6);
console.log(arr2); // EO: [ 3, true, null ]

// Utilizar valores negativos para trabajar con los valores desde el final hacia el principio. Ejemplo:
const arr3 = arr.slice(3, -1);
console.log(arr3); // EO: [ 3, true, null ]
// ["hola", 1, 2, 3, true, null, "adiós"];
//             ...    -3    -2     -1
