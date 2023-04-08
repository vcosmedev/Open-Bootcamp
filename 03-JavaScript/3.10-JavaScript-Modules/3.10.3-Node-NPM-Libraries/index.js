// LIBRERÍAS
// Conjunto de utilidades creadas por otros desarrolladores que permiten ser utilizadas dentro de otros proyectos

// NPM (Node Package Manager) -> Permite instalar e importar dentro de otro proyecto (última versión, de forma automática, etc)
// NPM Library -> https://www.npmjs.com/

// Ejemplo: Axios -> Permite realizar llamadas http a diferentes servidores/direcciones/urls (peticiones get, post, patch, delete...)
// Instalar Axios -> https://www.npmjs.com/package/axios

// Utilizar Axios para llamar a servicios externos, por ejemplo, Poke API: https://pokeapi.co/

import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(function (response) {
    // handle success
    console.log("Success!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error :((((");
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("Always executed ;)");
  });
