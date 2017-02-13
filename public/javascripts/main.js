$(document).ready(function(){
  // login redirect
  $('#foo_login').on('click', function(){
    window.location.href="/users/login";
  });

  // signup redirect
  $('#foo_signup').on('click', function(){
    window.location.href="/users/signup";
  });
});
