const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
];
// import images form "../tests/images"
// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id = id;
    this.name = name;
    this.image = `images/super-${id+1}.png`;
    this.strength = this.getRandomStrength();
    this.type = type;
  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };
 // Progression 2: Create a player for displaying
  view = () => {
     // Accumulate HTML template
  // Type your code here
    let player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('data-id', this.id);
    if (this.selected) player.classList.add('selected');
    let image = document.createElement('img');
    image.setAttribute('src', this.image);
    let name = document.createElement('div');
    name.textContent = this.name;
    let strength = document.createElement('div');
    strength.textContent = this.strength;
    strength.className = 'strength';
    player.append(image, name, strength);

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((player, i) => {
      let type = i % 2 === 0 ? 'hero' : 'villain';
      return new Player(i, player, type);
    });
  }
 // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };
// Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
