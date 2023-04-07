// Función generadora

// Función generadora de IDs incrementales
function* idGenerator() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; // Realiza una especie de return aunque en lugar de salir de la función el 'yield' va a quedarse aquí hasta que vuelva a ser llamada la función
  }
}

// function* -> Queremos que en cada ocasión que llamemos a la función idGenerator se genere un id incremental, un id nuevo

// LLAMAR A LA FUNCIÓN GENERADORA
const gen = idGenerator();
console.log(gen.next()); // EO: { value: 1, done: false }
console.log(gen.next()); // EO: { value: 2, done: false }
console.log(gen.next()); // EO: { value: 3, done: false }
console.log(gen.next()); // EO: { value: 4, done: false }
console.log(gen.next()); // EO: { value: 5, done: false }
console.log(gen.next()); // EO: { value: 6, done: false }
console.log(gen.next()); // EO: { value: 7, done: false }
console.log(gen.next()); // EO: { value: 8, done: false }
console.log(gen.next()); // EO: { value: 9, done: false }
console.log(gen.next()); // EO: { value: 10, done: true }

// Está devolviendo un objeto por tanto podríamos obtener sus valores de la siguiente forma:
const gen2 = idGenerator();
console.log(gen2.next().value); // EO: 1
console.log(gen2.next().value); // EO: 2
console.log(gen2.next().value); // EO: 3
console.log(gen2.next().value); // EO: 4
console.log(gen2.next().value); // EO: 5
console.log(gen2.next().value); // EO: 6
console.log(gen2.next().value); // EO: 7
console.log(gen2.next().value); // EO: 8
console.log(gen2.next().value); // EO: 9
console.log(gen2.next().value); // EO: 10
