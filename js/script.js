$(document).ready(function () {

$('#about-button').click(function () {
  if ($("#about-div").is(":hidden")) {
    $("#contact-div").slideUp('slow')
    $("#about-div").slideDown('slow');
  } else {
    $("#about-div").slideUp('slow');
  }
})


$('#contact-button').click(function () {
  if ($("#contact-div").is(":hidden")) {
    $("#about-div").slideUp('slow')
    $("#contact-div").slideDown('slow');
  } else {
    $("#contact-div").slideUp('slow');
  }
})

})
