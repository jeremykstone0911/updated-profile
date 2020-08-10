$(document).ready(function () {
  $("#contact").addClass("d-none");
  $("#portfolio").addClass("d-none");
  $("#about-me").removeClass("d-none");
});

$("#portfolio-button").click(function (event) {
  $("#about-me").addClass("d-none");
  $("#contact").addClass("d-none");
  $("#portfolio").removeClass("d-none");
});

$("#contact-button").click(function (event) {
  $("#about-me").addClass("d-none");
  $("#portfolio").addClass("d-none");
  $("#contact").removeClass("d-none");
});

$("#about-button").click(function (event) {
  $("#contact").addClass("d-none");
  $("#portfolio").addClass("d-none");
  $("#about-me").removeClass("d-none");
});
