
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
