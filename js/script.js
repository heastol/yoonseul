$(window).scroll(function(){
    if($(this).scrollTop() > 104){
        $('.header').addClass('header_scrolled')
    } else{
        $('.header').removeClass('header_scrolled')
    }
})

$(window).scroll(function(){
    if($(this).scrollTop() > 104){
        $('.sub_wrap').addClass('sub_scrolled')
    } else{
        $('.sub_wrap').removeClass('sub_scrolled')
    }
})

$('.sub_wrap').hide();
$('.gnb>li').mouseenter(function(){
    $(this).children('.sub_wrap').stop().slideDown()
});
$('.gnb>li').mouseleave(function(){
    $(this).children('.sub_wrap').stop().slideUp()
});

$('.slide2').hide()
$('.left_btn2').click(function(){
    $('.slide1').fadeToggle(1000)
    $('.slide2').fadeToggle(1000)
})

$('.right_btn2').click(function(){
    $('.slide1').fadeToggle(1000)
    $('.slide2').fadeToggle(1000)
})

$('.left_btn').click(function(){
    $('.product ul').css({"transform" : "translate3d(-320px, 0px, 0px)",
                          "transition-duration" : "1s"})
})

$('.right_btn').click(function(){
    $('.product ul').css({"transform" : "translate3d(0px, 0px, 0px)",
                          "transition-duration" : "1s"})
})