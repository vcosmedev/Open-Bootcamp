// CARGA Y SOBRECARGA DE FUNCIONES

// CARGA
function greeting() {
  hello();
}

function hello() {
  console.log("Hii! This is the hello function!");
}

greeting();

// Carga de funciones: ¿cómo funciona? ¿Qué hace el intérprete?
// Interpreta el código, ejecuta el código de arriba a abajo, entra en la función 'greeting' y después ejecuta la función 'hello':

/// 1- global()
/// 2- greeting() global()
/// 3- hello() greeting() global()
/// 4- greeting() global()
/// 5- global()

//// Los pasos anteriores se realizan para optimizar la utilización de memoria por parte de JavaScript.
//// Hasta que no encuentra la llamada a una función no la está metiendo en la carga de caché.

// stack -> carga
// overflow -> sobrecarga

// SOBRECARGA
// Suele darse en funciones recursivas

// function recursive(){
// recursive()
// }

// recursive()

// CÓMO FUNCIONA INTERNAMENTE LA MEMORIA DE JS, ES NECESARIO ENTENDER LA CARGA Y SOBRECARGA DE FUNCIONES ;)
