// POO
// Objeto
const person = {
  name: "Víctor",
  age: 31,
  isDeveloper: true,
  greeting: function () {
    console.log("Hi!");
  },
};

// console.log(person);
person.greeting();

// ¿Crear otra persona (obj)?
const anotherPerson = {
  name: "Sebas",
  age: 28,
  isDeveloper: false,
  greeting: function () {
    console.log("Hii!");
  },
};

anotherPerson.greeting();

// Crear un objeto por cada persona diferente es una actividad muy tediosa y nada eficiente.
// Para evitar esto, se crea una función (genérica) crear persona, por ejemplo:

// const createPerson = (name, age, isDeveloper) => {
//   return {
//     name: name,
//     age: age,
//     isDeveloper: isDeveloper,
//     greeting: function () {
//       console.log(this.greeting);
//     },
//   };
// };

// Este código anterior se puede optimizar, por ejemplo, cuando el nombre de la propiedad es igual a un valor ya definido que se está pasando:
const createPerson = (name, age, isDeveloper) => {
  return {
    name,
    age,
    isDeveloper,
    greeting: function () {
      console.log(this.greeting);
    },
  };
};

// Esta función se denomina FACTORY FUNCTION

const newPerson1 = createPerson("Gorka", 34, true);
console.log(newPerson1);
const newPerson2 = createPerson("Alessia", 29, false);
console.log(newPerson2);

// AUNQUE EXISTE OTRA FORMA MÁS SEGURA DE CREAR Y ENCAPSULAR ESTE TIPO DE FUNCIONES/FUNCIONALIDADES DENTRO DE JS -> CLASSES
