Pig Dice

player -
submit = Roll 1 dice: output random # 1-6
if roll = 1 -- prompt turn over - score = 0
else 2-6 offer options--
  hold-- add roll value  to score
  roll again --  add roll value to array and then output another value --loop until 1 is return or player selects hold



array for player 1 AND player two

player {
  player name
  initial score
  ongoing score []
  
}

|Behavior| Input example| Output example|
|------|--------------|-------------|
|Roll dice|Click "Roll dice"| #1-6 |
|Click hold|hold| score = roll amount + existing score |
|click roll again|roll| #1-6 until 1 is rolled|
