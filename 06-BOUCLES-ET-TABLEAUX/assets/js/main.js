// Crée par Joachim Zadi le 10/03/2022 à 15:55. Version 1.0
// ========================================================

// ======================
// STRUCTURES REPETITIVES
// ======================

// LA BOUCLE TANT QUE OU ==> while (condition)
let compteur = 11;
while (compteur <= 10) {
    console.log(compteur);
    compteur++;
}

// LA BOUCLE FAIRE TANT QUE ==> do ... while (condition)
let i = 110;
do {
    console.log(`iteration ${i}`);
    i++;
} while (i <= 10);

// LA BOUCLE POUR ==> for()
for (let i = 1; i <= 10; i += 2) {
    console.log(`${i}`);
}

// LES RUPTURES DE SEQUENCES BREAK ET CONTINUE

// BREAK
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(`i = ${i}`);
}

// CONTINUE
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(`i = ${i}`);
}

// DECLARATION D'UNE VARIABLE DE TYPE TABLEAU

let stagiaires = ["Morgan", "Fabien", "Adrien", "Hajar"];
console.log(stagiaires);
console.log(`taille = ${stagiaires.length}`);
console.log(stagiaires[2]);

let tabMixed = [true, 5.24, "Joachim", null, NaN];
console.log(tabMixed);

for (let i = 0; i < stagiaires.length; i++) {
    console.log(stagiaires[i]);
}

//FOR...OF --> Pour acceder aux elements du tableau
for (let s of stagiaires){
    console.log(s);
}