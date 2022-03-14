// Crée par Joachim Zadi le 14/03/2022 à 14:49. Version 1.0
// ========================================================

// EXERCICE 10
// Le jeu consiste à découvrir par essais successifs le prix d'un lot.
// Pour chaque essai, le joueur reçoit un message :
// « Trop grand », « Trop petit » ou « BRAVO ! Vous avez trouvé en K essais ».
// Le jeu est fini quand le joueur a trouvé le prix du lot.
// On propose d'écrire un programme qui joue le rôle de meneur de jeu ;
// l'exécution de ce programme vous fera tenir le rôle du joueur.
// Le programme doit définir le prix du lot en tirant un entier aléatoire entre 1 et 10
// et dialoguer avec le joueur pendant le jeu.

let secret = Math.floor(Math.random() * 10) + 1;
let essai, tentative = 0;
let trouver = false;

do {
    essai = Number(prompt("Saisir un nombre entier compris entre 1 & 10 svp "));
    if (isNaN(essai) || essai === 0) {
        console.log('Vous devez saisir un entier compris entre 1 & 10');
    } else {
        tentative++;
        if (essai > secret) {
            console.log('Trop Grand');
        } else if (essai < secret) {
            console.log('Trop Petit');
        } else {
            console.log(`BRAVO ! Vous avez trouvé en ${tentative} essais`);
            trouver = true;
        }
    }
} while (!trouver);
