// Una cadena de texto con tu 'nombre' + otra cadena de texto con tu 'apellido':

let name = "Víctor";
let surname = "Cosme";

// Una cadena de texto que se llame 'student' concatenando 'nombre' y tu 'apellido' con un espacio entre medias:
// concat("", )
let student = name.concat(" ", surname);
console.log(student); // EO: Víctor Come
// Template literals
console.log(`${name} ${surname}`); // EO: Víctor Cosme

// Una cadena de texto que se llame 'estudianteMayus' que contenga la cadena estudiante pero todo en mayúsculas:
// toUpperCase()
let capStudent = student;
console.log(capStudent.toUpperCase()); // EO: VÍCTOR COSME

// Una cadena de texto que se llame 'estudianteMinus' que contenga la cadena estudiante pero todo en minúsculas:
// toLowerCase()
let lowStudent = student;
console.log(lowStudent.toLowerCase()); // EO: víctor cosme

// Una variable que contenga el número de letras de la cadena 'estudiante' contando los espacios:
// length
console.log(student.length); // EO: 12

// Una variable que contenga la primera letra del 'nombre':
// chartAt()
console.log(name.charAt(0)); // EO: V
// Mismo output:
// chartAt()
console.log(student.charAt(0)); // EO: V

// Otra variable que contenga la última letra del 'apellido':
// chartAt()
console.log(surname.charAt(4)); // EO: e

// Una cadena de texto que elimine los espacios de la variable 'estudiante':
// split().join()
let studentWithoutSpaces = student.split(" ").join("");
console.log(studentWithoutSpaces); // EO: VíctorCosme
// Another would be with replace():
let studentWithoutSpacesReplace = student.replace(" ", "");
console.log(studentWithoutSpacesReplace); // EO: Víctor Cosme

// Una variable booleana que diga si el Nombre está contenido en la variable 'estudiante':
// includes()
console.log(student.includes("Víctor")); // EO: true
console.log(student.includes("Cosme")); // EO: true
console.log(student.includes("Víctor Cosme")); // EO: true
console.log(student.includes("Sebas")); // EO: false
