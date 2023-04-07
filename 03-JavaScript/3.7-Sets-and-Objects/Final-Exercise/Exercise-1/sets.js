// Un nuevo Set con los nombres de tu familia:
const family = ["Ángel", "Teresa", "Ángela", "Víctor"];
console.log(family); // EO: ["Ángel", "Teresa", "Ángela", "Víctor"]

const newFamily = new Set(family);
console.log(newFamily); // EO: Set { 'Ángel', 'Teresa', 'Ángela', 'Víctor' }

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo):
newFamily.add("Víctor");
console.log(newFamily); // EO: Set { 'Ángel', 'Teresa', 'Ángela', 'Víctor' }

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
newFamily.add("JavaScript");
console.log(newFamily); // EO: Set { 'Ángel', 'Teresa', 'Ángela', 'Víctor', 'JavaScript' }
