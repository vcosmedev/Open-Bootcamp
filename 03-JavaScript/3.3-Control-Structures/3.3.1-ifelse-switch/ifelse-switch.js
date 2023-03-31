// Bifurcaciones if ... else

if (true) {
  console.log("It's true!");
}
// EO: It's true!

if (false) {
  console.log("It's true");
} else {
  console.log("It's not true :(");
}
// EO: It's not true :(

let funds = 50;
let cash = 25;

if (cash < funds) {
  console.log("Cash available to withdraw");
} else {
  console.log("Insuficient funds");
}
// EO: Cash available to widthdraw
let cash2 = 55;
if (cash2 < funds) {
  console.log("Cash available to withdraw");
} else {
  console.log("Insuficient funds");
}
// EO: Insuficident funds

/*------------------------------------------------------------------------------------------------------*/

// IF ELSE + IF ELSE

let grade = 5;

if (grade === 5) {
  console.log("Congrats! You got a brilliant!");
} else if (grade === 4) {
  console.log("Good job! You can keep improving!");
} else if (grade === 3) {
  console.log("Good! You need an extra mile!");
} else if (grade === 2) {
  console.log(
    "Sorry, you did not pass the exam. Yo have to put more effort! You almost have it!"
  );
} else if (grade === 1) {
  console.log(
    "I'm sorry but you did not pass the examen, you barely studied. Cheer up and show your effort next time!"
  );
} else {
  console.log(
    "May be there is an error. Please, enter a valid grade from 1 to 5. Thank you!"
  );
}

// SWITCH
// Refactorizar código anterior con el operador 'SWITCH' que permite, en función de un valor, establecer varias condiciones

let newGrade = 5;

switch (newGrade) {
  case 5:
    console.log("Congrats! You got a brilliant!");
    break;
  case 4:
    console.log("Good job! You can keep improving!");
    break;
  case 3:
    console.log("Good! You need an extra mile!");
    break;
  case 2:
    console.log(
      "Sorry, you did not pass the exam. Yo have to put more effort! You almost have it!"
    );
    break;
  case 1:
    console.log(
      "I'm sorry but you did not pass the examen, you barely studied. Cheer up and show your effort next time!"
    );
    break;
  default:
    console.log(
      "Sorry, there must be a mistake. Try to enter a value from 1 to 5 please! :)"
    );
    break;
  // Es una buena práctica establecer 'default: break' para que siempre exista un caso donde entrar
}
