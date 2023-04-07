// QUÉ SON LAS FUNCIONES, CÓMO SE DECLARAN, CÓMO SE UTILIZAN

// Función: bloque de código que se declara con un fin específico

// Ejemplo de la declaración de una función:

greeting(2, "hey", "adiós");
function greeting(param1, param2, param3) {
  console.log("Hola");
}

greetingName("Gorka");
function greetingName(name) {
  console.log(`Hey ${name}!`);
}
// greetingName(); -> PARÁMETRO INDEFINIDO

const name = "Ander";

greetingPartTwo(name);

function greetingPartTwo(nom) {
  console.log(`Hii ${nom}!!`);
}

// --------------------------------------------------------------------------------------
let name2 = "Marco";
console.log(name2); // EO: Marco

farewell(name2);
console.log(name2);

function farewell(name) {
  name = "Xabi";
  console.log(`Byeee ${name} :(((`);
}

// -------------------------------------------
let person = { name: "Ander", surname: "Herrera" };

personGreeting(person);

function personGreeting(obj) {
  obj.surname = "Montero"; // ¡Cambia el objeto original! OJO!! Fuente interminable de errores
  console.log(`Hellooo ${obj.name} ${obj.surname}!`);
}
// -> DIFERENCIA VARIABLE POR VALOR VS VARIABLE POR REFERENCIA //

// --------------------------------------------------------------------------------------

// SI SE REQUIERE TENER UN PARÁMETRO POR DEFECTO:

function printNumber(num) {
  console.log(num);
}

printNumber(7); // EO: 7
printNumber(); // EO: Undefined

// Parámetro por defecto (num = x) -> autoinicializa en el valor que se haya establecido, 'x':
function printNumber2(num = 7) {
  console.log(num);
}

printNumber2(9); // EO: 7
printNumber2(); // EO: 7

// --------------------------------------------------------------------------------------
// DEFINIR FUNCIONES CON PARÁMETROS INDETERMINADOS
// Factor de progapagción como parámetro:

function print(...params) {
  console.log(params); // EO: [ 1, 3, 5, 'hey', { id: 9 } ]
}

print(1, 3, 5, "hey", { id: 9 });

// ---- x ----

function addition(...nums) {
  // console.log(...nums); // EO: 1 2 3 4
  return nums.reduce((a, b) => a + b);
}

let result = addition(1, 2, 3, 4);
console.log(result); // EO: 10

// --------------------------------------------------------------------------------------
// ÁMBITO DE UNA FUNCIÓN
let variable = "Hi!";

function multiply(a = 0, b = 0) {
  console.log(variable); //EO: Hi
  let internalVariable = "Bye!"; // -> Local
  console.log(internalVariable);
  return a * b;
}
console.log(multiply(4, 9)); // EO: 36
console.log(internalVariable); // EO: internalVariable is not defined
