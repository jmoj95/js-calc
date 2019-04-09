var calcDisplay = document.querySelector(".calc-display");
var calcBtns = document.querySelectorAll(".calc-btn");

var operator = null;
var operand1 = null;
var newOperand = false;
var operand2 = null;
var result = null;
var resultDisplayed = false;

calcBtns.forEach((e) => {
        if (e.classList.contains("calc-number")) {
                e.addEventListener('click', () => { insertNumberOnDisplay(e); });
        } else if (e.classList.contains("calc-operator")) {
                e.addEventListener('click', () => { setOperator(e); });
        } else if (e.classList.contains("calc-clear")) {
                e.addEventListener('click', () => { clearCalcStatus(); });
        } else if (e.classList.contains("calc-equals")) {
                e.addEventListener('click', () => { displayResult(); });
        }
});

function insertNumberOnDisplay(e) {
        if (newOperand || resultDisplayed) {
                calcDisplay.textContent = "";
                if (newOperand) {
                        newOperand = false;
                }
                if (resultDisplayed) {
                        resultDisplayed = false;
                }
        }
        calcDisplay.append(parseInt(e.textContent));
}

function setOperator(e) {
        operator = e.textContent;
        if (!newOperand) {
                operand1 = calcDisplay.textContent;
                newOperand = true;
        }
}

function clearCalcStatus() {
        calcDisplay.textContent = "";
        operator = null;
        operand1 = null;
        newOperand = false;
        operand2 = null;
        result = null;
        resultDisplayed = false;
}

function displayResult() {
        if (operand2 == null) {
                operand2 = calcDisplay.textContent;
        }

        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);

        switch (operator) {
                case "+": result = operand1 + operand2; break;
                case "-": result = operand1 - operand2; break;
                case "*": result = operand1 * operand2; break;
                case "/": result = operand1 / operand2; break;
                default: break;
        }

        calcDisplay.textContent = result;
        resultDisplayed = true;
        operator = null;
        operand1 = null;
        operand2 = null;
}