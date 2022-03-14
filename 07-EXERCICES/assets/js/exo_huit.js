// Crée par Joachim Zadi le 14/03/2022 à 11:04. Version 1.0
// ========================================================

// EXERCICE 08
// 1. Lire 10 nombres et trouver le plus grand.

let plusGrand = -Infinity;
let chaine = '';
for (let i = 1; i < 11; i++) {
    let saisie = Number(prompt(`Saisie N°${i}`));
    if (isNaN(saisie)) {
        do {
            alert("Vous devez saisir un nombre !!!");
            saisie = Number(prompt(`Saisie N°${i}`));
        } while (isNaN(saisie));
    } else {
        chaine += `${saisie} `;
        if (saisie > plusGrand) {
            plusGrand = saisie;
        }
    }
}
console.log(chaine);
console.log(`plusGrand = ${plusGrand}`);


// 2. Lire 10 nombres et trouver le plus petit et son rang.
// 3. Lire n nombres et en calculer la moyenne.