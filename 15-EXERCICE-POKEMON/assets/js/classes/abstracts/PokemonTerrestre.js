// Crée par Joachim Zadi le 18/03/2022 à 20:32. Version 1.0
// ========================================================

import {Pokemon} from "./Pokemon.js";

/**
 * Classe abstraite de reprensentation d'un Pokemon Terrestre
 * @abstract
 * @author Joachim Zadi
 * @version 1.0
 */
export class PokemonTerrestre extends Pokemon {

    #nbPattes;
    #taille;

    constructor(nom, poids, nbPattes, taille) {
        super(nom, poids);

        // Une classe abstraite ne peut pas être instanciée !!!
        if (this.constructor === PokemonTerrestre) {
            throw new Error("Pour Info: L'instance de la classe PokemonTerrestre ne peut pas être instanciée");
        } else {
            this.#nbPattes = nbPattes;
            this.#taille = taille;
            super.vitesse = this.nbPattes * this.taille * 3;
        }
    }

    get nbPattes() {
        return this.#nbPattes;
    }

    get taille() {
        return this.#taille;
    }

    get vitesse() {
        return super.vitesse.toFixed(2);
    }

    toString() {
        let affichage = `J'ai ${this.nbPattes} pattes\nMa taille est de ${this.taille}m\n`;
        return super.toString() + affichage;
    }
}