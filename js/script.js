$(document).ready(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() >= 70){
            $(".navbar").addClass("fixed");
        } else{
            $(".navbar").removeClass("fixed");
        }
    })
    // $('.navbar-toggler').click(function() {
    //     $('.navbar-collapse').toggleClass('show');
    // });
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('show');
        var toggleIcon = $(this).find('.header__toggleIconMenu, .header__toggleIconClose');
        toggleIcon.toggleClass('header__toggleIconMenu header__toggleIconClose');
        $('body').toggleClass('no-scroll');
    });
})