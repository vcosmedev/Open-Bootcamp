// Casos muy específicos - break, continue
list = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]); // EO: 1, 2, 3, 4, 5, 6, 7, 8
// }

for (let i = 0; i < list.length; i++) {
  if (list[i] === 3) {
    continue;
  }

  console.log(list[i]); // EO: 1, 2, 4, 5, 6

  if (list[i] > 5) {
    break;
  }
}

// OJO, MALA PRÁCTICA, DIFICULTA LA LEGIBILIDAD DEL CÓDIGO

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Cuál es el ámbito de un bucle
// Alcance que tienen las variables declaradas dentro de un bucle
// let -> dentro del bucle
// var -> fuera del bucle ya que tiene alcance global
// Preferible utilizar let entre otras cosas porque la variable 'i' se utiliza de forma genérica como nombre en los bucles
