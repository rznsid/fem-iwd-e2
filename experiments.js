window.onload = function () {
    let result = document.querySelector('.result');
    const calculator = document.querySelector('.calculator');
    let firstNumber
    let operator

    calculator.addEventListener('click', function (event) {
        if (Number(event.target.innerText) | (event.target.innerText === '0')) {
            updateNumber(result, event);
        } else if (event.target.innerText === "C") {
            result.innerText = "0";
        } else if (event.target.innerText === "=") {
            ({
                operator,
                firstNumber
            } = calculateNumber(operator, result, firstNumber));
        } else {
            firstNumber = result.innerText;
            operator = event.target.innerText;
            result.innerText = "0";
        }
    });
};

function calculateNumber(operator, result, firstNumber) {
    if (operator === "+") {
        result.innerText = Number(firstNumber) + Number(result.innerText);
    } else if (operator === "%") {
        result.innerText = Number(firstNumber) / Number(result.innerText);
    } else if (operator === "x") {
        result.innerText = Number(firstNumber) * Number(result.innerText);
    } else if (operator === "-") {
        result.innerText = Number(firstNumber) - Number(result.innerText);
    }
    firstNumber = "";
    operator = "";
    return {
        operator,
        firstNumber
    };
}

function updateNumber(result, event) {
    if (result.innerText === "0") {
        result.innerText = event.target.innerText;
    } else {
        result.innerText += event.target.innerText;
    }
}