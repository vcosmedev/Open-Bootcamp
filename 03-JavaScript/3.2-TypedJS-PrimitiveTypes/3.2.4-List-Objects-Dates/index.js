// LISTAS
// Listas, array o arreglo

const list = [1, "Hello", true, undefined, null];
const list2 = new Array(1, "Hello", true, undefined, null);
const list3 = new Array(3); // EO: [ , , ]
list3[0] = "I'm the first element, Index 0"; // EO: [ "I'm the first element, Index 0", , ]
const list4 = [list2, list3]; // Lista de listas

console.log(list); // EO: [ 1, "Hello", true, undefined, null ]
console.log(list2); // EO: [ 1, "Hello", true, undefined, null ]
console.log(list3); // // EO: [ "I'm the first element, Index 0", , ]
console.log(list4); // EO; [ [ 1, "Hello", true, undefined, null ], [ "I'm the first element, Index 0", , ] ]

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// OBJETOS -> representación en código de objetos de la vida real

const mobile = {
  height: 10,
  width: 5,
  brand: "Apple",
  generation: 11,
  lastGeneration: false,
  contacts: ["Gorka", "Alessia", "Tuko"],
  card: {
    brand: "Telcel",
    storage: 32,
  },
  "card-height": 4,
  "apple-store": "Apple 5th Avenue",
};

// Acceder a los atributos, a través del operador ".":
console.log(mobile.contacts); // EO: ["Gorka", "Alessia", "Tuko"]
console.log(mobile.card.brand); // EO: Telcel

// Crear un nuevo atributo para este objeto mobile
mobile.year = 2019;
console.log(mobile); // EO: {..., year: 2019 }

// Editar valor propiedades establecidas con anterioridad
mobile.generation = 14;
console.log(mobile.generation); // EO: 14

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// DATES
// Librerías de apoyo: Moment.js -> https://momentjs.com

new Date(); // Fecha exacta del momento en el que se ha creado la variable
const now = new Date();
console.log(now); // EO: Thu Mar 30 2023 20:45:33 GMT-0600 (Central Standard Time)

const ms_date = new Date(10); // Desde el 1970
console.log(ms_date); // EO: Wed Dec 31 2969 18:00:00 GMT-0600 (Central Standard Time)

const string_date = new Date("November 19 2021");
console.log(string_date); // EO: Fri Nov 19 2021 00:00:00 GMT-0600 (Central Standard Time)

const values_date = new Date(2022, 2, 22);
console.log(values_date); // EO: Tue Mar 22 2022 00:00:00 GMT-0600 (Central Standard Time)

// ¡OJO! Meses en las fechas funcionan igual que en los arrays: Jan -> 0, Feb -> 1, Mar -> 3 ...

const day = now.getDate(); // Día, mes y año
const month = now.getMonth() + 1;
const year = now.getFullYear();

console.log(day, month, year); // EO: 30 3 2023
