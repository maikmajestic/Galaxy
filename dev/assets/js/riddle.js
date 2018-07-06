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
			localStorage.setItem("answers", 3);
			var code = Math.floor(Math.random() * 101);
			$('.code-price').text('PLURAL-2018-'+code);
			$('.price-wrapper').show();
			setTimeout(function(){ location.reload(true) }, 20000);
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

	$('.btn-accept').on('click', function(){
		$(this).parents('.modal').toggle('modal');
	});

	var riddle = ['Pueblo imaginario lleno de voces, prejuicios y religión.', 
	'Poemario que ocupa raíces clásicas y alientos barrocos con la más íntima cotidianidad mexicana.', 
	'Escritor de Plural y Vuelta que nos dejó una receta para aprender filosofía.', 
	'Vida de un poeta veracruzano escrita por uno de los siete sabios que fue además un funcionario público, rector de la Universidad Nacional de México y embajador de la UNESCO.', 
	'Biografía de un fraile dominico mexicano que además fue un pensador y filósofo de la Nueva España y el México independiente.', 
	'Poemario escrito por uno de los miembros fundadores que funciona como una denuncia a los horrores de la segunda guerra mundial.', 
	'Novela histórica que narra las peripecias íntimas de una aventura política.', 
	'Poemario con dos versiones: en libro ilustrado por diversos artistas y en dos cajas de fósforos', 
	'Autobiografía de un diplomático mexicano que contiene su paso por la UNESCO.', 
	'Poemas melancólicos no escritos en castellano.', 
	'La crónica de un instante lleno de erotismo y horror en una sola imagen.', 
	'Ensayo sobre el dolor de la diversidad.',
	'Novela con los ojos en el centro.',
	'Ixca Cienfuegos junto a otros personajes vive la Ciudad de México de mediados del siglo XX.', 
	'La declaración de amor más conocida en nuestro país y la importancia del recuerdo de una Ciudad de México que ya no existe.',
	'Ensayo sobre el mexicano y sus vueltas y revueltas.', 
	'Estudio de la vida y obra de un poeta del siglo de oro.'];
	var writters = ['../../assets/images/quiz/escritores/AgustinYanez.png', 
	'../../assets/images/quiz/escritores/RubenBonifazNuno.png', 
	'../../assets/images/quiz/escritores/AlejandroRossi.png', 
	'../../assets/images/quiz/escritores/AntonioCastroLeal.png', 
	'../../assets/images/quiz/escritores/ChristopherDominguezM.png', 
	'../../assets/images/quiz/escritores/EnriqueGonzalezM.png', 
	'../../assets/images/quiz/escritores/FernandodelPaso.png', 
	'../../assets/images/quiz/escritores/GarciaTerres.png', 
	'../../assets/images/quiz/escritores/JaimeTorresBodet.png', 
	'../../assets/images/quiz/escritores/RamonXirau.png', 
	'../../assets/images/quiz/escritores/SalvadorElizondo.png', 
	'../../assets/images/quiz/escritores/VicenteQuirarte.png', 
	'../../assets/images/quiz/escritores/JuanVilloro.png', 
	'../../assets/images/quiz/escritores/CarlosFuentes.png', 
	'../../assets/images/quiz/escritores/JoseEPacheco.png', 
	'../../assets/images/quiz/escritores/OctavioPaz.png', 
	'../../assets/images/quiz/escritores/AlfonsoReyes.png'];
	var answerWritter = ['Publicada en 1947, nos cuenta la historia de un pueblo imaginario que comienza a vivir los cambios progresistas de Porfirio Díaz y la llegada de la revolución en un lugar donde la costumbre y el paso lento, gobierna más que el desarrollo. Considerada una de las mejores novelas del siglo XX, sentó un nuevo precedente en la estética literaria de la revolución.',
	'Fuego de pobres es la manifestación de una nueva visión, la del descubrimiento de los hechos sociales, de las escenas perdidas que abren paso a las sensaciones más próximas al hombre.',
	'Su libro más famoso, fue una sabia combinación entre el ensayo y el relato que unió las historias más absurdas con la más profunda de las melancolías. Un libro que no envejece, Rossi supo impregnar con su filosofía y sus pensamientos para formar un tecto que cada tanto aparecen y modifican el universo literario.',
	'Fruto de una labor de investigación prolongada durante años y publicada en 1970, es indispensable para cualquier estudio sobre el poeta de Lascas. Díaz Mirón, Su vida y obra fue el segundo libro de crítica que escribió Castro Leal.',
	'Un retrato plenamente logrado, Domínguez Michael no se limita a contar sobre la vida del fraile. Al mismo tiempo esta biografía nos cuenta sobre el culto religioso en nuestro país durante la época.',
	'Publicada en 1949, este poemario es una denuncia al holocausto que se vivió en la segunda guerra mundial, una descripción del hombre luchando entre lo terrenal y lo sublime. En Babel, encontramos una poesía alimentada por la matríz de la cultura clásica pero inspirada en los horroes de una guerra que acababa de suceder.',
	'Publicada en 1987, es la tercera novela de Fernando Del Paso. Dividida en dos partes: un extenso monólogo en viva voz de la emperatriz Carlota, intercalado con once capítulos que presentan la historia del efímero segundo imperio mexicano. Considerada una de las mejores novelas mexicanas de los últimos tiempos.',
	'Una antología literaria del mar que busca entre el acervo de las letras universales las palabras más importantes que le han dedicado. Cuna de fantasías, origen de vida, causa de muerte, vértigo amenazante o dador de paz. García Terrés selecciona bajo sus preferencias personales variadas perspectivas y diversos matices sobre una eterna obsesión del hombre con el océano.',
	'Poseedor de una pluma notable, fue una pieza clave para la consolidación de las institutciones educativas en México. En este segundo volumen de memorias narra sus experiencias con personajes ilustres y sus reflexiones sobre un amplio abanico de hechos que formaron el siglo XX.',
	'Naturalezas vivas “es una aventura que da al mar” en palabras de Juan Villoro. El título de este poemario, resume su manera melancólica de pensar y los paisajes donde la voz humana es relevada por el viento y el crujir de las hojas. Xirau escribió este poemario en catalán, su idioma natal.',
	'El autor es capaz de condensar una rareza que escapa de la literatura mexicana del siglo XX. Ganadora del premio Xavier Villaurrutia en 1965 donde Elizondo cambió para siempre el panorama de la novela en México.',
	'De todos los poetas de la generación de 1927, Luis Cernuda llama la atención del escritor Vicente Quirarte por su gran calidad y una idea muy clara sobre la creación poética. Este ensayo pretende ser una lectura dialéctica de la obra de Cernuda. Se ofrecen los elementos de su poética, la manera en que el poeta se enfrenta al mundo con toda la irracionalidad y la pasión de la juventud, mientras que los temas cernudianos con los que termina, se caracterizan, por la reflexión, el apartamiento consciente y el anhelo por encontrar una solución al conflicto Realidad/Deseo.',
	'Villoro sigue la tradición del novelista mexicano para ocupar la Ciudad de México como el mejor de los escenarios. El caos y el inminente desmoronamiento son partes de la misma y en especial el barrio de San Lorenzo que sirve de espacio para la historia de esta clínica oftalmológica, llena de misterios e ironías, como la misma ciudad en la que se encuentra.',
	'Publicada en 1958 inmediatamente se volvió una de las obras más importantes en letras hispanoamericanas. Su título proviene de una expresión que podemos encontrar en Visión del Anahuac de Alfonso Reyes, que a su vez recuerda la famosa frase de Alexander Von Humboldt. En esta novela se juega con la idea de la conformación de la ciudad a partir de la diversidad de orígenes, ideas y clases sociales. ',
	'Apareció por primera vez en el suplemento “Sábado” del periódico Unomásuno el 7 de junio de 1980. Causó tanto revuelo que un año más tarde sería publicada en forma de libro. Hasta la fecha lleva más de 40 reimpresiones.',
	'Publicado por primera vez en 1950, este ensayo es un texto obligado para comprender la esencia de ser mexicano. Paz nos invita a reflexionar sobre las expresiones, actitudes y tradiciones del mexicano. Sus palabras descubren ligaduras que atan al hombre con su cultura, manejan sus reacciones y nos dan esa coraza de espiritualidad mexicana.',
	'Textos y comentarios sobre estudios de la obra de Luis de Góngora, Reyes contempló varios aspectos de la vida del poeta, asi como su influencia en otros escritores y su importancia para el mundo de las letras. Alfonso Reyes dedicó otros dos libros al mismo tema.'];
	var name_wt = ['Agustín Yáñez', 'Rubén Bonifaz Nuño', 'Alejando Rossi', 'Antonio Castro Leal', 'Christopher Domínguez', 'Enrique González', 'Fernando del Paso', 'Jaime García Terres', 'Jaime Torres Bodet', 'Ramón Xirau', 'Salvador Elizondo', 'Vicente Quirarte', 'Juan Villoro', 'Carlos Fuentes', 'José Emilio Pacheco', 'Octavio Paz', 'Alfonso Reyes'];
	var book = ['Al filo del agua', 'Fuego de pobres', 'Manual del distraído', 'Díaz Miron su vida y obra', 'Fray Servando', 'Babel', 'Noticias del imperio', '100 imágenes del mar', 'Memorias II', 'Naturalezas vivas', 'Farabeuf', 'La poética del hombre dividido en la obra de Luis Cernuda', 'El disparo de Argón', 'La región más transparente del aire', 'Las batallas en el desierto', 'Laberinto de la soledad', 'Cuestiones Gongorinas'];

	var posphoto = Math.floor((Math.random() * 3)+1);
	var writterRand = Math.floor((Math.random() * 17));
	console.log(posphoto);
	console.log(writterRand);
	$('.riddle-text').text(riddle[writterRand]);
	$('#pos'+posphoto+' img').attr('src', writters[writterRand]);
	$('#pos'+posphoto+' .title-writter').text(name_wt[writterRand]);
	$('#pos'+posphoto+' .title-book').text(book[writterRand]);
	$('.wt-name').text(name_wt[writterRand]);
	$('.wt-data').text(answerWritter[writterRand]);
	var opt = 0;
	if(writterRand == 16){
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
    		localStorage.setItem("answers", 0);
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
		$('#answer-modal').toggle('modal');
	});
});