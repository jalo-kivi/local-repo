const footballTeam = {
  team: "Thunderbolts",
  year: 2010, 
  headCoach: "Coach",
  players: [
    {
      name: "Yelena",
      position: "goalkeeper",
      isCaptain: true,
    },
    {
      name: "Bucky",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Red Guardian",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Bob",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ava",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Walker",
      position: "forward",
      isCaptain: false,
    },
],
};


let headCoach = document.getElementById("head-coach");
let team = document.getElementById("team");
let year = document.getElementById("year");

headCoach.textContent = footballTeam.headCoach;

team.textContent = footballTeam.team;

year.textContent = footballTeam.year;

let select = document.getElementById("players");

let playerCardsContainer = document.getElementById("player-cards");


function displayPlayers(players) {
  playerCardsContainer.innerHTML = '';

  players.forEach(player => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("player-card");

  const name = document.createElement("h2");
  name.textContent = player.isCaptain
    ? `(Captain) ${player.name}`
    : player.name;

  const position = document.createElement("p");
  position.textContent = `Position: ${player.position}`;

  cardDiv.appendChild(name);
  cardDiv.appendChild(position);
  
  playerCardsContainer.appendChild(cardDiv);
 });
}

displayPlayers(footballTeam.players);

const filter = document.getElementById("players");

filter.addEventListener("change", () => {
  let selected = filter.value.toLowerCase();

  let filteredPlayers = [];
  if (selected === "all") {
    filteredPlayers = footballTeam.players; 
  } else {
    filteredPlayers = footballTeam.players.filter(player => player.position === selected); 
    
  }

  displayPlayers(filteredPlayers);
});