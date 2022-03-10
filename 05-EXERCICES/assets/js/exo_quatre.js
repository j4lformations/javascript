// Crée par Joachim Zadi le 10/03/2022 à 15:15. Version 1.0
// ========================================================

// EXERCICE 04
// Proposez un programme JavaScript qui demande le poids en kg et la taille en cm à son utilisateur
// puis calcule son IMC et lui affiche un message en fonction du résultat obtenu.
// Le calcul de l'IMC se fait en divisant le poids « exprimé en kg » par la taille au carré « exprimée en m ».

let poids = Number(prompt(`Entrez votre poids en kg`));
let taille = Number(prompt(`Entrez votre taille en cm`));

if (isNaN(poids) || isNaN(taille)) {
    console.log("Merci de saisir un nombre");
} else {
    // On converti la taille en m
    taille = taille / 100;

    // On calcule l'IMC
    let imc = poids / Math.pow(taille, 2);

    console.log(`imc = ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log(`Insuffisance pondérale`);
    } else if (imc > 18.5 && imc < 25) {
        console.log(`Poids normal`);
    } else if (imc >= 25 && imc < 30) {
        console.log(`Surpoids`);
    } else {
        console.log(`Obesité`);
    }
}
