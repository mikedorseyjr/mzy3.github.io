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
  
        
        
        
$('.navbar.my-account, .navbar.signup').hover( function(){
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
       
        
$( ".accordian-button" ).click(function() {
$(this).children().toggleClass("change");
});
        
// $(".upgrade-button").click(function() {
//     $(".panel-collapse.collapse.item-1.premium").toggleClass('in');
// });
        
 $(".pay.paypal").hover( function() {
    $(".pay-label.paypal").toggleClass('hover');
});       
      
 $(".pay.applepay").hover( function() {
    $(".pay-label.applepay").toggleClass('hover');
}); 
        
        
$( ".check-column" ).click(function() {
$(this).toggleClass("selected");
$(this).children().toggleClass("selected");
});
        
$( ".check-column" ).hover(function() {
$(this).toggleClass("hover");
});
     
        

$(function() {
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("plan-date").setAttribute("min", today);
    
    
});         



    
});