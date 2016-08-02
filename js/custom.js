
$(function() {

  $('#menu').slicknav({
     label: '',
  });

  $('.grid-inner').hover(function() {
      $('img', this).fadeTo('slow', 0.5)
    },function() {
      $('img', this).fadeTo('slow', 1)
  });

  $('a > img').parent().attr('data-lightbox', 'roadtrip');

  $("#block-worldofcichlids-content img").parent().addClass( "node-img-wrapper responsive-image" );

});

$(window).on("load", function() {

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

});
