$( document ).ready(function() {
	var miembros = ['../../assets/images/members/images/Miembros/bea-ram_f.png', '../../assets/images/members/Miembros/luis-villoro_t.png', '../../assets/images/members/Miembros/car-casas_c.png	', '../../assets/images/members/Miembros/marcos-moshinsky_b.png', '../../assets/images/members/Miembros/car-fuentes.png', '../../assets/images/members/Miembros/maria_e-medina-m.png', '../../assets/images/members/Miembros/dan-cosio_v.png', '../../assets/images/members/Miembros/miguel-leon_p.png', '../../assets/images/members/Miembros/edu-garcia_m.png' ,'../../assets/images/members/Miembros/octavio-novaro_p.png' ,'../../assets/images/members/Miembros/fer-delpaso.png' ,'../../assets/images/members/Miembros/octavio-paz.png' ,'../../assets/images/members/Miembros/ger-murillo_c.png' ,'../../assets/images/members/Miembros/ramon-xirau.png' ,'../../assets/images/members/Miembros/hec-fix-z.png' ,'../../assets/images/members/Miembros/silvio-zavala_v.png' ,'../../assets/images/members/Miembros/jai-garcia-t.png' ,'../../assets/images/members/Miembros/teodoro-gonzalez_del.png' ,'../../assets/images/members/Miembros/jo-sarukhan.png' ,'../../assets/images/members/Miembros/vicente-rojo.png' ,'../../assets/images/members/Miembros/jo_e-pacheco.png' ,'../../assets/images/members/Miembros/victor-urquidi.png' ,'../../assets/images/members/Miembros/lin_r-manzanilla.png'];
	var questions = ['¿A qué se dedicaba Beatriz de la Fuente?', '¿En qué país nació Luis Villoro? ', '¿Cuál de  estas opciones fue el área de investigación de Carlos Casas Campillo?', '¿Quién fue el maestro preferido de Marcos Moshinsky, que también fue miembro de El Colegio Nacional?', '¿Cuál de estas películas fue escrita por Carlos Fuentes?', 'Todos sabemos que Maria Elena Medina-Mora es experta en adicciones y salud mental. ¿En qué otra área se ha especializado?', '¿Cuál de estas instituciones fue fundada por Daniel Cossío Villegas?', '¿Cuáles fueron los dos personajes que influyeron en la vocación de Miguel León Portilla?', '¿De qué escuela fue director Eduardo García Máynez?', 'Por sus estudios a Octavio Novaro se le considera como:', '¿Cuántas novelas ha publicado Fernando del Paso?', '¿Qué músico siguió con fervor la escritura de Octavio Paz y lo llevó al mundo de la música popular?', '¿En qué objeto se rebautizó Gerardo Murillo como Dr. Atl?', '¿En qué idioma escribía poesía Ramón Xirau?', 'Durante veintiocho años Héctor Fix-Zamudio fue presidente de este instituto que tiene como objetivo reflexionar acerca del futuro del constitucionalismo en Iberoamérica.', '¿Cuál fue la labor de Silvio Zavala en El Colegio de México ?', '¿Cúal de estos poemas es de Jaime García Terrés ?', '¿Cuál de estos edificios no fue diseñado por Teodoro González de León ?', '¿Cuál de las siguientes instituciones fue fundada por José Sarukhán?', '¿Cuál de estos libros no tuvo una portada diseñada por Vicente Rojo?', '¿Cuál de estos autores fue traducido por José Emilio Pacheco?', '¿En cuál de estas organizaciones no trabajo Víctor Urquidi?', '¿En qué  países ha realizado excavaciones Linda Rosa Manzanilla?'];
	var info = ['Académica, investigadora e historiadora del arte. Tuvo varias contribuciones en los estudios de arqueología de Mesoamérica. Beatriz Ramírez de la Fuente logró acercarse al arte mesoamericano, de una manera sobresaliente. No solo entendió la generalidad de sus estilos, supo identificar talleres de escultura a través de sus rasgos estilísticos e incluso artistas específicos por sus nombres, como Och ó Pequeña Zarigüeya, el maestro pintor de Bonampak',
	 'Luis Villoro Toranzo nació en Barcelona, España, el 3 de noviembre de 1922.', 'Realizó estudios en microbiología, bioquímica agrícola, radioisótopos, genética microbiana, química orgánica y bioquímica de esteroides, sobresaliendo en el área de bioconversiones.',
	 'Con una nominación al Nobel, Manuel Sandoval Vallarta apoyó de manera sobresaliente la ciencia en México, incluso por su apoyo fue que Marcos Moshinsky estudió en Princeton.', 
	 'Además de las adaptaciones cinematográficas de varias de sus obras, como Gringo Viejo, La Cabeza de la hidra o La bruja en amor, también fue guionista de algunas películas. El gallo de oro de Roberto Gavaldón, Tiempo de Morir de Arturo Ripstein y  Los Caifanes de Juan Ibáñez.', 
	 'Los campos de interés de la doctora Medina-Mora son la epidemiología, la metodología y los factores psicosociales relacionados con las adicciones y la salud mental. Actualmente ocupa el puesto de Directora del Instituto Nacional de Psiquiatría "Ramón de la Fuente Muñiz".', 
	 'El Fondo de Cultura Económica, editorial en lengua española, se fundó en 1934 por iniciativa de un distinguido miembro de El Colegio Nacional: el educador y economista, Daniel Cosío Villegas.', 
	 'En su historia personal se encuentran dos grandes personajes que influyeron en su vocación por el conocimiento: el poeta y escritor Manuel Gutiérrez Nájera por parte de su madre; y Manuel Gamio, padre de la antropología en México, por el lado paterno.', 
	 'Fue director del Instituto Tecnológico de México  (ahora Instituto Tecnológico Autónomo de México ITAM ) de 1946 a 1952.', 
	 'Sus principales líneas de investigación fueron la física atómica y molecular, física teórica, mecánica cuántica, fisicoquímica, respuesta sísmica resonante y catálisis teórica y experimental.', 
	 'Aunque Fernando del Paso es uno de los autores más importantes de México, han sido pocas sus publicaciones. Con una calidad increíble nos ha dejado sus novelas José Trigo (1966), Palinuro de México (1977), Noticias del Imperio (1987) y Linda 67. Historia de un Crimen (1995).', 
	 'En varias canciones hizo referencias a versos del poeta: En "Puente" alude al poema "Razones para morir": La rima que se acuesta con todas las palabras la Libertad, a muerte me llamaba sirena alcahueta. En Amor amarillo canta: Cuerpos de luz corriendo en pleno cielo, mientras Paz escribió en Manantial: animales de luz corriendo en pleno cielo. Y el referente más reconocible: está en el texto de Paz "Hacia el poema" y la canción del "Beautiful" del argentino. Es la consigna: Merece lo que sueñas.', 
	 'Sugerido por su amigo el poeta Leopoldo Lugones, Gerardo Murillo se rebautizó como Dr. Atl;  "Doctor" como título de prestigio y "Atl" por la palabra náhuatl que significa, agua.', 
	 'Aunque Ramón Xirau es de origen Español e hijo del filósofo Joaquín Xirau, Ramón Xirau vivió en México desde 1939 y siguió escribiendo en su idioma original. De hecho, Xirau mencionaba, que escribía su ensayo en español, pero su lírica en Catalán.', 
	 'Fue designado presidente del Instituto Iberoamericano de Derecho Constitucional desde su fundación en 1974, hasta el año 2002, en el cual se le nombró Presidente Honorario.', 
	 'Con la creación de la Casa España, a la que llegaron exiliados de la guerra civil, para volverse académicos de planta, como Joaquín Xirau y José Gaos, se pensó en sumar a maestros mexicanos que hubiesen estudiado en España. La labor fue realizada por Alfonso Reyes, que era entonces director de la Casa España y Silvio Zavala, a quién se encomendó la creación del Centro de Estudios Históricos, fundado en 1941 y que hasta hoy es el más antiguo de la institución ahora conocida como El Colegio  de México.', 
	 'Al practicar una poesía de la razón que está muy lejos de excluir la pasión, García Terrés comprueba que la lírica es también una actividad de la inteligencia: sensaciones y sentimientos no bastan para hacer un poema.', 
	 'Teodoro González de León, diseñó algunos de los edificios más emblemáticos de la Ciudad de México. Como El Colegio de México, el Museo Universitario de Arte Contemporáneo o El Edificio Virreyes. Fernando Romero fue el encargado de diseñar el Museo Soumaya.', 
	 'En 1992 fundó, con apoyo gubernamental, la Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (Conabio), de la cual funge, de forma honoraria, como Coordinador Nacional por designación presidencial desde su inicio.', 
	 'Vicente Rojo comenzó a hacer portadas a finales de los años cincuenta para el Fondo de Cultura Económica, por la búsqueda de la modernización del aspecto sobrio de sus ediciones anteriores. Colaboró con el editor Joaquín Díez Canedo de Novelistas Contemporáneos y en su editorial Joaquín Mortiz con su Serie del Volador. También colaboró con la UNAM y Editorial Sudamericana.', 
	 'Entre sus traducciones figuran Cómo es, de Samuel Beckett, De profundis de Oscar Wilde, Un tranvía llamado deseo, de Tennesee Williams, a las que se sumaron Cuatro cuartetos, de T. S. Eliot y Vidas imaginarias, de Marcel Schwob.', 
	 'Economista, funcionario público y académico mexicano es considerado uno de los economistas mexicanos más sobresalientes del Siglo XX, trabajó en el Banco de México, en la Secretaría de Hacienda y Crédito Público, en la Comisión Económica para América Latina y el Caribe (CEPAL) y es cofundador del Centro de Estudios Económicos y Demográficos de El Colegio de México, institución donde luego sería presidente.', 
	 'En 1976, Linda participó en las excavaciones realizadas por la Universidad de Roma "La Sapienza" en Arslatepé, Turquía, donde descubrió la sala de armas de uno de los palacios más antiguos del Medio Oriente. Fue por estas excavaciones que comenzó a tener renombre internacional.'];var options1 = ['Arquéologo', 'Jurista', 'Historiadora del arte'];
	var opt1success = 'option3';
	var options2 = ['México', 'España', 'Colombia'];
	var opt2success = 'option2';
	var options3 = ['Bioconversiones','Derecho constitucional', 'Cardiología'];
	var opt3success = 'option1';
	var options4 = ['Manuel Uribe Troncoso', 'Arturo Rosenblueth', 'Manuel Sandoval Vallarta'];
	var opt4success = 'option3';
	var options5 = ['Mi niño Tizoc', 'La noche de la iguana', 'Los caifanes'];
	var opt5success = 'option3';
	var options6 = ['Epidemiología', 'Neurofisiología', 'Optometría'];
	var opt6success = 'option1';
	var options7 = ['CINVESTAV', 'INAH', 'Fondo de cultura económica'];
	var opt7success = 'option3';
	var options8 = ['Manuel Gamio y Manuel Gütierrez Nájera', 'José Vasconcelos y Nezahualcóyotl', 'Sor Juana Inés de la Cruz y  Cuitláhuac'];
	var opt8success = 'option1';
	var options9 = ['ITAM','UAM','UNAM'];
	var opt9success = 'option1';
	var options10 = ['El padre de la fisioterapia en México', 'El padre de la nanociencia mexicana', 'El pionero en la sismología mexicana'];
	var opt10success = 'option2';
	var options11 = ['3', '4', '6'];
	var opt11success = 'option2';
	var options12 = ['Silvio Rodríguez', 'Gustavo Cerati', 'Rubén Albarrán'];
	var opt12success = 'option2';
	var options13 = ['En una bañera llena de champagne', 'En una alberca llena de vino', 'En el río Jordán'];
	var opt13success = 'option1';
	var options14 = ['Francés', 'Catalán','Hebreo'];
	var opt14success = 'option2';
	var options15 = ['Instituto Iberoamericano de Derecho Constitucional', 'Instituto de Investigaciones Jurídicas', 'Instituto de la Constitución Iberoamericana'];
	var opt15success = 'option1';
	var options16 = ['La creación de el Centro de Estudios Lingüísticos Literarios', 'La creación Centro de Estudios Económicos y demográficos', 'La fundación de Centro de Estudios Históricos'];
	var opt16success = 'option3';
	var options17 = ['El cuervo', 'Los amorosos', 'La Bruja'];
	var opt17success = 'option3';
	var options18 = ['El Auditorio Nacional', 'Torres Arcos Bosques', 'Museo Soumaya'];
	var opt18success = 'option3';
	var options19 = ['CONABIO', 'SAGARPA', 'SEMARNAT'];
	var opt19success = 'option1';
	var options20 = ['“La feria “ de Juan José Arreola','“Cien años de soledad” de Gabriel García Márquez', '“Noticias del imperio” de Fernando del Paso'];
	var opt20success = 'option3';
	var options21 = ['Oscar Wilde', 'James Joyce', 'Mark Twain'];
	var opt21success = 'option1';
	var options22 = ['El Colegio de México', 'Comisión Económica Panamericana Latina y el Caribe', 'ONU'];
	var opt22success = 'option3';
	var options23 = ['Italia, Guatemala, El Salvador y E.U.','Perú, Chile, Grecia y Marruecos','Bolivia, Egipto, Turquía e Israel'];
	var opt23success = 'option3';
	//var candidatos = ['../../assets/images/members/images/Candidatos/art-ripstein.png', '../../assets/images/members/Candidatos/fer-benitez.png', '../../assets/images/members/Candidatos/fra-toledo.png	', '../../assets/images/members/Candidatos/gun-gerzso.png', '../../assets/images/members/Candidatos/gus-baz.png', '../../assets/images/members/Candidatos/hec-azar.png', '../../assets/images/members/Candidatos/jo-caprizo.png', '../../assets/images/members/Candidatos/jo-revueltas.png', '../../assets/images/members/Candidatos/jose_l-cuevas.png' ,'../../assets/images/members/Candidatos/ju_o-gorman.png' ,'../../assets/images/members/Candidatos/jua_j-arreola.png' ,'../../assets/images/members/Candidatos/jul-gonzalez_v.png' ,'../../assets/images/members/Candidatos/ma-pani.png' ,'../../assets/images/members/Candidatos/manu_m-ponce.png' ,'../../assets/images/members/Candidatos/manu-felguerez.png' ,'../../assets/images/members/Candidatos/mar-frenk.png' ,'../../assets/images/members/Candidatos/ped-ram_v.png' ,'../../assets/images/members/Candidatos/pellicer.png' ,'../../assets/images/members/Candidatos/ro-castellanos.png' ,'../../assets/images/members/Candidatos/ro-leon.png' ,'../../assets/images/members/Candidatos/ruth.png' ,'../../assets/images/members/Candidatos/siqueiros.png' ,'../../assets/images/members/Candidatos/tom-segovia.png'];
	//var miembrosInfo = ['Fue candidato en 1984 y fue aceptada como miembro en el mismo año', 'Fue candidato en 1973 y 1978, fue aceptado como miembro en 1978.', 'Fue candidato en 1974 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1972 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1972 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 2004 y 2005, fue aceptada como miembro en 2005.', 'Fue candidato en 1948 y 1950, fue aceptado como miembro en 1951.', 'Fue candidato en 1968 y 1970, fue aceptado como miembro en el mismo año.', 'Fue candidato en 1952, 1954 y 1957, fue aceptado como miembro en 1957.', 'Fue candidato en 1984, 1987, 1988, 1991 y 1995, fue aceptado como miembro en 1995.', 'Fue candidato en 1995 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1958, 1961 y 1966, fue aceptado como miembro en 1966.', '', 'Fue candidato en 1972 y 1973, fue aceptado como miembro en 1973.', 'Fue candidato en 1972, 1973 y 1974, fue aceptado como miembro en 1974.', 'Fue candidato en 1946 y fue aceptado como miembro en 1947.', 'Fue candidato en 1973, 1974 y 1975, fue aceptado como miembro en 1975.', 'Fue candidato en 1978 y 1988, fue aceptado como miembro en 1988.', 'Fue candidato en 1985 y 1986, fue aceptado como miembro en 1986.', 'Fue candidato en 1993 y fue aceptado como miembro en 1994.', 'Fue candidato en 1985 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1960 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 200y y fue aceptada como miembro en el mismo año.'];
	var miembrosInfo = ['Fue candidato en 1984 y fue aceptada como miembro en el mismo año', 'Fue candidato en 1973 y 1978, fue aceptado como miembro en 1978.', 'Fue candidato en 1974 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1972 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1972 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 2004 y 2005, fue aceptada como miembro en 2005.', 'Fue candidato en 1948 y 1950, fue aceptado como miembro en 1951.', 'Fue candidato en 1968 y 1970, fue aceptado como miembro en el mismo año.', 'Fue candidato en 1952, 1954 y 1957, fue aceptado como miembro en 1957.', 'Fue candidato en 1984, 1987, 1988, 1991 y 1995, fue aceptado como miembro en 1995.', 'Fue candidato en 1995 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1958, 1961 y 1966, fue aceptado como miembro en 1966.', '', 'Fue candidato en 1972 y 1973, fue aceptado como miembro en 1973.', 'Fue candidato en 1972, 1973 y 1974, fue aceptado como miembro en 1974.', 'Fue candidato en 1946 y fue aceptado como miembro en 1947.', 'Fue candidato en 1973, 1974 y 1975, fue aceptado como miembro en 1975.', 'Fue candidato en 1978 y 1988, fue aceptado como miembro en 1988.', 'Fue candidato en 1985 y 1986, fue aceptado como miembro en 1986.', 'Fue candidato en 1993 y fue aceptado como miembro en 1994.', 'Fue candidato en 1985 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1960 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 200y y fue aceptada como miembro en el mismo año.'];
	//var candidsInfo = ['Fue candidato en 2005 donde resultaron electos María Elena Medina y Eusebio Juaristi.', 'Fue candidato en 1961 y 1973 donde resultó electo Ramón Xirau.', 'Fue candidato en 1986 y 1992, en 1992 fue electo pero declinó ser miembro.', 'Fue candidato en 1972 donde resultó electo Carlos Fuentes, entre otros.', 'Fue candidato en 1948 y 1951, donde resultó electo Antonio Castro Leal.', 'Fue candidato en 1975 donde resultó electo Jaime García Terrés.', 'Fue candidato en 1995 y 1999, donde resultó electo Octavio Novaro, entre otros.', 'Fue candidato en 1948, donde resultó electo Antonio Castro Leal.', 'Fue candidato en 1992, 1993 y 1995, donde resultó electo Fernando del Paso, entre otros.', 'Fue candidato en 1948 y 1951, donde resultó electo Antonio Castro Leal.', 'Fue candidato en 1973, 1974 y 1978, donde resultó electo Luis Villoro, entre otros.', 'Fue candidato en 1994 y 1998, donde resultaron electos Donato Alarcón y Mario Lavista.', 'Fue candidato en 1950 y 1951, donde resultó electo el Dr. Atl', 'Fue candidato en 1943, donde fue electo Ignacio González Guzmán.', 'Fue candidato en 1987 y 1991 y precandidato en 1993 donde fue electo Vicente Rojo.', 'Fue candidato en 1979 donde fue una elección desierta.', 'Fue candidato en 1958, 1972 y 1973, donde fue electo Carlos Fuentes, entre otros.', 'Fue candidato en 1951, 1952, 1954 y 1957, donde fue electo Daniel Cossio, entre otros.', 'Fue candidato en 1972, donde fue electo Ramón de la Fuente.', 'Fue candidato en 1993 y 1994, donde resultó electo Vicente Alarcón.', 'Fue candidato en 1973 y 1975, donde resultó electo Ramón Xirau.', 'Fue candidato en 1948 y 1950, donde resultó electo el Dr. Atl', 'Fue candidato en 1982, donde resultó electo Marcos Mazari.'];
	var nmiembros = miembros.length-1;
	//var ncandid = candidatos.length-1;
	var posphoto = Math.floor((Math.random() * 2));
	var randmiembro = Math.floor((Math.random() * nmiembros)+1);
	var memberoption = randmiembro + 1;
	console.log(randmiembro);
	//var randcandid = Math.floor((Math.random() * ncandid)+1);
	$('#pos1 img').attr('src', miembros[randmiembro]);
	$('.ask-title').text(questions[randmiembro]);
	$('.info-mm').text(info[randmiembro]);
	var opt = eval('options'+ memberoption);
	console.log(opt + 'a');
	//var opt = eval('options1');
	for(var i=0;i<3;i++){
		$('.options-container').append('<div class="row align-items-center option-wrap" data-option="option'+(i+1)+'"><div class="col-10 name-option"><span>'+opt[i]+'</span></div><div class="col-2 icon-option"><i class="fas fa-check"></i></div></div>');
	}
	var op = eval('opt'+memberoption+'success');
	console.log(op);
	//$('#pos'+posphoto+' .back .info-member span').text(miembrosInfo[randmiembro]);
	//$('#pos'+posphoto+' .back .info-member i').addClass('fa-check-circle success');
	/*if($('#pos1 .front img').attr('src') != '../../assets/images/members/polaroid_back.png'){
		$('#pos2 .front img').attr('src', candidatos[randcandid]);
		$('#pos2 .back .info-member span').text(candidsInfo[randcandid]);
		$('#pos2 .back .info-member i').addClass('fa-times-circle error');
		if(randcandid == 1){
			$('#pos3 .front img').attr('src', candidatos[randcandid+1]);
			$('#pos3 .back .info-member span').text(candidsInfo[randcandid+1]);
			$('#pos3 .back .info-member i').addClass('fa-times-circle error');
		}
		else{
			$('#pos3 .front img').attr('src', candidatos[randcandid-1]);
			$('#pos3 .back .info-member span').text(candidsInfo[randcandid-1]);
			$('#pos3 .back .info-member i').addClass('fa-times-circle error');
		}
	}
	else if($('#pos2 .front img').attr('src') != '../../assets/images/members/polaroid_back.png'){
		$('#pos1 .front img').attr('src', candidatos[randcandid]);
		$('#pos1 .back .info-member span').text(candidsInfo[randcandid]);
		$('#pos1 .back .info-member i').addClass('fa-times-circle error');
		if(randcandid == 1){
			$('#pos3 .front img').attr('src', candidatos[randcandid+1]);
			$('#pos3 .back .info-member span').text(candidsInfo[randcandid+1]);
			$('#pos3 .back .info-member i').addClass('fa-times-circle error');
		}
		else{
			$('#pos3 .front img').attr('src', candidatos[randcandid-1]);
			$('#pos3 .back .info-member span').text(candidsInfo[randcandid-1]);
			$('#pos3 .back .info-member i').addClass('fa-times-circle error');
		}
	}
	else if($('#pos3 .front img').attr('src') != '../../assets/images/members/polaroid_back.png'){
		$('#pos1 .front img').attr('src', candidatos[randcandid]);
		$('#pos1 .back .info-member span').text(candidsInfo[randcandid]);
		$('#pos1 .back .info-member i').addClass('fa-times-circle error');
		if(randcandid == 1){
			$('#pos2 .front img').attr('src', candidatos[randcandid+1]);	
			$('#pos2 .back .info-member span').text(candidsInfo[randcandid+1]);
			$('#pos2 .back .info-member i').addClass('fa-times-circle error');
		}
		else{
			$('#pos2 .front img').attr('src', candidatos[randcandid-1]);
			$('#pos2 .back .info-member span').text(candidsInfo[randcandid-1]);
			$('#pos2 .back .info-member i').addClass('fa-times-circle error');
		}
	}*/
	$('.btn-restart').on('click', function(){
		location.reload(true);
	});
	$('.option-wrap').on('click', function(){
		var option = $(this).data('option');
		console.log(option);
		if(option == op){
			$(this).addClass('active');
			$('.option-wrap').css('pointer-events', 'none');
			$('.btn-restart').show();
			setTimeout(function(){ $('.option-wrap').hide();$('.option-wrap.active').fadeIn();$('.info-mm').show(); }, 100);
			setTimeout(function(){ location.reload(true) }, 15000);
		}
		else{
			$(this).addClass('error');
			$(this).find('i').removeClass('fa-check');
			$(this).find('i').addClass('fa-times');
			$('.option-wrap').css('pointer-events', 'none');
			$('.btn-restart').show();
			setTimeout(function(){ $('.option-wrap').hide();$('.option-wrap.error').fadeIn();$('.info-mm').show(); }, 100);
			setTimeout(function(){ location.reload(true) }, 15000);
		}
		/*if($(this).hasClass('active')){
			$('.option-wrap').css('pointer-events', 'none');
			setTimeout(function(){ location.reload(true) }, 5000);
		}
		else{
			$(this).addClass('active');
			$('.option-wrap').css('pointer-events', 'none');
			setTimeout(function(){ location.reload(true) }, 5000);
		}*/
	});
});