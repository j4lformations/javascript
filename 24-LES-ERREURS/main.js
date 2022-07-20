// Crée par Joachim Zadi le 28/03/2022 à 09:10. Version 1.0
// ========================================================

// EXEMPLE 01

fabien;
console.log(`Je suis sensé m'affiché dans la console`);

// UTILISATION DU BLOC try{...}catch (e) {...}

try{
    // ici on place notre code
    fabien;
    console.log(`Je suis sensé m'affiché dans la console`);
    f1();
}catch (e) {
    console.log(`NOM ERREUR : ${e.name}, MSG ERREUR : ${e.message}, LOCALISATION : ${e.stack}`);
    f2();
}

console.log("Bonjour");

function f1(){
    return 1;
}

function f2() {
    throw new Error('Erreur execution');
}


let division = (x, y) => {
    if (isNaN(x) || isNaN(y) || x === '' || y === '') {
        // On declenche une exception
        throw Error('Des nombre sont attendus en parametre');
    } else if (y === 0) {
        // On declenche une exception
        throw Error("Y doit etre different de 0");
    } else {
        console.log(x / y);
    }
}

division(5, 2);
division(5,'2');
division(5,0);
console.log('SUITE');

try {
    division(5, 0);
    // console.log('Fin du programme');
} catch (e) {
    console.log(e.message);
    throw Error('');
    // console.log('Fin du programme');
} finally {
    // Ici on met le code qui s'execute quoiqu'il advienne
    console.log('Fin du programme du bloc Finally');
    console.log('SUITE');
}

function isMultiple(n, m) {
    if (isNaN(n) || isNaN(m) || n === '' || m === '') {
        throw new Error("Attention des nombres sont attendus en saisie !!!");
    } else if (!Number.isInteger(n) || !Number.isInteger(m)) {
        throw new Error("Les nombres doivent etre entiers !!!");
    } else {
        return n % m === 0;
    }
}

try {
    console.log(isMultiple(4, '0'));
} catch (e) {
    console.log(e.message);
}

