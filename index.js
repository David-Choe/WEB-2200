let mainPage = ["assets/duck.jpg", "Week3/Frame2PL.png","assets/clueBG.JPG", "assets/textP2.jpg", "assets/art/5.jpg"];

document.getElementsByClassName("links")[0].addEventListener("mouseout", img0);
document.getElementsByClassName("links")[1].addEventListener("mouseout", img0);
document.getElementsByClassName("links")[2].addEventListener("mouseout", img0);
document.getElementsByClassName("links")[3].addEventListener("mouseout", img0);

document.getElementsByClassName("links")[0].addEventListener("mouseover", img1);
document.getElementsByClassName("links")[1].addEventListener("mouseover", img2);
document.getElementsByClassName("links")[2].addEventListener("mouseover", img3);
document.getElementsByClassName("links")[3].addEventListener("mouseover", img4);

function img0(){
  document.getElementById("imgSize").style.visibility = "hidden";
}

function img1(){
  document.getElementById("imgSize").src = mainPage[1];
  document.getElementById("imgSize").style.visibility = "visible";
}

function img2(){
  document.getElementById("imgSize").src = mainPage[2];
  document.getElementById("imgSize").style.visibility = "visible";
}

function img3(){
  document.getElementById("imgSize").src = mainPage[3];
  document.getElementById("imgSize").style.visibility = "visible";
}

function img4(){
  document.getElementById("imgSize").src = mainPage[4];
  document.getElementById("imgSize").style.visibility = "visible";
}
