// Crée par Joachim Zadi le 18/03/2022 à 21:03. Version 1.0
// ========================================================
import {PokemonTerrestre} from "./abstracts/PokemonTerrestre.js";

/**
 * Classe de representation de PokemonCasanier
 * @author Joachim Zadi
 * @version 1.0
 */
export class PokemonCasanier extends PokemonTerrestre{

    #nbHeures;

    constructor(nom, poids, nbPattes, taille, nbHeures) {
        super(nom, poids, nbPattes, taille);
        this.#nbHeures = nbHeures;
    }

    get nbHeures() {
        return this.#nbHeures;
    }

    toString() {
        let affichage = `je regarde la télé ${this.nbHeures}h par jour.\n\n`
        return super.toString() + affichage;
    }
}