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
        
        
$('.navbar.my-account').hover( function(){
    $('.nav-links').css('display', 'block');
}, function(){
    $('.nav-links').css('display', 'none');
});
    
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top.index");
      var $navlink = $(".navv");
      var $navbutton = $(".navv2");
      
      $navlink.toggleClass('scrolled', $(this).scrollTop() > $('#nav2').offset().top);
      
       $navbutton.toggleClass('scrolled', $(this).scrollTop() > $('#nav2').offset().top);
      
    $nav.toggleClass('scrolled', $(this).scrollTop() > $('#nav2').offset().top);
      
  });
});
        
        
        

    
});