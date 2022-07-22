$(document).ready(function(){
  $.getJSON("gamelist.json", function(result){
    $.each(result, function(i, game){
      $("div").append('<li><a href="'+game.link+'">'+game.name+'</a></li>');
    });
  });
});
