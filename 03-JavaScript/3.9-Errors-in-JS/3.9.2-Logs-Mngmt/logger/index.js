// DEFINIR OBJETO LOGGER AQUÍ <--
// POSTERIORMENTE, EXPORTARLO PARA PONER A DISPOSICIÓN DE TODO EL PROYECTO ESTE OBJETO LOGGER
// DE ESTA FORMA, CUANDO ESTEMOS CREANDO NUESTRO CÓDIGO, LA CONFIGURACIÓN DE ESTE LOGGER NO NOS VA A AFECTAR
// APLICANDO ESTA PRÁCTICA AHORRAMOS MUCHAS LÍNEAS DE CÓDIGO EN EL ARCHIVO PRINCIPAL DE NUESTRO PROYECTO :))))

const winston = require("winston");

const logger = winston.createLogger({
  level: "debug", // SEGÚN EL NIVEL INDICADO EN EL APARTADO DE 'LEVEL', SE TENDRÁN EN CUENTA TODOS LOS TIPOS DE ERRORES IGUALES O INFERIORES AQUÍ ESTABLECIDOS
  format: winston.format.json(), // WINSTON TRABAJA CON DIFERENTES FORMATOS, EN ESTE CASO JSON AUNQUE PODRÍAN SER FECHAS U OTROS FORMATOS CUSTOMIZADOS
  defaultMeta: { service: "user-service" }, // MENSAJE ESTÁNDAR, PODEMOS ELIMINARLO SI QUEREMOS
  transports: [
    // TODAS LAS ACCIONES QUE SE VAN A EJECUTAR CADA VEZ QUE HAYA UN LOG
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // PODEMOS CREAR UN FICHERO NUEVO, EJEMPLO
    new winston.transports.Console(), // A PARTE DE GUARDAR LOS LOGS INDICADOS, LOS VA A MOSTRAR POR PANTALLA
    // Console
    // HTTP -> Llamada a una API
    // Stream -> verlo en tiempo real
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
