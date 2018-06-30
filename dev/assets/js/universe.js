/*

// set up text to print, each item in array is new line
var aText = new Array(
"En 1950 Guillermo Haro descubrió un nuevo tipo de nebulosas cósmicas con un espectro muy peculiar al analizar placas fotográficas obtenidas con la cámara Schmidt del observatorio de Tonantzintla. Estas nebulosas se forman por la interacción entre el gas expulsado por la estrella central con nubes de material gaseoso y polvo interestelar colisionando a velocidades de varios cientos de kilómetros por segundo ionizando el gas. El resultado son unos objetos muy brillantes y vistosos de muy corta vida (unos cuantos miles de años) y conocidos como Objetos Herbig-Haro. "
);
var iSpeed = 25; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriterm80()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriterm80()", 500);
  }
 } else {
  setTimeout("typewriterm80()", iSpeed);
 }
}

function m80(){
	var x = document.getElementsByClassName("m80-info-wrapper");
	console.log(x[0].style.display);
    if (x[0].style.display == "none") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}
<<<<<<< HEAD
function h11(){
  var y = document.getElementsByClassName("lele-info-wrapper");
  console.log(y[0].style.display);
    if (y[0].style.display == "none") {
        y[0].style.display = "block";
    } else {
        y[0].style.display = "none";
    }
}
=======
*/

$('.object').on('click', function(){
  var description = $('.description-wrap', this);
  $('.description-wrap').hide();
  description.show();
});
