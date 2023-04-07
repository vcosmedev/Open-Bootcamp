// TRABAJAR CON FECHAS EN JS
// Definición: cuatro formas de inicializar fechas:

// 1- Fecha actual:
const date = new Date();
console.log(date); // EO: Thu Apr 06 2023 20:42:53 GMT-0500 (Central Daylight Time) -> En cada momento se actualiza la fecha actual

// 2- Estableciendo una fecha como parámetro - OJO: los meses inicializan en 0 (0 = Enero ... 11 = Diciembre):
const date2 = new Date(1989, 11); // Parámetros obligatorios: año, mes.
// const date2 = new Date(1989, 11, 20, 23, 11, 59, 192); // Parámetros opcionales: día (20), hora (), minutos (), segundos (), milisegundos ().
// fechas -> formateadas en milisegundos a partir de la fecha incial definida como '1 de enero de 1970'
console.log(date2); // EO: Fri Dec 01 1989 00:00:00 GMT-0600 (Central Standard Time)

// 3- Fechas a través de milisegundos:
const date3 = new Date(100000000000);
console.log(date3);
// También puede ser a través de milisegundos negativos:
// const date3 = new Date(-100000000000);

// 4- Fechas a través de strings:
const date4 = new Date("Diciembre 11, 1992 12:15:11");
console.log(date3); // EO: Sat Mar 03 1973 03:46:40 GMT-0600 (Central Standard Time)

// COMPARAR DOS FECHAS
// Objeto tipo fecha nos permita comparar si una fecha es posterior a otra
console.log(date > date2); // EO: true
console.log(date < date2); // EO: false

date5 = new Date(1989, 11); // Asignando date5 el mismo valor que date2
console.log(date5);

console.log(date === date5); // EO: false - ERROR -> NO SE PUEDEN COMPARAR FECHAS DE ESTA FORMA

// PARA PODER COMPARAR FECHAS HAY QUE CONVERTIRLAS PRIMERO A MILISEGUNDOS
// Obtener milisegundos de una fecha
// .getTime()
console.log(date2.getTime() === date5.getTime()); // EO: true

// OBTENER DÍA, MES Y AÑO DE UNA FECHA
// Obtener día .getDate():
console.log(date2.getDate()); // EO: 1
// Obtener mes (OJO, recuerda que los meses empiezan en 0, hay que sumar uno, +1) -> .getMonth():
console.log(date2.getMonth() + 1); // EO: 12
// Obtener año, getFullYear():
console.log(date2.getFullYear()); // EO: 1989

// ¿Cómo mostrar una fecha en un string?
// .toLocalDateString()
console.log(date2.toLocaleDateString("en-GB")); // EO: 01/12/1989
console.log(date2.toLocaleDateString("en-US")); // EO: 12/1/1989
// -> 'Local' sería el idioma/formato en el que pedimos la fecha -> Recurso: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
