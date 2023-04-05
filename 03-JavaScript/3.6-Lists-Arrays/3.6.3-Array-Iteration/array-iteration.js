// ITERAR VALORES DE UN ARRAY

const arr = ["hola", 2, 5, 90, false, undefined];

// Tradicionalmente, a través de un bucle 'for' podría hacerse aunque es menos eficiente:
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // EO: hola, 2, 5, 90, false, undefined
}

// A partir de ECMAS6, forma más eficidente:
// forEach() method -> callback function
arr.forEach((value) => {
  console.log(value);
});

// Example:
let addition = 0;

const arrNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrNums.forEach((value) => {
  addition += value;
  console.log(addition); // EO: 3, 6, 2, 77, 2, 3, 93, 19
});
console.log(addition); // EO: 205

// BUSCAR UN VALOR DENTRO DE UNA LISTA
// .find()

// Encontrar elemento 90 de 'arr':
let find90 = arr.find((value) => {
  if (value === 90) {
    return true;
  }
});
console.log(find90); // EO: 90

// ARRAY DE OBJETOS
// Encuentra la edad de Dolce:

const objectsArr = [
  { name: "Alessia", age: 29 },
  { name: "Gorka", age: 34 },
  { name: "Beni", age: 2 },
  { name: "Dolce", age: 6 },
  { name: "Víctor", age: 31 },
];

const object = objectsArr.find((obj) => {
  if (obj.name === "Dolce") {
    return true;
  }
});

console.log(object.age); // EO: 6

// El código anterior para encontrar la edad de Dolce puede ser mejorado, ejemplo:
const object2 = objectsArr.find((obj) => {
  return obj.name === "Dolce";
});
console.log(object2.age); // EO: 6

// Este último código comentado puede optimizarse aún más transformándolo en una arrow-funtion:
const object3 = objectsArr.find((obj) => obj.name === "Dolce");
console.log(object3.age); // EO: 6

// Otra forma de hacer más eficiente: construcción de objetos
const { age } = objectsArr.find((obj) => obj.name === "Dolce");
console.log(age); // EO: 6
