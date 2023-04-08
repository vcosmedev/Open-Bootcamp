const myFunction = (value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  // return false:
  throw new Error("El valor debe ser de tipo 'string'");
};

const str = "sevilla";
//   const str2 = 3;

try {
  console.log("Está ejecutándose de forma correcta :)");
  const upperCase = myFunction(str); // ojo, 'numbers'
  console.log(upperCase);
} catch (e) {
  console.error(`El valor de 'e' es: ${e}`);
  console.error("ERROR!");
} finally {
  console.log("Esto se ejecuta se produzca o no un error ;)");
}
