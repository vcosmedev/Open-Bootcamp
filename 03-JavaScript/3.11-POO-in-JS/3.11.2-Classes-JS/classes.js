// Crear un objeto de clase Persona:

// class Person {
//     name;
//     age;
//     isDeveloper;

//     greeting() {
//         console.log("hiii")
//     }
// }

// Funciones en objetos o clases se denominan MÉTODOS

// Acceder a un método

// Instanciar-crear una persona a través de lo que se conoce como el 'método constructor'
// Método constructor: método que se utiliza por defecto para crear una clase

// Las varibles dentro de una variable o dentro de un objeto se llaman 'atributos'
class Person {
  constructor(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }

  greeting() {
    console.log(`Hiii my name is ${this.name} and I'm ${this.age} years old.`); // EO: Hiii my name is Víctor and I'm 31 years old.
  }
}
// .this -> hace referencia al objeto en el que se encuentra en ese momento

// ¿Cómo se crea un objeto de clase Persona:
const newPerson2 = new Person("Víctor", 31, true);
console.log(newPerson2); // Person { name: 'Víctor', age: 31, isDeveloper: true } -> Objeto de clase Persona
newPerson2.greeting();

// Instanciar: forma de inicializar una clase
let number = 60; // Inicializar una variable
console.log(typeof number); // EO: number

let personTwo = new Person("María", 33, false); // INSTANCIAR
console.log(typeof personTwo); // EO: object
console.log(personTwo instanceof Person); // EO: true

// OPERADOR instanceof -> similar a typeof pero para Classes
// instanceof nos indica si es una clase de tipo Persona o no, ejemplo (true or false);
