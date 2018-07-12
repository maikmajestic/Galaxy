$( document ).ready(function() {

	if(localStorage.successS && localStorage.errorS){
		if(localStorage.successS == 1){
			$('.answers-result i').removeClass('active');
			$('.answers-result i').first().removeClass('fa-circle');
			$('.answers-result i').first().addClass('fa-check-circle');
			$('.answers-result i').first().addClass('active');
		}
		if(localStorage.successS == 2){
			$('.answers-result i').removeClass('active');
			$('.answers-result i').first().removeClass('fa-circle');
			$('.answers-result i').first().addClass('fa-check-circle');
			$('.answers-result i').first().addClass('active');
			$('.answers-result i:nth-child(2)').addClass('active');
			$('.answers-result i:nth-child(2)').removeClass('fa-circle');
			$('.answers-result i:nth-child(2)').addClass('fa-check-circle');
		}
		if(localStorage.successS == 3){
			$('.answers-result i').first().removeClass('fa-circle');
			$('.answers-result i').first().addClass('fa-check-circle');
			$('.answers-result i').first().addClass('active');
			$('.answers-result i:nth-child(2)').addClass('active');
			$('.answers-result i:nth-child(2)').removeClass('fa-circle');
			$('.answers-result i:nth-child(2)').addClass('fa-check-circle');
			$('.answers-result i:nth-child(3)').addClass('active');
			$('.answers-result i:nth-child(3)').removeClass('fa-circle');
			$('.answers-result i:nth-child(3)').addClass('fa-check-circle');
		}
		if(localStorage.errorS == 1){
			$('.answers-result i:nth-child(4)').removeClass('active');
			$('.answers-result i:nth-child(4)').addClass('error');
			$('.answers-result i:nth-child(4)').removeClass('fa-circle');
			$('.answers-result i:nth-child(4)').addClass('fa-times-circle');
		}
		if(localStorage.errorS == 2){
			$('.answers-result i:nth-child(4)').removeClass('active');
			$('.answers-result i:nth-child(4)').addClass('error');
			$('.answers-result i:nth-child(4)').removeClass('fa-circle');
			$('.answers-result i:nth-child(4)').addClass('fa-times-circle');
			$('.answers-result i:nth-child(5)').removeClass('active');
			$('.answers-result i:nth-child(5)').addClass('error');
			$('.answers-result i:nth-child(5)').removeClass('fa-circle');
			$('.answers-result i:nth-child(5)').addClass('fa-times-circle');
		}
		if(localStorage.errorS >= 3){
			localStorage.setItem("successS", 0);
			localStorage.setItem("errorS", 0);
			//$('#price').toggle('modal');
		}
	}
	else{
		localStorage.setItem("answersS", 0);
		localStorage.setItem("successS", 0);
		localStorage.setItem("errorS", 0);
	}

	function checkAnswersSuccess(successS){
		if(successS == 1){
			localStorage.setItem("successS", 1);
		}
		else if(successS == 2){
			localStorage.setItem("successS", 2);
		}
		else if(successS == 3){
			localStorage.setItem("successS", 3);
			var code = Math.floor(Math.random() * 101);
			$('.code-price').text('PLURAL-2018-'+code);
			if(localStorage.answersS != 1){
				$('.price-wrapper').show();
				$('#price').toggle('modal');
				$('body').css('pointer-events', 'none');
				setTimeout(function(){ localStorage.setItem("answersS", 0); }, 300000);
			}
		}
	}

	function checkAnswersError(errorS){
		if(errorS == 1){
			localStorage.setItem("errorS", 1);
		}
		if(errorS == 2){
			localStorage.setItem("errorS", 2);
		}
		if(errorS == 3){
			localStorage.setItem("errorS", 3);
			if(localStorage.answersS != 1){
				$('#error-modal').toggle('modal');
				$('.error-wrapper').show();
				$('body').css('pointer-events', 'none');
			}
		}
	}

	$('.go-back').on('click', function(){
		window.location.href = "index.html";
	});

	$('.btn-accept').on('click', function(){
		location.reload(true);
	});

	var semblant = ['Entre sus novelas destacan Al filo del agua, considerada la culminación de la novela de la Revolución; Ojerosa y pintada; Las tierras flacas, Las vueltas del tiempo  y La ladera dorada.  Se le sitúa entre los novelistas de la Revolución, pero se trata de un cultivador del estilo literario y un renovador de la estructura literaria.', 
	'Miembro del Consejo de redacción de la revista Plural y miembro fundador y director interino de la revista Vuelta. Autor de ensayos y de relatos, escribió los siguientes libros: Lenguaje y significado, Manual del Distraído, Sueños de Occam, Diario de guerra, El Cielo de Sotero, entre otros.', 
	'Desempeñó importantes cargos en la administración pública: fue rector de la Universidad Nacional de México, director de Bellas Artes ; presidente de la Comisión Nacional de Cinematografía; embajador ante la UNESCO. Es autor de varios estudios, traducciones, y de un buen número de antologías de poesía y novela mexicanas. ', 
	'Trabajó  en la revista Vuelta hasta su desaparición. También reseñó libros para el semanario Proceso. Desde su creación hasta la fecha, es consejero editorial de Letras Libres y columnista político y cultural en los periódicos Reforma y en El Universal. Ha escrito sobre la historia literaria mexicana del siglo XIX y del XX.', 
	'En 1911 ingresó al Ateneo de la Juventud y un año después ocupó la presidencia de ese organismo y fundó la revista Argos. Aparte de ser editorialista en El Imparcial, fue subsecretario de Instrucción Pública y Bellas Artes en el gobierno de Victoriano Huerta.  Se cree que fue propuesto para el Premio Nobel de Literatura.', 
	'Su primera novela, José Trigo, fue publicada en 1966, año en el que obtuvo el Premio Xavier Villaurrutia. En 1976 apareció Palinuro de México, el cual recibió el Premio de Novela México a la mejor novela inédita. Su tercera novela, Noticias del Imperio, fue publicada en 1986.', 
	'En Bellas Artes, la UNAM, en el Fondo de Cultura Económica y en la Biblioteca de México su labor es considerada entre las mejores de la vida de estas instituciones; ayudó a crear lo que se conoce como la edad dorada de la cultura mexicana en el siglo XX. ', 
	'En 1921 fue nombrado secretario particular del rector de la Universidad Nacional de México, José Vasconcelos y a partir de entonces ocupó los más altos puestos relacionados con la educación, la cultura y la diplomacia. Su obra comprende poesía, ensayos. estudios literarios, novelas, relatos,  prólogos y traducciones.', 
	'En 1991 publicó su primera novela El disparo de argón, a la que siguió El testigo, con la que obtuvo el Premio Herralde. Es también un  reconocido autor de literatura infantil. También ha publicado obras de teatro y ensayos. Es traductor de importantes obras en alemán y en inglés, es reconocido como uno de los principales escritores latinoamericanos contemporáneos.', 
	'Sus publicaciones comprenden más de 40 títulos originales y traducciones de obras del francés, inglés y alemán, así como colaboraciones con otros autores. Obtuvo diversas distinciones por su obra, que abarca la filosofía, la poesía y el ensayo. Fue uno de los estudiosos más prolijos de la poesía mexicana.', 
	'Escribió obras de poesía, ficción y ensayo literario, entre las que cabe mencionar las siguientes: Luchino Visconti , Farabeuf o la crónica de un instante , Camera lucida y Elsinore. Su producción académica abarcó traducciones de poemas, ensayos y reflexiones literarias de lenguas como el alemán, inglés, italiano y francés.', 
	'En 1991, recibió el Premio Xavier Villaurrutia por El ángel es vampiro. Por el conjunto de su obra, recibió en 2011 el Premio Iberoamericano de Poesía Ramón López Velarde, otorgado anualmente a quien dedica sus afanes a la creación poética o a su estudio y difusión.', 
	'Tomó expresiones de la cultura popular para convertirlas en poesía, y la intensidad la interpretó de una manera limpia, sincera, sin caídas ni sentimentalismos. Fue además, el gran traductor de los clásicos griegos y latinos.',
	'En su narrativa hay tres vertientes: los grandes frescos que muestran el carácter nacional (La región más transparente, La muerte de Artemio Cruz); los más íntimos, que ahondan en el carácter individual (Aura,Cantar de ciegos), y el que desentraña hechos políticos (La Silla del Águila, La cabeza de la hidra). ', 
	'Dirigió con Carlos Monsiváis el suplemento de la revista Estaciones y el suplemento del diario Novedades. En su poesía recogió lo mejor de la tradición con la experimentación, además de un profundo amor a sus semejantes y a la Ciudad de México. En su narrativa hay una preocupación por la singularidad de la niñez y en su periodismo difunde las virtudes de los héroes y los momentos decisivos en la historia del país.', 
	'Fue director de la revista Plural y después, fundador y director, hasta su muerte, de la revista Vuelta. Fue además, el primer poeta e intelectual mexicano que ha sido distinguido con el Premio Nobel de Literatura. Es uno de los más grandes escritores del siglo XX; renovador de la poesía,  que analizó la política y la sociedad mexicana contemporánea.', 
	'Fue secretario de la Escuela Nacional de Altos Estudios. Conoció a Pedro Henríquez Ureña, Antonio Caso y José Vasconcelos y juntos, formaron el Ateneo de la Juventud. Fue varias veces candidato al Premio Nobel, sin éxito.'];
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
	'../../assets/images/quiz/escritores/SalvadorElizondo.png', 
	'../../assets/images/quiz/escritores/VicenteQuirarte.png', 
	'../../assets/images/quiz/escritores/RubenBonifazNuno.png', 
	'../../assets/images/quiz/escritores/CarlosFuentes.png', 
	'../../assets/images/quiz/escritores/JoseEPacheco.png', 
	'../../assets/images/quiz/escritores/OctavioPaz.png', 
	'../../assets/images/quiz/escritores/AlfonsoReyes.png'];
	var name_wt = ['Agustín Yáñez', 'Alejando Rossi', 'Antonio Castro Leal', 'Christopher Domínguez', 'Enrique González', 'Fernando del Paso', 'Jaime García Terrés', 'Jaime Torres Bodet', 'Juan Villoro', 'Ramón Xirau', 'Salvador Elizondo', 'Vicente Quirarte', 'Rubén Bonifaz Nuño', 'Carlos Fuentes', 'José Emilio Pacheco', 'Octavio Paz', 'Alfonso Reyes'];

	var posphoto = Math.floor((Math.random() * 3)+1);
	var writterRand = Math.floor((Math.random() * 17));
	console.log(posphoto);
	console.log(writterRand);
	$('.riddle-text').text(semblant[writterRand]);
	$('#pos'+posphoto+' img').attr('src', writters[writterRand]);
	$('#pos'+posphoto+' .title-writter').text(name_wt[writterRand]);
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
		$('#pos3 img').attr('src', writters[ss]);
		$('#pos3 .title-writter').text(name_wt[ss]);
		opt = 1;
	}
	else if($('#pos2 img').attr('src') != ''){
		$('#pos1 img').attr('src', writters[nn]);
		$('#pos1 .title-writter').text(name_wt[nn]);
		$('#pos3 img').attr('src', writters[ss]);
		$('#pos3 .title-writter').text(name_wt[ss]);
		opt = 2;
	}
	else if($('#pos3 img').attr('src') != ''){
		$('#pos1 img').attr('src', writters[nn]);
		$('#pos1 .title-writter').text(name_wt[nn]);
		$('#pos2 img').attr('src', writters[ss]);
		$('#pos2 .title-writter').text(name_wt[ss]);
		opt = 3;
	}
	$('.btn-restart').on('click', function(){
		location.reload(true);
	});
	$('.option-riddle').on('click', function(){
		var option = $(this).data('option');
		console.log(option);
		var answersS = parseInt(localStorage.getItem("answersS"));
		var successS = parseInt(localStorage.getItem("successS"));
		var errorS = parseInt(localStorage.getItem("errorS"));
		if(option == opt){
			successS=successS+1;
			checkAnswersSuccess(successS);
			console.log(localStorage.successS);
			if(localStorage.successS == 1){
				$('.answers-result i').removeClass('active');
				$('.answers-result i').first().removeClass('fa-circle');
				$('.answers-result i').first().addClass('fa-check-circle');
				$('.answers-result i').first().addClass('active');
			}
			else if(localStorage.successS == 2){
				$('.answers-result i').removeClass('active');
				$('.answers-result i').first().removeClass('fa-circle');
				$('.answers-result i').first().addClass('fa-check-circle');
				$('.answers-result i').first().addClass('active');
				$('.answers-result i:nth-child(2)').addClass('active');
				$('.answers-result i:nth-child(2)').removeClass('fa-circle');
				$('.answers-result i:nth-child(2)').addClass('fa-check-circle');
			}
			else if(localStorage.successS == 3){
				$('.answers-result i').first().removeClass('fa-circle');
				$('.answers-result i').first().addClass('fa-check-circle');
				$('.answers-result i').first().addClass('active');
				$('.answers-result i:nth-child(2)').addClass('active');
				$('.answers-result i:nth-child(2)').removeClass('fa-circle');
				$('.answers-result i:nth-child(2)').addClass('fa-check-circle');
				$('.answers-result i:nth-child(3)').addClass('active');
				$('.answers-result i:nth-child(3)').removeClass('fa-circle');
				$('.answers-result i:nth-child(3)').addClass('fa-check-circle');
				localStorage.setItem("answersS", 1);
				localStorage.setItem("successS", 0);
				localStorage.setItem("errorS", 0);
			}
				$(this).addClass('active');
				$(this).append('<h3 class="text-white">Respuesta correcta</h3>');
				$('.option-riddle').css('pointer-events', 'none');
				$('.btn-restart').show();
				setTimeout(function(){ $('.option-wrap').hide();$('.option-wrap.active').fadeIn(); }, 100);
				//setTimeout(function(){ location.reload(true) }, 15000);
		}
		else{
			errorS=errorS+1;
			checkAnswersError(errorS);
			console.log(localStorage.errorS);
			if(localStorage.errorS == 1){
				$('.answers-result i:nth-child(4)').removeClass('active');
				$('.answers-result i:nth-child(4)').addClass('error');
				$('.answers-result i:nth-child(4)').removeClass('fa-circle');
				$('.answers-result i:nth-child(4)').addClass('fa-times-circle');
			}
			else if(localStorage.errorS == 2){
				$('.answers-result i:nth-child(4)').removeClass('active');
				$('.answers-result i:nth-child(4)').addClass('error');
				$('.answers-result i:nth-child(4)').removeClass('fa-circle');
				$('.answers-result i:nth-child(4)').addClass('fa-times-circle');
				$('.answers-result i:nth-child(5)').removeClass('active');
				$('.answers-result i:nth-child(5)').addClass('error');
				$('.answers-result i:nth-child(5)').removeClass('fa-circle');
				$('.answers-result i:nth-child(5)').addClass('fa-times-circle');
			}
			else if(localStorage.errorS == 3){
				localStorage.setItem("answersS", 0);
				localStorage.setItem("successS", 0);
				localStorage.setItem("errorS", 0);
				//$('#price').toggle('modal');
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