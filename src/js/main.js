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

$(document).on('touchstart', function(e) {
    $('#msg').html('터치가 시작되었어요.');
    e.preventDefault();	//	이벤트취소
});//swipe, swipeleft, swiperight 참고

$(document).on('touchmove', function(e) {
    var event = e.originalEvent;
    $('#msg').html('touch 이벤트 중입니다.');
    $('#msg').append('<div>' + event.touches[0].screenX
        + ',' + event.touches[0].screenY + '</div>');
    event.preventDefault();

});

$(document).on('touchend', function(e) {
    $('#msg').append("<div>터치이벤트가 종료되었어요</div>");
});