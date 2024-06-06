function appendToResult(value) {
    document.getElementById('result').value += value;
}
function calculateResult() {
    var expression = document.getElementById('result').value;
    try {
        var result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }}
function clearResult() {
    document.getElementById('result').value = '';
}
function calculatePercentage() {
    var expression = document.getElementById('result').value;
    try {
        var result = eval(expression);
        result = (result / 100).toFixed(2); // Convert to percentage
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }}

function calculateSin() {
    var expression = document.getElementById('result').value;
    try {
        var result = Math.sin(eval(expression) * Math.PI / 180);
        document.getElementById('result').value = result.toFixed(2);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculateCos() {
    var expression = document.getElementById('result').value;
    try {
        var result = Math.cos(eval(expression) * Math.PI / 180);
        document.getElementById('result').value = result.toFixed(2);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}