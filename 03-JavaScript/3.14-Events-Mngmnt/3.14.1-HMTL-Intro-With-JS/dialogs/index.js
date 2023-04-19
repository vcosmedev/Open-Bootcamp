// Add listener to Btn para realizar acciones

const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", () => {
  //   console.log("click");

  //   alert("Click has been made ;)"); -> ALERT

  //   confirm("Do you agree?") && console.log("OK"); // -> CONFIRM: aceptar o rechazar | && console.log()-> Desigualdad ternaria && -> Para manejar respusta positiva
  confirm("Do you agree?") ? console.log("OK") : console.log("NO");
  // -> Para manejar respuesta positiva y negativa -> OPERADOR TERNARIO

  // OTRA FORMA
  //   const answer = confirm("Sure?");
  //   if (answer) {
  //     console.log("You agreed");
  //   } else {
  //     console.log("You're not agreed");
  //   }
});

const info = document.querySelector("#info");

info.addEventListener("click", () => {
  const name = prompt("What is your name?");
  if (name) {
    console.log(`Your name is ${name}`);
  } else {
    console.log("Input is empty");
  }
});

const arr = [
  {
    name: "Víctor",
    age: 30,
  },
  {
    name: "Ander",
    age: 33,
  },
  {
    name: "Julen",
    age: 29,
  },
];

// console.log(arr);
console.table(arr);
