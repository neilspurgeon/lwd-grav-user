$(document).ready(function() {
  imgPagination();

  $('.horizontal-scroll').mousewheel(function(event, delta) {
    if (window.innerWidth >= 1000) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    }

    $('.images img').each(function() {
      var img = $(this);
      var imgPos = img.position().left;
      var sectionOffset = $('.horizontal-scroll').offset().left;

      if (imgPos <= sectionOffset && imgPos > 0) {
        var imgId = img.parent().attr('id');
        $('.pagination a').removeClass('active');
        $('a[href$="#' + imgId + '"]').addClass('active');
      }
    });
  });

  // Clickable pagination
  $('.pagination a').each(function () {
    var sectionOffset = $('.horizontal-scroll').offset().left;
    var scrollPos = $('.horizontal-scroll').scrollLeft() + sectionOffset;
    var currLink = $(this);
    var img = $(currLink.attr('href'));
    var imgPos = img.position().left;
    
    if (imgPos <= scrollPos && imgPos + img.width() > scrollPos) {
      currLink.addClass('active');
    }
    else{
      currLink.removeClass('active');
    }
  });

}); 




var imgPagination = function() {
  var links     = $('.pagination a'),
      firstLink = $('.pagination a:first');

  // add active class to first image pagination
  firstLink.addClass('active');

  // on click switch active to correct pagination
  links.on('click', function(e) {
    e.preventDefault();

    var screenWidth = window.screen.width;
    var sectionWidth = $('.images').get(0).scrollWidth;
    var sectionOffset = $('.horizontal-scroll').offset().left;

    links.removeClass('active');
    $(this).addClass('active');
    
    targetHash = this.hash;
    var target = $(targetHash);
    var targetOffset = target.offset().left - sectionOffset;

    $('.horizontal-scroll').stop().animate({
      scrollLeft: '+=' + targetOffset
    }, 500);
    return false;


  });

};

