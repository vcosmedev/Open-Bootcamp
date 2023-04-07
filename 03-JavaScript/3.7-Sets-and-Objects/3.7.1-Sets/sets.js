// SETS | CONJUNTOS
// Arrays que se comportan de manera diferente

const arr = [1, 2, 3, 4, 5, 6, 1, 3, 5, "hola", { id: 5 }, { id: 5 }, "hola"];

// Crear un nuevo conjunto, un nuevo set

const mySet = new Set(arr);
console.log(arr); // EO: [ 1, 2, 3, 4, 5, 6, 1, 3, 5, "hola", { id: 5 }, { id: 5}, "hola"  ]
console.log(mySet); // EO: Set { 1, 2, 3, 4, 5, 6, "hola", { id: 5 }, { id: 5}  }

// Array -> Conjunto ordenado de valores y objetos
// Set -> Conjunto NO ordenado de valores/elementos ÚNICOS
// Diferencia entre Array y Set: Set no permite almacenar valores que YA existen
// Dos objetos con las mismas caracterísicas sí son añadidos en el conjunto 'set' ya que la REFERENCIA es distinta. Técnicamente no es el mismo objeto. Eg:
console.log({ id: 5 } === { id: 5 }); // EO: false

// DIFERENCIA ENTRE ARRAY Y SET: SET ASEGURA QUE DENTRO DE UN CONJUNTO NO EXISTE VALORES REPETIDOS! EG: utilizando base de datos para asegurar que no existen datos duplicados

// DENTRO DE SET EXISTEN MÉTODOS PARA AÑADIR O ELIMINAR VALORES
// .add()
// AÑADIR VALORES DENTRO DE UN CONJUNTO
mySet.add(9);
console.log(mySet); // EO: Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, { id: 5 }, 9 }
mySet.add(10);
console.log(mySet); // EO: Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, { id: 5 }, 9, 10 }

// Si se intenta añadir un valor que ya existe/tiene, no lo va a añadir porque asegura que los valores que obtiene el Set son únicos

// .delete()
// ELIMINAR VALORES DENTRO DE UN CONJUNTO
mySet.delete("hola");
console.log(mySet); // EO: Set { 1, 2, 3, 4, 5, 6, { id: 5 }, { id: 5 }, 9, 10 }

// Se pueden eliminar todos los valores del set
// .clear()
// mySet.clear();
// console.log(mySet); // EO: Set { }

// SABER SI UN SET CONTIENE UN VALOR
// .has() (similar a .includes() para un array)
// console.log(arr.includes(2)); // EO: true
console.log(mySet.has(40)); // EO: false

// .size()
// Indica el número de valores únicos
console.log(mySet.size); // EO: 10 -> Referencia, está tomando mySet tras el delete de "hola" de ahí que el output sea 10

// ITERACIÓN DENTRO DE LOS VALORES DE UN SET
// .forEach() -> Igual que con un array
mySet.forEach((value) => {
  console.log(value); // EO: 1, 2, 3, 4, 5, 6, { id: 5 }, { id: 5 }, 9, 10
});

// Para obtener los valores del set, dos opciones:
// A través del objeto iterator -> .values()
const it_mySet = mySet.values();
console.log(it_mySet); // EO: { [Iterator] } --> Objecto Iterator de los valores de mySet

// A través del factor de progapación ...
const arr_mySet = [...mySet];
console.log(arr_mySet[7]); // EO: { id: 5 }
