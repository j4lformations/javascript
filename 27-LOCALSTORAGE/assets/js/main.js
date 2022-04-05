// Crée par Joachim Zadi le 03/04/2022 à 10:53. Version 1.0
// ========================================================

function savePanier(panier) {
    localStorage.setItem('panier', JSON.stringify(panier));
}

function getPanier() {
    let panier = localStorage.getItem('panier');
    if (panier == null) {
        panier = [];
        return panier;
    } else {
        return JSON.parse(panier);
    }
}

function addToPanier(produit) {
    let panier = getPanier();
    let findPanier = panier.find(p => p.id === produit.id);
    if (findPanier !== undefined) {
        findPanier.quantite++;
    } else {
        produit.quantite = 1;
        panier.push(produit);
    }
    savePanier(panier);
}

function removeFromPanier(produit) {
    let panier = getPanier();
    panier = panier.filter(p => p.id !== produit.id);
    savePanier(panier);
}

function changeQuantite(produit, quantite) {
    let panier = getPanier();
    let findProduit = panier.find(p => p.id === produit.id);
    if (findProduit !== undefined) {
        findProduit.quantite += quantite;
        if (findProduit.quantite <= 0) {
            removeFromPanier(produit);
        } else {
            savePanier(panier);
        }
    }
}

function getNomberProquit(){
    
}

function getPrixTotal() {
    
}

addToPanier({id: 1, nom: 'DELL', prix: 559.98, quantite: 1});
addToPanier({id: 2, nom: 'MSI', prix: 1559.98, quantite: 1});

removeFromPanier({id: 1});
changeQuantite({id: 2}, -5)

console.log(getPanier());