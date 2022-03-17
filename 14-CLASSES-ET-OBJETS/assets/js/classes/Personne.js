// Crée par Joachim Zadi le 17/03/2022 à 09:19. Version 1.0
// ========================================================
/**
 * Classe permettant de creer des objet de type Personne
 * @author DWWM
 * @version 1.0
 */
export class Personne {
    // Les attributs ou variables ou proprités d'instance ==> IL FAUT LES ENCAPSULER
    #prenom;
    #age;
    #conjoint;

    // Les attributs ou variables ou proprités de classe
    static #nbPersonne = 0;

    // Le constructeur
    constructor(prenom, age) {
        this.#prenom = prenom;
        this.#age = age;
        this.#conjoint = null;
        Personne.#nbPersonne++;
    }

    // GETTERS
    get prenom() {
        return this.#prenom;
    }

    get age() {
        return this.#age;
    }

    get conjoint() {
        return this.#conjoint;
    }

    static get nbPersonne() {
        return this.#nbPersonne;
    }

// SETTERS
    set prenom(prenom) {
        this.#prenom = prenom;
    }

    // Methode ==> c'est une fonction qui vit dans une classe
    seMarier(autrePersonne) {
        let conditionMariage = (this.age >= 18) && (autrePersonne.age >= 18);
        conditionMariage &&= (this.conjoint === null) && (autrePersonne.conjoint === null);

        // Si la condition est verifier
        if (conditionMariage) {
            // Ici on effectue le mariage
            this.#conjoint = autrePersonne;
            autrePersonne.#conjoint = this;
        }
    }

    /**
     * Permet de donner la description textuelle d'un objet de type Person
     */
    toString() {
        let affiche = `${this.prenom}, ${this.age} ans\n`;
        if (this.conjoint !== null) {
            affiche += `a pour conjoint ${this.conjoint.prenom}, ${this.conjoint.age} ans\n`;
        }
        return affiche;
    }
}