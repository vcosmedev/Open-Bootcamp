// Fecha de hoy:
const date = new Date();
console.log(date); // EO: Fri Apr 07 2023 00:19:20 GMT-0500 (Central Daylight Time)

// Fecha de nacimiento:
const birthDate = new Date(1991, 10, 10);
console.log(birthDate); // EO: Wed Dec 11 1991 00:00:00 GMT-0600 (Central Standard Time)

// Variable que indique si hoy es más tarde (>) que la fecha de nacimiento:
let isGreater = date > birthDate;
console.log(isGreater); // EO: true

// Variable que contenga día de nacimiento
let birthDay = birthDate.getDay();
console.log(birthDay); // EO: 0 -> Sunday

// Variable que contenga mes de nacimiento
let birthMonth = birthDate.getMonth();
console.log(birthMonth); // EO: 10

// Variable que contenga año de nacimiento (con 4 dígitos)
let birthYear = birthDate.getFullYear();
console.log(birthYear); // EO: 1991
