// Crée par Joachim Zadi le 22/03/2022 à 14:16. Version 1.0
// ========================================================

// EXEMPLE DE CANEVAS DE TRAVAIL

// ETAPE 1
// =======

// On selectionne eles information utilisateur
let formulaire = document.getElementById('devineForm');
let saisie = document.getElementById('saisie');
let erreur = document.getElementById('erreur');

// ETAPE 2
// =======

// Le systeme genere un nombre aleatoire compris
let alea = Math.floor((Math.random() * 10)) + 1;
let nbCoup;

// ETAPE 3
// =======

// On recupere la saisie user pour verification
saisie.addEventListener('keyup', function (e) {

    let maSaisie = this.value.trim();

    if (maSaisie === '' || isNaN(maSaisie)) {

        erreur.style.display = 'block';
        erreur.style.color = 'red';
        erreur.style.fontSize = '.7rem';
        erreur.style.fontStyle = 'italic';
        erreur.innerText = 'Un nombre est attendu en saisie';

        // On peut utiliser les noms de classes
        // erreur.className = 'erreur-saisie'
    } else {
        erreur.style.display = 'none';
    }

    // if (parseInt(maSaisie) < 1 || parseInt(maSaisie) > 10) {
    //     erreur.style.display = 'block';
    //     erreur.innerText = 'entier compris entre 1 & 10 est attendu en saisie';
    // }
});

// ETAPE 4
// ======

// Validation du formulaire

formulaire.addEventListener('submit', function (e) {
    e.preventDefault();

    nbCoup++;

    if (saisie.value < alea) {
        let pAffiche = document.getElementById('instructions');
        pAffiche.innerText = `Le nombre est plus grand`;
    } else if (saisie.value > alea) {
        let pAffiche = document.getElementById('instructions');
        pAffiche.innerText = `Le nombre est plus petit`;
    } else {
        let pAffiche = document.getElementById('instructions');
        pAffiche.innerText = `Bravo Le nombre à cherché etai ${alea}`;
    }
})




