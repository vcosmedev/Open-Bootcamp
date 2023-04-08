class Person {
    // Private -> # -> inicializar la variable o atributo con la almohadilla
    #name
    #age
    #getYear
    // Protected -> _
    _isDeveloper = true // -> Inicializar variable como protegida
    constructor(nam, ag) {
      this.#name = nam;
      this.#age = ag;
    }
  
    greeting() {
      console.log(`Hiii my name is ${this.name} and I'm ${this.age} years old.`);
    }
    getName() {
        return this.#name
    }
    getAge() {
        return this.#age
    }
    #getYear() {
        return this.#getYear
    }
  }

// Crear objetos de tipo persona:
const person = new Person("Gorka", 70, );
console.log(person);
// Acceder a atritbutos:
console.log(person.name);
person.greeting();

// Proteger ciertas partes del objeto que se esté creando a partir de una clase:
person.name = "Bye";
console.log(person); // EO: Person { name: 'Bye', age: 70 }

// Para que no se puedan cambiar valores de las propiedades de un objeto creado a partir de una clase desde fuera...
// Atributo público
// Atributo privado -> #

console.log(person.getName()); //EO: Gorka
console.log(person.getAge()); //EO: 70

// Atributos o métodos privados -> función protegida, igual que antes -> #getSurname
// console.log(person.#getYear()); //EO: 1953 -> No se puede acceder desde fuera

// Acceder variable protegida:
console.log(_isDeveloper); // EO: no return, protected

// ¿CUÁL ES LA DIFERENCIA ENTRE MÉTODOS O ATTR PRIVADOS O PROTEGIDOS?

// private -> solamente se puede acceder desde dentro de la clase
// protected -> solamente se puede acceder desde dentro de la clase y desde clases descendientes