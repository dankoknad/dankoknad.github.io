$(function() {

  // bootstrap affix = scrollspy
	$("body").scrollspy({
	  offset: 50,
	  target: ".navbar"
	});
  
  
  
  
  // smooth scrolling
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
  
  
  

  // js templates {{mustache.js}} 
  $.getJSON('data/data.json', function(data) {

    var template = $('#testimonialstpl').html();
    var html = Mustache.to_html(template, data);
    $('#carousel-testimonials .carousel-inner').html(html);
    
    var testimonialsItems = $('#testimonials .item').length;
    for(var i =0; i < testimonialsItems; i++){
      var insertText = '<li data-target="#carousel-testimonials" data-slide-to="' + i + '"></li>';
      $('#carousel-testimonials ol').append(insertText);
    }  
    
    $('#carousel-testimonials .item:first').addClass('active');
    $('#carousel-testimonials li:first').addClass('active');

    if ($(window).width() > 750) {
        $('.client:even' ).addClass('pull-left');
        $('.client:odd' ).addClass('pull-right');   
    }



    var toolsTemplate = $('#toolsTpl').html();
    var toolsHtml = Mustache.to_html(toolsTemplate, data);
    $('#tools').append().html(toolsHtml);

    var learningTemplate = $('#learningTpl').html();
    var learningHtml = Mustache.to_html(learningTemplate, data);
    $('#learning').append().html(learningHtml);



    var templatePortfolio = $('#portfoliotpl').html();
    var htmlPortfolio  = Mustache.to_html(templatePortfolio, data);
    $('#carousel-portfolio .carousel-inner').html(htmlPortfolio);
    
    var portfolioItems = $('#carousel-portfolio .item').length;
    for(var i =0; i < portfolioItems; i++){
      var insertText = '<li data-target="#carousel-portfolio" data-slide-to="' + i + '"></li>';
      $('#carousel-portfolio ol').append(insertText);
    }

    $('#carousel-portfolio .item:first').addClass('active');
    $('#carousel-portfolio li:first').addClass('active');
    
  });


});