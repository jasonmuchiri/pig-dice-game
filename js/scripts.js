function Names(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function dieRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}

var playerRoll = function() {
  var roll = dieRoll();
  if(roll ===1){
    pigGame.turnScore = 0;
    alertEndTurn();
    switchPlayer();
  } else {
    pigGame.turnScore +=roll;
    if (pigGame.playerUp === 1) {
      if (pigGame.turnScore + pigGame.player1Score >= 100) {
        alertWinner(1);
      }
    } else if (pigGame.turnScore + pigGame.player2Score >= 100) {
      alertWinner(2);
  }
  }
  return roll;
}

function holdThePig() {
  var currentPlayer = pigGame.playerUp;
  if (currentPlayer ===1) {
    pigGame.player1Score += pigGame.turnScore;
  } else {
    pigGame.player2Score += pigGame.turnScore;
  }
  pigGame.turnScore = 0;
  switchPlayer();
}


function switchPlayer () {
  if (pigGame.playerUp === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    pigGame.playerUp = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    pigGame.playerUp = 1;

  }
}

function resetGame() {
  pigGame.player1Score = 0;
  pigGame.player2Score = 0;
  pigGame.playerUp = 1;
  pigGame.turnScore = 0;
}

// -----BUSINESS LOGIC --- (above) -----
// ------------------------------------
// ----USER LOGIC ---- (below)--------


function alertEndTurn(){
  alert("SORRY You rolled a 1.Your score remains the same BUT your turn is over.");
  $(".playerStatus").text(pigGame.playerUp);
}

function alertWinner(playerNumber) {
  alert("Player " + playerNumber + " WINS the game.");
  resetGame();
  $(".pigStatusDisplay").text(0);
}

$(document).ready(function() {

  $("form#gamePig").submit(function(event){
    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();
      $("span#player1").text(player1);
      $("span#player2").text(player2);
      $("#player2Button").hide();
      $("#player1Button").show();
      $(".playerStatus").text(pigGame.playerUp);
      event.preventDefault();

    var nameHolder = new Names(player1, player2);
  })


  $(".rollPig").click(function() {
    pigResult = playerRoll();
    $(".rollResult").text(pigResult);
    $(".turnScore").text(pigGame.turnScore);

  });

  $(".holdPig").click(function(){
    holdThePig();
    $("rollResult").text("");
    $(".player1Score").text(pigGame.player1Score);
    $(".player2Score").text(pigGame.player2Score);
    $(".playerStatus").text(pigGame.playerUp);
  });
});
