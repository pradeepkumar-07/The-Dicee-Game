var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "images/dice"+ randomNumber1 + ".png";
var randomDiceImage2 = "images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Won";
}
else if(randomNumber1 === randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Draw";
}
else {
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Won";
}