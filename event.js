$(document).ready(function(){
   $('#img_Wrap img').click(function(){
     if($(this).attr('src')=='/images/dg.png'){
          window.open('http://lunacyo.github.io/dg');
         }else if($(this).attr('src')=='/images/apple.png'){
             window.open('http://lunacyo.github.io/apple');
         }else if($(this).attr('src')=='/images/5tardium.png'){
             window.open('http://lunacyo.github.io/5tardium');
         } 
   });
    $('.fa-bars').click(function(){
        if($(this).attr('class')=='fa fa-bars'){
            $(this).attr('class','fa fa-times');
            $('#menu').show(1500);
            $('#wise_Wrap').fadeOut(1500);
        }else{
            $('#menu').hide(1500);
            $('#wise_Wrap').fadeIn(1500);
            $(this).attr('class','fa fa-bars');
        }
    });
    $('#menu li>a').mouseover(function(){
        $(this).css('color','#99dcd5');
    });
    $('#menu li>a').mouseout(function(){
        $(this).css('color','#fff');
    });
});
window.onload = function(){
   $('#wise_Wrap').slideDown(2000);
   var about = $("#about");
    TweenMax.staggerFrom([about], 2,  {scale:0.2}, 0.25);
    var dot1 = $('.dot1');
    var dot2 = $('.dot2');
    var dot3 = $('.dot3');
    var dot4 = $('.dot4');
    TweenMax.to([dot1,dot2,dot3,dot4], 5, {scale:0.2, opacity:1,repeat:9999});
    TweenMax.to(dot1, 5, {left:"100%",repeat:9999, ease: SlowMo.ease.config(0.7, 0.7, false), y: 0 });
    TweenMax.to(dot2, 5, {top:"100%",repeat:9999, ease: SlowMo.ease.config(0.7, 0.7, false), y: 0 });
    TweenMax.to(dot3, 5, {top:"-50",repeat:9999, ease: SlowMo.ease.config(0.7, 0.7, false), y: 0 });
    TweenMax.to(dot4, 5, {left:"-50",repeat:9999, ease: SlowMo.ease.config(0.7, 0.7, false), y: 0 });
}
//window.onload = function() {
//  var red = document.getElementById("red"),
//		    yellow = document.getElementById("yellow"),
//		    green = document.getElementById("green"),
//		    blue = document.getElementById("blue"),
//		    pink = document.getElementById("pink"),
//		    purple = document.getElementById("purple");
//	
//  //The last parameter with value of .25 is the stagger amount. Try changing it to 1 see how it impacts the animation.
//  TweenMax.staggerFrom([red, yellow, green, blue, pink, purple], 1,  {scale:0.2, opacity:0.3}, 0.25);			
//}