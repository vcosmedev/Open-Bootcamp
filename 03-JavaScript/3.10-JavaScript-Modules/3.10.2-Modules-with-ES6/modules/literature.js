// OTRA FORMA DE EXPORTAR POR DEFECTO -> default
// NUEVO MÓDULO -> LITERATURA

const getAuthor = () => {
  return "Miguel de Cervantes";
};

export const getYear = () => {
  return "1605";
};

export default getAuthor;

// IMPORTANTE
// Cada archivo puede tener solamente un 'export default'
// Sin embargo, puede tener todas las propiedades que se requieran por nombre

export const book = "Don Quijote de la Mancha";
