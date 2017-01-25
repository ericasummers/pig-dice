// back end
var turnOption = "";
var turnScore = [];

function Player (playerName, initialScore, ongoingScore) {
  this.playerName = name;
  this.score = score;
  this.ongoingScore = ongoingScore;
}

// Player.prototype.updateScore = function() {
//   this.score +  this.score  = this.ongoingScore;
// }


// Player.prototype.


function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rollReturn(roll) {
  if (roll == 1) {
    alert("Your turn is over")
  } else {
    alert("Would you like to hold or roll again?")
  }
}

function turn() {
  if (turnOption === hold) {
    return score + roll;
  } else if (turnOption === rollAgain) {
  }
}



// front end
$(function () {
  $("form.nameInputs").submit(function(event) {
    event.preventDefault();
    var playerOneName = $("input#playeronename").val();
    var playerTwoName = $("input#playertwoname").val();
    $(".ponename").text(playerOneName)
    $(".ptwoname").text(playerTwoName)
  });
  $("#roll").click(function() {
    var rollResult = roll(1, 6);
    $("#showroll").text(rollResult);
    turnScore.push(rollResult);
    alert(turnScore);

    rollReturn(rollResult);
    $("#hold").removeClass("btn disabled");
    $("#hold").addClass("btn active");

    $("#hold").click(function() {
      var turnSum = 0;
      for (var index = 0; index < turnScore.length; index += 1) {
      turnSum += turnScore[index];
      }
      alert(turnSum);
      $(".ponescore").text(turnSum);
    });
  });
});
//parseInt(input and ongoing score)
  // $("#rollAgain").click(function() {
  //   var rollResult = roll(1, 6);
  //   $("#showroll").text(rollResult);

// });
