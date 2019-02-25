$(document).ready(function() {
    // var previousScroll = 0;
    $(window).on('scroll', function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > 120) {
            $('.navbar').addClass('navbar-toggle');
            $('.navbar-brand').addClass('navbar-brand-toggle');
        } else {
            $('.navbar').removeClass('navbar-toggle');
            $('.navbar-brand').removeClass('navbar-brand-toggle');
        }
        this.previousScroll = currentScroll;
    })
}) 