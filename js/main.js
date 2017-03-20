$('#buttonStart').click( function (){
  $('#startScreen').fadeOut(1000);
});

var score = 0;

$('.choice').click( function(){
    if($(this).hasClass('correct')) {
      $(this).closest('.question').find('.correct-answer').fadeIn(500);
      score = score + 25;
      $('#score').text(score);
    } else {
      $(this).closest('.question').find('.wrong-answer').fadeIn(500);
    }
});

$('.next').click(
  function(){
    $('.active').removeClass('active');
    $( $(this).attr('href') ).addClass('active');
  }
)
