// OBTENER SI EXISTE CIERTO VALOR DENTRO DE UN ARRAY
// .some()
// Devuelve 'true' si algún elemento del array cumple la condición que indicamos

const arr = [3, 7, 2, 4, 7, 9, 442, 35, 7865, 23, -1];

const res = arr.some((value) => value < -10);
console.log(res); // EO: false

// ¿Existe algún valor determinado?
const exists = arr.some((value) => value === 90);
console.log(exists); // EO: false
const exists2 = arr.some((value) => value === 9);
console.log(exists2); // EO: true

// Es posible aplicarlo también a un array de objetos:
const objectsArr = [
  { name: "Alessia", age: 29 },
  { name: "Gorka", age: 34 },
  { name: "Beni", age: 2 },
  { name: "Dolce", age: 6 },
  { name: "Víctor", age: 31 },
];

const existsThisPerson = objectsArr.some((person) => person.name === "Víctor");
console.log(existsThisPerson); // EO: true

//   console.log(objectsArr.some(person => person.name === "Víctor")); // EO: true
//   console.log(objectsArr.some(person => person.name === "Juan")); // EO: false
//   console.log(objectsArr.some(person => person.name === "Alessia" && person.age === 29)); // EO: true
//   console.log(objectsArr.some(person => person.name === "Alessia" && person.age === 30)); // EO: false

// OBTENER UN ARRAY A PARTIR DE UN OBJETO ITERABLE
// Objeto iterable: objetos especiales que nos permiten 'iterar' dentro de ellos, por ejemplo un string
// Un objeto es iterable porque a través de los corchetes, [], se puede acceder a ciertas partes de los valores de un string
const str = "Hola soy Víctor";
console.log(str[5]); // EO: s

// .from()
// Obtener un array a partir de un string a través del método .from()
const arr_str = Array.from(str);
console.log(arr_str); // EO: [ 'H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'V', 'í', 'c', 't', 'o', 'r' ]

const set = new Set([2, 3, "hola", 3]);
const arr_set = Array.from(set);
console.log(arr_set); // EO: [2, 3, "hola", 3]

// .keys()
// Obtener un iterable de todos los ínices de un array
const keys = arr.keys();
console.log(keys); // EO; { [Iterator] } -> Objeto de tipo 'iterator'

// Acceder a las claves/keys a través del método .from()
const arr_keys = Array.from(keys);
console.log(arr_keys); // EO: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] -> Crea un array con cada uno de los índices del array original (arr)
