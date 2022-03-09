// Crée par Joachim Zadi le 09/03/2022 à 15:15. Version 1.0
// ========================================================


// ====================
// LE TYPE NUMBER EN JS
// ====================

20;
-45;
2.654;
-1.2563;

// Les operations de base ==> +, -, *, /, %

let addition = 45 + 3.2;
console.log(`45 + 3.2 = ${addition}`);

let soustraction = 45 - 3.2;
console.log(`45 - 3.2 = ${soustraction}`);

let multiplication = 45 * 3.2;
console.log(`45 * 3.2 = ${multiplication}`);

let division = 45 / 3.2;
console.log(`45 / 3.2 = ${division}`);

let modulo = 45 % 8;
console.log(`45 % 8 = ${modulo}`);

// ORDRE DE PRIORITE DES OPERATIONS
// ================================

let resultat = 3 - 9 * 2;
console.log(`resultat = ${resultat}`);

resultat = (3 - 9) * 2;
console.log(`resultat = ${resultat}`);

// LES EXPOSANTS
// =============
console.log(2 ** 3);
console.log(2 ** 5);
console.log(5 ** 3);

// LE NaN OU NOT A NUMBER
// ======================

resultat = 0 / 0;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat);

resultat = 1 + NaN;
console.log(`resultat = ${resultat}`);

resultat = 1 / 0;
console.log(`resultat = ${resultat}`);

resultat = -1 / 0;
console.log(`resultat = ${resultat}`);


// LES OPERATEURS D'ASSIGANTIONS
// =============================

let x = 3;
console.log(`x = ${x}`);

x = x + 4;
console.log(`x = ${x}`);

x += 6; // ==> x = x + 6
console.log(`x = ${x}`);

x -= 1;
console.log(`x = ${x}`);

x *= 1;
console.log(`x = ${x}`);

x /= 5;
console.log(`x = ${x}`);

x = 12;
x %= 5;
console.log(`x = ${x}`);

x++;// x = x + 1 post-incrementation
console.log(`x = ${x}`);

x--;// x = x - 1 post-decrementation
console.log(`x = ${x}`);

++x; // x = x + 1  pre-incrementation
console.log(`x = ${x}`);

--x; // x = x + 1  pre-decrementation
console.log(`x = ${x}`);

let a = 25;
x = 3;

let resultat = a + x;
console.log(`resultat = ${resultat}`);

resultat = a + x++;
console.log(`x = ${x}`);
console.log(`resultat = ${resultat}`);

resultat = a + ++x;
console.log(`x = ${x}`);
console.log(`resultat = ${resultat}`);

// EXERCICE D'APPLICATION
// ======================
console.log(1.5 + 1.5 * 3); // ==> 6
console.log((10 % 6) ** 2); // ==> 16
console.log(200 + 0 / 0);   // ==> NaN

// LES ARRONDIS
// ============
console.log(Math.floor(0.9));   //  ==> 0
console.log(Math.floor(1.1));   //  ==> 1

console.log(Math.round(0.49));  //  ==> 0
console.log(Math.round(0.5));   //  ==> 1
console.log(Math.round(2.9));   //  ==> 3

console.log(Math.ceil(0.1));    //  ==> 1
console.log(Math.ceil(0.9));    //  ==> 1
console.log(Math.ceil(21));     //  ==> 21
console.log(Math.ceil(21.01));  //  ==> 22

// GENERATION D'UN NOMBRE ALEATOIRE COMPRIS ENTRE [0; 1[
let aleatoire = Math.random();
// aleatoire = Math.round(Math.random() * 10);
// aleatoire = Math.floor(Math.random() * 11);
console.log(`aleatoire = ${aleatoire}`);


// OPERATEURS DE COMPARAISON
// =========================
console.log(4 < 5);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 <= 4);
console.log(4 >= 4);
console.log(4 > 3);
console.log(4 == 3);
console.log(4 == 4);
console.log(4 == '4');
console.log(4 === '4');
console.log(4 != 4);
console.log(4 != "4");
console.log(4 !== '4');
console.log(4 !== 4);

let fin = "Fin de cette partie du cours";
console.log(fin);