/* *************************************************** */
/* PARTIE 1 ==> DECLARATION DES VARIABLES DU PROGRAMME */
/* *************************************************** */
let scoresGlobals = [0, 0];
let scoreEnCours = 0;
let joueurActif = 1;
let jouer = true;

/* ***************************************** */
/* PARTIE 2 ==> INITIALISATION DU GUI DU JEU */
/* ***************************************** */

//On appelle la fonction d'initilisation du jeu
initiliseLeJeu();

/* ********************************************************** */
/* PARTIE 3 ==> GESTION DU CLICK SUR LE BOUTON 'LANCEZ LE DE' */
/* ********************************************************** */

//On cible le bouton à l'aide de sa classe
let btnLancezLeDe = document.querySelector(`.btn-lancer`);

//On attache l'evenement de click à notre bouton avec une fonction anonyme lambda.
btnLancezLeDe.addEventListener('click', () => {
    if (jouer) {
        //Je simule le lance le Dé et encapsule le resultat dans la variable de
        let de = Math.floor(Math.random() * 6) + 1;
        //Je met à jour j'image du dé dans le GUI
        let domDe = document.querySelector('.de');
        domDe.style.display = 'block';
        domDe.src = `resources/images/de-${de}.png`;
        //On met à jour le score en cours du joueur actif sauf si le lancer vaut 1
        if (de !== 1) {
            //Ici, le lancer à sorti une valeur != 1.
            // On met donc à jour le score en cours du joueur actif
            scoreEnCours += de;
            document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;
        } else {
            //J'appelle la fonction joueurSuivant
            joueurSuivant();
        }
    }
});

/* ****************************************************** */
/* PARTIE 4 ==> GESTION DU CLICK SUR LE BOUTON 'COMMUTEZ' */
/* ****************************************************** */
let btnCommutez = document.querySelector('.btn-commuter');
btnCommutez.addEventListener('click', () => {
    if (jouer) {
        scoresGlobals[joueurActif - 1] += scoreEnCours;
        document.getElementById(`score-${joueurActif}`).textContent = scoresGlobals[joueurActif - 1];
            //On verifie si le joueur a atteint le score gagnant
        if (scoresGlobals[joueurActif - 1] >= 100) {
            document.getElementById(`nom-${joueurActif}`).textContent = 'Bravo !!!';
            document.querySelector('.de').style.display = 'none';
            document.querySelector(`.joueur-${joueurActif}-panel`).classList.add('vainqueur');
            document.querySelector(`.joueur-${joueurActif}-panel`).classList.remove('active');
            jouer = false;
        } else {
            //J'appelle la fonction joueurSuivant
            joueurSuivant();
        }
    }
});

/* ********************************************************** */
/* PARTIE 5 ==> IMPLEMENTATION DE LA FONCTION 'joueurSuivant' */
/* ********************************************************** */

//Fonction permet de commuter le jeu d'un joueur à l'autre en mettant
// à jour les scores GLOBAUX. //Son contenu n'est rien d'autre que le code répétitif des PARTIES III & IV
function joueurSuivant() {
    joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
    scoreEnCours = 0;
    document.getElementById(`encours-${joueurActif}`).textContent = '0';
    document.querySelector('.joueur-1-panel').classList.toggle('active');
    document.querySelector('.joueur-2-panel').classList.toggle('active');
    document.querySelector('.de').style.display = 'none';
}

/* ********************************************************* */
/* PARTIE 6 ==> GESTION DU CLICK SUR LE BOUTON 'NOUVEAU JEU' */
/* ********************************************************* */
let btnNouveauJeu = document.querySelector('.btn-nouveau');
btnNouveauJeu.addEventListener('click', () => {
    //On appelle la fonction d'initilisation du jeu
    initiliseLeJeu();
});

/* *********************************************************** */
/* PARTIE 7 ==> IMPLEMENTATION DE LA FONCTION 'initiliseLeJeu' */
/* *********************************************************** */
function initiliseLeJeu() {
    //Code d'initialisation de la PARTIE 2
    scoresGlobals = [0, 0];
    scoreEnCours = 0;
    joueurActif = 1;
    jouer = true;
    document.querySelector('.de').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0';
    document.getElementById('encours-2').textContent = '0';
    document.getElementById('nom-1').textContent = 'Joueur 1';
    document.getElementById('nom-2').textContent = 'Joueur 2';
    document.querySelector('.joueur-1-panel').classList.remove('vainqueur');
    document.querySelector('.joueur-2-panel').classList.remove('vainqueur');
    document.querySelector('.joueur-2-panel').classList.remove('active');
    document.querySelector('.joueur-1-panel').classList.add('active');
}
