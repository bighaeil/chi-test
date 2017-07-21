require('bootstrap');
require('../less/main.less');

var WINDOW_WIDTH = $(window).width();
var START_ITEMS = 4;
var ATTACH_TIEMS = 4;
var TOTAL_ITEMS = START_ITEMS;

var IMG_WIDTH = 500;

$(window).ready(function() {
    // 시작시 스크롤 오른쪽 붙이기
    // $(document).scrollLeft(imgItems * imgW - wWidth);
    var testTemplate = require('../template/chi-model.hbs');
    var models = require('./model/model1');
    var testHtml = testTemplate(models);

    $('.test-ul').append(testHtml);
});

$(window).resize(function () {
    WINDOW_WIDTH = $(window).width()
    console.log('resize: ' + WINDOW_WIDTH);
});

$(window).scroll(function() {

    /*
    // 왼쪽에 붙이기
    if(!$(document).scrollLeft()) {
        console.log('scroll Left');
        imgItems++;

        var liHtml = '';

        liHtml += '<li ' + 'id="' + imgItems + '">';
        liHtml += '<img src="./img/singapore.jpg">';
        liHtml += '</li>';

        $('.test-ul').prepend(liHtml);
    }
    */

    // 오른쪽에 붙이기
    if(IMG_WIDTH * TOTAL_ITEMS <= $(document).scrollLeft() + WINDOW_WIDTH) {
        console.log('scroll End');
        scrollRightEnd();
    }
});

function scrollRightEnd() {
    TOTAL_ITEMS += ATTACH_TIEMS;

    // 필요 - 입력되는 그림이 window size보다 작으면 pass, 크면 size로 줄임
    // 필요? - 글자수 넘어가면 ... 대체

    var testTemplate = require('../template/chi-model.hbs');
    var models = require('./model/model1');
    var testHtml = testTemplate(models);

    $('.test-ul').append(testHtml);
}

/*
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
*/