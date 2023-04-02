// PART I < JavaScript Array Methods with strings >
//  Cómo obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length); // EO: 18
// length --> más que un mmétodo es un atributo

// 1- OBTENER PARTES DE CADENAS DE CARACTERES
// slice()
let slice_str = str.slice(0, 11);
console.log(slice_str); // EO: Hola soy un

// substring()
let substring_str = str.substring(0, 11);
console.log(substring_str); // EO: Hola soy un

// substr() --> is being deprecated
// parámetros -> (posición inicial, longitud)
substr_str = str.substr(5, 10);
console.log(substr_str); // EO: soy un str -> Posición inicial desde la que empieza a contar (5), contará hasta (10) desde esta posición inicial

// 2- REEMPLAZAR PARTE DEL CONTENIDO DE UNA CADENA DE TEXTO
let cadena = "Hi, my name is Victor";
console.log(cadena); // EO: Hi, my name is Victor

// Replace my name by another name, so, method REPLACE
console.log(cadena.replace("Victor", "Ander")); // EO: Hi, my name is Ander

const quote =
  "El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha cortado";
console.log(quote.replace("perro", "armadillo").replace("Ramírez", "García"));
// EO: El armadillo de San Roque no tiene rabo porque Ramón García se lo ha cortado

// Reemplazar todas las instancias de una cadena
let text =
  "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";
console.log(text.replace("los", "cinco"));
// EO: Tito no es un mono cualquiera. A Tito no le gusta trepar por cinco árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.
// El método 'replace' solamente sustituye la prmera instancia que encuentre, en este caso solo ha cambiado el primer 'los' por la palabra 'cinco'

// Para sustituir todas las intancias se puede hacer uso de las expresiones regulares, forma más avanzada de encontrar diferentes textos dentro de otro texto
// Al utilizar la expresión regular /g (global), reemplaza todas las intancias
// En lugar de pasar 'los' como string, pasar como /g -> global
console.log(text.replace(/los/g, "cinco"));
// EO: Tito no es un mono cualquiera. A Tito no le gusta trepar por cinco árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de cinco árboles.
