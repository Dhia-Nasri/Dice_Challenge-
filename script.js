 var randomLeft = Math.floor(5*Math.random() + 1);

 var randomRight = Math.floor(5*Math.random() + 1);

 var randomLeftDiceImage = document.querySelectorAll("img")[0].setAttribute("src","diceimages/Dice" + randomLeft + ".JPG.png" );
 var randomRightDiceImage = document.querySelectorAll("img")[1].setAttribute("src","diceimages/Dice" + randomRight + ".JPG.png" );





if(randomLeft>randomRight){
  document.querySelector("h1").innerHTML =  '<p> refresh me !<br> Player 1 is the WINNER</p>'   ;

}else if (randomLeft<randomRight){
  document.querySelector("h1").innerHTML = '<p> refresh me !<br> Player 2 is the WINNER</p>' ;
}else{
  document.querySelector("h1").innerHTML = '<p> refresh me !<br> DRAW</p>';
}
