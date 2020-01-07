var v22 = 1;
var gg = 1;

$(window).scroll(function(event){

  if(gg==1&&($(window).scrollTop()+$(window).height())
    >($(".content1").offset().top)){
     /*$(".ct1b").animate({"margin-top":"3vw","left":"36.5vw"}),1000,function(){
            $(".ct1b").animate({"width":"25vw"},500);
      };
      $(".ct1a").animate({"margin-top":"9vw","left":"8vw"},1000,function(){
            $(".ct1a").animate({"width":"25vw"},500);
      });
      $(".ct1c").animate({"margin-top":"9vw","left":"65vw"},1000,function(){
            $(".ct1c").animate({"width":"25vw"},500);
      });
      $(".ct1d").animate({"margin-top":"33vw","left":"20vw"},1000,function(){
            $(".ct1d").animate({"width":"25vw"},500);
      });
      $(".ct1e").animate({"margin-top":"33vw","left":"55vw"},1000,function(){
            $(".ct1e").animate({"width":"25vw"},500);
      });*/
      if(v22==1){
        $("#video222").trigger('play');
         v22 = 0;
      }
     
      setTimeout(function () { 
           $(".ct1a,.ct1b,.ct1c,.ct1d,.ct1e,.ct1f").addClass("move1");
      }, 11000);
      
     /* setTimeout(function () { 
        $(".ct1a").css({"margin-top":"9vw","left":"8vw"});
        $(".ct1b").css({"margin-top":"3vw","left":"36.5vw"});
        $(".ct1c").css({"margin-top":"9vw","left":"65vw"});
        $(".ct1d").css({"margin-top":"33vw","left":"20vw"});
        $(".ct1e").css({"margin-top":"33vw","left":"55vw"});
        $(".ct1a,.ct1b,.ct1c,.ct1d,.ct1e").addClass("kuan"); 
        }, 2000);
*/
      setTimeout(function () { 
          $(".gys").animate({"opacity":"1"},500,function(){
            $(".gy2").animate({"width":"8vw"});
          });
          //$(".ct1a,.ct1b,.ct1c,.ct1d,.ct1e").removeClass("move1");
      }, 13000);
      gg=0;
    }
});
$(".gy2").click(function(){
    $(".ct1a,.ct1b,.ct1c,.ct1d,.ct1e,.ct1f").css({"display":"none"});
  $(".gy2").animate({"width":"0vw"},200,function(){
    $(".gys").animate({"opacity":"0"},200);
    $(".gyd").animate({"opacity":"1"},500,function(){
        $(".gyd2").animate({"width":"45vw"},500);
    });
  });
  
});
$(".gy_bt").click(function(){
  $(".gyd2").animate({"width":"0vw"},500,function(){
      $(".gyd").animate({"opacity":"0"},500,function(){
          $(".ct1a,.ct1b,.ct1c,.ct1d,.ct1e,.ct1f").css({"display":"block"});

            $(".gys").animate({"opacity":"1"},300,function(){
            $(".gy2").animate({"width":"8vw"},500);
          });
          
      });
  });


});