const DISTRACTOR_FORMAL = 0;
const DISTRACTOR_SEMANTICO = 1;
const DISTRACTOR_NO_RELACIONADO = 2;
const CORRECTA = 3;
const SONIDO_CONSIGNA = '/android_asset/www/audio/perro.mp3';

var niveles_palabras_aisladas_sustantivos = [ //Niveles
  [ //Nivel
    [ //Sub-nivel
      {
        'text': 'Mesa',
        'sound': '/android_asset/www/audio/mesa.mp3', 
        'wordSound' : '/android_asset/www/audio/word_mesa.mp3'
      }, 
      {
        'image': 'images/mesa.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/silla.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/maza.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/pala.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Sillon',
        'sound': '/android_asset/www/audio/sillon.mp3', 
        'wordSound' : '/android_asset/www/audio/word_sillon.mp3'
      }, 
      {
        'image': 'images/sillon.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/mesa.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/sifon.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/botella.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Cama',
        'sound': '/android_asset/www/audio/cama.mp3', 
        'wordSound' : '/android_asset/www/audio/word_cama.mp3'
      }, 
      {
        'image': 'images/cama.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/sofa.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/capa.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/camisa.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Heladera',
        'sound': '/android_asset/www/audio/heladera.mp3', 
        'wordSound' : '/android_asset/www/audio/word_heladera.mp3'
      }, 
      {
        'image': 'images/heladera.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/lavarropas.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/bandera.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/escudo.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Televisor',
        'sound': '/android_asset/www/audio/televisor.mp3', 
        'wordSound' : '/android_asset/www/audio/word_televisor.mp3'
      }, 
      {
        'image': 'images/televisor.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/computadora.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/televisores.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/computadoras.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Ropero',
        'sound': '/android_asset/www/audio/ropero.mp3', 
        'wordSound' : '/android_asset/www/audio/word_ropero.mp3'
      }, 
      {
        'image': 'images/ropero.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/biblioteca.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/roperos.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/bibliotecas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Perro',
        'sound': '/android_asset/www/audio/perro.mp3', 
        'wordSound' : '/android_asset/www/audio/word_perro.mp3'
      }, 
      {
        'image': 'images/perro.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/gato.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/cerro.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/lago.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Caballo',
        'sound': '/android_asset/www/audio/caballo.mp3', 
        'wordSound' : '/android_asset/www/audio/word_caballo.mp3'
      }, 
      {
        'image': 'images/caballo.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/cebra.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/zapallo.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/papa.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Loro',
        'sound': '/android_asset/www/audio/loro.mp3', 
        'wordSound' : '/android_asset/www/audio/word_loro.mp3'
      }, 
      {
        'image': 'images/loro.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pajaro.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/coro.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/organo.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Gallo',
        'sound': '/android_asset/www/audio/gallo.mp3', 
        'wordSound' : '/android_asset/www/audio/word_gallo.mp3'
      }, 
      {
        'image': 'images/gallo.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/gallina.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/tallo.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/flor.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Rana',
        'sound': '/android_asset/www/audio/rana.mp3', 
        'wordSound' : '/android_asset/www/audio/word_rana.mp3'
      }, 
      {
        'image': 'images/rana.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/lagartija.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/rama.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/hoja.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Mosca',
        'sound': '/android_asset/www/audio/mosca.mp3', 
        'wordSound' : '/android_asset/www/audio/word_mosca.mp3'
      }, 
      {
        'image': 'images/mosca.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/mosquito.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/moscas.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/mosquitos.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Hormiga',
        'sound': '/android_asset/www/audio/hormiga.mp3', 
        'wordSound' : '/android_asset/www/audio/word_hormiga.mp3'
      }, 
      {
        'image': 'images/hormiga.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/arana.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/hormigas.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/aranas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Camisa',
        'sound': '/android_asset/www/audio/camisa.mp3', 
        'wordSound' : '/android_asset/www/audio/word_camisa.mp3'
      }, 
      {
        'image': 'images/camisa.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pantalon.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/camilla.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/estetoscopio.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Remera',
        'sound': '/android_asset/www/audio/remera.mp3', 
        'wordSound' : '/android_asset/www/audio/word_remera.mp3'
      }, 
      {
        'image': 'images/remera.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pulover.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/madera.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/metal.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Bota',
        'sound': '/android_asset/www/audio/bota.mp3', 
        'wordSound' : '/android_asset/www/audio/word_bota.mp3'
      }, 
      {
        'image': 'images/bota.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/zapato.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/gota.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/nube.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'capa',
        'sound': '/android_asset/www/audio/capa.mp3', 
        'wordSound' : '/android_asset/www/audio/word_capa.mp3'
      }, 
      {
        'image': 'images/capa.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/vestido.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/casa.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/hospital.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Gorro',
        'sound': '/android_asset/www/audio/gorro.mp3', 
        'wordSound' : '/android_asset/www/audio/word_gorro.mp3'
      }, 
      {
        'image': 'images/gorro.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/bufanda.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/zorro.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/conejo.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Media',
        'sound': '/android_asset/www/audio/media.mp3', 
        'wordSound' : '/android_asset/www/audio/word_media.mp3'
      }, 
      {
        'image': 'images/media.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/guante.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/medias.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/guantes.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Corbata',
        'sound': '/android_asset/www/audio/corbata.mp3', 
        'wordSound' : '/android_asset/www/audio/word_corbata.mp3'
      }, 
      {
        'image': 'images/corbata.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/gargantilla.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/corbatas.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/gargantillas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Taza',
        'sound': '/android_asset/www/audio/taza.mp3', 
        'wordSound' : '/android_asset/www/audio/word_taza.mp3'
      }, 
      {
        'image': 'images/taza.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/vaso.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/casa.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/carpa.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Pala',
        'sound': '/android_asset/www/audio/pala.mp3', 
        'wordSound' : '/android_asset/www/audio/word_pala.mp3'
      }, 
      {
        'image': 'images/pala.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/rastrillo.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/bala.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/revolver.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Martillo',
        'sound': '/android_asset/www/audio/martillo.mp3', 
        'wordSound' : '/android_asset/www/audio/word_martillo.mp3'
      }, 
      {
        'image': 'images/martillo.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pinza.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/castillo.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/hospital.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Tijera',
        'sound': '/android_asset/www/audio/tijera.mp3', 
        'wordSound' : '/android_asset/www/audio/word_tijera.mp3'
      }, 
      {
        'image': 'images/tijera.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/aguja.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/tijeras.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/agujas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Cuchillo',
        'sound': '/android_asset/www/audio/cuchillo.mp3', 
        'wordSound' : '/android_asset/www/audio/word_cuchillo.mp3'
      }, 
      {
        'image': 'images/cuchillo.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/tenedor.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/cuchillos.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/tenedores.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Mano',
        'sound': '/android_asset/www/audio/mano.mp3', 
        'wordSound' : '/android_asset/www/audio/word_mano.mp3'
      }, 
      {
        'image': 'images/mano.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pie.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/mono.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/loro.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Boca',
        'sound': '/android_asset/www/audio/boca.mp3', 
        'wordSound' : '/android_asset/www/audio/word_boca.mp3'
      }, 
      {
        'image': 'images/boca.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/nariz.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/bola.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/sota.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Pecho',
        'sound': '/android_asset/www/audio/pecho.mp3', 
        'wordSound' : '/android_asset/www/audio/word_pecho.mp3'
      }, 
      {
        'image': 'images/pecho.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/espalda.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/techo.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/ventana.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Brazo',
        'sound': '/android_asset/www/audio/brazo.mp3', 
        'wordSound' : '/android_asset/www/audio/word_brazo.mp3'
      }, 
      {
        'image': 'images/brazo.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pierna.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/vaso.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/taza.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Cabeza',
        'sound': '/android_asset/www/audio/cabeza.mp3', 
        'wordSound' : '/android_asset/www/audio/word_cabeza.mp3'
      }, 
      {
        'image': 'images/cabeza.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/cuello.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/cabezas.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/cuellos.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Ojo',
        'sound': '/android_asset/www/audio/ojo.mp3', 
        'wordSound' : '/android_asset/www/audio/word_ojo.mp3'
      }, 
      {
        'image': 'images/ojo.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/oreja.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/ojos.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/orejas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Uva',
        'sound': '/android_asset/www/audio/uva.mp3', 
        'wordSound' : '/android_asset/www/audio/word_uva.mp3'
      }, 
      {
        'image': 'images/uva.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/ciruela.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/una.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/mano.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Limon',
        'sound': '/android_asset/www/audio/limon.mp3', 
        'wordSound' : '/android_asset/www/audio/word_limon.mp3'
      }, 
      {
        'image': 'images/limon.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/pomelo.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/timon.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/barco.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Lechuga',
        'sound': '/android_asset/www/audio/lechuga.mp3', 
        'wordSound' : '/android_asset/www/audio/word_lechuga.mp3'
      }, 
      {
        'image': 'images/lechuga.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/acelga.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/lechuza.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/pajaro.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Papa',
        'sound': '/android_asset/www/audio/papa.mp3', 
        'wordSound' : '/android_asset/www/audio/word_papa.mp3'
      }, 
      {
        'image': 'images/papa.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/zapallo.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/mapa.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/globoterraqueo.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Mandarina',
        'sound': '/android_asset/www/audio/mandarina.mp3', 
        'wordSound' : '/android_asset/www/audio/word_mandarina.mp3'
      }, 
      {
        'image': 'images/mandarina.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/naranja.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/mandarinas.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/naranjas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [//Sub-nivel
      {
        'text': 'Manzana',
        'sound': '/android_asset/www/audio/manzana.mp3', 
        'wordSound' : '/android_asset/www/audio/word_manzana.mp3'
      }, 
      {
        'image': 'images/manzana.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/banana.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/manzanas.jpg', 
        'points':20, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/bananas.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ]
  ]
];


var niveles_palabras_aisladas_verbos	 	= [ //Niveles
  [ //Nivel
    [ //Sub-nivel
     {
      'text': 'Perro',
      'sound': '/android_asset/www/audio/streak_1-1.mp3',
      'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      },
      {
        'image': 'images/perro.jpg', 
        'points':100, 
        'type': CORRECTA
      },
      {
        'image': 'images/dog2.jpg', 
        'points':0, 
        'type': DISTRACTOR_FORMAL
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Copa',
        'sound': '/android_asset/www/audio/streak_1-1.mp3',
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      },
      {
        'image': 'images/italia90header.jpg', 
        'points':0, 
        'type': DISTRACTOR_SEMANTICO
      }, 
      {
        'image': 'images/youwin.jpg', 
        'points':100, 
        'type':CORRECTA
      }
    ],
  ],
  [ //Nivel
    [//Sub-nivel
      {
        'text':'Plaza',
        'sound': '/android_asset/www/audio/streak_1-1.mp3',
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/plaza.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/correct.jpg', 
        'points':0, 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ]
  ]      
];

var niveles_palabras_contexto_sustantivos 	= [ //Niveles
  [ //Nivel
    [ //Sub-nivel
      {
        'text': 'Perro',
        'sound': '/android_asset/www/audio/perro.mp3', 
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/dog2.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/gato.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/rabbit.jpg', 
        'points':20, 
        'type': DISTRACTOR_SEMANTICO
      }, 
      {
        'image': 'images/arbol.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Copa',
        'sound': '/android_asset/www/audio/streak_1-1.mp3', 
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/italia90header.jpg', 
        'points':0, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/youwin.jpg', 
        'points':100, 
        'type': CORRECTA
      }
    ],
  ],
  [ //Nivel
    [//Sub-nivel
      {
        'text': 'Plaza',
        'sound': '/android_asset/www/audio/streak_1-1.mp3', 
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/plaza.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/correct.jpg', 
        'points':10, 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ]
  ],
  [ //Nivel
    [//Sub-nivel
     {
      'text': 'Plaza' , 
      'sound': '/android_asset/www/audio/streak_1-1.mp3', 
      'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
    }, 
    {
      'image': 'images/plaza.jpg', 
      'points':100, 
      'type': CORRECTA
    }, 
    {
      'image': 'images/perro.jpg', 
      'points':10, 
      'type': DISTRACTOR_NO_RELACIONADO
    }
    ]
  ]              
];


var niveles_palabras_contexto_verbos	 	= [ //Niveles
  [ //Nivel
    [ //Sub-nivel
      {
        'text': 'Perro',
        'sound': '/android_asset/www/audio/perro.mp3', 
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/dog2.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/gato.jpg', 
        'points':50, 
        'type': DISTRACTOR_SEMANTICO
      },
      {
        'image': 'images/rabbit.jpg', 
        'points':20, 
        'type': DISTRACTOR_SEMANTICO
      }, 
      {
        'image': 'images/arbol.jpg', 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Copa',
        'sound': '/android_asset/www/audio/streak_1-1.mp3',
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/italia90header.jpg', 
        'points':0, 
        'type': DISTRACTOR_FORMAL
      }, 
      {
        'image': 'images/youwin.jpg', 
        'points':100, 
        'type': CORRECTA
      }
    ],
  ],
  [ //Nivel
    [//Sub-nivel
      {
        'text': 'Plaza',
        'sound': '/android_asset/www/audio/streak_1-1.mp3', 
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/plaza.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/correct.jpg', 
        'points':10, 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ]
  ],
  [ //Nivel
    [//Sub-nivel
      {
        'text': 'Plaza' , 
        'sound': '/android_asset/www/audio/streak_1-1.mp3', 
        'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'
      }, 
      {
        'image': 'images/plaza.jpg', 
        'points':100, 
        'type': CORRECTA
      }, 
      {
        'image': 'images/perro.jpg', 
        'points':10, 
        'type': DISTRACTOR_NO_RELACIONADO
      }
    ]
  ]
];
