require('bootstrap');
require('../less/main.less');

var wWidth = $(window).width();
var imgItems = 2;
var imgW = 500;

$(window).ready(function() {
    $(document).scrollLeft(imgItems * imgW - wWidth);
});

$(window).scroll(function() {

    if(!$(document).scrollLeft()) {
        console.log('scroll Left');
        imgItems++;

        var liHtml = '';

        liHtml += '<li ' + 'id="' + imgItems + '">';
        liHtml += '<img src="./img/singapore.jpg">';
        liHtml += '</li>';

        $('.test-ul').prepend(liHtml);
    }

    /*
    console.log($(document).scrollLeft() + ' ' + imgItems);
    if(imgW * imgItems === $(document).scrollLeft() + wWidth) {
        console.log('scroll End');
        imgItems++;

        var liHtml = '';

        liHtml += '<li ' + 'id="' + imgItems + '">';
        liHtml += '<img src="./img/singapore.jpg">';
        liHtml += '</li>';

        $('.test-ul').append(liHtml);
    }
    */

});
