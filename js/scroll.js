scroll_amount = 200;

$(function() {
  $("#scroll_button_up").click(function() {
    currentPosition = $(window).scrollTop();
    $(window).scrollTop(currentPosition - scroll_amount);
  });
  $("#scroll_button_down").click(function() {
    currentPosition = $(window).scrollTop();
    $(window).scrollTop(currentPosition + scroll_amount);
  });
});
