$(function(){
  //Theme toggle click event
  var $themeToggle = $('.js-theme-toggle'),
      $interfaceElementContainer = $('#interface-elements');

  $themeToggle.on('click', function(){
    $themeToggle.toggleClass("dark-theme");
    $interfaceElementContainer.toggleClass("dark-theme");
  });

});

