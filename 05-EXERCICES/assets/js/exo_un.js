// Crée par Joachim Zadi le 10/03/2022 à 14:34. Version 1.0
// ========================================================

// EXERCICE 01
// ▪ Écrire, avec des comparaisons, un algorithme qui affiche l’état de l’eau « glace, liquide, vapeur » en fonction de sa température.
// ▪ Donnez son implémentation en JavaScript.

let temperature = Number(prompt("Entrez la temperature de l'eau en degré celsius"));

if (isNaN(temperature)) {
    // On arrive ici si la valeur saisie n'est nombre
    console.log("Merci de saisir un nombre SVP !!!");
} else {
    // Ici la saisie est correcte
    if (temperature <= 0) {
        console.log("L'eau est à l'eat de GLACE !!!");
    } else if (temperature > 0 && temperature <= 100) {
        console.log("L'eau est à l'eat LIQUIDE !!!");
    } else {
        console.log("L'eau est à l'eat VAPEUR !!!");
    }
}