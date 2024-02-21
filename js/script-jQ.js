/* JQuery */
$(document).ready(function(){
  $("#section1 .t3 span").hide();
  $("#section1 .t3 b").hide();
  $(window).on('scroll',function(){
    /* 스크롤에 따른 Skill 게이지 조절 */
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if(scrollTop >= 1750 && scrollTop <= 3400){
      $("#section1 .t3 span").fadeIn();
      $("#section1 .t3 b").fadeIn();
    }else{
      $("#section1 .t3 span").fadeOut();
      $("#section1 .t3 b").fadeOut();
    };

    if(scrollTop >= 1700 && scrollTop <= 3300){
        $('.gage_in.g01').css({'width':'95%'});
        $('.gage_in.g02').css({'width':'84%'});
        $('.gage_in.g03').css({'width':'87%'});
        $('.gage_in.g04').css({'width':'70%'});
        $('.gage_in.g05').css({'width':'60%'});
        $('.gage_in.g06').css({'width':'95%'});
    }else{
        $('.gage_in').css({'width':'0%'});
    };

    if(scrollTop >= 2900 && scrollTop <= 4000){
      $('.gage-work .gage-work-in.wg01').css({'width':'100%'});
    }else{
        $('.gage-work .gage-work-in.wg01').css({'width':'0%'});
    };
    if(scrollTop >= 3750 && scrollTop <= 4550){
      $('.gage-work .gage-work-in.wg02').css({'width':'100%'});
    }else{
        $('.gage-work .gage-work-in.wg02').css({'width':'0%'});
    };
    if(scrollTop >= 4410 && scrollTop <= 5220){
      $('.gage-work .gage-work-in.wg03').css({'width':'100%'});
    }else{
        $('.gage-work .gage-work-in.wg03').css({'width':'0%'});
    };

    if(scrollTop >= 5440 && scrollTop <= 8300){
      $('.gage-work .gage-work-in.wg04').css({'width':'100%'});
    }else{
        $('.gage-work .gage-work-in.wg04').css({'width':'0%'});
    };

    /* Section4 백그라운드 이미지 변경 */
    if (scrollTop >= 6370 && scrollTop <= 7299) {
      $('#section4 .s4Bg').css({
        'background-image': 'url(../image/res-bg2.png)',
        'transition': 'background-image 0.5s ease-in-out'
      });
    } else if (scrollTop >= 7300){
      $('#section4 .s4Bg').css({
        'background-image': 'url(../image/res-bg3.png)',
        'transition': 'background-image 0.5s ease-in-out'
      });
    } else{
      $('#section4 .s4Bg').css({
        'background-image': 'url(../image/res-bg3.png)',
        'transition': 'background-image 0.5s ease-in-out'
      });
    }

  });

  /* Tab menu */
  $(".tab-btn li").click(function(){
    
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");

    $(".tabContents .pj-grid").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

  /* Modal */
  $("#tab1 .card-content .card-btn a").click(function(){
    g_pop = $(this).closest("#tab1 .card").index();
    $("#popup .g_page span:nth-child(1)").text(g_pop+1);
    $("html").css({overflowY:"hidden"});
    $("#popup .pop>li").eq(g_pop).show();
    $("#popup").stop().fadeIn();
  });

  $("#tab2 .card-content .card-btn a").click(function(){
    g_pop=$(this).closest("#tab2 .card").index();
    $("#popup2 .g_page span:nth-child(1)").text(g_pop+1);
    $("html").css({overflowY:"hidden"});
    $("#popup2 .pop>li").eq(g_pop).show();
    $("#popup2").stop().fadeIn();
  });

  $("#tab3 .card-content .card-btn a").click(function(){
    g_pop=$(this).closest("#tab3 .card").index();
    $("#popup3 .g_page span:nth-child(1)").text(g_pop+1);
    $("html").css({overflowY:"hidden"});
    $("#popup3 .pop>li").eq(g_pop).show();
    $("#popup3").stop().fadeIn();
  });

  function handleLeftButton(popupSelector) {
    if (g_pop > 0) {
      $(popupSelector + " .pop>li").eq(g_pop).stop().fadeOut();
      g_pop--;
      $(popupSelector + " .g_page span:nth-child(1)").text(g_pop + 1);
      $(popupSelector + " .pop>li").eq(g_pop).stop().fadeIn();
    }
  }

  $("#popup .left_btn").click(function(){
    handleLeftButton("#popup");
  });
  
  $("#popup2 .left_btn").click(function(){
    handleLeftButton("#popup2");
  });
  
  $("#popup3 .left_btn").click(function(){
    handleLeftButton("#popup3");
  });

  function handleRightButton(popupSelector, maxPop) {
    if (g_pop < maxPop) {
      $(popupSelector + " .pop>li").eq(g_pop).stop().fadeOut();
      g_pop++;
      $(popupSelector + " .g_page span:nth-child(1)").text(g_pop + 1);
      $(popupSelector + " .pop>li").eq(g_pop).stop().fadeIn();
    }
  }
  
  $("#popup .right_btn").click(function(){
    handleRightButton("#popup", 7);
  });
  
  $("#popup2 .right_btn").click(function(){
    handleRightButton("#popup2", 7);
  });
  
  $("#popup3 .right_btn").click(function(){
    handleRightButton("#popup3", 4);
  });

  //close 버튼
  $(".btn_close").click(function(){
    $("#popup, #popup2, #popup3").stop().fadeOut();
    $("#popup .pop>li, #popup2 .pop>li ,#popup3 .pop>li").stop().hide();
  });


  $(".thanks").click(function(){
    $(this).animate({"width":"1200px","height":"300px"},600);
    $(this).css({"animation":"none"});
    $(this).find(".thanks-comment").css({"opacity":"0"})
    $(".last-text").fadeIn(1500);
    $(".last-text").css({"display":"flex"});
  })
  $(".last-text-close").click(function(){
    $(".thanks").animate({"width":"100px","height":"50px"},600);
    $(".thanks").find(".thanks-comment").css({"opacity":"1"})
    $(".thanks").css({"animation":"footAni .5s infinite alternate linear"});
    $(this).find(".thanks-comment").css({"opacity":"1"});
    $(".last-text").css({"display":"none"});
  })


});