$( document ).ready(function() {
	var count1 = 0;
	var count2 = 0;

	$('.object').on('click', function(){
		var info = $(this).data('info');
		var direction = $(this).data('direction');
		if(direction == 'up'){
			$(info).addClass('animated');
			$(info).addClass('fadeInDown');	
		}
		if(direction == 'down'){
			$(info).addClass('animated');
			$(info).addClass('fadeInUp');	
		}
		$(info).css('opacity', 1);
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

	$('.info-wrapper i').on('click', function(){
		$(this).parents('.info-wrapper').removeClass('animated');
		$(this).parents('.info-wrapper').removeClass('fadeInDown');
		$(this).parents('.info-wrapper').css('opacity', 0);
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
});