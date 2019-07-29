$(document).ready(function() {
    $("#devel").click(function () {
        $(".dev").toggle();
        $(".devel").toggle();
    });
});
$(document).ready(function() {
    $("#de1").click(function () {
        $(".dev").toggle();
        $(".devel").toggle();
    });
});
$(document).ready(function() {
    $("#design").click(function () {
        $(".user").toggle();
        $(".design").toggle();
    });
});
$(document).ready(function() {
    $("#us").click(function () {
        $(".user").toggle();
        $(".design").toggle();
    });
});
$(document).ready(function() {
    $("#product").click(function () {
        $(".del").toggle();
        $(".product").toggle();
    });
});
$(document).ready(function() {
    $("#de2").click(function () {
        $(".del").toggle();
        $(".product").toggle();
    });

    $("#post").hide();
   $("#pest").animate({opacity:1});
     $("#pest").hover(function(){
         $(this).stop().animate({opacity:.3},200);
         $("#post").fadeIn();},

         function(){
          $(this).stop().animate({opacity:1},500);
          $("#post").fadeOut();
     });
 });
  

 $("#you").hide();
   $("#use").animate({opacity:1});
     $("#use").hover(function(){
         $(this).stop().animate({opacity:.3},200);
         $("#you").fadeIn();},

         function(){
          $(this).stop().animate({opacity:1},500);
          $("#you").fadeOut();
     });
 

     $("#done").hide();
   $("#well").animate({opacity:1});
     $("#well").hover(function(){
         $(this).stop().animate({opacity:.3},200);
         $("#done").fadeIn();},

         function(){
          $(this).stop().animate({opacity:1},500);
          $("#done").fadeOut();
     });


     $("#u").hide();
     $("#del").animate({opacity:1});
       $("#dele").hover(function(){
           $(this).stop().animate({opacity:.3},200);
           $("#u").fadeIn();},
  
           function(){
            $(this).stop().animate({opacity:1},500);
            $("#u").fadeOut();
       });

       $("#say").hide();
     $("#said").animate({opacity:1});
       $("#said").hover(function(){
           $(this).stop().animate({opacity:.3},200);
           $("#say").fadeIn();},
  
           function(){
            $(this).stop().animate({opacity:1},500);
            $("#say").fadeOut();
       });

       $("#sa").hide();
       $("#nice").animate({opacity:1});
         $("#nice").hover(function(){
             $(this).stop().animate({opacity:.3},200);
             $("#sa").fadeIn();},
    
             function(){
              $(this).stop().animate({opacity:1},500);
              $("#sa").fadeOut();
         });
  
         $("#s").hide();
         $("#new").animate({opacity:1});
           $("#new").hover(function(){
               $(this).stop().animate({opacity:.3},200);
               $("#s").fadeIn();},
      
               function(){
                $(this).stop().animate({opacity:1},500);
                $("#s").fadeOut();
           });

           $("#joy").hide();
           $("#ice").animate({opacity:1});
             $("#ice").hover(function(){
                 $(this).stop().animate({opacity:.3},200);
                 $("#joy").fadeIn();},
        
                 function(){
                  $(this).stop().animate({opacity:1},500);
                  $("#joy").fadeOut();
             });
  
    
