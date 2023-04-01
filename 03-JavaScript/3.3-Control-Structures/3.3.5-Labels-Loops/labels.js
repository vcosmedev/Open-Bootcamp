// NO ES UNA BUENA PRÁCTICA

// Labels

let uds = 0;
let dcs = 0;

// Example without labels
// Counter
while (true) {
  while (true) {
    console.log(`El número actual es: ${dcs}${uds}`);
    uds++;
    if (uds === 10) {
      uds = 0;
      break;
    }
  }
  dcs++;
  if (dcs === 2) {
    console.log(`El número actual es: ${dcs}${uds}`);
    break;
  }
}

// Example with labels
// Counter
bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El número actual es: ${dcs}${uds}`);
    uds++;
    if (uds === 10) {
      uds = 0;
      break bucleUnidades;
    }
    if (dcs === 2) {
      break bucleDecenas;
    }
  }
  dcs++;
}

console.log("Ya hemos terminado"); // EO: Ya hemos terminado
