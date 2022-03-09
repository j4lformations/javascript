// Crée par Joachim Zadi le 09/03/2022 à 14:00. Version 1.0
// ========================================================


// ==============================
// LES SAISIES UTILISATEURS EN JS
// ==============================

// Rappel sur l'utilisation de la console
// --------------------------------------
console.log("Permet d'afficher une journalisation dans la console");
console.warn("Attention ceci affiche un avertissement");
console.error("Attention ceci affiche une erreur");

// Pour afficher des informations sous forme d'alert --> alert
alert("Bonjour JavaScript depuis la boite d'alert"); // alert() <==> window.alert()

// Pour dialoguer avec le user --> confirm
let reponse = confirm("Voulez-vous confirmer votre prénom ?");
console.log(reponse); // confirm() ==> window.confirm()

// Saisie user --> prompt()
let saisie = prompt("Entrez votre âge");
console.log(saisie);
console.log(typeof saisie);

// saisie = Number(saisie);
saisie = saisie * (-1);
console.log(saisie);
console.log(typeof saisie);

// TOUT CE QUE VOUS SAISISSEZ DANS LE PROMPT N'EST QUE CHAINE DE CARACTERES

let prenom = prompt("Entrez votre prenom");
let age = Number(prompt("Entrez votre âge"));

console.log("Bonjour " + prenom + ", vous avez " + age + " ans");
alert("Bonjour " + prenom + ", vous avez " + age + " ans");
console.log('Bonjour ' + prenom + ', vous avez ' + age + ' ans');
console.log("Bonjour " + prenom + ', vous avez ' + age + " ans");

console.log("Dimanche j'irai au \"Japon\""); // On utilise le caractere \ d'echappement
console.log('Dimanche j\'irai au "Japon"');

console.log(`Dimanche j'irai au "Japon"`); // Template de String ou String Template

console.log("Bonjour " + prenom + ", vous avez " + age + " ans");
console.log(`Bonjour ${prenom}, vous avez ${age} ans`);

let fin = "Fin de cette partie du cours";
console.log(fin);
