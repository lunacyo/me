$(document).ready(function () {

  var change_img_time = 8000,
      transition_speed = 200;
    //슬라이드 autoplay 시간

  var listItems = $(".slider").children('li'),
      dotItems = $('#dots').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
        //삼항연산자 (조건) ? (참일때 실행) : (거짓일때 실행);
    }

    if (newIndex == 'next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('active')
            .eq(i).addClass('active');
      //eq = 주어진 index에 해당한 element를 선택

    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);
      

    current = i;
//    resets time interval if user clicks on slider dot; then begin automated slider
//    clearTimeout(changeTimeout);
//    changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
};

  // Event handlers
  $("#dots li").click(function () {
    var i = $('#dots li').index(this);
    moveTo(i);
  });
  //initialize slider on load
  moveTo('next');
});