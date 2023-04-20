let name = "Víctor";
let surname = "Cos";

const fullName = { name: "Víctor", surname: "Cos" };

// Almacena el objeto anterior en la SessionStorage:
sessionStorage.setItem("person", JSON.stringify(fullName));

// Almacena el objeto anterior en la LocalStorage:
localStorage.setItem("person", JSON.stringify(fullName));

// Crea una cookie que caduque en 2 minutos con los datos del objeto anterior:
document.cookie = "cookieName=VicCookie";
document.cookie =
  "expirationCookie=Cookie; expires=" + new Date(2023, 3, 23).toUTCString();
console.log(document.cookie);
// max-age=2*60*1000"
