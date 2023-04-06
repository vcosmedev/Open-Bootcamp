// COMPARACIÓN DE ARRAYS
// .every()
// Nos indica si todos los componenetes de un array cumplen una condición

const arr = [4, 17, 8, -1, 11, 23, 9, 33, -7, 32, 20, 19, -44];

const isNumber = arr.every((value) => {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
});
console.log(isNumber); // true

// const allNumbersPositive = arr.every(value => {
//     if (typeof value > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(allNumbersPositive); // EO: false -> No TODOS los valores son positivos

const allNumbersPositive = arr.every((value) => value > 0);
console.log(allNumbersPositive); // EO: false

// Comparar listas
arr1 = [1, 2, 3, 4];
arr2 = [1, 2, 3, 4];
console.log(arr1 === arr2); // EO: false -> Retorna false porque los arrays no se comparan de esta forma. ¿Alternativa?

// Conociendo el valor de 'every' de cada array podemos crear una función del tipo:

// const arrComparison = (array1, array2) => {
//     if (array1.length === array2.length) return false;
//     const result = array1.every((value, i) => {
//         if (value === array2[i]) return true;
//         return false
//     })
// };

const arrComparison = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  const result = array1.every((value, i) => value === array2[i]);
  return result;
};

console.log(arrComparison(arr1, arr2)); // EO: true

const arr3 = [1, 2, 3];
console.log(arrComparison(arr1, arr3)); // EO: false
