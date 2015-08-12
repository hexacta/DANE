var palabras_aisladas_sustantivos = new Palabras();
var palabras_aisladas_verbos = new Palabras();
var palabras_contexto_sustantivos = new Palabras();
var palabras_contexto_verbos = new Palabras();
var actual = null;

const COSAS = 'cosas';
const ACCIONES = 'acciones';
const AISLADA = 'aislada';
const CONTEXTO = 'contexto';
const CAMBIAR_PANTALLA = true;

var anterior;
var my_media;
var sonido_activado = true;
var timeout_change = 5000;

function crear_nivel(conf_nivel){
	var subniveles = [];
	for (var i = 0; i < conf_nivel.length; i++){
		var sonido = conf_nivel[i][0].sound;
		var correctSound = conf_nivel[i][0].wordSound;
		var texto = conf_nivel[i][0].text;
		var opciones = [];
		var alguna_correcta = false;
		for (var j = 1; j < conf_nivel[i].length;j++){
			var conf = conf_nivel[i][j];
			alguna_correcta = alguna_correcta || (conf.type == CORRECTA);
			var op = new OpcionJuego(conf.image, conf.type);
			opciones.push(op);
		}
		if (alguna_correcta){
			var nivel = new Nivel(texto,sonido,correctSound ,opciones, conf_nivel.length);
			subniveles.push(nivel);
		}else{
			alert('Mal configurado un subnivel. No tiene opcion correcta');
		}
	}
	return subniveles;
}

function cargar(palabras, niveles){
	var cantidad_niveles = niveles.length;
	
	for (var i = 0; i < cantidad_niveles; i++){
		var nivel = crear_nivel(niveles[i]);
		palabras.agregarNivel(nivel);
	}	
}


function createWords(){
	//Al iniciar el juego se cargan los niveles para los distintos modos
	cargar(palabras_aisladas_sustantivos, niveles_palabras_aisladas_sustantivos);
	cargar(palabras_aisladas_verbos, niveles_palabras_aisladas_verbos);
	cargar(palabras_contexto_sustantivos, niveles_palabras_aisladas_sustantivos);
	cargar(palabras_contexto_verbos, niveles_palabras_contexto_verbos);
	tipos_opciones_elegidas = [];
}

function mostrarBotones(palabras, tipo, ais_ctx){
	//Se agregan los botones a la seccion, para elegir entre los distintos niveles de sustantivos/verbos.
	var cant_botones = palabras.cantidadNiveles();
	for (var i = 0; i < cant_botones ;i++){
		//var boton = $("<a href='#' data-role='button' data-inline='true' onclick=\"iniciarJuego('"+tipo+"','"+ais_ctx+"',"+i+")\">EJERCICIO "+(i+1)+"</a>");
		var boton = $("<li><a class='bt bt-small default' href='#' onclick=\"iniciarJuego('"+tipo+"','"+ais_ctx+"',"+i+")\">EJERCICIO " + (i+1) + "</a></li>");

		$("#"+tipo).append(boton);
		//boton.button();
	}
}

function goToSelectLevel(valor){
	//Se limpia la seleccion, y se manda a agregar los botones dependiendo de si fue elegido por
	//palabras aisladas o en contexto.`
	$('#'+COSAS).empty();
	$('#'+ACCIONES).empty();
	if (valor == AISLADA){
		mostrarBotones(palabras_aisladas_sustantivos, COSAS , AISLADA);
		mostrarBotones(palabras_aisladas_verbos, ACCIONES, AISLADA);
		anterior = AISLADA;
	} else if( valor == CONTEXTO){
		mostrarBotones(palabras_contexto_sustantivos, COSAS, CONTEXTO);
		mostrarBotones(palabras_contexto_verbos, ACCIONES, CONTEXTO);
		anterior = CONTEXTO;
	}else{
		goToSelectLevel(anterior);
		return;
	}
	$.mobile.changePage('#select_type_level', {});
}

function iniciarJuego(tipo, ais_ctx, nivel){
    $( "#progressbar" ).progressbar({value: 0});
	$.mobile.changePage('#juego');
	$('#imagenes_juego_0').empty();
	$('#imagenes_juego_1').empty();
	sonido_activado = true;
	if(tipo == COSAS){
		if (ais_ctx == AISLADA){
			palabras_aisladas_sustantivos.jugar_nivel(nivel);
			actual = palabras_aisladas_sustantivos;
		}else{
			palabras_contexto_sustantivos.jugar_nivel(nivel);
			actual = palabras_contexto_sustantivos;
		}
	}else{
		if (ais_ctx == AISLADA){
			palabras_aisladas_verbos.jugar_nivel(nivel);
			actual = palabras_aisladas_verbos;
		}else{
			palabras_contexto_verbos.jugar_nivel(nivel);
			actual = palabras_contexto_verbos;
		}
	}
}

function shuffle(vector){ 
    for(var j, x, i = vector.length; i; j = Math.floor(Math.random() * i), x = vector[--i], vector[i] = vector[j], vector[j] = x);
    return vector;
};

var total_elecciones = [0,0,0,0];
function llamarCambio(){
	$('#imagenes_juego_0').empty();
	$('#imagenes_juego_1').empty();
	var cambio = actual.cambiarSubnivel();
	if (cambio == FIN_NIVEL){
		var tipos_opciones_elegidas = actual.getElecciones();
		for (var i = 0; i < tipos_opciones_elegidas.length; i++){
		    total_elecciones[i] += tipos_opciones_elegidas[i];
		}
		var incorrectas = total_elecciones[DISTRACTOR_FORMAL] + total_elecciones[DISTRACTOR_SEMANTICO] + total_elecciones[DISTRACTOR_NO_RELACIONADO];
		var total = total_elecciones[CORRECTA] + incorrectas;
		$('#correctas').empty();
		$('#incorrectas').empty();
		$('#inc_formal').empty();
		$('#inc_semantico').empty();
		$('#inc_no_relacionado').empty();
		$('#correctas').append("<td><img src='images/check1.png' alt='check'/></td><td>RESPUESTAS CORRECTAS<td><td class='right'>" + total_elecciones[CORRECTA] + "/" + total + " (" + parseFloat((total_elecciones[CORRECTA] * 100 / total).toPrecision(2)) + "%)</td>");
		$('#incorrectas').append("<td><img src='images/check2.png' alt='check'/></td><td>RESPUESTAS INCORRECTAS<td><td class='wrong'>" +incorrectas + "/" + total + " (" + parseFloat((incorrectas * 100 / total).toPrecision(2)) + "%)</td>");
		$('#inc_formal').append("<td>DISTRACTORES <b>FORMALES</b></td><td class='wrong'><span class='distractor result'>"+  total_elecciones[DISTRACTOR_FORMAL]  + "/" + total + " (" + parseFloat((total_elecciones[DISTRACTOR_FORMAL] * 100 / total).toPrecision(2)) + "%)</span></td>");
		$('#inc_semantico').append("<td>DISTRACTORES <b>SEM&Aacute;NTICOS</b></td><td class='wrong'><span class='distractor result'>"+  total_elecciones[DISTRACTOR_SEMANTICO]  + "/" + total + "(" + parseFloat((total_elecciones[DISTRACTOR_SEMANTICO] * 100 / total).toPrecision(2)) + "%)</span></td>");
		$('#inc_no_relacionado').append("<td>DISTRACTORES <b>NO RELACIONADOS</b></td><td class='wrong'><span class='distractor result'>"+  total_elecciones[DISTRACTOR_NO_RELACIONADO]  + "/" + total + " (" + parseFloat((total_elecciones[DISTRACTOR_NO_RELACIONADO] * 100 / total).toPrecision(2)) + "%)</span></td>");
		$.mobile.changePage('#select_category');
	}
}

function ejecutarAudio(audio){
	ejecutarAudio(audio, !CAMBIAR_PANTALLA);
}

function permitirCambio(texto, sonidoCorrecto){
	var modal = "<div class='modal'><div class='content-modal'><div class='modal-option-result'><img src='images/check.png' alt='resultado correcto' /><div class='result'><p>Respuesta correcta</p><span>" + texto + "</span></div></div></div></div>";
	$("#modalcorrect").append(modal);

	ejecutarAudio(sonidoCorrecto);
	setTimeout(function(){
	    llamarCambio();
	    $("#modalcorrect").empty();
    }, timeout_change);
}

function ejecutarAudio(audio, cambio){
	if (!sonido_activado) return;
	sonido_activado = false;
	try{
		my_media = new Media(audio, function(){
		    sonido_activado = true;
		});
		my_media.play();	
	}catch(e){
		//No estoy en un dispositivo:
		alert('No estoy en un dispositivo. Quiero ejecutar ' + audio);
	}
}

function escucharConsigna(){
	ejecutarAudio(SONIDO_CONSIGNA);
}