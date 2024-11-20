// Le code ci-dessous permet de créer une api sur les langages de programmation. 
// La route POST /language est déjà implémentée. Elle ajoute le langage passé dans le body dans la database. 
// En suivant le même principe, implémente les 3 autres routes sur CRUD (Read, Update et Delete).

const express = require("express");
const app = express();
const port = 3000;

const database = ["html", "css", "javascript"];

app.use(express.json());

// POST /languages (ajoute un langage dans la database)
app.post("/languages", (req, res) => { // ==> CONTROLLER
	database.push(req.body.language); 
	res.status(201).json({ language: req.body.language });
    console.log(database);
});

// GET /languages (renvoie la liste des langages de la database en json)
app.get("/languages", (req, res) => { // ==> CONTROLLER
	res.send(database); 
    console.log(database)
});

// PUT /languages/:name (remplace le langage passé dans l'url par celui passé dans le body)
app.put("/languages/:lang", (req, res) => { // ==> CONTROLLER
    let index = database.indexOf(req.params.lang)
    database.splice(index, 1, req.body.language);
    res.status(201).json({ language: req.body.language });
    console.log(database)
});

// DELETE /languages (supprime le langage passé dans le body)
app.delete("/languages/:lang", (req, res) => { // ==> CONTROLLER
    let index = database.indexOf(req.params.lang);
    database.splice(index, 1);
    res.status(201).json({ language: req.body.language });
    console.log(database)
})

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
