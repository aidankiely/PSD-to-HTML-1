$(document).ready(function (){
    alert("jquery loaded");
    $("h3").css({border: "3px solid blue"})
    $(".wrapper").css({border: "3px solid red"})
    $("#clients").css({border: "3px solid yellow"})

    $("#contact-methods").css({border: "2px solid"}).next().css({border: "2px solid green"})
});

var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'> The big fight live!</div>";

$("#tweets div").append(tweet);

$("section").wrap("<div>");
$("section").unwrap();
$("section").wrapAll("<div>");

$(".button").remove
$("#points-of-sale").empty();

$("#contact img").attr("alt",
"location");


$("#social-nav").css("top", "-125px").css("left", "50px");