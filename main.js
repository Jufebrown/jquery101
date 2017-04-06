// console.log('hello');

// sets h1 to say hello friends
$("h1").html("Hello Friends");

// food array
const foods = ["apple","banana","carrot","danish","egg"];

// loops over foods array and puts each item in list items
for (let i = 0; i < foods.length; i++) {
  $("ul").append("<li>" + foods[i] + "</li>");
}

$("ul").wrap(`<div class="foods"></div>`);
// $("ul").parent().toggleClass("foods");

$("input:first").val("new value");

$("input:last").click(() => {
  console.log($("input:first").val());
  $("input:first").val("");
});

// makes GET call to get random user data
$.getJSON("https://randomuser.me/api/?nat=us", (data) => {
  $("h1:first").html("Hello " + data.results[0].name.first.charAt(0).toUpperCase())
})
