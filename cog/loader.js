function loadGames() {
  for (game in gamelist) {
    document.getElementById(list).innerHTML += '<li><a href="'+game.link+'">'+game.name+'</a></li>'
  }
}
