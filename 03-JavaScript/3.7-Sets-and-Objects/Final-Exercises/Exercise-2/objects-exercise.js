// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

let info = {
  name: "Víctor",
  surname: "Cosme",
  age: 30,
  height: 170,
  isDeveloper: true,
};

// Una variable que obtenga tu edad a partir del objeto anterior:
let myAge = "age";
console.log(info[myAge]);

// Una lista que contenga un objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s:
let addInfo = [
  { name: "Víctor", surname: "Cosme", age: 30, height: 170, isDeveloper: true },
  {
    name: "Carmen",
    surname: "Gómez",
    age: 29,
    height: 165,
    isDeveloper: false,
  },
  {
    name: "Lorena",
    surname: "Blázquez",
    age: 33,
    height: 170,
    isDeveloper: false,
  },
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor:
console.log(addInfo.sort((a, b) => a.age - b.age));
// EO:
// [ { name: "Carmen", surname: "Gómez", age: 29, height: 165, isDeveloper: false },
//   { name: "Víctor", surname: "Cosme", age: 30, height: 170, isDeveloper: true },
//   { name: "Lorena", surname: "Blázquez", age: 33, height: 170, isDeveloper: false } ]
