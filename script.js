//trying for 2 players but maybe will only do 1 player.

var player1 = "player1";
var player2 = "player2";


//which fuction for random generator 

//Math.floor(Math.random() * 7);

function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
                        
        }
    }, 2500);
}