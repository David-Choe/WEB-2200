const readingText = ["Roll again","So close yet so far","How unfortunate",
"It's evil duck. This isn't good. You can afford to lose or else you'll really die! Fight for your life!","Try again",
"Nice Win","Thats some good rolls you got there!"];
const outcomeText = ["Victory","It's a Draw","You've Won","You've Lost","A New Challenger Approaches"]
let count = 0;
let health = 2;

document.getElementById("buttonroll").addEventListener("click", rolldice);
document.getElementById("buttonnext").addEventListener("click",nextStage);

function rolldice(){
  var playerRoll = Math.floor(Math.random() * 6) + 1;
  var enemyRoll = Math.floor(Math.random() * 6) + 1;

  document.getElementById("playerDice").innerHTML = playerRoll;
  document.getElementById("enemyDice").innerHTML = enemyRoll;

  // draw
  if(playerRoll == enemyRoll){
    document.getElementById("outcome").innerHTML = outcomeText[1];
    document.getElementById("reading").innerHTML = readingText[0];
    document.getElementById("reading").style.textAlign = "center";
  }
  // playerwin
  else if (playerRoll > enemyRoll){
    document.getElementById("outcome").innerHTML = outcomeText[2];
    document.getElementById("reading").innerHTML = readingText[5];
    document.getElementById("reading").style.textAlign = "center";
    // hids buttons so they aren't pressed on accident
    document.getElementById("buttonnext").style.visibility = 'visible';
    document.getElementById("buttonroll").style.visibility = 'hidden';
    // localStorage saves the number so every time the button is pressed it knows if the player is
    // still on the first level or not.
    localStorage.setItem('stage', count++);
    console.log(localStorage.getItem('stage'));
  }
  // playerloss
  else{
    document.getElementById("outcome").innerHTML = outcomeText[3];
    document.getElementById("reading").innerHTML = readingText[4];
    document.getElementById("reading").style.textAlign = "center";
    localStorage.setItem('health', health--);
    console.log(localStorage.getItem('health'));
    healthCheck();
  }
}

// ending and transition text
function dialogueCheck(){
  document.getElementById("reading").style.textAlign = "center";
  if(localStorage.getItem('stage') == 1){
    document.getElementById("outcome").innerHTML = outcomeText[0];
    document.getElementById("reading").innerHTML = readingText[6];
    document.getElementById("enemyimg").src = "assets/win.png"
  }
  else if(localStorage.getItem('stage') == 0){
    document.getElementById("outcome").innerHTML = outcomeText[4];
    document.getElementById("reading").innerHTML = readingText[3];
  }
}

// This function checks if the player lost health or is dead
function healthCheck(){
  if(localStorage.getItem('health') == 1){
    document.getElementById("hp").innerHTML = "HP: 0 / 2";
    // setTimeout delays function by the number typed at the end. In this case the function is delay by .5 seconds
    setTimeout(function(){alert("You've Lost! Refresh the page to play again.");}, 500);
    document.getElementById("reading").style.textAlign = "center";
    document.getElementById("reading").innerHTML = readingText[1];
    document.getElementById("buttonroll").style.visibility = 'hidden';
    document.getElementById("buttonnext").style.visibility = 'hidden';
  }
  else if(localStorage.getItem('health') == 2){
    document.getElementById("hp").innerHTML = "HP: 1 / 2";
  }
}

// This function manages the progressbar
function nextStage(){
  // manages buttons to make sure that non are pressed again
  document.getElementById("buttonroll").style.visibility = 'visible';
  document.getElementById("buttonnext").style.visibility = 'hidden';
  document.getElementById("enemyimg").src = "assets/evilduck.jpg"
  var elem = document.getElementById("myBar");
  var width = 1;
  // since there are two stages this makes sure that the bar starts from the right location
  if(localStorage.getItem('stage') != 0){
    document.getElementById("buttonroll").style.visibility = 'hidden';
    width = 50;
  }
  var id = setInterval(frame, 10);
  function frame() {
    // first if will get the progessbar half way
    if(localStorage.getItem('stage') == 0){
      if (width >= 50) {
        clearInterval(id);
      }
      else {
        width++;
        elem.style.width = width + '%';
      }
    }
    else{
      if (width >= 100) {
        clearInterval(id);
      }
      else {
        width++;
        elem.style.width = width + '%';
        setTimeout(function(){document.getElementById("c2").style.background = "#FF9595";}, 500);
      }
    }
  }
  dialogueCheck();
}
