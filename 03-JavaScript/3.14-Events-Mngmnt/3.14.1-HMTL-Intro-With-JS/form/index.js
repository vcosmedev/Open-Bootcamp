const form = document.getElementById("form");
console.log(form);

form.addEventListener("sumbit", (event) => {
  console.log(event);
  event.preventDefault();
});

// Transmisión de eventos -> Deprecated
