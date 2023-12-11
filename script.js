$(document).ready(function (){
    alert("jquery loaded");
    $("h3").css({border: "3px solid blue"})
    $(".wrapper").css({border: "3px solid red"})
    $("#clients").css({border: "3px solid yellow"})

    $("#contact-methods").css({border: "2px solid"}).next().css({border: "2px solid green"})
});

