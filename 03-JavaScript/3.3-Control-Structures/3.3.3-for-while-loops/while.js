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
