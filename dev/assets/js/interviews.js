$( document ).ready(function() {

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
	}
});