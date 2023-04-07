// Una función sin parámetros que devuelva siempre "true":
function noParam() {
  return true;
}
console.log(noParam()); // EO: true

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado:
// const asyncTimeOut = (callback, timeout = 5000) => new Promise(resolve => {
//     setTimeout(() => {
//         callback;
//         resolve();
//     }, timeout);
// });

// console.log(asyncTimeOut()); // O: Promise { <pending> } ****

// asyncTimeOut
//     .then(console.log("Hi"))
//     .catch(console.log("bye"))

// Una función generadora de índices pares automáticos:
function* evenNumGenerator() {
  let i = 1;
  while (true) {
    i *= 2;
    if (i === 10) {
      return i;
    }
    yield i;
  }
}

const gen = evenNumGenerator();
console.log(gen.next().value); // EO: 2
console.log(gen.next().value); // EO: 4
console.log(gen.next().value); // EO: 8
console.log(gen.next().value); // EO: 16
console.log(gen.next().value); // EO: 32
console.log(gen.next().value); // EO: 64
console.log(gen.next().value); // EO: 128
console.log(gen.next().value); // EO: 256
console.log(gen.next().value); // EO: 512
console.log(gen.next().value); // EO: 1024
console.log(gen.next().value); // EO: 2048
