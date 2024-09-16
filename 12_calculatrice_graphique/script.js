const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const optionsButtons = document.querySelectorAll(".options");
const resetButton = document.getElementById("reset");

let result = 0;

function buttonClicked() {
	numberButtons.forEach((button) => {
		button.addEventListener("click", () => {
			document.getElementById("result").innerHTML = button.value;
			result = parseInt(button.value);
			console.log(
				"🪼 button clicked is:",
				button.value,
				"AND result is:",
				result
			);
		});
	});
}
buttonClicked();

// ---------- DISPLAY RESULTS IN OUTPUT DIV ---------- //

function displayResult() {
	operatorButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if ((button.id = "addition")) {
				numberButtons.forEach((button) => {
					button.addEventListener("click", () => {
						document.getElementById("result").innerHTML = button.value;
						result = parseInt(button.value);
						console.log(
							"🪼 button clicked is:",
							button.value,
							"AND result is:",
							result
						);
					});
				});
				result += parseInt(button.value);
				console.log(
					"🐢 button clicked is:",
					button.value,
					"AND result is:",
					result
				);
			} else if ((button.id = "substraction")) {
				result = result - parseInt(button.value);
				console.log(
					"🐢 button clicked is:",
					button.value,
					"AND result is:",
					result
				);
			} else if ((button.id = "multiplication")) {
				result = result * parseInt(button.value);
				console.log(
					"🐢 button clicked is:",
					button.value,
					"AND result is:",
					result
				);
			} else if ((button.id = "division")) {
				result = result / parseInt(button.value);
				console.log(
					"🐢 button clicked is:",
					button.value,
					"AND result is:",
					result
				);
			} else {
				console.log("Je suis dans else");
			}
		});
	});
}
displayResult();

// ---------- RESET RESULTS ---------- //

function reset() {
	resetButton.addEventListener("click", () => {
		result = 0;
		document.getElementById("result").innerHTML = result;
		console.log(
			"🦐 button clicked is:",
			resetButton.value,
			"AND result is:",
			result
		);
	});
}
reset();
