$(document).ready(function() {
  $("img").click(function() {
    $("p").show();
  });

});$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#design-showing").toggle();
    $("#design-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#development-showing").toggle();
    $("#development-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    $("#product-showing").toggle();
    $("#product-hidden").toggle();
  });
});