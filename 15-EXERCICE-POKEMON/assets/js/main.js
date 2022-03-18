// Crée par Joachim Zadi le 18/03/2022 à 19:36. Version 1.0
// ========================================================


import {PokemonSportif} from "./classes/PokemonSportif.js";
import {PokemonCasanier} from "./classes/PokemonCasanier.js";
import {PokemonMer} from "./classes/PokemonMer.js";
import {PokemonCroisiere} from "./classes/PokemonCroisiere.js";

const pikachu = new PokemonSportif('Pikachu', 5.1, 2,0.85,120);
console.log(pikachu.toString());

const salameche = new PokemonCasanier('Salameche', 12, 2,0.65,8);
console.log(salameche.toString());

const rondoudou = new PokemonMer('Rondoudou', 45, 2);
console.log(rondoudou.toString());

const bulbizarre = new PokemonCroisiere('Bulbizarre', 15, 3);
console.log(bulbizarre.toString());



