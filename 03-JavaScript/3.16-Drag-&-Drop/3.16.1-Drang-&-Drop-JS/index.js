const paragraphs = document.querySelectorAll(".paragraph");
// console.log(paragraphs);

// Events
// paragraphs.forEach((paragraph) => {
//   paragraph.addEventlistener("click", () => {
//     console.log("click");
//   });
// });

// dragstart
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", () => {
    console.log("Estoy arrastrando el párrafo: " + paragraph.innerText);
    paragraph.classList.add("dragging");
  });
  paragraph.addEventListener("dragend", () => {
    console.log("He terminado de arrastrar el párrafo: " + paragraph.innerText);
    paragraph.classList.remove("dragging");
  });
});

// dragover

// drop
