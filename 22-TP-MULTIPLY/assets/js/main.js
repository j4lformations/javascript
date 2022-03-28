// Crée par Joachim Zadi le 24/03/2022 à 11:28. Version 1.0
// ========================================================

// ************************************
// ZONE DE DECLARATION DES VARIABLES //
// ************************************

import {Operation} from "./classes/Operation.js";

let operandeGauche = document.getElementById('operandeGauche');
let operandeDroite = document.getElementById('operandeDroite');
let saisie = document.getElementById('saisie');
let erreur = document.getElementById('erreur');
let btnValider = document.getElementById('btnValider');
let formReponse = document.formReponse;
let msg = document.querySelector('.main__msg');
let tentatives = document.getElementById('tentatives');


// ************************************
// ZONE DE DECLARATION DES FONCTIONS //
// ************************************

/**
 * Permet de verifier la validite du champ de saisie de la reponse
 * @param chaine la chaine
 * @returns {boolean} true si la chaine passé en parametre est valide, sinon false
 */
const isSaisieValide = (chaine) => {
    chaine = chaine.trim();
    return !((chaine.length === 0 || isNaN(chaine)) || !Number.isInteger(Number(chaine)));
}

/**
 * Fonction permettant de generer les operandes de l'opération
 */
function genereOperandes() {
    operandeGauche.innerText = Math.floor(Math.random() * 90) + 10;
    operandeDroite.innerText = Math.floor(Math.random() * 90) + 10;
}

// *************************
// ZONE DE GESTION DU JEU //
// *************************

// Permet de generer les operandes
genereOperandes();

// On passe le curseur au champ de saisie de la reponse
window.addEventListener('load', function (e) {
    saisie.focus();
});

// Verification de la saisie utilisateur
saisie.addEventListener('keyup', function () {
    let saisieEnCours = this.value;

    if (isSaisieValide(saisieEnCours)) {
        btnValider.disabled = false;
        erreur.style.display = 'none';
        this.style.border = '1px green solid';
    } else {
        // Je rentre ici en cas de saisie non valide
        erreur.innerText = 'Merci de saisir un nombre entier superieur à 10';
        erreur.className = 'main__erreur';
        erreur.style.display = 'block';
        btnValider.disabled = true;
        this.style.border = '1px red solid';
    }
});

formReponse.addEventListener('submit', function (e) {
    e.preventDefault();

    let valGauche = Number(operandeGauche.innerText);
    let valDroite = Number(operandeDroite.innerText);
    let resultat = Number(saisie.value.trim());

    let operation = new Operation(valGauche, valDroite, resultat);

    if (operation.correct) {
        msg.innerText = 'le résultat est correct, félicitation';
        msg.className = 'main__msg main__msg-succes';
    } else {
        msg.innerText = 'le résultat est incorrect, réessayer si vous voulez';
        msg.className = 'main__msg main__msg-echec';
    }

    let tr = document.createElement('tr');

    let tdNumero = document.createElement('td');
    tdNumero.innerText = `${operation.ordreOperation}`;
    tr.appendChild(tdNumero);

    let tdOperation = document.createElement('td');
    tdOperation.innerText = `${operation.operandeGauche} x ${operation.operandeDroite}`;
    tr.appendChild(tdOperation);

    let tdResultat = document.createElement('td');
    tdResultat.innerText = `${operation.resultat}`;
    tr.appendChild(tdResultat);

    let tdCorrect = document.createElement('td');
    tdCorrect.innerText = `${operation.correct ? 'Oui' : 'Non'}`;
    tr.appendChild(tdCorrect);

    tentatives.appendChild(tr);

    saisie.value = '';

    genereOperandes();
});