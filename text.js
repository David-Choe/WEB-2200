let textPage = 6;
let textpic;

for(i=0;i<textPage;i++){
  textpic = 1+i;
  document.getElementById('textPortfolio').innerHTML += "<embed src='assets/text/" + textpic + ".pdf'"
   + "class='textPhoto' id='textpic" + textpic + "' />";
}
