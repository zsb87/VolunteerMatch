$(document).ready(function() {
  $('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');

    $(this).find('.btn').toggleClass('btn-primary');

    $(this).find('.btn').toggleClass('btn-default');

  });

  $('.Organizer').click(function() {
    location.href = "Homepage-Organizer.html"
  });

  $('.Volunteer').click(function() {
    location.href = "Homepage-Volunteer-Events.html"
  });

  $('form').submit(function(){
  	alert($(this["options"]).val());
      return false;
  });
});
