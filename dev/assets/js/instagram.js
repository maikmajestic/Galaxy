var idleTime = 0;
$(document).ready(function() {
  $('.back-i').on('click', function() {
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
  $('.like').on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('fas');
      $(this).addClass('far');
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).removeClass('far');
      $(this).addClass('fas');
    }
  });
  var profileName = ['cardiologia'];
  $('.photo-link').on('click', function() {
    var nameProfile = $(this).data('profile');
    var imgProfile = $(this).data('profimage');
    var img = $(this).find('img').attr('src');
    var url = $(this).attr('href', 'photo.html?ph=' + img + '&name=' + nameProfile + '&pi=' + imgProfile);
    window.location.replace(url);
  });
  try {
    var imgUrl = getUrlParameter('ph');
    var nameProf = getUrlParameter('name');
    var imgProf = getUrlParameter('pi');
    $('.photo-profile img').attr('src', imgUrl);
    $('.img-photo img').attr('src', imgProf);
    $('.name-profile-photo').text(nameProf);
  } catch (err) {

  }
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
	$(this).scroll(function(e){
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
