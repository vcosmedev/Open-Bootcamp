// FUNCIONES ASÍNCRONAS
// Aquellas que cuando se realiza una llamada a una db externa, por ejemplo, puede tardar tiempo en responder ya que no depende de nuestra estructura-runtime

function asyncFunc() {
  // Hace llamada db externa
  // Puede dar algún error
  // Promesas >>>
}

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    resolve();
  } else {
    reject();
  }
});

// Callback -> La promesa admite un callback, es una función ejecutora
// Promesas -> Funciones que pueden o no ejecutarse de forma correcta

// ¿CÓMO CONSUMIR PROMESAS?
// 1- .then()
// 2- .catch()

myPromise
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("ERROR")); // Conocer y gestionar los errores que se han podido dar en nuestra promesa

// Ejemplo:

const myNewPromise = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

myNewPromise
  .then(() => console.log("SUCCESS"))
  .catch(() => console.log("ERROR"))
  .finally(() => console.log("ALWAYS EXECUTE MYSELF"));
