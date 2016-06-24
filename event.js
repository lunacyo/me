$(document).ready(function(){
    $('body').css('display','block');
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
            var about = $("#about");
            TweenMax.staggerTo([about], 2,  {scale:0,opacity:0,display:'none'}, 0.25);
            var pf = $('#pf');
            TweenMax.staggerTo([pf], 2,  {scale:0,opacity:0,display:'none'}, 0.25);
        }else{
            $('#menu').hide(1500);
            $('#wise_Wrap').fadeIn(1500);
            $(this).attr('class','fa fa-bars');
            var about = $("#about");
            TweenMax.staggerTo([about], 2,  {scale:1,opacity:1,display:'block'}, 0.25);
            var pf = $('#pf');
            TweenMax.staggerTo([pf], 2,  {scale:1,opacity:1,display:'block'}, 0.25);
        }
    });
    $('#menu li>a').mouseover(function(){
        $(this).css('color','#99dcd5');
    });
    $('#menu li>a').mouseout(function(){
        $(this).css('color','#fff');
    });
    $('.dg').mouseover(function(){
        $(this).css('cursor','pointer').css('opacity','0.3');
        $('.dg_Ex').slideDown(1000);
    });
    $('.dg').mouseout(function(){
        $(this).css('opacity','1');
        $('.dg_Ex').hide();
    });
    $('.dg').click(function(){
        window.open('http://lunacyo.github.io/dg');
    });
    $('.apple').mouseover(function(){
        $(this).css('cursor','pointer').css('opacity','0.3');
        $('.apple_Ex').slideDown(1000);
    });
    $('.apple').mouseout(function(){
        $(this).css('opacity','1');
        $('.apple_Ex').hide();
    });
    $('.apple').click(function(){
        window.open('http://lunacyo.github.io/apple'); 
    });
    $('.5tardium').mouseover(function(){
        $(this).css('cursor','pointer').css('opacity','0.3');
        $('.5tardium_Ex').slideDown(1000);
    });
    $('.5tardium').mouseout(function(){
        $(this).css('opacity','1');
        $('.5tardium_Ex').hide();
    });
    $('.5tardium').click(function(){
        window.open('http://lunacyo.github.io/5tardium');
    })
});
window.onload = function(){
    var about = $("#about");
    TweenMax.staggerFrom([about], 2,  {scale:0.2}, 0.25);
    var pf = $('#pf');
    TweenMax.staggerFrom([pf], 2,  {scale:0.2}, 0.25);
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