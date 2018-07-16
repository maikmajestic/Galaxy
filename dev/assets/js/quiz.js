var idleTime = 0;
$(document).ready(function() {

  if (localStorage.successQ && localStorage.errorQ && localStorage.answersQ) {
    if (localStorage.successQ == 1) {
      $('.answers-result i').removeClass('active');
      $('.answers-result i').first().removeClass('fa-circle');
      $('.answers-result i').first().addClass('fa-check-circle');
      $('.answers-result i').first().addClass('active');
    }
    if (localStorage.successQ == 2) {
      $('.answers-result i').removeClass('active');
      $('.answers-result i').first().removeClass('fa-circle');
      $('.answers-result i').first().addClass('fa-check-circle');
      $('.answers-result i').first().addClass('active');
      $('.answers-result i:nth-child(2)').addClass('active');
      $('.answers-result i:nth-child(2)').removeClass('fa-circle');
      $('.answers-result i:nth-child(2)').addClass('fa-check-circle');
    }
    if (localStorage.successQ == 3) {
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
    if (localStorage.errorQ == 1) {
      $('.answers-result i:nth-child(4)').removeClass('active');
      $('.answers-result i:nth-child(4)').addClass('error');
      $('.answers-result i:nth-child(4)').removeClass('fa-circle');
      $('.answers-result i:nth-child(4)').addClass('fa-times-circle');
    }
    if (localStorage.errorQ == 2) {
      $('.answers-result i:nth-child(4)').removeClass('active');
      $('.answers-result i:nth-child(4)').addClass('error');
      $('.answers-result i:nth-child(4)').removeClass('fa-circle');
      $('.answers-result i:nth-child(4)').addClass('fa-times-circle');
      $('.answers-result i:nth-child(5)').removeClass('active');
      $('.answers-result i:nth-child(5)').addClass('error');
      $('.answers-result i:nth-child(5)').removeClass('fa-circle');
      $('.answers-result i:nth-child(5)').addClass('fa-times-circle');
    }
    if (localStorage.errorQ >= 3) {
      localStorage.setItem("successQ", 0);
      localStorage.setItem("errorQ", 0);
      //$('#price').toggle('modal');
    }
    if(localStorage.answersQ == 6){
      localStorage.setItem("answersQ", 0);
    }
  } else {
    localStorage.setItem("answersQ", -1);
    localStorage.setItem("successQ", 0);
    localStorage.setItem("errorQ", 0);
  }

  function checkAnswersSuccess(successQ) {
    if (successQ == 1) {
      localStorage.setItem("successQ", 1);
    } else if (successQ == 2) {
      localStorage.setItem("successQ", 2);
    } else if (successQ == 3) {
      var an = parseInt(localStorage.getItem("answersQ"));
      var ax = an+1;
      localStorage.setItem("answersQ", ax); 
      localStorage.setItem("successQ", 3);
      var code = Math.random().toString(36).substr(2, 9);
      console.log("el codigo es - " + code);
      $('.code-price').text('PLURAL-2018-' + code);
      if (localStorage.answersQ == 0 || localStorage.answersQ == 6) {
        $('.price-wrapper').show();
        $('#price').toggle('modal');
        $('body').css('pointer-events', 'none');
      }
      if (localStorage.answersQ == 6) {
        localStorage.setItem("answersQ", 0); 
      }
      console.log('games= '+localStorage.getItem("answersQ"));
    }
  }

  function checkAnswersError(errorQ) {
    if (errorQ == 1) {
      localStorage.setItem("errorQ", 1);
    }
    if (errorQ == 2) {
      localStorage.setItem("errorQ", 2);
    }
    if (errorQ == 3) {
      localStorage.setItem("errorQ", 3);
      var ad = parseInt(localStorage.getItem("answersQ"));
      var ac = ad+1;
      localStorage.setItem("answersQ", ac);
      $('#error-modal').toggle('modal');
      $('.error-wrapper').show();
      $('body').css('pointer-events', 'none');
      if (localStorage.answersQ == 6) {
        localStorage.setItem("answersQ", 0); 
      }
      console.log('games= '+localStorage.getItem("answersQ"));
    }
  }

  $('.go-back').on('click', function() {
    localStorage.setItem("successQ", 0);
    localStorage.setItem("errorQ", 0);
    window.location.href = "index.html";
  });

  $('.btn-accept').on('click', function() {
    localStorage.setItem("answersQ", 0); 
    localStorage.setItem("successQ", 0);
    localStorage.setItem("errorQ", 0);
    window.location.href = "index.html";
  });

  var quotes1 = ['Bendigo al santo médico que con sus palabras y sus visajes me fue abriendo poco a poco los ojos del entendimiento', 'Lo necesario es caminar, caminar siempre, no estacionarse jamás; ser dueños del valle, de las planicies, de la sierra y de todo lo que la vista abarca.']; 
  var answer1 = ['@FernandoDelPaso', '@AntonioCastro Leal', '@MarianoAzuela']; 
  var success1 = 3; 
  var quotes2 = ['Nadie sale. Parece que cuando llueve en México, lo único posible es encerrarse desajustadamente en guerra mínima, a pensar los ochenta minutos de la hora en que es hora de lágrimas.', 'Así pues, lo que el hombre gana en el curso de su caminar es el conocimiento.']; 
  var answer2 = ['@GabrielZaid', '@RubénBonifazNuño', '@MarianoAzuela']; 
  var success2 = 2; 
  var quotes3 = ['Todo poeta, como en general todo artista, vive por sus realizaciones máximas, en las que el arte de su tiempo llegó a la marea más alta y que quedan en la historia como una meta ideal.', '¿Quién no se ha dejado llevar por su imaginación, movida por sí misma o por la fantasía del arte?']; 
  var answer3 = ['@AntonioCastroLeal', '@SalvadorElizondo', '@CarlosFuentes']; 
  var success3 = 1; 
  var quotes4 = ['Las vidas del poeta y del crítico se unen en la muerte.', 'Las iglesias cristianas creen en el carácter revolucionario de su predicación, maravilla nunca antes vista, pues dar testimonio del hecho histórico de Jesús es tan grande novedad como el Cristo mismo.']; 
  var answer4 = ['@JoséEmilioPacheco', '@ChristopherDomínguezMichael', '@FernandoDelPaso']; 
  var success4 = 2; 
  var quotes5 = ['El universo fue creado para cada uno de nosotros cuando nacimos. El universo será destruido para cada uno de nosotros, con nuestra muerte.', 'Supo también que no podía cerrar los ojos, y si sabía que estaban abiertos era porque frente a él había una sombra más oscura que todas las otras oscuras sombras que lo rodeaban.']; 
  var answer5 = ['@FernandoDelPaso', '@SalvadorElizondo', '@GabrielZaid']; 
  var success5 = 1; 
  var quotes6 = ['¿no son las palabras y el lenguaje el lugar común por excelencia?', 'La fotografía —dijo el doctor Farabeuf— es una forma estática de la inmortalidad.']; 
  var answer6 = ['@AntonioCastroLeal', '@SalvadorElizondo', '@CarlosFuentes']; 
  var success6 = 2; 
  var quotes7 = ['Miré la dura tierra en que he nutrido cardos de angustia y mieses de esperanza, y la sentí tan mía cual si fuera yo la trémula flor, ella la planta.', 'Quiero sentirme cerca de las cosas sin fieras trabas y sin torpes muros.']; 
  var answer7 = ['@EnriqueGonzálezMartínez', '@JaimeGarcíaTerrés', '@AlejandroRossi']; 
  var success7 = 1; 
  var quotes8 = ['Para eso se hizo la Revolución, pues. Para que hubiera fraccionamientos en la Ciudad de México.', 'México debe alcanzar su originalidad viendo hacia adelante; no la encontrará atrás.']; 
  var answer8 = ['@AgustínYáñez', '@CarlosFuentes', '@RamónXirau']; 
  var success8 = 2; 
  var quotes9 = ['Amor. Grito amor con todas mis fuerzas. Y nada permanece.', 'Mañana cuando despierte, miraré y analizaré fríamente el delirio']; 
  var answer9 = ['@JuanVilloro', '@AlfonsoReyes', '@JaimeGarcíaTerrés']; 
  var success9 = 3;
  var quotes10 = ['No, no me había curado: el amor es una enfermedad en un mundo en que lo único natural es el odio.', 'La historia tiene el deber de trastornar las profecías.']; 
  var answer10 = ['@JoséEmilioPacheco', '@VicenteQuirarte', '@OctavioPaz']; 
  var success10 = 1; 
  var quotes11 = ['Tenemos que aprender a ser aire, sueño en libertad.', 'La indiferencia del mexicano ante la muerte se nutre de su indiferencia ante la vida.']; 
  var answer11 = ['@JaimeTorresBodet', '@OctavioPaz', '@AlfonsoReyes']; 
  var success11 = 2; 
  var quotes12 = ['Atrás quedan la luz, el mar, las nubes más brillantes después de la tormenta.  A diez mil metros de altura regreso a la ciudad monstruosa donde tú ya no esperas mi retorno.', 'Son alas perdidas las palabras: con ellas recobramos la agonía de sabernos en tierra.']; 
  var answer12 = ['@VicenteQuirarte', '@JaimeGarcíaTerrés', '@RamónXirau']; 
  var success12 = 1; 
  var quotes13 = ['¡Menos mal que el estupendo churro se puede comer con los dedos, aunque así́ queden los cuitados!', 'Pero ¿Cómo habían de escapar a la censura los editores ordinarios, si los mismos editores críticos no escapan?']; 
  var answer13 = ['@JaimeTorresBodet', '@AlfonsoReyes', '@OctavioPaz']; 
  var success13 = 2; 
  var quotes14 = ['Tuve una novia extraña. Me confesó que era criptojudía y yo pensé –en mi ignorancia cristiana- que era una secta erótica. Durante meses esperé la invitación.', 'Admito que las decisiones son casi siempre – lo escribo así para no condenarme definitivamente- tan incontrolables como las ocurrencias.']; 
  var answer14 = ['@AlejandroRossi', '@CarlosFuentes', '@VicenteQuirarte']; 
  var success14 = 1; 
  var quotes15 = ['¿Tenemos algo, usted y yo, que pueda hacernos confundir con los personajes de una tragedia?', 'La enseñanza de la historia ha sido siempre uno de los temas que me han preocupado más. Si se imparte con odio, se reduce –hasta un límite absurdo- la gran perspectiva humana.']; 
  var answer15 = ['@AgustínYáñez', '@JuanVilloro', '@JaimeTorresBodet']; 
  var success15 = 3; 
  var quotes16 = ['Un hombre recorre el desierto y al cabo de días infinitos encuentra un objeto brillante en la arena. Es un espejo. Lo recoge y al verse reflejado, dice: «perdone, no sabía que tenía dueño».', 'La vida está hecha de malentendidos: los solteros y los casados se envidian por razones tristemente imaginarias.']; 
  var answer16 = ['@JuanVilloro', '@OctavioPaz', '@GabrielZaid']; 
  var success16 = 1; 
  var quotes17 = ['Toda poesía tiene un origen: el silencio divino que apenas se recuerda.', 'Azul el arcoíris, cegadora la luz, la luz, si punzan las abejas punzan los pensamientos.']; 
  var answer17 = ['@RubénBonifazNuño', '@GabrielZaid', '@RamónXirau']; 
  var success17 = 3; 
  var quotes18 = ['Sin una lectura expectativa, no se producen los encuentros milagrosos. Lo cual quiere decir que lo verdaderamente sorprendente no puede ser absolutamente inesperado.', 'Y ese es el verdadero escándalo: que circule basura bajo un sello de excelencia']; 
  var answer18 = ['@GabrielZaid', '@JuanVilloro', '@VicenteQuirarte']; 
  var success18 = 1; 
  var info1 = ['Mariano azuela tomó posesión como Miembro Fundador de El Colegio Nacional el 15 de mayo de 1943']; 
  var info2 = ['Rubén Bonifaz Nuño electo el 4 de abril de 1972, tomó posesión como miembro de El Colegio Nacional el 20 de julio del mismo año. En su conferencia inaugural “La fundación de la ciudad” verificada el 3 de noviembre de 1972, fue presentado por el doctor Miguel León-Portilla.']; 
  var info3 = ['Antonio Castro Leal realizó importantes estudios sobre la literatura mexicana en la época de la Colonia, y sobre la novela de la Revolución, además de antologías y recopilaciones; hasta muy avanzada edad siguió ejerciendo la crítica y reseña literarias.  Ingresó en El Colegio Nacional el 9 de agosto de 1948. ']; 
  var info4 = ['Christopher Domínguez Michael ingresó a El Colegio Nacional el 3 de noviembre de 2017.']; 
  var info5 = ['Fernando del Paso ingresó en El Colegio Nacional el 12 de febrero de 1996. Su lección inaugural "Yo soy un hombre de letras" fue contestado por el doctor Miguel León-Portilla.']; 
  var info6 = ['Salvador Elizondo ingresó en El Colegio Nacional el 28 de abril de 1981. Su discurso de ingreso "Ida y vuelta: Joyce y Conrad" fue contestado por el doctor Ramón Xirau.']; 
  var info7 = ['Enrique González Martínez tomó posesión como miembro fundador de El Colegio Nacional el 15 de mayo de 1943.']; 
  var info8 = ['Carlos Fuentes electo el 4 de abril de 1972, tomó posesión como miembro de El Colegio Nacional el 20 de julio del mismo año. En su conferencia inaugural “Palabras iniciales” llevada a cabo el 17 de octubre de 1972, fue presentado por el ensayista y poeta Octavio Paz.']; 
  var info9 = ['Jaime García Terrés ingresó a El Colegio Nacional el 20 de octubre de 1975. Su discurso de ingreso fue contestado por el doctor Rubén Bonifaz Nuño.']; 
  var info10 = ['José Emilio Pacheco ingresó a El Colegio Nacional el 10 de julio de 1986. “A 150 años de la Academia de Letrán”, su discurso de ingreso, fue contestado por el poeta Jaime García Terrés.']; 
  var info11 = ['Octavio Paz ingresó en El Colegio Nacional el 1 de agosto de 1967. Su discurso de ingreso “La nueva analogía” fue contestado por el doctor Antonio Castro Leal.']; 
  var info12 = ['Vicente Quirarte ingresó a El Colegio Nacional el 3 de marzo de 2016. Su discurso de ingreso "El laurel invisible" fue contestado por el doctor Eduardo Matos Moctezuma.']; 
  var info13 = ['Alfonso Reyes fue miembro fundador de El Colegio Nacional, cargo del que tomó posesión el 15 de mayo de 1943.']; 
  var info14 = ['Alejandro Rossi ingresó en El Colegio Nacional el 22 de febrero de 1996. Su discurso de ingreso “Cartas credenciales” fue contestado por el doctor Ramón Xirau. ']; 
  var info15 = ['Jaime Torres Bodet electo el 6 de julio de 1953, ingresó a El Colegio Nacional el 8 de octubre del mismo año. Su discurso de ingreso “El escritor en su libertad” fue contestado por el historiador del arte Manuel Toussaint. ']; 
  var info16 = ['Juan Villoro ingresó a El Colegio Nacional el 25 de febrero de 2014. Su discurso de ingreso “Históricas pequeñeces: vertientes narrativas en la obra de Ramón López Velarde” fue contestado por el doctor Eduardo Matos Moctezuma.']; 
  var info17 = ['Ramón Xirau electo el 5 de noviembre de 1973, ingresó a El Colegio Nacional el 26 de febrero de 1974. Su conferencia inaugural “Del modernismo a la modernidad” fue contestada por el poeta y ensayista Octavio Paz.']; 
  var info18 = ['Gabriel Zaid fue miembro del consejo de la revista Vuelta (1976-1992) y de la Academia Mexicana de la Lengua (1986-2002). Está en El Colegio Nacional desde el 26 de septiembre de 1984.']; 
  var randgn = Math.floor((Math.random() * 18) + 1);
  var randquote = Math.floor((Math.random() * 2));
  var qt = eval('quotes' + randgn);
  var aw = eval('answer' + randgn);
  var inf = eval('info' + randgn);
  $('.quote-wrapper h4').text(qt[randquote]);
  $('.info-quote').text(inf[0]);
  for (var i = 0; i < 3; i++) {
    $('.options-wrapper').append('<div class="row option-wrap" data-option="' + (i + 1) + '"><div class="col-10 name-option"><span>' + aw[i] + '</span></div><div class="col-2 icon-option text-right"><i class="fas fa-check"></i></div></div>');
  }

  $('.btn-restart').on('click', function() {
    if (localStorage.errorQ >= 3 || localStorage.successQ >= 3) {
      localStorage.setItem("successQ", 0);
      localStorage.setItem("errorQ", 0);
      window.location.href = "index.html";
    }
    else{
      location.reload(true);
    }
  });

  var op = eval('success' + randgn);
  $('.option-wrap').on('click', function() {
    var option = $(this).data('option');
    var answersQ = parseInt(localStorage.getItem("answersQ"));
    var successQ = parseInt(localStorage.getItem("successQ"));
    var errorQ = parseInt(localStorage.getItem("errorQ"));
    if (option == op) {
      successQ = successQ + 1;
      checkAnswersSuccess(successQ);
      console.log(localStorage.successQ);
      if (localStorage.successQ == 1) {
        $('.answers-result i').removeClass('active');
        $('.answers-result i').first().removeClass('fa-circle');
        $('.answers-result i').first().addClass('fa-check-circle');
        $('.answers-result i').first().addClass('active');
      } else if (localStorage.successQ == 2) {
        $('.answers-result i').removeClass('active');
        $('.answers-result i').first().removeClass('fa-circle');
        $('.answers-result i').first().addClass('fa-check-circle');
        $('.answers-result i').first().addClass('active');
        $('.answers-result i:nth-child(2)').addClass('active');
        $('.answers-result i:nth-child(2)').removeClass('fa-circle');
        $('.answers-result i:nth-child(2)').addClass('fa-check-circle');
      } else if (localStorage.successQ == 3) {
        $('.answers-result i').first().removeClass('fa-circle');
        $('.answers-result i').first().addClass('fa-check-circle');
        $('.answers-result i').first().addClass('active');
        $('.answers-result i:nth-child(2)').addClass('active');
        $('.answers-result i:nth-child(2)').removeClass('fa-circle');
        $('.answers-result i:nth-child(2)').addClass('fa-check-circle');
        $('.answers-result i:nth-child(3)').addClass('active');
        $('.answers-result i:nth-child(3)').removeClass('fa-circle');
        $('.answers-result i:nth-child(3)').addClass('fa-check-circle');
        //localStorage.setItem("answersQ", 1);
        //localStorage.setItem("successQ", 0);
        //localStorage.setItem("errorQ", 0);
      }
      $(this).addClass('active');
      $('.option-wrap').css('pointer-events', 'none');
      $('.btn-restart').show();
      setTimeout(function() {
        $('.option-wrap').hide();
        $('.option-wrap.active').fadeIn();
        $('.info-quote').show();
      }, 100);
      //setTimeout(function(){ location.reload(true) }, 15000);
    } else {
      errorQ = errorQ + 1;
      checkAnswersError(errorQ);
      console.log(localStorage.errorQ);
      if (localStorage.errorQ == 1) {
        $('.answers-result i:nth-child(4)').removeClass('active');
        $('.answers-result i:nth-child(4)').addClass('error');
        $('.answers-result i:nth-child(4)').removeClass('fa-circle');
        $('.answers-result i:nth-child(4)').addClass('fa-times-circle');
      } else if (localStorage.errorQ == 2) {
        $('.answers-result i:nth-child(4)').removeClass('active');
        $('.answers-result i:nth-child(4)').addClass('error');
        $('.answers-result i:nth-child(4)').removeClass('fa-circle');
        $('.answers-result i:nth-child(4)').addClass('fa-times-circle');
        $('.answers-result i:nth-child(5)').removeClass('active');
        $('.answers-result i:nth-child(5)').addClass('error');
        $('.answers-result i:nth-child(5)').removeClass('fa-circle');
        $('.answers-result i:nth-child(5)').addClass('fa-times-circle');
      } else if (localStorage.errorQ == 3) {
        //localStorage.setItem("answersQ", 0);
        //localStorage.setItem("successQ", 0);
        //localStorage.setItem("errorQ", 0);
        //$('#price').toggle('modal');
      }
      $(this).addClass('error');
      $(this).find('i').removeClass('fa-check');
      $(this).find('i').addClass('fa-times');
      $('.option-wrap').css('pointer-events', 'none');
      $('.btn-restart').show();
      setTimeout(function() {
        $('.option-wrap').hide();
        $('.option-wrap.error').fadeIn();
        $('.info-quote').show();
      }, 100);
      //setTimeout(function(){ location.reload(true) }, 15000);
    }
  });
  // time interval for refresh
  var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
  // zero the idle timer on events
  $(this).mousedown(function(e) {
    idleTime = 0;
  });
  $(this).mouseenter(function(e) {
    idleTime = 0;
  });
  $(this).mouseleave(function(e) {
    idleTime = 0;
  });
  $(this).mousemove(function(e) {
    idleTime = 0;
  });
  $(this).mouseout(function(e) {
    idleTime = 0;
  });
  $(this).mouseover(function(e) {
    idleTime = 0;
  });
  $(this).mouseup(function(e) {
    idleTime = 0;
  });
  $(this).scroll(function(e) {
    idleTime = 0;
  });
});

function timerIncrement() {
  idleTime = idleTime + 1;
  if (idleTime > 5) { // 5 minutes
    console.log("5 minutos de inactividad la aplicacion se reiniciara");
    window.location.href = "index.html";
  }
}
