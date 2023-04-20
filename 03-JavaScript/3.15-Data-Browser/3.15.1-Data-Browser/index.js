// Dev Tools -> Application

// 1- LOCAL STORAGE -> clear, getItem, key, removeItem, setItem.

// Establecer un valor -> setItem
localStorage.setItem("name", "Vic");
localStorage.setItem("name", "Ander");

// Obtener valor anterior -> getItem
// console.log(localStorage.getItem("name"));

// console.log(
//   localStorage.setItem("person", JSON.stringify({ name: "Roge", age: 2 }))
// );
// console.log(JSON.parse(localStorage.getItem("person")));

// JSON.stringify -> Convierte objeto/array en string
// JSON.parse -> Convierte objeto/array convertido a través de stringify en un objecto de JS

// ¿CÓM ELIMINAR ITEM DE LOCALSTORAGE?
localStorage.removeItem("name");

// 2- SESSION STORAGE -> setItem, getItem, removeItem, key, clear
sessionStorage.setItem("session-name", "Víctor");

// 3- COOKIES
document.cookie = "cookieName=CookieVic";
document.cookie =
  "expirationName=Name; expires=" + new Date(2024, 0, 1).toUTCString();
console.log(document.cookie);
// ¿Cómo otorgar una caducidad a una cookie?
