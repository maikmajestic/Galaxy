$( document ).ready(function() {

	
	if(localStorage.answers){
		if(localStorage.answers == 1){
    		$('.answers-result i').removeClass('active');
    		$('.answers-result i').first().addClass('active');
    	}
    	else if(localStorage.answers == 2){
    		$('.answers-result i').removeClass('active');
    		$('.answers-result i').first().addClass('active');
    		$('.answers-result i:nth-child(2)').addClass('active');
    	}
    	else if(localStorage.answers == 3){
    		$('.answers-result i').addClass('active');
    		localStorage.setItem("answers", 0);
    	}
	}
	else{
		localStorage.setItem("answers", 0);
	}

	function checkAnswers(answers){
		if(answers <= 0){
			answers = 0;
			localStorage.setItem("answers", 0);
		}
		else if(answers == 3){
			answers = 0;
			localStorage.setItem("answers", 3);
			var code = Math.floor(Math.random() * 101);
			$('.code-price').text('PLURAL-2018-'+code);
			$('#price').toggle('modal');
			$('body').css('pointer-events', 'none');
			setTimeout(function(){ location.reload(true) }, 20000);
			localStorage.setItem("answers", 0);
		}
		else if(answers > 3){
			answers = 0;
			localStorage.setItem("answers", 0);
		}
		else{
			answers = answers;
			localStorage.setItem("answers", answers);
		}
	}

	$('.go-back').on('click', function(){
		window.location.href = "index.html";
	});

	var riddle = ['Pueblo imaginario lleno de voces, prejuicios y religión.', 
	'Escritor de Plural y Vuelta que nos dejó una receta para aprender filosofía.', 
	'Vida de un poeta veracruzano escrita por uno de los siete sabios que fue además un funcionario público, rector de la Universidad Nacional de México y embajador de la UNESCO.', 
	'Biografía de un fraile dominico mexicano que además fue un pensador y filósofo de la Nueva España y el México independiente.', 
	'Poemario escrito por uno de los miembros fundadores que funciona como una denuncia a los horrores de la segunda guerra mundial.', 
	'Autobiografía de un diplomático mexicano que contiene su paso por la UNESCO.', 
	'Poemas melancólicos no escritos en castellano.', 
	'La crónica de un instante lleno de erotismo y horror en una sola imagen.', 
	'Ensayo sobre el dolor de la diversidad.'];
	var writters = ['../../assets/images/quiz/escritores/AgustinYanez.png', 
	'../../assets/images/quiz/escritores/AlejandroRossi.png', 
	'../../assets/images/quiz/escritores/AntonioCastroLeal.png', 
	'../../assets/images/quiz/escritores/ChristopherDominguezM.png', 
	'../../assets/images/quiz/escritores/EnriqueGonzalezM.png', 
	'../../assets/images/quiz/escritores/FernandodelPaso.png', 
	'../../assets/images/quiz/escritores/GarciaTerres.png', 
	'../../assets/images/quiz/escritores/JaimeTorresBodet.png', 
	'../../assets/images/quiz/escritores/JuanVilloro.png', 
	'../../assets/images/quiz/escritores/RamonXirau.png', 
	'../../assets/images/quiz/escritores/RogelioCuellar.png', 
	'../../assets/images/quiz/escritores/SalvadorElizondo.png', 
	'../../assets/images/quiz/escritores/VicenteQuirarte.png'];
	var name_wt = ['Agustín Yáñez', 'Alejando Rossi', 'Antonio Castro Leal', 'Christopher Domínguez', 'Enrique González', 'Fernando del Paso', 'Jaime García Terres', 'Jaime Torres Bodet', 'Juan Villoro', 'Ramón Xirau', 'Rogelio Cuellar', 'Salvador Elizondo', 'Vicente Quirarte'];
	var book = ['Al filo del agua', 'Manual del distraído', 'Díaz Miron su vida y obra', 'Fray Servando', 'Babe', 'Noticias del imperio', '100 imágenes del mar', 'Memorias II', 'El disparo de Argón', 'Naturalezas vivas', '', 'Farabeuf', 'La poética del hombre dividido en la obra de Luis Cernuda'];

	var posphoto = Math.floor((Math.random() * 3)+1);
	var writterRand = Math.floor((Math.random() * 13));
	console.log(posphoto);
	console.log(writterRand);
	$('.riddle-text').text(riddle[writterRand]);
	$('#pos'+posphoto+' img').attr('src', writters[writterRand]);
	$('#pos'+posphoto+' .title-writter').text(name_wt[writterRand]);
	$('#pos'+posphoto+' .title-book').text(book[writterRand]);
	var opt = 0;
	if(writterRand == 12){
		var nn = writterRand-1;
		var ss = writterRand-2;
	}
	else if(writterRand == 0){
		var nn = writterRand+1;
		var ss = writterRand+2;
	}
	else{
		var nn = writterRand+1;
		var ss = writterRand-1;
	}
	console.log(nn);
	console.log(ss);
	if($('#pos1 img').attr('src') != ''){
		$('#pos2 img').attr('src', writters[nn]);
		$('#pos2 .title-writter').text(name_wt[nn]);
		$('#pos2 .title-book').text(book[nn]);
		$('#pos3 img').attr('src', writters[ss]);
		$('#pos3 .title-writter').text(name_wt[ss]);
		$('#pos3 .title-book').text(book[ss]);
		opt = 1;
	}
	else if($('#pos2 img').attr('src') != ''){
		$('#pos1 img').attr('src', writters[nn]);
		$('#pos1 .title-writter').text(name_wt[nn]);
		$('#pos1 .title-book').text(book[nn]);
		$('#pos3 img').attr('src', writters[ss]);
		$('#pos3 .title-writter').text(name_wt[ss]);
		$('#pos3 .title-book').text(book[ss]);
		opt = 2;
	}
	else if($('#pos3 img').attr('src') != ''){
		$('#pos1 img').attr('src', writters[nn]);
		$('#pos1 .title-writter').text(name_wt[nn]);
		$('#pos1 .title-book').text(book[nn]);
		$('#pos2 img').attr('src', writters[ss]);
		$('#pos2 .title-writter').text(name_wt[ss]);
		$('#pos2 .title-book').text(book[ss]);
		opt = 3;
	}
	$('.btn-restart').on('click', function(){
		location.reload(true);
	});
	$('.option-riddle').on('click', function(){
		var option = $(this).data('option');
		console.log(option);
		var answers = parseInt(localStorage.getItem("answers"));
		if(option == opt){
			answers=answers+1;
			checkAnswers(answers);
    	console.log(localStorage.answers);
    	if(localStorage.answers == 1){
    		$('.answers-result i').removeClass('active');
    		$('.answers-result i').first().addClass('active');
    		$('.answers-result i').first().removeClass('fa-circle');
    		$('.answers-result i').first().addClass('fa-check-circle');
    	}
    	else if(localStorage.answers == 2){
    		$('.answers-result i').removeClass('active');
    		$('.answers-result i').first().addClass('active');
    		$('.answers-result i:nth-child(2)').addClass('active');
    		$('.answers-result i:nth-child(2)').removeClass('fa-circle');
    		$('.answers-result i:nth-child(2)').addClass('fa-check-circle');
    	}
    	else if(localStorage.answers == 3){
    		$('.answers-result i').addClass('active');
    	}
				$(this).addClass('active');
				$('.option-riddle').css('pointer-events', 'none');
				$('.btn-restart').show();
				setTimeout(function(){ $('.option-wrap').hide();$('.option-wrap.active').fadeIn(); }, 100);
				//setTimeout(function(){ location.reload(true) }, 15000);
		}
		else{
			answers=answers-1;
			checkAnswers(answers);
    	console.log(localStorage.answers);
    	if(localStorage.answers == 1){
    		$('.answers-result i').removeClass('active');
    		$('.answers-result i').first().addClass('active');
    	}
    	else if(localStorage.answers == 2){
    		$('.answers-result i').removeClass('active');
    		$('.answers-result i').first().addClass('active');
    		$('.answers-result i:nth-child(2)').addClass('active');
    	}
    	else if(localStorage.answers == 3){
    		$('.answers-result i').addClass('active');
    		$('#price').toggle('modal');
    	}
			$(this).addClass('error');
			$(this).find('i').removeClass('fa-check-circle');
			$(this).find('i').addClass('fa-times');
			$(this).append('<h3 class="text-white">La respuesta correcta es: <strong>'+name_wt[writterRand]+'</strong></h3>');
			$('.option-riddle').css('pointer-events', 'none');
			$('.btn-restart').show();
			setTimeout(function(){ $('.option-wrap').hide();$('.option-wrap.error').fadeIn(); }, 100);
			//setTimeout(function(){ location.reload(true) }, 15000);
		}
	});
});