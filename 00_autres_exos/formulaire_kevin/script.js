const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const messageInput = document.getElementById("message-input");


inputName.addEventListener("input", () => {
    console.log(inputName.value);
})

inputEmail.addEventListener("input", () => {
	console.log(inputEmail.value);
});

inputPhone.addEventListener("input", () => {
	console.log(inputPhone.value);
});

// function validateEmail(email) {
// 	return String(email)
// 		.toLowerCase()
// 		.match(
// 			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// 		);
// };

// inputName.addEventListener("input", () => {
//     console.log(inputName.value);
//     if (inputName.value == )
// })

