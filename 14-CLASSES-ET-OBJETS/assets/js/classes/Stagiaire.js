// Crée par Joachim Zadi le 17/03/2022 à 10:53. Version 1.0
// ========================================================

import {Personne} from "./Personne";

export class Stagiaire extends Personne {
    #formation;

    constructor(prenom, age, formation) {
        super(prenom, age);
        this.#formation = formation;
    }

    get formation() {
        return this.#formation;
    }

    toString() {
        return super.toString() + `suit la formation ${this.#formation}`;
    }
}