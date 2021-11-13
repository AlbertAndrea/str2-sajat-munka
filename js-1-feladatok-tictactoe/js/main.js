let currentPlayer = "x";
let won = false;

const place = (element) => {
    if (element.innerText != "" || won) return;
    element.innerText = currentPlayer;
    currentPlayer == "x" ? currentPlayer = "o" : currentPlayer = "x";

    checkGameBoard();
}
const checkGameBoard = () => {
    for (var i = 0; i <= 2; i++) {
        checkWinner(document.getElementById(i + "_0").innerText,
            document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText);
        checkWinner(document.getElementById("0_" + i).innerText,
            document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText);
    }
    checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);
    checkWinner(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText);
}
const checkWinner = (first, second, third) => {
    if (first != "" && first == second && first == third) {
        currentPlayer == "x" ? currentPlayer = "o" : currentPlayer = "x";
        document.getElementById("winnerMessage").innerHTML = "Congratulations! " + `${currentPlayer}` + " won!";
        won = true;
    }
}

const reloadThePage = () => {
    document.getElementById("winnerMessage").innerHTML = "";
    location.reload();
}
