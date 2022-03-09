// Crée par Joachim Zadi le 09/03/2022 à 11:38. Version 1.0
// ========================================================

// ========================
// DECLARATION DE VARIABLES
// ========================

// On declare un variable avec le mot clé ==> let
let uneVariable;

console.log(uneVariable); //undefined ==> car la variable n'est pas initialisée

// typeof ==> permet de connaitre le type d'une variable
console.log(typeof uneVariable); //undefined ==> undefined est un type indefini en JS

// On utilise l'operateur = pour faire des affectations ou assignations
// La premiere assignation est appelée une initialisation
let maVariable = 25.1; // Une decalaration suivie d'une assignation ou d'une affection ou suivie d'une initialistation
console.log(maVariable);//25.1
console.log(typeof maVariable);//number ==> number est un type nombre en JS

// let maVariable = "Joachim";// interdit ==> On ne peut declarer la meme variable de meme nom plusieurs fois avec le let
maVariable = "Joachim"; // assignation d'une nouvelle valeur autorisée en JS car "variable"
console.log(maVariable);//Joachim
console.log(typeof maVariable);// string ==> string est le type chaine de cararcteres en JS

// =========================================================================
// On dit que JS est un langage dynamique typé ou un langage faiblement typé
// =========================================================================

maVariable = true;
console.log(maVariable);//true
console.log(typeof maVariable);// boolean (true, false / 1 ou 0) ==> boolean est le type BOOLEEN en JS

maVariable = null;
console.log(maVariable);
console.log(typeof maVariable);// object ==> object est le type objet en JS

// On peut declarer plusieurs variables sur la meme ligne avec un seul mot cle let
let age = 15, nom, estMajeur;
nom = "Joachim";
estMajeur = false;
console.log(age, "ans");
console.log(nom);
console.log(estMajeur);

// Les mots cles ou reservés en JS ne peuvent etre utilisés comme identifiant
// let false; ==> interdit en JS, false est un mot cle du JS

// let 5prenom = "dwwm-1b"; ==> un identificateur ne peut commencer par un nombre
let prenom5 = "dwwm-1b";
console.log(prenom5);

let _prenom = "Joachim";
console.log(_prenom);

// let joachim zadi; //  Un identificateur en JS le ne peut etre composé
let nom_prenom; // Autorisé en JS

// Par convention, on va utilser le camel case comment convention de nommage
let nomPrenom = "Joachim Zadi";

// ========================
// DECLARATION DE CONSTANTE
// ========================

// Declaration d'une constante avec le mot clé ===> const
const NOM_PRENOM = "Thierry Borris";

// Une constante ne peut etre modifiée. Elle accepte une une & une seule assignation
// NOM_PRENOM = "Thierry Borris"; // ==> Interdit en JS

// UTILISATION DES VARIABLES & CONSTANTES
// ======================================

let a = 45;
let b = -15;

// Pour utiliser les variables, je les appelle par leur nom;
console.log(a + b);

let c = "5";
console.log(a + b + c); // 30 + "5"  ==> 305
console.log(typeof (a + b + c)) // string

// L'operateur + est dit polymorphe ==> il s'adpte a son environnement d'execution

c = a + b;

let autreVariable = "Fin de cette partie du cours";
console.log(autreVariable);
