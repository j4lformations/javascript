// Crée par Joachim Zadi le 22/03/2022 à 14:16. Version 1.0
// ========================================================

// ETAPE 1
// *******

// On sélectionne les éléments de la page
let formJeux = document.getElementById('formJeux');
let saisie = document.getElementById('saisie');
let erreur = document.getElementById('erreur');
let boutonValidation = document.getElementById('bouton');

// ETAPE 2
// *******

// Le systeme génère un nombre aléatoire compris entre [1 & 10]
let alea = Math.floor(Math.random() * 10) + 1;

// La variable representatnt le nombre de tentatives
let tentatives = 0;

// La variable representant le choix de l'utilisateur
let nombreChoisi;

// ETAPE 3
// *******
//On verifie que la saisie est un nombre
saisie.addEventListener('keyup', () => {

    let saisieEnCours = saisie.value;

    // Si la saisie n'est pas un nombre
    if (isInValideSaisie(saisieEnCours)) {
        // On affiche le msg d'erreur
        erreur.style.display = 'inline';

        // On genere le message à afficher
        erreur.innerText = (saisieEnCours == '' || isNaN(saisieEnCours)) ? 'Merci de saisir un nombre entier' : 'Le nombre doit etre compris entre 1 et 10';

        // On met la bordure du champ de saisie en rouge
        saisie.className = 'form-control is-invalid';

        // On desactive le bouton de validation
        boutonValidation.disabled = true;
    } else {
        // On retire la bordure rouge
        saisie.className = 'form-control';

        // On masque le message d'erreur
        erreur.style.display = 'none';

        // On active le bouton de validation
        boutonValidation.disabled = false;
    }
});


// ETAPE 4
// *******
//On valide le formulaire
formJeux.addEventListener('submit', function (e) {
    //On desasctive le comportement par defaut du navigateur
    e.preventDefault();

    if (!isInValideSaisie(saisie.value)) {

        //On increment le nombre de coup
        tentatives++;

        //On recupere la saisie de l'utilisateur
        nombreChoisi = saisie.value;

        //On reinitialise le champ de saisie
        saisie.value = '';

        //On appelle la fonction de verification
        verifier(nombreChoisi);

        saisie.className = 'form-control';
        boutonValidation.disabled = false;
    }
});


/**
 * Fonction permettant de verifier si la saisie user est invalide
 * @param chaine
 * @returns {boolean|boolean} true si la saisie est invalide, sino false
 */
const isInValideSaisie = (chaine) => {
    chaine = chaine.trim();
    return (chaine.length === 0 || isNaN(chaine)) || (chaine < 1 || chaine > 10);
}

/**
 * Permettant de generer le resultat de la devinette
 * @param nombre
 */
const verifier = (nombre) => {

    //On cree l'élément qui va encapsuler notre message
    let reponse = document.createElement('p');

    if (nombre < alea) {
        reponse.className = "reponse alert alert-danger";
        reponse.textContent = `Coup N°${tentatives}  [${nombre}], le nombre cherché est plus grand`;
    } else if (nombre > alea) {
        reponse.className = "reponse alert alert-danger";
        reponse.textContent = `Coup N°${tentatives}  [${nombre}], le nombre cherché est plus petit`;
    } else {
        reponse.className = "reponse alert alert-success";
        reponse.textContent = `Bravo le nombre à trouver etait ${alea}. Vous l'avez trouver en ${tentatives}`;
    }
    document.getElementById('reponse').prepend(reponse);
}
