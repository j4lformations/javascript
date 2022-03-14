// Crée par Joachim Zadi le 14/03/2022 à 09:52. Version 1.0
// ========================================================

// EXERCICE 07
// Ecrire un programme JavaScript qui demande à l’utilisateur de saisir au clavier les
// nombres m et n et les afficher de n à m :
//     a. Dans le cas où n est supérieur à m,
//          i. Afficher un message d'erreur et arrêter le programme.
//          ii. Permuter n et m, puis continuer.
//          iii. De manière décroissante
//          iv. Afficher la somme des nombres pairs de n à m.

// EXO-7-1
// -------

// Version 1
// ---------

// let m = Number(prompt("m = "));
// let n = Number(prompt("n = "));

// if (isNaN(m) || isNaN(n) || m == 0 || n == 0) {
//     console.warn("Les saisies m & n doivent etre des nombres !!!");
// } else {
//     if (n > m){
//         throw Error("Erreur de saisie"); // Lance une exception et arrete l'execution du prog
//     }
// }

// Version 2
// ---------
let m, n;
do {
    m = Number(prompt("m"));
    n = Number(prompt("n"));
    if (isNaN(m) || isNaN(n)) {
        console.log("Attention à votre saisie, des nombres sont attendus !!!");
    }
} while (isNaN(m) || isNaN(n));
console.log("Bonnes saisie !!!");

// i
// if (n > m) {
//     throw Error("Erreur de saisie"); // Lance une exception et arrete l'execution du prog
// }

// ii
// if (n > m) {
//     let temp = m;
//     m = n;
//     n = temp;
//
//     for (let i = n; i <= m; i++) {
//         console.log(i);
//     }
// }

// iii
// if (n > m) {
//     for (let i = n; i >= m; i--) {
//         console.log(i);
//     }
// }

// iv
// if (n > m) {
//     let somme = 0;
//     for (let i = n; i >= m; i--) {
//         // if (i % 2 == 0) {
//         //     somme += i;
//         // }
//         somme = (i % 2 == 0) ? somme + i : somme; // ==> if ternaire
//     }
//     console.log(`somme = ${somme}`);
// }