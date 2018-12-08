$(function() {  
    $("body").niceScroll();
    



$(document).ready(function(){
    $(".fancybox").fancybox();
    
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $("#top").fadeIn();
    }else{
        $("#top").fadeOut();
    }
});

   $("#top").click(function(){
         $("html,body").animate({scrollTop:0},1000);
     }); 
    
    });
    
     
    
      
    
       });   