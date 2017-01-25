// back end
var turnOption = "";
var turnScore = [];
var roundOver = "Your turn is over";
var roundPlay = "Would you like to hold or roll again?";

function Player (playerName, score) {
  this.playerName = name;
  this.score = [];
}

// Player.prototype.updateScore = function() {
//   this.score +  this.score  = this.ongoingScore;
// }


// Player.prototype.

var player1 = new Player("playerone",0)
var player2 = new Player("playertwo",0)


function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rollReturn(roll) {
  if (roll === 1) {
    // alert(roundOver);
    return roundOver;
  } else {
    return roundPlay;
  }

}


// front end
$(function () {
  $(".nameInputs").submit(function(event) {
    event.preventDefault();
    var playerOneNameInput = $("input#playeronename").val();
    var playerTwoNameInput = $("input#playertwoname").val();
    $(".ponename").text(playerOneNameInput);
    $(".ptwoname").text(playerTwoNameInput);
  });

  $("#roll").click(function() {
    var rollResult = roll(1, 6);
    $("#showroll").text(rollResult);
    turnScore.push(rollResult);
    // alert(turnScore);

    var turnOutput = rollReturn(rollResult);
    $("#hold").removeClass("btn disabled");
    $("#hold").addClass("btn active");
    $("#showResult").text(turnOutput);

    $("#hold").click(function() {
      var turnSum = 0;
      for (var index = 0; index < turnScore.length; index += 1) {
      turnSum += turnScore[index];
      }

      if ($(".player1show").is(':visible')) {
      $(".ponescore").text(turnSum);
      } else if ($(".player2show").is(':visible')) {
      $(".ptwoscore").text(turnSum);
      }

    });
  });
    $("#switch").click(function() {
      if ($(".player1show").is(':visible')) {
      $(".player2show").toggle();
      $(".player1show").toggle();
    } else if ($(".player2show").is(':visible')) {
      $(".player1show").toggle();
      $(".player2show").toggle();
      }
    });
});
//parseInt(input and ongoing score)
  // $("#rollAgain").click(function() {
  //   var rollResult = roll(1, 6);
  //   $("#showroll").text(rollResult);

// });
