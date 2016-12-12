console.log('hello');
$("h1").html("Hello Friends");

var foods = ["apple","banana","carrot","danish","egg"];

for (var i = 0; i < foods.length; i++) {
  $("ul").append("<li>" + foods[i] + "</li>");
}

$("ul").wrap(`<div class="foods"></div>`);
// $("ul").parent().toggleClass("foods");
