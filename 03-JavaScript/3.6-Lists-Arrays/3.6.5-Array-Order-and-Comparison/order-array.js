// ORDENAR ARRAYS
// .sort()
// .sort() -> Modifica un array existente

const arr = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(arr);

arr.sort((a, b) => {
  // return -1; // Invierte el orden
  if (a < b) {
    return -1;
  } else if (a > b) {
    return +1;
  } else {
    // a === b
    return 0;
  }
});
console.log(arr);

// a -> elemento anterior
// b -> elemento posterior

// Esta función obliga retornar un valor numérico: positivo, negativo, 0

// Cuando se habla de un array estrictamente de números, existe otra forma:

const numArray = [2, 4, 15, 21, 23, 17, 6];

numArray.sort((a, b) => a - b); // Si b>a nos devolverá que a tiene que estar posicionado antes
console.log(numArray); // EO: [2, 4, 6, 15, 17, 21, 23];

// Interesante en arrays de objetos.
// Ordenar esta lista de objetos por edad, de menor a mayor:

const objectsArr = [
  { name: "Alessia", age: 29 },
  { name: "Gorka", age: 34 },
  { name: "Beni", age: 2 },
  { name: "Dolce", age: 6 },
  { name: "Víctor", age: 31 },
];

//   objectsArr.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1;
//     } else if (a.age > b.age) {
//         return +1;
//     } else {
//         return 0;
//     }
//   });
//   console.log(objectsArr);

objectsArr.sort((a, b) => a.age - b.age); // retorna la división de a entre b: si es positiva, a>b; si es negativa, b>a
console.log(objectsArr);
