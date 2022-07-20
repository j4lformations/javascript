// Crée par Joachim Zadi le 24/03/2022 à 15:08. Version 1.0
// ========================================================*
export class Operation {

    // Attributs
    #ordreOperation;
    #operandeGauche;
    #operandeDroite;
    #resultat;
    #correct;
    static #numero = 0;

    constructor(operandeGauche, operandeDroite, resultat) {
        this.#operandeGauche = operandeGauche;
        this.#operandeDroite = operandeDroite;
        this.#resultat = resultat;
        this.#correct = (this.#operandeGauche * this.#operandeDroite === this.#resultat);
        Operation.#numero++;
        this.#ordreOperation = Operation.#numero;
    }

    get operandeGauche() {
        return this.#operandeGauche;
    }

    get operandeDroite() {
        return this.#operandeDroite;
    }

    get resultat() {
        return this.#resultat;
    }

    get correct() {
        return this.#correct;
    }

    get ordreOperation() {
        return this.#ordreOperation;
    }
}