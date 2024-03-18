let displayValue = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    firstOperand = displayValue;
    displayValue = '0';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = displayValue;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    displayValue = result.toString();
    updateDisplay();
    operator = '';
    firstOperand = '';
}

