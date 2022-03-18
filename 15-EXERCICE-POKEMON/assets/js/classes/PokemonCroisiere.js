// Crée par Joachim Zadi le 18/03/2022 à 21:46. Version 1.0
// ========================================================

import {PokemonAquatique} from "./abstracts/PokemonAquatique.js";

/**
 * Classe de representation d'un PokemonCroisiere
 * @author Joachim Zadi
 * @version 1.0
 */
export class PokemonCroisiere extends PokemonAquatique {

    constructor(nom, poids, nbNageoires) {
        super(nom, poids, nbNageoires);
    }

    get vitesse() {
        super.vitesse = (this.poids / 25 * this.nbNageoires) / 2;
        return super.vitesse.toFixed(2);
    }
}