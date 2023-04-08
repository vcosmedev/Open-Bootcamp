// console.log("Hola, estoy saliendo por pantalla ;)");
// console.info("Hola, esto es un mensaje informativo :))))))");
// console.debug("Hola, esto es un mensaje de debug o.O");
// console.warn("Hola, esto es un mensaje de adevertencia :O");
// console.error("Hola, esto es un mensaje de error :////////");

// Librería WINSTON
// https://www.npmjs.com/package/winston
// Permite llevar un manejo de estos logs de una forma más exhaustiva
// Existe la posibilidad de guardar estos mensajes (logs) en un archivo para revisar con posterioridad los tipos

// const winston = require("winston");

// const logger = winston.createLogger({
//   level: "debug", // SEGÚN EL NIVEL INDICADO EN EL APARTADO DE 'LEVEL', SE TENDRÁN EN CUENTA TODOS LOS TIPOS DE ERRORES IGUALES O INFERIORES AQUÍ ESTABLECIDOS
//   format: winston.format.json(), // WINSTON TRABAJA CON DIFERENTES FORMATOS, EN ESTE CASO JSON AUNQUE PODRÍAN SER FECHAS U OTROS FORMATOS CUSTOMIZADOS
//   defaultMeta: { service: "user-service" }, // MENSAJE ESTÁNDAR, PODEMOS ELIMINARLO SI QUEREMOS
//   transports: [
//     // TODAS LAS ACCIONES QUE SE VAN A EJECUTAR CADA VEZ QUE HAYA UN LOG
//     //
//     // - Write all logs with importance level of `error` or less to `error.log`
//     // - Write all logs with importance level of `info` or less to `combined.log`
//     //
//     // PODEMOS CREAR UN FICHERO NUEVO, EJEMPLO
//     new winston.transports.Console(), // A PARTE DE GUARDAR LOS LOGS INDICADOS, LOS VA A MOSTRAR POR PANTALLA
//     // Console
//     // HTTP -> Llamada a una API
//     // Stream -> verlo en tiempo real
//     new winston.transports.File({ filename: "error.log", level: "error" }),
//     new winston.transports.File({ filename: "combined.log" }),
//   ],
// });

const logger = require("./logger");

logger.info("Hola, esto es un mensaje informativo :))))))");
logger.debug("Hola, esto es un mensaje de debug o.O");
logger.warn("Hola, esto es un mensaje de adevertencia :O");
logger.error("Hola, esto es un mensaje de error :////////");

// Levels
// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   };
