// Crée par Joachim Zadi le 28/03/2022 à 13:41. Version 1.0
// ========================================================

// En JavaScript
// window.addEventListener('load', function () {
//     console.log("Document chargé");
// });
//
// console.log(jQuery());
// console.log($());

// En jQuery, jQuery() & $()  designe le meme objet
// jQuery(document).ready(function (e) {
//     // Je met tout mon code jQuery & JS
//     console.log("Document pret à l'emploi");
// });

// $(document).ready(function (e) {
//     // Je met tout mon code jQuery & JS
//     console.log("Document pret à l'emploi");
// });


// document.querySelector('p').innerText = 'Je suis un paragraphe';

$(document).ready(function (e) {
    // console.log($('p'));
    // console.log(document.getElementsByTagName('p'));
    // $('p').css("color", 'blue');
    //
    // $('#monId').css("color", 'red');
    //
    // $('.maClasse').css('font-size', '2rem');
    //
    // $('*').hide();

    // let p = document.getElementsByTagName('p')[1];
    // p.addEventListener('click', function () {
    //     this.style.display = '';
    // })


    // $('#btn').dblclick(function (e) {
    //     $('p').hide();
    // }).on('click', function () {
    //     $('p').css('color', 'red');
    // }).mouseenter(function () {
    //     $('p').css('color', 'yellow');
    // });

    // $('#btn').click(function (e) {
    //     $('p.maClasse').css('background', 'green').css('color', '#fff');
    // });

    // $('#btn').on('click', function (e) {
    //     $('p.maClasse').css('background', 'green').css('color', '#fff');
    // });

    // $('#btn').on('click', function (e) {
    //     $('p:first').css('background', 'green').css('color', '#fff');
    // });

    // console.log($('[data-jour][data-jour!=0]'));
    // console.log($('[data-jour]:eq(3)'));

    // $('p').addClass('shadow').addClass('fluo');
    $('div[data-jour]').click(function (e) {
        console.log(`data-jour = ${this.dataset.jour}`);
    });
});