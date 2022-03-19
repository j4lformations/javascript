// Crée par Joachim Zadi le 17/03/2022 à 11:32. Version 1.0 //
// ======================================================== //

// ==========================
// = MANIPULER LES ÉLÉMENTS =
// ==========================
/*
    Nous avons appris à trouver les éléments de la page avec les méthodes de recherche.
    Voyons toutes les manipulations disponibles, en partant de la page décrite
    par le code HTML du fichier index.html
*/

// MODIFIER LE CONTENU
// -------------------

// La propriété innerHTML des éléments donne accès au contenu du code HTML à l’intérieur de l’élément
let innerHTML = document.getElementById('monH1').innerHTML;
console.log(innerHTML);

// La propriété outerHTML contient le code HTML de l’élément en incluant sa propre balise, avec ses attributs
let outerHTML = document.getElementById('monH1').outerHTML;
console.log(outerHTML);

// La propriété innerText contient le texte du contenu débarrassé du code HTML
let innerText = document.getElementById('monH1').innerText;
console.log(innerText);

// La propriété textContent est une chaîne de caractères représentant le contenu de l'élément HTML au format texte (sans les balises HTML).
let textContent = document.getElementById('dernier').textContent;
console.log(textContent);

// innerText vs textContent
// ************************
innerText = document.getElementById('dernier').innerText;
console.log(innerText);

// AJOUTER DES EVENEMENTS
// ----------------------
/*
    https://developer.mozilla.org/fr/docs/Web/API/event
    https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener

    La syntaxe generique est: element.addEventListener(String myEvent, Function, [JSON options])
    La methode addEventListener() attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.
*/

let monTitre = document.getElementById('monH1');

monTitre.addEventListener('click', function () {
    console.log("Vous m'avez cliqué !!!");
    console.log(`Je suis l'element ${this.localName} et mon id est ${this.id}`);
    this.style.color = 'orangered';
});

function fonctionEvenement(e) {
    console.log("Vous m'avez cliqué !!!");
    console.log(`Je suis l'element ${this.localName} et mon id est ${this.id}`);
    console.log(`Je suis l'element ${e.target.localName} et mon id est ${e.target.id}`);
    this.style.color = 'orangered';
}

monTitre.addEventListener("click", fonctionEvenement);

document.getElementById('monH1').addEventListener("mouseenter", function (e) {
    console.log(`Vous survolez actuellement l'element ${this.tagName}#${this.id}`);
    this.style.color = 'teal';
});

document.getElementById('monH1').addEventListener("mouseleave", function (e) {
    console.log(`Vous quittez actuellement l'element ${this.tagName}#${this.id}`);
    e.target.style.color = 'blue';
});

// ACCEDER AUX ATTRIBUTS
// ---------------------
/*
    Le JavaScript dispose de méthodes pour accéder aux attributs d’un élément HTML de type HTMLElement.
        ==> La méthode hasAttribute(String nomAttribut) retourne true si l’attribut passé en paramètre est présent dans la balise.
        ==> La méthode getAttribute(String nomAttribut) retourne le contenu de l’attribut passé en paramètre.
        ==> La méthode setAttribute(String nomAttribut, String valeur) modifie le contenu d’un attribut.
*/

// Les attributs simples
// *********************

let dernier = document.getElementById('dernier');
console.log(dernier.outerHTML);

if (!dernier.hasAttribute('title')) {
    dernier.setAttribute("title", "Je suis un nouvel attribut");
}
console.log(dernier.getAttribute('title'));
console.log(dernier.outerHTML);

// Les attributs de données
// ************************
/*
    La norme HTML du W3C définit strictement les attributs et les noms autorisés par balise.
    Le développeur peut malgré tout stocker directement dans le DOM des données via des attributs.
    Pour respecter la norme HTML, les noms des attributs doivent commencer par data-, suivi d’un nom au choix.

    Stockons dans un attribut le nombre de clics reçus sur chaque élément p de notre document.
    Pour cela nous pouvons écrire un événement qui va alimenter l’attribut data-nb-clics :
*/

let paras = document.querySelectorAll('p');
for (let i = 0; i < paras.length; i++) {
    // On initialise la propriete pour tous les paragraphes
    paras[i].setAttribute('data-nb-clics', '0');

    // On ajout un evenement de clic sur chaque paragraphe
    paras[i].addEventListener("click", function (e) {
        // On convertit la valeur de l'attribut en entier
        let nb = parseInt(this.getAttribute('data-nb-clics'));

        // On incremente met à jour la valeur de l'attribut
        this.setAttribute('data-nb-clics', ++nb);

        // Mise à jour de la date du dernier clic
        this.setAttribute('data-dernier-clic', new Date().getTime());

        // verification & utilisation de dataset
        console.log(this.outerHTML);
        console.log(this.dataset);
        console.log(this.dataset.nbClics);
        console.log(this.dataset.dernierClic);
    });
}

// MANIPULATION DU CSS
// -------------------

// Récupérer le style d’un élément
// *******************************
/*
    La méthode getComputedStyle() de l'objet window retourne le style CSS de l’élément passé en paramètre,
    calculé (computed) par le navigateur à partir des classes affectées à cet élément.
*/
console.log(getComputedStyle(monTitre));

// Manipuler le style
// ******************
/*
    Toutes les propriétés de style d’un élément sont accessibles via l’objet style.
    Les propriétés CSS sont ensuite disponibles en lecture et en écriture selon la nomenclature CSS.

    Puisque les noms de variables ne peuvent pas contenir le caractère tiret, les noms de style CSS sont
    transformés en JavaScript, avec une simple règle :
        ==> le tiret est supprimé et la lettre suivante passe en majuscule.
    Ainsi, la propriété CSS background-color devient en JS backgroundColor.
*/

let divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseenter', function (e) {
        this.style.backgroundColor = '#6a1b9a';
        this.style.color = '#fff';
        this.style.borderColor = '#fff';
    });
    divs[i].addEventListener('mouseleave', function (e) {
        this.style.backgroundColor = '#fff';
        this.style.color = '#6a1b9a';
        this.style.borderColor = '#000';
    })
}

// Ajouter et supprimer des classes CSS
// ************************************
/*
    L’usage direct des propriétés de style n’est pas une approche idéale.
    L’utilisation de classes CSS est préférable et facilite les évolutions :
    ==> pour modifier l’apparence à l’issue d’un événement, aucune mise à
        jour de code JavaScript n’est nécessaire, seule la classe CSS sera à corriger.

    La propriété className d’un élément contient la chaîne de caractères de l’attribut class :
*/
console.log(monTitre.classList);
console.log(monTitre.className);
console.log(document.querySelector('p:nth-child(4)').classList);
console.log(document.querySelector('p:nth-child(4)').className);