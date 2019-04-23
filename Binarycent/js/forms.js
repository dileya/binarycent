function showMenu(element, wrapper){
    $('.header .header-form-wrapper .open-form').removeClass('active');
    $(element).addClass('active');
    //проверка нужной формы
    if ($(element).hasClass('reg')) {
        $(wrapper).removeClass('enter');
        $(wrapper).addClass('reg');
    } else if ($(element).hasClass('enter')) {
        $(wrapper).removeClass('reg');
        $(wrapper).addClass('enter');
    }
}

function hideMenu(element, wrapper){
    $(element).removeClass('active');
    $(wrapper).removeClass('active')
        .removeClass('reg')
        .removeClass('enter');
}

function mobileMenuHide(burger, wrapper){
    $('body').removeClass('active');
    $(burger).removeClass('active');
    $(wrapper).removeClass('active');
}

$(document).on('scroll', function(){

    //параллакс
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.sec-bg').css('background-position', '50%' + ((scrolled * 0.13 + 300)) + 'px');
    }
    $(window).scroll(function(e){
        parallax();
    });

});

$(document).ready(function() {


    


    // init select styler script
    $('select').styler();
    var burger = '.burger',
        mainWrapper = '.main-menu-wrapper',
        headerWrapper = '.header-form-wrapper';

    $(burger).on('click', function(){
        $('body').toggleClass('active');
        $(this).toggleClass('active');
        $(mainWrapper).toggleClass('active');
    });

    $('.mobile-enter .reg').on('click', function(){
        mobileMenuHide(burger, mainWrapper);
    });

    $('.mobile-enter .enter').on('click', function(){
        mobileMenuHide(burger, mainWrapper);
    });

    // header form scripts
    $('.main-enter .open-form').on('click', function(){
        $(headerWrapper).toggleClass('active');
        showMenu(this,headerWrapper);
    });

    $('.header-form-wrapper .open-form').on('click', function(){
        showMenu(this,headerWrapper);
    });

    //проверка клика за пределами поля формы
    if ($(headerWrapper).hasClass('active')) {
        $(document).mouseup(function (e){
            if (!$(headerWrapper).is(e.target) && $(headerWrapper).has(e.target).length === 0) {
                hideMenu('.open-form', headerWrapper);
            }
        });
    };

    // close header form
    $('.form-close').on('click', function(){
        hideMenu('open-form', headerWrapper);
    });
});

// remove classes when device resize
$(window).resize(function() {
    if ($(window).width() < 1200) {
        $('.header-form-wrapper').removeClass('active enter reg');
        $('.open-form').removeClass('active');
    }
});