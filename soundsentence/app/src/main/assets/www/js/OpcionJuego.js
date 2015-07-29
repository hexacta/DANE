var observador = null;


function OpcionJuego(imagen,  correcta){
	this.imagen = imagen;
	this.es_correcta = correcta;
}

OpcionJuego.prototype.mostrar = function(avisar, index){
	observador = avisar;
	
	var creadorImg = "<div class='item'><div class='content-image'><img src='"+this.imagen+"' style=\"height:auto; width:auto; max-width:320px; max-height:300px; z-index:0\" onclick=\"";
	if (this.es_correcta){
		creadorImg += "opcionCorrecta()\"/></div></div>";
	}else{
		creadorImg += "opcionIncorrecta(" + this.tipo + ");init(this);rattleimage(true)\" class=\"shakeimage\"/></div></div>";
	}
	
	var img = $(creadorImg );
	$("#imagenes_juego_" + index % 2).append(img);
}

OpcionJuego.prototype.esCorrecta = function (){
	return this.es_correcta;
}

opcionCorrecta = function(){
	observador.seleccionado(true);
}

opcionIncorrecta = function(tipo){
	observador.seleccionado(false);
}


/*
Shake image script (onMouseover)- 
© Dynamic Drive (www.dynamicdrive.com)
For full source code, usage terms, and 100's more DHTML scripts, visit http://dynamicdrive.com
*/

//configure shake degree (where larger # equals greater shake)
const REPETICIONES = 40;

var rector=3;

///////DONE EDITTING///////////

var turno = 1;

var rep = 0;

function init(which){
	shake=which;
	shake.style.left=0;
	shake.style.top=0;
}

function rattleimage(primero){
	if (primero)
		rep = 0;
	
	if ((!document.all&&!document.getElementById) || rep == REPETICIONES)
		return;
 	
	switch (turno){
	case 1:
		shake.style.top=parseInt(shake.style.top)+rector+"px";
		break;
	case 2:
		shake.style.left=parseInt(shake.style.left)+rector+"px";
		break;
	case 3:
		shake.style.top=parseInt(shake.style.top)-rector+"px";
		break;
	case 4:
		shake.style.left=parseInt(shake.style.left)-rector+"px";
		break;
	}
	
	turno = (turno % 4) + 1;
	
	rep++;
	setTimeout("rattleimage(false)",10);

}
