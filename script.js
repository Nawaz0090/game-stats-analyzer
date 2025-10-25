const games = [
  { name: "Call of Duty", genre: "Action", rating: 9 },
  { name: "FIFA 23", genre: "Sports", rating: 8 },
  { name: "Minecraft", genre: "Adventure", rating: 9.5 },
  { name: "GTA V", genre: "Action", rating: 9.3 },
  { name: "Need for Speed", genre: "Racing", rating: 7.8 },
  { name: "Valorant", genre: "Shooter", rating: 8.5 },
  { name: "The Witcher 3", genre: "RPG", rating: 9.8 },
  { name: "PUBG", genre: "Shooter", rating: 8.2 }
];


function loadGames(data) {
  const container = document.getElementById("gameContainer");
  container.innerHTML = "";

  data.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <h3>${game.name}</h3>
      <p>Genre: ${game.genre}</p>
      <p>Rating: ${game.rating}</p>
    `;
    container.appendChild(card);
  });
}


function showAllGames() {
  loadGames(games);
}


function showTopRated() {
  const topGames = games.filter(game => game.rating > 8);
  loadGames(topGames);
}


function showActionGames() {
  const actionGames = games.filter(game => game.genre === "Action");
  loadGames(actionGames);
}


function resetList() {
  loadGames(games);
}


loadGames(games);
