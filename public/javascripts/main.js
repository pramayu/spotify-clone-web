$(document).ready(function(){
  $('.main-isi').niceScroll({
    cursorcolor:"#47494e",
    cursorwidth: "8px",
    cursorborder: "none"
  });

  // login redirect
  $('#foo_login').on('click', function(){
    window.location.href="/users/login";
  });

  // signup redirect
  $('#foo_signup').on('click', function(){
    window.location.href="/users/signup";
  });

  // carousel interval
  $('.carousel').carousel({
    interval: 2000 * 1000
  });

});
