// Crée par Joachim Zadi le 14/03/2022 à 14:04. Version 1.0
// ========================================================

let maChaine = "chien";
console.log(maChaine.charAt(2));

maChaine = 'YouTube';
console.log(maChaine.substring(1, 2));
console.log(maChaine.substring(3, 7));
console.log(maChaine.substring(1));

console.log(maChaine.indexOf('h'));
console.log(maChaine.indexOf('u'));

console.log('Dragon Rouge'.indexOf('Rouge'));
console.log('Dragon Rouge'.startsWith('Dragon'));
console.log('Dragon Rouge'.endsWith('Dragon'));
console.log('dragon rouge'.toUpperCase());

maChaine = "KFC,McDO,BK,Grec";
console.log(maChaine.split(','));
console.log('dwwm'.split(""));
console.log('Je suis candidat à la formation dwwm'.replace('dwwm','web-design'));
