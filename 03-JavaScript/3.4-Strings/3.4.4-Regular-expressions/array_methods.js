// PART III < JavaScript Array Methods with strings >
// https://regerxr.com -> Practicar expresiones regulares

// 7- OBTENRE TODAS LAS INSTANCIAS DE UNA MISMA PALABRA
let text =
  "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

// Obtener todas las instancias de la palabra "los":
console.log(text.match(/los/g)); // EO: [ 'los', 'los' ]

// Obtener todas las instancias de la palabra "no" -> En este caso, se muestran las instancias 'no' que están dentro de palabras como "mono", por ejemplo:
console.log(text.match(/no/g)); // EO: [ 'no', 'no', 'no', 'no' ]

// 8- COMPROBAR SI UN TEXTO CONTIENE UNA PALABRA O NO (TRUE OR FALSE)
// includes()
console.log(text.includes("prefiere")); // EO: true
console.log(text.includes("prefieres")); // EO: true

// 9- COMPROBAR SI UN TEXTO EMPIEZA CON UNA PALABRA (CADENA DE CARACTERES)
console.log(text.startsWith("Tito")); // EO: true
console.log(text.startsWith("Ti")); // EO: true
console.log(text.startsWith("T")); // EO: true
console.log(text.startsWith("t")); // EO: true -> CASE SENSITIVE

// 10- COMPROBAR SI UN TEXTO FINALIZA CON UNA PALABRA (CADENA DE CARACTERES)
console.log(text.endsWith(".")); // EO: true
console.log(text.endsWith("les.")); // EO: true
console.log(text.endsWith("miércoles.")); // EO: false
