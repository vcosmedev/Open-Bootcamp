// TRABAJAR CON OBJETOS

// Definir objeto
const obj = {
  name: "Víctor",
  surname: "Cosme",
  isDeveloper: true,
  favBooks: ["Educated", "Conversations with friends"],
  "4-games": [1, 2, 3, 4],
};

// Acceder valores de las propiedades de un objeto
console.log(obj.name); // EO: Víctor
console.log(obj["favBooks"]); // EO: ["Educated", "Conversations with friends"]

// Definir propiedad con variables -> Llamar a ciertas propiedades a partir de variables declaradas con anterioridad
const prop = "isDeveloper";
console.log(obj[prop]); // EO: true -> Acceder a propiedades a través de variables

// Replicar un objeto
const obj2 = obj;
console.log(obj2);

// Si se realiza un cambio en 'obj2' tras replicar un objeto...
obj2.name = "Ander";
console.log(obj2);
// EO
// { name: 'Ander',
//   surname: 'Cosme',
//   isDeveloper: true,
//   favBooks: [ 'Educated', 'Conversations with friends' ],
//   '4-games': [ 1, 2, 3, 4 ] }

// SE CAMBIA LA PROPIEDAD DEL OBJETO ORIGINAL, LA REFERENCIA EN MEMORIA QUE ES LO QUE SE COPIA AL REPLICAR UN OBJETO, EN ESTE CASO < const obj2 = obj; >
// Con variables primitas esta casuísticas no ocurren, con los objetos sí: se copia el mismo objeto y asigna la dirección de memoria al objeto replicado

// Ejemplo replicar con una variable primitiva:
let val1 = 4;
let val2 = val1;

val2 = 6;

console.log(val1); // EO: 4
console.log(val2); // EO: 6
// En este caso, sí hace una copia del valor y la almacena en otro lugar de memoria

// SI SE REQUIERE COPIAR Y DUPLICAR UN OBJETO DENTRO DE OTRO, UTILIZAR OPERADOR 'SPREAD'
// ... -> SPREAD OPERATOR
const obj3 = { ...obj };
console.log(obj);
// EO
// { name: 'Ander',
//   surname: 'Cosme',
//   isDeveloper: true,
//   favBooks: [ 'Educated', 'Conversations with friends' ],
//   '4-games': [ 1, 2, 3, 4 ] }
console.log(obj3);
// EO
// { name: 'Ander',
//   surname: 'Cosme',
//   isDeveloper: true,
//   favBooks: [ 'Educated', 'Conversations with friends' ],
//   '4-games': [ 1, 2, 3, 4 ] }

obj.name = "Gorka";
console.log(obj);
// EO
// { name: 'Gorka',
//   surname: 'Cosme',
//   isDeveloper: true,
//   favBooks: [ 'Educated', 'Conversations with friends' ],
//   '4-games': [ 1, 2, 3, 4 ] }
console.log(obj3);
// EO
// { name: 'Ander',
//   surname: 'Cosme',
//   isDeveloper: true,
//   favBooks: [ 'Educated', 'Conversations with friends' ],
//   '4-games': [ 1, 2, 3, 4 ] }

// --------------------------------------------------------------------------------------------------------------------------------------------

// ORDENAR ARRAYS DE OBJETOS EN FUNCIÓN DE UNA PROPIEDAD
const moviesArr = [
  { title: "Close", year: 2022 },
  { title: "Pain and Glory", year: 2019 },
  { title: "Parallel Mothers", year: 2021 },
  { title: "Été 85", year: 2020 },
  { title: "90 Kids", year: 2018 },
  { title: "Estíu 1993", year: 2017 },
];

console.log(moviesArr);

// Ordenar la lista de películas por año, de más antigua a más reciente:
// .sort() -> método que muta el valor del array original
moviesArr.sort((a, b) => a.year - b.year);
console.log(moviesArr);
// EO:
// [ { title: 'Estíu 1993', year: 2017 },
//   { title: "90 Kids", year: 2018 },
//   { title: 'Pain and Glory', year: 2019 },
//   { title: 'Été 85', year: 2020 },
//   { title: 'Parallel Mothers', year: 2021 },
//   { title: 'Close', year: 2022 } ]

// ¿Ordenar la lista de películas por título?
