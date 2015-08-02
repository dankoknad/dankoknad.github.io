$(function() {

	$("body").scrollspy({
	  offset: 50,
	  target: ".navbar"
	});

	var smoothScrollLinks = $('.collapse a[href*=#]:not([href=#]), #about a');

  $(smoothScrollLinks).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  if ($(window).width() > 750) {
	  $('.client:even' ).addClass('pull-left');
	  $('.client:odd' ).addClass('pull-right');  	
  }


/*   //  for testing
  jQuery(window).load(function () {
      var width = jQuery(window).width();
      var height = jQuery(window).height();
      var documentWidth = jQuery(document).width();
      var documentHeight = jQuery(document).height();
      console.log(width);
      console.log(height);
    });
*/

});