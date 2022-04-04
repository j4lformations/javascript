// Crée par Joachim Zadi le 04/04/2022 à 09:17. Version 1.0
// ========================================================

// localStorage.setItem('panier', 'mon panier du localstorage');
// let panier = localStorage.getItem('panier');

localStorage.setItem('panier', JSON.stringify([]));

let panier = localStorage.getItem('panier');
panier = JSON.parse(panier);

panier.push({id:1, nom:'DELL', prix:555.99, qte:3});

localStorage.setItem('panier', JSON.stringify(panier));

console.log(panier);