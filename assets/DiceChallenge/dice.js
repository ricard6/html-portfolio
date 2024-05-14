let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

for (i=1; i<=6; i++) {
    if (i == randomNumber1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice" + i + ".png")
    }

    if (i == randomNumber2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice" + i + ".png")
    }
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎲 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎲";
} else {
    document.querySelector("h1").innerHTML = "🎲 It's a Draw! 🎲"
}