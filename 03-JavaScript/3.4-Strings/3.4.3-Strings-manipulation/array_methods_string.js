// PART II < JavaScript Array Methods with strings >
// 3- CONVERTIR UNA CADENA DE TEXTO A MAYÚSCULAS, MÍNUSCULAS O SOLO LAS PRIMERAS LETRAS DE CADA PALABRA A MAYÚSC/MINÚSC
let input = "Scorpio";
let db = "scorpio";

console.log(input === db); // EO: false

// toLowerCase() & toUpperCase() methods
console.log(input.toLowerCase()); // EO: scorpio
console.log(input.toLocaleLowerCase === db.toLocaleLowerCase); // EO: true

// -> toUpperCase
console.log(db.toUpperCase()); // EO: SCORPIO

// toLocaleLowerCase & toLocaleUpperCase -> mismo resultado que toLowerCase / toUpperCase, toLocale... se utiliza para idiomas que tienen un comportamiento diferente, por ejemplo: turco
console.log(db.toLocaleUpperCase()); // EO: SCORPIO

// Capitalize first letter of a word
console.log(db[0].toUpperCase()); // EO: S
// To get the whole word back:
console.log(db[0].toUpperCase() + db.substring(1)); // EO: Scorpio

// Capitalize the first letter of each word from a string
let randomSentence = "i was born in november, i am scorpio";
console.log(randomSentence); // EO: i was born in november, i am scorpio

// a) First, split into words
let randomWords = randomSentence.split(" ");
console.log(randomWords); // EO: [ 'i', 'was', 'born', 'in', 'november,', 'i', 'am', 'scorpio' ]

// b) Secondly, iterate over each word
for (let i = 0; i < randomWords.length; i++) {
  randomWords[i] =
    randomWords[i][0].toUpperCase() + randomWords[i].substring(1); // substring(1) -> the rest of the string
}
console.log(randomWords); // EO: [ 'I', 'Was', 'Born', 'In', 'November,', 'I', 'Am', 'Scorpio' ]

// c) Finally, join the words with 'join' method
console.log(randomWords.join(" ")); // EO: I Was Born In November, I Am Scorpio

// 3- CONCATENAR DOS CADENAS DE CARACTERES
// Concatenar: anexar una cadena al final de otra cadena. Las cadenas se concatenan con el operador '+'
let str_1 = "Hi, I'm the first string.";
let str_2 = "Hi, I'm the second string.";

console.log(str_1.concat(" ", str_2)); // EO: Hi, I'm the first string. Hi, I'm the second string.
console.log(str_1 + " " + str_2); // EO: Hi, I'm the first string. Hi, I'm the second string. // Ojo si estamos interactuando con númreos, en este caso hará suma aritmética en lugar de concatenar los dos strings.
console.log(`${str_1} ${str_2}`); // EO: Hi, I'm the first string. Hi, I'm the second string.

// 4- ELIMINAR ESPACIOS AL INICIO Y AL FINAL DE UN STRING
let str_3 = "   Hi! This is a string with a final space.   ";
console.log(str_3.length); // EO: 46 -> Número de caracteres
// trim(): -> Elimina caracter o caracteres vacíos del principio o del final
console.log(str_3.trim().length); // EO: 40 -> Elimina los tres espacios vacíos del principio y del final
// trimStart(): -> Elimina caracter o caractes vacíos del principio
console.log(str_3.trimStart().length); // EO: 43 -> Elimina los tres espacios vacíos del principio
// trimEnd(): -> Elimina caracter o caracteres vacíos del final
console.log(str_3.trimEnd().length); // EO: Elimina los tres espacios vacíos del final

// 5- OBTENER EL CARACTER QUE OCUPA UNA POSICIÓN CONCRETA
let str_4 = "Hi! This is the fourth string";
// chartAt():
console.log(str_4.charAt(4)); // EO: T

// Las cadenas de caracteres se pueden tratar como arrays/listas de caracteres
// Array de caracteres, ejemplo str_4 -> ["H", "i", "!", " ", "T", "h", "i", "s" ...]
console.log(str_4[4]); // EO: T

// 6- OBTENER POSICIÓN DE UNA PALABRA DENTRO DE UNA CADENA DE CARACTERES
let str_5 =
  "Hi, this is Victor and I love programming! Ops, Did I say that my name is Victor?";
// indexOf
console.log(str_5.indexOf("Victor")); // EO: 12 -> Es la posición de la primera letra de la palabra indicada, en este caso "V"
console.log(str_5.charAt(12)); // EO: V
// Si no encuentra la palabra o caracter que se está buscando, devuelve '-1'
// Si hay dos palabras iguales que la indicada, 'Victor', devolverá la posición de la primera instancia que encuentre

// lasIndexOf
// Devuelve la última instancia
console.log(str_5.lastIndexOf("Victor"));
