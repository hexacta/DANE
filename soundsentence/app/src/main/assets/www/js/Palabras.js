const FIN_NIVEL = true;

function Palabras(){
	this.correctas = 0;
	this.incorrectas = 0;
	this.niveles = [];
	this.nivelActual = 0;
	this.subnivelActual = 0;
}

Palabras.prototype.agregarNivel = function (level){
	this.niveles.push(level);
};

Palabras.prototype.cantidadNiveles = function(){
	return this.niveles.length;
};

Palabras.prototype.jugar_nivel = function(num_nivel){
	//Se limpia la pantalla del juego, se mezclan los subniveles
	//y se juega el primer subnivel.
	var level = this.niveles[num_nivel];
	
	this.correctas = 0;
	this.incorrectas = 0;
	level = shuffle(level);
	var subnivel = level[0];
	this.subnivelActual = 0;
	this.nivelActual = num_nivel;
	subnivel.jugarInstancia();
	
};

Palabras.prototype.cambiarSubnivel = function(){
	//actualizamos el puntaje, y vamos al siguiente subnivel.
	var level = this.niveles[this.nivelActual];
	var sublevel = level[this.subnivelActual];
	if (sublevel.fueCorrecto()){
		this.correctas++;
	}else{
		this.incorrectas++;
	}

	this.subnivelActual++;
	if (this.subnivelActual < level.length){
		sublevel = level[this.subnivelActual];
		sublevel.jugarInstancia();
		return !FIN_NIVEL
	}else{
		return FIN_NIVEL;
	}
};

Palabras.prototype.getPuntaje = function(){
	return [this.correctas, this.incorrectas];
};