

// external js: packery.pkgd.js
$(document).ready(function() {

  var preloadedContent = $('#preloaded-content');
  var imgs = $('img');
  var imgCount = imgs.length;

  if (imgs[0]) {
    // hide loading content
    preloadedContent.css('opacity', '0');

    // load each image
    imgs.bind( 'load', function(){
      imgCount --;

      // On last img show content
      if (imgCount === 0) {
        preloadedContent.css({'opacity': '1', 'transition': '.5s ease'});
      }
    });
  }
    $('.work-grid').packery({
      itemSelector: '.grid-item',
      gutter: 20,
      transitionDuration: '0'
    });





});

