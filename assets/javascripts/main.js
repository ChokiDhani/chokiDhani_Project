$(document).ready(function () {
    /*  $.fatNav();*/
    $("#trigger-overlay").click(function () {
        $("#topbar").addClass('activeMenu');
    });
    $("#closeMenu").click(function () {
        $("#topbar").removeClass('activeMenu');
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $("#topbar").css("background-color", "rgb(137,102,51)");
            $("#logo2").css("background-color", "rgb(137,102,51)");
        }
        else {
            $("#topbar").css("background-color", "rgba(0,0,0,0.0)");
            $("#logo2").css("background-color", "rgba(0,0,0,0.0)");
        }
        if ($(window).scrollTop() > 500) {
            $("#topbar").css("background-color", "#fff");
            /*$("#logo2").css("top", "58px");*/
            $("#logo2").css("background-color", "#fff");
            $("#botbar").css("background-color", "rgba(137,102,51,1)");
            $("#topbar a").css("color", "rgba(137,102,51,0.8)");
            $(".logo1").html('<img src="assets/images/menu_logo_1.png" alt="logo">');
            $(".logo1").addClass("img_scroll");
            $("#logo2").html('<img src="assets/images/menu_logo_2.png" alt="logo">');
        }
        else {
            /*$("#logo2").css("top", "58.7px");*/
            $("#topbar a").css("color", "#fff");
            $(".logo1").html('<img src="assets/images/logo1.png" alt="logo">');
            $("#logo2").html('<img src="assets/images/logo2.png" alt="logo">');
            $(".logo1").removeClass("img_scroll");
            $("#botbar").css("background-color", "rgba(0,0,0,0)");
        }
        /* if ($(window).scrollTop() > 407) {
     $("#logo2").css("top", "58px");
 }
 else {
     $("#logo2").css("top", "58.7px");
 }*/
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3
        , loop: true
        , nav: true
        , autoplay: true
        , autoplayTimeout: 5000
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 768: {
                items: 2
            , }
            , 992: {
                items: 3
            , }
        }
    });
});
/*disapearon click*/
window.onload = function () {
    document.getElementById('close').onclick = function () {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        return false;
    };
};