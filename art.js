// artPortfolio images and functions
let artPage = 9;
let artpic;

for(i=0;i<artPage;i++){
  artpic = 1+i;
  document.getElementById('artPortfolio').innerHTML += "<img src='assets/art/" + artpic + ".jpg'"
   + "class='artPhoto' id='artpic" + artpic + "' />";
}
