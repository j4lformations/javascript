// Crée par Joachim Zadi le 10/03/2022 à 09:17. Version 1.0
// ========================================================

// ============
// LES BOOLEANS
// ============

// Les permettent d'affirmer la veracité d'une expression
let estVrai = true;
let estFaux = false;

// Operateur de negation !
console.log(!estVrai);      // ==> false
console.log(!estFaux);      // ==> true

// Une petite parenthese
console.log("a" < 'b');     //  ==> true
console.log('A' > 'b');     //  ==> false
console.log(0 == '');       //  ==> true

// Les operateurs logiques & - && - | - || - ^

console.log(`true & false = ${true & false}`);
console.log(`false & true = ${false & true}`);
console.log(`true & true = ${true & true}`);

console.log(`true && false = ${true && false}`);
console.log(`false && true = ${false && true}`);
console.log(`true && true = ${true && true}`);

console.log(true && false && true);
console.log(true && (false && true));

console.log(`true | false = ${true | false}`);      // ==> 1
console.log(`true | true = ${true | true}`);        // ==> 1
console.log(`false | true = ${false | true}`);      // ==> 1
console.log(`false | false = ${false | false}`);    // ==> 0

console.log(`true || false = ${true || false}`);      // ==> true
console.log(`true || true = ${true || true}`);        // ==> true
console.log(`false || true = ${false || true}`);      // ==> true
console.log(`false || false = ${false || false}`);    // ==> false

console.log(true && (false || true));   // ==> true


// Structures conditionnelles ==> Si ... Alors
// ==========================

let condition = false;
condition = 0;
condition = '';
condition = NaN;
condition = undefined;
condition = null;

condition = true;
condition = -1;
condition = 'jhgjglujhmo'

if (condition){
    // Ici les instructions pour la condition verifiée
    console.log("condition verifiée ==> OK");
}else {
    // Ici les instructions pour les autres cas
    console.log("condition non verifiée ==> NOK");
}

let age = Number(prompt("Entrez votre âge"));


console.log(`age = ${age}`);

if (age >= 25) {
    console.log("Super Division");
}

if ((age >= 18) && (age < 25)) {
    console.log("Division Normale");
}

if (age < 18){
    console.log('Division Mineure');
}

if(isNaN(age)){
    console.log("Merci de saisir un nombre");
}

if (age >= 25) {
    console.log('> 25');
    console.log("Super Division");
} else if ((age >= 18) && (age < 25)) {
    console.log('entre 18 etb 25');
    console.log("Division Normale");
} else if (age < 18) {
    console.log(' < 18');
    console.log('Division Mineure');
} else {
    console.log('dans les autres cas')
    console.log("Merci de saisir un nombre");
}


let message = '';

if (age >= 18) {
    message += "Vous etes majeur(e)";
} else {
    message += "Vous etes mineur(e)";
}
console.log(message);

// IF TERNAIRE
message = (age >= 18) ? "Vous etes majeur(e)":"Vous etes mineur(e)";
console.log(message);

// SWITCH
// ======

let numeroDuJour = Number(prompt("Entrez un nombre entier"));

switch (numeroDuJour) {
    case 1:
        message = "Lundi";
        break;
    case 2:
        message = "Mardi";
        break;
    case 3:
        message = "Mercredi";
        break;
    case 4:
        message = "Jeudi";
        break;
    case 5:
        message = "Vendredi";
        break;
    case 6:
        message = "Samedi";
        break;
    case 7:
        message = "Dimanche";
        break;
    default:
        message = "Saisie non prise en charge par le système";
        break
}
console.log(message);

console.log("Fin de cette partie du cours");