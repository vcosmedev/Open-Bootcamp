// npm init -y

// First option: npm install eslint --save-dev
// Second option: npm i -D eslint -> 'D' viene de Developer, son dependencias de desarrollo, solo estarán en el proyecto en el que se está trabajando

// npm init @eslint/config -> Nos pregunta qué tipo de configuración realizar
//    > Use ESLint -> To check syntax, find problems, and enforce code style
//    > Por default, Common JS (require/exports) | JavaScript Modules (import/export) -> CommonJS
//    > Which framework -> None
//    > Use Typescript? -> No
//    > Where does your code run? -> node
//    > Define a style for your project= -> prompt
//    > Format to config to be in -> JSON
//    > Indentation -> spaces, 4
//    > Quotes -> Double
//    > Line endings -> Unix
//    > Semicolons -> yes

// ESTA CONFIG GENERA UN ARCHIVO DE CONFIGURACION -> .eslintrc.json

// TEST
const name = "Víctor";
const name2 = "Víctor";
// const name2 = 'Ander'; // Output: Strings must use doublequote
// Es posible desactivar ciertas rules para una línea de código - Activar o desactivar de forma temporal rules

/* eslint-disable */
/* eslint-enable */
/* eslint-disable-nex-lline indent */

// Desactivar en una línea de código una de la reglas establecidas con anterioridad:
const newString = "Esto es un string con single quotes"; // eslint-disable-line

// OTRAS CONFIGURACIONES A UTILIZAR SUGERIDAS POR LA DOCUMENTACIÓN:
// Link: https://www.npmjs.com/search?q=eslint-config
// Recomendado: eslint-config-standard <- Standarddd
// Siempre existirá la opción de sobreescribir rules

// Otra funcionalidad: arreglar de forma automática ciertos errores
// Crear un script que analice si existen errores o warnings en los archivos de un proyecto -> package.json ->> "lint": "eslint ."
// npm run lint
// --fix -> arreglar de forma automática ->> crear script para que se fixee solo ->> package.json > "lint-fix": "eslint --fix ."
