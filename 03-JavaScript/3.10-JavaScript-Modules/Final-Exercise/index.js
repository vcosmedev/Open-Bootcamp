import { addition, multiplication } from "./modules/controller.js";
import chalk from "chalk";

const add1 = addition(1, 2);
console.log(add1);

const add2 = addition(4, 5);
console.log(add2);

const mult = multiplication(add1, add2);

// Instalar e importar librería chalk -> https://www.npmjs.com/package/chalk
// Modificar el úlitmo console.log del entrypoint index.js para devolver resultado en color verde
console.log(chalk.green(mult));
