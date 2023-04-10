// Crea un nuevo fichero JS que contenga las siguientes líneas:
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números
//   de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

// let debug = function (num) {
//     if (num <= 1) return num;

//     return debug(num - 1) + debug(num - 2);
//   };

// console.log(debug(10));

function fib(num) {
  const fib = [0, 1];

  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
}

console.log(fib(6));
