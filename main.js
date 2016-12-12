console.log('hello');
$("h1").html("Hello Friends");

var foods = ["apple","banana","carrot","danish","egg"];

for (var i = 0; i < foods.length; i++) {
  $("ul").append("<li>" + foods[i] + "</li>");
}

$("ul").wrap(`<div class="foods"></div>`);
// $("ul").parent().toggleClass("foods");

$("input:first").val("new value");

$("input:last").click(function() {
  console.log($("input:first").val());
  $("input:first").val("");
});

$.getJSON("https://randomuser.me/api/?nat=us", function(data){

  $("h1:first").html("Hello " + data.results[0].name.first.charAt(0).toUpperCase())
})
