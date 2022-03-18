// Crée par Joachim Zadi le 17/03/2022 à 11:32. Version 1.0
// ========================================================

// =====================================
// = RECHERCHER UN ELEMENT DANS LE DOM =
// =====================================

// Recherche d'un à partir de son nom de tag
// *****************************************

// La syntaxe générique est la suivante : document.getElementsByTagName(String balise) ==> HTMLCollection
// La méthode getElementsByTagName() retourne une liste d’éléments dont la balise
// correspond à la balise passée en paramètre
let parNomDeTag = document.getElementsByTagName('p');
console.log(parNomDeTag);

// // Recherche d'un element a partir de son id
// // *****************************************

// La syntaxe générique est la suivante : document.getElementById(String identifiant) ==> HTMLElement
// La méthode getElementById() retourne l'élément HTML du DOM ayant l’attribut id passé en paramètre.
let parId = document.getElementById('bloc');
console.dir(parId);

// Recherche d'un à partir de sa classe CSS
// ****************************************

// La syntaxe générique est la suivante : document.getElementsByClassName(String nomClasse) ==> HTMLCollection
// La méthode getElementsByClassName() retourne une liste d’éléments dont la classe CSS correspond au nom de
// classe passé en paramètre
let parNomDeClass = document.getElementsByClassName('para');
console.log(parNomDeClass);

// La syntaxe générique est la suivante : document.getElementsByName(String nom) ==> HTMLCollection
// La méthode getElementsByClassName() retourne une liste d’éléments dont la classe CSS correspond au nom de
// classe passé en paramètre
let parAttrName = document.getElementsByName('nom');
console.log(parAttrName);

// // Recherche d'un à partir de son nom de selectuer CSS
// // ***************************************************

// La méthode querySelector() retourne le premier élément trouvé dans le DOM répondant au sélecteur passé en paramètre
// La syntaxe générique est la suivante : document.querSelector(String selecteurCSS) ==> HTMLElement
let parSelecteur = document.querySelector('.para');
console.log(parSelecteur);

// La méthode querySelectorAll() retourne tous les éléments répondant au sélecteur CSS passé en paramètre
// La syntaxe générique est la suivante : document.querSelectorAll(String selecteurCSS) ==> NodeList
parSelecteur = document.querySelectorAll('p.para');
console.log(parSelecteur);

parSelecteur = document.querySelectorAll('span.span');
console.log(parSelecteur);

parSelecteur = document.querySelectorAll('div#bloc');
console.log(parSelecteur);

/*
    Le type HTMLCollection est une sorte de tableau particulier simplifié qui n’hérite pas du type Array.
    Ainsi, les méthodes de tableau comme forEach() ou map() ne sont pas disponibles.
    Il faut absolument utiliser une boucle classique pour parcourir l’ensemble des éléments retournés,
    de l’indice 0 à l’indice length.

    Le type NodeList retourné par la méthode querySelectorAll() est une sorte de tableau, encore différent de HTMLCollection.
    Les navigateurs récents supportent les méthodes de parcours de type forEach() sur NodeList.
    Mais les plus anciens et Internet Explorer ne le supportent pas.
    Pour être certain d’avoir un retour manipulable sans erreur, il est nécessaire
    de transformer le type NodeList en type Array.
*/

// Certains éléments sont accessibles nativement par la notation pointée depuis l’objet document :
console.log(document.body);     // ==> HTMLBodyElement
console.log(document.forms);    // ==> HTMLCollection   ==> un tableau HTMLCollection de tous les éléments de balise form trouvés dans la page
console.log(document.scripts);  // ==> HTMLCollection   ==> un tableau HTMLCollection de tous les éléments de balise script trouvés dans la page

// ================================
// = ACCEDER AUX ELEMENTS ENFANTS =
// ================================

// Un élément possède la propriété childNodes, qui contient
// un tableau NodeList de tous les éléments enfants directs.

parSelecteur = document.querySelector('div#bloc');
console.log(parSelecteur);

let eltEnfants = parSelecteur.childNodes;
console.log(eltEnfants);

// Affiche le premier enfant
// let premierEnfant = parSelecteur.firstChild;     //  ==>  Affiche les #text
let premierEnfant = parSelecteur.firstElementChild;
console.log(premierEnfant);

// Affiche le dernier enfants
// let dernierEnfant = parSelecteur.lastChild;      //  ==> Affiche les #text
let dernierEnfant = parSelecteur.lastElementChild;
console.log(dernierEnfant);

// ===============================
// = ACCEDER AUX ELEMENTS FRERES =
// ===============================

// Les propriétés nextSibling et previousSibling pointent vers
// l’élément précédent ou suivant de même niveau hiérarchique.
// L’utilité de ces propriétés est claire quand on sait que le
// mot sibling signifie « enfant de mêmes parents ».

// Préférez les propriétés nextElementSibling et previousElementSibling,
// qui pointent correctement vers les éléments HTML en ignorant les informations inutiles.

let frereSuivant = parSelecteur.nextElementSibling;
console.log(frereSuivant);

let frerePrecedent = parSelecteur.previousElementSibling;
console.log(frerePrecedent);

let parent = parSelecteur.parentElement;
console.log(parent);