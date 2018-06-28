$(function() {
  $('.owl-carousel').owlCarousel({
    merge: true,
    loop: true,
    margin: 20,
    video: true,
    lazyLoad: true,
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 2.5
      },
      1024: {
        items: 4.5
      }
    }
  });
  $('.card').on('click', function() {
    var src = $(this).attr("data-src");
    var description = $(this).attr("data-description");
    var title = $(this).attr("data-title");
    var subtitle = $(this).attr("data-subtitle");
    $('.videoDetails').html('<div class="col-12 col-lg-5 pt-5 wrap-details"><h2 class="title-source">' + title + '</h2><p class="subtitle-source">' + subtitle + '</p><div class="row"><div class="col-6"><button class="p-2 play" type="button" data-toggle="modal" data-target=".video-modal"><i class="fas fa-play"></i> <span>Reproducir</span></button></div></div><p class="description-source">' + description + '</p></div><div class="col-12 col-lg-7 pt-5 wrap-video"><video class="myVideo" autoplay="" muted="" loop=""><source class="video-source" src="' + src + '" type="video/mp4"></video><div class="wrap-shadow"></div></div>');
    $('.video-modal').html('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button></div><div class="moda-body"><video controls="controls" class="myModalVideo"><source src="' + src + '" type="video/mp4" class="video-source"/></video></div></div></div>');
  });
  $(document).on("click", ".close", function() {
    $('video').trigger('pause');
  });
  $(document).on("click", ".play", function() {
    $('video').trigger('play');
  });
});
