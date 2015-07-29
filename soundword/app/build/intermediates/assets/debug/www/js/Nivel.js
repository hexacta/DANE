
function Nivel (text, sound, correctSound, opciones, totalLevels){
	this.tipo_elegido = -1;
	this.puntuado = false;
	this.audio = sound;
	this.opciones = opciones;
	this.texto = text
	this.audioCorrecto = correctSound;
	this.totalLevels = totalLevels;
};

Nivel.prototype.jugarInstancia = function(){
	//Se mezclan las opciones, y muestran. 
	this.opciones = shuffle(this.opciones);
	for (var i = 0; i < this.opciones.length;i++){
		this.opciones[i].mostrar(this, i);
	}
	if(this.opciones.length > 2){
		$('.btn-audio').removeClass('btn-audio-2');
		$('.btn-audio').addClass('btn-audio-4');
	}
	else{
		$('.btn-audio').removeClass('btn-audio-4');
		$('.btn-audio').addClass('btn-audio-2');		
	}
	
	ejecutarAudio(this.audio);
	this.puntuado = false;
	
	//seteo el audio del nivel en el boton
	$('#boton_sonido').attr('onclick', 'ejecutarAudio("'+this.audio+ '")');
};

Nivel.prototype.getPrimerSeleccionado = function(){
	return this.tipo_elegido;
};

Nivel.prototype.seleccionado = function (correcto,tipo){

	//Si no fue puntuado ya este nivel, me quedo con ese puntaje.
	if (!this.puntuado){
		this.puntuado = true;
		this.tipo_elegido = tipo;
		if (tipo == CORRECTA){
             var soFar = $( "#progressbar" ).progressbar( "option", "value" );
             $( "#progressbar" ).progressbar("option", "value", soFar + 100.0 / this.totalLevels );
		}
	}
	
	if (correcto){
		permitirCambio(this.texto, this.audioCorrecto);
	}
};