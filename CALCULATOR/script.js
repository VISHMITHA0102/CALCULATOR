let currentInput = '0';
function updateScreen() {
document.getElementById('screen').innerText = currentInput;
}
function appendSymbol(symbol) {
if (currentInput === '0') {
currentInput = symbol;
} else {
currentInput += symbol;
}
updateScreen();
}
function clearScreen() {
currentInput = '0';
updateScreen();
}
function calculate() {
let result;
try {
// Replace x² with **2 for calculating the square
currentInput = currentInput.replace(/x²/g, '**2');
result = eval(currentInput);
if (result === undefined || result === null || isNaN(result)) {
throw new Error("Invalid input");
}
currentInput = result.toString();
updateScreen();
} catch (err) {
currentInput = 'Error';
updateScreen();
}
}
function deleteLastSymbol() {
currentInput = currentInput.slice(0, -1);
if (currentInput === '') {
currentInput = '0';
}
updateScreen();
}
// Add event listeners to the buttons
document.getElementById('clearButton').addEventListener('click', clearScreen);
document.getElementById('moduloButton').addEventListener('click', function() {
appendSymbol('%');
});
document.getElementById('divideButton').addEventListener('click', function() {
appendSymbol('/');
});
document.getElementById('multiplyButton').addEventListener('click', function() {
appendSymbol('*');
});
document.getElementById('sevenButton').addEventListener('click', function() {
appendSymbol('7');
});
document.getElementById('eightButton').addEventListener('click', function() {
appendSymbol('8');
});
document.getElementById('nineButton').addEventListener('click', function() {
appendSymbol('9');
});
document.getElementById('subtractButton').addEventListener('click', function() {
appendSymbol('-');
});
document.getElementById('fourButton').addEventListener('click', function() {
appendSymbol('4');
});
document.getElementById('fiveButton').addEventListener('click', function() {
appendSymbol('5');
});
document.getElementById('sixButton').addEventListener('click', function() {
appendSymbol('6');
});
document.getElementById('addButton').addEventListener('click', function() {
appendSymbol('+');
});
document.getElementById('oneButton').addEventListener('click', function() {
appendSymbol('1');
});
document.getElementById('twoButton').addEventListener('click', function() {
appendSymbol('2');
});
document.getElementById('threeButton').addEventListener('click', function() {
appendSymbol('3');
});
document.getElementById('squareButton').addEventListener('click', function() {
appendSymbol('x²');
});
document.getElementById('zeroButton').addEventListener('click', function() {
appendSymbol('0');
});
document.getElementById('decimalButton').addEventListener('click', function() {
appendSymbol('.');
});
document.getElementById('deleteButton').addEventListener('click', deleteLastSymbol);
document.getElementById('equalButton').addEventListener('click', calculate);