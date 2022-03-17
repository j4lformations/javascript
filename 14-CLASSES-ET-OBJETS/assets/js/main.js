// Crée par Joachim Zadi le 17/03/2022 à 09:18. Version 1.0
// ========================================================

import {Personne} from "./classes/Personne.js";
import {Stagiaire} from "./classes/Stagiaire.js";

// let joachim = new Personne();
// joachim.prenom = 'Joachim';
// console.log(`${joachim.prenom}\n\n`);
// console.log(joachim);

// let anne = new Personne();
// anne.prenom = 'Anne';
// console.log(`${anne.prenom}\n\n`);
// anne.prenom = 'Lydie';
// console.log(`${anne.prenom}\n\n`);

const joachim = new Personne('Joachim', 53);
console.log(joachim);

// joachim.prenom = 'Zadi';// Non autorisé
console.log(joachim.prenom);
console.log(joachim.age);
console.log(joachim.conjoint);

joachim.prenom = 'Zadi';
console.log(joachim.prenom);

console.log(joachim.toString());
const anne = new Personne('Anne', 53);
console.log(anne.toString());

anne.seMarier(joachim);
console.log(anne.toString());

const fabien = new Personne('Fabien', 25);
console.log(fabien);

fabien.prenom = 'Adrien';
console.log(fabien);

const tab = [1, 2, 'p'];
tab.push('Kim');
console.log(tab);

let morgane = new Personne('Morgane', 22);
morgane.prenom = 'Dom';

morgane = new Personne('Thomas', 23);
console.log(Personne.nbPersonne);

const fanny = new Stagiaire('Fanny', 25, 'web-design');
fanny.seMarier(fabien);