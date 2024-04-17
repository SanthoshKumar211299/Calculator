const inputField = document.getElementById('result');

function clearResult() {
    inputField.value = '';
}

function appendInput(value) {
    inputField.value += value;
}

function calculate() {
    try {
        const result = eval(inputField.value);
        inputField.value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendInput(key);
    } else {
        alert('Only numbers are allowed');
    }
});

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function addSpace() {
    document.getElementById('result').value += ' ';
}
