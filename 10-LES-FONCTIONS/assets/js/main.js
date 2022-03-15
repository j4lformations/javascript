// Crée par Joachim Zadi le 14/03/2022 à 15:52. Version 1.0
// ========================================================

// Une fonction est une suite d'instructions d'un bloc nommée
function nomDeLaFonction(param, ...paramN){
    //instruction 1
    //instruction 2
    //instruction ...
    //instruction n
}

// Definition d'une fonction
const nomDeLaFonction = function (param, ...paramN) {
    //instruction 1
    //instruction 2
    //instruction ...
    //instruction n
}

// Definition d'une fonction
const nomDeLaFonction = (param, ...paramN) => {
    //instruction 1
    //instruction 2
    //instruction ...
    //instruction n
}

// Une fonction peut retourner un resultat avec le mot cle return
const somme = function (g, d) {
    return g + d;
}

// Par convention de nommage une fonction qui retourne une valeur est precedée de get
// C'est un acces en lecture
const getSomme = (g, d) => {
    return g + d;
}

let maSomme = getSomme(25, 10);
console.log(maSomme);

// Par convention de nommage une fonction qui ne retourne de valeur est precedée de set
// Un acces en ecriture
function setSomme(g, d) {
    console.log(g + d);
}

let a = 18; // La variable a est dite definie globalementou est de portée globale
let b = 10;

{
    // Voici un bloc ==> espace defini entre les accolades
    let a = 25; // On dit que la variable a est locale au bloc ou de portée locale
    console.log(`a + b = ${a + b}`);
    let c = 12;
    console.log(`c = ${c}`);
}

// console.log(`c = ${c}`); // =>  indefinie pour le JS
console.log(`a = ${a}`);


var a = 18; // La variable a est dite definie globalement

{
    // Voici un bloc ==> espace defini entre les accolades
    var a = 25; // On dit que la variable a est locale au bloc
    console.log(`a = ${a}`);
}
console.log(`a = ${a}`);

// Definition d'une fonction nommée addition
function addition(opGauche, opDroite) {
    return opGauche + opDroite;
}

// addition est une fonction à deux arguments
let resultat = addition();
console.log(resultat);

resultat = addition(25);
console.log(resultat);

resultat = addition(25,10);
console.log(resultat);

resultat = addition(25, 10, 100);
console.log(resultat);

// On peut definir une fonction avec des parametres par defaut
const multiplication = (opGauche = 10, opDroite = 5) => {
    return opGauche + opDroite;
}
console.log(multiplication());
console.log(multiplication(25));

// On peut definir une fonction avec un nombres indeterminé d'arguments
const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sum(2, 5, -15, 12, 75));

// IIEF ou fonction auto-appelante
(function multiply(...args) {
    let result = 1;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    console.log(result);
})(5, 2, -12);

// Une fonction passée en parametre d'une autre fonction est appeleé un callback
function definieDeuxFois(func) {
    func();
    func();
}

const rire = () => {
    console.log("HAHAHAHAHAHAHAHA");
    console.log("HIHIHIHIHIHIHIHI");
}

definieDeuxFois(rire);