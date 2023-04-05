// MÉTODOS AVANZADOS
// Métodos que devuelven arrays

const cities = [
  "Cáceres",
  "San Sebastián",
  "Cádiz",
  "Barcelona",
  "Sevilla",
  "Madrid",
];

// Hasta ahora, acceder a estos valores a través de un forEach:

const val = cities.forEach((value) => {
  console.log(value);
  return 4;
});
console.log(val); // EO: undefined

// EO: Cáceres, San Sebastián, Cádiz, Barcelona, Sevilla, Madrid
// Objetivo forEach: no es hacer ninguna acción concreta

// .map() -------------------------------------------------------------------------------
// Si quisiéramos añadir algo al final, podemos utilizar .map()
const newCities = cities.map((value, index) => {
  // return value.concat("Hola");
  console.log(index);
  return `${1 + index} - ${value}`;
});
console.log(newCities);
// EO: 1 - Cáceres, 2 - San Sebastián, 3 - Cádiz, 4 - Barcelona, 5 - Sevilla, 6 - Madrid

// El código anterior, más simplificado, podría ser de la siguiente forma:
const newCities2 = cities.map((value, index) => `${1 + index} - ${value}`);
console.log(newCities2);
// EO: 1 - Cáceres, 2 - San Sebastián, 3 - Cádiz, 4 - Barcelona, 5 - Sevilla, 6 - Madrid

// DE ESTA MANERA SE ESTÁ OBTENIENDO UN ARRAY MODIFICANDO CADA UNO DE LOS VALORES ORIGINALES

// .filter() -------------------------------------------------------------------------------
// Array de objetos
// Obtener un objeto con 'ciertas condiciones'

const objectsArr = [
  { name: "Alessia", age: 29 },
  { name: "Gorka", age: 34 },
  { name: "Beni", age: 2 },
  { name: "Dolce", age: 6 },
  { name: "Víctor", age: 31 },
];

const thirties = objectsArr.filter((obj) => {
  if (obj.age > 30) {
    return true;
  } else {
    return false;
  }
});
console.log(thirties); // EO: [ { name: "Gorka", age: 34}, { name: "Víctor", age: 31} ]

const twenties = objectsArr.filter((obj) => obj.age >= 20 && obj.age < 30);
console.log(twenties); // EO: [ { name: "Alessia", age: 29 } ]

// Obtener todos los objetos menos 'Gorka':

const newObjectsArray = objectsArr.filter((obj) => obj.name !== "Gorka");
console.log(newObjectsArray);
// EO:

// const objectsArr = [
//     { name: "Alessia", age: 29 },
//     { name: "Beni", age: 2 },
//     { name: "Dolce", age: 6 },
//     { name: "Víctor", age: 31 },
//   ];

// .reduce() -------------------------------------------------------------------------------
// Obtener un valor/ojeto/smh a partir de un array

// Ejemplo => Sumar todas las edades de un array, se puede hacer con un 'forEach' aunque
// es más óptimo utilziar .reduce() de la siguente forma:

const values = [3, 56, 23, 5, 90, 100];

const additon = values.reduce((acumulado, current, index, arrayOriginal) => {
  console.log(acumulado); // EO: 3, 59, 82, 87, 177 -> return acumulado + current
  console.log(current);
  console.log(index);
  console.log(arrayOriginal);
  return acumulado + current;
});
console.log(additon); // EO: 277

// También se suele utilizar al concatenar diferentes arrays
