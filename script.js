$(document).ready(function(){
var quotes = [];

  $.ajax({
    type: 'GET',
    url: 'quotes.json',
    success: function(result){
      quotes = result;
      console.log(quotes);
      newQuote();
    }
  })

  $("#new-quote").click(newQuote);

  function newQuote(){
    var i = Math.floor((Math.random() * quotes.length));
    console.log(i);

    $("#text").fadeOut(1000,function(){
      $("#text").text(quotes[i].text).fadeIn(500);
    });
    $("#author").fadeOut(1000,function(){
      $("#author").text(quotes[i].author).fadeIn(500);
    });

    $(".wrapper, #new-quote, #tweet-quote, #add-quote, #addText, #addAuthor, #addColor").css("background-color", quotes[i].color);
    $("#text, #author").css("color", quotes[i].color);
  }

});
