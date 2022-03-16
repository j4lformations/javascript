// Crée par Joachim Zadi le 16/03/2022 à 11:36. Version 1.0
// ========================================================

// EXERCICE 12
// 1. Ecrire la fonction isMultiple, qui prend deux entiers n et m et retourne vrai si et seulement si n est un multiple de m.

const isMultiple = (n, m) => {
    return (n % m === 0);
}

// 2. Ecrire la fonction isEven, qui prend un entier i et retourne vrai si et seulement si i est un nombre pair.
// « Notre méthode ne peut pas utiliser la multiplication, le module, ou la division comme operateur en son sein »

const isEven = i => {
    return isMultiple(i, 2);
}

// function testFonction(func) {
//     let i = prompt("i");
//     console.log(func(i));
// }

// testFonction(isMultiple);
// testFonction(isEven);

function isPremier(n) {
    let resultat = true;
    if (n < 2) {
        resultat = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (isMultiple(n, i)) {
                resultat = false;
                break;
            }
        }
    }
    return resultat;
}

let n = Number(prompt("Entrez un entier positif "));
console.log(isPremier(n));
