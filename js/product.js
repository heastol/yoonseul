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

$('.view_more').click(function(){
    $('#product ul').animate({
        height:'+=445px'
    })
    $('#product').animate({
        height:'+=445px'
    })
})