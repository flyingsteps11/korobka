$(document).ready(function () {
    document.addEventListener('scroll', () => {
        if (window.innerWidth > 740) {
            if (scrollY > 60) {
                $('.container-s').addClass('header-sm');
            } else {
                $('.container-s').removeClass('header-sm');
            }
        }
    });
    $("#menu,#menu__box-nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 140;

        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".menu__box").on("click", "a", function (event) {
        $('#menu__toggle').prop('checked', false);
        $('.container-w').removeClass('container-z');
        $('.header__logo').removeClass('logo__display');
    });
    $('.ring').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal').addClass('overlay-visible');
    });
    $(document).mouseup(function (e) {
        var container = $("#modal");
        if (container.has(e.target).length === 0) {
            $('#modal').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    $('.modal__button').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal').removeClass('overlay-visible');
        $('#modal1').addClass('overlay-visible');
    });
    $(document).mouseup(function (e) {
        var container = $("#modal1");
        if (container.has(e.target).length === 0) {
            $('#modal1').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    $('.modal__close').on('click', () => {
        $('#modal').removeClass('overlay-visible');
        document.body.style.overflowY = 'auto';
        document.querySelector('html').style.overflowY = 'auto';
    });
    $('.custom-select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().css('z-index', "-10").css('opacity', '0');
        } else {
            $('.select__head').removeClass('open');
            $('.select__list');
            $(this).addClass('open');
            $(this).next().css('z-index', "1").css('opacity', '1');
        }
    });
    $('.custom-select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().css('z-index', '-10').css('opacity', '0');
        $(this).parent().prev().css('color', 'black');
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.custom-select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').css('z-index', '-10').css('opacity', '0');
        }
    });
    const owl = $('.reviews-carousel').owlCarousel({
        dots: false,
        nav: false,
        autoWidth: true,
        items: 2,
        margin: 30,
        responsive: {
            0: {
                margin: 0,
                items: 1,
            },
            420: {
                margin:22,
                items:2
            }
        }
    });
    const owl2 = $('.reviews-carousel2').owlCarousel({
        dots: false,
        nav: false,
        autoWidth: true,
        responsive: {
            0: {
                margin: 0,
                items: 1,
            },
            420: {
                margin:22,
                items:2
            }
        }

    });
    $('.reviews__right1').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.reviews__left1').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('.reviews__right2').click(function () {
        owl2.trigger('next.owl.carousel');
    });

    $('.reviews__left2').click(function () {
        owl2.trigger('prev.owl.carousel', [300]);
    });

    $('[data-fancybox="gallery"]').fancybox({
        padding: 0,
        autoSize: false,
        autoDimensions: false,
        fitToView: false,

        margin: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $('[data-fancybox="gallery2"]').fancybox({
        padding: 0,
        autoSize: false,
        autoDimensions: false,
        fitToView: false,

        margin: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $('#menu__toggle').on('click', () => {
        if ($('#menu__toggle').is(':checked')) {
            $('.container-w').addClass('container-z');
            $('.header__logo').addClass('logo__display');
        } else {
            $('.container-w').removeClass('container-z');
            $('.header__logo').removeClass('logo__display');
        }
    });
});