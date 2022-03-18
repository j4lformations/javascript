// Crée par Joachim Zadi le 18/03/2022 à 20:46. Version 1.0
// ========================================================

import {PokemonTerrestre} from "./abstracts/PokemonTerrestre.js";

/**
 * Classe de representation d'un PokemonSportif
 * @author Joachim Zadi
 * @version 1.0
 */
export class PokemonSportif extends PokemonTerrestre {

    #frequenceCardiaque;

    constructor(nom, poids, nbPattes, taille, frequenceCardiaque) {
        super(nom, poids, nbPattes, taille);
        this.#frequenceCardiaque = frequenceCardiaque;
    }

    get frequenceCardiaque() {
        return this.#frequenceCardiaque;
    }

    toString() {
        let affichage = `Ma frequence cardiaque est de ${this.frequenceCardiaque} pulsations par minute.\n\n`
        return super.toString() + affichage;
    }
}