let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let result = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && result === '') return;
    if (currentInput !== '') {
        if (result !== '') {
            currentInput = result;
            result = '';
        }
        operator = op;
        currentInput += op;
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    result = '';
    operator = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        display.innerText = result;
        currentInput = '';
        operator = '';
    } catch (error) {
        display.innerText = 'Error';
    }
}
