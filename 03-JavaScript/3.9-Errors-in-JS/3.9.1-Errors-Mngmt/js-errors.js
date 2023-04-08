const myFunction = (value) => {
  if (typeof value === "number") {
    return 2 * value;
  }
  // return false:
  throw new Error("El valor debe ser de tipo número");
};

// console.log(myFunction(1)); // EO: 2
// const double = (myFunction("Hey")); // EO: NaN
// -> ¿Cómo comprobamos el tipo de dato para que nos devuelva error si no es un number? 'throw new Error'

// ¿Qué hacer tras preveer que esto puede dar lugar a error?
// try
// catch
// Tratar de ejecutar X código, que puede fallar, y si falla que ejecute lo que se encuentre dentro de las llaves que engloban try y catch

const number = "String";

try {
  // Código que puede fallar
  console.log("Está ejecutándose de forma correcta :)");
  const double = myFunction(number); // ojo, 'numbers'
  console.log(double);
} catch (e) {
  // En caso de fallar, no quiero que ejecutes
  console.error(`El valor de 'e' es: ${e}`);
  console.error("ERROR!");
} finally {
  console.log("Esto se ejecuta se produzca o no un error ;)");
}

// ERRORES MÁS COMUNES
/// 1- InternalError
////   Se lanza cada vez que existe un problema interno: ejercicio de recursividad que se llama a sí misma de forma indefinida, por ejemplo.
/// 2- SyntaxError
////   Fallo de sintaxis ('cons' en lugar de 'const', por ejemplo).
/// 3- TypeError
////   Pasar a una función que ya está creada un 'number' en lugar de un 'boolean' si esta función solo acepta booleanos, por ejemplo.
/// 4- RangeError
////   Se está tratando de acceder a alguna posición que se está sobrepasando. Ejemplo: lista de 10 elementos, si tratamos de acceder
////   al elemento 12 devuelve un RangeError.
/// 5- ReferenceError
////   Cuando no existe la referencia a la que nos queremos dirigir (acceder a una referencia que no existe).

// Lista de Errores
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
