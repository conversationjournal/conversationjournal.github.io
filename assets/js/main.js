$(document).ready(function() {

  // Menu Settings
  $('.menu-icon').click(function(e) {
    e.preventDefault();
    $('.flex-container').toggleClass("active");
    $('.main-nav').css("visibility", "visible");
    $('.main-nav').width("300px");
    $('.nav').css("padding", "30px");


  });

  $('.menu-icon-close').on('click', function(e){
    e.preventDefault();
    $('.main-nav').css("visibility", "hidden ");
    $('.flex-container').removeClass("active");


  });

  // Search Settings
  $('.search-icon').on('click', function(e){
    e.preventDefault();
    $('.search-box').toggleClass('search-active');

    if ($('.search-box').hasClass('search-active')) {
      $('.search-icon-close').on('click', function(e){
  		e.preventDefault();
  		$('.search-box').removeClass('search-active');
  	});
  }
  });

});
