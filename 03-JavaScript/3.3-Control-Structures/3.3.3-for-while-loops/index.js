// LOOPS
// For

// for (incialización; condición; actualización) {
//     Aquí, el bucle
// }

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
  console.log(i); // EO: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

let list = [1, 4, 6, 2, 7, 10, 12];

// for (listas)
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); // EO: 1, 4, 6, 2, 7, 10, 12
}

// for ... of (listas)
for (let value of list) {
  console.log(value); // EO: 1, 4, 6, 2, 7, 10, 12
}

// for ... each (listas)
list.forEach((value) => {
  console.log(value); // EO: 1, 4, 6, 2, 7, 10, 12
});

// for ... in (objetos)
let person = {
  name: "Victor",
  surname: "Csm",
  age: 30,
  isDeveloper: true,
  isWorkingHard: true,
};

let attr = "age";
console.log(person[attr]); // EO: 30

for (let attribute in person) {
  console.log(attribute);
  console.log(person[attribute]); // Voctpr. CS;. 30, true, true
}

// LOOPS
// While

// while (condition) {
//     Código a ejecutar
// }

let i = 0;
let max = 10;

while (i < max) {
  console.log(i); // EO: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  i++;
}

// WATCH OUT! No cometer el error de que sea un while infinito

/*------------------------------------------------------------------------------------------------------*/
// Do while

j = 15;
do {
  console.log("Estoy en el do while");
} while (j < max);
