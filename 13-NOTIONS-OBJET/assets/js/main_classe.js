// Crée par Joachim Zadi le 16/03/2022 à 14:52. Version 1.0
// ========================================================

// class Personne {
//     // Les proprietres
//     prenom;
//     age;
//     conjoint;
//
//     constructor(prenom, age) {
//     }
// }

// let personne = new Personne();
//
// personne.age = 53;
// personne.prenom = "Joachim";
// personne.conjoint = null;
//
// console.log(personne);
// console.log(typeof personne);
// console.log(personne.constructor.name);
//
// let tab = [1, 2];
// console.log(typeof tab);
// console.log(tab.constructor.name);

//------------------------------------

class Person {

    // Les attributs ou proprietes
    prenom;
    age;
    conjoint;
    static nbPerson = 0;

    /**
     * Permet la construction d'une personne
     * @param prenom, le prenom de la personne en cours de construction
     * @param age, l'age de la personne en cours de construction
     */
    constructor(prenom, age) {
        this.prenom = prenom;
        this.age = age;
        this.conjoint = null;
    }

    // Methode ==> c'est une fonction qui vit dans une classe
    seMarier(autrePerson) {
        let conditionMariage = (this.age >= 18) && (autrePerson.age >= 18);
        conditionMariage &&= (this.conjoint === null) && (autrePerson.conjoint === null);

        // Si la condition est verifier
        if (conditionMariage) {
            // Ici on effectue le mariage
            this.conjoint = autrePerson;
            autrePerson.conjoint = this;
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

let manou = new Person("Emmanuel", 35); // On instancie un object de type personne
console.log(manou);
console.log(Person.nbPerson);

let brigitte = new Person('Brigitte', 55);
console.log(brigitte);
console.log(Person.nbPerson);

// On effectue un mariage
manou.seMarier(brigitte);

console.log(manou.toString());
console.log('\n');
console.log(brigitte.toString());

// HERITAGE
class Stagiaire extends Person {
    constructor(prenom, age, formation) {
        // Fait refrence à la classe mere
        super(prenom, age);
        this.formation = formation;
    }

    // Methode polymorphe
    toString() {
        return super.toString() + `suit la formation ${this.formation}`;
    }
}

let fabien = new Stagiaire("Fabien", 22, "dwwm");
console.log(fabien);
console.log(fabien.constructor.name);
console.log(manou.constructor.name);

console.log(fabien.toString());

fabien.seMarier(brigitte);
console.log(fabien.toString());

let fanny = new Person("Fanny", 25);
fabien.seMarier(fanny);
console.log(fabien.toString());