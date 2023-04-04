// ARRAYS

// TRABAJAR CON ARRAYS (LISTAS, ARREGLOS, VECTORES...):
let var1 = { id: false };
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]; // Un array puede tener todo tipo de valores primitivos que acepta JS: number, string, boolean, object, variable...
console.log(array); // EO: [ 1, 'hola', false, { id: 5 }, null, undefined, { id: false } ]

// ACCEDER VALORES DE UN ARRAY A TRAVÉS DE SU POSICIÓN:
// Reminder: índices son en base 0
console.log(array[0]); // EO: 1
console.log(array[1]); // EO: hola
console.log(array[2]); // EO: false
console.log(array[3]); // EO: { id: 5 }

// MÉTODOS PARA INTRODUCIR NUEVOS VALORES A UN ARRAY:
// .push() | .unshift() -> Mutan el valor de un array
array.push("final"); // Se añade el nuevo elemento AL FINAL del array
console.log(array); // EO: [ 1,'hola', false, { id: 5 }, null, undefined, { id: false },'final' ]
// OJO: cuando se utiliza .push() se está cambiando el valor del array -> Utilizando frameworks de JS como React, al tratar con estados no conviene mutar los valore sde los arrays

array.unshift("inicio"); // Se añade un nuevo elemento AL PRINCIPIO del array
console.log(array); // EO: [ 'inicio', 1,'hola', false, { id: 5 }, null, undefined, { id: false },'final' ]

// MÉTODOS PARA ELIMINAR VALORES YA EXISTENTES EN UN ARRAY:
// .pop() | .shift() -> Mutan el valor de un array
const array2 = [1, 3, "hola", true];

array2.pop(array2); // Se elimina el elemento DEL FINAL del array
console.log(array2); // EO: [1, 3, "hola"];
array2.pop(array2); // Se elimina el elemento DEL FINAL del array
console.log(array2); // EO: [1, 3];

array2.shift(array2); // Se elimina el elemento DEL PRINCIPIO del array
console.log(array2); // EO: [3];

// MÉTODO PARA ELIMINAR, MODIFICAR O AÑADIR VALORES A UN ARRAY
// .splice(x, y, z)
// (method) Array<number>.splice(start: number, deleteCount?: number | undefined): number[] (+1 overload)

// Eliminar valores .splice(index, numValuesToDelete)
const array3 = [1, 2, 3, 4, 5, 6];
array3.splice(2, 3); // Primera posición: a partir de la cual comenzará a eliminar valores | Segunda posición: el número de valores a eliminar
console.log(array3); // EO: [ 1, 2, 6 ] -> Elimina tres valores a partir del índice 3

// Aádir valores .splice(index, 0, valuesToAdd)
array3.splice(2, 0, "hola");
console.log(array3); // EO: [ 1, 2, 'hola', 6 ] -> Añade sin elminar nada

// Modificar valores .splice(index, 1, valuesToModify)
array3.splice(2, 1, "adiós"); // Índice, eliminar un valor, añadir un valor -> Sustituimos un valor por otro
console.log(array3); // EO: [ 1, 2, 'adiós', 6 ] -> Sustituye un valor por otro
