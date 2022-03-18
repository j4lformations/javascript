// Crée par Joachim Zadi le 18/03/2022 à 21:43. Version 1.0
// ========================================================

import {PokemonAquatique} from "./abstracts/PokemonAquatique.js";

/**
 * Classe de representation d'un PokemonMer
 * @author Joachim Zadi
 * @version 1.0
 */
export class PokemonMer extends PokemonAquatique {

    constructor(nom, poids, nbNageoires) {
        super(nom, poids, nbNageoires);
    }

    get vitesse() {
        super.vitesse = this.poids / 25 * this.nbNageoires;
        return super.vitesse.toFixed(2);
    }
}