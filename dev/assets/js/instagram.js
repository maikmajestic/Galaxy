$( document ).ready(function() {
	$('.like').on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('fas');
			$(this).addClass('far');
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
			$(this).removeClass('far');
			$(this).addClass('fas');
		}
	});
	
	
});