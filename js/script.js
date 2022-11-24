const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

jQuery(".drawer-icon").on("click", function(e) {
	e.preventDefault();

  jQuery(".drawer-icon").toggleClass("active");
  jQuery(".drawer-content").toggleClass("active");
  jQuery(".drawer-bg").toggleClass("active");

	return false;
});

//スムーススクロール//
$('a[href^="#"]').on('click',  function() {
  var header = $('.header').innerHeight();
  var id = $(this).attr('href');
  var position = 0;
  if(id != "#") {
    position = $(id).offset().top - header;
  };
  $('html,body').animate({
    scrollTop: position
  },
  300);
});

$('#pagetop').hide();

$(window).on('scroll', function() {
  if($(this).scrollTop() > 100) {
    $('#pagetop').fadeIn();
  } else {
    $('#pagetop').fadeOut();

  }
});

$('.header-nav-items li a').on('click', function() {
  $('.header-nav-items li a').removeClass('active');
  $(this).addClass('active');
});

//modal
jQuery(".close-modal").on("click", function(e) {
  e.preventDefault();

  var target = jQuery(this).data("target");
  jQuery(target).hide();

  return false;
});

jQuery(".open-modal").on("click", function(e) {
  e.preventDefault();
  
  var target = jQuery(this).data("target");
  jQuery(target).show();

  return false;
});

new WOW().init();