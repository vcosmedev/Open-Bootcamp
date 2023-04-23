// PARA PRACTICAR DRAG & DROP: proyecto Puzzle

const paragraphs = document.querySelectorAll(".paragraph"); // Obtener todos elementos con clase "paragraph"
// console.log(paragraphs);
const sections = document.querySelectorAll(".section"); // Obtener todos elementos con clase "section"

// Events
// paragraphs.forEach((paragraph) => {
//   paragraph.addEventlistener("click", () => {
//     console.log("click");
//   });
// });

// dragstart
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", (event) => {
    // dragstart -> event
    console.log("Estoy arrastrando el párrafo: " + paragraph.innerText);
    paragraph.classList.add("dragging");
    event.dataTransfer.setData("id", paragraph.id);
    const ghostElement = document.querySelector(".ghostImage");
    event.dataTransfer.setDragImage(ghostElement, 0, 0); // 3 elements required: ghostElement, offset X, offset Y
  });
  paragraph.addEventListener("dragend", () => {
    // dragend -> event
    console.log("He terminado de arrastrar el párrafo: " + paragraph.innerText);
    paragraph.classList.remove("dragging");
  });
});

// dragover -> event
sections.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
    // Prevenir comportamiento por defecto
    // console.log("Drag over...");
    event.dataTransfer.dropEffect = "move"; // -> dropEffect = "move" | dropEffect = "copy" | dropEffect = "link" | dropEffect = "none" -> por defecto: "copy"
  });
  // drop -> event
  section.addEventListener("drop", (event) => {
    console.log("Drop...");
    // event.dataTransfer
    // Propiedad que permite transferir información por medio de los eventos relacionados con "drag and drop"
    const paragraphId = event.dataTransfer.getData("id");
    // console.log("Paragraph ID:", paragraphId);
    const paragraph = document.getElementById(paragraphId);
    section.appendChild(paragraph);
  });
});

// dataTransfer -> setData + getData
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData

// setDragImage()
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage
