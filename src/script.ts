let player1: string = "player1";
let player2: string = "player2";

function editNames(): void {
  player1 = prompt("Change Player1 name")!;
  player2 = prompt("Change player2 name")!;


  document.querySelector("p.Player1")!.innerHTML = player1;
 // document.querySelector("p.Player1").innerHTML! as string = player1;
  document.querySelector("p.Player2")!.innerHTML = player2;
}

function rollTheDice(): void {
  setTimeout(function () {
    const randomNumber1: number = Math.floor(Math.random() * 6) + 1;
    const randomNumber2: number = Math.floor(Math.random() * 6) + 1;

    document
      .querySelector(".img1")!
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")!
      .setAttribute("src", "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1")!.innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1")!.innerHTML = player2 + " WINS!";
    } else {
      document.querySelector("h1")!.innerHTML = player1 + " WINS!";
    }
  }, 1500);
}
