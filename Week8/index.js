const dialoge = [];

document.getElementById("buttonroll").addEventListener("click", rolldice);

function rolldice(){
  var playerRoll = Math.floor(Math.random() * 6) + 1;
  var enemyRoll = Math.floor(Math.random() * 6) + 1;

  document.getElementById("playerDice").innerHTML = playerRoll;
  document.getElementById("enemyDice").innerHTML = enemyRoll;

  if(playerRoll == enemyRoll){

  }
  else if (playerRoll > enemyRoll){

  }
  else{

  }
}
