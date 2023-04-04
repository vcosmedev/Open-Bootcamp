// CÓMO UNIR DOS ARRAYS (LISTAS)
// .concat(arr1)

const arr1 = ["hola", 2, false, null];
const arr2 = ["adiós", 4, true, undefined];

console.log(arr1.concat(arr2)); // EO: [ 'hola', 2, false, null, 'adiós', 4, true, undefined ]
// Devuelve un nuevo array conformado por los valores del arr1 + los valores del arr2. NO modifica/muta los valores de los arrays

const arr3 = arr1.concat(arr2);
console.log(arr3); // EO: [ 'hola', 2, false, null, 'adiós', 4, true, undefined ] -> Contiene los valores de arr1 y arr2 de forma concatenada

// CÓMO UNIR DOS ARRAYS CON EL FACTOR DE PROPAGACIÓN
// A partir de ECMAS6, nueva forma de tratar arrays -> A partir de un array, propagar su valores
console.log(...arr3); // EO: hola 2 false null adiós 4 true undefined -> Trata los valores de la lista de forma separada

const arr4 = [...arr1, ...arr2];
console.log(arr4); // EO: [ 'hola', 2, false, null, 'adiós', 4, true, undefined ]

// ERROR!! Mal entendido el concepto de propagación:
const arr5 = [arr1, arr2];
console.log(arr5); // EO: [ [ 'hola', 2, false, null ], [ 'adiós', 4, true, undefined ] ] -> Array de arrays, ojo!
