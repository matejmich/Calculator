window.onload = function(){ 
let displayValue = '0';
let firstNum = null;
let firstOp = null;


function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}
  
updateDisplay();


const buttons = document.querySelectorAll('button');
function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('num')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            }
            if(buttons[i].classList.contains("operator")) {
                inputOperator(buttons[i].value);
            }
            if(buttons[i].classList.contains("equals")) {
                inputEquals()
                updateDisplay()
            }
            if(buttons[i].classList.contains("plusMinus")){
                inputPlusMinus(displayValue)
                updateDisplay()
            }
            if(buttons[i].classList.contains("AC")){
                resetDisplay()
                updateDisplay()
            }

        }
    )}
}

clickButton();

function inputOperand(operand) {
    if (firstOp === null) {
        if (displayValue === 0 || displayValue === "0") {
        displayValue = operand
    }
        else {
        displayValue += operand
    }
    }
    else {
        if (displayValue === firstNum) {
            displayValue = operand
        }
        else {
            displayValue += operand
        }
    }
}

function inputOperator(operator) {
    firstOp = operator
    firstNum = displayValue
}

function inputEquals() {
    if (firstOp === null) {
        
    }
    else {
        secondNum = displayValue
        result = operate(Number(firstNum), Number(secondNum), firstOp)
        displayValue = result.toString();
    }
}

function operate (a, b, op) {
    if (op === "+") {
        return a + b
    }
    else if (op === "-") {
        return a - b
    }
    else if (op === "*") {
        return a * b
    }
    else if (op === "/") {
        if (secondNum === "0" || secondNum === 0) {
            return "Cannot devide with zero! :P"
        }
        else {
            return a / b
        }
    }
}

function inputPlusMinus (num) {
    displayValue = (num * (-1))
}
function resetDisplay() {
    displayValue = '0';
    firstNum = null;
    firstOp = null;
}
}
