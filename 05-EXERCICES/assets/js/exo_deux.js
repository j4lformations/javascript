// Crée par Joachim Zadi le 10/03/2022 à 14:50. Version 1.0
// ========================================================

// EXERCICE 02
// ▪ Écrire un algorithme qui détermine la catégorie sportive d’un utilisateur en fonction de son âge :
//     ➢ 6 à 7 ans : poussin
//     ➢ 8 à 9 ans : pupille
//     ➢ 10 à 11 ans : minime
//     ➢ 12 ans et plus : cadet
// ▪ Écrire le programme JavaScript associé.

// let age = Math.floor(Number(prompt("Saisir votre âge svp")));

let age = Number(prompt("Saisir votre âge svp"));
age = Math.floor(age);

if (isNaN(age)) {
    console.log("Merci de saisr une valeure numerique !!!");
} else {
    // Ici la saisie est correcte
    let categorie;
    if (age === 6 || age === 7) {
        categorie = "poussin";
    } else if (age === 8 || age === 9) {
        categorie = "pupille";
    } else if (age === 10 || age === 11) {
        categorie = "minime";
    }else if(age >= 12){
        categorie = "cadet";
    }else {
        categorie = "inconnue";
    }
    console.log(`categorie = ${categorie}`);
}