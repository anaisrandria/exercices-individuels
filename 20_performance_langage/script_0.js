function now(maFonction) {
    let temps_initial = Date.now()
    
    console.log(temps_initial)
    maFonction()

    let temps_final = Date.now()
    let temps_ecoule = temps_final - temps_initial
    
    console.log("L'exécution a duré", temps_ecoule)
}

now(() => {console.log("coucou")});

function uneAddition() {
    return 42 + 21
}

now(uneAddition)

function unTri() {
    let liste = [3, 1, 4, 8, 7, 9, 6, 5]
    liste.sort()
}

now(unTri)