

/*
var navbar_s = document.getElementsByClassName("navbar")[0];
var nav_u = document.getElementById('nav_u');

window.onscroll=function(){
       var scrollTop=0;
      if(document.documentElement&&document.documentElement.scrollTop)
      {
        //alert(33);
          scrollTop=document.documentElement.scrollTop;
      }else if(document.body){  
          scrollTop=document.body.scrollTop;  
      }  
      //alert(1111);
        //var scrollTop = window.scrollTop;//获取滚动条
        //alert(scrollTop);
        var height_s  = ($(window).width())*0.02;
         if(scrollTop<height_s){//当滚动条的高度大于80px,并且导航栏不是位于顶部的时候，通过jq给header添加css样式使其固定定位到浏览器可视窗口的顶部
              //header.style.setProperty('background','rgba(0, 0, 0, 0.7) none repeat scroll 0 0 !important');
             //header.style.setProperty('background-color','black');
             //alert("5646"+header.offsetWidth);
            navbar_s.style.setProperty('width','80vw'); 
            navbar_s.style.setProperty('position','absolute');
            navbar_s.style.setProperty('top','2vw');
            navbar_s.style.setProperty('left','10vw');
            nav_u.style.setProperty('padding-left','3vw');
             //header.style.setProperty('background','#fff');
         } 
//当滚动条的高度小于80px,并且导航栏是位于顶部的时候，通过jq给header添加css样式使其回到原始的位置。
         if(scrollTop>height_s){
          navbar_s.style.setProperty('width','99vw'); 
          navbar_s.style.setProperty('left','0');
          //alert(height_s);
          navbar_s.style.setProperty('position','fixed');
          navbar_s.style.setProperty('top','0');  
          navbar_s.style.setProperty('z-index','999');
          nav_u.style.setProperty('padding-left','10vw');
              //header.style.setProperty('position','fixed');     
         }
    };
*/

//视觉差滚动
window.scrollReveal = new scrollReveal({reset:true});
  $.stellar({
    horizontalScrolling: false,
    responsive: false
  });


var st1 = document.getElementById('st1');
var st2 = document.getElementById('st2');
var st3 = document.getElementById('st3');
var line_1 = document.getElementById('line_1');
var line_2 = document.getElementById('line_2');
var line_3 = document.getElementById('line_3');
var b = 2;
// window.onload = function(){
// }
var st1_video = document.getElementById('st1_video');

var h_bt = document.getElementById('h_bt');
window.onload= function(){
}
function test(){
  
  if(b%3==1){
      st1.classList.add("active");
      st1_video.play();
      line_1.style.setProperty('background','#fff'); 
      line_3.style.setProperty('background','rgba(255,255,255,0.3)'); 
      h_bt.onclick=function(){
        javascript:window.location.href='hechi.html';
      }
      if(st3.classList.contains('active')==true){
　　　　st3.classList.remove("active");
      }
      if(st2.classList.contains('active')==true){
　　　　st2.classList.remove("active");
      }
  }
  if(b%3==2){
      st2.classList.add("active");
      line_2.style.setProperty('background','#fff'); 
      line_1.style.setProperty('background','rgba(255,255,255,0.3)'); 
      h_bt.onclick=function(){
        javascript:window.location.href='page_66.html';
      }
      if(st1.classList.contains('active')==true){
　　　　st1.classList.remove("active");
      }
      if(st3.classList.contains('active')==true){
　　　　st3.classList.remove("active");
      }
  }
  if(b%3==0){
      st3.classList.add("active");

      line_3.style.setProperty('background','#fff'); 
      line_2.style.setProperty('background','rgba(255,255,255,0.3)');
      h_bt.onclick=function(){
        javascript:window.location.href='other44.html';
      } 
      if(st1.classList.contains('active')==true){
　　　　st1.classList.remove("active");
      }
      if(st2.classList.contains('active')==true){
　　　　st2.classList.remove("active");
      }
  }
  b++;
  if(b==9){
      b=3;
  }
}
setInterval(test,3800);

$(document).ready(function(){
    $(".navbar").delay("slow").animate({left:"10vw",width:"80vw"},1000,function(){
     $(".navbar ul li a").animate({opacity:"1"});
     
  });
});

$(window).scroll(function(event){
  if($(window).scrollTop()>100){
    $(".fh0").css({"opacity":"1","height":"4vw"});
  }else{
    $(".fh0").css({"opacity":"0","height":"0vw"});

  }
});
$(".fh0").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
 });

