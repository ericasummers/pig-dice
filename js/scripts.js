// back end
var turnOption = "";
var turnScore = [];
var roundOver = "Your turn is over";
var roundPlay = "Would you like to hold or roll again?";

function Player (playerName, score) {
  this.playerName = name;
  this.score = 0;
}

// Player.prototype.updateScore = function() {
//   this.score +  this.score  = this.ongoingScore;
// }


// Player.prototype.
//
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
        player1.score += turnSum;
        $(".ponetotal").text(player1.score);
        console.log(player1.score);

      } else if ($(".player2show").is(':visible')) {
        $(".ptwoscore").text(turnSum);
        player2.score += turnSum;
        $(".ptwototal").text(player2.score);
        console.log(player2.score);
      }

      // var player1scoretotal = turnSum + player1.score;
      // player1.score = player1scoretotal;
      // for (i=0; Player.score<=100; i++) {
      //   if ($(".player1show").is(':visible')) {
      //     turnSum +  Player1.score
      //   }
      // }
    });
  });
    $("#switch").click(function() {
      turnScore = [];
      // player1.score.push(turnSum);
      if ($(".player1show").is(':visible')) {
      $("#showroll").empty();
      $("#showResult").empty();
      $(".player2show").toggle();
      $(".player1show").toggle();
    } else if ($(".player2show").is(':visible')) {
      turnScore = [];
      // player2.score.push(turnSum);
      $("#showroll").empty();
      $("#showResult").empty();
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
