"use strict";
//all functions needed are here
//a function to display the result of a input
const displayResults = () => {
    resultElement.textContent = calculator.getOriginalInputs;
    liveResult.textContent = calculator.output;
};
//a function to add the clicked button to input
const onButtonClick = (e) => {
    var _a;
    const target = e.currentTarget;
    if (!target.classList.contains("not-show") &&
        !((_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("delete-sec"))) {
        calculator.addOperator(target.textContent);
    }
    else if (target.classList.contains("equal")) {
        calculator.calculate(true, true);
    }
    else if (target.classList.contains("backspace")) {
        if (target.classList.contains("clear_all"))
            calculator.deleteAllChars();
        else
            calculator.deleteLastChar();
    }
    displayResults();
};
