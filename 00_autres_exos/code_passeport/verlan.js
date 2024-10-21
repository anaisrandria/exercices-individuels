function revertMessage(text) {
    let arrayText = text.split("");
    let reverseText = arrayText.reverse().join("");

    console.log(reverseText);
    return reverseText;
}

revertMessage("Coucou ! Alors les vacances ??");