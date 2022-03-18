// Crée par Joachim Zadi le 18/03/2022 à 21:13. Version 1.0
// ========================================================

import {Pokemon} from "./Pokemon.js";

/**
 * Classe de representation d'un PokemonAquatique
 * @abstract
 * @author Joachim Zadi
 * @version 1.0
 */
export class PokemonAquatique extends Pokemon {

    #nbNageoires;

    constructor(nom, poids, nbNageoires) {
        super(nom, poids);

        // Une classe abstraite ne peut pas être instanciée !!!
        if (this.constructor === PokemonAquatique) {
            throw new Error("Pour Info: L'instance de la classe PokemonTerrestre ne peut pas être instanciée");
        } else {
            this.#nbNageoires = nbNageoires;
        }
    }

    get nbNageoires() {
        return this.#nbNageoires;
    }

    toString() {
        let affichage = `J'ai ${this.nbNageoires} nageoires\n\n`;
        return super.toString() + affichage;
    }
}