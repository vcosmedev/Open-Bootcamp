// SELECT HTML ELEMENTS
const paragraphs = document.querySelectorAll(".paragraph"); // Obtener todos elementos con clase "paragraph"
const sections = document.querySelectorAll(".section"); // Obtener todos elementos con clase "section"
const bin = document.querySelector(".bin");

// EVENTS
paragraphs.forEach((paragraph) => {
  // REGISTER EVENT HANDLERS
  paragraph.addEventListener("dragstart", (event) => {
    console.log("Estoy arrastrando el párrafo: " + paragraph.innerText);
    paragraph.classList.add("dragging");
    event.dataTransfer.setData("id", paragraph.id);
    const ghostElement = document.querySelector(".ghostImage");
    event.dataTransfer.setDragImage(ghostElement, 0, 0); // ghostElement, offsetX, offsetY
  });
  // REGISTER EVENT HANDLERS
  paragraph.addEventListener("dragend", () => {
    // dragend -> event
    console.log("He terminado de arrastrar el párrafo: " + paragraph.innerText);
    paragraph.classList.remove("dragging");
  });
});

sections.forEach((section) => {
  // REGISTER EVENT HANDLERS
  section.addEventListener("dragover", (event) => {
    event.preventDefault(); // Prevenir esste comportamiento por defecto
    event.dataTransfer.dropEffect = "copy"; // dropEffect = "copy" -> por default
  });
  // REGISTER EVENT HANDLERS
  section.addEventListener("drop", (event) => {
    console.log("Drop...");
    const paragraphId = event.dataTransfer.getData("id");
    const paragraph = document.getElementById(paragraphId);
    section.appendChild(paragraph);
  });
});

bin.addEventListener("dragover", (event) => {
  event.preventDefault(); // Prevenir este comportamiento por defecto
  event.dataTransfer.dropEffect = "copy";
});

bin.addEventListener("drop", (event) => {
  const paragraphId = event.dataTransfer.getData("id");
  document.getElementById(paragraphId).remove();
});
