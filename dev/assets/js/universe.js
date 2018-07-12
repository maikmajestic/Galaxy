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
  $(document).keydown(function(event) {
    if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
      event.preventDefault();
    }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
  });
  $(window).bind('mousewheel DOMMouseScroll', function(event) {
    if (event.ctrlKey == true) {
      event.preventDefault();
    }
  });
});
