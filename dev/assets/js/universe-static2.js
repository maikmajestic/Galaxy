$( document ).ready(function() {
	var count1 = 0;

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
		if(info == '#m82-info'){
			count1 = count1 + 2;
		}
		if(info == '#m60-info'){
			count1 = count1 * 14;
		}
		if(info == '#comet-info'){
			count1 = count1 + 4;
		}
		if(info == '#m32-info'){
			count1 = count1 / 2;
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
		if(count == 16){
			$('#vid-modal').modal('show');
			$('#vid-modal video').get(0).play()
			setTimeout(function(){ $('#vid-modal').modal('hide'); count1 = 0;}, 20500);
		}
		if(count >= 40){
			count1 = 0;
		}
	}
});