async function postLanguage(newLanguage) {
    const res = await fetch("http://localhost:3000/languages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				language: newLanguage,
			}),
		});

    console.log("Réponse :", res)
    const data = await res.json();
    console.log(data);
}

postLanguage("laravel");