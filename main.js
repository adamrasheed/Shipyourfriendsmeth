$(document).ready(function () {
    // Responsive Mobile Menu
    console.log('Thanks for Checking Out the Console! Emai me at info@creatix.io to say hi!');
    $('#navicon').click(function () {
        $('.menu').slideToggle(500);
    });

    // Parallax
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        $('#headline').css({
            'transform' : 'translate(0px, -' + wScroll / 3 + '%)'
        });

        $('#hero-cta').css({
            'transform' : 'translate(0px, -' + wScroll / 3 + '%)'
        });

    });

    // FAQ Accordian
    $('.answer').hide();
    $('.question').click(function () {
        $(this).children('.answer').slideToggle(300);
        return false;
    });

});
