$( document ).ready(function() {

	$('#video i').on('click', function(){
		window.history.back();
	});

	$('.go-back').on('click', function(){
		window.history.back();
	});

	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
	};

  if (window.location.href.indexOf("questions.html") > -1) {
  	//krauze
	  if (window.location.href.indexOf("?a=ek") > -1) {
	  	$('#id-author').text('Enrique Krauze');
	  	var questions = ['¿Hacia dónde se dirige la democracia latinoamericana?', '¿Cuál es la importancia de que exista una institución como El Colegio Nacional?', '¿Cuál ha sido el mejor momento histórico de México en términos económicos, sociales y políticos?', '¿Cuáles son las particularidades de la democracia mexicana?', '¿Cuáles son los peligros de que un país olvide su pasado?', '¿Según la historia de México cuál es el régimen político que más le conviene?'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=ek&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=ek&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
		if (window.location.href.indexOf("?a=dv") > -1) {
	  	$('#id-author').text('Diego Valadez');
	  	var questions = ['¿Cuál es la importancia de una institución como El Colegio Nacional?', '¿El sistema presidencial falla? ¿Debe renovarse o cambiarse?', '¿La Constitución requiere reformas o necesitamos una nueva constitución? ¿Por qué?', '¿Por qué la Constitución de 1857 es el parteaguas de nuestra historia constitucional?', '¿Qué es la democracia cultural? ¿Existe en México?', '¿Qué es la ley de voluntad anticipada y por qué es importante?'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=dv&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=dv&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
		if (window.location.href.indexOf("?a=fz") > -1) {
	  	$('#id-author').text('Héctor Fix-Zamudio');
	  	var questions = ['Sobre el juicio de amparo', 'Sobre el Ombudsman', 'El derecho procesal constitucional', 'Importancia de la enseñanza en derechos humanos', 'El deber de un Jurista', 'Importancia de una institución como El Colegio Nacional'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=fz&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=fz&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
		if (window.location.href.indexOf("?a=jg") > -1) {
	  	$('#id-author').text('Javier Garciadiego');
	  	var questions = ['Importancia de la historia', 'Importancia de conocer la revolución mexicana', 'Aportaciones de la revolución al país actual', 'Importancia de libertad de expresión y derechos a la información en la construcción de un país', 'Papel de los jóvenes en las transformaciones del país', 'Importancia de una institución como El Colegio Nacional'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=jg&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=jg&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
		if (window.location.href.indexOf("?a=jc") > -1) {
	  	$('#id-author').text('José Ramón Cossío');
	  	var questions = ['El derecho constitucional', 'Los derechos sociales', 'Clasificación de los derechos', 'Relación entre el derecho y otras disciplinas', 'Promover cambios en la estructura y redacción de las sentencias', 'Maneras de contribuir o generar un mejor Estado', 'Deber de un juzgador mexicano', 'El valor de su labor como docente, investigador y servidor público', 'Importancia de una institución como El Colegio Nacional'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=jc&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=jc&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
		if (window.location.href.indexOf("?a=lv") > -1) {
	  	$('#id-author').text('Luis Villoro');
	  	var questions = ['Sobre la filosofía y por qué dedicarse a ella', 'Sobre la equidad', 'Sobre la posrevolución', 'Pendientes del proceso histórico mexicano', 'Relación entre la cultura local y la cultura universal'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=lv&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=lv&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
		if (window.location.href.indexOf("?a=mp") > -1) {
	  	$('#id-author').text('Miguel León Portilla');
	  	var questions = ['Importancia de las lenguas indígenas', 'Preservación de las lenguas indígenas', 'Diferencia entre una lengua y un dialecto', 'Importancia de conocer la versión de un pueblo vencido', 'Herencia de la vida prehispánica', 'Importancia de una institución como El Colegio Nacional'];
	  	var noquestions = questions.length;
	  	for(var i=0;i<noquestions;i++){
	   		$('#questions').append('<div class="col-8 item-member"><div class="row align-items-center"><div class="col-9 item-link"><a class="text-white text-center" href="video.html?a=mp&v='+i+'">'+questions[i]+'</a></div><div class="col-3 item-link-request"><a href="video.html?a=mp&v='+i+'"><i class="fas fa-play"></i></a></div></div></div>');
	   	}
		}
	}

	if (window.location.href.indexOf("video.html") > -1) {
		if (window.location.href.indexOf("?a=ek") > -1) {
		  var videos = ['../../assets/videos/interviews/enriqueKrauze/democracia.mov', '../../assets/videos/interviews/enriqueKrauze/importancia.mov', '../../assets/videos/interviews/enriqueKrauze/momento.mov', '../../assets/videos/interviews/enriqueKrauze/particularidades.mov', '../../assets/videos/interviews/enriqueKrauze/peligros.mov', '../../assets/videos/interviews/enriqueKrauze/historia.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
		if (window.location.href.indexOf("?a=dv") > -1) {
		  var videos = ['../../assets/videos/interviews/diegoValadez/importancia.mov', '../../assets/videos/interviews/diegoValadez/presidencial.mov', '../../assets/videos/interviews/diegoValadez/const.mov', '../../assets/videos/interviews/diegoValadez/parteaguas.mov', '../../assets/videos/interviews/diegoValadez/democracia.mov', '../../assets/videos/interviews/diegoValadez/voluntad.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
		if (window.location.href.indexOf("?a=fz") > -1) {
		  var videos = ['../../assets/videos/interviews/fixZamudio/1.mov', '../../assets/videos/interviews/fixZamudio/2.mov', '../../assets/videos/interviews/fixZamudio/3.mov', '../../assets/videos/interviews/fixZamudio/4.mov', '../../assets/videos/interviews/fixZamudio/5.mov', '../../assets/videos/interviews/fixZamudio/6.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
		if (window.location.href.indexOf("?a=jg") > -1) {
		  var videos = ['../../assets/videos/interviews/javierGarciadego/historia.mov', '../../assets/videos/interviews/javierGarciadego/importanterevolucion.mov', '../../assets/videos/interviews/javierGarciadego/revolucion.mov', '../../assets/videos/interviews/javierGarciadego/expresion.mov', '../../assets/videos/interviews/javierGarciadego/jovenes.mov', '../../assets/videos/interviews/javierGarciadego/importancia.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
		if (window.location.href.indexOf("?a=jc") > -1) {
		  var videos = ['../../assets/videos/interviews/joseCossio/constitucional.mov', '../../assets/videos/interviews/joseCossio/sociales.mov', '../../assets/videos/interviews/joseCossio/derechos.mov', '../../assets/videos/interviews/joseCossio/disciplinas.mov', '../../assets/videos/interviews/joseCossio/promover.mov', '../../assets/videos/interviews/joseCossio/sociedad.mov', '../../assets/videos/interviews/joseCossio/juzgador.mov', '../../assets/videos/interviews/joseCossio/docente.mov', '../../assets/videos/interviews/joseCossio/importancia.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
		if (window.location.href.indexOf("?a=lv") > -1) {
		  var videos = ['../../assets/videos/interviews/luisVilloro/filosofia.mov', '../../assets/videos/interviews/luisVilloro/equidad.mov', '../../assets/videos/interviews/luisVilloro/posrevolucion.mov', '../../assets/videos/interviews/luisVilloro/pendientes.mov', '../../assets/videos/interviews/luisVilloro/cultura.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
		if (window.location.href.indexOf("?a=mp") > -1) {
		  var videos = ['../../assets/videos/interviews/miguelPortilla/lenguas.mov', '../../assets/videos/interviews/miguelPortilla/indigenas.mov', '../../assets/videos/interviews/miguelPortilla/dialecto.mov', '../../assets/videos/interviews/miguelPortilla/pueblo.mov', '../../assets/videos/interviews/miguelPortilla/importancia.mov'];
		  var vid = getUrlParameter('v');
		  console.log(vid);
		  $('#video source').attr('src', videos[vid]);
		  $("#video video")[0].load();
		  $('video').trigger('play');
		}
	}
});