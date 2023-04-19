$(() => {
  $("#hide-btn-jquery").click(() => {
    console.log("Hiding...");
    $("h1").fadeOut();
  });
});

$(() => {
  $("#show-btn-jquery").click(() => {
    console.log("Showing...");
    $("h1").fadeIn();
  });
});
