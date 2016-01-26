$(document).ready(function() {
    // navigation click actions
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});

// Navbar menu auto-scroll-to-section function
function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

// Animated navbar
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) { /* distance of scrolling from top */
                $('#nav').fadeIn(500); /* fade in speed rate */
            } else {
                $('#nav').fadeOut(300); /* fade out speed rate */
            }
        });
    });
})(jQuery);


