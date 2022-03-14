// Crée par Joachim Zadi le 14/03/2022 à 12:07. Version 1.0
// ========================================================

// EXERCICE 09
// Dans un tableau de 10 entiers initialisé avec des valeurs aléatoires, trouver les rangs
// et les valeurs du plus petit et du plus grand élément, et les afficher dans la console.

let tableau = [];
for (let i = 0; i < 10; i++) {
    let alea = Math.floor((Math.random() - Math.random()) * 1000);
    tableau.push(alea);
}

console.log(tableau);

let plusPetiteValeur = Math.min(...tableau);
let rangPlusPetit = tableau.indexOf(plusPetiteValeur);
console.log(`plusPetiteValeur = ${plusPetiteValeur}; `,`rangPlusPetit = ${rangPlusPetit}`);

let plusGrandeValeur = Math.max(...tableau);
let rangPlusGrand = tableau.indexOf(plusGrandeValeur);
console.log(`plusGrandValeur = ${plusGrandeValeur}; `,`rangPlusGrand = ${rangPlusGrand}`);



// 2. Inverser les éléments d'un tableau de 10 éléments (sans passer par un tableau
// intermédiaire).
// 3. Trier un tableau de 10 nombres saisis au clavier, par ordre croissant.
// 4. Fusionner deux tableaux déjà triés par ordre croissant.
// 5. Dire si une valeur existe dans un tableau.