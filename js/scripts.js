// back end
var turnOption = "";
var turnScore = [];
var roundOver = "Your turn is over";
var roundPlay = "Would you like to hold or roll again?";
// var gameEndMessage = "Game over, would you like to play again";

function Player(playerName, score) {
    this.pName = name;
    this.score = 0;
}

var pOne = new Player("pOne", 0)
var pTwo = new Player("pTwo", 0)


function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollReturn(roll) {
    if (roll === 1) {
        return roundOver;
    } else {
        return roundPlay;
    }
}

// front end
$(function() {
    $(".nameInputs").submit(function(event) {
        event.preventDefault();
        var pOneNameInput = $("input#p-one-name").val();
        var pTwoNameInput = $("input#p-two-name").val();
        $(".p-one-name").text(pOneNameInput);
        $(".p-two-name").text(pTwoNameInput);
        $(".nameInputs").hide();
    });

    $("#roll").click(function() {
        var rollResult = roll(1, 6);
        $("#showroll").text(rollResult);
        turnScore.push(rollResult);

        var turnOutput = rollReturn(rollResult);
        if (turnOutput === roundOver) {
            $("#hold").hide();
            $("#roll").hide();
        } else if (turnOutput === roundPlay) {
            $("#hold").removeClass("btn disabled");
            $("#hold").addClass("btn active");
        }
        $("#showResult").text(turnOutput);

    });
    $("#hold").click(function() {
        var turnSum = 0;
        for (var index = 0; index < turnScore.length; index++) {
            turnSum += turnScore[index];
        }

        $("#roll").hide();
        $("#hold").hide();

        if ($(".p-one-show").is(':visible')) {
            $(".p-one-score").text(turnSum);
            pOne.score += turnSum;
            $(".p-one-total").text(pOne.score);
            $("#showResult").hide();


        } else if ($(".p-two-show").is(':visible')) {
            $(".p-two-score").text(turnSum);
            pTwo.score += turnSum;
            $(".p-two-total").text(pTwo.score);
            $("#showResult").hide();

        }

        function gameEnd(pOneScore, pTwoScore) {
            if (pOne.score >= 35 || pTwo.score >= 35) {
                // return gameEndMessage;
                $(".game-over").show();
                $("#gameplay").hide();
                $("#showResult").hide();
                $("#showroll").hide();
            }
        }
        gameEnd(pOne.score, pTwo.score);

    });

    $("#switch").click(function() {
        $("#hold").show();
        $("#roll").show();
        $("#showResult").show();
        if ($(".p-one-show").is(':visible')) {
            turnScore = [];
            $("#showroll").empty();
            $("#showResult").empty();
            $(".p-two-show").toggle();
            $(".p-one-show").toggle();
        } else if ($(".p-two-show").is(':visible')) {
            turnScore = [];
            $("#showroll").empty();
            $("#showResult").empty();
            $(".p-one-show").toggle();
            $(".p-two-show").toggle();
        }

    });
    $("#play-again").click(function() {
        $("#gameplay").show();
        $("#roll").show();
        $("#hold").show();
        $(".game-over").hide();
        $(".nameInputs").show();

    });

});;
