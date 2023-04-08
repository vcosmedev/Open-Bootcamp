// INHERITANCE
class Person {
  _nombre; // protected
  _age; // protected
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  greeting() {
    console.log(
      `Hii, my name is ${this._name} and I'm ${this._age} years old.`
    );
  }
}
// Crear una nueva clase basada en la clase inicial, en este caso Person
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age); //-> Permite utilizar el constructor de la clase padre, en este caso 'name' y 'age'
    this.language = language;
  }
  greeting() {
    // POLIMORFISM
    super.greeting(); // Acceder a la función 'greeting' de la clase padre
    console.log(`And I'm a ${this.language} Developer ;)`); // Override -> Sobreescribir algo que ya está definido
    // console.log("Hi, I'm Developer") // Override -> Sobreescribir algo que ya está definido
  }
}

const newDeveloper = new Developer("Víctor", 31, "JavaScript");
console.log(newDeveloper); // Developer { name: 'Víctor', age: 31, language: 'JavaScript' }
newDeveloper.greeting();

// POLIMORFISM
// Las clases dentro de JS pueden tomar diferentes formas
