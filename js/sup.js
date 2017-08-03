$(document).ready(function(){


/**
 * Listen to scroll to change header opacity class
 */
  function checkScroll(){
      var startY = 470; //The point where the navbar changes in px
      //$('.navbar').height() * 2

      if($(window).scrollTop() > startY){
          $('.navbar').removeClass("scrolled");
          $('.navbar-inverse .navbar-nav > li > a').removeClass("navbar-color-top");
          $('.navbar-inverse .navbar-brand').removeClass("navbar-brand-top");
      }else{
          $('.navbar').addClass("scrolled");
          $('.navbar-inverse .navbar-nav > li > a').addClass("navbar-color-top");
          $('.navbar-inverse .navbar-brand').addClass("navbar-brand-top");
      }
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }
  $('.carousel').carousel({
    interval: 6000
  })
});
