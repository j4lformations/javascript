// Crée par Joachim Zadi le 28/03/2022 à 16:12. Version 1.0
// ========================================================

$(document).ready(function (e) {

    // Gestion du focus
    // $('input').focus(function () {
    //     $(this).css('background-color', 'teal');
    // }).blur(function () {
    //     $(this).css('background-color', '#fff645')
    // });

    // Gestion du fadeIn
    // $('#btn').click(function () {
    //     $('#div1').fadeIn();
    //     $('#div2').fadeIn('slow');
    //     $('#div3').fadeIn(5000);
    // });


    // Gestion du fadeOut
    // $('#btn').click(function () {
    //     $('#div1').fadeOut();
    //     $('#div2').fadeOut('slow');
    //     $('#div3').fadeOut(5000);
    // });


    // Gestion du fadeTo
    $('#btn').click(function () {
        $('#div1').fadeTo(2000, .2);
        // $('#div2').fadeOut('slow');
        // $('#div3').fadeOut(5000);
    });
})