const prevInput = document.getElementById("calculateInputPrev"),
  currentInput = document.getElementById("calculateInputCurr");

const allClearBtn = document.querySelector(".all-clear"),
  delBtn = document.querySelector(".delete"),
  equalsBtn = document.getElementById("EqualBtn");

const opBtns = document.querySelectorAll(".operator");

const numBtns = document.querySelectorAll(".number"),
  zeroBtn = document.getElementById("zeroBtn"),
  pointBtn = document.getElementById("point");

let operator, firstNum, secondNum, result;

function deletion() {
  currentInput.value = currentInput.value.toString().slice(0, -1);
}

function allClear() {
  currentInput.value = "";
  prevInput.value = "";
}

delBtn.onclick = deletion;
allClearBtn.onclick = allClear;

numBtns.forEach((btn) => {
  btn.onclick = function () {
    if (btn.id == "zeroBtn") {
      if (currentInput.value == "0") {
        return;
      } else {
        currentInput.value += zeroBtn.textContent;
      }
    } else {
      currentInput.value += btn.textContent;
    }
  };
});

opBtns.forEach((btn) => {
  btn.onclick = function () {
    operator = btn.textContent;
    currentInput.value += operator;
    prevInput.value = currentInput.value;
    currentInput.value = "";
  };
});

equalsBtn.onclick = function () {
  firstNum = parseFloat(prevInput.value);
  secondNum = parseFloat(currentInput.value);

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;

    default:
      return;
  }

  currentInput.value = result;
  prevInput.value = "";
  operator = undefined;
};

pointBtn.onclick = function () {
  if (currentInput.value.includes(".")) {
    return;
  } else {
    currentInput.value += pointBtn.textContent;
  }
};
