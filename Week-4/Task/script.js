const columns = document.querySelectorAll(".col");
const allCircles = Array.from(document.querySelectorAll(".cr"));
const redsTurn = document.querySelector(".red");
const ysTurn = document.querySelector(".yellow");

let players = ["Red", "Yellow"];

let turnNow, chosenClass, chosenArr;
turnNow = players[Math.floor(Math.random() * 2)];
let redMoves = [],
  yMoves = [];
let redWins = false,
  yWins = false;

function gameOver(arr, turn) {
  function checkWin(arr, step) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr.includes(arr[i] + step) &&
        arr.includes(arr[i] + 2 * step) &&
        arr.includes(arr[i] + 3 * step)
      ) {
        return true;
      }
    }
    return false;
  }
  const vertical = checkWin(arr, 1);
  const horizontal = checkWin(arr, 6);
  const diag1 = checkWin(arr, 5);
  const diag2 = checkWin(arr, 7);

  if (vertical || horizontal || diag1 || diag2) {
    if (turn === "Red") {
      redWins = true;
    } else {
      yWins = true;
    }
  }
}

function setText() {
  if (turnNow === "Red") {
    redsTurn.classList.remove("d-n");
    ysTurn.classList.add("d-n");
  } else {
    ysTurn.classList.remove("d-n");
    redsTurn.classList.add("d-n");
  }
}

columns.forEach((col) => {
  col.addEventListener("click", () => {
    if (turnNow === "Red") {
      chosenClass = "red-cr";
      chosenArr = redMoves;
    } else {
      chosenClass = "y-cr";
      chosenArr = yMoves;
    }
    const circles = Array.from(col.getElementsByClassName("cr"));
    //find the first empty circle from the circles array
    const emptyCircle = circles.find(
      (circle) =>
        !circle.classList.contains("red-cr") &&
        !circle.classList.contains("y-cr")
    );
    emptyCircle.classList.add(chosenClass);
    chosenArr.push(allCircles.indexOf(emptyCircle));
    //sorting the array in ascending order
    chosenArr.sort((a, b) => a - b);
    gameOver(chosenArr, turnNow);

    if (redWins) {
      redsTurn.innerHTML = `<span>⬤ </span>Red Wins!`;
    }

    if (yWins) {
      ysTurn.innerHTML = `<span>⬤ </span>Yellow Wins!`;
    }

    if (redWins || yWins) {
      setTimeout(() => {
        window.location.reload();
      }, 785);
    } else {
      turnNow = turnNow === "Red" ? "Yellow" : "Red";
      setText();
    }
  });
});

setText();
