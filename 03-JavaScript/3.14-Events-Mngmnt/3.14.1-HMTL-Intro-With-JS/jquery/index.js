// Import JQUERY into our file
// $("selector").acción()

// $("li").hide();

// $(document).ready(() => {

// })

// De la forma anterior, se ejecutará una vez se cargue la página (document).ready
// También se puede utilizar la forma simplificada como sigue:

$(() => {
  // Selectores
  // id -> id="li-1" -> #li-1
  // class -> class="li-1" -> .li-1
  //   $("#li-1").hide();

  $(".hide-btn").click(() => {
    console.log("Hiding...");
    // $("h1").hide();
    $("h1").fadeOut(); // -> Desvanecimiento
  });

  $(".show-btn").click(() => {
    console.log("Showing...");
    // $("h1").show();
    $("h1").fadeIn(); // Desvanecmiento
  });
  //   $("li").click(() => {
  //     $("h1").css({ color: "red" });
  //   });
  $("li").dblclick(() => {
    $("h1").css({ color: "red" });
  });
  $(".new-element").click(() => {
    // $("ul").append("<li>New Element</li>"); // append -> add new element
    $("ul").prepend("<li>New Element</li>"); // append -> add new element at the beginning
  });
  //   $("li").mouseenter(() => { // mouseenter -> cada vez que haga hover sobre el elemento, que cambie de color
  //     console.log("Ha entrado el ratón (hover)");
  //   });
  // Si se quiere cambiar únicament el elemento sobre el que se está haciendo hover...
  $("li").mouseenter((elem) => {
    elem.target.style.color = "blue"; // JS Nativo
  });
  $("li").mouseleave((elem) => {
    // mouseleave -> cuando salgamos de ese elemento que cambie de nuevo a otro color, negro
    elem.target.style.color = "black";
  });
});
