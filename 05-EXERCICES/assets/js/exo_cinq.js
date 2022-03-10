// Crée par Joachim Zadi le 10/03/2022 à 15:28. Version 1.0
// ========================================================

// EXERCICE 05
// ▪ Une année bissextile comporte 366 jours au lieu de 365. Le jour supplémentaire « le
//   29 février », est placé après le dernier jour de ce mois qui compte habituellement 28 jours.
// ▪ Une année est bissextile :
//      ➢ Si elle est divisible par 4 mais pas par 100 ou
//      ➢ Si elle est divisible par 400
// Proposer un programme JavaScript qui demande une année à l'utilisateur et qui
// l'informe si cette année est bissextile ou non.

let annee = Number(prompt(`Entrez une année, on vous dit si elle est bissextile`));

if (!Number.isInteger(annee)) {
    alert(`ne faites pas l'imbécile`);
} else {
    // Ici on est sur que la saise est un nombre entier
    if (((annee % 4 == 0) && (annee % 100 > 0)) || (annee % 400 == 0)) {
        alert(`C'est une année bissextile !`);
    } else {
        alert(`Ce n'est pas une année bissextile`);
    }
}