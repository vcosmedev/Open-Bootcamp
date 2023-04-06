// Una variable que contenga la lista de la compra (mínimo 5 elementos):
let groceryEnd = [
  "Tomatoes",
  "Cucumber",
  "Banana",
  "Pepper",
  "Garlic",
  "Olive oil",
];
let groceryStart = [
  "Tomatoes",
  "Cucumber",
  "Banana",
  "Pepper",
  "Garlic",
  "Olive oil",
];
// Modifica la lista de la compra y añádele "Aceite de Girasol":
groceryEnd.push("Sunflower oil"); // Se añade al final
console.log(groceryEnd); // EO: ["Tomatoes", "Cucumber", "Banana", "Pepper", "Garlic", "Olive oil", "Sunflower oil"]

groceryStart.unshift("Sunflower oil"); // Se añade al principio
console.log(groceryStart);
EO: [
  "Sunflower oil",
  "Tomatoes",
  "Cucumber",
  "Banana",
  "Pepper",
  "Garlic",
  "Olive oil",
];

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol":
groceryEnd.pop("Sunflower oil"); // Se elimina del final
console.log(groceryEnd); // EO: ["Tomatoes", "Cucumber", "Banana", "Pepper", "Garlic", "Olive oil"]

groceryStart.shift("Sunflower oil"); // Se elimina del principio
console.log(groceryStart); // EO: ["Tomatoes", "Cucumber", "Banana", "Pepper", "Garlic", "Olive oil"]

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha):
let favMovies = [
  { title: "Milk", director: "Gus Van Sant", year: 2008 },
  { title: "Été 85", director: "François Ozon", year: 2020 },
  { title: "Madres paralelas", director: "Pedro Almodóvar", year: 2021 },
  { title: "Alcarrás", director: "Carla Simón", year: 2022 },
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter):
const oldies = favMovies.filter((movie) => movie.year >= 2010);
console.log(oldies);
// EO:
// let favMovies = [
//     { title: "Été 85", director: "François Ozon", year: 2020 },
//     { title: "Madres paralelas", director: "Pedro Almodóvar", year: 2021 },
//     { title: "Alcarrás", director:"Carla Simón", year: 2022}
// ];

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map):
const directors = favMovies.map((directors) => directors.director);
console.log(directors); // EO: [ 'Gus Van Sant','François Ozon','Pedro Almodóvar','Carla Simón' ]

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map):
const movies = favMovies.map((movies) => movies.title);
console.log(movies); // EO: [ 'Milk', 'Été 85', 'Madres paralelas', 'Alcarrás' ]

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat):
const concatArr = directors.concat(movies);
console.log(concatArr);
// EO;
// [ 'Gus Van Sant',
//   'François Ozon',
//   'Pedro Almodóvar',
//   'Carla Simón',
//   'Milk',
//   'Été 85',
//   'Madres paralelas',
//   'Alcarrás' ]

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación):
const concatArrProp = [...directors, ...movies];
console.log(concatArrProp);
// EO;
// [ 'Gus Van Sant',
//   'François Ozon',
//   'Pedro Almodóvar',
//   'Carla Simón',
//   'Milk',
//   'Été 85',
//   'Madres paralelas',
//   'Alcarrás' ]
