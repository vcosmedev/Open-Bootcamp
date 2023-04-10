// Una clase llamada "Student" que tenga:
// - Variable llamada 'name'
// - Variable lista llamada 'subjects' con 3 asignaturas: Javascript, HTML, CSS
// - Método 'getData' que devuelva un objeto con las propiedades nombre y asignaturas

// Crear una nueva instancia de "Student"
// Hacer llamada método 'getData'

class Student {
  constructor(name, subjects) {
    this.name = name;
    this.subjects = subjects;
  }
  getData() {
    console.log(
      `Hi! My name is ${this.name} and I'm studying ${this.subjects} 🤓`
    );
  }
}

const newStudent = new Student("Víctor", "JavaScript");
console.log(newStudent);
newStudent.getData();

const newStudent2 = new Student("Ander", "JavaScript");
console.log(newStudent2);
newStudent2.getData();
