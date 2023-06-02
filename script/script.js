$(function () {
    
    // 로고 클릭시 최상단!
    $(".logo").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });
    // 하단 버튼 클릭시 최상단!
    $(".btn_top").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });


// 하단 버튼이 스크롤 500픽셀 도달시 나타남!
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }
    });
// 각 메뉴 클릭시 애니메이션으로 각 컨텐츠에 위치 이동
var menu = $(".menu>ul>li")
var con = $("#contents>div")
menu.click(function(){
    var tg = $(this); //this> 메뉴이면서 클릭 이벤트가 일어난 li
    var i = tg.index(); // .index() -순서값을 나타냄
    var section = con.eq(i);
    var top = section.offset().top;
    $("html,body").stop().animate({
        scrollTop:top
    });
});
});
