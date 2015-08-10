
var Player = function(name){
  this.name = name;
  this.pick = null;
};

var Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function(choice){
  this.pick = choice;
};

Game.prototype.winner = function(){
  if (this.player1.pick === this.player2.pick)
    return null;
  else if (this.player1.pick === "rock"){
    if (this.player2.pick === "scissors")
      return this.player1;
    else if (this.player2.pick === "paper")
      return this.player2;
  }

  else if (this.player1.pick === "paper"){
    if (this.player2.pick === "rock"){
      return this.player1;
    }
    else if (this.player2.pick === "scissors"){
      return this.player2;
    }
  }
  else if(this.player1.pick === "scissors"){
    if(this.player2.pick === "rock")
      return this.player2;
    else if(this.player2.pick === "paper")
      return this.player1;
  }
};
