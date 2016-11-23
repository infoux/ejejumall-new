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

    $('.navigation p a').on('click', function() {
        $('.navigation .category ul').css('display', 'none')
        $(this).parent().parent().find('ul').css('display', 'block');
    });

    $('section.product .sort p a').on('click', function() {
        $('section.product .sort p a').removeClass('active');
        $(this).addClass('active');
        $('section.product #list').removeClass();
        $('section.product #list').addClass($(this).attr('data'));
    });

    $('div.select input').on('click', function() {
        $('.info-text .select ul').css('display', 'none');
        $(this).parent().find('ul').css('display','block');

    });
    $('div.select li a').on('click', function() {
        $('.info-text .select ul').css('display', 'none');
        $(this).parent().parent().parent().find('input').attr('value', $(this).text());

    });

    $('.stars button').on('click', function() {
        var starValue = $(this).attr("data");
         $(".stars button").find("i").removeClass("on");
         $(".stars button").each(function() {
             if ($(this).attr("data") <= starValue) {
                 $(this).find("i").addClass("on");
             }
         });
    });

    $('.btn-area.comment button').on('click', function() {
        $(this).parent().parent().find('.reply-write').css('display','block');

    });


    $('section.login-form .login-tabs a').on('click', function() {
        var loginTab = $(this).attr("data");
        $('section.login-form .login-tabs a').removeClass('active');
        $(this).addClass('active');
        $('section.login-form .form').removeClass('active');
        $('section.login-form #'+ loginTab).addClass('active');
    });

    $('section.store-content .store-tabs a').on('click', function() {
        var storeTab = $(this).attr("data");
        $('section.store-content .store-tabs a').removeClass('active');
        $(this).addClass('active');
        $('section.store-content .store').removeClass('active');
        $('section.store-content #'+ storeTab).addClass('active');
    });

    $('section.info-content .shopping-tabs a').on('click', function() {
        var shoppingTab = $(this).attr("data");
        $('section.info-content .shopping-tabs a').removeClass('active');
        $(this).addClass('active');
        $('section.info-content .shopping').removeClass('active');
        $('section.info-content #'+ shoppingTab).addClass('active');
    });


	$('#pwModify').click(function(){
		if(($('#pwModify').is(':checked')) == true){
			$('.sign-table tr.hidden').show();
		} else {
			$('.sign-table tr.hidden').hide();
		}
	});
	$('button.create').on('click',function(){
		$('#createPopup').show();
	});

});