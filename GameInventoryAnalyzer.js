const games = [
  {
    name: "Minecraft",
    price: 1499,
    genre: "Sandbox",
    rating: 4.8,
  },
  {
    name: "The Witcher 3",
    price: 1999,
    genre: "RPG",
    rating: 4.9,
  },
  {
    name: "Valorant",
    price: 0,
    genre: "FPS",
    rating: 4.6,
  },
  {
    name: "Stardew Valley",
    price: 899,
    genre: "Simulation",
    rating: 4.8,
  },
  {
    name: "Elden Ring",
    price: 2999,
    genre: "RPG",
    rating: 4.9,
  },
  {
    name: "Counter-Strike 2",
    price: 0,
    genre: "FPS",
    rating: 4.5,
  },
  {
    name: "Terraria",
    price: 499,
    genre: "Sandbox",
    rating: 4.7,
  },
  {
    name: "Cyberpunk 2077",
    price: 2499,
    genre: "RPG",
    rating: 4.6,
  },
  {
    name: "League of Legends",
    price: 0,
    genre: "MOBA",
    rating: 4.4,
  },
  {
    name: "Hades",
    price: 999,
    genre: "Action",
    rating: 4.8,
  },
  {
    name: "Dota 2",
    price: 0,
    genre: "MOBA",
    rating: 4.5,
  },
  {
    name: "Grand Theft Auto V",
    price: 1499,
    genre: "Action",
    rating: 4.7,
  },
  {
    name: "Hollow Knight",
    price: 699,
    genre: "Action",
    rating: 4.9,
  },
  {
    name: "Apex Legends",
    price: 0,
    genre: "FPS",
    rating: 4.3,
  },
  {
    name: "Baldur's Gate 3",
    price: 2999,
    genre: "RPG",
    rating: 4.9,
  },
  {
    name: "Among Us",
    price: 149,
    genre: "Party",
    rating: 4.2,
  },
  {
    name: "Rocket League",
    price: 0,
    genre: "Sports",
    rating: 4.4,
  },
  {
    name: "Cuphead",
    price: 799,
    genre: "Action",
    rating: 4.6,
  },
  {
    name: "Civilization VI",
    price: 1299,
    genre: "Strategy",
    rating: 4.7,
  },
  {
    name: "Portal 2",
    price: 399,
    genre: "Puzzle",
    rating: 4.9,
  },
];

function getGameNames(games) {
  return games.map((game) => game.name);
}

function getFreeGames(games) {
  return games.filter((game) => game.price === 0);
}

function getHighlyRatedGames(games) {
  return games.filter((game) => game.rating >= 4.5);
}

function getGamesByGenre(games, genre) {
  return games.filter((game) => game.genre === genre);
}
function findGame(games, game) {
  return games.find((game) => game.name);
}

console.log("All game names: ", getGameNames(games));
console.log("Free Games: ", getFreeGames(games));
console.log("Highly Rated Games: ", getHighlyRatedGames(games));
console.log("Games from one genre: ", getGamesByGenre(games, "FPS"));
console.log("One Specific game: ", findGame(games, "Minecraft"));
