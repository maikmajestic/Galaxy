$( document ).ready(function() {
	var count1 = 0;
	var count2 = 0;

	$('.object').on('click', function(){
		var info = $(this).data('info');
		var direction = $(this).data('direction');
		$(this).find('.image').css('opacity', '0.5');
		if(direction == 'up'){
			$(info).addClass('animated');
			$(info).addClass('fadeInDown');	
		}
		if(direction == 'down'){
			$(info).addClass('animated');
			$(info).addClass('fadeInUp');	
		}
		$(info).show();
		if(info == '#m80-info'){
			count1 = count1 + 10;
		}
		if(info == '#m59-info'){
			count1 = count1 + 100;
		}
		if(info == '#h44-info'){
			count1 = count1 + 3;
		}
		if(info == '#h11-info'){
			count1 = count1 * 4;
		}
		if(info == '#h47-info'){
			count1 = count1 + 7;
		}
		checkPass(count1);
	});

	$('.icon-close').on('click', function(){
		$(this).parents('.info-wrapper2').removeClass('animated');
		$(this).parents('.info-wrapper2').removeClass('fadeInDown');
		$(this).parents('.col').find('.image').css('opacity', '1');
		$(this).parents('.info-wrapper2').hide();
	});

	function checkPass(count){
		console.log(count);
		if(count == 120){
			$('#vid-modal').modal('show');
			$('#vid-modal video').get(0).play()
			setTimeout(function(){ $('#vid-modal').modal('hide'); count1 = 0;}, 20500);
		}
		if(count == 19){
			$('#vid-modal2').modal('show');
			$('#vid-modal2 video').get(0).play()
			setTimeout(function(){ $('#vid-modal2').modal('hide'); count1 = 0;}, 20500);
		}
		if(count >= 121){
			count1 = 0;
		}
	}

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
$( ".star" ).animate({
		opacity: 1,
    right: "100%",
    top: "100%"
  }, 6000, function() {
    // Animation complete.
  });
$('.star').on('click', function(){
	alert('nepe');
})

});