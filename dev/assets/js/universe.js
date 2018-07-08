/*
$(function() {
  //object draggable
  $(".object").draggable({
    containment: "body",
    obstacle: ".object",
    preventCollision: true,
    start: function(event, ui) {
      $("img", this).addClass('avoid-clicks');
    }
  });
  //show info
  $('.object').on('click', function() {
    var img = $("img", this);
    if (img.hasClass('avoid-clicks')) {
      img.removeClass('avoid-clicks');
    } else {
      var description = $(".description-wrap", this);
      //console.log("showing info");
      if (description.is(":visible")) {
        description.hide();
      } else {
        description.show();
      }
    }
    //$('.description-wrap').hide();
    //description.show();
  });
  //prevent right click
  $(this).bind("contextmenu", function(e) {
    e.preventDefault();
  });
});
*/
$(function() {
  $(".object").draggable({
    containment: "body",
    cursor: "move",
    handle: ".image",
    obstacle: ".object:not(.ui-draggable-dragging)",
    preventCollision: true
  });
  //show info
  $('.object .image').on('click', function() {
    var description = $(this).parent().find(".description-wrap");
    //console.log("showing info");
    if (description.hasClass("hidden")) {
      description.removeClass("hidden");
    } else {
      description.addClass("hidden");
    }
  });
});
