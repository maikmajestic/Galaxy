$( document ).ready(function() {
	var miembros = ['../../assets/images/members/images/Miembros/bea-ram_f.png', '../../assets/images/members/Miembros/luis-villoro_t.png', '../../assets/images/members/Miembros/car-casas_c.png	', '../../assets/images/members/Miembros/marcos-moshinsky_b.png', '../../assets/images/members/Miembros/car-fuentes.png', '../../assets/images/members/Miembros/maria_e-medina-m.png', '../../assets/images/members/Miembros/dan-cosio_v.png', '../../assets/images/members/Miembros/miguel-leon_p.png', '../../assets/images/members/Miembros/edu-garcia_m.png' ,'../../assets/images/members/Miembros/octavio-novaro_p.png' ,'../../assets/images/members/Miembros/fer-delpaso.png' ,'../../assets/images/members/Miembros/octavio-paz.png' ,'../../assets/images/members/Miembros/ger-murillo_c.png' ,'../../assets/images/members/Miembros/ramon-xirau.png' ,'../../assets/images/members/Miembros/hec-fix-z.png' ,'../../assets/images/members/Miembros/silvio-zavala_v.png' ,'../../assets/images/members/Miembros/jai-garcia-t.png' ,'../../assets/images/members/Miembros/teodoro-gonzalez_del.png' ,'../../assets/images/members/Miembros/jo-sarukhan.png' ,'../../assets/images/members/Miembros/vicente-rojo.png' ,'../../assets/images/members/Miembros/jo_e-pacheco.png' ,'../../assets/images/members/Miembros/victor-urquidi.png' ,'../../assets/images/members/Miembros/lin_r-manzanilla.png'];
	var candidatos = ['../../assets/images/members/images/Candidatos/art-ripstein.png', '../../assets/images/members/Candidatos/fer-benitez.png', '../../assets/images/members/Candidatos/fra-toledo.png	', '../../assets/images/members/Candidatos/gun-gerzso.png', '../../assets/images/members/Candidatos/gus-baz.png', '../../assets/images/members/Candidatos/hec-azar.png', '../../assets/images/members/Candidatos/jo-caprizo.png', '../../assets/images/members/Candidatos/jo-revueltas.png', '../../assets/images/members/Candidatos/jose_l-cuevas.png' ,'../../assets/images/members/Candidatos/ju_o-gorman.png' ,'../../assets/images/members/Candidatos/jua_j-arreola.png' ,'../../assets/images/members/Candidatos/jul-gonzalez_v.png' ,'../../assets/images/members/Candidatos/ma-pani.png' ,'../../assets/images/members/Candidatos/manu_m-ponce.png' ,'../../assets/images/members/Candidatos/manu-felguerez.png' ,'../../assets/images/members/Candidatos/mar-frenk.png' ,'../../assets/images/members/Candidatos/ped-ram_v.png' ,'../../assets/images/members/Candidatos/pellicer.png' ,'../../assets/images/members/Candidatos/ro-castellanos.png' ,'../../assets/images/members/Candidatos/ro-leon.png' ,'../../assets/images/members/Candidatos/ruth.png' ,'../../assets/images/members/Candidatos/siqueiros.png' ,'../../assets/images/members/Candidatos/tom-segovia.png'];
	var miembrosInfo = ['Fue candidato en 1984 y fue aceptada como miembro en el mismo año', 'Fue candidato en 1973 y 1978, fue aceptado como miembro en 1978.', 'Fue candidato en 1974 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1972 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1972 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 2004 y 2005, fue aceptada como miembro en 2005.', 'Fue candidato en 1948 y 1950, fue aceptado como miembro en 1951.', 'Fue candidato en 1968 y 1970, fue aceptado como miembro en el mismo año.', 'Fue candidato en 1952, 1954 y 1957, fue aceptado como miembro en 1957.', 'Fue candidato en 1984, 1987, 1988, 1991 y 1995, fue aceptado como miembro en 1995.', 'Fue candidato en 1995 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1958, 1961 y 1966, fue aceptado como miembro en 1966.', '', 'Fue candidato en 1972 y 1973, fue aceptado como miembro en 1973.', 'Fue candidato en 1972, 1973 y 1974, fue aceptado como miembro en 1974.', 'Fue candidato en 1946 y fue aceptado como miembro en 1947.', 'Fue candidato en 1973, 1974 y 1975, fue aceptado como miembro en 1975.', 'Fue candidato en 1978 y 1988, fue aceptado como miembro en 1988.', 'Fue candidato en 1985 y 1986, fue aceptado como miembro en 1986.', 'Fue candidato en 1993 y fue aceptado como miembro en 1994.', 'Fue candidato en 1985 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 1960 y fue aceptado como miembro en el mismo año.', 'Fue candidato en 200y y fue aceptada como miembro en el mismo año.'];
	var candidsInfo = ['Fue candidato en 2005 donde resultaron electos María Elena Medina y Eusebio Juaristi.', 'Fue candidato en 1961 y 1973 donde resultó electo Ramón Xirau.', 'Fue candidato en 1986 y 1992, en 1992 fue electo pero declinó ser miembro.', 'Fue candidato en 1972 donde resultó electo Carlos Fuentes, entre otros.', 'Fue candidato en 1948 y 1951, donde resultó electo Antonio Castro Leal.', 'Fue candidato en 1975 donde resultó electo Jaime García Terrés.', 'Fue candidato en 1995 y 1999, donde resultó electo Octavio Novaro, entre otros.', 'Fue candidato en 1948, donde resultó electo Antonio Castro Leal.', 'Fue candidato en 1992, 1993 y 1995, donde resultó electo Fernando del Paso, entre otros.', 'Fue candidato en 1948 y 1951, donde resultó electo Antonio Castro Leal.', 'Fue candidato en 1973, 1974 y 1978, donde resultó electo Luis Villoro, entre otros.', 'Fue candidato en 1994 y 1998, donde resultaron electos Donato Alarcón y Mario Lavista.', 'Fue candidato en 1950 y 1951, donde resultó electo el Dr. Atl', 'Fue candidato en 1943, donde fue electo Ignacio González Guzmán.', 'Fue candidato en 1987 y 1991 y precandidato en 1993 donde fue electo Vicente Rojo.', 'Fue candidato en 1979 donde fue una elección desierta.', 'Fue candidato en 1958, 1972 y 1973, donde fue electo Carlos Fuentes, entre otros.', 'Fue candidato en 1951, 1952, 1954 y 1957, donde fue electo Daniel Cossio, entre otros.', 'Fue candidato en 1972, donde fue electo Ramón de la Fuente.', 'Fue candidato en 1993 y 1994, donde resultó electo Vicente Alarcón.', 'Fue candidato en 1973 y 1975, donde resultó electo Ramón Xirau.', 'Fue candidato en 1948 y 1950, donde resultó electo el Dr. Atl', 'Fue candidato en 1982, donde resultó electo Marcos Mazari.'];
	var nmiembros = miembros.length-1;
	var ncandid = candidatos.length-1;
	var posphoto = Math.floor((Math.random() * 3) + 1);
	var randmiembro = Math.floor((Math.random() * nmiembros)+1);
	var randcandid = Math.floor((Math.random() * ncandid)+1);
	$('#pos'+posphoto+' .front img').attr('src', miembros[randmiembro]);
	$('#pos'+posphoto+' .back .info-member span').text(miembrosInfo[randmiembro]);
	$('#pos'+posphoto+' .back .info-member i').addClass('fa-check-circle success');
	if($('#pos1 .front img').attr('src') != '../../assets/images/members/polaroid_back.png'){
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
	}
	$('.btn-restart').on('click', function(){
		location.reload(true);
	});
	$('.pulse').on('click', function(){
		if($(this).hasClass('active')){
			$('.pulse').css('pointer-events', 'none');
			setTimeout(function(){ location.reload(true) }, 5000);
		}
	});
});