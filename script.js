function appendNumber(number) {
    var resultInput = document.getElementById("result");
    resultInput.value += number;
}

function appendOperator(operator) {
    var resultInput = document.getElementById("result");
    resultInput.value += operator;
}

function clearResult() {
    var resultInput = document.getElementById("result");
    resultInput.value = "";
}

function calculateResult() {
    var resultInput = document.getElementById("result");
    var expression = resultInput.value;
    var result = eval(expression);
    resultInput.value = result;
}
