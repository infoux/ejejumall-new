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
        auto:true,
        speed:2000,
        pause:6000
    });

    var minibanner = $('.main-issue .s-banner .mini-banner ul').bxSlider({
        controls:false,
        infiniteLoop:true,
        auto:true
    });

    var miniproduct = $('.main-issue .s-banner .product ul').bxSlider({
        pager:false,
        infiniteLoop:true,
        auto:true
    });

    $('.main-best button').hover(function() {
        $(this).parent().parent().bind('click', false);
    }, function(){
        $(this).parent().parent().unbind('click', false);
    });

    $('.main-recommend .tabs a').on('click', function() {
        var reValue = $(this).attr("data");
        $(".main-recommend .tabs a").removeClass("active");
        $(this).addClass("active");

        $(".main-recommend .recommend-data").removeClass("active");
        $(".main-recommend .recommend-data#" + reValue).addClass("active");
    });



});
