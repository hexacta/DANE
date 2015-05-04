const DISTRACTOR_FORMAL = 0;
const DISTRACTOR_SEMANTICO = 1;
const DISTRACTOR_NO_RELACIONADO = 2;
const CORRECTA = 3;
const SONIDO_CONSIGNA = '/android_asset/www/audio/perro.mp3';

var niveles_palabras_aisladas_sustantivos 	= [ //Niveles
                                              [ //Nivel
                                                [ //Sub-nivel
                                                 {'text': 'Perro','sound': '/android_asset/www/audio/perro.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/dog2.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/gato.jpg', 'points':50, 'type': DISTRACTOR_SEMANTICO},{'image': 'images/rabbit.jpg', 'points':20, 'type': DISTRACTOR_SEMANTICO}, {'image': 'images/arbol.jpg', 'type': DISTRACTOR_NO_RELACIONADO}
                                                ],
                                                [ //Sub-nivel
                                                  {'text': 'Copa','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/italia90header.jpg', 'points':0, 'type': DISTRACTOR_FORMAL}, {'image': 'images/youwin.jpg', 'points':100, 'type': CORRECTA}
                                                ],
                                              ],
                                              [ //Nivel
                                                [//Sub-nivel
                                                 {'text': 'Plaza','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/correct.jpg', 'points':10, 'type': DISTRACTOR_NO_RELACIONADO}
                                                ]
                                              ],
                                              [ //Nivel
                                                [//Sub-nivel
                                                 {'text': 'Plaza' , 'sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/perro.jpg', 'points':10, 'type': DISTRACTOR_NO_RELACIONADO}
                                                ]
                                              ]
            
];


var niveles_palabras_aisladas_verbos	 	= [ //Niveles
                                              [ //Nivel
                                                [ //Sub-nivel
                                                 {'text': 'Perro','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/perro.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/dog2.jpg', 'points':0, 'type': DISTRACTOR_FORMAL}
                                                ],
                                                [ //Sub-nivel
                                                  {'text': 'Copa','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/italia90header.jpg', 'points':0, 'type': DISTRACTOR_SEMANTICO}, {'image': 'images/youwin.jpg', 'points':100, 'type':CORRECTA}
                                                ],
                                              ],
                                              [ //Nivel
                                                [//Sub-nivel
                                                 {'text':'Plaza','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/correct.jpg', 'points':0, 'type': DISTRACTOR_NO_RELACIONADO}
                                                ]
                                              ]
            
];

var niveles_palabras_contexto_sustantivos 	= [ //Niveles
                                                [ //Nivel
                                                  [ //Sub-nivel
                                                   {'text': 'Perro','sound': '/android_asset/www/audio/perro.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/dog2.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/gato.jpg', 'points':50, 'type': DISTRACTOR_SEMANTICO},{'image': 'images/rabbit.jpg', 'points':20, 'type': DISTRACTOR_SEMANTICO}, {'image': 'images/arbol.jpg', 'type': DISTRACTOR_NO_RELACIONADO}
                                                  ],
                                                  [ //Sub-nivel
                                                    {'text': 'Copa','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/italia90header.jpg', 'points':0, 'type': DISTRACTOR_FORMAL}, {'image': 'images/youwin.jpg', 'points':100, 'type': CORRECTA}
                                                  ],
                                                ],
                                                [ //Nivel
                                                  [//Sub-nivel
                                                   {'text': 'Plaza','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/correct.jpg', 'points':10, 'type': DISTRACTOR_NO_RELACIONADO}
                                                  ]
                                                ],
                                                [ //Nivel
                                                  [//Sub-nivel
                                                   {'text': 'Plaza' , 'sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/perro.jpg', 'points':10, 'type': DISTRACTOR_NO_RELACIONADO}
                                                  ]
                                                ]
              
  ];


var niveles_palabras_contexto_verbos	 	= [ //Niveles
                                                [ //Nivel
                                                  [ //Sub-nivel
                                                   {'text': 'Perro','sound': '/android_asset/www/audio/perro.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/dog2.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/gato.jpg', 'points':50, 'type': DISTRACTOR_SEMANTICO},{'image': 'images/rabbit.jpg', 'points':20, 'type': DISTRACTOR_SEMANTICO}, {'image': 'images/arbol.jpg', 'type': DISTRACTOR_NO_RELACIONADO}
                                                  ],
                                                  [ //Sub-nivel
                                                    {'text': 'Copa','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/italia90header.jpg', 'points':0, 'type': DISTRACTOR_FORMAL}, {'image': 'images/youwin.jpg', 'points':100, 'type': CORRECTA}
                                                  ],
                                                ],
                                                [ //Nivel
                                                  [//Sub-nivel
                                                   {'text': 'Plaza','sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/correct.jpg', 'points':10, 'type': DISTRACTOR_NO_RELACIONADO}
                                                  ]
                                                ],
                                                [ //Nivel
                                                  [//Sub-nivel
                                                   {'text': 'Plaza' , 'sound': '/android_asset/www/audio/streak_1-1.mp3', 'wordSound' : '/android_asset/www/audio/streak_1-4.mp3'}, {'image': 'images/plaza.jpg', 'points':100, 'type': CORRECTA}, {'image': 'images/perro.jpg', 'points':10, 'type': DISTRACTOR_NO_RELACIONADO}
                                                  ]
                                                ]
              
  ];
