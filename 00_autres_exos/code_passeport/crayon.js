const calendrierDuCrayon = {
  septembre: 10,
  octobre: 9,
  novembre: 8,
  decembre: 7,
  janvier: 6,
  février: 5,
  mars: 4,
  avril: 3,
  mai: 2,
  juin: 1,
};


function drawMyPen(mois) {
    drawTop();
    drawMiddle(mois);
    drawBottom(mois);
} 

drawMyPen("mars");

function drawTop() {
    for (let i = 0; i < 2; i++) {
        console.log(`${" ".repeat(2 - i - 1)}/${"__".repeat(i)}\\`);
    }
}

function drawMiddle(mois) {
    let hauteur = calendrierDuCrayon[mois];

    for (let i = 0; i < hauteur; i++) {
        console.log("||||");
    }
}

function drawBottom(mois) {
    let arrayMonths = Object.keys(calendrierDuCrayon);
    // console.log(arrayMonths.indexOf(mois)); 
    console.log("|__|");

    if (arrayMonths.indexOf(mois) < 6) {
        console.log("|  |\n|__|");
    }
    else {
        console.log("|__|");
    }
}