$( document ).ready(function() {
    
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });

    // Animate on scroll - acrivate
    AOS.init();

});

