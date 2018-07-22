$(document).ready(
    function(){
var header = 
    $('header');

var backgrounds = new Array(
'url(couple2.jpg)',
    'url(couple1.jpg)', 'url(pexels-photo-984935.jpg)'
, 'url(couple2.jpg)'
    , 'url(couple3.jpg)'

);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    //header.css('background-image', backgrounds[current]);
          header.fadeTo('slow',0.7,function(){
          header.css('background-image', backgrounds[current]).fadeTo('slow',1.0)});
        
}
setInterval(nextBackground, 4500);

header.css('background-image', backgrounds[0]);
  
        
var $acc = $('.no-collapse');

$acc.removeClass('in');
    
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
      var $navlink = $(".navv");
      
      $navlink.toggleClass('scrolled', $(this).scrollTop() > $('#nav2').offset().top);
      
    $nav.toggleClass('scrolled', $(this).scrollTop() > $('#nav2').offset().top);
      
  });
});
        
        
        

    
});