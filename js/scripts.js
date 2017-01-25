// back end

var turnOption = ""
function Player (playerName, initialScore, ongoingScore) {
  this.playerName = name;
  this.score = score;
  this.ongoingScore = ongoing score;
}

Player.prototype.updateScore = function() {
  this.score +  this.score  = this.ongoingScore;
}


Player.prototype.


function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollReturn(roll) {
  if (roll == 1) {
    alert("Your turn is over!")
    return score;
  } else {
    alert("Would you like to hold or roll again?")
    return turnOptions
    turnScore.push(roll)
  }
}

function turn (){
  if (turnOption === hold) {
    return score + roll
  } else (turnOption === rollAgain) {
    turnScore.push(roll)
  }
}



// front end
$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var playerName = $("input#name").val();
  });
  $("roll").click(function() {
    var rollResult = roll(1, 6);
    $("#showroll").append("<li>" + rollResult + "</li>");
    $("#output").show();
  });
parseInt(input and ongoing score)
});
