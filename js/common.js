$(document).ready(function() {

    $('button.all-menu').on('click', function() {
        $(".menu-set").toggleClass("on");
        $(this).toggleClass("on");
        $(this).find("i").toggleClass("fa-bars").toggleClass("fa-close");
    });

    var issue = $('.main-issue .banner .slide').bxSlider({
        pagerCustom: '.banner-pager',
        controls:false,
        infiniteLoop:true,
        auto:true
    });

    var minibanner = $('.main-issue .s-banner .mini-banner ul').bxSlider({
        controls:false,
        infiniteLoop:true,
        auto:true
    });


});
