class Game {
  constructor( time, home_team, away_team, score ) {
    this.time = time;
    this.home_team = home_team;
	  this.away_team = away_team;
	  this.score = score;
  }
}

function myFunction() {
  var game1 = new Game( '2:30pm' , 'Matty T' , 'Calvin' , '0-500' );
  document.write ( game1.time + " " + game1.home_team + " " + game1.away_team + " " + game1.score );
}
