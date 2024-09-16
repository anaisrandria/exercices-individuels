const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const optionsButtons = document.querySelectorAll(".options");
const resetButton = document.getElementById("reset");

let result = "";

function buttonClicked() {
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            result += button.value;
            document.getElementById("result").innerHTML = result;
            console.log('🪼 button clicked is:', button.value, 'AND result is:', result);
        });
    });
};
buttonClicked();


// ---------- DISPLAY RESULTS IN OUTPUT DIV ---------- //

function displayResult() {
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if ((button.value == "+")) {
                console.log("buttonClicked is:", buttonClicked());
                result += "+";
                console.log('🐢 button clicked is:', button.value, 'AND result is:', result);
            }
            else if ((button.value == "-")) {
                console.log('🐢 button clicked is:', button.value, 'AND result is:', result);
            }
            else if ((button.value == "*")) {
                console.log('🐢 button clicked is:', button.value, 'AND result is:', result);
            }
            else if ((button.value == "÷")) {
                console.log('🐢 button clicked is:', button.value, 'AND result is:', result);
            }
            else if ((button.value == "=")) {
                result = result
                console.log('🐢 button clicked is:', button.value, 'AND result is:', result);
            }
            else {
                console.log("Je suis dans else")
            }
        })
    });
}
displayResult();


// ---------- RESET RESULTS ---------- //

function reset() {
    resetButton.addEventListener("click", () => {
        result = "";
        document.getElementById("result").innerHTML = 0;
        console.log('🦐 button clicked is:', resetButton.value, 'AND result is:', result);
    })
}
reset();


