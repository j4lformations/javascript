// Crée par Joachim Zadi le 18/03/2022 à 19:38. Version 1.0
// ========================================================
/**
 * Classe abstraite de representation d'un Pokemon
 * @abstract
 * @author Joachim Zadi
 * @version 1.0
 */
export class Pokemon {

    #nom;
    #poids;
    #vitesse;

    constructor(nom, poids) {
        // Une classe abstraite ne peut pas être instanciée !!!
        if (this.constructor === Pokemon) {
            throw new Error("Pour Info: L'instance de la classe Pokemon ne peut pas être instanciée");
        } else {
            this.#nom = nom;
            this.#poids = poids;
        }
    }

    get nom() {
        return this.#nom;
    }

    get poids() {
        return this.#poids;
    }

    set vitesse(vitesse) {
        this.#vitesse = vitesse;
    }

    get vitesse() {
        return this.#vitesse;
    }

    toString() {
        return `Je suis le Pokemon ${this.nom}\nMon poids est ${this.poids} kg\nMa vitesse est ${this.vitesse} km/h\n`;
    }
}