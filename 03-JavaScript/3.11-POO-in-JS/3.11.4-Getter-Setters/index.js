// GETTER
// Métodos que permiten obtener attr/métodos privados o protegidos

// SETTER
// Métodos que permiten cambiar el valor de algún attr privado o protegido

class Person {
  #name;
  #age;
  // #getYear
  _isDeveloper = true;
  constructor(name, age, year) {
    this.#name = name;
    this.#age = age;
    this.year = year;
  }

  greeting() {
    console.log(`Hiii my name is ${this.name} and I'm ${this.age} years old.`);
  }
  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  // #getYear() {
  //     return this.#getYear
  // }
  getYear() {
    return this.year;
  }
  setYear(newYear) {
    this.year = newYear;
  }
}

const person = new Person("Gorka", 70, 1953);
console.log(person);

const year = person.getYear();
console.log(year); // EO: 1953

person.setYear(1954);
console.log(person.getYear()); // EO: 1954
