if(Docentes.find({}).count() === 0) {
  docentes = [
    {
      "nombres":"CALVO FARFAN MARIA CONCEPCION",
      "dni":31520133,
      "ieId":""
    },
    {
      "nombres":"SALAS PACHECO DE PALOMI MARIA ROSENDA",
      "dni":23831190,
      "ieId":""
    },
    {
      "nombres":"TAMAYO VALDEIGLESIAS LUCIO DARIO",
      "dni":23914284,
      "ieId":""
    },
    {
      "nombres":"ABRILL VARGAS ROSA VICTORIA",
      "dni":23925850,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"BEINGOLEA VEGA MARIA SALOME",
      "dni":23874968,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"CAILLAUX PEÑA DE CASTIL MARLENY",
      "dni":23879712,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"CORDOVA CORNEJO DE MONT NILA",
      "dni":23817449,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"ECHEGARAY DE ARBULU ZONIA",
      "dni":23806871,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"FUENTES COLLADO ROCIO",
      "dni":24668942,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"GUTIERREZ GAYOSO GLORIA",
      "dni":23899864,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"LOAIZA COSIO LIDA",
      "dni":23870421,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"MIRANDA TARRAGA DE LOAI EVANGELINA",
      "dni":23878547,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"OJEDA ROSAS CATHERINE",
      "dni":23853369,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"TISOC DUEÑAS YANET TOMASA",
      "dni":23930186,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"VITORINO VARGAS VICTORIA",
      "dni":23831556,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"VIVANCO GIBAJA ELISA POCHA",
      "dni":23943159,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"VIZCARRA MALDONADO DE D JESUS EDUVIGES",
      "dni":23813037,
      "ieId":"XchpgTwv4gHPs2bYe"
    },
    {
      "nombres":"DALGUER VASQUEZ RUTH YANET",
      "dni":23847448,
      "ieId":""
    },
    {
      "nombres":"HURTADO ARANA ROCIO",
      "dni":23839867,
      "ieId":""
    },
    {
      "nombres":"ORDU-A PAREDES NILZA",
      "dni":23854066,
      "ieId":""
    },
    {
      "nombres":"PILCO QUICO ROSA VICTORIA",
      "dni":41555217,
      "ieId":""
    },
    {
      "nombres":"SERRUDO CHOQUE VICTORIA",
      "dni":23885247,
      "ieId":""
    },
    {
      "nombres":"VARGAS JUAREZ ANA MARIA",
      "dni":23809738,
      "ieId":""
    },
    {
      "nombres":"BONETT DELGADO MIGUELINA YOVANNA",
      "dni":23807236,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ESPINOZA HILDA LUZMILA",
      "dni":23962378,
      "ieId":""
    },
    {
      "nombres":"DIAZ CHAHUA AYDEE FANNY",
      "dni":31032004,
      "ieId":""
    },
    {
      "nombres":"DORADO RIVERA MAGDA JUANA",
      "dni":23823470,
      "ieId":""
    },
    {
      "nombres":"LEZAMA GUZMAN ASUNTA",
      "dni":24003298,
      "ieId":""
    },
    {
      "nombres":"OSORIO CANO MARTHA",
      "dni":23808956,
      "ieId":""
    },
    {
      "nombres":"TAGLE CASTILLO LILIANA",
      "dni":23814810,
      "ieId":""
    },
    {
      "nombres":"RIOS BERNEDO MARIA ELENA",
      "dni":25311937,
      "ieId":""
    },
    {
      "nombres":"CONCHA MARTINEZ NELLY ROXANA",
      "dni":23979240,
      "ieId":""
    },
    {
      "nombres":"ELORRIETA CARBAJAL JESSICA",
      "dni":23979010,
      "ieId":""
    },
    {
      "nombres":"PABON CAMPANA JESSICA",
      "dni":23962806,
      "ieId":""
    },
    {
      "nombres":"TELLO DE WIESSE LUZ MARIA",
      "dni":23806511,
      "ieId":""
    },
    {
      "nombres":"VALENCIA FARFAN KATIA",
      "dni":23821724,
      "ieId":""
    },
    {
      "nombres":"CANAL VILLAFUERTE MELVIN",
      "dni":23822517,
      "ieId":""
    },
    {
      "nombres":"PILCO QUICO MIRIAM LUCY",
      "dni":41655899,
      "ieId":""
    },
    {
      "nombres":"CACERES ATAYUPANQUI DE DAMIANA",
      "dni":23918754,
      "ieId":""
    },
    {
      "nombres":"CACERES BENAVENTE BLANCA LETICIA",
      "dni":23923448,
      "ieId":""
    },
    {
      "nombres":"CARRION PAREJA ZAYDA",
      "dni":24991539,
      "ieId":""
    },
    {
      "nombres":"DAZA DE CHIPA MARIA MAGDA",
      "dni":23840591,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ ROMAN YENNY LUZ",
      "dni":24486802,
      "ieId":""
    },
    {
      "nombres":"ESCARZA BEJARANO NEREYDA ERIKA",
      "dni":29559486,
      "ieId":""
    },
    {
      "nombres":"ESPINO NAOLA SENOBIA",
      "dni":25198216,
      "ieId":""
    },
    {
      "nombres":"GARCIA MUÑOZ DINA",
      "dni":25208856,
      "ieId":""
    },
    {
      "nombres":"MAR MORA SEGUNDINA",
      "dni":24467474,
      "ieId":""
    },
    {
      "nombres":"MEDINA MARTINEZ LUCERNO",
      "dni":23839979,
      "ieId":""
    },
    {
      "nombres":"MELLADO VILLAFUERTE RUTH",
      "dni":23818394,
      "ieId":""
    },
    {
      "nombres":"PACHECO VALLE EMMA",
      "dni":23885882,
      "ieId":""
    },
    {
      "nombres":"RIO CARRILLO EULOGIO FELIPE",
      "dni":23901940,
      "ieId":""
    },
    {
      "nombres":"SANTOYO ZAMALLOA JULIA ALEJANDRA",
      "dni":23859113,
      "ieId":""
    },
    {
      "nombres":"ABARCA TTITO ROGERS",
      "dni":24704147,
      "ieId":""
    },
    {
      "nombres":"ALLENDE CAMPANA YANET",
      "dni":25319200,
      "ieId":""
    },
    {
      "nombres":"ARAGON MAMANI CRISTINA",
      "dni":23805165,
      "ieId":""
    },
    {
      "nombres":"CASAVERDE ZAMBRANO ESTELA",
      "dni":23925679,
      "ieId":""
    },
    {
      "nombres":"CAYTUIRO MOTTA ESMILA",
      "dni":23990018,
      "ieId":""
    },
    {
      "nombres":"CCAPA CHOQUE SAMUEL",
      "dni":24713098,
      "ieId":""
    },
    {
      "nombres":"CORRALES GRISPO DE OCAM LOURDES TERESA",
      "dni":23838890,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA ALTAMIRANO GLADYS CECILIA",
      "dni":24675211,
      "ieId":""
    },
    {
      "nombres":"GONZALES ABRILL MARITZA BIONETZ",
      "dni":23822729,
      "ieId":""
    },
    {
      "nombres":"GONZALES BEJAR YENNY DULANDA",
      "dni":23865529,
      "ieId":""
    },
    {
      "nombres":"HILARES LOAIZA JUANA ORALIA",
      "dni":23803995,
      "ieId":""
    },
    {
      "nombres":"HUGO SANCHEZ MORAYMA",
      "dni":31002210,
      "ieId":""
    },
    {
      "nombres":"MAMANI CARDONA JULIA",
      "dni":23949384,
      "ieId":""
    },
    {
      "nombres":"OLIVERA BRAVO FRANKLIN",
      "dni":25000415,
      "ieId":""
    },
    {
      "nombres":"ORE QUINTANILLA DE HUAM ELVIRA LENINA",
      "dni":23855730,
      "ieId":""
    },
    {
      "nombres":"OSORIO PAIVA YANET",
      "dni":23860576,
      "ieId":""
    },
    {
      "nombres":"PEREZ CANDIA ELIAS",
      "dni":23854850,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHILO ZOILA",
      "dni":23806355,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES GUZMAN DORIS",
      "dni":23856327,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CHAMPI DELFINA",
      "dni":23893778,
      "ieId":""
    },
    {
      "nombres":"ROZAS RAMIREZ VILMA",
      "dni":23838194,
      "ieId":""
    },
    {
      "nombres":"SALINAS ESCOBAR WALDO",
      "dni":23966715,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CAHUANA RAQUEL",
      "dni":24703802,
      "ieId":""
    },
    {
      "nombres":"CASTELO URETA MARIA ESTELA",
      "dni":23961117,
      "ieId":""
    },
    {
      "nombres":"CUBA DE SEQUEIROS NANCY ALBERTINA",
      "dni":23845685,
      "ieId":""
    },
    {
      "nombres":"DELGADO ARGANDOÑA ZULMA SOLEDAD",
      "dni":25304201,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE GAMARRA CERBANDINA",
      "dni":25201248,
      "ieId":""
    },
    {
      "nombres":"HALLASI QUISPE JHONNY",
      "dni":24701316,
      "ieId":""
    },
    {
      "nombres":"HUILLCA VERONICA EMILIO",
      "dni":23956932,
      "ieId":""
    },
    {
      "nombres":"MALPARTIDA TINCOPA HILDA RAQUEL",
      "dni":31184693,
      "ieId":""
    },
    {
      "nombres":"MORA SALAS HAYDEE CORCINA",
      "dni":25304149,
      "ieId":""
    },
    {
      "nombres":"PAREJA GONZALES LOURDES",
      "dni":23905246,
      "ieId":""
    },
    {
      "nombres":"POCCO PUMA YONI",
      "dni":24383308,
      "ieId":""
    },
    {
      "nombres":"RIOS MENDOZA CARMEN LILIANA",
      "dni":23838973,
      "ieId":""
    },
    {
      "nombres":"RIVAS LOAYZA SANDRA",
      "dni":23934125,
      "ieId":""
    },
    {
      "nombres":"SURCO CHALCO DEMETRIO",
      "dni":24704208,
      "ieId":""
    },
    {
      "nombres":"VALENCIA ESPINOZA TERESA",
      "dni":23837797,
      "ieId":""
    },
    {
      "nombres":"VARGAS TINTA ELIZABETH",
      "dni":44685490,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ ANAMARIA RENEE",
      "dni":31032410,
      "ieId":""
    },
    {
      "nombres":"VEGA ZAMBRANO MARINA EXALTACION",
      "dni":23840832,
      "ieId":""
    },
    {
      "nombres":"CASTRO HERRERA CARMEN GLORIA GISELL",
      "dni":23883298,
      "ieId":""
    },
    {
      "nombres":"CCARHUARUPAY CASA ROSA MERCEDES",
      "dni":25182153,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ BARRIONUEVO BETEL",
      "dni":23846065,
      "ieId":""
    },
    {
      "nombres":"HANCCO NINACANSAYA MARIA ASUNCION",
      "dni":23897360,
      "ieId":""
    },
    {
      "nombres":"HUAMANVILCA SOTO ADRIAN",
      "dni":23813107,
      "ieId":""
    },
    {
      "nombres":"CONZA PACCA ABRAHAM WALTER",
      "dni":24883871,
      "ieId":""
    },
    {
      "nombres":"ESTRADA SILVA SANDY GLENY",
      "dni":41104751,
      "ieId":""
    },
    {
      "nombres":"OVIEDO QUISPE JUDIT",
      "dni":23805828,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VARGAS FRAEDA MERCEDES",
      "dni":24460385,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN HERMOZA ROSA",
      "dni":24486940,
      "ieId":""
    },
    {
      "nombres":"HUAMAN BACA HILDA",
      "dni":24973561,
      "ieId":""
    },
    {
      "nombres":"HUARCA SANTANDER ERASMO RODOLFO",
      "dni":23847196,
      "ieId":""
    },
    {
      "nombres":"LEON FARFAN CARMEN AURELIA",
      "dni":23833823,
      "ieId":""
    },
    {
      "nombres":"LOAIZA ALEGRIA LUISA",
      "dni":23848559,
      "ieId":""
    },
    {
      "nombres":"QUISPE CAMPOS LIDIA",
      "dni":31156974,
      "ieId":""
    },
    {
      "nombres":"SERRANO CASTAÑEDA ROGER ARTURO",
      "dni":23869237,
      "ieId":""
    },
    {
      "nombres":"ARIAS CHAVEZ YSOLDA",
      "dni":23852359,
      "ieId":""
    },
    {
      "nombres":"AYME CHAVEZ GABRIELA",
      "dni":23844277,
      "ieId":""
    },
    {
      "nombres":"BECERRA MONTOYA NOEMI",
      "dni":23930980,
      "ieId":""
    },
    {
      "nombres":"BORDA ZEVALLOS JUANA",
      "dni":23981818,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE LOAIZA JUSTA",
      "dni":23946304,
      "ieId":""
    },
    {
      "nombres":"CAHUANTICO CAHUANTICO ANGEL",
      "dni":24698724,
      "ieId":""
    },
    {
      "nombres":"CAPATINTA APARICIO LIZARDO OMAR",
      "dni":24698644,
      "ieId":""
    },
    {
      "nombres":"CCORI HUAMAN SERGIO",
      "dni":23962947,
      "ieId":""
    },
    {
      "nombres":"COLPAERT HONOR ROSA ELVIRA",
      "dni":23845316,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS AIQUIPA VICTORIA ABELINA",
      "dni":23955711,
      "ieId":""
    },
    {
      "nombres":"CORDOVA RIMACHI ROXANA",
      "dni":23956117,
      "ieId":""
    },
    {
      "nombres":"HOLGUINO BORDA MAX WILLGTON",
      "dni":24700748,
      "ieId":""
    },
    {
      "nombres":"HUANCACHOQUE MAMANI ELENA",
      "dni":24683030,
      "ieId":""
    },
    {
      "nombres":"JUAREZ ESPINOZA SULMA LUCIA",
      "dni":31174286,
      "ieId":""
    },
    {
      "nombres":"LIRA PAREJA LUIS BELTRAN",
      "dni":24968724,
      "ieId":""
    },
    {
      "nombres":"LUDEÑA TORRE ELIZABETH CAROLINA",
      "dni":23863011,
      "ieId":""
    },
    {
      "nombres":"MEDINA MORALES MARTHA",
      "dni":23829699,
      "ieId":""
    },
    {
      "nombres":"MEJIA CANGAHUALA YONY",
      "dni":23926298,
      "ieId":""
    },
    {
      "nombres":"MOLINA BOZA TULA NANCY",
      "dni":24388057,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ MONTALVO SUSANA NELLY",
      "dni":23833871,
      "ieId":""
    },
    {
      "nombres":"PUMACCAHUA QUISPEHUANCA ROSA ESTHER",
      "dni":23947930,
      "ieId":""
    },
    {
      "nombres":"RADO LUZA ROSARIO",
      "dni":23896984,
      "ieId":""
    },
    {
      "nombres":"RAMOS HACHIRI BENILDA",
      "dni":24886309,
      "ieId":""
    },
    {
      "nombres":"SANTOS DAZA CELIA",
      "dni":23847274,
      "ieId":""
    },
    {
      "nombres":"SUMA QUISPE BERTHA RUTH",
      "dni":44131670,
      "ieId":""
    },
    {
      "nombres":"SALAS CALVO JORGE ISAAC",
      "dni":23934018,
      "ieId":""
    },
    {
      "nombres":"FARFAN VIVERO VILMA",
      "dni":25120025,
      "ieId":""
    },
    {
      "nombres":"FLOREZ VALENCIA JOHN",
      "dni":24495052,
      "ieId":""
    },
    {
      "nombres":"LUNA SALCEDO HUMBERTO",
      "dni":23807287,
      "ieId":""
    },
    {
      "nombres":"MELO VERA BERTHA",
      "dni":"01219032",
      "ieId":""
    },
    {
      "nombres":"ALAMO MACHACA FELIPINA LUZ",
      "dni":23870852,
      "ieId":""
    },
    {
      "nombres":"APAZA MAMANI PIEDAD",
      "dni":24700144,
      "ieId":""
    },
    {
      "nombres":"AYME MAMANI JOSE",
      "dni":23926237,
      "ieId":""
    },
    {
      "nombres":"HUAMANGUILLAS VENERO DORIS",
      "dni":23968992,
      "ieId":""
    },
    {
      "nombres":"LATORRE ROJAS MARIBETH CECILIA",
      "dni":41166214,
      "ieId":""
    },
    {
      "nombres":"TRONCOSO CHAMPI GERARDO POLICARPIO",
      "dni":23875979,
      "ieId":""
    },
    {
      "nombres":"ANDIA FLOREZ OLIMPIA",
      "dni":23924468,
      "ieId":""
    },
    {
      "nombres":"CORTEZ BRAVO EVA",
      "dni":23945106,
      "ieId":""
    },
    {
      "nombres":"ANDIA FUENTES LUCILA ALFONSINA",
      "dni":31421842,
      "ieId":""
    },
    {
      "nombres":"CARDENAS YUPANQUI FLORA",
      "dni":25197073,
      "ieId":""
    },
    {
      "nombres":"CHINO CALLO BEATRIZ",
      "dni":23929487,
      "ieId":""
    },
    {
      "nombres":"GOMEZ MARIN SURY",
      "dni":40149053,
      "ieId":""
    },
    {
      "nombres":"HOLGADO CANSINO SILVIA CECILIA",
      "dni":23854285,
      "ieId":""
    },
    {
      "nombres":"ROBLES ALTAMIRANO NANCY FELICITAS",
      "dni":23855838,
      "ieId":""
    },
    {
      "nombres":"VALDEIGLESIAS SICOS NATIVIDAD",
      "dni":23943553,
      "ieId":""
    },
    {
      "nombres":"ALFARO VALENCIA ENOE",
      "dni":23964519,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"ALVAREZ LOPINTA CELIA",
      "dni":40030463,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"AUBERT ALVARES HERBERT",
      "dni":25183926,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BALLONA FLORES ELIZABETH",
      "dni":7757732,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BARRIENTOS ALVAREZ MARIA ANTONIETA",
      "dni":23899723,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BARRIOS VALER WILBER EMILIO",
      "dni":24672169,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BEINGOLEA PELAYO ALDA VICTORIA",
      "dni":23847476,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BELLIDO TICONA RONAL",
      "dni":23820204,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BOLIVAR ROCA AMANCIO",
      "dni":23983175,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"BRAVO ALVAREZ NICOLAS",
      "dni":23814483,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"CALLAÑAUPA BOLIVAR LUZMILA",
      "dni":23855555,
      "ieId":""
    },
    {
      "nombres":"CANDIA VARGAS NELLY",
      "dni":23948794,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"CASAFRANCA SOTO FIRKA NARDA",
      "dni":23934161,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"CASTILLO HERRERA NERIO",
      "dni":23966181,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"CONDORI CHOQUEHUANCA MARIA ANTONIA",
      "dni":23854743,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"CORNEJO GALLEGOS LIBERTAD JULIA",
      "dni":23849558,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"CORNEJO PEREZ RUFFO",
      "dni":24661967,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"DIAZ DAVALOS CARLOS ANTONIO",
      "dni":23804776,
      "ieId":"puLG2BnTTFajjGyfvpuLG2BnTTFajjGyfv"
    },
    {
      "nombres":"DURAND FARFAN HILDA YONY",
      "dni":23856758,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"FERNANDEZ ABAL CELIA",
      "dni":24281540,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"FERNANDEZ GARCIA ROCIO",
      "dni":23927200,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"FLORES PALOMINO MARITZA",
      "dni":31167997,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"FLORES TAPIA NOLBERTO",
      "dni":25003960,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"FUENTES AUCCA VICENTE",
      "dni":23823022,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"GALARRETA VARGAS MIGUEL TULIO",
      "dni":23985601,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"GAMARRA SOLORZANO CESAR MATEO",
      "dni":25181241,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"GUTIERREZ PONCE DE LEON EULOGIO AMERICO",
      "dni":23870282,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"HUAMAN GUTIERREZ SANTOS",
      "dni":23806111,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"HUAMAN NAULA FLORENTINO JULIO",
      "dni":23810696,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"JORDAN CHILLITUPA NINOSKA JOYCE",
      "dni":23863713,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"MENDIZABAL MONRROY LUCIA",
      "dni":23835817,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"MENDOZA BARRIENTOS WALTER",
      "dni":23963309,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"MENDOZA GARRIDO RINA",
      "dni":23830213,
      "ieId":""
    },
    {
      "nombres":"MUELLE GONGORA DINA BETTY",
      "dni":23903036,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"MUÑA MARQUEZ VICTORINO",
      "dni":23872566,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"OJEDA FLORES MIRIAM",
      "dni":23948223,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"PALOMINO CONDO JORGE ANDRES",
      "dni":24660904,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"PARI ARTEAGA CLARA",
      "dni":25303513,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"PAZ PEÑA HORTENSIA MELIZA",
      "dni":23978221,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"PEÑA ORTIZ DENISE ARTELY",
      "dni":31522186,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"PINARES ELGUERA DAISY",
      "dni":23920649,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"PORTILLO CALCINA EDITH AIDEE",
      "dni":1544906,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"QUISPE ITUSACA SONIA",
      "dni":41965353,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"QUISPE MERMA FELICITAS",
      "dni":29554599,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"QUISPE PALACIOS JOSE SERGIO",
      "dni":23869073,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"QUISPE SINCHE JUAN",
      "dni":24360724,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"RIVAS LOPEZ CLOTILDE",
      "dni":23938343,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"RIVERA LOAYZA MARINA MARGOT",
      "dni":23835704,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"ROJAS ZAVALETA HERMINIO",
      "dni":24678370,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"ROJAS ZAVALETA PERCY",
      "dni":24680513,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"SALLUCA RAMOS WILBER JAVIER",
      "dni":24701257,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"SEGOVIA LOAIZA ERNESTINA",
      "dni":23859114,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"SUMIRE FERNANDEZ MOISES",
      "dni":24677031,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"TORRES FARFAN AUGUSTO",
      "dni":24460266,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"VARGAS AIMITUMA LUZ MARINA",
      "dni":23838253,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"VEGA PALOMINO KAROL SHIRLEY",
      "dni":44131845,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"YUCRA SOTO ROSA",
      "dni":23894089,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI FARFAN INOCENCIA",
      "dni":23962619,
      "ieId":"puLG2BnTTFajjGyfv"
    },
    {
      "nombres":"QUISPE PALACIOS DOMITILA",
      "dni":23869962,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ COBOS VIOLETA",
      "dni":23920256,
      "ieId":""
    },
    {
      "nombres":"APARICIO DE GONZALES LEONOR",
      "dni":23833248,
      "ieId":""
    },
    {
      "nombres":"ARRIOLA USCAMAITA MARTHA",
      "dni":23841092,
      "ieId":""
    },
    {
      "nombres":"BENAVENTE BOCANGEL RICARDINA",
      "dni":23877022,
      "ieId":""
    },
    {
      "nombres":"CALLASI QUISPE LUISA BETTY",
      "dni":23855635,
      "ieId":""
    },
    {
      "nombres":"CHACON OLIVERA MARIA JESUS",
      "dni":23901694,
      "ieId":""
    },
    {
      "nombres":"CHACON VILLASANTE SANTA LUCIA",
      "dni":23873616,
      "ieId":""
    },
    {
      "nombres":"DEL RIO FLORES MIYUKI LOURDES",
      "dni":23894890,
      "ieId":""
    },
    {
      "nombres":"DIAZ ZAPATA DINA",
      "dni":23998070,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CCORIMANYA GLORIA ASUNTA",
      "dni":24680190,
      "ieId":""
    },
    {
      "nombres":"GAMARRA GONZALES ROSMERY",
      "dni":25008993,
      "ieId":""
    },
    {
      "nombres":"GARCIA VILLA CARMEN YONI",
      "dni":23841029,
      "ieId":""
    },
    {
      "nombres":"GONZALES GODOY ROSA MARIA",
      "dni":23843898,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ TAPIA MARTHA",
      "dni":23808427,
      "ieId":""
    },
    {
      "nombres":"HERRERA HERRERA JULIA",
      "dni":23964391,
      "ieId":""
    },
    {
      "nombres":"HUA-EC PATILLA MARTHA NOEMI",
      "dni":23954729,
      "ieId":""
    },
    {
      "nombres":"HUILLCA PAÑO BENJAMIN",
      "dni":23853199,
      "ieId":""
    },
    {
      "nombres":"NAOLA HUMPIRE VICENTINA",
      "dni":23993482,
      "ieId":""
    },
    {
      "nombres":"OCHOA RIVERA FANNY GLADYS",
      "dni":23991673,
      "ieId":""
    },
    {
      "nombres":"ORUE ESPINOZA YONI",
      "dni":23812589,
      "ieId":""
    },
    {
      "nombres":"PADILLA PEREZ AUGUSTA",
      "dni":23913211,
      "ieId":""
    },
    {
      "nombres":"PARY LOPEZ ZAHIDA",
      "dni":25320259,
      "ieId":""
    },
    {
      "nombres":"PEÑA PACHECO YENNY",
      "dni":23985322,
      "ieId":""
    },
    {
      "nombres":"QUISPE SANTA CRUZ VILMA",
      "dni":23958311,
      "ieId":""
    },
    {
      "nombres":"SEGOVIA FLORES MARIA",
      "dni":25303128,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS OCAMPO LUZ MARINA",
      "dni":23842173,
      "ieId":""
    },
    {
      "nombres":"SUYO QUISPE BLANCA LEONARDA",
      "dni":24663208,
      "ieId":""
    },
    {
      "nombres":"TAIPE VARGAS HERMENEGILDA",
      "dni":23802571,
      "ieId":""
    },
    {
      "nombres":"TINCO AQUEHUA MILUZCA",
      "dni":23998989,
      "ieId":""
    },
    {
      "nombres":"URQUIZO OLARTE MARINA",
      "dni":23808458,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA VILLEGAS IBONI",
      "dni":23960725,
      "ieId":""
    },
    {
      "nombres":"VARA FLOREZ NELLY",
      "dni":23952833,
      "ieId":""
    },
    {
      "nombres":"VELASCO HUACAC HIRMA",
      "dni":23847175,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE MANSILLA NILSA CARLOTA",
      "dni":23879948,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE PINO MARLENI JEANET",
      "dni":23882375,
      "ieId":""
    },
    {
      "nombres":"CCOISO SUCSO NICANOR",
      "dni":23972519,
      "ieId":""
    },
    {
      "nombres":"CONCHA CASTELO DARIO HERNAN",
      "dni":23836877,
      "ieId":""
    },
    {
      "nombres":"DELGADO URRUTIA ZOILA ROSA",
      "dni":23881305,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR RODRIGUEZ LUCIANO",
      "dni":23875664,
      "ieId":""
    },
    {
      "nombres":"HUARCAYA VALER ROSA OLIMPIA",
      "dni":29691259,
      "ieId":""
    },
    {
      "nombres":"LUQUE QUISPE WALDO EDWIN",
      "dni":1701414,
      "ieId":""
    },
    {
      "nombres":"MORALES GARCIA TANIA",
      "dni":23940412,
      "ieId":""
    },
    {
      "nombres":"MORALES VERA OLIMPIA",
      "dni":23899252,
      "ieId":""
    },
    {
      "nombres":"OLIVARES MU-OZ TELMO",
      "dni":24680195,
      "ieId":""
    },
    {
      "nombres":"PEREZ DEL ALAMO MARIA ELENA",
      "dni":23861209,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHALCO PRIATO",
      "dni":24576923,
      "ieId":""
    },
    {
      "nombres":"RAMOS SAPILLADO LIZZYE MERY",
      "dni":43808185,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MOYA BENITA",
      "dni":23841080,
      "ieId":""
    },
    {
      "nombres":"RONDAN AYBAR LUIS FELIX",
      "dni":23877601,
      "ieId":""
    },
    {
      "nombres":"SOTOMAYOR CHAHUAYLLA GLADYS YOLANDA",
      "dni":31521147,
      "ieId":""
    },
    {
      "nombres":"VARGAS MERCADO RINA ANTONIETA",
      "dni":23879554,
      "ieId":""
    },
    {
      "nombres":"CANO SANTOS MARIA CRISTINA",
      "dni":24005670,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL ARROYO JESUS",
      "dni":24940824,
      "ieId":""
    },
    {
      "nombres":"CASTRO ROJAS MARIA ANTONIETA",
      "dni":23810001,
      "ieId":""
    },
    {
      "nombres":"CHINO CHAMBI JULIA",
      "dni":23852615,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BACA ZAMBRANO AURORA",
      "dni":23990621,
      "ieId":""
    },
    {
      "nombres":"MAMANI LOPEZ ROXANA",
      "dni":45179940,
      "ieId":""
    },
    {
      "nombres":"MENDOZA AYTE MICHAEL JONATHAN",
      "dni":42567709,
      "ieId":""
    },
    {
      "nombres":"NINA PAREDES EFRAIN",
      "dni":23936611,
      "ieId":""
    },
    {
      "nombres":"PELAEZ PINO RELY",
      "dni":23935906,
      "ieId":""
    },
    {
      "nombres":"RIOS JARA VIRGILIO MIGAIL",
      "dni":23857722,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ RUIZ SILVIA",
      "dni":24706020,
      "ieId":""
    },
    {
      "nombres":"VEGA AMPUERO YOVANA",
      "dni":42311762,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CUCCHI DE RENDO MARTHA",
      "dni":23904562,
      "ieId":""
    },
    {
      "nombres":"CALLASI QUISPE EDITH",
      "dni":23931168,
      "ieId":""
    },
    {
      "nombres":"CHAUCCA TORRES NANCI",
      "dni":23986553,
      "ieId":""
    },
    {
      "nombres":"CONZA ANCAYPURO ROSA",
      "dni":23916402,
      "ieId":""
    },
    {
      "nombres":"CRUZ QUISPE JUAN CARLOS",
      "dni":43674927,
      "ieId":""
    },
    {
      "nombres":"LIGAS NINA LIDIA MARGOT",
      "dni":10489754,
      "ieId":""
    },
    {
      "nombres":"REVOLLAR VIZCARRA ROSA MELANIA",
      "dni":23916989,
      "ieId":""
    },
    {
      "nombres":"SULLCA CAÑARI FORTUNATO",
      "dni":24969746,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA HUAMAN NELLY",
      "dni":23859350,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ALEGRIA HUAMAN ANDRES",
      "dni":23900982,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"APAZA VELASQUEZ MARIBEL",
      "dni":43747257,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"AQUIMA TAIPE ROLANDO",
      "dni":43645751,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ARAGON TRUJILLO HENRY",
      "dni":23987574,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ARANZABAL DELGADO DE LO ELFI MARIELA",
      "dni":23824843,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ARIAS AUCCA HECTOR",
      "dni":24995056,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ARIVILCA PACORICONA SALVADOR",
      "dni":23805909,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ARMINTA LIMA FELIPE SANTIAGO",
      "dni":23902954,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ARREDONDO GARCIA GLORIA",
      "dni":23848140,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ATAUCONCHA LAZARO MIGUEL ANTONIO",
      "dni":23805077,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"AUBERT ALVAREZ ADELINA",
      "dni":25184005,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"AYME VILLAFUERTE WALTER",
      "dni":23839005,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"BEJAR MALPARTIDA ISMAEL",
      "dni":23894420,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"BERRIO RIOJA CLEVER",
      "dni":23876233,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"BERRIOS LUCANA WASHINGTON",
      "dni":23840429,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CABALLERO OSORIO WANDA CONY",
      "dni":23847380,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CACERES SILVA MARTHA",
      "dni":31520198,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CAMASITA SALLUCA HUMBERTO",
      "dni":24710384,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CAMPANA UGARTE FERNANDO",
      "dni":23894659,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CANO ACUÑA VILMA",
      "dni":23813993,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CCOILLO PUMA SONIA",
      "dni":40081027,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CCOLQQUE HUALLPA SATURNINO",
      "dni":23869271,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CHAHUA LAYME ROLANDO",
      "dni":23905148,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CHALLCO FLOREZ MARIO FELIX",
      "dni":23891867,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CHAMPI ROJAS VILMA",
      "dni":23983600,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CHOQUE . ROSARIO PILAR",
      "dni":41409619,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CONDORI APAZA TIMOTEO",
      "dni":23813872,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CONDORI OSORIO RUBEN",
      "dni":43731266,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CONDORI PAUCCARA JOSE",
      "dni":23896027,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CORDOVA FARFAN JOSE ANTONIO",
      "dni":23809831,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"COTRADO LAURA JUAN ROGELIO",
      "dni":23878214,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"CUEVA ALVAREZ MARCELINO",
      "dni":24863330,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"DAVILA ZAMALLOA CARMEN AMALIA",
      "dni":23923621,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"DE LA SOTA ZUBELETA JOSSEF SHEIDA",
      "dni":23986105,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"DENOS SURI ROBERTO BELARMINO",
      "dni":23878130,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"DIAZ UGARTE MARIA DEL ROSARIO",
      "dni":43081552,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"DUEÑAS LINARES NILDA ROCIO",
      "dni":23848787,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ESQUIVEL CABALLERO YASMANI",
      "dni":43578643,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"FLORES MORALES ELSA ZENOVIA",
      "dni":23851615,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GALLEGOS DE ACEVEDO ALEJANDRINA",
      "dni":23836840,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GARCIA DE BACA DELIA ANTONIA",
      "dni":23823220,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GASTAÑAGA CARREÑO EUSEBIO",
      "dni":25318626,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GONZALES SOTA MOISES HERMENEGILDO",
      "dni":23883638,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GONZALES ÑAUPA YUVICA",
      "dni":45212905,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GRANDA CORDOVA GILBERTO ROSENDO",
      "dni":23849217,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"GUILLEN QUINTANILLA RUBEN DARIO",
      "dni":23812260,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HERRERA AYALA NURY",
      "dni":40088960,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HERRERA CCOLQUE SILVIA",
      "dni":23930003,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUAMAN AYTE JUAN BAUTISTA",
      "dni":23889258,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUAMAN HUAMAN GREGORIO",
      "dni":24479229,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUAMAN PILLCO MARIA ELENA",
      "dni":23983149,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUAMANGA GAMARRA ZORAIDA",
      "dni":23862969,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUANCA FIGUEROA RONNIE EFRAIN",
      "dni":41837704,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUANCA LIPA MIGUEL ANGEL",
      "dni":2297931,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUAYHUA JURADO KRUPSKAYA",
      "dni":42748331,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"HUILCAPAZ JANAMPA JUAN GERMAN",
      "dni":23846651,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"IBARRA MEDINA CESAR AUGUSTO",
      "dni":23882755,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"JURADO ASTETE FLORENCIO",
      "dni":25208308,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LAZO DE LA VEGA NUÑEZ GORKY",
      "dni":23944378,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LIGAS QUISPE AUGUSTA",
      "dni":23869105,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LLAMACPONCA HUAMAN DAVID",
      "dni":45259881,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LLAVILLA HUAMAN JACKELINE",
      "dni":42882407,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LOAIZA BEJAR WILBERT BENITO",
      "dni":23914245,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LOPE HERRERA MARINO",
      "dni":24702263,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"LUNA SALCEDO MARIA LUISA",
      "dni":23806506,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MACEDO GUZMAN VICTOR MANUEL",
      "dni":1498236,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MACHACA BORNAS EFRAIN",
      "dni":24705345,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MAMANI CONDORI EDWIN FLORENTINO",
      "dni":23805555,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MAMANI QUISPE TOMAS",
      "dni":24564201,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MANRIQUE ALCAZAR MARIO PAULO",
      "dni":29638513,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MANRIQUE ALCAZAR ROBERTO",
      "dni":23904640,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MANYA VISAGA TOMAS",
      "dni":24698506,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MATTO MIRANDA JORGE MARIO",
      "dni":23840623,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MEDINA SALAS JUANA YRENE",
      "dni":23899290,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MEDINA SUCA VITO MANUEL",
      "dni":23946763,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MELIN DE AGUILAR FRANCISCA",
      "dni":23997237,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"MOSCOSO ALLER EDGAR JOSE",
      "dni":23892062,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"NAVARRETE TORRES FLORENCIO",
      "dni":24476039,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ORTEGA RODRIGUEZ PATRICIA",
      "dni":23864405,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PACHECO ANDRADE ANTONIO",
      "dni":23811483,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PALOMINO SIHUA ROCHEL",
      "dni":23875304,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PALOMINO TUMPAY MARISSEL",
      "dni":23958093,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PAREDES FIGUEROA ROSALINA ESTHER",
      "dni":23820051,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PARI OVIEDO MARIO ALBERTO",
      "dni":23930860,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PIÑE HUAMAN JUAN CARLOS",
      "dni":80029548,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"PUMA CONDORI GERMAN",
      "dni":23904832,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ROJAS ZAVALETA MAXIMO",
      "dni":24678802,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ROMAN CUTIPA ROLANDO",
      "dni":23900131,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SAIRE HUILLCANINA NARCISO",
      "dni":23840881,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SALAS CASTILLO HEBERTH",
      "dni":24941427,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SALAS MEZA NESTOR",
      "dni":23936731,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SALAS TTITO EFRAIN",
      "dni":46057939,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SALINAS VILLANUEVA ROXANY MERY",
      "dni":23860755,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SANCHEZ ANDIA MIGUEL",
      "dni":23871491,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SANCHEZ SOTO JAIME FELIPE",
      "dni":23916605,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SANDOVAL SALVADOR FAUSTINA",
      "dni":15392377,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SEGOVIA FRANCO HUGO",
      "dni":23982318,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SIVINCHA HUAMANI JUAN PABLO",
      "dni":42020855,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"SUAREZ RIOS HUMBERTO VLADIMIRO",
      "dni":23944639,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"TERRAZAS ARROYO WALTER",
      "dni":23937379,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"TTITO HUANCA VICTOR",
      "dni":25181503,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VALDEIGLESIAS CONDORI EVANGELINA",
      "dni":23907457,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VALDEZ COSIO JUAN YHONE",
      "dni":24696055,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VALLE PRIETO EVA ROSA",
      "dni":29474183,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VASQUEZ MAMANI CONCEPCION EDUARDO",
      "dni":23895919,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VERA CHAVEZ ALFREDO",
      "dni":24470170,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VERA FRISANCHO ROLANDO",
      "dni":24287253,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VICTORIO CAVIEDES JORGE FAUSTINO",
      "dni":23820581,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VILA BAEZ JUAN WILBERTO",
      "dni":23915503,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VILLA QUISPE BERNARDINA",
      "dni":23890016,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"VILLENA VILLENA MANUEL SILVESTRE",
      "dni":23838962,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"YABAR VILLASANTE JOSE ANTONIO",
      "dni":23804769,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ZAPATA AGUILAR AYDE ELENA",
      "dni":29227171,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ZUNIGA DIAZ THANIA",
      "dni":24471031,
      "ieId":"vsaGWoxq68vWwXTbo"
    },
    {
      "nombres":"ABANTO RIOS PELAYO",
      "dni":41454230,
      "ieId":""
    },
    {
      "nombres":"ACOSTA SANCHEZ RUTH",
      "dni":23824622,
      "ieId":""
    },
    {
      "nombres":"AGUILAR TTITO BENEDICTA",
      "dni":23918025,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE MAULEON DELIA ELIANA",
      "dni":23832134,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ ALVAREZ RONAL IVAN",
      "dni":24680373,
      "ieId":""
    },
    {
      "nombres":"APAZA GOMEZ AVELINA FLORENCIA",
      "dni":23843779,
      "ieId":""
    },
    {
      "nombres":"ARIAS CASTILLO HENRY",
      "dni":24704996,
      "ieId":""
    },
    {
      "nombres":"ARIAS CASTILLO ROSA",
      "dni":24702668,
      "ieId":""
    },
    {
      "nombres":"ARIAS CHAVEZ JUANA ANTONIETA",
      "dni":23899057,
      "ieId":""
    },
    {
      "nombres":"AYERBE RAMOS YONY",
      "dni":23924146,
      "ieId":""
    },
    {
      "nombres":"BENAVIDES PALOMINO IVONNE DORA",
      "dni":23826799,
      "ieId":""
    },
    {
      "nombres":"BORDA SONCCO HECTOR SANTIAGO",
      "dni":23935381,
      "ieId":""
    },
    {
      "nombres":"CALDERON SANCHEZ FERNANDO CECILIO",
      "dni":23935382,
      "ieId":""
    },
    {
      "nombres":"CALLAÑAUPA ARANYA DELIA",
      "dni":23819259,
      "ieId":""
    },
    {
      "nombres":"CANAL MUÑIZ KATIA ROCIO",
      "dni":23975333,
      "ieId":""
    },
    {
      "nombres":"CARDENAS BANDA ANTONIETA",
      "dni":23915679,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CARLOS GLADIS ANGELICA",
      "dni":23818627,
      "ieId":""
    },
    {
      "nombres":"CCASA ALVIZ YENY",
      "dni":23948152,
      "ieId":""
    },
    {
      "nombres":"CHAPARRO LAZO ADELAIDA VIRGINIA",
      "dni":23999330,
      "ieId":""
    },
    {
      "nombres":"CHAVES GUIMENES ASUNTA",
      "dni":23983913,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ NINAN NANCY",
      "dni":23817205,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ PALOMINO VILMA",
      "dni":43668813,
      "ieId":""
    },
    {
      "nombres":"CHIRA CARPIO JOSEFINA TOMASA",
      "dni":23828959,
      "ieId":""
    },
    {
      "nombres":"CHOQUE SULLO NICOMEDES",
      "dni":40441386,
      "ieId":""
    },
    {
      "nombres":"CHULLO MERMA EDITH",
      "dni":42778880,
      "ieId":""
    },
    {
      "nombres":"CHUQUIMALLCO QUISPE JAVIER FAUSTINO",
      "dni":42598127,
      "ieId":""
    },
    {
      "nombres":"COLQUE CUYO ANTONIO LUIS",
      "dni":8125094,
      "ieId":""
    },
    {
      "nombres":"CONDORI CHOQUEHUANCA ENMA ROSA",
      "dni":23862745,
      "ieId":""
    },
    {
      "nombres":"CONDORI CUBA SANDRA",
      "dni":43996654,
      "ieId":""
    },
    {
      "nombres":"CONDORI VILLASANTE JOSE ELEAZAR",
      "dni":24002812,
      "ieId":""
    },
    {
      "nombres":"CRUZ DE LANDIO ESTELA",
      "dni":23825739,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN RAMIREZ HOLGA",
      "dni":42424888,
      "ieId":""
    },
    {
      "nombres":"DIAZ LIZARAZO IVONNE MARIA",
      "dni":23904184,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS PAREJA ESPERANZA LOURDES",
      "dni":23831250,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS QUISPE DOMENIKA CAROL",
      "dni":1323208,
      "ieId":""
    },
    {
      "nombres":"DURAN ARANCIBIA YBETH",
      "dni":23924075,
      "ieId":""
    },
    {
      "nombres":"ECHARRI SANCHEZ JENNY",
      "dni":23877824,
      "ieId":""
    },
    {
      "nombres":"ESPEJO HERRERA VILMAR ISABEL",
      "dni":23875986,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA TTITO DOMINGA CELIA",
      "dni":23923342,
      "ieId":""
    },
    {
      "nombres":"FLORES VILLEGAS IRMA MARGARITA",
      "dni":23982423,
      "ieId":""
    },
    {
      "nombres":"GAMARRA MAMANI SONIA",
      "dni":23949131,
      "ieId":""
    },
    {
      "nombres":"GUILLEN ESTRADA ROSANA",
      "dni":23862553,
      "ieId":""
    },
    {
      "nombres":"GUZMAN LETONA LIDIA",
      "dni":23882299,
      "ieId":""
    },
    {
      "nombres":"HALANOCA PUMA DORIS",
      "dni":23943087,
      "ieId":""
    },
    {
      "nombres":"HERMOZA GALINDO HERMELINDA",
      "dni":23880386,
      "ieId":""
    },
    {
      "nombres":"HUAMBO DE FERNANDEZ CARMEN",
      "dni":23880953,
      "ieId":""
    },
    {
      "nombres":"HUANCAHUIRE SANCHEZ CESAR",
      "dni":23984960,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI PUMA MARITZA CARMEN",
      "dni":23937084,
      "ieId":""
    },
    {
      "nombres":"HURTADO QUINTANILLA ROSA MARIA",
      "dni":31001146,
      "ieId":""
    },
    {
      "nombres":"JORGE CUSIHUAMAN PORFIRIO",
      "dni":23963442,
      "ieId":""
    },
    {
      "nombres":"KCANA KCANA JUAN ROBERTO",
      "dni":23921560,
      "ieId":""
    },
    {
      "nombres":"LOAYZA AGUIRRE MARIA NATIVIDAD",
      "dni":23922410,
      "ieId":""
    },
    {
      "nombres":"LOVON RODRIGUEZ FORTUNATA",
      "dni":25183446,
      "ieId":""
    },
    {
      "nombres":"MAMANI CCORIMANYA ELEUTERIO",
      "dni":2266580,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ HUAMANI ELVA",
      "dni":25003144,
      "ieId":""
    },
    {
      "nombres":"MERCADO ZEA LAURA ALBERTINA",
      "dni":23960757,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS DE SEQUEIROS AUREA",
      "dni":23932654,
      "ieId":""
    },
    {
      "nombres":"MORA KJURO CLAUDIA",
      "dni":24002204,
      "ieId":""
    },
    {
      "nombres":"MORALES VILLENA MILO ALEJANDRO",
      "dni":23912771,
      "ieId":""
    },
    {
      "nombres":"ORDOÑEZ GOMEZ WILBER WILFREDO",
      "dni":43503003,
      "ieId":""
    },
    {
      "nombres":"PACCHA MIRANO RUTH",
      "dni":23948613,
      "ieId":""
    },
    {
      "nombres":"PACHECO NEGRON LUZ MARINA",
      "dni":23867539,
      "ieId":""
    },
    {
      "nombres":"PACHECO VASQUEZ LUCY",
      "dni":23859797,
      "ieId":""
    },
    {
      "nombres":"PALOMINO ESPEJO MARIA TIMOTEA",
      "dni":23909364,
      "ieId":""
    },
    {
      "nombres":"PAREDES BERRIO BENJAMIN",
      "dni":23886499,
      "ieId":""
    },
    {
      "nombres":"PAREJA MOSCOSO BILMA LIBIA",
      "dni":23924913,
      "ieId":""
    },
    {
      "nombres":"PARICAHUA PINEDA JUDITH CLOTILDE",
      "dni":23980457,
      "ieId":""
    },
    {
      "nombres":"PAUCARPURA PAZ ESPERANZA",
      "dni":23886031,
      "ieId":""
    },
    {
      "nombres":"PEÑA BERRIO FELICIA",
      "dni":23962499,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCAMA ROSA",
      "dni":23832094,
      "ieId":""
    },
    {
      "nombres":"QUISPICHU MONTESINOS FRANCISCA",
      "dni":23826000,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ FLOREZ RUTINA GLADYS",
      "dni":23869869,
      "ieId":""
    },
    {
      "nombres":"SALAS ANDIA ELISA DIOSELINA",
      "dni":23843577,
      "ieId":""
    },
    {
      "nombres":"SALAS LUNA CRISPIN GABINO",
      "dni":23954787,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SOTO FRIDA",
      "dni":23808834,
      "ieId":""
    },
    {
      "nombres":"SIKOS LUZA ALDO",
      "dni":25003850,
      "ieId":""
    },
    {
      "nombres":"SOTA GARCIA DORIS NELIDA",
      "dni":23814020,
      "ieId":""
    },
    {
      "nombres":"SOTO SAYHUA BERNARDINA FLORENCIA",
      "dni":23844406,
      "ieId":""
    },
    {
      "nombres":"SUEL QUISPE WILBERT",
      "dni":40359735,
      "ieId":""
    },
    {
      "nombres":"TEVES ALARCON ELIZABETH",
      "dni":23855830,
      "ieId":""
    },
    {
      "nombres":"TICONA COAQUIRA TOMAS",
      "dni":23887014,
      "ieId":""
    },
    {
      "nombres":"TITO PERALTA DELIA AMANDA",
      "dni":23927158,
      "ieId":""
    },
    {
      "nombres":"TORRES LUQUE EUDES CELMIRA",
      "dni":23987146,
      "ieId":""
    },
    {
      "nombres":"TTITO SILVA DANIEL",
      "dni":24379163,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA SILVA DARWIN AQUILES",
      "dni":23907790,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SALCEDO HERACLIO",
      "dni":23936177,
      "ieId":""
    },
    {
      "nombres":"VALLENAS CUBA SONIA LUZ",
      "dni":23918087,
      "ieId":""
    },
    {
      "nombres":"VEGA CARHUARUPAY OSCAR MAURO",
      "dni":25185163,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE ALVAREZ RUTH MARGARITA",
      "dni":23905202,
      "ieId":""
    },
    {
      "nombres":"ALFEREZ DURAN MARIANELA",
      "dni":23819546,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ FLORES ELOIZA",
      "dni":23962403,
      "ieId":""
    },
    {
      "nombres":"ANDRADE OJEDA ROGELIO ALFREDO",
      "dni":23907817,
      "ieId":""
    },
    {
      "nombres":"ARAOZ CHAVEZ EFRAIN",
      "dni":23948151,
      "ieId":""
    },
    {
      "nombres":"AUCCA BACA ALICIA",
      "dni":23918729,
      "ieId":""
    },
    {
      "nombres":"BACA OLAYUNCA WILBERT",
      "dni":23826739,
      "ieId":""
    },
    {
      "nombres":"BORDA FLORES MARTHA",
      "dni":23888590,
      "ieId":""
    },
    {
      "nombres":"CARRASCO LUNA MARGARITA",
      "dni":23817163,
      "ieId":""
    },
    {
      "nombres":"CASTILLA VIZCARRA RICARDINA ANTONIA MERY",
      "dni":23881351,
      "ieId":""
    },
    {
      "nombres":"CHACALIAZA PACHAS AQUILES",
      "dni":19821132,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ JIMENEZ HENRY DARSI",
      "dni":23926125,
      "ieId":""
    },
    {
      "nombres":"CONDORI CUSIHUAMAN LORENZO SERAPIO",
      "dni":23840763,
      "ieId":""
    },
    {
      "nombres":"CRUZ DOMINGUEZ LILIA",
      "dni":23843600,
      "ieId":""
    },
    {
      "nombres":"CUSI HUAMAN GIOVANNA",
      "dni":23991303,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE DELGADO RAUL",
      "dni":23830235,
      "ieId":""
    },
    {
      "nombres":"FARFAN PALOMINO MARIA ANTONIETA",
      "dni":23802392,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HOLGADO MARLENE",
      "dni":23878435,
      "ieId":""
    },
    {
      "nombres":"HALIRE CCAHUANA CIRILO",
      "dni":23956905,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SANCHEZ ROCIO",
      "dni":23938631,
      "ieId":""
    },
    {
      "nombres":"HUILLCA OCHOA JUAN",
      "dni":23805302,
      "ieId":""
    },
    {
      "nombres":"ICHILLUMPA VARGAS CARMEN LUZ",
      "dni":23997031,
      "ieId":""
    },
    {
      "nombres":"LATORRE LLANOS JOSE ANTONIO",
      "dni":23999682,
      "ieId":""
    },
    {
      "nombres":"LAUREL AYCA BERTHA MIRLA",
      "dni":80074035,
      "ieId":""
    },
    {
      "nombres":"LEIVA FLOREZ NIEVES JUDY",
      "dni":23828074,
      "ieId":""
    },
    {
      "nombres":"LOZA GOMEZ MAURO VALENTIN",
      "dni":31421624,
      "ieId":""
    },
    {
      "nombres":"LOZANO MEDINA CLEOTILDE",
      "dni":10182181,
      "ieId":""
    },
    {
      "nombres":"MADRID JIMENEZ DE ZAVAL MARIA DEL ROSARIO",
      "dni":23868837,
      "ieId":""
    },
    {
      "nombres":"MEDINA MORALES ELIZABETH",
      "dni":23844249,
      "ieId":""
    },
    {
      "nombres":"MENDOZA OLIVERA CESAR GUILLERMO",
      "dni":23930997,
      "ieId":""
    },
    {
      "nombres":"MENDOZA PEÑA MARCO ANTONIO",
      "dni":23937311,
      "ieId":""
    },
    {
      "nombres":"MONASTERIO ALARCON JESSICA MARITZA",
      "dni":40068666,
      "ieId":""
    },
    {
      "nombres":"MONTES CAMACHO AMARILDO",
      "dni":25304464,
      "ieId":""
    },
    {
      "nombres":"NOBLEGA MAYORGA GUIDO",
      "dni":23836971,
      "ieId":""
    },
    {
      "nombres":"OCHOA ZAPATA SELMY ROXANA",
      "dni":23836970,
      "ieId":""
    },
    {
      "nombres":"OQUENDO LOAIZA LEONCIO",
      "dni":23982618,
      "ieId":""
    },
    {
      "nombres":"PACHA MOROCCO SILVIA NORMA",
      "dni":29571890,
      "ieId":""
    },
    {
      "nombres":"POLANCO YEPEZ JULIA NILDA",
      "dni":23871985,
      "ieId":""
    },
    {
      "nombres":"QUISPE LEONARDO FELIPE SANTIAGO",
      "dni":23993303,
      "ieId":""
    },
    {
      "nombres":"RIVERA LEON ELIZABETH",
      "dni":23915439,
      "ieId":""
    },
    {
      "nombres":"RUMAJA SANTOS PERCY",
      "dni":41564623,
      "ieId":""
    },
    {
      "nombres":"UGARTE QUISPE FRIDA",
      "dni":23941020,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA GUZMAN BELEN",
      "dni":23996494,
      "ieId":""
    },
    {
      "nombres":"VARGAS NAVEROS KARLA WENDY",
      "dni":41951571,
      "ieId":""
    },
    {
      "nombres":"VICTORIO VDA DE LUZA HORTENCIA",
      "dni":23843190,
      "ieId":""
    },
    {
      "nombres":"GARCIA SAYAN MARIA RITA",
      "dni":23850487,
      "ieId":""
    },
    {
      "nombres":"QUINTANA VILLAFUERTE HEBERT",
      "dni":23821895,
      "ieId":""
    },
    {
      "nombres":"QUIÑONEZ GUZMAN GERBACIA",
      "dni":24005430,
      "ieId":""
    },
    {
      "nombres":"CASA VELASQUEZ ABDON ALFREDO",
      "dni":25183797,
      "ieId":""
    },
    {
      "nombres":"FARFAN ALEGRIA RUFINO",
      "dni":23988767,
      "ieId":""
    },
    {
      "nombres":"GAMARRA SAHUARAURA EDMUNDO",
      "dni":23803456,
      "ieId":""
    },
    {
      "nombres":"GIBAJA LUNA VDA DE HERE NILDA",
      "dni":23870229,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ESCALANTE MARIO",
      "dni":25308667,
      "ieId":""
    },
    {
      "nombres":"NIÑO DE GUZMAN CASTRO GRETA",
      "dni":24710057,
      "ieId":""
    },
    {
      "nombres":"RIVAS DEL POZO KAREN",
      "dni":24997716,
      "ieId":""
    },
    {
      "nombres":"VILLASANTE ESQUIVEL SERGIO AUGUSTO",
      "dni":23865558,
      "ieId":""
    },
    {
      "nombres":"BERRIO CASTRO GLADYS",
      "dni":23855509,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL RAMOS NIDIA NATALI",
      "dni":23845019,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ FLOREZ EULOGIA MAGNA",
      "dni":23869740,
      "ieId":""
    },
    {
      "nombres":"ROMAN VELARDE ALICIA MARGOT",
      "dni":23831105,
      "ieId":""
    },
    {
      "nombres":"YABAR CELIS NERAYDA ADELA",
      "dni":23930808,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA ESPEJO AUREA ARTEMIA",
      "dni":23841295,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS RIOS MARIA CRISTINA",
      "dni":23978986,
      "ieId":""
    },
    {
      "nombres":"ACUÑA ATAUCURI JUAN CARLOS",
      "dni":23901923,
      "ieId":""
    },
    {
      "nombres":"ALLENDE MARTINEZ LUIS FERNANDO",
      "dni":29529507,
      "ieId":""
    },
    {
      "nombres":"APAZA PAREJA WILFREDO",
      "dni":23863373,
      "ieId":""
    },
    {
      "nombres":"BACA OLAYUNCA ERNESTO",
      "dni":23905463,
      "ieId":""
    },
    {
      "nombres":"CARDENAS CERECEDA CESAR MACARIO",
      "dni":23981334,
      "ieId":""
    },
    {
      "nombres":"CARLOS FLOREZ MARLENI",
      "dni":23934303,
      "ieId":""
    },
    {
      "nombres":"CASTILLO HERRERA FELIX ELARD",
      "dni":23951082,
      "ieId":""
    },
    {
      "nombres":"DAZA CONDEMAYTA MARIANO",
      "dni":23896811,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO VELASQUEZ OSWALDO",
      "dni":23977141,
      "ieId":""
    },
    {
      "nombres":"GAMARRA VELARDE JULIO",
      "dni":24495586,
      "ieId":""
    },
    {
      "nombres":"GARCIA PEÑA KATIA ELENA",
      "dni":23926370,
      "ieId":""
    },
    {
      "nombres":"GUILLEN CALA LIZ GIOVANNA",
      "dni":23920591,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA ACCOSTUPA JULIO",
      "dni":23870621,
      "ieId":""
    },
    {
      "nombres":"INCARROCA LAROTA WASHINGTON",
      "dni":24893937,
      "ieId":""
    },
    {
      "nombres":"LLOCLLE CHAVEZ ANGEL ALFONSO",
      "dni":25219914,
      "ieId":""
    },
    {
      "nombres":"LUDEÑA TORRE LUCIA",
      "dni":23952878,
      "ieId":""
    },
    {
      "nombres":"LUNA CHACON CARLOS ROBERTO",
      "dni":31127194,
      "ieId":""
    },
    {
      "nombres":"LUNA NUÑEZ JORGE LUIS",
      "dni":31177012,
      "ieId":""
    },
    {
      "nombres":"MOTTOCCANCHI BUSTINZA DAVID",
      "dni":23940930,
      "ieId":""
    },
    {
      "nombres":"NEYRA CARPIO ALFONSO BARTOLOME",
      "dni":29345246,
      "ieId":""
    },
    {
      "nombres":"NOLASCO MAMANI NANCY",
      "dni":23979249,
      "ieId":""
    },
    {
      "nombres":"PALOMINO QUISPE CELSO",
      "dni":23807895,
      "ieId":""
    },
    {
      "nombres":"PAREDES VALVERDE VICTORIA",
      "dni":23878728,
      "ieId":""
    },
    {
      "nombres":"PAUCAR SULLCA VICTORIA",
      "dni":23861707,
      "ieId":""
    },
    {
      "nombres":"PUMA CJAPA FELIX",
      "dni":23808480,
      "ieId":""
    },
    {
      "nombres":"QUIROZ VELEZ RUBEN ROMULO",
      "dni":23936844,
      "ieId":""
    },
    {
      "nombres":"VARGAS CUITO YOHUAN",
      "dni":43904503,
      "ieId":""
    },
    {
      "nombres":"AGUILAR JARA JUANA",
      "dni":23805335,
      "ieId":""
    },
    {
      "nombres":"ARIZABAL GALLEGOS SONIA LUZ",
      "dni":23837101,
      "ieId":""
    },
    {
      "nombres":"ARONI HUAYAPA LOURDES",
      "dni":23997477,
      "ieId":""
    },
    {
      "nombres":"CARDENAS DE PEREIRA BETTY",
      "dni":23878677,
      "ieId":""
    },
    {
      "nombres":"CARRASCO LUNA MARIA JESUS",
      "dni":23898584,
      "ieId":""
    },
    {
      "nombres":"CCOPA QUISPE AMERICO",
      "dni":24004172,
      "ieId":""
    },
    {
      "nombres":"CHIPANA LAIME IRMA",
      "dni":23903180,
      "ieId":""
    },
    {
      "nombres":"FARFAN ARIAS LOURDES NATIVIDAD",
      "dni":23845839,
      "ieId":""
    },
    {
      "nombres":"FUENTES MORALES LUCHA",
      "dni":23906600,
      "ieId":""
    },
    {
      "nombres":"GARCIA MUJICA MARIA ALINDA",
      "dni":23915545,
      "ieId":""
    },
    {
      "nombres":"GROVAS CORNEJO LUZ MARINA",
      "dni":23952577,
      "ieId":""
    },
    {
      "nombres":"HERRERA PALOMINO SARA",
      "dni":23897437,
      "ieId":""
    },
    {
      "nombres":"LAUREL SERRUDO ILBANOR",
      "dni":23934222,
      "ieId":""
    },
    {
      "nombres":"LOAYZA MARQUINA FLORENCIA LIBERTAD",
      "dni":23886435,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE ALEJANDRINO",
      "dni":24570470,
      "ieId":""
    },
    {
      "nombres":"PACHECO LOAIZA ESPERANZA",
      "dni":24486504,
      "ieId":""
    },
    {
      "nombres":"TTITO UGARTE NORMA CLEOFE",
      "dni":24704586,
      "ieId":""
    },
    {
      "nombres":"ALCCAYHUAMAN ACCOSTUPA CELIA",
      "dni":23881630,
      "ieId":""
    },
    {
      "nombres":"CALLO SANCHEZ HERMINIA",
      "dni":23913968,
      "ieId":""
    },
    {
      "nombres":"CANAHUIRE RODRIGUEZ LUCIO HORACIO",
      "dni":23951729,
      "ieId":""
    },
    {
      "nombres":"CARRASCO LUNA WALDO",
      "dni":24283419,
      "ieId":""
    },
    {
      "nombres":"CASTRO HANCCO SALVADOR",
      "dni":23872767,
      "ieId":""
    },
    {
      "nombres":"FERRO ESTRADA BRAULIO",
      "dni":23822656,
      "ieId":""
    },
    {
      "nombres":"HONOR ORTIZ ANDRES",
      "dni":23932612,
      "ieId":""
    },
    {
      "nombres":"MAYTA VERA MARCELINO ERASMO",
      "dni":1286195,
      "ieId":""
    },
    {
      "nombres":"MERCADO FARFAN GRIMALDO",
      "dni":31430751,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO TORRES JUAN ARNULFO",
      "dni":23883275,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ CORDOVA JUAN BAUTISTA",
      "dni":23883795,
      "ieId":""
    },
    {
      "nombres":"ORELLANA FIGUEROA INES MARITZA",
      "dni":23828326,
      "ieId":""
    },
    {
      "nombres":"OSCCO SOLORZANO JULIO BERNE",
      "dni":23997461,
      "ieId":""
    },
    {
      "nombres":"PALOMINO RIOS MOISES",
      "dni":25127617,
      "ieId":""
    },
    {
      "nombres":"PAUCAR SULLCA VICTOR",
      "dni":25199747,
      "ieId":""
    },
    {
      "nombres":"PAZOS MIRANDA RENE",
      "dni":23843492,
      "ieId":""
    },
    {
      "nombres":"PEREZ SANCHEZ FREDDY",
      "dni":40326796,
      "ieId":""
    },
    {
      "nombres":"RIOS PEREZ ALEJANDRO JUAN",
      "dni":29558129,
      "ieId":""
    },
    {
      "nombres":"SOLIS AUCCAPIÑA ROBERTO",
      "dni":23872912,
      "ieId":""
    },
    {
      "nombres":"TARRAGA DELGADO GREGORIO EFRAIN",
      "dni":23819478,
      "ieId":""
    },
    {
      "nombres":"TUCO PAUCARMAYTA ALBERTO",
      "dni":10487000,
      "ieId":""
    },
    {
      "nombres":"USCACHI SANTOS DE BAYON SATURNINA",
      "dni":23891105,
      "ieId":""
    },
    {
      "nombres":"VENERO HUAMAN ALEJANDRO",
      "dni":23988956,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE QUISPE PABLO JULIAN",
      "dni":23871027,
      "ieId":""
    },
    {
      "nombres":"YABAR LUNA DE CHAVEZ HERMENEGILDA LOURDES",
      "dni":23822949,
      "ieId":""
    },
    {
      "nombres":"ZARATE CASTRO FRANCISCO PEPE",
      "dni":23811643,
      "ieId":""
    },
    {
      "nombres":"ZEBALLOS ALVARADO MANUEL ANTONIO",
      "dni":23955655,
      "ieId":""
    },
    {
      "nombres":"ALMORA MOLINA JUDITH",
      "dni":23878298,
      "ieId":""
    },
    {
      "nombres":"CAHUANA LEIVA LUZ MARINA",
      "dni":23841848,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ PEREZ JORGE WILFREDO",
      "dni":23951884,
      "ieId":""
    },
    {
      "nombres":"CHOQUE MOJONERO JUAN",
      "dni":23898415,
      "ieId":""
    },
    {
      "nombres":"COTOHUANCA HUANCA BEATRIZ",
      "dni":25213324,
      "ieId":""
    },
    {
      "nombres":"DE LA COLINA LOZADA KATIA",
      "dni":23822806,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE ARAGON AQUILINA BENECIA",
      "dni":23883767,
      "ieId":""
    },
    {
      "nombres":"GUILLEN QUINTANILLA VISITACION MIRIAM",
      "dni":23838812,
      "ieId":""
    },
    {
      "nombres":"HUANCA HUILLCAHUAMAN OCTAVIO",
      "dni":23898891,
      "ieId":""
    },
    {
      "nombres":"MEDINA MAMANI ALICIA",
      "dni":41181011,
      "ieId":""
    },
    {
      "nombres":"MIRANDA CUENCA JUANA MARIA",
      "dni":23885653,
      "ieId":""
    },
    {
      "nombres":"MOLLINEDO CENTENO YENI",
      "dni":23948015,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS VALENCIA GODOFREDO",
      "dni":23806163,
      "ieId":""
    },
    {
      "nombres":"PALOMINO ESPEJO JUAN GUALBERTO",
      "dni":23918488,
      "ieId":""
    },
    {
      "nombres":"PANTOJA ORIHUELA BERTHA",
      "dni":23849276,
      "ieId":""
    },
    {
      "nombres":"PEREZ CARREON YONY MARGOT",
      "dni":23802920,
      "ieId":""
    },
    {
      "nombres":"PRIETO CASTILLA NARCISA ZENOVIA",
      "dni":23868994,
      "ieId":""
    },
    {
      "nombres":"RIVEROS PEREA MARINA CIRILA",
      "dni":23877854,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ ANDIA JUANA",
      "dni":23886263,
      "ieId":""
    },
    {
      "nombres":"SOLALIGUE GALLEGOS JESUS",
      "dni":23873404,
      "ieId":""
    },
    {
      "nombres":"VILLA PACHECO NELLY JOSEFINA",
      "dni":23927130,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO ZARATE RENE",
      "dni":23831285,
      "ieId":""
    },
    {
      "nombres":"ESTRADA UGARTE CALISTO WALTER",
      "dni":23896270,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ ESPINOZA MARIA LUISA",
      "dni":23870813,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ PORTILLO TULA LEOCADIA",
      "dni":23878421,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA RETAMOSO ROSA MARIA",
      "dni":23811281,
      "ieId":""
    },
    {
      "nombres":"HERMOZA ALZAMORA NANCY",
      "dni":23923477,
      "ieId":""
    },
    {
      "nombres":"JORGE OCAMPO ANDREA",
      "dni":23882560,
      "ieId":""
    },
    {
      "nombres":"REJAS RAMIREZ LEONARDO JAVIER",
      "dni":23894295,
      "ieId":""
    },
    {
      "nombres":"VARGAS ENRIQUEZ CAROLINA",
      "dni":23926821,
      "ieId":""
    },
    {
      "nombres":"CALANCHA CUBA ZULMA",
      "dni":23854064,
      "ieId":""
    },
    {
      "nombres":"CARDOSO VILLACORTA FLORA",
      "dni":23862885,
      "ieId":""
    },
    {
      "nombres":"CARMONA ESPINOZA ELIANA",
      "dni":23975541,
      "ieId":""
    },
    {
      "nombres":"CHOQUELUQUE CONZA UBALDINA BERTHA",
      "dni":23882346,
      "ieId":""
    },
    {
      "nombres":"GARCIA JARA BETSSY RAQUEL",
      "dni":44886552,
      "ieId":""
    },
    {
      "nombres":"ORDOÑEZ CACERES SHIVANI EMMA",
      "dni":80587217,
      "ieId":""
    },
    {
      "nombres":"PARHUAY LOPEZ ANA MARIA",
      "dni":23980111,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ ANTAYHUA SERLUBIA KARIN",
      "dni":30586162,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAYTA IBARRA SILVERIO",
      "dni":23839935,
      "ieId":""
    },
    {
      "nombres":"FUENTES COLLADO ELOIZA",
      "dni":24702080,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"GUEVARA PIZARRO JUANA",
      "dni":23873038,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"HUARCAYA DE PEREZ JUANA",
      "dni":23840799,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"OLIVERA ENRIQUEZ ZULEMA REGINA",
      "dni":23824862,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"OPORTO NUÑEZ MARGOT LEONOR",
      "dni":23826218,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"PEREYRA PEREZ PACHECO PILAR BENIGNA",
      "dni":23805436,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"SOSA HUANCA MARCELINA",
      "dni":23902379,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"TERRAZAS ARROYO YENNY EDELMIRA",
      "dni":23940455,
      "ieId":"nRvGob4YTJnXiveoW"
    },
    {
      "nombres":"CASTELO YANQUE MARIA ANTONIETA",
      "dni":23922296,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ CABRERA SATURNINA BONIFACIA",
      "dni":23991667,
      "ieId":""
    },
    {
      "nombres":"LOVON PALOMINO AYDEE",
      "dni":24485941,
      "ieId":""
    },
    {
      "nombres":"ORDOÑEZ CACERES KATY CAROLA",
      "dni":80245718,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ BALLADARES LIZ SADITH",
      "dni":41533543,
      "ieId":""
    },
    {
      "nombres":"SALLO HUALLPAYUNCA CATALINA",
      "dni":23988396,
      "ieId":""
    },
    {
      "nombres":"HUANCA LOPEZ ALINA",
      "dni":24006635,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA ALVAREZ SADHIT GERALDINE",
      "dni":40883009,
      "ieId":""
    },
    {
      "nombres":"CEBALLOS RODRIGUEZ YOYI TERESA",
      "dni":23843617,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS CONDORI BEATRIZ",
      "dni":23848848,
      "ieId":""
    },
    {
      "nombres":"VILLENA VERA DE JARA IRMA",
      "dni":23873060,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA NAVARRO DANITZA MAGALY",
      "dni":42378469,
      "ieId":""
    },
    {
      "nombres":"GAMARRA PINO BETSABE",
      "dni":23834764,
      "ieId":""
    },
    {
      "nombres":"UNDA SIMBORTH KARINA",
      "dni":23979575,
      "ieId":""
    },
    {
      "nombres":"RAMOS URBIOLA ISELA",
      "dni":25001826,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI VILCA GLADYS",
      "dni":23837215,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA RAMIREZ DELFINA",
      "dni":23819794,
      "ieId":""
    },
    {
      "nombres":"GARCIA ZEGARRA ADOLFO",
      "dni":23840715,
      "ieId":""
    },
    {
      "nombres":"BUSTOS GAMARRA LUIS FELIPE",
      "dni":41158944,
      "ieId":""
    },
    {
      "nombres":"CALLE RODRIGUEZ LOURDES CECILIA",
      "dni":23925219,
      "ieId":""
    },
    {
      "nombres":"CASTAÑEDA DE DUEÑAS JESUS SONIA",
      "dni":23884815,
      "ieId":""
    },
    {
      "nombres":"FOLLANA LOAIZA GLENIS",
      "dni":23948054,
      "ieId":""
    },
    {
      "nombres":"GAMARRA GONZALEZ BELINDA BETSABE",
      "dni":7761438,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HUANCA VILMA",
      "dni":25000829,
      "ieId":""
    },
    {
      "nombres":"TERAN LLANQUI RAISA CONCEPCION",
      "dni":44106896,
      "ieId":""
    },
    {
      "nombres":"VALENCIA CASTRO NAY RUTH",
      "dni":23863004,
      "ieId":""
    },
    {
      "nombres":"CCORAHUA TANCAYLLO ALBERTO",
      "dni":24886040,
      "ieId":""
    },
    {
      "nombres":"HERMOZA MONTALVO YAHAIRA VIOLETA",
      "dni":42250070,
      "ieId":""
    },
    {
      "nombres":"MEZA BERRIO NIMIA CELINDA",
      "dni":23984591,
      "ieId":""
    },
    {
      "nombres":"MONTUFAR VALDIGLESIAS FANY",
      "dni":23954606,
      "ieId":""
    },
    {
      "nombres":"RODRIGO DEL PINO EFRAIN PERCY",
      "dni":23806910,
      "ieId":""
    },
    {
      "nombres":"SAICO ZAMATA VICTORIANO",
      "dni":24888826,
      "ieId":""
    },
    {
      "nombres":"VALLE ROMERO AMADOR",
      "dni":24465186,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SEGUNDO CATHERINE VICTORIA",
      "dni":45827050,
      "ieId":""
    },
    {
      "nombres":"VELARDE MEJIA JANNET TERESA",
      "dni":23817707,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ITURRIAGA JULIO",
      "dni":23843302,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI SONCCO HERNAN",
      "dni":25304154,
      "ieId":""
    },
    {
      "nombres":"CAMPANA MOREANO ELIZABETH",
      "dni":24979387,
      "ieId":""
    },
    {
      "nombres":"CARTAGENA CARTAGENA JOSE",
      "dni":25196199,
      "ieId":""
    },
    {
      "nombres":"CASTILLA DE CERVANTES LUISA",
      "dni":23910590,
      "ieId":""
    },
    {
      "nombres":"CCAYHUA DE LOS RIOS ELVA SONIA",
      "dni":24286490,
      "ieId":""
    },
    {
      "nombres":"CHALLCO CAVIEDES SONIA",
      "dni":23844323,
      "ieId":""
    },
    {
      "nombres":"HUILLCA QUISPE FRANCISCA",
      "dni":23835979,
      "ieId":""
    },
    {
      "nombres":"LIVANO VARGAS SONIA",
      "dni":23924875,
      "ieId":""
    },
    {
      "nombres":"ONCOY QUISPE MARLENY",
      "dni":23920293,
      "ieId":""
    },
    {
      "nombres":"PUMA PALMA JESUS",
      "dni":23960797,
      "ieId":""
    },
    {
      "nombres":"SALAZAR PEÑA AMPARO",
      "dni":23916999,
      "ieId":""
    },
    {
      "nombres":"VALENCIA BOCANGEL LIDUVINA LUZ",
      "dni":23806087,
      "ieId":""
    },
    {
      "nombres":"AYRAMPO ARRIAGA MERY HERMINIA",
      "dni":45940201,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BACA SALIZAR YENY GILMA",
      "dni":23917893,
      "ieId":""
    },
    {
      "nombres":"LEVITA CCORIMANYA ADRIANA",
      "dni":25320278,
      "ieId":""
    },
    {
      "nombres":"VILLENA RAMIREZ YHESENIA",
      "dni":23978930,
      "ieId":""
    },
    {
      "nombres":"ALFERES ACHINQUIPA BEATO",
      "dni":23956310,
      "ieId":""
    },
    {
      "nombres":"ARNADO ELIAS GAUDENCIA",
      "dni":23806497,
      "ieId":""
    },
    {
      "nombres":"BAZAN LOPEZ DANIEL SEBASTIAN",
      "dni":23968845,
      "ieId":""
    },
    {
      "nombres":"CABALLERO PARRA RONALD",
      "dni":23982253,
      "ieId":""
    },
    {
      "nombres":"CAVERO CATALAN BLADIMIRO WASHINGTON",
      "dni":40858309,
      "ieId":""
    },
    {
      "nombres":"CAVIEDES CHOQUE SONIA",
      "dni":23835400,
      "ieId":""
    },
    {
      "nombres":"CCAYHUA DE LOS RIOS MARIA JESUS",
      "dni":24287016,
      "ieId":""
    },
    {
      "nombres":"COAVOY PEREA MARTHA",
      "dni":23803658,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE COPACONDORI CARMEN",
      "dni":23945349,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HOLGADO MARIA ALEJA",
      "dni":23850993,
      "ieId":""
    },
    {
      "nombres":"HUAMAN BRAVO VILMA",
      "dni":23965772,
      "ieId":""
    },
    {
      "nombres":"HUAMANVILCA ARIAS ALICIA",
      "dni":23914061,
      "ieId":""
    },
    {
      "nombres":"MEZA HUAYCOCHEA SONIA ROSA",
      "dni":23825163,
      "ieId":""
    },
    {
      "nombres":"OJEDA ROSAS GRETA",
      "dni":23864084,
      "ieId":""
    },
    {
      "nombres":"OLARTE LUNA JUANA MATILDE",
      "dni":25204091,
      "ieId":""
    },
    {
      "nombres":"QUISPE ESCOBAR PURIFICACION",
      "dni":23853905,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ OCAMPO LUIS",
      "dni":25130320,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ TORRES CARLOS EINAR",
      "dni":23837734,
      "ieId":""
    },
    {
      "nombres":"SORIA FIGUEROA BETTY",
      "dni":23934054,
      "ieId":""
    },
    {
      "nombres":"TACUSI CHUQUITAPA ABELINA ANDREA",
      "dni":24698324,
      "ieId":""
    },
    {
      "nombres":"CONDORI MITA JESUS JACINTO",
      "dni":23845613,
      "ieId":""
    },
    {
      "nombres":"GARCES SILVA FLAVIO",
      "dni":23908449,
      "ieId":""
    },
    {
      "nombres":"PEÑA PUMA SIRIO",
      "dni":23825147,
      "ieId":""
    },
    {
      "nombres":"QUISPE LEZAMA MARIO JESUS",
      "dni":23803890,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUAIHUA ELIANA",
      "dni":23902389,
      "ieId":""
    },
    {
      "nombres":"ANAYA ANAYA NORMA",
      "dni":23947972,
      "ieId":""
    },
    {
      "nombres":"GUERRA GAMARRA HILDA BEATRIZ",
      "dni":23804527,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ROCA AIDE",
      "dni":23952360,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PACO DORIS FRIDA",
      "dni":23944494,
      "ieId":""
    },
    {
      "nombres":"INCARROCA CHURATA FREDDY EFRAIN",
      "dni":40546420,
      "ieId":""
    },
    {
      "nombres":"LOAIZA VILLACORTA ZONIA VICENTINA",
      "dni":25061160,
      "ieId":""
    },
    {
      "nombres":"LUQUE CCAHUANA LEANDRO",
      "dni":23807731,
      "ieId":""
    },
    {
      "nombres":"MONZON CONDORI GIOVANNA",
      "dni":23982725,
      "ieId":""
    },
    {
      "nombres":"MORA NUÑEZ ROSA MARIA",
      "dni":23813498,
      "ieId":""
    },
    {
      "nombres":"MOTTA CUSIHUALLPA VDA. YONY",
      "dni":25301830,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ QUISPE FELICITAS",
      "dni":23942862,
      "ieId":""
    },
    {
      "nombres":"OLLACHICA MENDOZA ANDRES HUGO",
      "dni":24701782,
      "ieId":""
    },
    {
      "nombres":"PALOMINO SIHUA JUDHIT SOCORRO",
      "dni":23882878,
      "ieId":""
    },
    {
      "nombres":"TELLO MANRIQUE JEAN GERMAN",
      "dni":23845677,
      "ieId":""
    },
    {
      "nombres":"ZUTA CONDE LUCY",
      "dni":23989718,
      "ieId":""
    },
    {
      "nombres":"AUCCAPURO MIRANDA VILMA MARIA",
      "dni":23934334,
      "ieId":""
    },
    {
      "nombres":"CARDENAS RICALDE AMPARO",
      "dni":23926854,
      "ieId":""
    },
    {
      "nombres":"CARRASCO LUNA KARIN",
      "dni":24283470,
      "ieId":""
    },
    {
      "nombres":"CHALLCO YANAC MARIA ESTHER",
      "dni":25304561,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA ANDIA NATALIO",
      "dni":23806518,
      "ieId":""
    },
    {
      "nombres":"GAMBARINI VERA RICHARD",
      "dni":24886175,
      "ieId":""
    },
    {
      "nombres":"HONOR CASAPERALTA YONY PILAR",
      "dni":23843887,
      "ieId":""
    },
    {
      "nombres":"JORDAN ZUÑIGA DINA ROSA",
      "dni":23884942,
      "ieId":""
    },
    {
      "nombres":"MAMANI VILCA NERI NATALIA",
      "dni":24703838,
      "ieId":""
    },
    {
      "nombres":"OCHOA LADRON DE GUEVARA ANA MERBIC",
      "dni":23872861,
      "ieId":""
    },
    {
      "nombres":"PILLPINTO ESPINOZA RAMON MARCO",
      "dni":23858275,
      "ieId":""
    },
    {
      "nombres":"QUISPE COLQUE DINA",
      "dni":23892615,
      "ieId":""
    },
    {
      "nombres":"QUISPE SAIRE FRANCISCO",
      "dni":25214092,
      "ieId":""
    },
    {
      "nombres":"RAYME DAVALOS DE CAMPAN CONCEPCION AMBROCIA",
      "dni":31005607,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA AYESTA ALICIA",
      "dni":31126673,
      "ieId":""
    },
    {
      "nombres":"CAHUANTICO CCASA NELY",
      "dni":24711963,
      "ieId":""
    },
    {
      "nombres":"CANALES SIERRA BRIW",
      "dni":23946183,
      "ieId":""
    },
    {
      "nombres":"CHAMPY SARMIENTO PATTY",
      "dni":23860258,
      "ieId":""
    },
    {
      "nombres":"COLLANTES HUAMAN LUZ MARINA",
      "dni":24467301,
      "ieId":""
    },
    {
      "nombres":"CORRALES TRUJILLO ESTHER",
      "dni":23870265,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA GALLEGOS REVELINO",
      "dni":25319652,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CASTILLO SATURNINA",
      "dni":23904253,
      "ieId":""
    },
    {
      "nombres":"GALDOS BEJAR ALICIA",
      "dni":23905932,
      "ieId":""
    },
    {
      "nombres":"HILARES SOLIS EVA",
      "dni":25010062,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA JANAMPA ARMANDINA",
      "dni":25301144,
      "ieId":""
    },
    {
      "nombres":"JARA CALVO MIRTHA GEORGINA",
      "dni":24704010,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ TRUJILLO DE PI JUANA ELIANA",
      "dni":23951545,
      "ieId":""
    },
    {
      "nombres":"PASTOR LEON ALBERTO",
      "dni":23902527,
      "ieId":""
    },
    {
      "nombres":"PUENTE DE LA VEGA MAYTA JUANA EVANGELINA",
      "dni":23871532,
      "ieId":""
    },
    {
      "nombres":"QUISPE LAURA JONHY GERARDO",
      "dni":40796984,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ ROJAS YONY",
      "dni":23836272,
      "ieId":""
    },
    {
      "nombres":"SOTELO ALARCON LUCY SEGUNDINA",
      "dni":23951508,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA MIRANDA ROLANDO",
      "dni":23954610,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA MORALES MARLENE",
      "dni":24462347,
      "ieId":""
    },
    {
      "nombres":"PANTOJA PALOMINO MARTIN",
      "dni":23877435,
      "ieId":""
    },
    {
      "nombres":"PAPA DELGADO DENIS",
      "dni":24993678,
      "ieId":""
    },
    {
      "nombres":"BACA CARDENAS IVONE ROXANA",
      "dni":23812460,
      "ieId":""
    },
    {
      "nombres":"CALVO MORMONTOY AUGUSTA SOLEDAD",
      "dni":25318824,
      "ieId":""
    },
    {
      "nombres":"CAMPANA BECERRA LAURA",
      "dni":23845182,
      "ieId":""
    },
    {
      "nombres":"CONDORI ALZAMORA JOSE FELIX",
      "dni":23821290,
      "ieId":""
    },
    {
      "nombres":"CORTEZ VELASQUEZ MIGUEL ANGEL",
      "dni":23876298,
      "ieId":""
    },
    {
      "nombres":"DIAZ DE OTAZU ELIDIA MARIA",
      "dni":23828466,
      "ieId":""
    },
    {
      "nombres":"HIDALGO TORRES MARIEL",
      "dni":24461670,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUACAC GLICERIO",
      "dni":23936134,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA JANAMPA JULIO CESAR",
      "dni":25302016,
      "ieId":""
    },
    {
      "nombres":"MANYA ZAVALETA ANGEL GABINO",
      "dni":24714816,
      "ieId":""
    },
    {
      "nombres":"MERCADO TORRE ISABEL ROCIO",
      "dni":23860433,
      "ieId":""
    },
    {
      "nombres":"NAVARRO MONROE LUIS JAVIER",
      "dni":6733398,
      "ieId":""
    },
    {
      "nombres":"PALOMINO GONZALES CELSA MILCA",
      "dni":31040746,
      "ieId":""
    },
    {
      "nombres":"PALOMINO HUAMAN LOURDES",
      "dni":23966677,
      "ieId":""
    },
    {
      "nombres":"PRADO TISOC NANCY DINA",
      "dni":23803632,
      "ieId":""
    },
    {
      "nombres":"QUINTASI DE QUISPE PIEDAD",
      "dni":23988255,
      "ieId":""
    },
    {
      "nombres":"QUIRITA PIZARRO VELIA MIRTHA",
      "dni":23984138,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN FLORA",
      "dni":23822876,
      "ieId":""
    },
    {
      "nombres":"QUISPE LEIVA JUANA SABINA",
      "dni":23918803,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUILLA JESUS",
      "dni":23886488,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ ALFARO CLAUDIA GLADIZ",
      "dni":23917676,
      "ieId":""
    },
    {
      "nombres":"VERA CHAVEZ SOFIA",
      "dni":24469908,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA SELIS RENATO",
      "dni":24983750,
      "ieId":""
    },
    {
      "nombres":"ZARATE VDA. DE CABEZUDO JULIA ALEJANDRINA",
      "dni":23870594,
      "ieId":""
    },
    {
      "nombres":"APARICIO DE ARIAS SONIA EMPERATRIZ",
      "dni":23925660,
      "ieId":""
    },
    {
      "nombres":"ARCE ALVAREZ WILFREDO",
      "dni":23810889,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"AREVALO DAVILA MARIA LOURDES",
      "dni":23942409,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"ARIAS ALMARAS MARIANO CONCEPCION",
      "dni":23925659,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"AZA GONZALES CLEDY LUZ",
      "dni":24995365,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"BOZA SEQUEIROS CRISTINA",
      "dni":31005379,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"CERAZO CULLANCO HONORIA CLEMENCIA",
      "dni":23903718,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"CHARCA MAMANI ERNESTO",
      "dni":24697800,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"CHAVEZ CHEVARRIA RUBEN EBERT",
      "dni":23820797,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"CONDORI ARAOZ ARMANDO",
      "dni":23951921,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"CORRALES VILLALOBOS WASHINGTON",
      "dni":23894429,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"COYLA TITO ANDRES AQUILINO",
      "dni":23823602,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"CRUZ LEON CARMELA",
      "dni":23830953,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"ESTRADA CHACON LID HAYDEE",
      "dni":23976260,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"FARFAN GUILLEN JUAN",
      "dni":23959402,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"FARFAN SERRANO JUAN FRANCISCO",
      "dni":23877872,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"IZQUIERDO VALDIVIA GLORIA",
      "dni":23803035,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"LLACTA MORVELI YRMA CONSTANTINA",
      "dni":23848483,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"LUCANA MEDINA ANGEL",
      "dni":23825835,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"MADERA ROJAS AURELIO",
      "dni":23964399,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"MERCADO SOLORZANO CELSO",
      "dni":25201860,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"OLARTE DE CACERES SADAY",
      "dni":23982810,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"PONCE DE LEON SARMIENTO RAUL",
      "dni":23888742,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"TERAN BELLIDO LUZ BETY",
      "dni":23824870,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"TUPACYUPANQUI ARREDONDO REGINA",
      "dni":23919015,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"VILCHES JORDAN CASIMIRA",
      "dni":23836348,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"ZULOAGA CANDIA GLADYS",
      "dni":23913583,
      "ieId":"rJybsQLAGumM3oW4T"
    },
    {
      "nombres":"BARCENA CARRASCO LAURA",
      "dni":44169464,
      "ieId":""
    },
    {
      "nombres":"ARAUJO GARCIA VILMA",
      "dni":23819915,
      "ieId":""
    },
    {
      "nombres":"CANAL MORALES ELVIA",
      "dni":23934246,
      "ieId":""
    },
    {
      "nombres":"CARDENAS CUBA JULIA MARGOT",
      "dni":23901978,
      "ieId":""
    },
    {
      "nombres":"CASTILLO MUJICA SENON",
      "dni":23894814,
      "ieId":""
    },
    {
      "nombres":"CENTENO HUAMANI GLORIA",
      "dni":31020645,
      "ieId":""
    },
    {
      "nombres":"CEVALLOS VELASCO SANDRA PATRICIA",
      "dni":23924211,
      "ieId":""
    },
    {
      "nombres":"CUELLO CCOA EVA",
      "dni":24703590,
      "ieId":""
    },
    {
      "nombres":"CUSIRIMAY MAMANI DE CRU MARGOT",
      "dni":23856248,
      "ieId":""
    },
    {
      "nombres":"DIAZ NAVARRO CARMEN PILAR",
      "dni":42667979,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ CANO CARMEN",
      "dni":23852912,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ AMAUT IRENE",
      "dni":23932256,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ SANCHEZ NATALIA",
      "dni":23851230,
      "ieId":""
    },
    {
      "nombres":"GUEVARA HUALLPAYUNCA CELIA",
      "dni":23902274,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ PALIZA BEATRIZ",
      "dni":23832207,
      "ieId":""
    },
    {
      "nombres":"HERRERA JAHNSEN SORAYA MARIA",
      "dni":23874224,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MORA WILFREDO",
      "dni":23809841,
      "ieId":""
    },
    {
      "nombres":"HUANCACHOQUE CUSI GLADIS",
      "dni":24717298,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI PEÑA WENCESLAO",
      "dni":23909963,
      "ieId":""
    },
    {
      "nombres":"JARA LOVATON MARGARITA",
      "dni":24464495,
      "ieId":""
    },
    {
      "nombres":"LLAVE TAPIA CARMEN ROSA",
      "dni":24981921,
      "ieId":""
    },
    {
      "nombres":"MEDINA SANCHEZ BENEDICTA MILCA",
      "dni":23820606,
      "ieId":""
    },
    {
      "nombres":"PALOMINO CONDO LUZ MARINA",
      "dni":23861962,
      "ieId":""
    },
    {
      "nombres":"PEREZ FLOREZ ABRAHAM EDILBERTO",
      "dni":23905528,
      "ieId":""
    },
    {
      "nombres":"PILARES MAMANI LUCIANA",
      "dni":7253560,
      "ieId":""
    },
    {
      "nombres":"QUISPE ESPINOZA LUCIA",
      "dni":23858369,
      "ieId":""
    },
    {
      "nombres":"TAPIA QUISPE FROILAN",
      "dni":1510262,
      "ieId":""
    },
    {
      "nombres":"TERZI MORALES MIGUEL ANGEL",
      "dni":23817801,
      "ieId":""
    },
    {
      "nombres":"TIMPO ESCOBEDO GUILLERMINA DORIS",
      "dni":23912175,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI HERRERA LISBETH",
      "dni":23886689,
      "ieId":""
    },
    {
      "nombres":"YUCRA DE MEZA SEVERINA",
      "dni":23991241,
      "ieId":""
    },
    {
      "nombres":"ARELLANO PILLCO JOSEFINA",
      "dni":24464393,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ARROYO VILMA",
      "dni":23923929,
      "ieId":""
    },
    {
      "nombres":"CONDORI NINA VALERIO",
      "dni":23964468,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE VDA.DE SAAVED LIDIA ANGELICA",
      "dni":23959253,
      "ieId":""
    },
    {
      "nombres":"GARCIA TURPO EVA",
      "dni":4960806,
      "ieId":""
    },
    {
      "nombres":"GIL AQUINO LILIAM DEL ROCIO",
      "dni":25326246,
      "ieId":""
    },
    {
      "nombres":"HUILLCANINA QUISPE MARIA MAGDALENA",
      "dni":23805656,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ FERNANDEZ TRINIDAD",
      "dni":23954789,
      "ieId":""
    },
    {
      "nombres":"MORMONTOY CAÑARI ROCIO",
      "dni":25319685,
      "ieId":""
    },
    {
      "nombres":"QUISPE YUCRA DOMINGA",
      "dni":25623423,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI ATAUSINCHI GLORIA LUISA",
      "dni":25305040,
      "ieId":""
    },
    {
      "nombres":"AYTE HUAMAN MARGARITA",
      "dni":23827163,
      "ieId":""
    },
    {
      "nombres":"BACA MOREANO HAYDEE",
      "dni":23975345,
      "ieId":""
    },
    {
      "nombres":"BAEZ QUISPE RUTH ALEJANDRINA",
      "dni":23816847,
      "ieId":""
    },
    {
      "nombres":"BRAVO ESTRADA HILDA",
      "dni":23819927,
      "ieId":""
    },
    {
      "nombres":"BRAVO PAREDES RINA MARCELA",
      "dni":23848985,
      "ieId":""
    },
    {
      "nombres":"CASTILLA PAGAZA ZENOVIA",
      "dni":24468844,
      "ieId":""
    },
    {
      "nombres":"CRUZ ESPINOZA ANA",
      "dni":23930775,
      "ieId":""
    },
    {
      "nombres":"CUSI VALER ELIAS",
      "dni":23959778,
      "ieId":""
    },
    {
      "nombres":"FARFAN LAUREL MAXIMILIANA",
      "dni":23901379,
      "ieId":""
    },
    {
      "nombres":"FARFAN OCSA MARITZA",
      "dni":23978558,
      "ieId":""
    },
    {
      "nombres":"HUILLCA COSIO NESTOR",
      "dni":23876673,
      "ieId":""
    },
    {
      "nombres":"LECHUGA MORA RAMIRO",
      "dni":25304227,
      "ieId":""
    },
    {
      "nombres":"MANGA ALEGRIA EVA",
      "dni":23809469,
      "ieId":""
    },
    {
      "nombres":"MOREANO TRUJILLO ROMULO",
      "dni":23950130,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ MUÑOZ BENIGNO",
      "dni":23940742,
      "ieId":""
    },
    {
      "nombres":"OJEDA MONTES MARIA LINA",
      "dni":23858010,
      "ieId":""
    },
    {
      "nombres":"OLAVE DE CASAFRANCA MARINA LUCILA",
      "dni":23851521,
      "ieId":""
    },
    {
      "nombres":"PAZ AGUILAR POLICARPO VLADIMIR",
      "dni":24696798,
      "ieId":""
    },
    {
      "nombres":"PINO MUÑIZ SAIDA EDELMIRA",
      "dni":23938483,
      "ieId":""
    },
    {
      "nombres":"QUIRITA SULLA FREDY WILSON",
      "dni":24882803,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ PAREDES MARIA GIOVANNA",
      "dni":23872215,
      "ieId":""
    },
    {
      "nombres":"RAYO YANQUI CIPRIANA",
      "dni":23836293,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ GIBAJA MARIA ERNESTINA",
      "dni":23835644,
      "ieId":""
    },
    {
      "nombres":"SALAS LOAYZA LETICIA",
      "dni":9318192,
      "ieId":""
    },
    {
      "nombres":"SALAZAR CALLA EDGAR",
      "dni":2430942,
      "ieId":""
    },
    {
      "nombres":"SALAZAR FARFAN LIDIA",
      "dni":23840923,
      "ieId":""
    },
    {
      "nombres":"SALAZAR LOAYZA SORAIDA",
      "dni":24000854,
      "ieId":""
    },
    {
      "nombres":"SERRANO FLOREZ ROSA EXALTACION",
      "dni":23806180,
      "ieId":""
    },
    {
      "nombres":"TTUPA QUISPE SILVIA",
      "dni":23995528,
      "ieId":""
    },
    {
      "nombres":"USCA CORDOVA ELENA",
      "dni":25002167,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA RODRIGUEZ JORGE MELQUIADES",
      "dni":25304090,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LAOS JEANINE",
      "dni":40453987,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"ESTRADA CHIRINOS VIRGINIA CARMEN",
      "dni":23874688,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"JIMENEZ DE MIRANDA JUANA DE DIOS",
      "dni":23982112,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"NUÑEZ SOLIS GEORGINA",
      "dni":23940638,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"SARDON HUAYHUA CARMEN LOURDES",
      "dni":80669276,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"SOTOMAYOR CANDIA ROSA",
      "dni":23939923,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"TORRES GUZMAN MARITZA ELIANA",
      "dni":23901931,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"YARI MENDOZA DELFINA",
      "dni":23864983,
      "ieId":"ZhQfkZ82J6apdbEEg"
    },
    {
      "nombres":"ABARCA CALDERON ELIZABETH",
      "dni":23908457,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ACOSTA ROCA HAYDEE GLADYS",
      "dni":23861325,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ACUÑA MAMANI MABEL ELIDA",
      "dni":40068588,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"AGUILAR QUISPE ANGEL",
      "dni":1228740,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"AGUIRRE SERRANO ANGELICA",
      "dni":23839532,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ALATA JAQUEHUA VERONICA",
      "dni":23965646,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ALVAREZ SAYCO FREDY",
      "dni":23940049,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ANCHANTE GUILLINTA CRISTINA GIOVANNA",
      "dni":41822052,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ARI TICONA ROGER",
      "dni":23893840,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BACA DIAZ PABLO",
      "dni":23814537,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BALDEON HUAMAN ERICHT ADOLFO",
      "dni":23977195,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BENAVENTE BARRETO JOHN FREDDY",
      "dni":23936808,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BENAVENTE FERNANDEZ MARISOL JOSEFINA",
      "dni":23878047,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BRAVO PANIAGUA YOLANDA",
      "dni":31005979,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BUSTAMANTE DEL CASTILLO ALEJANDRO",
      "dni":23844967,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"BUSTINZA PELAEZ CLAUDIO",
      "dni":23826649,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CAHUANA QUISPE FELIPE",
      "dni":1292202,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CANSAYA ESQUIVEL MARIO FREDHI",
      "dni":24702215,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CASTELO VALVERDE NESTOR",
      "dni":29330170,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CAYO MOSCOSO JOSE FELIPE",
      "dni":23823134,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CCAHUA CUSIHUALLPA FLORENCIO",
      "dni":23912404,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CCOPA HUAYHUA SABINO",
      "dni":23825474,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CHALCO FERNANDEZ JULIO CESAR",
      "dni":24714058,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CHECYA QUISPE EDSON",
      "dni":41605747,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CHEVARRIA ANDIA ROBERTO",
      "dni":23880056,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CJUIRO TTITO ISAIAS",
      "dni":23844521,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"COLLANTES QUISPE ALICIA",
      "dni":1340635,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CRUZ MOLLOHUANCA LUIS VICTOR",
      "dni":23929125,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"CUSIHUALLPA SOTAYA CRISPIN JORGE",
      "dni":23876581,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"DELGADO TAPIA EUSEBIO",
      "dni":23876633,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"DIAZ ARAGON TITO ANGEL",
      "dni":23844778,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"FEBRES GALLARDO LEOPOLDO ALBERTO",
      "dni":23802342,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"FUENTES DELGADO PABLO",
      "dni":23922953,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"GALDO CABALLERO JULIO",
      "dni":23915973,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"GALDOS DONGO CESAR ERNESTO",
      "dni":25304892,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"GARRIDO RAMIREZ WALTER",
      "dni":23804636,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"GUTIERREZ MALDONADO DANIEL INDALECIO",
      "dni":25184188,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"HOLGUINO HUAMANQUISPE HERNAN CESAR",
      "dni":23998425,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"HUAILLANI MAMANI DANIEL",
      "dni":24698541,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"HUALLPA SOTA EDWAR ROGER",
      "dni":43418022,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"HUARANCCA CUTIRE AMERICO",
      "dni":23984962,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"JORGE ROJAS SEGUNDO FORTUNATO",
      "dni":23830687,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"LA TORRE PINZON CARLOS ABEL",
      "dni":23869659,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"LLACTA MORVELI FORTUNATO",
      "dni":23839406,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"LOAIZA DE ROMAN AMANDA",
      "dni":24363720,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MACHACA VILAVELA NORA",
      "dni":23992883,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MAITA SUTTA CEFERINO",
      "dni":23826973,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MAXI MENZALA ARMANDO",
      "dni":41759714,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MENDOZA DE PACHECO MARIA LUISA",
      "dni":23829331,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MIRANDA SOTA GUADALUPE GRISELDA",
      "dni":23875275,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MONTALVO CUBA MELCHOR",
      "dni":25186837,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"MORIANO ALENDEZ JOSE",
      "dni":23926650,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"OCAMPO GARZON PATRICIA VERONICA",
      "dni":23827926,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"OLIVERA ZUÑIGA SANDRA ESPERANZA",
      "dni":23980660,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ORIHUELA CARTOLIN GRIMALDO",
      "dni":23920085,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ORTIZ HUAMAN LUCIO",
      "dni":23871737,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ORTIZ SALAS DIANA ASUNCION",
      "dni":23933660,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"PALIZA AIMA LUIS",
      "dni":23850839,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"PALOMINO RIOS ALEJANDRO",
      "dni":23804039,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"QUISPE SUNI JACOB",
      "dni":23929685,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"RAMOS CHAMBI ANTONIO PELAYO",
      "dni":1543970,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"RAMOS YBARRA GRACIELA",
      "dni":23803977,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"REYNOSO ORTIZ ROLANDO",
      "dni":29267255,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"RIVAS LOPEZ ELIANA",
      "dni":23918014,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"RODRIGUEZ SANCHEZ ZENON",
      "dni":23879933,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"RODRIGUEZ TORRES FELIPE",
      "dni":23910260,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ROZAS RAMIREZ DE SANZ JUANA CLARA",
      "dni":23832093,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"SAAVEDRA COHAGUILA YURI MARTIN",
      "dni":23860211,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"SANCHEZ BACA LUIS ZENON",
      "dni":23933638,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"TACUSI NINANQUI ERIBERTO",
      "dni":24713270,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"TINCALLPA SAIRE DAVID HONORIO",
      "dni":23989264,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"TORRES GUILLEN LUCILA",
      "dni":23835337,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"TUMI QUISOCALA ROLANDO ROGELIO",
      "dni":2146432,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"VALDIVIA SALAZAR EMETERIO",
      "dni":23953683,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"VARGAS SANTANDER LEONCIO GUMERCINDO",
      "dni":23951721,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"VELASCO DE FLORES RINA",
      "dni":23842509,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"YUCRA QUISPE MARIA ISABEL",
      "dni":23930591,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"YUPAYCANA SERRANO RUCKMINY",
      "dni":23978875,
      "ieId":"2BwCTHZhvZEENiJ5x"
    },
    {
      "nombres":"ALVAREZ ALFARO CIPRIANA CORINA",
      "dni":23807186,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GARCIA ESTHER CELINDA",
      "dni":23803916,
      "ieId":""
    },
    {
      "nombres":"CCURO OLAVE BERTHA",
      "dni":23818188,
      "ieId":""
    },
    {
      "nombres":"CHICATA TORRES JOSE LUIS",
      "dni":23961483,
      "ieId":""
    },
    {
      "nombres":"CHUCYA SALLO HAYDEE UBALDINA",
      "dni":23937819,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS HUAMANI GIOVANA",
      "dni":23954414,
      "ieId":""
    },
    {
      "nombres":"GONGORA LUNA ELIZABETH",
      "dni":23895684,
      "ieId":""
    },
    {
      "nombres":"LLAMACPONCCA ROMAN YOLANDA",
      "dni":23930013,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE URSINA",
      "dni":23932009,
      "ieId":""
    },
    {
      "nombres":"PAUCAR INCARROCA JUAN PIO",
      "dni":23938079,
      "ieId":""
    },
    {
      "nombres":"PIZANGO ISUIZA GLORIA ALICIA",
      "dni":5361415,
      "ieId":""
    },
    {
      "nombres":"SULLCA HUAMAN CONCEPCION",
      "dni":23943650,
      "ieId":""
    },
    {
      "nombres":"SUYO CONDORCCAHUA KILDER",
      "dni":42325485,
      "ieId":""
    },
    {
      "nombres":"TELLO ESCALANTE NANCY ROXANA",
      "dni":23925306,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA VALENZUELA ELVA",
      "dni":23843069,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA RAMOS JESUS JOVANA",
      "dni":1320280,
      "ieId":""
    },
    {
      "nombres":"ALATA JAQUEHUA SEGUNDINA",
      "dni":23862887,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"ASTETE SAMANEZ GIOVANA",
      "dni":25209492,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"AUCA MENDOZA ROSA",
      "dni":23937672,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"BACA VDA DE RODRIGUEZ MARIA",
      "dni":23964037,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"BATALLANOS DE ARCE RUTH",
      "dni":23810888,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"BATALLANOS POLANCO DULA",
      "dni":23915381,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CAMACHO ARAGON MARIA JESUS",
      "dni":23854414,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CARPIO CASCAMAYTA KATY ELIANA",
      "dni":40377827,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CHURA AQUINO ERNESTO",
      "dni":23953010,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CORNEJO VERGARA RENE",
      "dni":23805705,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CORRALES HUAMAN DORIS YANINA",
      "dni":25187603,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CRUZ MIRANDA TOMASA",
      "dni":23836607,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CUSICUNA QUISPE MARTHA",
      "dni":23908080,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"CUSIHUAMAN MENDOZA YONY",
      "dni":23938153,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"DUEÑAS VILLARROEL MERCEDES",
      "dni":23914757,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"ESPEJO RAMIREZ ELIANA",
      "dni":23981831,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"ESPINOZA AMPUERO CARMEN ROSA",
      "dni":23968760,
      "ieId":"zTw43FtJkQGxwyWtizTw43FtJkQGxwyWti"
    },
    {
      "nombres":"FERRO BARCENA ZANDRA",
      "dni":23937954,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"GONZALES CARDE-A ROMULO",
      "dni":24678593,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"GONZALES HUARCAYA LUZ MARINA",
      "dni":23944028,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"GUARNIZO VELASQUEZ JULISSA",
      "dni":24006436,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"GUZMAN SALAS MARITZA",
      "dni":40980024,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"HOYOS DE MELLADO AURELIA",
      "dni":23815859,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"HUAYTA HURTADO MILUSKA",
      "dni":23993799,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"JUSTINIANI MERCADO LUISA MARGARITA",
      "dni":23850497,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"MANRIQUE HERRERA BRAULIO SANTIAGO",
      "dni":23813967,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"MAQUERA LAYME TITO AMADEO",
      "dni":1341383,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"MONTEAGUDO DE DEL CARPI MARIA ESPERANZA",
      "dni":23808502,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"MONTUFAR SIERRA ROBERTO",
      "dni":24703162,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"MUJICA CASTELO LUIS ADRIAN",
      "dni":23999208,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"NINA CASCAMAITA GRACIELA",
      "dni":23839168,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"OLARTE OCHOA KATYA",
      "dni":23946030,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"OQUENDO ACURIO LEONOR",
      "dni":23947248,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"ORIHUELA PEREZ GUADALUPE",
      "dni":23945883,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"OSORIO HUAMAN LAURA IVET",
      "dni":42129673,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"OVIEDO BALLADARES FELIX",
      "dni":23925049,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"PANTI AYTE CARMEN GIOVANNA",
      "dni":40147115,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"PILLCO PAZ LUISA",
      "dni":23827823,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"PINO CCORICASA JUAN",
      "dni":40031076,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"QUINTANILLA BATALLANOS RENE FELIPE",
      "dni":25000956,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"QUISPE CUSIYUPANQUI KATTY",
      "dni":24495675,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"QUISPE RODRIGUEZ CLARA MARGOT",
      "dni":4438773,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"QUISPE SEGUNDO DE BUSTA EUSEBIA",
      "dni":23825361,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"RODRIGUEZ VILLALOBOS LUISA ELENA",
      "dni":23946498,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"SAIRE ENRIQUEZ VILMA",
      "dni":23948726,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"SANCHEZ ALFARO PASCUALA",
      "dni":23913056,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"SANTOS ARANYA CARLOS DAVID",
      "dni":41756716,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"SOLANO TUNQUE OLMER",
      "dni":40069265,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"SOTO MERCADO LUZ AURORA",
      "dni":23837033,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"TIAHUALLPA GIRALDO FERNANDA",
      "dni":23995852,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"TINTA PFUYO LIZ YOVANA",
      "dni":40106915,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"VALDEZ RODRIGUEZ PEDRO ENRIQUE",
      "dni":23963123,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"VALENZUELA RAMOS MARIA DE LA CONCEPCION",
      "dni":7823354,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"VARGAS VILLAFUERTE ROSA HAYDEE",
      "dni":23989844,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"VASQUEZ COPO RUTH MARINA",
      "dni":23847267,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"VIDAL IBARRA VITIA NATIVIDAD",
      "dni":23824988,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"VILCA HUARCA SONIA RAYMUNDA",
      "dni":40113382,
      "ieId":"zTw43FtJkQGxwyWti"
    },
    {
      "nombres":"BEDOYA MENDOZA JAIME",
      "dni":2428412,
      "ieId":""
    },
    {
      "nombres":"CALLO SARAVIA JUDITH",
      "dni":2438604,
      "ieId":""
    },
    {
      "nombres":"CASTRO TOMAYCONSA ABEL",
      "dni":25133123,
      "ieId":""
    },
    {
      "nombres":"CRUZ CABALLERO MIRSHEA",
      "dni":42955986,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ QUISPE ESTHER",
      "dni":23860068,
      "ieId":""
    },
    {
      "nombres":"FLORES LINARES CELSO VICTORINO",
      "dni":23837053,
      "ieId":""
    },
    {
      "nombres":"GAMARRA QUISPE GENARA",
      "dni":23887658,
      "ieId":""
    },
    {
      "nombres":"GUILLEN CHIPA CIRO",
      "dni":23899659,
      "ieId":""
    },
    {
      "nombres":"LA HERMOZA CASTILLO MARIA",
      "dni":23850467,
      "ieId":""
    },
    {
      "nombres":"LARA HUANCA MATEO",
      "dni":23801590,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MUELLE HUBERT",
      "dni":23964653,
      "ieId":""
    },
    {
      "nombres":"MORA GUTIERREZ REMIGIO",
      "dni":23812048,
      "ieId":""
    },
    {
      "nombres":"MORA QUISPE CRISTOBAL",
      "dni":23813943,
      "ieId":""
    },
    {
      "nombres":"QUISPE ILLANES VIOLETA",
      "dni":43131926,
      "ieId":""
    },
    {
      "nombres":"RIVERA MERCADO RUBY",
      "dni":23926856,
      "ieId":""
    },
    {
      "nombres":"ÑACCHA GUTIERREZ EDGAR",
      "dni":42031845,
      "ieId":""
    },
    {
      "nombres":"ABARCA OCHOA GLORIA DOMITILA",
      "dni":23814172,
      "ieId":""
    },
    {
      "nombres":"ARMUTO TAYRO EGDAR",
      "dni":24704169,
      "ieId":""
    },
    {
      "nombres":"BALDEON HUAMAN ZENILDA NELVA",
      "dni":40388146,
      "ieId":""
    },
    {
      "nombres":"CALDERON DE BRINGAS GILDA AMPARO",
      "dni":23908395,
      "ieId":""
    },
    {
      "nombres":"CHUCHULLO ZINANYUCA BEATRIZ",
      "dni":23949735,
      "ieId":""
    },
    {
      "nombres":"CORTES DE GIL ENRIQUETA",
      "dni":23824035,
      "ieId":""
    },
    {
      "nombres":"CUBA PEÑA ANTENOR",
      "dni":23853332,
      "ieId":""
    },
    {
      "nombres":"DIAZ VERA SONIA AMPARO",
      "dni":23847994,
      "ieId":""
    },
    {
      "nombres":"DURAN ALEGRIA ELSA",
      "dni":23897988,
      "ieId":""
    },
    {
      "nombres":"HUALLPAYUNCA ABAL JESUSA MELINA",
      "dni":23874239,
      "ieId":""
    },
    {
      "nombres":"HUMPIRE HUARCAYA LUIS",
      "dni":25198539,
      "ieId":""
    },
    {
      "nombres":"LAZARO HUALLPAMAYTA AMERICO",
      "dni":23909197,
      "ieId":""
    },
    {
      "nombres":"LIGAS NINA ALICIA",
      "dni":23862573,
      "ieId":""
    },
    {
      "nombres":"MANGO MAMANI ALEJANDRO",
      "dni":23993998,
      "ieId":""
    },
    {
      "nombres":"MENDOZA TORREN LUZ MARLENE",
      "dni":23862651,
      "ieId":""
    },
    {
      "nombres":"MURGA HUAMANI AQUILINO TIMOTEO",
      "dni":23814797,
      "ieId":""
    },
    {
      "nombres":"ORCCOSUPA RIVERA GLADYS",
      "dni":23942625,
      "ieId":""
    },
    {
      "nombres":"ORMACHEA VILLAFUERTE YUDIT",
      "dni":24000382,
      "ieId":""
    },
    {
      "nombres":"ORTIZ CARDENAS DE PEREZ HILDA",
      "dni":23803315,
      "ieId":""
    },
    {
      "nombres":"PEÑALVA IBARRA DORIS",
      "dni":23838174,
      "ieId":""
    },
    {
      "nombres":"PUMACAYO GUEVARA AUGUSTO ROBERTO",
      "dni":23959021,
      "ieId":""
    },
    {
      "nombres":"QUISPE MENDOZA AURELIA",
      "dni":23829737,
      "ieId":""
    },
    {
      "nombres":"ROLDAN GIL JUANA",
      "dni":23901966,
      "ieId":""
    },
    {
      "nombres":"TORRE MERCADO DANIEL MARTIN",
      "dni":23806392,
      "ieId":""
    },
    {
      "nombres":"TORRES GUILLEN MARIANO ROMULO",
      "dni":23802016,
      "ieId":""
    },
    {
      "nombres":"VALENCIA ASTETE YANET",
      "dni":25209668,
      "ieId":""
    },
    {
      "nombres":"VILLALOBOS ESPINOZA PERCY RAFAEL",
      "dni":40376125,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA QUISPE PAULA",
      "dni":23806048,
      "ieId":""
    },
    {
      "nombres":"ACHAHUANCO AEDO ROXANA",
      "dni":24712809,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GUTIERREZ PERCY JACINTO",
      "dni":24704437,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VALDIVIA JAVIER RAYMUNDO",
      "dni":23872622,
      "ieId":""
    },
    {
      "nombres":"ANCO MAQUERA CLOTILDE",
      "dni":24671581,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO GARCIA ROXSSANA ELVIRA",
      "dni":23929692,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO MOGROVEJO IRIS MARIA",
      "dni":29697319,
      "ieId":""
    },
    {
      "nombres":"BEJAR CHAUCA NESTOR",
      "dni":23807109,
      "ieId":""
    },
    {
      "nombres":"BERRIO AMEZQUITA FLORA ESTEFANIA",
      "dni":24675812,
      "ieId":""
    },
    {
      "nombres":"CAIRO DAZA CESAR",
      "dni":23856214,
      "ieId":""
    },
    {
      "nombres":"CANSINOS VALVERDE ENRIQUE",
      "dni":23801146,
      "ieId":""
    },
    {
      "nombres":"COAVOY DE SEQUEIROS GERTRUDIS",
      "dni":23845837,
      "ieId":""
    },
    {
      "nombres":"CONDORI CCANCHI GENARA",
      "dni":23842669,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MOLERO ZENON MIRARDO",
      "dni":23822356,
      "ieId":""
    },
    {
      "nombres":"CRUCINTA DE LEON INES",
      "dni":23905048,
      "ieId":""
    },
    {
      "nombres":"CUARESMA JURO RONY",
      "dni":31033566,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ZUNIGA JULIO",
      "dni":23800295,
      "ieId":""
    },
    {
      "nombres":"FARFAN FARFAN JUAN DE DIOS",
      "dni":23843800,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA GUZMAN MANUEL",
      "dni":23873508,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA ZUÑIGA LISBETH RICARDINA",
      "dni":23840153,
      "ieId":""
    },
    {
      "nombres":"JOVE AYMACHOQUE ALEJANDRA",
      "dni":23845982,
      "ieId":""
    },
    {
      "nombres":"LETONA HUAMAN ERNESTINA",
      "dni":23983011,
      "ieId":""
    },
    {
      "nombres":"MORA ALVAREZ ANTUANETH",
      "dni":41161481,
      "ieId":""
    },
    {
      "nombres":"OCHOA QUISPE GLADYS MARGARITA",
      "dni":23938355,
      "ieId":""
    },
    {
      "nombres":"OLIVERA SILVA HUGO",
      "dni":24695619,
      "ieId":""
    },
    {
      "nombres":"OVALLE RAMOS JUAN CARLOS",
      "dni":8877445,
      "ieId":""
    },
    {
      "nombres":"PEREZ QUISPE NADIA YULITZA",
      "dni":44410677,
      "ieId":""
    },
    {
      "nombres":"QUISPE DE GRAJEDA YNES",
      "dni":23833121,
      "ieId":""
    },
    {
      "nombres":"RIVAS HOLGADO MILAGROS",
      "dni":23894381,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ BRAVO ZULEMA ALCIONE",
      "dni":23943870,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MOYA JESUS NATIVIDAD",
      "dni":23823050,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ TARQUI EDWIN NEWTON",
      "dni":24675636,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS GAMARRA CLARIZA",
      "dni":23901984,
      "ieId":""
    },
    {
      "nombres":"SOTOMAYOR VALENZUELA FERNANDO",
      "dni":23808359,
      "ieId":""
    },
    {
      "nombres":"TACURI CALANCHI MODESTO",
      "dni":23829185,
      "ieId":""
    },
    {
      "nombres":"TAPARA YUPA ROSALIA",
      "dni":23921486,
      "ieId":""
    },
    {
      "nombres":"VARGAS ZARATE CARLOS",
      "dni":23804129,
      "ieId":""
    },
    {
      "nombres":"VIDAL SOTO ELOY",
      "dni":31425277,
      "ieId":""
    },
    {
      "nombres":"VIGORIA VALLE GLORIA",
      "dni":23857932,
      "ieId":""
    },
    {
      "nombres":"VIVANCO CARDENAS ESKARLETH",
      "dni":21566632,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA RAMOS MAXIMO ADRIEL",
      "dni":25000338,
      "ieId":""
    },
    {
      "nombres":"ZARATE DE LAZO RUTH FABIANA",
      "dni":23913004,
      "ieId":""
    },
    {
      "nombres":"ÑAHUI OLMERON HONORATA",
      "dni":23902120,
      "ieId":""
    },
    {
      "nombres":"CAJIGAS VARGAS OVIDIO",
      "dni":23824012,
      "ieId":""
    },
    {
      "nombres":"CARRASCO CANDIA ROBERTINA",
      "dni":23882835,
      "ieId":""
    },
    {
      "nombres":"CORONADO PALMA MARIA MAGDALENA",
      "dni":23823567,
      "ieId":""
    },
    {
      "nombres":"CRUZ YABAR IGNACIO PEDRIN",
      "dni":24676738,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR ROMERO EUFEMIA",
      "dni":23842153,
      "ieId":""
    },
    {
      "nombres":"MORALES SEGOVIA WALTER",
      "dni":23811241,
      "ieId":""
    },
    {
      "nombres":"VISA CACERES SABINO",
      "dni":23923995,
      "ieId":""
    },
    {
      "nombres":"HUILLCA PAÑO LUCIA",
      "dni":23888772,
      "ieId":""
    },
    {
      "nombres":"LECHUGA ARAMBURU BENEDICTA",
      "dni":23808408,
      "ieId":""
    },
    {
      "nombres":"QUIRITA PIZARRO LIGIA JUDITH",
      "dni":23922525,
      "ieId":""
    },
    {
      "nombres":"SALVATIERRA BUJANDA GUIULFO VICENTE",
      "dni":23813766,
      "ieId":""
    },
    {
      "nombres":"ARRIOLA HUAYHUA SIMEON",
      "dni":23995735,
      "ieId":""
    },
    {
      "nombres":"LATORRE LUZA DE ESPINOZ ROSA",
      "dni":23845820,
      "ieId":""
    },
    {
      "nombres":"PUMA BEJAR SIMON",
      "dni":23962871,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS GUILLEN DIMAS",
      "dni":23993562,
      "ieId":""
    },
    {
      "nombres":"ACURIO CRUZ YANET",
      "dni":23870614,
      "ieId":""
    },
    {
      "nombres":"ARIAS NAOLA MIGUEL ANGEL",
      "dni":25198992,
      "ieId":""
    },
    {
      "nombres":"BECERRA ACHANCARAY RAYMUNDO",
      "dni":23840886,
      "ieId":""
    },
    {
      "nombres":"CABRERA CORTES DIGNA AGUSTINA",
      "dni":23901634,
      "ieId":""
    },
    {
      "nombres":"CARRASCO TAPIA LUCILA",
      "dni":23880837,
      "ieId":""
    },
    {
      "nombres":"CONZA AQUINO ROSANA",
      "dni":23929201,
      "ieId":""
    },
    {
      "nombres":"DIAZ ALVIZURI YVONNE ESTHER",
      "dni":23848361,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ QUISPE LOURDES NERY",
      "dni":2038160,
      "ieId":""
    },
    {
      "nombres":"HERRERA GUTIERREZ CLAUDIA",
      "dni":23940974,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUACAC CRISTINA",
      "dni":23837902,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CHAICO HILDA",
      "dni":23944860,
      "ieId":""
    },
    {
      "nombres":"MACEDO DIAZ AYDEE",
      "dni":23840263,
      "ieId":""
    },
    {
      "nombres":"MARMANILLO GONZALES LIZBETH MADELAYNE",
      "dni":23943817,
      "ieId":""
    },
    {
      "nombres":"OLIVERA JIMENEZ DE PALO HILDA HIPOLITA",
      "dni":23902256,
      "ieId":""
    },
    {
      "nombres":"PANTOJA ORIHUELA BERTHA",
      "dni":23849276,
      "ieId":""
    },
    {
      "nombres":"QUISPE MERCADO JOSE LUIS",
      "dni":24713628,
      "ieId":""
    },
    {
      "nombres":"RAMOS AGUILAR GUADALUPE EDITH",
      "dni":23855976,
      "ieId":""
    },
    {
      "nombres":"TITO ANCCO SABINA",
      "dni":23876045,
      "ieId":""
    },
    {
      "nombres":"TORRES HUAMAN CIRILO",
      "dni":24390848,
      "ieId":""
    },
    {
      "nombres":"VALENCIA ZEGARRA KELMA BETZAVE",
      "dni":23828272,
      "ieId":""
    },
    {
      "nombres":"VILCA DE ZUÑIGA ISABEL",
      "dni":23962992,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA PEZO MARTIN ROMULO",
      "dni":23885637,
      "ieId":""
    },
    {
      "nombres":"AMACHI LONCONI JUAN MARIO BAUTISTA",
      "dni":23901452,
      "ieId":""
    },
    {
      "nombres":"CALLAHUI LAIME JUANA",
      "dni":23982676,
      "ieId":""
    },
    {
      "nombres":"CONDORI YUCRA ROBERTO SOCRATES",
      "dni":23848385,
      "ieId":""
    },
    {
      "nombres":"CORDOVA MEJIA ALBERTO",
      "dni":23840911,
      "ieId":""
    },
    {
      "nombres":"CORRALES VISA WILBERT",
      "dni":24705719,
      "ieId":""
    },
    {
      "nombres":"CUCHILLO RADO ELIAS",
      "dni":23882407,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL LA TORRE ISAIAS",
      "dni":23823242,
      "ieId":""
    },
    {
      "nombres":"FLORES MORALES JORGE ENRIQUE",
      "dni":23832724,
      "ieId":""
    },
    {
      "nombres":"HUANQUI CCAHUI JULIAN VIDAL",
      "dni":23964337,
      "ieId":""
    },
    {
      "nombres":"HUILCAPAZ JANAMPA JUAN ROMAN",
      "dni":23804560,
      "ieId":""
    },
    {
      "nombres":"KCORAHUA SALAZAR LINO",
      "dni":40411797,
      "ieId":""
    },
    {
      "nombres":"MENDES ESCOBAR ABEL ABELARDO",
      "dni":24379176,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS CUEVA RAUL",
      "dni":23842237,
      "ieId":""
    },
    {
      "nombres":"NIÑO DE GUZMAN CASTRO JAVIER",
      "dni":24672603,
      "ieId":""
    },
    {
      "nombres":"PUMA AVENDAÑO SANTIAGO",
      "dni":23895582,
      "ieId":""
    },
    {
      "nombres":"QUISPE CACERES FRANCISCO",
      "dni":23817121,
      "ieId":""
    },
    {
      "nombres":"QUITO RIVERA JAVIER LORENZO",
      "dni":23843399,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES MUÑIZ VILMA",
      "dni":40058583,
      "ieId":""
    },
    {
      "nombres":"RAMOS URBIOLA WILFREDO",
      "dni":23878434,
      "ieId":""
    },
    {
      "nombres":"TAGLE MACEDO ADELAIDA EMPERATRIZ",
      "dni":23805535,
      "ieId":""
    },
    {
      "nombres":"TORRES QUISPE REYNALDO",
      "dni":24675811,
      "ieId":""
    },
    {
      "nombres":"TTITO BRAVO MIGUEL",
      "dni":23823616,
      "ieId":""
    },
    {
      "nombres":"TTITO QUISPE DECOMEDES",
      "dni":24361212,
      "ieId":""
    },
    {
      "nombres":"VARGAS VILLAFUERTE MAXIMA",
      "dni":23956724,
      "ieId":""
    },
    {
      "nombres":"VILLENA TTITO ROBERTO",
      "dni":23879013,
      "ieId":""
    },
    {
      "nombres":"CAMPANA TORRES RONAL",
      "dni":41105740,
      "ieId":""
    },
    {
      "nombres":"CHAPARRO SALAS MADELAYNE",
      "dni":23857782,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL RAMOS ROSS MERY",
      "dni":40265048,
      "ieId":""
    },
    {
      "nombres":"ESTRADA URVIOLA WILSON ORLANDO",
      "dni":23869834,
      "ieId":""
    },
    {
      "nombres":"FARFAN CARDENAS HAYDEE",
      "dni":23929970,
      "ieId":""
    },
    {
      "nombres":"HUAHUACCAPA CHIRME CIRA MARCELINA",
      "dni":23843612,
      "ieId":""
    },
    {
      "nombres":"HUANCACHOQUE QUISPE SANTIAGO",
      "dni":24697755,
      "ieId":""
    },
    {
      "nombres":"LOPEZ MONTES DE OCA SOLON PAZ",
      "dni":23880145,
      "ieId":""
    },
    {
      "nombres":"MAR DE BONETT AIDA LUZ",
      "dni":23834989,
      "ieId":""
    },
    {
      "nombres":"ORELLANA SANCHEZ GREGORIO",
      "dni":23842891,
      "ieId":""
    },
    {
      "nombres":"QUISPE CALDERON ALICIA",
      "dni":23886820,
      "ieId":""
    },
    {
      "nombres":"TOVAR ACUÑA MARTHA ELIZABETH",
      "dni":23914077,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO ORTIZ DE ORUE WILBERT GUSTAVO",
      "dni":23909882,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA MARIACA GUIDO",
      "dni":23983618,
      "ieId":""
    },
    {
      "nombres":"CASTRO LOPEZ MIRTHA JESUS",
      "dni":25185605,
      "ieId":""
    },
    {
      "nombres":"LOPINTA HUAMANI NANCI",
      "dni":23966610,
      "ieId":""
    },
    {
      "nombres":"ORTIZ JARA DELIA MONICA",
      "dni":23865208,
      "ieId":""
    },
    {
      "nombres":"QUISPE BELLOTA GADDY YAZMINA",
      "dni":40484342,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUAMAN MERY",
      "dni":24005739,
      "ieId":""
    },
    {
      "nombres":"GARRIDO TAMAYO BETHSY",
      "dni":23990754,
      "ieId":""
    },
    {
      "nombres":"PONCE VALDIVIA EMPERATRIZ",
      "dni":23948764,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES PORTUGAL ROXANA",
      "dni":23947057,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CONDEMAITA VERONICA",
      "dni":23977362,
      "ieId":""
    },
    {
      "nombres":"ZAMORA ALATRISTA MABEL LILIAN",
      "dni":23849007,
      "ieId":""
    },
    {
      "nombres":"PILARES FLOREZ LUZ YANETTE",
      "dni":23968615,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ VALDIVIESO NOHEMI OTILIA",
      "dni":23912634,
      "ieId":""
    },
    {
      "nombres":"MASCIOTTI YABAR ROSA EDITH",
      "dni":23839190,
      "ieId":""
    },
    {
      "nombres":"ROLDAN HERMOZA GLADYS LOURDES",
      "dni":23902446,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE DUENAS PATRICIA",
      "dni":23947318,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE TUPAYACHI MARIA YSOLINA",
      "dni":23850436,
      "ieId":""
    },
    {
      "nombres":"DIAZ DE ARIAS LICELI AYME",
      "dni":23880853,
      "ieId":""
    },
    {
      "nombres":"FLORES AYMA KAREN YOLANDA",
      "dni":6815832,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA CASTRO ALEXIA JOSEFINA",
      "dni":5071459,
      "ieId":""
    },
    {
      "nombres":"CUBA MELLADO LUCILA URBELINDA",
      "dni":23921626,
      "ieId":""
    },
    {
      "nombres":"QUISPE LEGUIA LUZ MARINA",
      "dni":23871077,
      "ieId":""
    },
    {
      "nombres":"ANDRADE OLAZO BERNICE GUADALUPE",
      "dni":23989093,
      "ieId":""
    },
    {
      "nombres":"BELTRAN DIAZ CARMEN ELIZABETH",
      "dni":23877732,
      "ieId":""
    },
    {
      "nombres":"BERNAL MORA KETY",
      "dni":24007227,
      "ieId":""
    },
    {
      "nombres":"CALDERON TOLEDO GRACIELA",
      "dni":23932627,
      "ieId":""
    },
    {
      "nombres":"FLORES OLAVARRIA MELVA MARIA",
      "dni":23804620,
      "ieId":""
    },
    {
      "nombres":"ROJAS HERRERA PAULA",
      "dni":24679965,
      "ieId":""
    },
    {
      "nombres":"ALARCON ARAGON GLORIA LUZ",
      "dni":23992941,
      "ieId":""
    },
    {
      "nombres":"VENERO GIBAJA IZKRA KATHERINE",
      "dni":23855668,
      "ieId":""
    },
    {
      "nombres":"ARDILES RIOS GUADALUPE",
      "dni":23802487,
      "ieId":""
    },
    {
      "nombres":"DE LA COLINA LOZADA NATALI",
      "dni":23854369,
      "ieId":""
    },
    {
      "nombres":"HUACAC GUZMAN IRLANDA",
      "dni":23935529,
      "ieId":""
    },
    {
      "nombres":"MENDOZA QUISPE ELIZABETH",
      "dni":23936180,
      "ieId":""
    },
    {
      "nombres":"MORALES DE POLO RINA",
      "dni":24465166,
      "ieId":""
    },
    {
      "nombres":"MOREANO ZARATE MILAGROS",
      "dni":23865592,
      "ieId":""
    },
    {
      "nombres":"ARIAS NEGRON SABINA",
      "dni":23904999,
      "ieId":""
    },
    {
      "nombres":"CABRERA PERALTA MARIA ELISA",
      "dni":23886234,
      "ieId":""
    },
    {
      "nombres":"LAZARTE DIAZ MARIA GUADALUPE",
      "dni":23881798,
      "ieId":""
    },
    {
      "nombres":"MIRANDA CACERES CARMEN MARLENI",
      "dni":23852082,
      "ieId":""
    },
    {
      "nombres":"MONTES DE SOTELO AIDE AMANDINA",
      "dni":23935294,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ GRAJEDA MARIA ROSARIO",
      "dni":23808525,
      "ieId":""
    },
    {
      "nombres":"SALAS DE GUILLEN SONIA",
      "dni":23828520,
      "ieId":""
    },
    {
      "nombres":"TEJADA DE TRUJILLO DOMINGA",
      "dni":24378120,
      "ieId":""
    },
    {
      "nombres":"AUBERT VELASCO BRIGITTE",
      "dni":23860139,
      "ieId":""
    },
    {
      "nombres":"BARRIOS VALER MILUSKA DONNA",
      "dni":24702847,
      "ieId":""
    },
    {
      "nombres":"CEVALLOS CUNO EDITH",
      "dni":23951637,
      "ieId":""
    },
    {
      "nombres":"HUARACA PIMENTEL YOVANA",
      "dni":42751788,
      "ieId":""
    },
    {
      "nombres":"VEGA VASQUEZ LILIA",
      "dni":23860489,
      "ieId":""
    },
    {
      "nombres":"APARICIO CCOPA YANET",
      "dni":23929132,
      "ieId":""
    },
    {
      "nombres":"ESPEJO FARFAN GLENDY KATY",
      "dni":23979926,
      "ieId":""
    },
    {
      "nombres":"LAZARTE DIAZ RUTH HEDY",
      "dni":23870181,
      "ieId":""
    },
    {
      "nombres":"MOSTAJO HINOJOSA LUZ GRACIELA",
      "dni":23812918,
      "ieId":""
    },
    {
      "nombres":"BERNAL JIMENEZ BEATRIZ",
      "dni":23901383,
      "ieId":""
    },
    {
      "nombres":"GONZALES VEGA LENA JESSIE",
      "dni":23975085,
      "ieId":""
    },
    {
      "nombres":"UGARTE QUISPE LUISA JAQUELIN",
      "dni":24702669,
      "ieId":""
    },
    {
      "nombres":"AMADO GRANADA YENI",
      "dni":23947458,
      "ieId":""
    },
    {
      "nombres":"VILLAGARCIA CALVO ROSA DUNIA",
      "dni":23843543,
      "ieId":""
    },
    {
      "nombres":"OLAVE CAIRO NILDA NELIDA",
      "dni":23870231,
      "ieId":""
    },
    {
      "nombres":"AUCCA DE ALFARO AURA CONCEPCION",
      "dni":23930985,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CASTILLO CARMEN ANGELICA",
      "dni":25218514,
      "ieId":""
    },
    {
      "nombres":"CALLO GUZMAN ELISA IMPERIO",
      "dni":24704051,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ PILARES MIRTHA KARINA",
      "dni":23860737,
      "ieId":""
    },
    {
      "nombres":"SARAVIA CERECEDA NANI",
      "dni":31006349,
      "ieId":""
    },
    {
      "nombres":"ZAMBRANO BUSTAMANTE LILIAM",
      "dni":24695869,
      "ieId":""
    },
    {
      "nombres":"ARCE PONCE ROCIO PAOLA",
      "dni":42207923,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN MEZA GERTRUDES",
      "dni":23880947,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ALARCON MARIA ISABEL",
      "dni":23923343,
      "ieId":""
    },
    {
      "nombres":"ANAYA GUILLEN ALVINA VICTORIA",
      "dni":23886469,
      "ieId":""
    },
    {
      "nombres":"MIRANDA ORDOÑEZ JESSICA",
      "dni":23862844,
      "ieId":""
    },
    {
      "nombres":"SERRANO PORTILLA ISABEL HAYDEE",
      "dni":23849902,
      "ieId":""
    },
    {
      "nombres":"VELASCO ALVAREZ IDALIA",
      "dni":23826717,
      "ieId":""
    },
    {
      "nombres":"ARAPA TTUPA VANDI FRANCIS",
      "dni":23998456,
      "ieId":""
    },
    {
      "nombres":"CAMPANA BECERRA SILVIA PRESCILDA",
      "dni":23879366,
      "ieId":""
    },
    {
      "nombres":"DE LA FLOR TOLEDO CAROLA MONICA",
      "dni":23802607,
      "ieId":""
    },
    {
      "nombres":"LUME INCARROCA CELESTINO",
      "dni":23897560,
      "ieId":""
    },
    {
      "nombres":"MEDINA CALDERON BETHSAIDA",
      "dni":31169997,
      "ieId":""
    },
    {
      "nombres":"ORTIZ YLLA RUTH JULIETA",
      "dni":23935891,
      "ieId":""
    },
    {
      "nombres":"BACA QUISPE JOSEFINA",
      "dni":23991066,
      "ieId":""
    },
    {
      "nombres":"CHALLCO YAÑAC SABINA",
      "dni":25301425,
      "ieId":""
    },
    {
      "nombres":"CHAUCA NORIEGA EDILBERTO",
      "dni":23828805,
      "ieId":""
    },
    {
      "nombres":"CORDOVA GRAJEDA MARTHA",
      "dni":23936132,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR RODRIGUEZ ERNESTINA",
      "dni":23913013,
      "ieId":""
    },
    {
      "nombres":"HURTADO PEÑAFIEL CLARA",
      "dni":24788582,
      "ieId":""
    },
    {
      "nombres":"LEON CCARAYHUA YOLANDA",
      "dni":24388052,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ CCAMA RENE",
      "dni":23941088,
      "ieId":""
    },
    {
      "nombres":"PALOMINO TUMPAY DAMIANA",
      "dni":23956892,
      "ieId":""
    },
    {
      "nombres":"SALAS SEQUEIROS WILBERT FELIX",
      "dni":23803987,
      "ieId":""
    },
    {
      "nombres":"VARGAS PILLCO HAYDEE",
      "dni":23856559,
      "ieId":""
    },
    {
      "nombres":"VELA DE CACERES MERCEDES",
      "dni":24673060,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CHAVEZ LORENA",
      "dni":25326503,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ SAGGI REBECA ELISA",
      "dni":23837070,
      "ieId":""
    },
    {
      "nombres":"BELTRAN GUTIERREZ ELIANA LEONOR",
      "dni":23827154,
      "ieId":""
    },
    {
      "nombres":"BOZA HUACHACA MARIA GRACIELA",
      "dni":23961957,
      "ieId":""
    },
    {
      "nombres":"CALDERON ARCONDO PLACIDA",
      "dni":25310663,
      "ieId":""
    },
    {
      "nombres":"CASTILLO ARENAZA RUTH ADRIANA",
      "dni":23956206,
      "ieId":""
    },
    {
      "nombres":"CHIPANA ROJAS CIRILA",
      "dni":23822673,
      "ieId":""
    },
    {
      "nombres":"CUNO LOAYZA OLGA",
      "dni":24672505,
      "ieId":""
    },
    {
      "nombres":"CUNO QUI-ONES SONIA BERTHA",
      "dni":24702946,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR HIRPAHUANCA EUFRASINA",
      "dni":23872891,
      "ieId":""
    },
    {
      "nombres":"FARFAN ARIAS CARLOTA LUS MARINA",
      "dni":23851139,
      "ieId":""
    },
    {
      "nombres":"FARFAN CUBA JAQUEHLINE GENARA",
      "dni":23846289,
      "ieId":""
    },
    {
      "nombres":"LUQUE AGUILAR ELIZABETH",
      "dni":23892339,
      "ieId":""
    },
    {
      "nombres":"MENDOZA BARRIENTOS HUGO",
      "dni":24661768,
      "ieId":""
    },
    {
      "nombres":"MOLINA SILVA DORIS",
      "dni":24464470,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ HERMOZA RUTH VIRGINIA",
      "dni":23913220,
      "ieId":""
    },
    {
      "nombres":"OLIVERA LOVATON FABIAN",
      "dni":23988188,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA QUINTANILLA MERCEDES GLADYS",
      "dni":23823822,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES GUZMAN LUZMILA",
      "dni":23985612,
      "ieId":""
    },
    {
      "nombres":"RICALDE MANCHACO ELVA MARINA",
      "dni":23844288,
      "ieId":""
    },
    {
      "nombres":"ROJAS DE MINAURO TEOFILA",
      "dni":24678816,
      "ieId":""
    },
    {
      "nombres":"ROMAINVILLE BEJAR CARLA",
      "dni":23857926,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS OLAVE LUZ DOMINGA",
      "dni":23856800,
      "ieId":""
    },
    {
      "nombres":"TAIRO QUISPE CARLOS HUMBERTO",
      "dni":24715684,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ TTILA GRACIELA",
      "dni":23962552,
      "ieId":""
    },
    {
      "nombres":"CASTRO COSIO YOLANDA",
      "dni":23994857,
      "ieId":""
    },
    {
      "nombres":"HUACAC ANDRADE TEOFILO",
      "dni":24965065,
      "ieId":""
    },
    {
      "nombres":"JUAREZ TORRES NILTON",
      "dni":25012247,
      "ieId":""
    },
    {
      "nombres":"PALOMINO CHACON WASHINGTON",
      "dni":23908490,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES HUILLCA CLAUDIO MARTIN",
      "dni":23824346,
      "ieId":""
    },
    {
      "nombres":"RIOS DURAN JAVIER JESUS",
      "dni":44688668,
      "ieId":""
    },
    {
      "nombres":"YARIN QUISPE ROCIO",
      "dni":25305037,
      "ieId":""
    },
    {
      "nombres":"BAEZ HUILLCA NELLY",
      "dni":23949886,
      "ieId":""
    },
    {
      "nombres":"ACURIO BACA ROSA MARIA",
      "dni":30429038,
      "ieId":""
    },
    {
      "nombres":"ALARCON CCOPA CARLOS",
      "dni":25135439,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ DUENAS JOVITA JANET",
      "dni":24461874,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VILCA NIBARDO",
      "dni":25214350,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VILLAFUERTE JAIME MANUEL",
      "dni":24702885,
      "ieId":""
    },
    {
      "nombres":"AMAT CRUZ IRMA",
      "dni":24660239,
      "ieId":""
    },
    {
      "nombres":"CACERES BALLESTEROS RAIMUNDA",
      "dni":23964735,
      "ieId":""
    },
    {
      "nombres":"CANDIA DE HUILLCA MARIA CORNELIA",
      "dni":24680428,
      "ieId":""
    },
    {
      "nombres":"CASTILLO TECSI OLGA",
      "dni":24463290,
      "ieId":""
    },
    {
      "nombres":"COLLADO CLAICEN ANTONIA",
      "dni":23901339,
      "ieId":""
    },
    {
      "nombres":"GARRIDO RAMOS DE MORALE SOFIA IRENE",
      "dni":25120979,
      "ieId":""
    },
    {
      "nombres":"HANDA ARTEAGA HAYDE LUZ",
      "dni":23810259,
      "ieId":""
    },
    {
      "nombres":"HUANCA SOTO JUAN BAUTISTA",
      "dni":24288588,
      "ieId":""
    },
    {
      "nombres":"LAGUNA APAZA JUAN",
      "dni":24702251,
      "ieId":""
    },
    {
      "nombres":"LOAIZA ZARATE JORGE FERNANDO",
      "dni":23812485,
      "ieId":""
    },
    {
      "nombres":"MEJIA MORA GRACIELA",
      "dni":23833401,
      "ieId":""
    },
    {
      "nombres":"MOLINA ESCALANTE IVAN MELQUIADES",
      "dni":43408956,
      "ieId":""
    },
    {
      "nombres":"NAVARRO UGARTE ANABELL",
      "dni":23898633,
      "ieId":""
    },
    {
      "nombres":"PANIORA CCERARE CECILIO",
      "dni":31001812,
      "ieId":""
    },
    {
      "nombres":"PEREIRA PEREIRA EVARISTO",
      "dni":23901448,
      "ieId":""
    },
    {
      "nombres":"QUISPE CJUIRO VICENTE",
      "dni":23953728,
      "ieId":""
    },
    {
      "nombres":"QUISPE GUEVARA NELLY CATALINA",
      "dni":23845523,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CRUZ JOSEFINA",
      "dni":23805710,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SALAZAR DINA",
      "dni":23842645,
      "ieId":""
    },
    {
      "nombres":"SORIA PAREDES MARILU",
      "dni":23917135,
      "ieId":""
    },
    {
      "nombres":"UGARTE PEREZ DOMINGO",
      "dni":23803891,
      "ieId":""
    },
    {
      "nombres":"VENERO LATORRE ROSA PASCUALA",
      "dni":23821999,
      "ieId":""
    },
    {
      "nombres":"VERA TORRES MERCEDES",
      "dni":23806248,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE PEÑA MARIA",
      "dni":24289497,
      "ieId":""
    },
    {
      "nombres":"CUTISACA CONDORI JHON ERNESTO",
      "dni":2299973,
      "ieId":""
    },
    {
      "nombres":"OCHOA DE LA CRUZ LUZ ESTHER",
      "dni":30431726,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA COLQUE DORIS VICTORIA",
      "dni":23809605,
      "ieId":""
    },
    {
      "nombres":"ROJAS SANTISTEBAN ENCARNACION ABIGAIL",
      "dni":23803622,
      "ieId":""
    },
    {
      "nombres":"MEZA OTAZU WILBERT DALMECIO",
      "dni":24956800,
      "ieId":""
    },
    {
      "nombres":"AGUILAR YUCRA NORMA",
      "dni":23885918,
      "ieId":""
    },
    {
      "nombres":"GRAJEDA RODRIGUEZ RUTH VIOLETA",
      "dni":25302888,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ QUISPE CAROLINA ROSA",
      "dni":23994313,
      "ieId":""
    },
    {
      "nombres":"HERNANDEZ ALZAMORA SHERMELY",
      "dni":23975264,
      "ieId":""
    },
    {
      "nombres":"SOTOMAYOR COSIO ROMEL",
      "dni":31544066,
      "ieId":""
    },
    {
      "nombres":"ALARCON ALCCA JUANA ZONIA",
      "dni":23868565,
      "ieId":""
    },
    {
      "nombres":"BARRIOS VALER ADA GEORGINA",
      "dni":24712827,
      "ieId":""
    },
    {
      "nombres":"CARRASCO REYES JULIA JESUS",
      "dni":23923382,
      "ieId":""
    },
    {
      "nombres":"CASTILLO OSORIO YRMA",
      "dni":23842475,
      "ieId":""
    },
    {
      "nombres":"CHACARA MARIN ROSA ZUNILDA",
      "dni":23836654,
      "ieId":""
    },
    {
      "nombres":"CHACON CHUQUITAPA JORGE",
      "dni":24696082,
      "ieId":""
    },
    {
      "nombres":"CHOQUE ACOSTUPA JUANA",
      "dni":25181353,
      "ieId":""
    },
    {
      "nombres":"CORDOVA HUAMANI OLGA",
      "dni":23858867,
      "ieId":""
    },
    {
      "nombres":"CRUZ YUCRA CAREN MIRAYA",
      "dni":24706360,
      "ieId":""
    },
    {
      "nombres":"ESTRADA CONDORI LUISA",
      "dni":31031841,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BACA AGUIRRE YONI",
      "dni":23830686,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ VASQUEZ HERNAN ANTONIO",
      "dni":28286441,
      "ieId":""
    },
    {
      "nombres":"HERMOZA HUARSAYA DOLORES",
      "dni":23813438,
      "ieId":""
    },
    {
      "nombres":"HERMOZA LINARES LORENZA ELIZABETH",
      "dni":23964756,
      "ieId":""
    },
    {
      "nombres":"LIANAJE BOCANGEL RAUL",
      "dni":24965242,
      "ieId":""
    },
    {
      "nombres":"LOAYZA SANCHEZ JUAN RUBEN",
      "dni":23988719,
      "ieId":""
    },
    {
      "nombres":"MOINA VARGAS MARLENI",
      "dni":23962822,
      "ieId":""
    },
    {
      "nombres":"MOLINA SOTELO MARIA CONCEPCION",
      "dni":23962966,
      "ieId":""
    },
    {
      "nombres":"MORA ORIHUELA DOLLY LUCIA",
      "dni":25304710,
      "ieId":""
    },
    {
      "nombres":"PALOMINO PONCE CIRO",
      "dni":23806189,
      "ieId":""
    },
    {
      "nombres":"PIMENTEL HINOJOSA LISVHET CELIA",
      "dni":23983933,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ PATIÑO PILAR",
      "dni":9888832,
      "ieId":""
    },
    {
      "nombres":"REA HUANCACHOQUE ALEX CHRISTIAN",
      "dni":40314143,
      "ieId":""
    },
    {
      "nombres":"SACA COBOS HERNAN WILFREDO",
      "dni":23869686,
      "ieId":""
    },
    {
      "nombres":"SOTO PEREZ ANIBAL",
      "dni":23959477,
      "ieId":""
    },
    {
      "nombres":"UGARTE QUISPE IRMA",
      "dni":23877158,
      "ieId":""
    },
    {
      "nombres":"VARGAS SULLCA VILMA",
      "dni":23951737,
      "ieId":""
    },
    {
      "nombres":"YANA HUILLCA MARIA ROSARIO",
      "dni":23978695,
      "ieId":""
    },
    {
      "nombres":"ZAMORA TAPIA ELIO",
      "dni":23808615,
      "ieId":""
    },
    {
      "nombres":"AGUILAR LUNA EDWIN DANIEL",
      "dni":24702157,
      "ieId":""
    },
    {
      "nombres":"ALARCON PEREZ DEBORA DEISY",
      "dni":9447534,
      "ieId":""
    },
    {
      "nombres":"BOBADILLA CONDE MAGDALENA",
      "dni":23867131,
      "ieId":""
    },
    {
      "nombres":"BRICEÑO GAMARRA ROSA",
      "dni":24701352,
      "ieId":""
    },
    {
      "nombres":"CARDENAS HUAYLLARO RAMON ARISTIDES",
      "dni":24289150,
      "ieId":""
    },
    {
      "nombres":"CASCAMAYTA NINA ALICIA",
      "dni":29590030,
      "ieId":""
    },
    {
      "nombres":"CHAPARRO ZEGARRA MARINO FORTUNATO",
      "dni":23956586,
      "ieId":""
    },
    {
      "nombres":"CIPRIAN COLLANTES SORAIDA",
      "dni":23848333,
      "ieId":""
    },
    {
      "nombres":"CIPRIAN COLLANTES DE AT SONIA",
      "dni":23857602,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS FELIX JOSE IGNACIO",
      "dni":23826686,
      "ieId":""
    },
    {
      "nombres":"DELGADO URRUTIA NILDA MARIZA",
      "dni":23926397,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE DELGADO JESUS",
      "dni":25062004,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR GUTIERREZ MARINA",
      "dni":25326378,
      "ieId":""
    },
    {
      "nombres":"ESENARRO ABARCA GILDA",
      "dni":23881894,
      "ieId":""
    },
    {
      "nombres":"ESPITIA SOSA RUMY KUKULI",
      "dni":24006074,
      "ieId":""
    },
    {
      "nombres":"FARFAN VERA FLORA",
      "dni":25061775,
      "ieId":""
    },
    {
      "nombres":"FELIX CAVERO BERTHA",
      "dni":23869759,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ TTITO MARTA",
      "dni":24666189,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ RAMIREZ SHIRLEY",
      "dni":23850818,
      "ieId":""
    },
    {
      "nombres":"GUZMAN LETONA VILMA EMPERATRIZ",
      "dni":25135538,
      "ieId":""
    },
    {
      "nombres":"GUZMAN PACHECO BELEN",
      "dni":23805631,
      "ieId":""
    },
    {
      "nombres":"MEDINA SALAS ELIZABETH",
      "dni":23932893,
      "ieId":""
    },
    {
      "nombres":"MEDRANO DE NAVARRO ANGELICA",
      "dni":23922766,
      "ieId":""
    },
    {
      "nombres":"MINAYA FLORES NERY FILOMENA",
      "dni":23872632,
      "ieId":""
    },
    {
      "nombres":"MONDACA RODRIGUEZ GUILLERMINA",
      "dni":23960590,
      "ieId":""
    },
    {
      "nombres":"MORA YAÑAC JULIA",
      "dni":25301046,
      "ieId":""
    },
    {
      "nombres":"MOREANO CASQUINO SANTOS ELISEO",
      "dni":23803345,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ BACA GRIMANESA",
      "dni":24488755,
      "ieId":""
    },
    {
      "nombres":"PAJA QUISPE JULIA",
      "dni":23835450,
      "ieId":""
    },
    {
      "nombres":"PALOMINO BELLOTA MARITZA",
      "dni":23870253,
      "ieId":""
    },
    {
      "nombres":"PERALTA CRUZ SATURNINA",
      "dni":23830794,
      "ieId":""
    },
    {
      "nombres":"PEREZ DOLMOS LILIAN ROSSMERY",
      "dni":23955501,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA COHAGUILA FRIDA MARTHA",
      "dni":23943840,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ ORMACHEA DORIS YOLANDA",
      "dni":23964091,
      "ieId":""
    },
    {
      "nombres":"SERNA MUÑOZ BETTY",
      "dni":23881315,
      "ieId":""
    },
    {
      "nombres":"SUVIZARRETA MUÑOZ HILDA",
      "dni":23869371,
      "ieId":""
    },
    {
      "nombres":"TRIVEÑO ROJAS DE CHAVEZ EXALTACION",
      "dni":23804611,
      "ieId":""
    },
    {
      "nombres":"VARGAS DE CABRERA RAYMUNDA",
      "dni":23833229,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA VILLAMARIN MARIA ISABEL",
      "dni":23955610,
      "ieId":""
    },
    {
      "nombres":"ZANS ALVAREZ JOSE CARLOS",
      "dni":23922319,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS MONTALVO ROSA MARIA",
      "dni":23873053,
      "ieId":""
    },
    {
      "nombres":"CCOTO CALLINAUPA CESAR",
      "dni":40264296,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA PAZ NATIVIDAD MARLENY",
      "dni":24696898,
      "ieId":""
    },
    {
      "nombres":"CJUNO TACCA MILAGROS BERTHA",
      "dni":23975189,
      "ieId":""
    },
    {
      "nombres":"DELGADO PACO LUSCINDA",
      "dni":25217942,
      "ieId":""
    },
    {
      "nombres":"HERMOZA PONCE KAREM ROCIO",
      "dni":24484744,
      "ieId":""
    },
    {
      "nombres":"NAVARRO ANDIA GRETA",
      "dni":23929699,
      "ieId":""
    },
    {
      "nombres":"QUIRITA PIZARRO RUTH MARGOT",
      "dni":23878226,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN MARIA GEOYANNINI",
      "dni":23804792,
      "ieId":""
    },
    {
      "nombres":"VERA ROSELL MARIA ESTHER",
      "dni":23943112,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS TAPIA SHIRLEY",
      "dni":24002220,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUAÑEC MARIZA",
      "dni":24997343,
      "ieId":""
    },
    {
      "nombres":"CERECEDA BRAVO LOURDES MARCELINA",
      "dni":23927067,
      "ieId":""
    },
    {
      "nombres":"CHILE LETONA ESTHER",
      "dni":23981986,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA BARRIENTOS RUTH",
      "dni":23959738,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL RAMIREZ CARLOS NERY",
      "dni":29300735,
      "ieId":""
    },
    {
      "nombres":"JALISTO QUISPE EDITH",
      "dni":24003729,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ VIVERO FRECIA EMPERATRIZ",
      "dni":23963477,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ YAÑEZ MARIA CLEOFE",
      "dni":23922779,
      "ieId":""
    },
    {
      "nombres":"YBARRA AQUINO ELIZABET CELINDA",
      "dni":25305038,
      "ieId":""
    },
    {
      "nombres":"BORDA SALAS JESSICA TATIANA",
      "dni":9944458,
      "ieId":""
    },
    {
      "nombres":"CARRILLO CRUZ GLORIA MIRIAN",
      "dni":23976357,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO SILVA ANA ROSA",
      "dni":23939469,
      "ieId":""
    },
    {
      "nombres":"GARCIA MANRIQUE MARIA",
      "dni":24004532,
      "ieId":""
    },
    {
      "nombres":"GASTAÑAGA VELAZCO DELIA OLINDA",
      "dni":23965950,
      "ieId":""
    },
    {
      "nombres":"LOAYZA QUISPE ZENOVIA",
      "dni":23901300,
      "ieId":""
    },
    {
      "nombres":"MEDRANO RODRIGUEZ NANCY",
      "dni":25003961,
      "ieId":""
    },
    {
      "nombres":"PELAEZ ASCUE ROSA LIVIA",
      "dni":23867579,
      "ieId":""
    },
    {
      "nombres":"SALAZAR GAMARRA CARLA YAJAIDA",
      "dni":41398918,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO TAPIA MIRIAM",
      "dni":25321293,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL ESTRADA SONIA",
      "dni":23977957,
      "ieId":""
    },
    {
      "nombres":"CORONADO MUJICA URIEL",
      "dni":24484753,
      "ieId":""
    },
    {
      "nombres":"GARCIA ROMERO NOELIA MIREA",
      "dni":44137210,
      "ieId":""
    },
    {
      "nombres":"QUISPE COVARRUBIAS JUANA",
      "dni":23953922,
      "ieId":""
    },
    {
      "nombres":"RADO DURAN NERY",
      "dni":23899844,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CARMONA EVELIN JAKELINE",
      "dni":23863664,
      "ieId":""
    },
    {
      "nombres":"CANA CANA ROSA MARIA",
      "dni":23919744,
      "ieId":""
    },
    {
      "nombres":"CARTAGENA CAPARRONI GIOVANNA YOLANDA",
      "dni":23837529,
      "ieId":""
    },
    {
      "nombres":"CASA VELASQUEZ ADAN",
      "dni":25185294,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ QUINTANILLA RUTH",
      "dni":23922238,
      "ieId":""
    },
    {
      "nombres":"CHOQUE CASTILLO MAGDA",
      "dni":23950926,
      "ieId":""
    },
    {
      "nombres":"CHOQUE MOLLEHUANCA IRENE",
      "dni":23929872,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ MOLINA MARIA ILDAURA",
      "dni":24700026,
      "ieId":""
    },
    {
      "nombres":"GARCIA CHALLCO PERPETUA",
      "dni":24469729,
      "ieId":""
    },
    {
      "nombres":"HILARES LOAIZA ROSA ALEJANDRINA",
      "dni":23826379,
      "ieId":""
    },
    {
      "nombres":"IPENZA CHACON JACKELINE",
      "dni":23894176,
      "ieId":""
    },
    {
      "nombres":"MEZA TTICA FRANCISCO",
      "dni":23986400,
      "ieId":""
    },
    {
      "nombres":"MOLINA CHIRINOS EDWIN",
      "dni":23821779,
      "ieId":""
    },
    {
      "nombres":"OLIVERA GARCIA WILFREDO",
      "dni":23938030,
      "ieId":""
    },
    {
      "nombres":"QUISPE YANQUE EDGAR",
      "dni":23939661,
      "ieId":""
    },
    {
      "nombres":"RADO LAZO SILVIA",
      "dni":23836351,
      "ieId":""
    },
    {
      "nombres":"SOTO CHAYÑA OLIMPIA",
      "dni":4826251,
      "ieId":""
    },
    {
      "nombres":"TORRES LOAIZA MARIA ANTONIETA",
      "dni":23806956,
      "ieId":""
    },
    {
      "nombres":"VEGA COLQUEHUANCA ERVIN SAUL",
      "dni":23932487,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO LA TORRE JUAN CARLOS",
      "dni":40001511,
      "ieId":""
    },
    {
      "nombres":"ARIAS MUÑOZ RINA ANGELICA",
      "dni":23816474,
      "ieId":""
    },
    {
      "nombres":"ATAMARI ENRIQUEZ YESICA",
      "dni":44181545,
      "ieId":""
    },
    {
      "nombres":"ATAU ENRRIQUEZ SILVERIO",
      "dni":23806839,
      "ieId":""
    },
    {
      "nombres":"CANA ALVAREZ ROCIO",
      "dni":23976517,
      "ieId":""
    },
    {
      "nombres":"CANCAPA SOLALIGUE ROSA ELVIRA",
      "dni":23936614,
      "ieId":""
    },
    {
      "nombres":"CASANOVA HUALLPAMAYTA LUZ MARINA",
      "dni":23914105,
      "ieId":""
    },
    {
      "nombres":"CCORI ROQUE MARIA ELENA",
      "dni":25301454,
      "ieId":""
    },
    {
      "nombres":"COTOHUANCA HUANCA DE GA LORENZA",
      "dni":23997903,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR RODRIGUEZ CARMEN ROSA",
      "dni":23963686,
      "ieId":""
    },
    {
      "nombres":"GAVANCHO NINANTAY LEONIDAS GUILLERMO",
      "dni":23890403,
      "ieId":""
    },
    {
      "nombres":"LECHUGA MORA CELMIRA CLEOFE",
      "dni":25302812,
      "ieId":""
    },
    {
      "nombres":"LOVATON HUILCA MARINA",
      "dni":23953026,
      "ieId":""
    },
    {
      "nombres":"MANUEL ASTOHUILLCA MARIA REYNA",
      "dni":29679036,
      "ieId":""
    },
    {
      "nombres":"PANTIGOZO GUTIERREZ MARIA ANTONIETA",
      "dni":23834539,
      "ieId":""
    },
    {
      "nombres":"QUISPE PALACIOS ANTONIETA",
      "dni":23870401,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ SOTO VICTOR",
      "dni":23956679,
      "ieId":""
    },
    {
      "nombres":"ROSELL MUJICA YOVANA ELIDA",
      "dni":23864235,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI TORRES GREGORIA",
      "dni":23896979,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA FLOREZ MARIA LUISA",
      "dni":23803033,
      "ieId":""
    },
    {
      "nombres":"YEPEZ ESTRADA ORLANDO MARTIN",
      "dni":23874518,
      "ieId":""
    },
    {
      "nombres":"AUCAPIÑA SUVIZARRETA HIDALIA",
      "dni":43295841,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAYTA MEZA DAMIAN ELIZARIO",
      "dni":23995442,
      "ieId":""
    },
    {
      "nombres":"BOBADILLA CONDE LUCILA",
      "dni":23979483,
      "ieId":""
    },
    {
      "nombres":"CAMERO RAMOS FAUSTINO",
      "dni":23954713,
      "ieId":""
    },
    {
      "nombres":"CHAMPI HUAMAN PERCY",
      "dni":23988418,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR HUILLCA ANA MARIA",
      "dni":23935712,
      "ieId":""
    },
    {
      "nombres":"DELGADO ORTIZ FLORA",
      "dni":23926971,
      "ieId":""
    },
    {
      "nombres":"HILARES CONDORI MARTHA",
      "dni":23984964,
      "ieId":""
    },
    {
      "nombres":"LOAIZA ROJAS ELENA",
      "dni":23940995,
      "ieId":""
    },
    {
      "nombres":"MENDOZA RAMIREZ NEMESIO",
      "dni":31126865,
      "ieId":""
    },
    {
      "nombres":"MORA QUISPE CRISTINA",
      "dni":23805839,
      "ieId":""
    },
    {
      "nombres":"ORDUÑA LLONTOP MARIA ELENA",
      "dni":5071545,
      "ieId":""
    },
    {
      "nombres":"PANCORBO DURAND ELIZABETH",
      "dni":23920507,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUILLCAHUAMAN MARIA",
      "dni":23925476,
      "ieId":""
    },
    {
      "nombres":"TORRES SELIS MARIA ELIANA",
      "dni":40567424,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA DE PILARES MARIA ISABEL",
      "dni":23976261,
      "ieId":""
    },
    {
      "nombres":"ARAGON DE CUELA MARTA",
      "dni":23963289,
      "ieId":""
    },
    {
      "nombres":"ASTETE GONZALES JUDITH",
      "dni":23881982,
      "ieId":""
    },
    {
      "nombres":"AUBERT ALVAREZ GLORIA AUGUSTA",
      "dni":25180700,
      "ieId":""
    },
    {
      "nombres":"CHACON SILVA JIM MIGUEL",
      "dni":31004366,
      "ieId":""
    },
    {
      "nombres":"CONDORHUAMAN CHALLCO FRIDA",
      "dni":43778146,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHAUCA JULIO TITOV",
      "dni":23862370,
      "ieId":""
    },
    {
      "nombres":"OLAVE CAIRO LUZ MARINA",
      "dni":23869385,
      "ieId":""
    },
    {
      "nombres":"PEREZ DE ARAGON ALBERTINA BERTHA",
      "dni":23877113,
      "ieId":""
    },
    {
      "nombres":"VICTORIA FERNANDEZ BACA AMERICO",
      "dni":23845027,
      "ieId":""
    },
    {
      "nombres":"CARDENAS YARANGA CARLOS MARCIAL",
      "dni":28576584,
      "ieId":""
    },
    {
      "nombres":"COLLANTES BERRIO ANA MARIA",
      "dni":23954069,
      "ieId":""
    },
    {
      "nombres":"FLORES QUISPE HILDA ELIZABET",
      "dni":45205540,
      "ieId":""
    },
    {
      "nombres":"OVIEDO MORENO JUAN EDUARDO",
      "dni":23961481,
      "ieId":""
    },
    {
      "nombres":"PINEDO TACO AYDE",
      "dni":23921847,
      "ieId":""
    },
    {
      "nombres":"PIZARRO NINA HAYDEE",
      "dni":23920730,
      "ieId":""
    },
    {
      "nombres":"QUEHUARUCHO CABALLERO RINA",
      "dni":4822045,
      "ieId":""
    },
    {
      "nombres":"SARMIENTO DE CHAMPY CARMEN GRACIELA",
      "dni":23800745,
      "ieId":""
    },
    {
      "nombres":"TTITO ÑAUPA MARIA LUISA",
      "dni":23950194,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA PALOMINO JORGE",
      "dni":24468833,
      "ieId":""
    },
    {
      "nombres":"BENDEZU GROVAS IGNACIA",
      "dni":23982263,
      "ieId":""
    },
    {
      "nombres":"CALLAPI-A LETONA PATRICIA",
      "dni":23946184,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE COPACONDORI ADELMA",
      "dni":23942439,
      "ieId":""
    },
    {
      "nombres":"HUAMANI HUAMAN MARTHA",
      "dni":24388465,
      "ieId":""
    },
    {
      "nombres":"PALOMINO DEZA LUCILA",
      "dni":23837376,
      "ieId":""
    },
    {
      "nombres":"TAMATA CASTILLO PEDRO EUSTERIO",
      "dni":23963780,
      "ieId":""
    },
    {
      "nombres":"ZAPATA MONTOYA MAXIMO",
      "dni":23990054,
      "ieId":""
    },
    {
      "nombres":"ALCAYHUAMAN GIL SONIA",
      "dni":23940160,
      "ieId":""
    },
    {
      "nombres":"CABALLERO RAMOS TRINIDAD",
      "dni":24990406,
      "ieId":""
    },
    {
      "nombres":"CORNEJO MOZO ANGELICA",
      "dni":23904613,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS VALENZUELA JANETTE NORA",
      "dni":31304390,
      "ieId":""
    },
    {
      "nombres":"GARCIA OLIVERA ANGELICA",
      "dni":23951156,
      "ieId":""
    },
    {
      "nombres":"BACA ESPEJO NORMA MERCEDES",
      "dni":23873080,
      "ieId":""
    },
    {
      "nombres":"HUAMANI SALCEDO ESTEFANY",
      "dni":23828670,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ CAVIEDES VICITACION",
      "dni":25311838,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ CAVIEDES VISITACION",
      "dni":25311830,
      "ieId":""
    },
    {
      "nombres":"PICCHUTITO BEJAR RICARDO",
      "dni":4821322,
      "ieId":""
    },
    {
      "nombres":"VALVERDE PERALTA HIPOLITO",
      "dni":23952219,
      "ieId":""
    },
    {
      "nombres":"ACHAHUI CHOQUE ALBERTINA",
      "dni":24675219,
      "ieId":""
    },
    {
      "nombres":"BERNAL FARFAN VIOLETA",
      "dni":23993463,
      "ieId":""
    },
    {
      "nombres":"CAMPANA MOREANO DORIS MARINA",
      "dni":23854174,
      "ieId":""
    },
    {
      "nombres":"DAVILA CAMPOS FILOMENA",
      "dni":24682489,
      "ieId":""
    },
    {
      "nombres":"FARFAN ENCALADA MARISOL",
      "dni":24789180,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CERVANTES JUSTINO",
      "dni":23951752,
      "ieId":""
    },
    {
      "nombres":"HUAMAN FERRO MARGARITA",
      "dni":24462572,
      "ieId":""
    },
    {
      "nombres":"LOAIZA MUÑOZ GILBERTO MISAEL",
      "dni":23948142,
      "ieId":""
    },
    {
      "nombres":"LUCANA QUISPE HIRMA",
      "dni":25181301,
      "ieId":""
    },
    {
      "nombres":"LUNA DELGADO EDGAR JUSTINO",
      "dni":25320977,
      "ieId":""
    },
    {
      "nombres":"NECOCHEA ARREDONDO ANGEL ANTONIO",
      "dni":23919308,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA TISOC ANABEL AMPARO",
      "dni":23997285,
      "ieId":""
    },
    {
      "nombres":"RADO PAZ DANTE",
      "dni":23950980,
      "ieId":""
    },
    {
      "nombres":"VALDEZ ALVAREZ JHOEL",
      "dni":25001993,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA MORALES IRMA",
      "dni":23953705,
      "ieId":""
    },
    {
      "nombres":"CHOQUE HUAMAN MARTHA",
      "dni":23960103,
      "ieId":""
    },
    {
      "nombres":"LEON DAZA VICTORIA",
      "dni":24967577,
      "ieId":""
    },
    {
      "nombres":"SANGAMA CAPPELLETTI DE MARIA APOLONIA",
      "dni":4820185,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI FLORES HILDA MARUJA",
      "dni":23837915,
      "ieId":""
    },
    {
      "nombres":"ARAOZ SALAS EDITH MARY",
      "dni":23923642,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS MONTALVO MARIA LUZ",
      "dni":23867826,
      "ieId":""
    },
    {
      "nombres":"CHILE AMARU VILMA",
      "dni":25003793,
      "ieId":""
    },
    {
      "nombres":"DURAND LOAIZA WILBERT",
      "dni":23859348,
      "ieId":""
    },
    {
      "nombres":"HUAMANI PUMALLIQUE DIONY",
      "dni":23932178,
      "ieId":""
    },
    {
      "nombres":"HUARAC COLLADO ENMA",
      "dni":23963399,
      "ieId":""
    },
    {
      "nombres":"LIGAS QUISPE LEONARDA",
      "dni":23869671,
      "ieId":""
    },
    {
      "nombres":"MENDIETA GARCIA JUANA GLADYS",
      "dni":23807626,
      "ieId":""
    },
    {
      "nombres":"SALAS CASTRO ANA MARIA",
      "dni":23830909,
      "ieId":""
    },
    {
      "nombres":"SANCA HUANCA LUZ MARINA",
      "dni":10783405,
      "ieId":""
    },
    {
      "nombres":"SUCNIER CARRASCO ELIZABETH MARLENE",
      "dni":23808660,
      "ieId":""
    },
    {
      "nombres":"SUÑA CASAPINO JULIA CELESTINA",
      "dni":23872854,
      "ieId":""
    },
    {
      "nombres":"TICONA UGARTE FLORA",
      "dni":25302847,
      "ieId":""
    },
    {
      "nombres":"VIZARRIETA DINOS MARIA TERESA",
      "dni":23962532,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GONZALES ANA MARIA",
      "dni":24711341,
      "ieId":""
    },
    {
      "nombres":"CASTRO LOPEZ DE OLAVE TANIA NATALY",
      "dni":25216808,
      "ieId":""
    },
    {
      "nombres":"DIAZ SALAS MONICA",
      "dni":23929829,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA PEREZ IVAN",
      "dni":25000932,
      "ieId":""
    },
    {
      "nombres":"LEON RODRIGUEZ ROSA LUCIA",
      "dni":24701098,
      "ieId":""
    },
    {
      "nombres":"MASIAS CAMA VICTORIA",
      "dni":23983964,
      "ieId":""
    },
    {
      "nombres":"MENACHO RIVAS MARIA ROSA",
      "dni":23985768,
      "ieId":""
    },
    {
      "nombres":"MISME QUINTANA ALEJANDRINA",
      "dni":25319246,
      "ieId":""
    },
    {
      "nombres":"MORA QUISPE CRISTINA",
      "dni":23806807,
      "ieId":""
    },
    {
      "nombres":"PAZ PEÑA LISBETH DIONNI",
      "dni":24300511,
      "ieId":""
    },
    {
      "nombres":"QUISPE CASTILLO JUANA",
      "dni":24468832,
      "ieId":""
    },
    {
      "nombres":"RIVERO ESCALANTE MARIA ANTONIETA",
      "dni":23960194,
      "ieId":""
    },
    {
      "nombres":"ROJAS ZAVALETA MAX",
      "dni":24680567,
      "ieId":""
    },
    {
      "nombres":"TICONA VARGAS WASHINGTON",
      "dni":23956207,
      "ieId":""
    },
    {
      "nombres":"AGUILAR SOSA YOLANDA",
      "dni":2387464,
      "ieId":""
    },
    {
      "nombres":"APAZA QUISPE DELIA",
      "dni":25217198,
      "ieId":""
    },
    {
      "nombres":"BACA ESQUIVEL ELIZABETH",
      "dni":23898293,
      "ieId":""
    },
    {
      "nombres":"BERNAL BLANCO EULALIA",
      "dni":23960486,
      "ieId":""
    },
    {
      "nombres":"GARCIA CCAHUATA ANDREA",
      "dni":24663021,
      "ieId":""
    },
    {
      "nombres":"PILLCO CARPIO OLGA",
      "dni":25002807,
      "ieId":""
    },
    {
      "nombres":"ROMERO PEÑA JOSE GUIDO",
      "dni":24677228,
      "ieId":""
    },
    {
      "nombres":"VALENCIA VASQUEZ JUAN FRANCISCO",
      "dni":24460724,
      "ieId":""
    },
    {
      "nombres":"BACA CARRASCO ROSA ESTHER",
      "dni":23877306,
      "ieId":""
    },
    {
      "nombres":"BRAVO ALVAREZ MANUEL",
      "dni":23877460,
      "ieId":""
    },
    {
      "nombres":"CASTILLO DAVILA LIDIA",
      "dni":23954579,
      "ieId":""
    },
    {
      "nombres":"CHOQUE ZEA EUFEMIA",
      "dni":23872324,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY LUNA DE VERGA FLOR DE MARIA",
      "dni":23884478,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ABARCA MIRYAM ELIZABETH",
      "dni":23878191,
      "ieId":""
    },
    {
      "nombres":"MAYORGA DAZA RUTH",
      "dni":23908880,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MUÑOZ KARINA",
      "dni":23927154,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS VALENCIA MARIA CLEOFE",
      "dni":23808443,
      "ieId":""
    },
    {
      "nombres":"PELAEZ CASTRO JULIO DOMINGO",
      "dni":23834472,
      "ieId":""
    },
    {
      "nombres":"RIOS BACA MARIA ALICIA",
      "dni":25305018,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ DE MERCADO EUFEMIA",
      "dni":25300427,
      "ieId":""
    },
    {
      "nombres":"TAPIA LOPEZ MARVIN OSCAR",
      "dni":23978647,
      "ieId":""
    },
    {
      "nombres":"TOMAICONZA RODRIGUEZ JOEL",
      "dni":23938962,
      "ieId":""
    },
    {
      "nombres":"TRIVEÑO ROJAS ADELA",
      "dni":23824662,
      "ieId":""
    },
    {
      "nombres":"VILLENA NUÑEZ ISAAC",
      "dni":23862524,
      "ieId":""
    },
    {
      "nombres":"BELLOTA QUINTANILLA VICTOR",
      "dni":23832010,
      "ieId":""
    },
    {
      "nombres":"DURAND BLANCO CARMEN ROSA",
      "dni":23894218,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LASTEROS JULIA",
      "dni":4818706,
      "ieId":""
    },
    {
      "nombres":"MERCADO RUEDA YADIRA",
      "dni":23863039,
      "ieId":""
    },
    {
      "nombres":"NEGRON PERALTA IRAYDA",
      "dni":23861437,
      "ieId":""
    },
    {
      "nombres":"QUECAÑO QUISPE HILARIO",
      "dni":23859678,
      "ieId":""
    },
    {
      "nombres":"SUAREZ DIAZ JEANETTE",
      "dni":25182959,
      "ieId":""
    },
    {
      "nombres":"ANDIA VERA VIRGINIA",
      "dni":23812401,
      "ieId":""
    },
    {
      "nombres":"APAZA GOMEZ JORGE",
      "dni":23818743,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA MAMANI VICTORIA",
      "dni":24706788,
      "ieId":""
    },
    {
      "nombres":"CABRERA QUISPE FRANCISCO HUGO",
      "dni":23966771,
      "ieId":""
    },
    {
      "nombres":"CANAHUA CCAMATO MARIA ELENA",
      "dni":23943123,
      "ieId":""
    },
    {
      "nombres":"CASAS PAREJA RUT LORGIA",
      "dni":4815530,
      "ieId":""
    },
    {
      "nombres":"CHILLCA HUALLPA ROSA",
      "dni":23914738,
      "ieId":""
    },
    {
      "nombres":"CHILLITUPA SALAZAR GREGORIO",
      "dni":23877569,
      "ieId":""
    },
    {
      "nombres":"GUIZADO ELME FANNY IRMA",
      "dni":25621651,
      "ieId":""
    },
    {
      "nombres":"HUALLPA CHAMPI ELISA",
      "dni":40561698,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ATAULLUCO BETTY MARISOL",
      "dni":23867055,
      "ieId":""
    },
    {
      "nombres":"IBARRA MIRANDA LUZ MARINA",
      "dni":23880537,
      "ieId":""
    },
    {
      "nombres":"LOZANO CENTENO CARMEN",
      "dni":23929713,
      "ieId":""
    },
    {
      "nombres":"MEDINA PUMA LUCILA",
      "dni":23839305,
      "ieId":""
    },
    {
      "nombres":"MENDOZA BEJAR OMAR JESUS",
      "dni":24713587,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MUELLE JULIA",
      "dni":23814129,
      "ieId":""
    },
    {
      "nombres":"MOLLO ROJAS JAVIER ENRIQUE",
      "dni":23933810,
      "ieId":""
    },
    {
      "nombres":"MORALES CHAVEZ ZENAIDA",
      "dni":23983037,
      "ieId":""
    },
    {
      "nombres":"NAVARRO ANDIA LAURA FRANCISCA",
      "dni":23852741,
      "ieId":""
    },
    {
      "nombres":"NAVEA MESSA SULMA",
      "dni":23822449,
      "ieId":""
    },
    {
      "nombres":"OBLITAS SALCEDO NANCY VIDALINA",
      "dni":23988766,
      "ieId":""
    },
    {
      "nombres":"OVIEDO QUISPE DENIS",
      "dni":25184593,
      "ieId":""
    },
    {
      "nombres":"PANIAGUA PINTO JESUS",
      "dni":23988447,
      "ieId":""
    },
    {
      "nombres":"PUMALEQUE SONCCO GREGORIO TEOFILO",
      "dni":23829996,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUANCA MARLENE",
      "dni":23950085,
      "ieId":""
    },
    {
      "nombres":"RAMOS FERNANDEZ ROSIO DE JESUS",
      "dni":23933775,
      "ieId":""
    },
    {
      "nombres":"ROMERO COSTILLA ESTELA BEATRIZ",
      "dni":23859084,
      "ieId":""
    },
    {
      "nombres":"SALAS AUCACUSI EDITH NATIVIDAD",
      "dni":41284119,
      "ieId":""
    },
    {
      "nombres":"SANDOVAL CABALLERO YESHICA YULY",
      "dni":40241496,
      "ieId":""
    },
    {
      "nombres":"TAGLE MACEDO NELLY FELICITA",
      "dni":23837858,
      "ieId":""
    },
    {
      "nombres":"TTITO ACHAHUANCO WILBERT",
      "dni":24705363,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ VALDIVIA DELIA MEGALIT",
      "dni":23822182,
      "ieId":""
    },
    {
      "nombres":"VILLENA VILLENA MARIA VISITACION",
      "dni":23988822,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GONZALES GUILLERMO MANUEL",
      "dni":23869498,
      "ieId":""
    },
    {
      "nombres":"ARROYO MEDINA PATRICIO",
      "dni":23878361,
      "ieId":""
    },
    {
      "nombres":"BOZA CHUMBEZ JACOB",
      "dni":23203143,
      "ieId":""
    },
    {
      "nombres":"CARTAGENA JIMENEZ MIGUEL ANGEL",
      "dni":1556303,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ALZAMORA ROSA AMPARO",
      "dni":23881025,
      "ieId":""
    },
    {
      "nombres":"CUEVAS MISME GLORIA",
      "dni":23817375,
      "ieId":""
    },
    {
      "nombres":"CUEVAS MISME RENAN",
      "dni":24998436,
      "ieId":""
    },
    {
      "nombres":"DE LOS RIOS GUZMAN AIDEE BERNARDINA",
      "dni":23902435,
      "ieId":""
    },
    {
      "nombres":"DIAZ PAREJA REINALDO ENRIQUE",
      "dni":23851627,
      "ieId":""
    },
    {
      "nombres":"HAQQUEHUA HOMBRE VICTORIA",
      "dni":10832801,
      "ieId":""
    },
    {
      "nombres":"HERRERA FERNANDEZ YESICA ROSA",
      "dni":22508276,
      "ieId":""
    },
    {
      "nombres":"HIDALGO HERMOZA EDGAR",
      "dni":23870017,
      "ieId":""
    },
    {
      "nombres":"LATORRE YEPEZ HAYDEE",
      "dni":23896274,
      "ieId":""
    },
    {
      "nombres":"MAMANI TITO FELICITAS MARINA",
      "dni":23885740,
      "ieId":""
    },
    {
      "nombres":"MAYORGA HUACAC LEANDRA MATILDE",
      "dni":24286007,
      "ieId":""
    },
    {
      "nombres":"MERCADO FLOREZ JUAN JOSE",
      "dni":23927124,
      "ieId":""
    },
    {
      "nombres":"PALOMINO CENTENO ANA",
      "dni":23831923,
      "ieId":""
    },
    {
      "nombres":"PALOMINO ESPEJO EDWAR",
      "dni":23911452,
      "ieId":""
    },
    {
      "nombres":"VALVERDE DUEÑAS LUIS",
      "dni":23896696,
      "ieId":""
    },
    {
      "nombres":"VIVANCO CARMONA MARIA EUGENIA",
      "dni":23913015,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA FARFAN JUDITH",
      "dni":23945727,
      "ieId":""
    },
    {
      "nombres":"AUCCAPURI USCA ELPIDIA",
      "dni":80567237,
      "ieId":""
    },
    {
      "nombres":"BENITES HUAMANIRE LIBIO",
      "dni":23847422,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CALDERON JOSE LUIS",
      "dni":41827496,
      "ieId":""
    },
    {
      "nombres":"CASTRO SALAS ELIZABETH FILOMENA",
      "dni":23849694,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ MEZA MANUEL",
      "dni":23856253,
      "ieId":""
    },
    {
      "nombres":"CLEMENTE GUZMAN DONATO",
      "dni":23889667,
      "ieId":""
    },
    {
      "nombres":"CUITO ESPIRILLA FRIDA",
      "dni":24583124,
      "ieId":""
    },
    {
      "nombres":"ENCISO RIVERA SIMONA ERNESTINA",
      "dni":31004044,
      "ieId":""
    },
    {
      "nombres":"ESPETIA HUANACO LEONARDO MODESTO",
      "dni":2295779,
      "ieId":""
    },
    {
      "nombres":"FLORES NAYHUA VIDAL",
      "dni":23967004,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ DIAZ EPIFANIO MARTIN",
      "dni":2172004,
      "ieId":""
    },
    {
      "nombres":"HUAMAN VALER JUANA",
      "dni":23833517,
      "ieId":""
    },
    {
      "nombres":"HUANCO FLORES ARTURO BRIGIDO",
      "dni":29368192,
      "ieId":""
    },
    {
      "nombres":"HUILLCA CURSI ROSARIO SARA",
      "dni":23812511,
      "ieId":""
    },
    {
      "nombres":"LEON RODRIGUEZ REBECA ISABEL",
      "dni":24662499,
      "ieId":""
    },
    {
      "nombres":"MENDOZA LOAIZA BERENICE",
      "dni":23862326,
      "ieId":""
    },
    {
      "nombres":"MENDOZA QUISPE VDA DE S PRESENTACION",
      "dni":24662055,
      "ieId":""
    },
    {
      "nombres":"MERINO DUEÑAS BETSY",
      "dni":23964829,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ PIZARRO JULIA CECILIA",
      "dni":40595837,
      "ieId":""
    },
    {
      "nombres":"OLAVE AYME MIDUA ISABEL",
      "dni":40051117,
      "ieId":""
    },
    {
      "nombres":"PANTIGOZO LOAIZA MAGDA LEONOR",
      "dni":23854969,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMANI NELIDA",
      "dni":23945681,
      "ieId":""
    },
    {
      "nombres":"QUISPE RIVERA SONIA",
      "dni":23902569,
      "ieId":""
    },
    {
      "nombres":"RAMOS MAMANI ENRIQUE",
      "dni":23888505,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SEGOVIA EDMY",
      "dni":23886757,
      "ieId":""
    },
    {
      "nombres":"TOMAYLLA LEZAMA JORGE LUCIO",
      "dni":23802344,
      "ieId":""
    },
    {
      "nombres":"ALFARO BOCANGEL GRACIELA",
      "dni":23871089,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ JAUREGUI WILLIAMS",
      "dni":23869447,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ JOVE JOSE SANTOS",
      "dni":1544736,
      "ieId":""
    },
    {
      "nombres":"ANCO CABALLERO YAJAIRA JEANNETH",
      "dni":23995104,
      "ieId":""
    },
    {
      "nombres":"BACA SOSA BELINDA",
      "dni":23808347,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE VILLAVICENCI NARCISO",
      "dni":23843925,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CASTRO SANIA MARICHELLY",
      "dni":45482248,
      "ieId":""
    },
    {
      "nombres":"CALLO SAHUARAURA DE PER SONIA",
      "dni":23858383,
      "ieId":""
    },
    {
      "nombres":"CANA HUAMAN WILLIAM",
      "dni":23852834,
      "ieId":""
    },
    {
      "nombres":"CCOLLANQUI AGUIRRE SAULO",
      "dni":23965281,
      "ieId":""
    },
    {
      "nombres":"CHACON FLORES LUIS ALFREDO",
      "dni":41507002,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ALFARO HIPOLITA MERCEDES",
      "dni":23850671,
      "ieId":""
    },
    {
      "nombres":"CHINO CALLO RAMON",
      "dni":23951582,
      "ieId":""
    },
    {
      "nombres":"CHOQUE MOLLEHUANCA PAULINA",
      "dni":23933616,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA CASTRO WALTER",
      "dni":23937681,
      "ieId":""
    },
    {
      "nombres":"COLLANTES GARATE YONI",
      "dni":23938334,
      "ieId":""
    },
    {
      "nombres":"CONDORI HUALLPA GENARO",
      "dni":25122521,
      "ieId":""
    },
    {
      "nombres":"CORBACHO CARPIO VALENTIN",
      "dni":23922258,
      "ieId":""
    },
    {
      "nombres":"CURO TTITO ROSA AUGUSTA",
      "dni":23840189,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA MOLINA URIEL",
      "dni":23986901,
      "ieId":""
    },
    {
      "nombres":"DEZA CHAVEZ SONIA",
      "dni":23936713,
      "ieId":""
    },
    {
      "nombres":"ESTRADA AGUILAR GLADIS RUTH",
      "dni":23963621,
      "ieId":""
    },
    {
      "nombres":"FARFAN SAMANEZ INDIRA BETSY",
      "dni":23979241,
      "ieId":""
    },
    {
      "nombres":"GARCIA BELLOTA ANGELICA YANIRA",
      "dni":23951821,
      "ieId":""
    },
    {
      "nombres":"GARRIDO ROJAS DELIA DELFINA",
      "dni":23913722,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ ALVAREZ GINA ROXANA",
      "dni":23815062,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ DE BONET SILVIA MARINA",
      "dni":23966416,
      "ieId":""
    },
    {
      "nombres":"HALANOCA PUMA RENE",
      "dni":23854047,
      "ieId":""
    },
    {
      "nombres":"HUANCARA SERRANO KARINA",
      "dni":40006217,
      "ieId":""
    },
    {
      "nombres":"ITURRIAGA PINAZO LETTY SONIA",
      "dni":23814999,
      "ieId":""
    },
    {
      "nombres":"MAMANI LOPEZ ALEX",
      "dni":40673246,
      "ieId":""
    },
    {
      "nombres":"MENDOZA COYCOSI WILBER",
      "dni":42268670,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MARIN SINFOROSA LELIS",
      "dni":23869945,
      "ieId":""
    },
    {
      "nombres":"MONZON ASLLA ESTEBAN",
      "dni":23881110,
      "ieId":""
    },
    {
      "nombres":"MORON QUISPE MARIA SOLEDAD",
      "dni":23996046,
      "ieId":""
    },
    {
      "nombres":"MUJICA PAREDES ROSARIO SMILDZINIA",
      "dni":23962679,
      "ieId":""
    },
    {
      "nombres":"PACHECO PACHECO GLADYS",
      "dni":23816406,
      "ieId":""
    },
    {
      "nombres":"PEREZ GUZMAN CANDELARIO",
      "dni":23880065,
      "ieId":""
    },
    {
      "nombres":"PEREZ SOTO DE TUPAC JUSTINA",
      "dni":23886699,
      "ieId":""
    },
    {
      "nombres":"PILARES LOZADA ERASMO",
      "dni":24680414,
      "ieId":""
    },
    {
      "nombres":"PINEDO GALINDO MARIA JESUS",
      "dni":23873406,
      "ieId":""
    },
    {
      "nombres":"PUMA QUISPE TANIA AMPARO",
      "dni":23925038,
      "ieId":""
    },
    {
      "nombres":"QUINTANA ANDRADE DE LOV VICTORIA ESTELA",
      "dni":23885330,
      "ieId":""
    },
    {
      "nombres":"QUISPE AUCCA RINA ESTHER",
      "dni":23927178,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ GARCIA GENRY MARIO",
      "dni":41329254,
      "ieId":""
    },
    {
      "nombres":"RONDAN MAROCHO MARINA",
      "dni":23842446,
      "ieId":""
    },
    {
      "nombres":"SALIZAR FLORES LIDIA",
      "dni":23804182,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ ABARCA NOEMI",
      "dni":23962987,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ ROSELLO AURORA LUBI",
      "dni":23865062,
      "ieId":""
    },
    {
      "nombres":"SANTOYO CHACCA VLADIMIR",
      "dni":23984705,
      "ieId":""
    },
    {
      "nombres":"TORRES GRAJEDA ANGELA MARIA",
      "dni":23880577,
      "ieId":""
    },
    {
      "nombres":"TTITO HUAMAN PERCY",
      "dni":23967480,
      "ieId":""
    },
    {
      "nombres":"UGARTE MERCADO SIMON",
      "dni":23936788,
      "ieId":""
    },
    {
      "nombres":"VENEGAS VERGARA MATIAS EDILBERTO",
      "dni":31169098,
      "ieId":""
    },
    {
      "nombres":"VERA BELTRAN FERNANDO",
      "dni":23814298,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE CONDEÑA NILO JESUS",
      "dni":23801893,
      "ieId":""
    },
    {
      "nombres":"VITORINO CASTELLANOS WALTER",
      "dni":25211555,
      "ieId":""
    },
    {
      "nombres":"YUCRA RAMOS FLAVIO",
      "dni":23935375,
      "ieId":""
    },
    {
      "nombres":"ZAPANA PINEDA JOSE URIEL",
      "dni":2399757,
      "ieId":""
    },
    {
      "nombres":"ANCCO QUISPE DE PONCE D CLAUDIA",
      "dni":23845831,
      "ieId":""
    },
    {
      "nombres":"ARROYO LOAYZA DANIEL ANGEL",
      "dni":23953742,
      "ieId":""
    },
    {
      "nombres":"AUCCACUSI VALENZUELA DE DEMETRIA",
      "dni":23833060,
      "ieId":""
    },
    {
      "nombres":"AYALA VALENCIA JUDITH",
      "dni":23929826,
      "ieId":""
    },
    {
      "nombres":"AYME HUAMANI VICTOR",
      "dni":29413291,
      "ieId":""
    },
    {
      "nombres":"BERRIO ROQUE ITALO",
      "dni":23932039,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL ORUE KARINA",
      "dni":42492155,
      "ieId":""
    },
    {
      "nombres":"BOZA ARREDONDO ADRIEL VLADIMIRO",
      "dni":23849528,
      "ieId":""
    },
    {
      "nombres":"CARDENAS JIMENEZ EDGAR FRANCISCO",
      "dni":24680791,
      "ieId":""
    },
    {
      "nombres":"CARRASCO LOPEZ TOMASA",
      "dni":23902585,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CAVIEDES JHON FREDDY",
      "dni":23831718,
      "ieId":""
    },
    {
      "nombres":"CASTRO MENA FABIAN JAIME",
      "dni":25207893,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ RIVERA LORENA CECILIA",
      "dni":29594643,
      "ieId":""
    },
    {
      "nombres":"COTACALLAPA CALCINA WENCESLAO EFRAIN",
      "dni":24001923,
      "ieId":""
    },
    {
      "nombres":"CUPI ZUNIGA GRACIELA",
      "dni":23853753,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ TTITO CLAUDIO",
      "dni":24700324,
      "ieId":""
    },
    {
      "nombres":"GONZALES GALLEGOS ISABEL",
      "dni":23867681,
      "ieId":""
    },
    {
      "nombres":"GONZALES QUISPE FREDDY FRANK",
      "dni":1344083,
      "ieId":""
    },
    {
      "nombres":"ICHILLUMPA VARGAS VICTOR HUGO",
      "dni":23899937,
      "ieId":""
    },
    {
      "nombres":"LAGUNA CONTRERAS MILUSKA",
      "dni":23920405,
      "ieId":""
    },
    {
      "nombres":"LIGAS OVALLE ELSA",
      "dni":23878562,
      "ieId":""
    },
    {
      "nombres":"MEJIA YAÑEZ DALMACIA",
      "dni":23849654,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ALARCON ELIAS ANTONIO",
      "dni":23933869,
      "ieId":""
    },
    {
      "nombres":"MOLINA DIAZ RUTH OLIVIA",
      "dni":23937298,
      "ieId":""
    },
    {
      "nombres":"OLIVERA JIMENEZ LOURDES MERY",
      "dni":23937825,
      "ieId":""
    },
    {
      "nombres":"ORTEGA DE MANCO RINA",
      "dni":23954160,
      "ieId":""
    },
    {
      "nombres":"PACHECO CACERES IRMA LISBETH",
      "dni":23878530,
      "ieId":""
    },
    {
      "nombres":"PALOMINO PITTMAN MERCEDES DOROTHI",
      "dni":23878836,
      "ieId":""
    },
    {
      "nombres":"PUMA ALONZO DORIS CLARA",
      "dni":23937609,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONDORI MARIA UBALDINA",
      "dni":24675546,
      "ieId":""
    },
    {
      "nombres":"QUISPE CRUZ VICTORIA",
      "dni":23838731,
      "ieId":""
    },
    {
      "nombres":"QUISPETUPA PAREDES YOVANA",
      "dni":23929848,
      "ieId":""
    },
    {
      "nombres":"RIVAS LOAYZA MARCO ANTONIO",
      "dni":23951939,
      "ieId":""
    },
    {
      "nombres":"ROJO SOLORZANO HENRY CHARLES",
      "dni":23946619,
      "ieId":""
    },
    {
      "nombres":"SUTTA MAMANI RICARDO",
      "dni":23830438,
      "ieId":""
    },
    {
      "nombres":"TENORIO VALENZUELA LIZ YOLANDA",
      "dni":42010921,
      "ieId":""
    },
    {
      "nombres":"VALENCIA CUADROS ALEJANDRA",
      "dni":23997457,
      "ieId":""
    },
    {
      "nombres":"VALER BARCENA ZOHIA",
      "dni":23850535,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ HERRERA EDGAR",
      "dni":23804854,
      "ieId":""
    },
    {
      "nombres":"VENEGAS BOCANGEL GLORIA",
      "dni":23870793,
      "ieId":""
    },
    {
      "nombres":"VERA PILLCO GLADYS",
      "dni":23942842,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE SOTELO GLADYS",
      "dni":40852869,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA CABALLERO ANITA",
      "dni":24704127,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA BRAVO GIRALDA",
      "dni":23900703,
      "ieId":""
    },
    {
      "nombres":"ZAVALA VENGOA SOLEDAD LIDIA",
      "dni":23897168,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO GARCIA NIMIS JUDITH",
      "dni":23923239,
      "ieId":""
    },
    {
      "nombres":"BACA CHOQUE ZAYDA",
      "dni":23950464,
      "ieId":""
    },
    {
      "nombres":"BELTRAN VELASQUEZ HILDA FERMINA",
      "dni":23845686,
      "ieId":""
    },
    {
      "nombres":"CACERES CAIRO RAUL GUILLERMO",
      "dni":23990084,
      "ieId":""
    },
    {
      "nombres":"CASAFRANCA ALVARADO MARIA ELENA",
      "dni":23991195,
      "ieId":""
    },
    {
      "nombres":"CUEVA CHAVEZ ELSA",
      "dni":41583779,
      "ieId":""
    },
    {
      "nombres":"CUSI CARDENAS NORMA",
      "dni":23896677,
      "ieId":""
    },
    {
      "nombres":"DEZA CUSIPAUCAR RUBEN",
      "dni":23806375,
      "ieId":""
    },
    {
      "nombres":"DIAZ ASTORIMA DIONICIO",
      "dni":23921863,
      "ieId":""
    },
    {
      "nombres":"ENCISO TEJADA ALVINO REIMUNDO",
      "dni":23907221,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PUMA ROGER",
      "dni":23978853,
      "ieId":""
    },
    {
      "nombres":"FONSECA SANTA CRUZ JOSE LUIS",
      "dni":23868712,
      "ieId":""
    },
    {
      "nombres":"MAMANI HANCCO OSWALDO",
      "dni":23926284,
      "ieId":""
    },
    {
      "nombres":"MENDOZA GUTIERREZ ELVIRA ELENA",
      "dni":18080070,
      "ieId":""
    },
    {
      "nombres":"MONTOYA ARCE VICTOR CARLOS",
      "dni":8017047,
      "ieId":""
    },
    {
      "nombres":"MOREANO DE SARMIENTO LUZ MARINA",
      "dni":4808780,
      "ieId":""
    },
    {
      "nombres":"POLANCO SAGASTIZABAL JULIA",
      "dni":23964068,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN QUISPE MARIO",
      "dni":23822403,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ LIVANO MERIDA",
      "dni":23874124,
      "ieId":""
    },
    {
      "nombres":"RAMOS CHAMBI FLAVIO",
      "dni":1546959,
      "ieId":""
    },
    {
      "nombres":"TAPARA APARICIO ELIZABETH",
      "dni":43002870,
      "ieId":""
    },
    {
      "nombres":"TAPIA DE CANDIA MARIA VILMA",
      "dni":23861330,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO ORTIZ DE ORUE FRANCISCO",
      "dni":23909199,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUISPE MARIA FRINE",
      "dni":23879205,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE VEGA MATILDE",
      "dni":9857399,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA CANDIA LUZ MARINA",
      "dni":23935390,
      "ieId":""
    },
    {
      "nombres":"ARIZA TORRES ZIHANDY MORAYMA",
      "dni":41816183,
      "ieId":""
    },
    {
      "nombres":"AVILES CHAPALLMA CARMINIA",
      "dni":40245879,
      "ieId":""
    },
    {
      "nombres":"AYMACHOQUE CONDORI DAVID CESAR",
      "dni":23957679,
      "ieId":""
    },
    {
      "nombres":"CARRASCO CORNEJO MARCO ANTONIO",
      "dni":4819592,
      "ieId":""
    },
    {
      "nombres":"CHIHUANTITO GIBAJA CARLA MAYWA",
      "dni":40022897,
      "ieId":""
    },
    {
      "nombres":"CONDORI APAZA OCTAVIO",
      "dni":23841556,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA RICALDE MERCEDES",
      "dni":23860126,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ REVOLLAR DANILO",
      "dni":23888264,
      "ieId":""
    },
    {
      "nombres":"LUNA PIEROLA MARIO",
      "dni":23900183,
      "ieId":""
    },
    {
      "nombres":"PANTOJA CALVO MARIA LUISA",
      "dni":23930865,
      "ieId":""
    },
    {
      "nombres":"QUIÑONEZ ARIZABAL EVA MARY",
      "dni":23949364,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ BECERRA NANCY",
      "dni":23880892,
      "ieId":""
    },
    {
      "nombres":"ARIAS MENDOZA ALEX",
      "dni":23903130,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ GAMARRA FRANCISCO",
      "dni":25061741,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR LOZADA DAVID",
      "dni":23831085,
      "ieId":""
    },
    {
      "nombres":"DELGADO RODRIGUEZ LUIS ALBERTO",
      "dni":25008419,
      "ieId":""
    },
    {
      "nombres":"DIAZ FARFAN GEDY",
      "dni":24702859,
      "ieId":""
    },
    {
      "nombres":"FUENTES CHACON MARLENE",
      "dni":23963870,
      "ieId":""
    },
    {
      "nombres":"GARROZ FERRO MARIBEL",
      "dni":41980556,
      "ieId":""
    },
    {
      "nombres":"MANYA CHECORI ROBERT MARTIN",
      "dni":25001790,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA GUARNIZO JUAN TOMAS",
      "dni":23975553,
      "ieId":""
    },
    {
      "nombres":"TORRES MACOTELA FANNY ASUNCION",
      "dni":23947614,
      "ieId":""
    },
    {
      "nombres":"APARICIO TAYPE LARRY",
      "dni":23966952,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VDA DE QUISPES SOFIA NELIDA",
      "dni":29387775,
      "ieId":""
    },
    {
      "nombres":"PUMASUPA PUMA FREDY FLORENTINO",
      "dni":40246361,
      "ieId":""
    },
    {
      "nombres":"QUISPE MONZON GRACILA",
      "dni":24712904,
      "ieId":""
    },
    {
      "nombres":"TELLO YARIN CHARLES",
      "dni":23979844,
      "ieId":""
    },
    {
      "nombres":"AGUILAR TACUSI HERADIO",
      "dni":24583068,
      "ieId":""
    },
    {
      "nombres":"AMAUT TOMAYCONZA LIDIA",
      "dni":23859772,
      "ieId":""
    },
    {
      "nombres":"ARIAS PAULLO SUSAM EDITH",
      "dni":23982960,
      "ieId":""
    },
    {
      "nombres":"AYALA CHAMPI IGNACIO FREDY",
      "dni":29384778,
      "ieId":""
    },
    {
      "nombres":"BARRA VIZCARRA DENISSE",
      "dni":43645255,
      "ieId":""
    },
    {
      "nombres":"BELLIDO CALANCHI ZOILO",
      "dni":23900704,
      "ieId":""
    },
    {
      "nombres":"CAVERO BACA MARCO ANTONIO",
      "dni":23999773,
      "ieId":""
    },
    {
      "nombres":"CISNEROS CADENAS MARTHA SONIA",
      "dni":24661688,
      "ieId":""
    },
    {
      "nombres":"CORNEJO CONCHA JUANA DEOFELINDA",
      "dni":23816598,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CARBAJAL EDGAR",
      "dni":40120680,
      "ieId":""
    },
    {
      "nombres":"LOAIZA ROJAS AYDE",
      "dni":23960882,
      "ieId":""
    },
    {
      "nombres":"MENDOZA COYCOSI PEDRO LADISLAO",
      "dni":24003831,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ LINARES ROGER FELIX",
      "dni":25183004,
      "ieId":""
    },
    {
      "nombres":"PEREZ COSIO MARIA LUISA",
      "dni":23841857,
      "ieId":""
    },
    {
      "nombres":"PFURA CARBAJAL ANA MARIA",
      "dni":43252224,
      "ieId":""
    },
    {
      "nombres":"PUMA RAMOS MARIA SONIA",
      "dni":24004123,
      "ieId":""
    },
    {
      "nombres":"SORIA PANAIJO DANY DANIEL",
      "dni":41801199,
      "ieId":""
    },
    {
      "nombres":"TICONA CORDOVA DALILA",
      "dni":4826341,
      "ieId":""
    },
    {
      "nombres":"VALENCIA QUINTANILLA RUTH",
      "dni":23857522,
      "ieId":""
    },
    {
      "nombres":"VARGAS RODRIGUEZ ANTONIO",
      "dni":23968841,
      "ieId":""
    },
    {
      "nombres":"VERA HUAMANI BENIGNO",
      "dni":31541902,
      "ieId":""
    },
    {
      "nombres":"VILLALTA SANCHEZ FERDINAN",
      "dni":23856570,
      "ieId":""
    },
    {
      "nombres":"CARREON SUTEC ALAIN GUNNAR",
      "dni":23989228,
      "ieId":""
    },
    {
      "nombres":"GARCIA LOAIZA CARMEN ROSA",
      "dni":41418363,
      "ieId":""
    },
    {
      "nombres":"MESCCO QUISPE KARINA",
      "dni":40519909,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS ECHEVARRIA TOMASA NARCISA",
      "dni":23803652,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ APAZA NORMA",
      "dni":23975543,
      "ieId":""
    },
    {
      "nombres":"CAMPANA BECERRA SAMUEL",
      "dni":31302912,
      "ieId":""
    },
    {
      "nombres":"CARRILLO HUAMANHORQQUE MELCHOR GASPAR",
      "dni":23904919,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI HIPOLITO",
      "dni":2360513,
      "ieId":""
    },
    {
      "nombres":"CRUZ ZAMORA JESUS",
      "dni":23879173,
      "ieId":""
    },
    {
      "nombres":"GARCIA HUAMAN SANTOS",
      "dni":23864440,
      "ieId":""
    },
    {
      "nombres":"HUANCA QUISPE MIGUEL",
      "dni":23975461,
      "ieId":""
    },
    {
      "nombres":"LLALLA CUSI PABLO JUAN",
      "dni":24698302,
      "ieId":""
    },
    {
      "nombres":"LOZANO MONTALVO HUGO",
      "dni":24681380,
      "ieId":""
    },
    {
      "nombres":"MERCADO FERNANDEZ RAQUEL",
      "dni":23834466,
      "ieId":""
    },
    {
      "nombres":"MUELLE COLLADO YONI HILDEGARDA",
      "dni":23807330,
      "ieId":""
    },
    {
      "nombres":"PATILLA HUACAC MARISOL",
      "dni":25000696,
      "ieId":""
    },
    {
      "nombres":"QUISPEROCCA NINANCURO CASIANO",
      "dni":23932623,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA LEZAMA MARIA YULIANA",
      "dni":23808389,
      "ieId":""
    },
    {
      "nombres":"SALAS GUTIERREZ MERCEDES",
      "dni":23912770,
      "ieId":""
    },
    {
      "nombres":"VIANCO MARIN MARIBEL",
      "dni":23987695,
      "ieId":""
    },
    {
      "nombres":"VILLENA ERAZO ALEJANDRO",
      "dni":24682868,
      "ieId":""
    },
    {
      "nombres":"VILLENA LEON LILIAM NIVIA",
      "dni":23880700,
      "ieId":""
    },
    {
      "nombres":"ZU-IGA QUECA-O JESUS MARIO",
      "dni":23860438,
      "ieId":""
    },
    {
      "nombres":"ACHIRE CCAMA NILDA",
      "dni":24888624,
      "ieId":""
    },
    {
      "nombres":"ALLAUCA CAHUANA SILVIA AUGUSTA",
      "dni":25001244,
      "ieId":""
    },
    {
      "nombres":"CACERES DUEÑAS JAVIER",
      "dni":23965392,
      "ieId":""
    },
    {
      "nombres":"CARRASCO BACA VDA DE GA NORA VICTORIA",
      "dni":23929786,
      "ieId":""
    },
    {
      "nombres":"CHOQUE CASTILLO MARGOT CAROLINA",
      "dni":23862374,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CASTILLO ANDRES",
      "dni":40174679,
      "ieId":""
    },
    {
      "nombres":"HUILLCA SULLCA LUCY",
      "dni":40841681,
      "ieId":""
    },
    {
      "nombres":"LOAYZA CONDORI JOSE MARCIAL",
      "dni":23891101,
      "ieId":""
    },
    {
      "nombres":"MAMANI HUALLPA WILBER WILLINGTON",
      "dni":40781843,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MAMANI RICHAR",
      "dni":24707033,
      "ieId":""
    },
    {
      "nombres":"MOLINA MOLLAPASA YACKELINE",
      "dni":23932881,
      "ieId":""
    },
    {
      "nombres":"OJEDA CCOYLLULLI EDITH",
      "dni":41709047,
      "ieId":""
    },
    {
      "nombres":"OLIVERA HUAYLLARO CLAUDIO CARLOS",
      "dni":23905536,
      "ieId":""
    },
    {
      "nombres":"ORTEGA DIAZ MARY PATRICIA",
      "dni":10688499,
      "ieId":""
    },
    {
      "nombres":"QUISPE PONTECIL JAIME",
      "dni":25001929,
      "ieId":""
    },
    {
      "nombres":"ROJAS TUPFIA BERTHA",
      "dni":23828175,
      "ieId":""
    },
    {
      "nombres":"ARIAS CASTILLO MARTIN",
      "dni":24707488,
      "ieId":""
    },
    {
      "nombres":"CHARAJA CUTIPA ALODIA",
      "dni":1285383,
      "ieId":""
    },
    {
      "nombres":"CUADROS LLOQQUE JUANA RUTH",
      "dni":40840937,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ COA GARDENIA",
      "dni":40441956,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO SALCEDO RAQUEL TEOFILA",
      "dni":6809408,
      "ieId":""
    },
    {
      "nombres":"PACHECO PERALTA ANA MARIA",
      "dni":23978506,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALEMAN NATALIA",
      "dni":25001193,
      "ieId":""
    },
    {
      "nombres":"YUCRA RADO DAISY",
      "dni":23900051,
      "ieId":""
    },
    {
      "nombres":"APAZA LLAQUI GIOVANNA",
      "dni":44972033,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ASCARZA BELINDA",
      "dni":25004314,
      "ieId":""
    },
    {
      "nombres":"HUAMAN YABAR JESUS FRANKLIN",
      "dni":42469768,
      "ieId":""
    },
    {
      "nombres":"JOYAS CARPIO ROXANA",
      "dni":40685230,
      "ieId":""
    },
    {
      "nombres":"OJEDA MUÑOZ WALTER FLORENTINO",
      "dni":7537127,
      "ieId":""
    },
    {
      "nombres":"PANTANI ATAUSUPA PABLO",
      "dni":23980569,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCALLA MARLENY",
      "dni":41017555,
      "ieId":""
    },
    {
      "nombres":"SANKA AGUILAR SABINO",
      "dni":40410333,
      "ieId":""
    },
    {
      "nombres":"APAZA TTITO BASILIA",
      "dni":25753848,
      "ieId":""
    },
    {
      "nombres":"CACERES OLIVERA FRANCISCA ZORAIDA",
      "dni":23835012,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SUCNO CARLOS BERTHY",
      "dni":23990982,
      "ieId":""
    },
    {
      "nombres":"HUILLCA TORRES DELFINA",
      "dni":23859779,
      "ieId":""
    },
    {
      "nombres":"JAUJA SEQUEIROS ANA MARIA",
      "dni":23894207,
      "ieId":""
    },
    {
      "nombres":"KUYRO LIZARASO BENITO",
      "dni":23813957,
      "ieId":""
    },
    {
      "nombres":"LA TORRE HANCCO FRIDA VILMA",
      "dni":40398147,
      "ieId":""
    },
    {
      "nombres":"LINARES APARICIO C ADOLFO",
      "dni":24576519,
      "ieId":""
    },
    {
      "nombres":"OROSCO MISME GLADYS ERMELINDA",
      "dni":24363226,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ FLORES CAROL ELIZABETH",
      "dni":45187168,
      "ieId":""
    },
    {
      "nombres":"SINCHI VILLALBA BERTHA",
      "dni":23954511,
      "ieId":""
    },
    {
      "nombres":"VALCARCEL RIVERA CARLA SILVIA",
      "dni":24007090,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ ZARATE KARLA",
      "dni":42513917,
      "ieId":""
    },
    {
      "nombres":"VILCA QUISPE SIXTO",
      "dni":1284215,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA VERANO YEMIRA OLENKA",
      "dni":23949397,
      "ieId":""
    },
    {
      "nombres":"GOMEZ NUÑEZ GUMERCINDA",
      "dni":23901945,
      "ieId":""
    },
    {
      "nombres":"GUZMAN PEREZ JOSE MOISES",
      "dni":25304077,
      "ieId":""
    },
    {
      "nombres":"LOVATON BERMUDEZ GUIDO VICENTE",
      "dni":23896980,
      "ieId":""
    },
    {
      "nombres":"MONTOYA CACERES CORINA",
      "dni":23821559,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ CONDE DE PRADA MAGDA ELENA",
      "dni":23989028,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ VALENCIA LOGRIA",
      "dni":23830569,
      "ieId":""
    },
    {
      "nombres":"PALACIOS CHAVEZ MARITZA ELIZABETH",
      "dni":23843254,
      "ieId":""
    },
    {
      "nombres":"VELASCO PACHECO ZENOVIA",
      "dni":23871210,
      "ieId":""
    },
    {
      "nombres":"BACA DE VERA ESTELA",
      "dni":24003120,
      "ieId":""
    },
    {
      "nombres":"CASTRO PANCORBO ROSA SOLEDAD",
      "dni":23808269,
      "ieId":""
    },
    {
      "nombres":"CESPEDES FLOREZ VILMA AURORA",
      "dni":23873411,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ MEZA ABIGAIL",
      "dni":23810815,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ ARANIBAR FLOR DE MARIA",
      "dni":25300956,
      "ieId":""
    },
    {
      "nombres":"VALDEZ TEJEIRA JOSE",
      "dni":23873236,
      "ieId":""
    },
    {
      "nombres":"ZANS ALVAREZ NELY",
      "dni":23922477,
      "ieId":""
    },
    {
      "nombres":"CASTRO ORTIZ MARIA MAGDALENA",
      "dni":23924134,
      "ieId":""
    },
    {
      "nombres":"RADO DURAN SOFIA",
      "dni":23932365,
      "ieId":""
    },
    {
      "nombres":"VILLAGARCIA PILARES JUAN CLIMACO",
      "dni":23995081,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA AUCCA BENITO",
      "dni":23943787,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VALENCIA EVA",
      "dni":23982564,
      "ieId":""
    },
    {
      "nombres":"AÑAZCO LUCANA DANY YANETTE",
      "dni":29481689,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS AGUILAR PAULINO",
      "dni":23801048,
      "ieId":""
    },
    {
      "nombres":"GAMARRA PIZARRO YENI RUTH",
      "dni":23929127,
      "ieId":""
    },
    {
      "nombres":"LOPEZ QUISPE MELQUIADES",
      "dni":23838927,
      "ieId":""
    },
    {
      "nombres":"RONDAN AYBAR CARMELA VICENTINA",
      "dni":23885786,
      "ieId":""
    },
    {
      "nombres":"SANZ MONTESINOS TOMAS",
      "dni":23902692,
      "ieId":""
    },
    {
      "nombres":"TITO VIZCARRA ELVA LUZ",
      "dni":23945995,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO RADO RINA GREGORIA",
      "dni":23839089,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA GAMARRA ZOILA LIBIA",
      "dni":24460155,
      "ieId":""
    },
    {
      "nombres":"ARAGON DE CHAFLOQUE ROSA",
      "dni":23834804,
      "ieId":""
    },
    {
      "nombres":"ASCUE DE TITO SILVIA FLOR",
      "dni":23883970,
      "ieId":""
    },
    {
      "nombres":"CASTRO SALAS MARIA ELENA",
      "dni":23897720,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL MEDRANO FRYDA CELMIRA",
      "dni":23813332,
      "ieId":""
    },
    {
      "nombres":"FRANCO DE VALVERDE FLORA",
      "dni":24004581,
      "ieId":""
    },
    {
      "nombres":"MERCADO ARBIETO YDA RUTH",
      "dni":23889860,
      "ieId":""
    },
    {
      "nombres":"PEREZ CARREON SOLEDAD ERLINDA",
      "dni":25004320,
      "ieId":""
    },
    {
      "nombres":"PEREZ VIDAL ITALA",
      "dni":23843645,
      "ieId":""
    },
    {
      "nombres":"PINO ARIZMENDI PASCUALA",
      "dni":23837425,
      "ieId":""
    },
    {
      "nombres":"TURPO BELLIDO FLOR DE MARIA",
      "dni":44034424,
      "ieId":""
    },
    {
      "nombres":"ABARCA TORRES DE FLORES FIDELIA",
      "dni":23832636,
      "ieId":""
    },
    {
      "nombres":"ALMIRON HUILLCA DOLORES",
      "dni":23861798,
      "ieId":""
    },
    {
      "nombres":"ARIAS ALMARAZ RAUL PORFIRIO",
      "dni":23880854,
      "ieId":""
    },
    {
      "nombres":"CHALCO PERALTA NILDA MARGARITA",
      "dni":23903589,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ QUISPE CIRILO TEOFILO",
      "dni":23834054,
      "ieId":""
    },
    {
      "nombres":"LAZO FERREL JUAN CANCIO",
      "dni":23851328,
      "ieId":""
    },
    {
      "nombres":"LOAYZA PEÑA JESUS GIANNINA",
      "dni":23861885,
      "ieId":""
    },
    {
      "nombres":"QUISPE YUCA VICENTE",
      "dni":24283721,
      "ieId":""
    },
    {
      "nombres":"RECHARTE MATAMOROS RICHARD",
      "dni":24713765,
      "ieId":""
    },
    {
      "nombres":"SALAZAR MUÑIZ EFRAIN",
      "dni":23871846,
      "ieId":""
    },
    {
      "nombres":"TAPIA HUAMAN EDUARDO LUIS",
      "dni":42477504,
      "ieId":""
    },
    {
      "nombres":"TITO RAMOS YANET ZORAIDA",
      "dni":23814261,
      "ieId":""
    },
    {
      "nombres":"VERA CUSIYUPANQUI MARGARITA",
      "dni":23805729,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS FARFAN AQUILINO AQUILES",
      "dni":23880838,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA CERVANTES DOMINGO DAMASO",
      "dni":23854970,
      "ieId":""
    },
    {
      "nombres":"AQUISE DE MARROQUIN ITALA",
      "dni":23880296,
      "ieId":""
    },
    {
      "nombres":"ASALDE MAZA JAVIER",
      "dni":23864976,
      "ieId":""
    },
    {
      "nombres":"ASTOCONDOR OSORIO ANGIE LISETH",
      "dni":41405883,
      "ieId":""
    },
    {
      "nombres":"BACA CHAMORRO EDGAR",
      "dni":23951784,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS MONTERREY YOVANNA",
      "dni":10079128,
      "ieId":""
    },
    {
      "nombres":"BECERRA DE FERNANDEZ JANETTE CRISTINA",
      "dni":23897392,
      "ieId":""
    },
    {
      "nombres":"CAMERO NAVARRO IMELDA",
      "dni":23993902,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ASCENCIO SILVIA SILVINIA",
      "dni":9650998,
      "ieId":""
    },
    {
      "nombres":"CASTRO CUBA EDGAR LEONCIO",
      "dni":23828200,
      "ieId":""
    },
    {
      "nombres":"CELIS GOMEZ MARIA DEL CARMEN",
      "dni":23986036,
      "ieId":""
    },
    {
      "nombres":"CHALLCO PARRA EULOGIO",
      "dni":23886563,
      "ieId":""
    },
    {
      "nombres":"CORNEJO VARGAS JOSEFINA",
      "dni":23879789,
      "ieId":""
    },
    {
      "nombres":"DEL POZO CRUZ HELMER",
      "dni":25321090,
      "ieId":""
    },
    {
      "nombres":"DELGADO CHAVEZ ROSA MERCEDES",
      "dni":23917864,
      "ieId":""
    },
    {
      "nombres":"GARCIA FERNANDEZ VILMA",
      "dni":23819668,
      "ieId":""
    },
    {
      "nombres":"HUAIHUA PAIVA VALERIANA",
      "dni":24661234,
      "ieId":""
    },
    {
      "nombres":"LUNA CASTRO JUNIA",
      "dni":6202508,
      "ieId":""
    },
    {
      "nombres":"NAVARRO RIVAS JAKELYN TRINIDAD",
      "dni":41479298,
      "ieId":""
    },
    {
      "nombres":"OBLITAS HUERTAS ELENA",
      "dni":10206949,
      "ieId":""
    },
    {
      "nombres":"RIOS OCSA VISITACION ISABEL",
      "dni":23880024,
      "ieId":""
    },
    {
      "nombres":"SALAZAR VALENZUELA MARUCIA VIRGINIA",
      "dni":23876096,
      "ieId":""
    },
    {
      "nombres":"TAIPE MENDOZA MARISOL MARLENE",
      "dni":23995366,
      "ieId":""
    },
    {
      "nombres":"TORBISCO MIRANDA MARIA OLIMPIA",
      "dni":10637633,
      "ieId":""
    },
    {
      "nombres":"TUEROS LOAYZA MARIANELA",
      "dni":23925971,
      "ieId":""
    },
    {
      "nombres":"VALENZA LEON GABRIELA",
      "dni":23947046,
      "ieId":""
    },
    {
      "nombres":"VALLENAS VALLENAS ANA KARINA",
      "dni":25001883,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ ZARATE KARINA",
      "dni":23979506,
      "ieId":""
    },
    {
      "nombres":"VILLAGARCIA RODRIGUEZ PATRICIA TRINIDAD",
      "dni":23828471,
      "ieId":""
    },
    {
      "nombres":"YEPEZ CASTILLO YENNY YANET",
      "dni":23979864,
      "ieId":""
    },
    {
      "nombres":"ZAPATA MERCADO WILLIAM",
      "dni":23929428,
      "ieId":""
    },
    {
      "nombres":"CABRERA YUCRA INOCENCIA",
      "dni":23840080,
      "ieId":""
    },
    {
      "nombres":"BAYRO VENERO MARIA DEL ROSARIO",
      "dni":23859731,
      "ieId":""
    },
    {
      "nombres":"TIMPO ESCOBEDO NORMA LISBETH",
      "dni":23937258,
      "ieId":""
    },
    {
      "nombres":"ARMASA CABRERA MARIA DEL CARMEN",
      "dni":23853493,
      "ieId":""
    },
    {
      "nombres":"BACA CALLAPINA LUZ RAQUEL",
      "dni":23903653,
      "ieId":""
    },
    {
      "nombres":"CORIMANYA LIMPE ELIZABETH",
      "dni":23948498,
      "ieId":""
    },
    {
      "nombres":"FARFAN VDA DE FARFAN ZORAIDA",
      "dni":23870673,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ CASTRO DE ASTET MARIA NELLY",
      "dni":24980361,
      "ieId":""
    },
    {
      "nombres":"MURILLO ORMACHEA LUIS EDILBERTO",
      "dni":23801114,
      "ieId":""
    },
    {
      "nombres":"ACOSTA COLQUE MARIA DEL CARMEN",
      "dni":45456532,
      "ieId":""
    },
    {
      "nombres":"ARAUJO DE ZEGARRA CARMEN PATRICIA",
      "dni":23829396,
      "ieId":""
    },
    {
      "nombres":"CALLALLI VILLAFUERTE INES",
      "dni":23819386,
      "ieId":""
    },
    {
      "nombres":"FLORES FLORES LOURDES YULIANA",
      "dni":484946,
      "ieId":""
    },
    {
      "nombres":"MENACHO DURAN ESTHER JUDITH",
      "dni":23857240,
      "ieId":""
    },
    {
      "nombres":"RAYME CUBA DIANA",
      "dni":23949599,
      "ieId":""
    },
    {
      "nombres":"CUNZA ESCALANTE MATILDE ANGELICA",
      "dni":23805579,
      "ieId":""
    },
    {
      "nombres":"PORCEL ROJAS LIZETH",
      "dni":23975657,
      "ieId":""
    },
    {
      "nombres":"DE LA CRUZ BARRA ISABEL JUSTINA",
      "dni":23955649,
      "ieId":""
    },
    {
      "nombres":"OLAZAVAL LAZARTE ZOILA FLOR DEL CARMEN",
      "dni":23850694,
      "ieId":""
    },
    {
      "nombres":"QUISPE BACA SEGUNDA",
      "dni":23882257,
      "ieId":""
    },
    {
      "nombres":"VIVERO GUZMAN MARIA VICTORIA",
      "dni":23839896,
      "ieId":""
    },
    {
      "nombres":"CUSICUNA QUISPE MARITZA",
      "dni":23861494,
      "ieId":""
    },
    {
      "nombres":"LLAMACPONCCA HUAMAN MARCELINA",
      "dni":23804149,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ GARCIA TERESITA DE JESUS",
      "dni":23994904,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA GUILLEN MARINA",
      "dni":23950397,
      "ieId":""
    },
    {
      "nombres":"BEJAR VILCA CELINDA",
      "dni":23816988,
      "ieId":""
    },
    {
      "nombres":"CRUZ PINARES LUZ MARINA TERESA",
      "dni":5062253,
      "ieId":""
    },
    {
      "nombres":"VARGAS ENRIQUEZ PATRICIA",
      "dni":23934123,
      "ieId":""
    },
    {
      "nombres":"BACA VARGAS ANA",
      "dni":23882829,
      "ieId":""
    },
    {
      "nombres":"FLOREZ DELGADO MAGDA ELIZABETH",
      "dni":23884453,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ GOMEZ NILY",
      "dni":44279154,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ ARRIAGA RUTH",
      "dni":23832948,
      "ieId":""
    },
    {
      "nombres":"MERCADO MENDOZA PATRICIA ELVIA",
      "dni":23924124,
      "ieId":""
    },
    {
      "nombres":"MONTOYA VARGAS CARMIN CHRYSTELL",
      "dni":23998508,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES ARIZABAL ISABEL DOMITILA",
      "dni":23849136,
      "ieId":""
    },
    {
      "nombres":"CARRASCO CANDIA MARIO",
      "dni":23806975,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ LUNA ADRIANCEN",
      "dni":23873461,
      "ieId":""
    },
    {
      "nombres":"MONZON CARRION WALTER",
      "dni":31006977,
      "ieId":""
    },
    {
      "nombres":"TTUPA LLAVILLA JUAN",
      "dni":23909610,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE CCAHUATA ZONIA GABINA",
      "dni":24704092,
      "ieId":""
    },
    {
      "nombres":"PAEZ MONTESINOS YESICA",
      "dni":23944661,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ HEREDIA FLOR LUCIA",
      "dni":23853848,
      "ieId":""
    },
    {
      "nombres":"VARGAS ENRIQUEZ JUANA",
      "dni":23908267,
      "ieId":""
    },
    {
      "nombres":"ARIZABAL ARRIAGA ANA MARIA",
      "dni":23860834,
      "ieId":""
    },
    {
      "nombres":"ATENCIO VILLEGAS ROYSI",
      "dni":670429,
      "ieId":""
    },
    {
      "nombres":"BARRIOS FERRO IRMA",
      "dni":24487392,
      "ieId":""
    },
    {
      "nombres":"BEDIA SINGONA MARIA MERCEDES",
      "dni":23929773,
      "ieId":""
    },
    {
      "nombres":"CALLAÑAUPA MESCO NANCY",
      "dni":7764698,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA VILCAPASA NADHYR",
      "dni":45479159,
      "ieId":""
    },
    {
      "nombres":"CONDO SALAS DELIA",
      "dni":24582699,
      "ieId":""
    },
    {
      "nombres":"CORONADO WAGNER NINA TANIA",
      "dni":24888781,
      "ieId":""
    },
    {
      "nombres":"DELGADO RODRIGUEZ ELENINHA",
      "dni":23949218,
      "ieId":""
    },
    {
      "nombres":"DURAND BLANCO EDITH",
      "dni":23944231,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ MOLINA VIOLETA",
      "dni":24808569,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HUARANCCA NORBERTO",
      "dni":23855244,
      "ieId":""
    },
    {
      "nombres":"HALLASI QUISPE WILBER",
      "dni":24704095,
      "ieId":""
    },
    {
      "nombres":"HUAMAN BRAVO JULIA",
      "dni":25326046,
      "ieId":""
    },
    {
      "nombres":"OBREGON ORUE MIGUEL ABELARDO",
      "dni":23902135,
      "ieId":""
    },
    {
      "nombres":"OLIVERA JIMENEZ BERTA",
      "dni":23902136,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VELASQUEZ MIRIAM",
      "dni":25002334,
      "ieId":""
    },
    {
      "nombres":"PILARES SAJI JESSICA",
      "dni":24001943,
      "ieId":""
    },
    {
      "nombres":"PRADO CORDOVA JANET",
      "dni":23990573,
      "ieId":""
    },
    {
      "nombres":"TTUPA LLAVILLA CESAR",
      "dni":40209505,
      "ieId":""
    },
    {
      "nombres":"VENERO JIMENEZ ASTRID KARINA",
      "dni":23859073,
      "ieId":""
    },
    {
      "nombres":"VILCAHUAMAN LUNA GABINA",
      "dni":23953427,
      "ieId":""
    },
    {
      "nombres":"ACURIO ZARATE MARIA LOURDES",
      "dni":23818261,
      "ieId":""
    },
    {
      "nombres":"ARAOZ TARCO LIZBETH",
      "dni":24004813,
      "ieId":""
    },
    {
      "nombres":"BUSTINCIO MENDOZA NELLY MAGDA",
      "dni":25012228,
      "ieId":""
    },
    {
      "nombres":"CHAMPI SAENZ ALICIA MURIEL",
      "dni":43589142,
      "ieId":""
    },
    {
      "nombres":"CONDO DELGADO MONICA EDITH",
      "dni":43157416,
      "ieId":""
    },
    {
      "nombres":"GAMARRA GUZMAN VERONIKA MILAGROS",
      "dni":23953987,
      "ieId":""
    },
    {
      "nombres":"MORA HINOSTROZA LOURDES",
      "dni":23914619,
      "ieId":""
    },
    {
      "nombres":"NAVARRO MEDRANO MIRIAM LILIANA",
      "dni":41571246,
      "ieId":""
    },
    {
      "nombres":"ROJAS BARCENA JUANA MARIA DEL SOCORRO",
      "dni":23804133,
      "ieId":""
    },
    {
      "nombres":"ALLENDE VERGARA SATURNINA",
      "dni":23910009,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VALENCIA JORGE LUIS",
      "dni":25134579,
      "ieId":""
    },
    {
      "nombres":"BORDA HUAMAN VIVIANA MARIA",
      "dni":24367279,
      "ieId":""
    },
    {
      "nombres":"CALANCHI SIHUA MATILDE",
      "dni":24381765,
      "ieId":""
    },
    {
      "nombres":"CALDERON FUENTES ANGELICA",
      "dni":24702755,
      "ieId":""
    },
    {
      "nombres":"CARRILLO SEGOVIA RUTH GIULIANA",
      "dni":31041472,
      "ieId":""
    },
    {
      "nombres":"CCORI HUAMAN JUAN",
      "dni":23962535,
      "ieId":""
    },
    {
      "nombres":"GUEVARA CATALAN DE PANT ELIZABETH MARCELA",
      "dni":4810562,
      "ieId":""
    },
    {
      "nombres":"PEÑA MONTESINOS LOURDES CLOTILDE",
      "dni":31424525,
      "ieId":""
    },
    {
      "nombres":"RIVERA MERCADO FLOR DE MARIA",
      "dni":23995368,
      "ieId":""
    },
    {
      "nombres":"ROMERO CASTILLO JOSE RENAN",
      "dni":23983874,
      "ieId":""
    },
    {
      "nombres":"SICLLA HUARANCCA MAXIMILIANA",
      "dni":23905853,
      "ieId":""
    },
    {
      "nombres":"TORRES NUÑEZ MARIA ELENA",
      "dni":23949997,
      "ieId":""
    },
    {
      "nombres":"TUNQUE SIKOS ETELVINA",
      "dni":23924581,
      "ieId":""
    },
    {
      "nombres":"VIZARRETA LIMACHI MARLENNE",
      "dni":23853754,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA SOLIS ROCIO HERMINIA",
      "dni":42485709,
      "ieId":""
    },
    {
      "nombres":"ATAPAUCAR GUEVARA HERMELINDA",
      "dni":23835268,
      "ieId":""
    },
    {
      "nombres":"DIAZ TICONA SELMA",
      "dni":23809191,
      "ieId":""
    },
    {
      "nombres":"HUILCA COSIO RUBEN",
      "dni":24696067,
      "ieId":""
    },
    {
      "nombres":"PEREZ SARMIENTO FAVIERNA",
      "dni":24465308,
      "ieId":""
    },
    {
      "nombres":"SIHUA CCAHUANA GREGORIA",
      "dni":25123103,
      "ieId":""
    },
    {
      "nombres":"PUMA MALDONADO FERMIN",
      "dni":24682869,
      "ieId":""
    },
    {
      "nombres":"TORRES NUÑEZ ISABEL",
      "dni":41538092,
      "ieId":""
    },
    {
      "nombres":"ARENAS VILLASANTE MARTHA",
      "dni":23855776,
      "ieId":""
    },
    {
      "nombres":"CANTERO VILLASANTE MARIA TRINIDAD",
      "dni":23994894,
      "ieId":""
    },
    {
      "nombres":"CARDENAS PORTILLO MARIO",
      "dni":23959023,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CASTILLO ALEJO",
      "dni":25187489,
      "ieId":""
    },
    {
      "nombres":"FLORES ZAPATA VILMA",
      "dni":23941008,
      "ieId":""
    },
    {
      "nombres":"GARRAFA LOBATON JOSAFAT MARTIN",
      "dni":43425005,
      "ieId":""
    },
    {
      "nombres":"HUILLCA CURSE TRINIDAD MONICA",
      "dni":24679082,
      "ieId":""
    },
    {
      "nombres":"ORTIZ BAEZ IDA SOLEDAD",
      "dni":23809051,
      "ieId":""
    },
    {
      "nombres":"PACHECO YAHUIRA ALBERTO",
      "dni":23900548,
      "ieId":""
    },
    {
      "nombres":"RIMACHI CALLAPIÑA KARINA JULIETA",
      "dni":23986132,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ DE TELLO ELVIRA",
      "dni":23818417,
      "ieId":""
    },
    {
      "nombres":"TRUYENQUE ARESTEGUI CARMEN",
      "dni":31173028,
      "ieId":""
    },
    {
      "nombres":"VALENCIA CENTENO JANET ANDREA",
      "dni":23870169,
      "ieId":""
    },
    {
      "nombres":"VARGAS VILLA ZONIA",
      "dni":23812363,
      "ieId":""
    },
    {
      "nombres":"VILLA SAIRE NATIVIDAD",
      "dni":23992245,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ HERMOZA ROSA LUZ",
      "dni":23920879,
      "ieId":""
    },
    {
      "nombres":"APAZA CALLAÑAUPA TEOFILA MARIA",
      "dni":23987945,
      "ieId":""
    },
    {
      "nombres":"BACA MEJIA LISBETH",
      "dni":25326319,
      "ieId":""
    },
    {
      "nombres":"CAHUATA MAMANI WILFREDA YSABEL",
      "dni":29553614,
      "ieId":""
    },
    {
      "nombres":"CUEVA QUISPE GERMAN",
      "dni":23992247,
      "ieId":""
    },
    {
      "nombres":"LAURA PARHUAYO ALFREDO",
      "dni":41833801,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR MORENO ROBERTO",
      "dni":40392316,
      "ieId":""
    },
    {
      "nombres":"VALENCIA LIMACHE LIDY",
      "dni":40270896,
      "ieId":""
    },
    {
      "nombres":"AYALA CHACMANI ELSA",
      "dni":23856746,
      "ieId":""
    },
    {
      "nombres":"BARRA ARAUJO MILUSKA",
      "dni":23881672,
      "ieId":""
    },
    {
      "nombres":"BEJAR CONDO NORMA",
      "dni":25213661,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ CUSIPAUCCAR ASUNTA",
      "dni":23911542,
      "ieId":""
    },
    {
      "nombres":"MORALES ANCON LUZ NELIDA",
      "dni":31000385,
      "ieId":""
    },
    {
      "nombres":"AGUERO MEDINA LUISA",
      "dni":23869822,
      "ieId":""
    },
    {
      "nombres":"ALZAMORA QUISPE ANDRES",
      "dni":23932783,
      "ieId":""
    },
    {
      "nombres":"ARAGON VILLAMARIN CESAR FAUSTO",
      "dni":24680344,
      "ieId":""
    },
    {
      "nombres":"AREVALO QUIJANO HERLINDA",
      "dni":31174303,
      "ieId":""
    },
    {
      "nombres":"BARAZORDA SOTOMAYOR ANTONIO",
      "dni":31003601,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS SOTELO DELFIN",
      "dni":23815664,
      "ieId":""
    },
    {
      "nombres":"CANDIA CCOTO NANCY",
      "dni":23859906,
      "ieId":""
    },
    {
      "nombres":"CARDENAS CALDERON YOVANA",
      "dni":40767069,
      "ieId":""
    },
    {
      "nombres":"CASTILLO ARENAZA MARIA DEL PILAR",
      "dni":23878551,
      "ieId":""
    },
    {
      "nombres":"CIPRIAN COLLANTES ROXANA",
      "dni":23992453,
      "ieId":""
    },
    {
      "nombres":"CUELLAR DELGADO CARMEN INDIRA",
      "dni":44012848,
      "ieId":""
    },
    {
      "nombres":"ECHEVARRIA BERNALES SOLEDAD",
      "dni":23910355,
      "ieId":""
    },
    {
      "nombres":"FARFAN ALEGRIA JOSEFINA",
      "dni":24282076,
      "ieId":""
    },
    {
      "nombres":"FERRO SERRANO BERTHA",
      "dni":23849906,
      "ieId":""
    },
    {
      "nombres":"GRAJEDA PEÑA RUTH MIRIAM",
      "dni":25012305,
      "ieId":""
    },
    {
      "nombres":"LOPEZ ARAGON SIXTO MARCIAL",
      "dni":23996297,
      "ieId":""
    },
    {
      "nombres":"ORTIZ CARDENAS MARIA NIVIA",
      "dni":23845457,
      "ieId":""
    },
    {
      "nombres":"PEÑA PEÑA DE ROJAS MARIA CONCEPCION",
      "dni":25000259,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA VILLAR HECTOR",
      "dni":23886170,
      "ieId":""
    },
    {
      "nombres":"QUISPE TORRES ISMAEL DAVID",
      "dni":2375085,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES CARDENAS CESAR ARMANDO",
      "dni":25326078,
      "ieId":""
    },
    {
      "nombres":"ROZAS HUACHO GOYA",
      "dni":23857274,
      "ieId":""
    },
    {
      "nombres":"SALAZAR PERALTA DULA",
      "dni":23862959,
      "ieId":""
    },
    {
      "nombres":"SICLLA BACA RICARDINA",
      "dni":23856217,
      "ieId":""
    },
    {
      "nombres":"TARAZONA EVANGELISTA ALICIA ESTHER",
      "dni":2391132,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO BENEGAS MARIA CRISTINA",
      "dni":23808211,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA DE MUJICA FLOR MARINA",
      "dni":23808819,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA SERRANO GLADIS",
      "dni":31522223,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO MATTOS FAUSTINA LIDIA",
      "dni":31009396,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO MATTOS FAUSTINA LIDIA",
      "dni":31009396,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE HERRERA MILAGROS ASUNCION",
      "dni":23979023,
      "ieId":""
    },
    {
      "nombres":"APAZA HURTADO LISBETH MARISELA",
      "dni":42573450,
      "ieId":""
    },
    {
      "nombres":"AVALOS FERNANDEZ NAZARIA",
      "dni":23811988,
      "ieId":""
    },
    {
      "nombres":"BECERRA MONTOYA YONY",
      "dni":23893878,
      "ieId":""
    },
    {
      "nombres":"BEJAR CHAUCA SOLEDAD",
      "dni":40095802,
      "ieId":""
    },
    {
      "nombres":"BLANCO LUCANA DANITZA ERIKA",
      "dni":23945449,
      "ieId":""
    },
    {
      "nombres":"BLANCO SOTO LIDIA GENARA",
      "dni":25303011,
      "ieId":""
    },
    {
      "nombres":"CABALLERO LEVA MARGOT",
      "dni":23844909,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CAHUANA VICENTE",
      "dni":23875856,
      "ieId":""
    },
    {
      "nombres":"CARDENAS MAMANI CARMEN ROSA",
      "dni":25001480,
      "ieId":""
    },
    {
      "nombres":"CCARHUARUPAY QUISPE ROSALIA",
      "dni":25182403,
      "ieId":""
    },
    {
      "nombres":"CHALLCO OVIEDO JUANA",
      "dni":25303956,
      "ieId":""
    },
    {
      "nombres":"CIFUENTES CAZORLA CECILIA",
      "dni":23954708,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO GAMARRA ROMULO",
      "dni":23959588,
      "ieId":""
    },
    {
      "nombres":"DOLMOS NAVARRETE MILENKA JAZMIN",
      "dni":23950196,
      "ieId":""
    },
    {
      "nombres":"DURAN CACERES RODOLFO EDILBERTO",
      "dni":1491303,
      "ieId":""
    },
    {
      "nombres":"ESTRADA HEREDIA NELLY CEBASTIANA",
      "dni":23912407,
      "ieId":""
    },
    {
      "nombres":"FLORES SINCHI ISABEL",
      "dni":23939446,
      "ieId":""
    },
    {
      "nombres":"GALINDO ORTEGA SAUL",
      "dni":1321969,
      "ieId":""
    },
    {
      "nombres":"HERMOZA RODRIGUEZ MARIA EUGENIA",
      "dni":23901628,
      "ieId":""
    },
    {
      "nombres":"HILARES CONDORI LIBERATA",
      "dni":23984963,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA PAIVA DENNIS LEONCIO",
      "dni":24701766,
      "ieId":""
    },
    {
      "nombres":"MENA PUMALLOCLLA ROSA",
      "dni":23870499,
      "ieId":""
    },
    {
      "nombres":"MENDOZA VALENCIA NANCY",
      "dni":23962899,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ BOLIVAR FLORENCIO",
      "dni":23962898,
      "ieId":""
    },
    {
      "nombres":"PEÑA VILLAFUERTE ESTHER",
      "dni":23870174,
      "ieId":""
    },
    {
      "nombres":"POBLETE ZEGARRA DELIA ITALA",
      "dni":23809968,
      "ieId":""
    },
    {
      "nombres":"QUILLAS CUEVAS BERTHA",
      "dni":41376778,
      "ieId":""
    },
    {
      "nombres":"QUINTANA ORTIZ TEODOSIA",
      "dni":23806412,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ BLANCO JOSE",
      "dni":23804833,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ PAREDES ZAIDA",
      "dni":23928085,
      "ieId":""
    },
    {
      "nombres":"SALAS DE ZEGARRA EDDA LUCRECIA",
      "dni":23870964,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ GIBAJA MERCEDES",
      "dni":25315559,
      "ieId":""
    },
    {
      "nombres":"SUCÑER PEREZ DELIA LUZ",
      "dni":31042068,
      "ieId":""
    },
    {
      "nombres":"TACUSI CHUQUITAPA CORINA",
      "dni":24698482,
      "ieId":""
    },
    {
      "nombres":"UMERES HUAMAN NANDO",
      "dni":25315154,
      "ieId":""
    },
    {
      "nombres":"VALENCIA CASTRO LEONEL",
      "dni":31422194,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA SERRANO DINA",
      "dni":23858146,
      "ieId":""
    },
    {
      "nombres":"YUPAYCCANA USCA HAYDEE",
      "dni":23935588,
      "ieId":""
    },
    {
      "nombres":"AGUILAR MARTINEZ LUIS ALBERTO",
      "dni":25320324,
      "ieId":""
    },
    {
      "nombres":"AYMACHOQUE PILARES MARIA LUISA",
      "dni":23961971,
      "ieId":""
    },
    {
      "nombres":"AYTE HUALLPARIMACHI GUIDO PIO",
      "dni":23942402,
      "ieId":""
    },
    {
      "nombres":"BUENO BARAZORDA GLORIA",
      "dni":23962958,
      "ieId":""
    },
    {
      "nombres":"CACERES CERECEDA DORIS HILDA",
      "dni":23915678,
      "ieId":""
    },
    {
      "nombres":"CALDERON CONCHA VILMA",
      "dni":23961017,
      "ieId":""
    },
    {
      "nombres":"CARRASCO VALDEZ DANIEL ROLANDO",
      "dni":23870890,
      "ieId":""
    },
    {
      "nombres":"CARRION PALLARDEL WILFREDO FELICIANO",
      "dni":23987532,
      "ieId":""
    },
    {
      "nombres":"CAVERO AQUISE JAVIER JHASMANI",
      "dni":42056974,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ LOAIZA LUCIA",
      "dni":24471098,
      "ieId":""
    },
    {
      "nombres":"COIRO VARGAS LUCILA",
      "dni":40470321,
      "ieId":""
    },
    {
      "nombres":"CONDORI LUZA JESUSA",
      "dni":23850096,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL CABALLERO YOVANA",
      "dni":24704474,
      "ieId":""
    },
    {
      "nombres":"FLOREZ VALDEZ MARIA SOLEDAD",
      "dni":24672646,
      "ieId":""
    },
    {
      "nombres":"FUENTES PELAEZ ELIANA PATRICIA",
      "dni":23975019,
      "ieId":""
    },
    {
      "nombres":"GAMARRA QUISPE GERMAN",
      "dni":24964629,
      "ieId":""
    },
    {
      "nombres":"GUEVARA CHUNCHO CLAUDIO",
      "dni":23901683,
      "ieId":""
    },
    {
      "nombres":"GUZMAN DELGADO BEATRIZ",
      "dni":23905161,
      "ieId":""
    },
    {
      "nombres":"GUZMAN FIGUEROA BERTHA",
      "dni":23912220,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DAMIAN YANET",
      "dni":24991975,
      "ieId":""
    },
    {
      "nombres":"JAYOS CRUZ OLGA",
      "dni":24981376,
      "ieId":""
    },
    {
      "nombres":"MAROCHO ORE GLADYS",
      "dni":23929019,
      "ieId":""
    },
    {
      "nombres":"MELENDREZ MEZA MARIA",
      "dni":23872892,
      "ieId":""
    },
    {
      "nombres":"MINAYA ALVAREZ ORLANDO VICENTE",
      "dni":23908512,
      "ieId":""
    },
    {
      "nombres":"PILLPINTO ESPINOZA MARIA ELENA",
      "dni":23862823,
      "ieId":""
    },
    {
      "nombres":"QUISPE FERNANDEZ LUZ MARINA",
      "dni":24671902,
      "ieId":""
    },
    {
      "nombres":"QUISPE GUEVARA ELENA",
      "dni":23814587,
      "ieId":""
    },
    {
      "nombres":"RIOS RIOS ELIZABETH SOBEIDA",
      "dni":23870178,
      "ieId":""
    },
    {
      "nombres":"RIVAS CARDENAS LEONOR",
      "dni":23846876,
      "ieId":""
    },
    {
      "nombres":"ROBLES AGUIRRE SUSANA DORIS",
      "dni":23825132,
      "ieId":""
    },
    {
      "nombres":"TINTAYA MAMANI ISABEL",
      "dni":2290316,
      "ieId":""
    },
    {
      "nombres":"TORRES GARAY MARGA",
      "dni":23991933,
      "ieId":""
    },
    {
      "nombres":"TTITO RODRIGUEZ ASUNTA ALIPIA",
      "dni":25308726,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA MOLINA MARISOL",
      "dni":23901812,
      "ieId":""
    },
    {
      "nombres":"VALER ABARCA JUAN",
      "dni":23936770,
      "ieId":""
    },
    {
      "nombres":"VELARDE HUAMAN VICTORIA",
      "dni":23840050,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ HUMPIRE CESAR",
      "dni":40064186,
      "ieId":""
    },
    {
      "nombres":"VELAZCO DEL ALAMO ELVA AURORA",
      "dni":23875557,
      "ieId":""
    },
    {
      "nombres":"VERA FARFAN ANA MARIA",
      "dni":23831681,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS ALMIRON MARITSA",
      "dni":23924883,
      "ieId":""
    },
    {
      "nombres":"YABAR VILLA CARMEN ROSA",
      "dni":23948056,
      "ieId":""
    },
    {
      "nombres":"YABARRENA TARCO JULIO",
      "dni":23804480,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA ROJAS ELISABETH",
      "dni":23947703,
      "ieId":""
    },
    {
      "nombres":"ANGULO MELENDEZ JOSE MANUEL",
      "dni":23886058,
      "ieId":""
    },
    {
      "nombres":"AQUINO HANCCO DALILA",
      "dni":41597345,
      "ieId":""
    },
    {
      "nombres":"ASTETE CARBAJAL ANA MARIA",
      "dni":23821563,
      "ieId":""
    },
    {
      "nombres":"BARRERA TORRES JUANA RUTH",
      "dni":23938938,
      "ieId":""
    },
    {
      "nombres":"BELTRAN ALOSILLA ROSA FRINE",
      "dni":23843568,
      "ieId":""
    },
    {
      "nombres":"BOZA HUAMANI NERI",
      "dni":23980651,
      "ieId":""
    },
    {
      "nombres":"CARREÑO SANTOS BERTHA",
      "dni":25302523,
      "ieId":""
    },
    {
      "nombres":"CASANOVA CONCHA DE PORT TERESA JESUS",
      "dni":23830383,
      "ieId":""
    },
    {
      "nombres":"DEL PEZO BENAVIDES MARIA ROSARIO",
      "dni":23916789,
      "ieId":""
    },
    {
      "nombres":"DIAZ HUILLCA JUANA",
      "dni":23997734,
      "ieId":""
    },
    {
      "nombres":"GUISADO CUELLAR MARIA CRISTINA",
      "dni":23963680,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CHACON IGNACIA",
      "dni":23913813,
      "ieId":""
    },
    {
      "nombres":"HERMOZA PONCE BEKCHI MILAGROS",
      "dni":24487927,
      "ieId":""
    },
    {
      "nombres":"JARA SANCHEZ VILMA",
      "dni":25326250,
      "ieId":""
    },
    {
      "nombres":"LOAIZA CONZA GREGORIA",
      "dni":23877657,
      "ieId":""
    },
    {
      "nombres":"MORALES ORTIZ VIDAL",
      "dni":23905169,
      "ieId":""
    },
    {
      "nombres":"OCHOA TAPIA TERESA",
      "dni":23875799,
      "ieId":""
    },
    {
      "nombres":"ORE LEIVA VIRGINIA",
      "dni":23802388,
      "ieId":""
    },
    {
      "nombres":"PALOMINO BULEJE TERESA NANCI",
      "dni":23963213,
      "ieId":""
    },
    {
      "nombres":"PILARES CRUZADO JANET OLIMPIA",
      "dni":23943808,
      "ieId":""
    },
    {
      "nombres":"PUMA CHILO GREGORIO",
      "dni":25140082,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ ORTEGA MARIA LUZ",
      "dni":23977425,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ SANCHEZ LIVIA",
      "dni":23995796,
      "ieId":""
    },
    {
      "nombres":"ROJAS TORRES GLADYS MARGARITA",
      "dni":23948605,
      "ieId":""
    },
    {
      "nombres":"SALAZAR LEZAMA JUANA",
      "dni":23806462,
      "ieId":""
    },
    {
      "nombres":"SAYRITUPA CUSIHUAMAN MATILDE",
      "dni":23975812,
      "ieId":""
    },
    {
      "nombres":"TISOC PUMA MARIBEL",
      "dni":23893283,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA VALDIVIA MARIA ALEJANDRINA",
      "dni":23987593,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO ALONSO LOURDES GABINA",
      "dni":23931163,
      "ieId":""
    },
    {
      "nombres":"ARANA LEON LEONOR",
      "dni":23958124,
      "ieId":""
    },
    {
      "nombres":"BELTRAN GUTIERREZ MYRIAN GISELA",
      "dni":40315088,
      "ieId":""
    },
    {
      "nombres":"CALLE RODRIGUEZ LUISA BETTY",
      "dni":23979789,
      "ieId":""
    },
    {
      "nombres":"CAMACHO ESPINOZA YOVANA",
      "dni":23958193,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS APARICIO ANALI PAMELA",
      "dni":43378310,
      "ieId":""
    },
    {
      "nombres":"CORONEL MOLINA LUZ MARINA",
      "dni":23937943,
      "ieId":""
    },
    {
      "nombres":"DELGADO LOAIZA GLICERIO",
      "dni":24471003,
      "ieId":""
    },
    {
      "nombres":"DELGADO RODRIGUEZ MIRTHA",
      "dni":23904552,
      "ieId":""
    },
    {
      "nombres":"FLORES HUILLCA NORKA",
      "dni":23903240,
      "ieId":""
    },
    {
      "nombres":"HUAMANVILCA ARIAS BETTY",
      "dni":23949215,
      "ieId":""
    },
    {
      "nombres":"HUANCACHOQUE APARICIO RONALD",
      "dni":24680306,
      "ieId":""
    },
    {
      "nombres":"HUANUCO DELGADO ANA JULIA",
      "dni":23865450,
      "ieId":""
    },
    {
      "nombres":"LIRA HALLER ERIKA",
      "dni":23948998,
      "ieId":""
    },
    {
      "nombres":"LUJAN RIVERA ROCIO",
      "dni":23921893,
      "ieId":""
    },
    {
      "nombres":"MEDINA MARTINEZ GLADYS",
      "dni":23860620,
      "ieId":""
    },
    {
      "nombres":"MEJIA LETONA FANY NOLA",
      "dni":23971745,
      "ieId":""
    },
    {
      "nombres":"MONTERROSO SAIRE LOURDES CLAUDIA",
      "dni":23926657,
      "ieId":""
    },
    {
      "nombres":"MUJICA PACHECO LIBERTAD",
      "dni":23823329,
      "ieId":""
    },
    {
      "nombres":"QUIRITA BEJAR LIDIA JESUS",
      "dni":23995696,
      "ieId":""
    },
    {
      "nombres":"QUISPE PALACIOS JAVIER MARCELO",
      "dni":23870602,
      "ieId":""
    },
    {
      "nombres":"RIVERA MERCADO ROSARIO",
      "dni":23930114,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS CUEVA CAROLA LIZ",
      "dni":24006206,
      "ieId":""
    },
    {
      "nombres":"UMERES BELLIDO NARDY YUVIZSA",
      "dni":23964693,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE CACERES FANNY LUCIA",
      "dni":23894185,
      "ieId":""
    },
    {
      "nombres":"ZARATE FIGUEROA ELIZABETH",
      "dni":23838954,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CHAVEZ WILBERT GUALBERTO",
      "dni":25304510,
      "ieId":""
    },
    {
      "nombres":"AMPUERO SANCHEZ BERNARDINO",
      "dni":23869552,
      "ieId":""
    },
    {
      "nombres":"CHURA SERRANO EDUVIGES GALA",
      "dni":25009444,
      "ieId":""
    },
    {
      "nombres":"CONCHA ABARCA JOHN",
      "dni":40448670,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MISME CARLOTA",
      "dni":23858411,
      "ieId":""
    },
    {
      "nombres":"MEZA MARISCAL CARMEN",
      "dni":25321570,
      "ieId":""
    },
    {
      "nombres":"MOLINA MIRANDA EDITH",
      "dni":24486356,
      "ieId":""
    },
    {
      "nombres":"NOA QUISPE JULIA MARCELINA",
      "dni":23899789,
      "ieId":""
    },
    {
      "nombres":"QUENTA ESCALANTE LUZ MARINA",
      "dni":23974845,
      "ieId":""
    },
    {
      "nombres":"RIVAS LOAIZA CONNY",
      "dni":23926101,
      "ieId":""
    },
    {
      "nombres":"ROJAS CONTRERAS INES",
      "dni":23990699,
      "ieId":""
    },
    {
      "nombres":"ROMERO DE ZAVALETA DOLI VILMA",
      "dni":24698172,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ CASTILLO MILAGROS",
      "dni":40209907,
      "ieId":""
    },
    {
      "nombres":"VELASCO HUACAC ROCIO SOLEDAD",
      "dni":23860740,
      "ieId":""
    },
    {
      "nombres":"CABALLERO LEVA RUTH YSABEL",
      "dni":23859031,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LINARES DECIRET",
      "dni":25304386,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA LIRA MARIO MILTON",
      "dni":25319674,
      "ieId":""
    },
    {
      "nombres":"GONZALES CUSIPAUCCAR JESUSA",
      "dni":23910936,
      "ieId":""
    },
    {
      "nombres":"MORA SALAS LIDIA",
      "dni":41372616,
      "ieId":""
    },
    {
      "nombres":"OLIVERA DEL POZO RUTH KATHERINE",
      "dni":24991384,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ FLORES DUNIA",
      "dni":23981699,
      "ieId":""
    },
    {
      "nombres":"SALAS ROMANI LILIA",
      "dni":23930446,
      "ieId":""
    },
    {
      "nombres":"SERRUDO ALVAREZ BERTHA",
      "dni":23938626,
      "ieId":""
    },
    {
      "nombres":"ARIAS PONCE VICENTE",
      "dni":23824217,
      "ieId":""
    },
    {
      "nombres":"BACA ALANOCA MERY",
      "dni":23928149,
      "ieId":""
    },
    {
      "nombres":"CABRERA QUIÑONEZ MIGUEL ANGEL",
      "dni":24970126,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL HERRERA ERNESTO",
      "dni":23916401,
      "ieId":""
    },
    {
      "nombres":"CARTAGENA SOTOMAYOR SILVIA NOHEMI",
      "dni":40254610,
      "ieId":""
    },
    {
      "nombres":"CERVANTES LUCANA YRMA",
      "dni":23963886,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ DURAND MARIBEL",
      "dni":40814471,
      "ieId":""
    },
    {
      "nombres":"CORNEJO HUISA JUAN CARLOS",
      "dni":23983943,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA MOLINA ESTELA",
      "dni":40146964,
      "ieId":""
    },
    {
      "nombres":"DELGADO LAIME RUTH ANITA",
      "dni":23912793,
      "ieId":""
    },
    {
      "nombres":"DELGADO VERA RUTH",
      "dni":23858585,
      "ieId":""
    },
    {
      "nombres":"HOLGUIN LLAYQUE MARLENI ELIANA",
      "dni":23986122,
      "ieId":""
    },
    {
      "nombres":"HUANCA ROMERO DORIS",
      "dni":23938413,
      "ieId":""
    },
    {
      "nombres":"MAMANI CAUCHA JAVIER",
      "dni":25000462,
      "ieId":""
    },
    {
      "nombres":"MOYNA HUILLCA VICTOR HUGO",
      "dni":31541118,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ DIAZ EDELMIRA",
      "dni":23881727,
      "ieId":""
    },
    {
      "nombres":"OCHOA PALOMINO CAROLINA",
      "dni":23804041,
      "ieId":""
    },
    {
      "nombres":"QUISPE ARAOZ DANTE",
      "dni":40435672,
      "ieId":""
    },
    {
      "nombres":"QUISPE AYALA WILFREDO",
      "dni":24713550,
      "ieId":""
    },
    {
      "nombres":"QUISPE CAZORLA NORMA ISABEL",
      "dni":23865860,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ VILLALOBOS MARTHA ELENA",
      "dni":23833340,
      "ieId":""
    },
    {
      "nombres":"SONCCO PIMENTEL SILVIA",
      "dni":41916220,
      "ieId":""
    },
    {
      "nombres":"SUTTA LABRA JULIAN",
      "dni":23954026,
      "ieId":""
    },
    {
      "nombres":"TIJERA HUANACO RONALD",
      "dni":44395600,
      "ieId":""
    },
    {
      "nombres":"TUPACYUPANQUI ZUNIGA BEATRIZ",
      "dni":43346154,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE CHINO HERNAN",
      "dni":23861654,
      "ieId":""
    },
    {
      "nombres":"YAÑEZ OLARTE JANET",
      "dni":23850954,
      "ieId":""
    },
    {
      "nombres":"ZAPATA HUALLPA POLICARPO OSCAR",
      "dni":23864098,
      "ieId":""
    },
    {
      "nombres":"ALEJOS SUMALAVE AMADOR RAFAEL",
      "dni":24980321,
      "ieId":""
    },
    {
      "nombres":"ARAGON HUAMAN SONIA CAROLINA",
      "dni":23830540,
      "ieId":""
    },
    {
      "nombres":"CCASA CONDORI LUIS",
      "dni":24718473,
      "ieId":""
    },
    {
      "nombres":"DEZA LIMACHI MARUJA",
      "dni":23895249,
      "ieId":""
    },
    {
      "nombres":"GIBAJA LUNA WILFREDO HIGIDIO",
      "dni":25309586,
      "ieId":""
    },
    {
      "nombres":"GUERRERO LOPEZ IDA",
      "dni":31038557,
      "ieId":""
    },
    {
      "nombres":"LOPEZ PILLCO CARLOS ARMANDO",
      "dni":23938332,
      "ieId":""
    },
    {
      "nombres":"MAMANI DUEÑAS MARIA ESTHER",
      "dni":24491083,
      "ieId":""
    },
    {
      "nombres":"PACHECO QUISPE REBECA",
      "dni":7942670,
      "ieId":""
    },
    {
      "nombres":"PEDRAZA CUSIHUALLPA VILMA",
      "dni":23938320,
      "ieId":""
    },
    {
      "nombres":"QUISPE BACA MARTHA",
      "dni":23883602,
      "ieId":""
    },
    {
      "nombres":"RONDAN AYBAR MARIO SAULO",
      "dni":23884520,
      "ieId":""
    },
    {
      "nombres":"SALAS GUTIERREZ DE ARRO DOROTEA",
      "dni":23912845,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS GARCIA ADELA",
      "dni":23940945,
      "ieId":""
    },
    {
      "nombres":"TORRES SERRANO RUBEN",
      "dni":23802837,
      "ieId":""
    },
    {
      "nombres":"AROCUTIPA CHALLCO CARMEN LOURDES",
      "dni":24000887,
      "ieId":""
    },
    {
      "nombres":"BRAVO ACUÑA JOSE EDMUNDO",
      "dni":23876753,
      "ieId":""
    },
    {
      "nombres":"CAHUANA ESTRADA PATRICIA",
      "dni":25000125,
      "ieId":""
    },
    {
      "nombres":"HUAHUACHAMPI GUZMAN WILLIANS",
      "dni":40027772,
      "ieId":""
    },
    {
      "nombres":"HUARANCA ALVAREZ JULIO JOLVER",
      "dni":45944253,
      "ieId":""
    },
    {
      "nombres":"LEON GUTIERREZ SOFIA",
      "dni":23943076,
      "ieId":""
    },
    {
      "nombres":"PORRAS BRICEÑO SILVIA",
      "dni":41709038,
      "ieId":""
    },
    {
      "nombres":"SALDIVAR BRAVO ANA TERESA",
      "dni":23992415,
      "ieId":""
    },
    {
      "nombres":"SUTTA VERA MOISES SIXTO",
      "dni":23986651,
      "ieId":""
    },
    {
      "nombres":"TORRES CHOQUEHUANCA ALEJANDRO LEONIDAS",
      "dni":29301883,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE VILLASANTE GERVACIO PERSI",
      "dni":23820709,
      "ieId":""
    },
    {
      "nombres":"ALARCON LEON LAURA",
      "dni":23986642,
      "ieId":""
    },
    {
      "nombres":"ALATRISTA CAMPOSANO FLOR MARIA",
      "dni":23923965,
      "ieId":""
    },
    {
      "nombres":"ALCAIHUAMAN GIL MARIA INES",
      "dni":23925150,
      "ieId":""
    },
    {
      "nombres":"APARICIO SALAS LANTI RUBIO",
      "dni":23952525,
      "ieId":""
    },
    {
      "nombres":"ARPASI ORTEGA GILMA NANCY",
      "dni":1232291,
      "ieId":""
    },
    {
      "nombres":"ASCUE REYNAGA PAULINO DIOGENES",
      "dni":24662820,
      "ieId":""
    },
    {
      "nombres":"ATAMARI ACHATA ESTHER",
      "dni":23944326,
      "ieId":""
    },
    {
      "nombres":"AYALA RODRIGUEZ NOHEMY CASIMIRA",
      "dni":23835994,
      "ieId":""
    },
    {
      "nombres":"BACA VALLENAS ALBERTO",
      "dni":23944550,
      "ieId":""
    },
    {
      "nombres":"BELLOTA QUINTANILLA LIDIA MARGOT",
      "dni":23827061,
      "ieId":""
    },
    {
      "nombres":"BORNAS BUSTAMANTE JESUS VLADIMIRO",
      "dni":24993704,
      "ieId":""
    },
    {
      "nombres":"BUSTOS LOAYZA ADOLFO VALENTIN",
      "dni":23806806,
      "ieId":""
    },
    {
      "nombres":"CABALLERO FARFAN LUCINDA MARY",
      "dni":25217887,
      "ieId":""
    },
    {
      "nombres":"CARAZAS MACHACA JOSE",
      "dni":25061042,
      "ieId":""
    },
    {
      "nombres":"CASA VELASQUEZ MARTHA",
      "dni":25181772,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CARLOS ZARA",
      "dni":23819095,
      "ieId":""
    },
    {
      "nombres":"CASTRO VILCA MARCO ANTONIO",
      "dni":23923698,
      "ieId":""
    },
    {
      "nombres":"CATUNTA CUTIPA ALBERT VICENTE",
      "dni":43975772,
      "ieId":""
    },
    {
      "nombres":"CCOPA DUEÑAS EDWIN ROMULO",
      "dni":24680271,
      "ieId":""
    },
    {
      "nombres":"CHIRME ORTIZ TEODORA NICOLASA",
      "dni":23805639,
      "ieId":""
    },
    {
      "nombres":"CUBA MELLADO ASUNTA",
      "dni":23824436,
      "ieId":""
    },
    {
      "nombres":"CUEVAS MAMANI SABINO",
      "dni":23849581,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA MARRON ARMANDO",
      "dni":2432172,
      "ieId":""
    },
    {
      "nombres":"GIL BLANCO JUAN MANUEL",
      "dni":23806469,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ VALDEZ MIRIAM",
      "dni":23943637,
      "ieId":""
    },
    {
      "nombres":"LATORRE LUZA VALERIANA",
      "dni":23874150,
      "ieId":""
    },
    {
      "nombres":"LEON QUINTANO WILDER",
      "dni":23952058,
      "ieId":""
    },
    {
      "nombres":"LEZAMA QUISPE JULIA",
      "dni":23957387,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HUAMANI FEDOR",
      "dni":43656543,
      "ieId":""
    },
    {
      "nombres":"MALPARTIDA LOAIZA ANA MIRIAM",
      "dni":23867754,
      "ieId":""
    },
    {
      "nombres":"NAYHUA HUISA FREDY ROLAND",
      "dni":23863778,
      "ieId":""
    },
    {
      "nombres":"NAYHUA HUISA VIRGINIA",
      "dni":23833870,
      "ieId":""
    },
    {
      "nombres":"PALOMINO FERNANDEZ NOHEMI FRANCISCA",
      "dni":23992189,
      "ieId":""
    },
    {
      "nombres":"PARICOTO ZARATE FRIDA ELENA",
      "dni":23923792,
      "ieId":""
    },
    {
      "nombres":"PEÑA CHALLCO JUAN MASIAS",
      "dni":23902198,
      "ieId":""
    },
    {
      "nombres":"PORTILLA SALAS FRIDA",
      "dni":23811921,
      "ieId":""
    },
    {
      "nombres":"PRADA CLAROS BLANCA MERCEDES",
      "dni":43299608,
      "ieId":""
    },
    {
      "nombres":"QUISPE SANCHEZ EDITH",
      "dni":31042062,
      "ieId":""
    },
    {
      "nombres":"QUISPETUPA DIAZ NATIVIDAD",
      "dni":23881397,
      "ieId":""
    },
    {
      "nombres":"ROMERO RICALDE SHIRLEY",
      "dni":42392286,
      "ieId":""
    },
    {
      "nombres":"RONDAN CHACON ENRIQUE GERARDO",
      "dni":23963122,
      "ieId":""
    },
    {
      "nombres":"SAIRE CHOQUEMAQUI BERNABE",
      "dni":23860995,
      "ieId":""
    },
    {
      "nombres":"SALAZAR PEÑA EPIFANIA",
      "dni":24388101,
      "ieId":""
    },
    {
      "nombres":"SOTELO ALARCON UBER ANASTACIO",
      "dni":23869193,
      "ieId":""
    },
    {
      "nombres":"SUMA HUANCA HERMENEGILDA",
      "dni":23938922,
      "ieId":""
    },
    {
      "nombres":"UBALDE OROSCO ROSA LUZ",
      "dni":25001711,
      "ieId":""
    },
    {
      "nombres":"VARELA SOTO YONY",
      "dni":23949219,
      "ieId":""
    },
    {
      "nombres":"VARGAS DE SOTELO AGRIPINA",
      "dni":23918908,
      "ieId":""
    },
    {
      "nombres":"VENEGAS BOCANGEL NANCY ZORAIDA",
      "dni":23871590,
      "ieId":""
    },
    {
      "nombres":"VILLALBA VARGAS JUANA AURELIANA",
      "dni":23877551,
      "ieId":""
    },
    {
      "nombres":"YAURI ESCALANTE KELY",
      "dni":41605728,
      "ieId":""
    },
    {
      "nombres":"YEPEZ GONZALES JOHNNY",
      "dni":23869248,
      "ieId":""
    },
    {
      "nombres":"YEPEZ TOVAR BERTHA",
      "dni":23904036,
      "ieId":""
    },
    {
      "nombres":"ZAVALETA PORTILLO EDGAR",
      "dni":6952279,
      "ieId":""
    },
    {
      "nombres":"BACA QUISPE YANETT",
      "dni":41490083,
      "ieId":""
    },
    {
      "nombres":"FARFAN ORMACHEA MARIA BELEN",
      "dni":23804040,
      "ieId":""
    },
    {
      "nombres":"GONZALES ELORREAGA CARMEN ROSA",
      "dni":6422682,
      "ieId":""
    },
    {
      "nombres":"MONTALVO DELGADO SILVIA RUTH",
      "dni":23882864,
      "ieId":""
    },
    {
      "nombres":"MONTEAGUDO LUNA JUANA LEONOR",
      "dni":23878588,
      "ieId":""
    },
    {
      "nombres":"ARTEAGA CURIE MILUZCA MARLENY",
      "dni":23804585,
      "ieId":""
    },
    {
      "nombres":"BEJAR CHAVEZ FARYDE",
      "dni":23943235,
      "ieId":""
    },
    {
      "nombres":"CALCIN MASCO EDGAR",
      "dni":80455899,
      "ieId":""
    },
    {
      "nombres":"FLOREZ HUAMAN MARGOT",
      "dni":23946957,
      "ieId":""
    },
    {
      "nombres":"HANCCO QUISPE JOSE FERNANDO",
      "dni":23946539,
      "ieId":""
    },
    {
      "nombres":"QUEHUARUCHO IZQUIERDO TEOFILA BEATRIZ",
      "dni":23877490,
      "ieId":""
    },
    {
      "nombres":"SIERRA VALDIVIA HUGO",
      "dni":23995198,
      "ieId":""
    },
    {
      "nombres":"SALGUERO ACCOSTUPA YUDY",
      "dni":41034430,
      "ieId":""
    },
    {
      "nombres":"ZAPANA VILLAVICENCIO VICTORIA",
      "dni":23960918,
      "ieId":""
    },
    {
      "nombres":"ALBORNOZ FARFAN ELIZABETH APARICIA",
      "dni":22507473,
      "ieId":""
    },
    {
      "nombres":"BENDEZU FIGUEROA MARGOT SAIDA",
      "dni":23834268,
      "ieId":""
    },
    {
      "nombres":"CAMPOS TICONA ANA MAGDALENA",
      "dni":23845081,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA OCHOA ELIDA BEATRIZ",
      "dni":23859286,
      "ieId":""
    },
    {
      "nombres":"ELAEZ CISNEROS SOLEDAD",
      "dni":23927113,
      "ieId":""
    },
    {
      "nombres":"HUARCAYA ESTRADA RUTH ZENAIDA",
      "dni":23882111,
      "ieId":""
    },
    {
      "nombres":"JORDAN DELGADO MARIA EUGENIA",
      "dni":23926638,
      "ieId":""
    },
    {
      "nombres":"SOLIS LLERENA KARINA DEL ROSARIO",
      "dni":23932580,
      "ieId":""
    },
    {
      "nombres":"BEDIA CONDORI ELIZABETH",
      "dni":23865858,
      "ieId":""
    },
    {
      "nombres":"CAPCHA HUALLPAYUNCA YANETT GERONIMA",
      "dni":23980261,
      "ieId":""
    },
    {
      "nombres":"CASTRO CORDOVA MARIA PILAR",
      "dni":10548899,
      "ieId":""
    },
    {
      "nombres":"CHACON UGARTE NICOLASA GLORIA",
      "dni":23839883,
      "ieId":""
    },
    {
      "nombres":"CONDORHUAMAN DE GUEVARA ALEJANDRINA",
      "dni":23914325,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS CCOPA GUIDO JUVENAL",
      "dni":23958073,
      "ieId":""
    },
    {
      "nombres":"GALLARDO MONTESINOS YSABEL NANCY",
      "dni":23839953,
      "ieId":""
    },
    {
      "nombres":"GAVANCHO OYOLA RONAL",
      "dni":23982238,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ SAMANEZ TANIA CONSUELO",
      "dni":23905624,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI PUMA FERNANDO FELIX",
      "dni":23900500,
      "ieId":""
    },
    {
      "nombres":"HUILLCA LETONA YOLANDA",
      "dni":23937510,
      "ieId":""
    },
    {
      "nombres":"LA TORRE HANCCO HELARD MARIN",
      "dni":42742206,
      "ieId":""
    },
    {
      "nombres":"MALLMA DE LA TORRE ROSARIO",
      "dni":23963328,
      "ieId":""
    },
    {
      "nombres":"MAMANI HUAMAN ANGEL",
      "dni":23935682,
      "ieId":""
    },
    {
      "nombres":"MARIN ORMACHEA RUDY PABILA",
      "dni":23945798,
      "ieId":""
    },
    {
      "nombres":"MEJIA GUADAMUR LUIS FRANCISCO",
      "dni":24383748,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ LOPEZ CARMEN FELICITA",
      "dni":6676841,
      "ieId":""
    },
    {
      "nombres":"NAURAY HUARI SADITH",
      "dni":43098388,
      "ieId":""
    },
    {
      "nombres":"OCAMPO MIRANDA ZEIDA EUGENIA",
      "dni":25302690,
      "ieId":""
    },
    {
      "nombres":"OCUPA CABRERA MIGUEL ANGEL",
      "dni":27661391,
      "ieId":""
    },
    {
      "nombres":"ORDAYA BACA JEANETTE",
      "dni":23998135,
      "ieId":""
    },
    {
      "nombres":"PERALTA VILLALBA VLADIMIR",
      "dni":23858048,
      "ieId":""
    },
    {
      "nombres":"RODRIGO CARRASCO NILO",
      "dni":23934063,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ BACA RILDO",
      "dni":23860757,
      "ieId":""
    },
    {
      "nombres":"ROJAS GUTIERREZ CARLOS ENRIQUE",
      "dni":23856003,
      "ieId":""
    },
    {
      "nombres":"ROMERO PEÑA LILIAM ARELI",
      "dni":23884130,
      "ieId":""
    },
    {
      "nombres":"TAIRO TAIRO MARCELINO GIAP",
      "dni":23966058,
      "ieId":""
    },
    {
      "nombres":"TITO OPORTO NELLY GREGORIA",
      "dni":23854039,
      "ieId":""
    },
    {
      "nombres":"VILLASANTE GAYTAN EVA LUISA",
      "dni":23878075,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA MANZANARES JUAN ANTONIO",
      "dni":23933262,
      "ieId":""
    },
    {
      "nombres":"ARAGON LAVILLA CECILIA JULIA",
      "dni":23910313,
      "ieId":""
    },
    {
      "nombres":"CABRERA FLORES NATIVIDAD",
      "dni":23870175,
      "ieId":""
    },
    {
      "nombres":"CANTERO VILLASANTE MARCIA",
      "dni":23994752,
      "ieId":""
    },
    {
      "nombres":"CCALLO HUARANCCA CATALINA",
      "dni":23890641,
      "ieId":""
    },
    {
      "nombres":"CONDORHUAMAN CUSI MARTHA",
      "dni":23851084,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CCORIHUAMAN MARGOTH",
      "dni":23912382,
      "ieId":""
    },
    {
      "nombres":"GARCIA HUAMAN MARIZOL",
      "dni":23949407,
      "ieId":""
    },
    {
      "nombres":"GUERRA CARO JAMES WALBERTH",
      "dni":23864036,
      "ieId":""
    },
    {
      "nombres":"HUACAC PUMA LUZ MARINA",
      "dni":23845378,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QUISPE NANCY",
      "dni":23938638,
      "ieId":""
    },
    {
      "nombres":"LINARES DOLMOS BENIGNA ELSA",
      "dni":23921452,
      "ieId":""
    },
    {
      "nombres":"OVALLE QUINTANILLA NORKA LISBETH",
      "dni":24007150,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHOQUE OLGA MADELEINE",
      "dni":1323202,
      "ieId":""
    },
    {
      "nombres":"RONDAN AYBAR JUAN JONATHAN",
      "dni":23912807,
      "ieId":""
    },
    {
      "nombres":"TTIRA CCAHUA AMERICO",
      "dni":23857253,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ CARDENAS ROLANDO",
      "dni":9317846,
      "ieId":""
    },
    {
      "nombres":"ALE YABAR EDUARDO",
      "dni":40474824,
      "ieId":""
    },
    {
      "nombres":"ATAMARI CONDORI OSCAR DAVID",
      "dni":80623789,
      "ieId":""
    },
    {
      "nombres":"BERROCAL QUISPE JAIME LUCAS",
      "dni":40767566,
      "ieId":""
    },
    {
      "nombres":"BOMBILLA SANTANDER ANIBAL",
      "dni":23879118,
      "ieId":""
    },
    {
      "nombres":"COPACONDORI MUÑA RUTY DORIS",
      "dni":42003558,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CCORIMANYA PIO",
      "dni":23809748,
      "ieId":""
    },
    {
      "nombres":"HUANCA ZAVALA EDGARDO",
      "dni":23957337,
      "ieId":""
    },
    {
      "nombres":"ILLANES VALENCIA MILAGROS",
      "dni":41502310,
      "ieId":""
    },
    {
      "nombres":"LAZO CARDENAS VIDAL ANGEL",
      "dni":23913005,
      "ieId":""
    },
    {
      "nombres":"MENESES LA RIVA GIOVANNA JESUS",
      "dni":7758371,
      "ieId":""
    },
    {
      "nombres":"OVALLE ARAPA SARA",
      "dni":24004115,
      "ieId":""
    },
    {
      "nombres":"PAREJA PORTILLA PAVEL WILFREDO",
      "dni":23988004,
      "ieId":""
    },
    {
      "nombres":"PINEDO VASQUEZ LIZ",
      "dni":42891381,
      "ieId":""
    },
    {
      "nombres":"TORRES MAMANI ROXANA",
      "dni":42495800,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA NUÑEZ WENDY JHISEL",
      "dni":43157918,
      "ieId":""
    },
    {
      "nombres":"BOBADILLA CONDE MARIVEL",
      "dni":23987470,
      "ieId":""
    },
    {
      "nombres":"CHUCHULLO CCACCACHAHUA ELIZABETH SANTUSA",
      "dni":42675533,
      "ieId":""
    },
    {
      "nombres":"CUTIPA QUICO ANDREA ADELA",
      "dni":41154651,
      "ieId":""
    },
    {
      "nombres":"DELGADO FERNANDEZ JULIO CESAR",
      "dni":23865593,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE CALLO NIEVES",
      "dni":40052420,
      "ieId":""
    },
    {
      "nombres":"GONZALES VARGAS WILBERT",
      "dni":23935540,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ RAMIREZ MARTHA VIRGINIA",
      "dni":23850819,
      "ieId":""
    },
    {
      "nombres":"ILLA USCAMAYTA LIZBETH",
      "dni":42723929,
      "ieId":""
    },
    {
      "nombres":"MARROQUIN NUÑEZ EDGAR ALBERTO",
      "dni":24363612,
      "ieId":""
    },
    {
      "nombres":"MAYTA YAURI KATERIN YHUANDIRA",
      "dni":45625379,
      "ieId":""
    },
    {
      "nombres":"PANCORBO FIGUEROA ZUGALY",
      "dni":42461237,
      "ieId":""
    },
    {
      "nombres":"PANTIGOSO HUAMAN JOSE LUIS",
      "dni":41828835,
      "ieId":""
    },
    {
      "nombres":"PARI TORRES ERWIN",
      "dni":2443097,
      "ieId":""
    },
    {
      "nombres":"PEÑALVA IBARRA FREDY",
      "dni":23932273,
      "ieId":""
    },
    {
      "nombres":"QUISPE COTO DELIA",
      "dni":23824306,
      "ieId":""
    },
    {
      "nombres":"SEVILLANOS TORRES LUIS JESUS",
      "dni":23863886,
      "ieId":""
    },
    {
      "nombres":"YAÑEZ MARTINEZ RUBEN CIRILO",
      "dni":25209261,
      "ieId":""
    },
    {
      "nombres":"ARPHI HUAMANI FREDY OMAR",
      "dni":70130735,
      "ieId":""
    },
    {
      "nombres":"CCORIMANYA ZUNIGA ELVIRA",
      "dni":23891631,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO OVIEDO EFRAIN",
      "dni":23859759,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA AYMARA JUAN",
      "dni":31040743,
      "ieId":""
    },
    {
      "nombres":"MAR FARFAN RUTH IVONE",
      "dni":23818058,
      "ieId":""
    },
    {
      "nombres":"MERINO SALAZAR FRANCISCO ALBERTO",
      "dni":23840221,
      "ieId":""
    },
    {
      "nombres":"RIVAS MIRANDA RAUL",
      "dni":23857500,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ BACA BLADIMIR",
      "dni":23984186,
      "ieId":""
    },
    {
      "nombres":"ARAGON ROCA FERNANDO LORENZO",
      "dni":23902384,
      "ieId":""
    },
    {
      "nombres":"DELGADO LINARES GENARO",
      "dni":23835168,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SUPANTA VITA",
      "dni":23956715,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ PINTO CAROLINA",
      "dni":23997867,
      "ieId":""
    },
    {
      "nombres":"OSORIO DE ASTOCONDOR ELIZABETH",
      "dni":23962848,
      "ieId":""
    },
    {
      "nombres":"VALLE VERGARA PRESENTACION YONY",
      "dni":23808258,
      "ieId":""
    },
    {
      "nombres":"ARIAS MENDOZA TULA",
      "dni":23901682,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA BECERRA JULIO",
      "dni":23819281,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUACAC JULIA",
      "dni":31522090,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA ZUNIGA SABINO CIRO",
      "dni":25120269,
      "ieId":""
    },
    {
      "nombres":"VENTURO FERNANDEZ MARIA ELENA",
      "dni":1493715,
      "ieId":""
    },
    {
      "nombres":"APAZA CHAMPI ROSA MARIA",
      "dni":4435876,
      "ieId":""
    },
    {
      "nombres":"SANTOS BARRIENTOS VICTOR",
      "dni":7489080,
      "ieId":""
    },
    {
      "nombres":"ROJAS AYQUIPA GABY PASCUALINA",
      "dni":23868940,
      "ieId":""
    },
    {
      "nombres":"APARICIO RODRIGUEZ BENITA",
      "dni":23833958,
      "ieId":""
    },
    {
      "nombres":"CARDENAS PUMA CELMIRA",
      "dni":23928844,
      "ieId":""
    },
    {
      "nombres":"CHACON MUÑOZ SONIA LEONOR",
      "dni":23960752,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CARPIO EZEQUIEL",
      "dni":23815020,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA CASTRO ALICIA",
      "dni":23905236,
      "ieId":""
    },
    {
      "nombres":"FARFAN BUSTAMANTE JANET",
      "dni":23937576,
      "ieId":""
    },
    {
      "nombres":"MASIAS CHACON LILIAN ALEXANDRA",
      "dni":41587240,
      "ieId":""
    },
    {
      "nombres":"ORE FIGUEROA LUCINDA",
      "dni":24007363,
      "ieId":""
    },
    {
      "nombres":"PUMA PUMA AGRIPINA",
      "dni":29462549,
      "ieId":""
    },
    {
      "nombres":"SISA MARTINEZ EDITH",
      "dni":42751802,
      "ieId":""
    },
    {
      "nombres":"ALARCON GARATE ROSA ELIZABETH",
      "dni":23855803,
      "ieId":""
    },
    {
      "nombres":"BERRIO CORDOVA JORGE RAMIRO",
      "dni":23845873,
      "ieId":""
    },
    {
      "nombres":"CHOCCATA MERCADO ROMULO HERMITAÑO",
      "dni":23864109,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA PAUCAR ELISABETH",
      "dni":23821299,
      "ieId":""
    },
    {
      "nombres":"FLOREZ CABALLERO MARIO GERMANICIO",
      "dni":24698832,
      "ieId":""
    },
    {
      "nombres":"GIL LOAYZA MARGARITA",
      "dni":23843591,
      "ieId":""
    },
    {
      "nombres":"LLANCAY HUAMAN FELIPE",
      "dni":23835154,
      "ieId":""
    },
    {
      "nombres":"MENDOZA HUAMANI TULA",
      "dni":23807366,
      "ieId":""
    },
    {
      "nombres":"PALOMINO RIOS BERNARDINO",
      "dni":23954181,
      "ieId":""
    },
    {
      "nombres":"PAREJA GONZALES MORRIZON",
      "dni":25063853,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ PONCE MARCIAL",
      "dni":23874843,
      "ieId":""
    },
    {
      "nombres":"TAPIA CHAMBILLA BACILIO",
      "dni":23817845,
      "ieId":""
    },
    {
      "nombres":"TICONA TOHALINO INDALECIO",
      "dni":23916202,
      "ieId":""
    },
    {
      "nombres":"VERA HURTADO MODESTO",
      "dni":25181215,
      "ieId":""
    },
    {
      "nombres":"DONGO CASAVERDE ESTANISLAO",
      "dni":23831401,
      "ieId":""
    },
    {
      "nombres":"ESPERILLA MENDOZA DOROTEO",
      "dni":24696973,
      "ieId":""
    },
    {
      "nombres":"HAÑARI QUISPE ANGEL DIONICIO",
      "dni":23956981,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA DELGADO FRANKLIN",
      "dni":40425746,
      "ieId":""
    },
    {
      "nombres":"HUAMAN OCHOA MARLENI",
      "dni":40132735,
      "ieId":""
    },
    {
      "nombres":"QUISPE COTO NORBERTA",
      "dni":23824095,
      "ieId":""
    },
    {
      "nombres":"QUISPE PARI LEONIDAS MARTIN",
      "dni":23882756,
      "ieId":""
    },
    {
      "nombres":"QUISPITUPA ROCA PAULINO",
      "dni":23847944,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES RAMIREZ ENRIQUE",
      "dni":23921900,
      "ieId":""
    },
    {
      "nombres":"TAIRO CHUCO LEONIDAS",
      "dni":23966412,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO BACA WILDER GENARO",
      "dni":23886161,
      "ieId":""
    },
    {
      "nombres":"USCAMAITA MIRANDA ROBERTO",
      "dni":23874277,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO SAIRE ARTURO ZENON",
      "dni":23914998,
      "ieId":""
    },
    {
      "nombres":"GARCIA BARRIENTOS JUAN CARLOS",
      "dni":23974738,
      "ieId":""
    },
    {
      "nombres":"GUZMAN VALER JUSTINO",
      "dni":23917684,
      "ieId":""
    },
    {
      "nombres":"ROQUE PEREZ RENE",
      "dni":23917124,
      "ieId":""
    },
    {
      "nombres":"TERRAZAS HUAMAN KARIN",
      "dni":23975484,
      "ieId":""
    },
    {
      "nombres":"UGARTE AÑO EDEN MAURICIO",
      "dni":40140153,
      "ieId":""
    },
    {
      "nombres":"LOAYZA ARAGON JULIETA",
      "dni":23811376,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ RIOS CRISTINA",
      "dni":47527244,
      "ieId":""
    },
    {
      "nombres":"GONZALES CASTILLA ROSA MARGARITA",
      "dni":23834656,
      "ieId":""
    },
    {
      "nombres":"PACHECO VENERO MARLENE",
      "dni":6753537,
      "ieId":""
    },
    {
      "nombres":"PERCCA ABAL FELICIA",
      "dni":25314321,
      "ieId":""
    },
    {
      "nombres":"ROZAS DURAND MARIA EVA",
      "dni":24988153,
      "ieId":""
    },
    {
      "nombres":"SUEL QUISPE MARIA MARLENE",
      "dni":23976229,
      "ieId":""
    },
    {
      "nombres":"ACERO ESTAÑA RENE",
      "dni":40470901,
      "ieId":""
    },
    {
      "nombres":"BARRIONUEVO PEÑAFIEL SERGIO",
      "dni":25121924,
      "ieId":""
    },
    {
      "nombres":"CAJIGAS PILLCO MARINA ANTONIA",
      "dni":24464517,
      "ieId":""
    },
    {
      "nombres":"CASTRO CARO GIOVANNA ELIZABETH",
      "dni":23939184,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ NINAN NORCA",
      "dni":23945055,
      "ieId":""
    },
    {
      "nombres":"HANCCO LOAYZA ANAMELBA",
      "dni":23990103,
      "ieId":""
    },
    {
      "nombres":"LOAIZA MONGE MERCEDES",
      "dni":23933632,
      "ieId":""
    },
    {
      "nombres":"PEREZ FLORES ELOY ISAURO",
      "dni":25183198,
      "ieId":""
    },
    {
      "nombres":"VISA HUANCO EDITH VICTORIA",
      "dni":44253964,
      "ieId":""
    },
    {
      "nombres":"ARRIOLA FERNANDEZ ROCIO",
      "dni":23980315,
      "ieId":""
    },
    {
      "nombres":"BRAVO NAVARRO RUTH SABINA",
      "dni":43397445,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL HUAYLLANI DIANA INGRID",
      "dni":44100979,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO CONTRERAS VERONICA AMPARO",
      "dni":23943478,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO DE MUJICA ELIZABETH BERNA",
      "dni":23999207,
      "ieId":""
    },
    {
      "nombres":"HUAIHUA PAUCAR JACKELINE YENY",
      "dni":40383970,
      "ieId":""
    },
    {
      "nombres":"VEGA PANCORBO GIOVANNA",
      "dni":23992625,
      "ieId":""
    },
    {
      "nombres":"GONZALES VELARDE MARGARITA",
      "dni":23885673,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA CERVANTES GIANNI RINA",
      "dni":23944739,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ SOTO SAYDA",
      "dni":31541398,
      "ieId":""
    },
    {
      "nombres":"ELORRIETA VALENCIA ROXANA",
      "dni":25304529,
      "ieId":""
    },
    {
      "nombres":"TORRES CRUZ KATHERINE MIRTHA",
      "dni":44479057,
      "ieId":""
    },
    {
      "nombres":"SILVA MOSTAJO DANIELA",
      "dni":44783998,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE PEÑA LUCIA AURORA",
      "dni":23894902,
      "ieId":""
    },
    {
      "nombres":"APUMAITA GALLEGOS ELSA",
      "dni":23957094,
      "ieId":""
    },
    {
      "nombres":"ARIZABAL BACA MARIA ISABEL",
      "dni":24001445,
      "ieId":""
    },
    {
      "nombres":"CAYO MENDOZA MERY YULY",
      "dni":45459339,
      "ieId":""
    },
    {
      "nombres":"CUELA CASTANEDA CAROLINA",
      "dni":23857765,
      "ieId":""
    },
    {
      "nombres":"BONET CASTILLO MARLENY",
      "dni":23857229,
      "ieId":""
    },
    {
      "nombres":"LESCANO ELORRIETA MARIA DEL CARMEN NATIVI",
      "dni":23852935,
      "ieId":""
    },
    {
      "nombres":"MENACHO ZUÑIGA MARY",
      "dni":23944272,
      "ieId":""
    },
    {
      "nombres":"YABAR PUENTE DE LA VEGA JUDY ROSA",
      "dni":25180090,
      "ieId":""
    },
    {
      "nombres":"CORTEZ FERNANDEZ ANA LILIA",
      "dni":23893586,
      "ieId":""
    },
    {
      "nombres":"MONGE RODRIGUEZ MARLENY",
      "dni":43529067,
      "ieId":""
    },
    {
      "nombres":"PIZARRO QUISPE SILVIA",
      "dni":23891653,
      "ieId":""
    },
    {
      "nombres":"GALVAN GONZALES MARUJA",
      "dni":9358857,
      "ieId":""
    },
    {
      "nombres":"PILARES ESCOBAR DORIS",
      "dni":23894206,
      "ieId":""
    },
    {
      "nombres":"GUZMAN FARFAN CANDIS CHISTIANNE",
      "dni":40039228,
      "ieId":""
    },
    {
      "nombres":"BARRIGA ALVAREZ MAGDA",
      "dni":44372918,
      "ieId":""
    },
    {
      "nombres":"CHOQUE JURADO FLORENTINA",
      "dni":23868711,
      "ieId":""
    },
    {
      "nombres":"CAMERO PALOMINO MARINA",
      "dni":24993767,
      "ieId":""
    },
    {
      "nombres":"HUAIHUA APAZA LUZ MARINA",
      "dni":24705231,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAYTA TITO JUDIHT JESSICA",
      "dni":80591745,
      "ieId":""
    },
    {
      "nombres":"ORTIZ ALMIRON TRINIDAD",
      "dni":24463759,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ PAREJA YONI",
      "dni":23989399,
      "ieId":""
    },
    {
      "nombres":"VARGAS MONTAÑEZ MARCO ANTONIO",
      "dni":25315162,
      "ieId":""
    },
    {
      "nombres":"CALLOHUANCA MAMANI EVA",
      "dni":24718339,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ BACA JUANA MARIA",
      "dni":23983963,
      "ieId":""
    },
    {
      "nombres":"SEGUNDO VALENCIA JUAN",
      "dni":25201290,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA JIMENEZ GLYNS",
      "dni":23847177,
      "ieId":""
    },
    {
      "nombres":"AYMA CONDORI AMBROCIA",
      "dni":25201534,
      "ieId":""
    },
    {
      "nombres":"CARLOS MENDOZA FLAVIA MERY",
      "dni":25201244,
      "ieId":""
    },
    {
      "nombres":"CUENTAS AGUIRRE ANA CAROLINA",
      "dni":23923778,
      "ieId":""
    },
    {
      "nombres":"CUSIATAN RIVEROS ALEJANDRINA",
      "dni":24562980,
      "ieId":""
    },
    {
      "nombres":"GARCIA VALENCIA CELEDONIA",
      "dni":25201505,
      "ieId":""
    },
    {
      "nombres":"HILARI CACERES WASHINGTON",
      "dni":24660488,
      "ieId":""
    },
    {
      "nombres":"MEDINA DE PINARES JUDITH",
      "dni":31544120,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUARI LOURDES",
      "dni":23847050,
      "ieId":""
    },
    {
      "nombres":"QUISPICUSI DUEÑAS REYNA",
      "dni":23974319,
      "ieId":""
    },
    {
      "nombres":"SANTOS ALVAREZ LUIS ALBERTO",
      "dni":24988731,
      "ieId":""
    },
    {
      "nombres":"SEGUNDO VALENCIA LEANDRO",
      "dni":25200235,
      "ieId":""
    },
    {
      "nombres":"SERRANO VARGAS LUISA",
      "dni":23837013,
      "ieId":""
    },
    {
      "nombres":"SULLCA RAMOS RAUL VALERIO",
      "dni":23808015,
      "ieId":""
    },
    {
      "nombres":"BOMBILLA SAIRE JUANA ROSA",
      "dni":25061363,
      "ieId":""
    },
    {
      "nombres":"CHALLCO ZAMALLOA AGRIPINO",
      "dni":23834628,
      "ieId":""
    },
    {
      "nombres":"CHINCHAYO PEÑA ARTURO",
      "dni":23893668,
      "ieId":""
    },
    {
      "nombres":"OLMEDO SANCHEZ JUAN ALEX",
      "dni":24683130,
      "ieId":""
    },
    {
      "nombres":"RIVERA VILLANUEVA JUAN CARLOS",
      "dni":24493930,
      "ieId":""
    },
    {
      "nombres":"CAJIGAS VARGAS NORMA SOFIA",
      "dni":23855808,
      "ieId":""
    },
    {
      "nombres":"ARO CARDENAS DORIS VALERIA",
      "dni":23899893,
      "ieId":""
    },
    {
      "nombres":"BELLO ABARCA RAQUEL",
      "dni":23938307,
      "ieId":""
    },
    {
      "nombres":"CARRASCO SOLIS CAROLINA",
      "dni":23863244,
      "ieId":""
    },
    {
      "nombres":"CARRILLO CRUZ DANNY ROSA",
      "dni":23950234,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ NINAN YONY",
      "dni":23856364,
      "ieId":""
    },
    {
      "nombres":"DAVALOS CARDENAS HERMELINDA",
      "dni":41033951,
      "ieId":""
    },
    {
      "nombres":"DENOS HUAMAN FREDY",
      "dni":42363158,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR NAOLA GLORIA",
      "dni":23823857,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS YANQUE MARTHA CECILIA",
      "dni":23892929,
      "ieId":""
    },
    {
      "nombres":"GROVAS OROS LAURA",
      "dni":23840285,
      "ieId":""
    },
    {
      "nombres":"JAEN ASTETE URSULA BRIGITTE",
      "dni":24000977,
      "ieId":""
    },
    {
      "nombres":"JARA GARCIA RUTH NANCY",
      "dni":23854487,
      "ieId":""
    },
    {
      "nombres":"ONTON PALIZA MARITZA",
      "dni":23954782,
      "ieId":""
    },
    {
      "nombres":"PACCORI QUISPE ERNESTO",
      "dni":29576821,
      "ieId":""
    },
    {
      "nombres":"PACHECO HUAYCHO JULIA",
      "dni":23978685,
      "ieId":""
    },
    {
      "nombres":"PIZARRO VILLASANTE SHEDY LUZ",
      "dni":23820564,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALVAREZ ROMULO",
      "dni":24950747,
      "ieId":""
    },
    {
      "nombres":"QUISPE QQUENAYA HILDA",
      "dni":23862780,
      "ieId":""
    },
    {
      "nombres":"SEGUNDO MARTINEZ MARIANO HUGO",
      "dni":25207741,
      "ieId":""
    },
    {
      "nombres":"SUAREZ CUBA JEANETTE",
      "dni":24712613,
      "ieId":""
    },
    {
      "nombres":"TAPIA PACHECO YULY",
      "dni":45459355,
      "ieId":""
    },
    {
      "nombres":"ZAVALETA HUAMPA ROXANA",
      "dni":24705305,
      "ieId":""
    },
    {
      "nombres":"CASTRO CUBA BERTHA JUSTINA",
      "dni":23879469,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ QUISPE JOSEFINA",
      "dni":4646589,
      "ieId":""
    },
    {
      "nombres":"ORTIZ ILLA MADELAENE",
      "dni":25003270,
      "ieId":""
    },
    {
      "nombres":"PERALTA PILARES CERVANDO GERMAN",
      "dni":23896051,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALVAREZ BERTHA",
      "dni":24970254,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ DE LA SOTA RIMBERTO",
      "dni":23814121,
      "ieId":""
    },
    {
      "nombres":"YANA HUILLCA GUALBERTO",
      "dni":23928962,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ YUCRA DORIS",
      "dni":25123396,
      "ieId":""
    },
    {
      "nombres":"BALLADARES NAVARRETE AURORA",
      "dni":23807387,
      "ieId":""
    },
    {
      "nombres":"COSIO BACA MARISA",
      "dni":23884178,
      "ieId":""
    },
    {
      "nombres":"COSTILLA MOSCOSO IRMA",
      "dni":24467917,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ QUISPE JOSEFA",
      "dni":25207860,
      "ieId":""
    },
    {
      "nombres":"MEJIA GALICIA VALENTINA",
      "dni":24007188,
      "ieId":""
    },
    {
      "nombres":"OJEDA GONZALES ROSA LUZ",
      "dni":45693974,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ZUNIGA VILMA",
      "dni":23924196,
      "ieId":""
    },
    {
      "nombres":"MERCADO QUISPE MANUEL SILVESTRE",
      "dni":23980106,
      "ieId":""
    },
    {
      "nombres":"MONTES DIAZ AMALIA",
      "dni":24991444,
      "ieId":""
    },
    {
      "nombres":"OLARTE LUNA JUANA ALBERTINA",
      "dni":25204028,
      "ieId":""
    },
    {
      "nombres":"YEPEZ ESTRADA YVONNE HORTENCIA",
      "dni":23878178,
      "ieId":""
    },
    {
      "nombres":"ACHAHUI VILCA HUGO",
      "dni":24710990,
      "ieId":""
    },
    {
      "nombres":"AUCAPURI CUSI VIRGINIA VALENTINA",
      "dni":23899408,
      "ieId":""
    },
    {
      "nombres":"CORAHUA CONTOL RAYMUNDA",
      "dni":23945850,
      "ieId":""
    },
    {
      "nombres":"HALLASI MAMANI DORA",
      "dni":23886849,
      "ieId":""
    },
    {
      "nombres":"HUARACHA COVARRUBIAS CARLOS FELIPE",
      "dni":25311907,
      "ieId":""
    },
    {
      "nombres":"HUILLCA SONCCO MARIBEL",
      "dni":23865949,
      "ieId":""
    },
    {
      "nombres":"HUNURUCO SEGOVIA CESAR FRANCISCO",
      "dni":24365858,
      "ieId":""
    },
    {
      "nombres":"LUNA BACA GIMENA",
      "dni":25185786,
      "ieId":""
    },
    {
      "nombres":"LUNA MONTES DELIA",
      "dni":23890085,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE LUZ MARINA",
      "dni":25214509,
      "ieId":""
    },
    {
      "nombres":"PUELLES SALAS ABIMAEL RAMIRO",
      "dni":44233214,
      "ieId":""
    },
    {
      "nombres":"AGUILAR LAGUNA MARIO ESTEBAN",
      "dni":23805805,
      "ieId":""
    },
    {
      "nombres":"APAZA OLIVERA CIRA AIDA LUZ",
      "dni":24670535,
      "ieId":""
    },
    {
      "nombres":"BACA SOTO ANGEL RIGOBERTO",
      "dni":23886595,
      "ieId":""
    },
    {
      "nombres":"BOMBILLA SAYRE YRMA ALICIA",
      "dni":25061055,
      "ieId":""
    },
    {
      "nombres":"CAYLLAHUA CHUCARI FREDDY MANUEL",
      "dni":6283782,
      "ieId":""
    },
    {
      "nombres":"CAYO CASTRO JOSKY HAYDEE",
      "dni":23892884,
      "ieId":""
    },
    {
      "nombres":"CORDOVA DE MUÑOZ MARTHA",
      "dni":23891183,
      "ieId":""
    },
    {
      "nombres":"CUSIRIMAY MAMANI LIBIA",
      "dni":23845822,
      "ieId":""
    },
    {
      "nombres":"DEL SOLAR MARTINEZ YAQUELINE",
      "dni":41156176,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ORTIZ DUANY RUTH",
      "dni":40022237,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CHOQUE JUAN DE DIOS",
      "dni":25003066,
      "ieId":""
    },
    {
      "nombres":"FLORES SUBILETA IRENE",
      "dni":24470215,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA ZUNIGA HERNAN",
      "dni":23956731,
      "ieId":""
    },
    {
      "nombres":"JIHUALLANCA RUELAS INES",
      "dni":24576877,
      "ieId":""
    },
    {
      "nombres":"JIHUALLANCA RUELAS JUDITH ANTONIA",
      "dni":23990447,
      "ieId":""
    },
    {
      "nombres":"MEDINA SALAS DORIS LEONOR",
      "dni":23898457,
      "ieId":""
    },
    {
      "nombres":"MONZON LARA FRANCISCO",
      "dni":23991503,
      "ieId":""
    },
    {
      "nombres":"MORALES GUEVARA VIRGINIA",
      "dni":23826503,
      "ieId":""
    },
    {
      "nombres":"OCHOA VDA DE LUQUE LIVIA",
      "dni":23868513,
      "ieId":""
    },
    {
      "nombres":"PARI MAMANI JOAQUIN",
      "dni":23989096,
      "ieId":""
    },
    {
      "nombres":"PEREZ BAEZ VICTOR EDWIN",
      "dni":23838433,
      "ieId":""
    },
    {
      "nombres":"QUISPE LUQUE JESSICA FANY",
      "dni":41618773,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ VILLENA ABEL",
      "dni":23934426,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CAMARGO CELIA",
      "dni":23910151,
      "ieId":""
    },
    {
      "nombres":"ROMERO CALANCHA HILDA BONIFACIA",
      "dni":23915614,
      "ieId":""
    },
    {
      "nombres":"SALAS CRUZ LILIAN",
      "dni":23864064,
      "ieId":""
    },
    {
      "nombres":"VALLENAS SUTTA GUILLERMINA",
      "dni":23889486,
      "ieId":""
    },
    {
      "nombres":"VARGAS MORALES CELSO EPIFANIO",
      "dni":31424744,
      "ieId":""
    },
    {
      "nombres":"VERA CACERES CLEMENCIA",
      "dni":23957154,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO YLAQUIJO JOSE ANTONIO",
      "dni":23845125,
      "ieId":""
    },
    {
      "nombres":"VILA CONDORI ELIZABETH",
      "dni":25008990,
      "ieId":""
    },
    {
      "nombres":"CHACON ORTIZ YANET",
      "dni":23978230,
      "ieId":""
    },
    {
      "nombres":"LOVON ROJAS FULGENCIA",
      "dni":23832472,
      "ieId":""
    },
    {
      "nombres":"ZERECEDA VARGAS MARLENE",
      "dni":23814318,
      "ieId":""
    },
    {
      "nombres":"ARAGON TEJADA RAFAEL GABINO",
      "dni":23852081,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ CCALLA EDUARDA",
      "dni":24803066,
      "ieId":""
    },
    {
      "nombres":"PUMACAYO CALANCHE ANGHELINA",
      "dni":24006659,
      "ieId":""
    },
    {
      "nombres":"FARFAN ZEGARRA YONY",
      "dni":23957061,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ QUINTANILLA PILAR",
      "dni":23914662,
      "ieId":""
    },
    {
      "nombres":"GAMARRA PEREYRA YANETT",
      "dni":23951276,
      "ieId":""
    },
    {
      "nombres":"OVIEDO PANCORBO ELSA",
      "dni":23933567,
      "ieId":""
    },
    {
      "nombres":"CANDIA SEGURA MARLENI",
      "dni":23899708,
      "ieId":""
    },
    {
      "nombres":"CHOQUENAIRA MAMANI RIMBERTI",
      "dni":40731782,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ DIAZ MARITZA",
      "dni":23929875,
      "ieId":""
    },
    {
      "nombres":"QUISPE SACSI CELESTINA",
      "dni":30427850,
      "ieId":""
    },
    {
      "nombres":"ARQQUE ARANGURI MERCEDES MARIA",
      "dni":23940954,
      "ieId":""
    },
    {
      "nombres":"ASENCIOS DEXTRE MARIA DEL ROSARIO",
      "dni":23957157,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL HUAMAN NIEVES",
      "dni":31552665,
      "ieId":""
    },
    {
      "nombres":"CASTILLO FARFAN HENRY",
      "dni":25217123,
      "ieId":""
    },
    {
      "nombres":"CASTILLO LOPEZ JAVIER ENRIQUE",
      "dni":25183571,
      "ieId":""
    },
    {
      "nombres":"CASTRO GOMEZ OFELIA",
      "dni":23951304,
      "ieId":""
    },
    {
      "nombres":"CCANCHI CHURAPA MARLENI",
      "dni":44740655,
      "ieId":""
    },
    {
      "nombres":"CHAIÑA APAZA MARTHA MILAGROS",
      "dni":24007208,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA VUCETICH AMPARO TATIANA",
      "dni":23983633,
      "ieId":""
    },
    {
      "nombres":"DIAZ BECERRA BIVIANA",
      "dni":23844093,
      "ieId":""
    },
    {
      "nombres":"GARCIA LOAIZA MARGOT",
      "dni":41053992,
      "ieId":""
    },
    {
      "nombres":"LANZA SILVA ERICK HERNAN",
      "dni":40122107,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ HUALLPAMAYTA JUSTINA",
      "dni":23895840,
      "ieId":""
    },
    {
      "nombres":"PILARES DE ZUÑIGA EUGENIA BELIZARIA",
      "dni":4816772,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ NIETO MIRIAM BINA",
      "dni":23964747,
      "ieId":""
    },
    {
      "nombres":"SANTOS YUPANQUI FRIDA",
      "dni":24983706,
      "ieId":""
    },
    {
      "nombres":"SOTOMAYOR SARMIENTO TANIA JOVANNA",
      "dni":23925934,
      "ieId":""
    },
    {
      "nombres":"TORRES ALVAREZ MARIA DE LA O",
      "dni":23846227,
      "ieId":""
    },
    {
      "nombres":"YARIN ORTIZ DE ORUE MARISA",
      "dni":25302117,
      "ieId":""
    },
    {
      "nombres":"ACUÑA ROZAS ALYONA",
      "dni":23864100,
      "ieId":""
    },
    {
      "nombres":"ANCHARI DE MAQQUERE VIRGINIA",
      "dni":23826780,
      "ieId":""
    },
    {
      "nombres":"CALDERON DE FERNANDEZ ROSARIO",
      "dni":23827429,
      "ieId":""
    },
    {
      "nombres":"CCAMA YUCRA MARIA",
      "dni":24700958,
      "ieId":""
    },
    {
      "nombres":"CRUZ MEZA CARLOTA",
      "dni":23804594,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN RIQUELME ELENA",
      "dni":23928078,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS MEZA LUZ MARIA",
      "dni":23920283,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CASTILLA JAIME",
      "dni":23812668,
      "ieId":""
    },
    {
      "nombres":"JUSTINIANI YEPEZ ANNIE MARGOT",
      "dni":23854997,
      "ieId":""
    },
    {
      "nombres":"MAQUERE ANCHARI LILIA",
      "dni":45572977,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO ORTIZ DE ORUE RITA",
      "dni":25304786,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ DURAN MARITZA ILKA",
      "dni":24997712,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ ANGULO YOLANDA",
      "dni":23807625,
      "ieId":""
    },
    {
      "nombres":"PAREJA MANSILLA YANET MARISA",
      "dni":23871797,
      "ieId":""
    },
    {
      "nombres":"PILARES CAVIDES LUZ MARIA",
      "dni":23815024,
      "ieId":""
    },
    {
      "nombres":"POBLETE ZEGARRA GRIMILDA",
      "dni":23817260,
      "ieId":""
    },
    {
      "nombres":"VICTORIO CAVIEDES CARMEN FRANCISCA",
      "dni":23956996,
      "ieId":""
    },
    {
      "nombres":"VIZARRETA LIMACHI FANNY",
      "dni":23942436,
      "ieId":""
    },
    {
      "nombres":"CONDORPUSA CAHUANA GLORIA",
      "dni":31033029,
      "ieId":""
    },
    {
      "nombres":"MONTALVO SEGOVIA AGRIPINA",
      "dni":23918111,
      "ieId":""
    },
    {
      "nombres":"RIVERA QUILCA MONICA EVELYN",
      "dni":23945966,
      "ieId":""
    },
    {
      "nombres":"TERZI MORALES GLADYS LINE",
      "dni":23857537,
      "ieId":""
    },
    {
      "nombres":"YANCAY MEDINA NATIVIDAD",
      "dni":23940707,
      "ieId":""
    },
    {
      "nombres":"YTURRIAGA BARCENA CLERY MARY",
      "dni":23953876,
      "ieId":""
    },
    {
      "nombres":"ACHAHUI CHOQUE JOAQUINA",
      "dni":24704539,
      "ieId":""
    },
    {
      "nombres":"ACHAHUI CHOQUE OSWALDO",
      "dni":24701265,
      "ieId":""
    },
    {
      "nombres":"BONET CORTEZ MARIA ELIZABETH",
      "dni":23932892,
      "ieId":""
    },
    {
      "nombres":"CALCINE CORRIDO PAULINA VILMA",
      "dni":23955631,
      "ieId":""
    },
    {
      "nombres":"CALSINA TTITO CELESTINO",
      "dni":23990053,
      "ieId":""
    },
    {
      "nombres":"CCOTOHUANCA SUYO BRAULIO LUIS",
      "dni":24692727,
      "ieId":""
    },
    {
      "nombres":"CHECYA ALATA SONIA",
      "dni":24714391,
      "ieId":""
    },
    {
      "nombres":"GAMARRA RIOS MARY ELIZABETH",
      "dni":25301183,
      "ieId":""
    },
    {
      "nombres":"HERRERA ZANS CARMEN ROSA",
      "dni":23885757,
      "ieId":""
    },
    {
      "nombres":"HUAMAN BUSTAMANTE ROXANA MILUSKA",
      "dni":23929636,
      "ieId":""
    },
    {
      "nombres":"HURTADO VARGAS SOLEDAD",
      "dni":31032538,
      "ieId":""
    },
    {
      "nombres":"MAMANI FARFAN VICTORIA",
      "dni":23956887,
      "ieId":""
    },
    {
      "nombres":"MEDRANO QUIÑONES JEANETTE",
      "dni":24700675,
      "ieId":""
    },
    {
      "nombres":"MONTES TORRES FRANCISCA",
      "dni":23937950,
      "ieId":""
    },
    {
      "nombres":"ORTIZ MOLIN MARTHA",
      "dni":23915922,
      "ieId":""
    },
    {
      "nombres":"ORUE PAREJA CESAR ALBERTO",
      "dni":23917918,
      "ieId":""
    },
    {
      "nombres":"PACOMPIA MORIANO JENNY",
      "dni":46344142,
      "ieId":""
    },
    {
      "nombres":"PINARES AGUIRRE BENILDA",
      "dni":23956509,
      "ieId":""
    },
    {
      "nombres":"QUISPE IDME MARGOT",
      "dni":42076423,
      "ieId":""
    },
    {
      "nombres":"QUIZA MAMANI LUCIANO RAYMUNDO",
      "dni":23994045,
      "ieId":""
    },
    {
      "nombres":"SULLCACCORI FLORES CARMEN",
      "dni":23828634,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA SANTOS GRAZZIA CAROLINA",
      "dni":25001277,
      "ieId":""
    },
    {
      "nombres":"VARGAS CASTILLA EXALTO",
      "dni":23954305,
      "ieId":""
    },
    {
      "nombres":"VARGAS LUNA CELESTINA OLINDA",
      "dni":25120261,
      "ieId":""
    },
    {
      "nombres":"VEGA PANCORBO JESSICA",
      "dni":25000555,
      "ieId":""
    },
    {
      "nombres":"CHINCHAYO PEÑA PABLO",
      "dni":31038301,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MEDINA DORA ELENA",
      "dni":23985728,
      "ieId":""
    },
    {
      "nombres":"PAZ ALVAREZ JUVENAL",
      "dni":25207685,
      "ieId":""
    },
    {
      "nombres":"TICONA MEDINA BRIGIDA",
      "dni":23982849,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA MORALES CARMEN GLADIS",
      "dni":23959058,
      "ieId":""
    },
    {
      "nombres":"BARBACHAN CHAMPI FEDERICO",
      "dni":24704726,
      "ieId":""
    },
    {
      "nombres":"PACHECO ABARCA FRANCISCA",
      "dni":23932895,
      "ieId":""
    },
    {
      "nombres":"RAMOS CHOZO MAGALY MARLENE",
      "dni":16742022,
      "ieId":""
    },
    {
      "nombres":"PAREJA YAÑEZ DE PEREZ RINA",
      "dni":23828722,
      "ieId":""
    },
    {
      "nombres":"TINTAYA HUAMAN SILVERIA",
      "dni":23995331,
      "ieId":""
    },
    {
      "nombres":"TOROBEO VALLE TIMOTEA",
      "dni":23964309,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ROJAS ELIAS",
      "dni":40309462,
      "ieId":""
    },
    {
      "nombres":"APAZA CONDE MARCELINA",
      "dni":23993067,
      "ieId":""
    },
    {
      "nombres":"ARIAS MUÑOZ NIEVES",
      "dni":23963532,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI CABRERA LEONOR",
      "dni":23957082,
      "ieId":""
    },
    {
      "nombres":"BACA SILVA FERDINAN",
      "dni":23965862,
      "ieId":""
    },
    {
      "nombres":"CARDENAS RIVERA JULIA GRACIELA",
      "dni":25313755,
      "ieId":""
    },
    {
      "nombres":"CAYO TTITO LUISA",
      "dni":23893426,
      "ieId":""
    },
    {
      "nombres":"GAMARRA DE RAMIREZ MARGOTH ISABEL",
      "dni":23984723,
      "ieId":""
    },
    {
      "nombres":"LOVATON BACA JUAN ANTONIO",
      "dni":23963719,
      "ieId":""
    },
    {
      "nombres":"MAMANI COYLA ZAIDA JESUS",
      "dni":23928947,
      "ieId":""
    },
    {
      "nombres":"MONTERO RAMOS JOSE ALBERTO",
      "dni":23962542,
      "ieId":""
    },
    {
      "nombres":"MORALES AZURIN ELEONORA",
      "dni":23870815,
      "ieId":""
    },
    {
      "nombres":"OROZ BARRIENTOS SANDRA LIGIA",
      "dni":23956670,
      "ieId":""
    },
    {
      "nombres":"PACHECO SUELDO ROLANDO DAVID",
      "dni":23829330,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VELAZCO VICENTE",
      "dni":23806198,
      "ieId":""
    },
    {
      "nombres":"PAREDES MEDINA GISELLA MILKA",
      "dni":42172691,
      "ieId":""
    },
    {
      "nombres":"ROBLES TACO CARMEN HERMELINDA",
      "dni":23815040,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SEGOVIA NELIDA",
      "dni":23951293,
      "ieId":""
    },
    {
      "nombres":"VALDEZ CHACON IRMA",
      "dni":44626265,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA MOSCOSO CARMEN LUZ",
      "dni":40946167,
      "ieId":""
    },
    {
      "nombres":"ZELA VERA AIDE",
      "dni":23888450,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS RODRIGUEZ MARIA INDIRA",
      "dni":25001307,
      "ieId":""
    },
    {
      "nombres":"ARAGON POBLETE FERNANDO",
      "dni":23844596,
      "ieId":""
    },
    {
      "nombres":"BACA ESQUIVEL JAIME",
      "dni":23895509,
      "ieId":""
    },
    {
      "nombres":"CALDERON PUMA LAURA VERONICA",
      "dni":41172350,
      "ieId":""
    },
    {
      "nombres":"CASTRO AGUILAR EDWIN",
      "dni":23863932,
      "ieId":""
    },
    {
      "nombres":"CHAMBI CHACOLLI WALTER",
      "dni":40826213,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BARRIOS LUCY",
      "dni":30762644,
      "ieId":""
    },
    {
      "nombres":"MAMANI RIVERA ALEJANDRO ROQUE",
      "dni":1212066,
      "ieId":""
    },
    {
      "nombres":"MILLIO VILCAPAZA FRANCISCO JUAN CARLO",
      "dni":29629157,
      "ieId":""
    },
    {
      "nombres":"MOLINA ZARATE MIRIAM",
      "dni":23929707,
      "ieId":""
    },
    {
      "nombres":"ORTEGA GARCIA DORIS ALEJANDRINA",
      "dni":25208111,
      "ieId":""
    },
    {
      "nombres":"QUISPE PONTESIL JOSE CLAUDIO",
      "dni":24570786,
      "ieId":""
    },
    {
      "nombres":"QUISPE ZUNIGA EXALTACION",
      "dni":23855482,
      "ieId":""
    },
    {
      "nombres":"ROJAS GORVENIA JOSE ERNESTO",
      "dni":41126571,
      "ieId":""
    },
    {
      "nombres":"RUBIO CURAMPA CARLOS JULIO",
      "dni":23948433,
      "ieId":""
    },
    {
      "nombres":"SOLIS SILVA CLAY",
      "dni":23892525,
      "ieId":""
    },
    {
      "nombres":"SULLO CANAZA ORLANDO",
      "dni":1297773,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA CACERES LUZ TANIA",
      "dni":23954011,
      "ieId":""
    },
    {
      "nombres":"ATAMARI CHARCA MARIANO",
      "dni":23881687,
      "ieId":""
    },
    {
      "nombres":"ATAYUPANQUI CHECYA KARINA",
      "dni":44362954,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ ROMERO EDGAR",
      "dni":23937242,
      "ieId":""
    },
    {
      "nombres":"LA TORRE PARI MARIA KARINA",
      "dni":29664821,
      "ieId":""
    },
    {
      "nombres":"LENES TACURI JAIME",
      "dni":23949922,
      "ieId":""
    },
    {
      "nombres":"QUISPE AYQUE CARLOS",
      "dni":23955448,
      "ieId":""
    },
    {
      "nombres":"QUISPE TARACAYA JUAN DE DIOS",
      "dni":31674127,
      "ieId":""
    },
    {
      "nombres":"SEGURA FLORES VICTORIA",
      "dni":23987914,
      "ieId":""
    },
    {
      "nombres":"TAMAYO VEGA ELUZ JACKELIN",
      "dni":41833775,
      "ieId":""
    },
    {
      "nombres":"VARGAS GALIANO ROBERTO",
      "dni":23822388,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA FLORES VICTORIA",
      "dni":23889289,
      "ieId":""
    },
    {
      "nombres":"ARROYO DELGADO EUGENIA",
      "dni":25008714,
      "ieId":""
    },
    {
      "nombres":"CAHUANA GIL MIGUEL ANGEL",
      "dni":25218629,
      "ieId":""
    },
    {
      "nombres":"HUAMANGA GUTIERREZ INDIRA",
      "dni":43286656,
      "ieId":""
    },
    {
      "nombres":"LABRA HUANTO BELEN",
      "dni":23938950,
      "ieId":""
    },
    {
      "nombres":"LARREA ROMERO JULIA",
      "dni":23884705,
      "ieId":""
    },
    {
      "nombres":"LOAIZA LIMA GUIULFO",
      "dni":23891106,
      "ieId":""
    },
    {
      "nombres":"OCHOA CCAHUANA ZANDRA",
      "dni":23959993,
      "ieId":""
    },
    {
      "nombres":"PALACIOS GARCIA DE BENA DENISSE APARICIA",
      "dni":3369987,
      "ieId":""
    },
    {
      "nombres":"PUMA MEJIA EMPERATRIZ",
      "dni":23881825,
      "ieId":""
    },
    {
      "nombres":"QUISPE ESPINOZA NATIVIDAD",
      "dni":25301098,
      "ieId":""
    },
    {
      "nombres":"RIMAYHUAMAN RIMACHI SILVIA",
      "dni":25216685,
      "ieId":""
    },
    {
      "nombres":"SORIA TUERO EDITH ROXANA",
      "dni":23902570,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MEDINA LAURA HORTENSIA",
      "dni":23934432,
      "ieId":""
    },
    {
      "nombres":"CACERES LOAIZA LEON",
      "dni":23902769,
      "ieId":""
    },
    {
      "nombres":"CARREÑO ZARATE LUZ MARINA",
      "dni":23849337,
      "ieId":""
    },
    {
      "nombres":"CARRILLO HUAMANHORQQUE JUANA FRANCISCA",
      "dni":23949187,
      "ieId":""
    },
    {
      "nombres":"CARRILLO MUÑIZ LUIS ALBERTO",
      "dni":24486163,
      "ieId":""
    },
    {
      "nombres":"CHACCA CCOYLLO EMILIA",
      "dni":23955620,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ YAÑEZ WALTER",
      "dni":23917984,
      "ieId":""
    },
    {
      "nombres":"CHOQUETINCO MAMANI SONIA",
      "dni":23921261,
      "ieId":""
    },
    {
      "nombres":"CHUCHULLO ALMANZA ROSMERY",
      "dni":23988376,
      "ieId":""
    },
    {
      "nombres":"CRUZ BECERRA IGNACIO",
      "dni":23905044,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ SOTO ZONIA MAXI",
      "dni":23815067,
      "ieId":""
    },
    {
      "nombres":"GOMEZ RAMIREZ KAREN DIANA",
      "dni":44109556,
      "ieId":""
    },
    {
      "nombres":"LOPEZ ARIAS ISABEL LEONARDA",
      "dni":23832031,
      "ieId":""
    },
    {
      "nombres":"MOREANO ZUÑIGA MARLENI",
      "dni":23894009,
      "ieId":""
    },
    {
      "nombres":"PEZUA NAVARRETE RICARDINA SALOME",
      "dni":23880845,
      "ieId":""
    },
    {
      "nombres":"PEÑA BERRIO WELINTON",
      "dni":31542205,
      "ieId":""
    },
    {
      "nombres":"PORCEL LUNA FERDINAND",
      "dni":23810185,
      "ieId":""
    },
    {
      "nombres":"TAGLE MACEDO NILDA CATALINA",
      "dni":23809847,
      "ieId":""
    },
    {
      "nombres":"VILLAMAR TAPIA GLADIS TERESA",
      "dni":10281060,
      "ieId":""
    },
    {
      "nombres":"AEDO SAMALVIDES ARACELY",
      "dni":45643676,
      "ieId":""
    },
    {
      "nombres":"AIQUIPA PINO CINTIA",
      "dni":44467270,
      "ieId":""
    },
    {
      "nombres":"ARAOZ CHACON JAIME",
      "dni":23960823,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA PINARES CARMEN GRACIELA",
      "dni":23843675,
      "ieId":""
    },
    {
      "nombres":"CANO QUIROGA WILFREDO",
      "dni":24300513,
      "ieId":""
    },
    {
      "nombres":"CARRASCO CABALLERO MARTHA",
      "dni":23923837,
      "ieId":""
    },
    {
      "nombres":"CASAS BRAVO DAYANA MILAGROS",
      "dni":24718274,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CUSIHUAMAN MARISOL",
      "dni":23860905,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CUSIHUAMAN YONI",
      "dni":23857821,
      "ieId":""
    },
    {
      "nombres":"CUARESMA ARISTA JONATHAN FRANCIS",
      "dni":42062637,
      "ieId":""
    },
    {
      "nombres":"CUENTAS QUINTANILLA ANDREA",
      "dni":23921751,
      "ieId":""
    },
    {
      "nombres":"DEL CASTILLO MAROCHO VIVIANA",
      "dni":44511215,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL ALCAMORA MONICA ELIANA",
      "dni":23933492,
      "ieId":""
    },
    {
      "nombres":"GARZON VALLENAS RUTH",
      "dni":40251441,
      "ieId":""
    },
    {
      "nombres":"HUANCA QUIROZ LUIS ELMO",
      "dni":2428611,
      "ieId":""
    },
    {
      "nombres":"HUAROC VARGAS ARTURO AMADEO",
      "dni":23932058,
      "ieId":""
    },
    {
      "nombres":"JALISTO TTITO MARCELINO",
      "dni":25180037,
      "ieId":""
    },
    {
      "nombres":"LAIME TORRES NESTOR CELSO",
      "dni":1544658,
      "ieId":""
    },
    {
      "nombres":"LEIVA VILLAVICENCIO GLADYS",
      "dni":23806932,
      "ieId":""
    },
    {
      "nombres":"LOAIZA CUSIHUALLPA MERCEDES",
      "dni":23962971,
      "ieId":""
    },
    {
      "nombres":"PAREDES PALOMINO ERIC EDWIN",
      "dni":24704696,
      "ieId":""
    },
    {
      "nombres":"PEREZ HUARCAYA EDWIN ENRIQUE",
      "dni":41139012,
      "ieId":""
    },
    {
      "nombres":"PINARES MAMANI RUTH MERY",
      "dni":46059077,
      "ieId":""
    },
    {
      "nombres":"POZO VIVANCO ANGELA",
      "dni":41837253,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONDORI RAUL SANTIAGO",
      "dni":24701836,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ GONZALES SUSANA",
      "dni":23831640,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MERMA HILDA NARCISA",
      "dni":23922311,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MOYA MAGDA EDELMIRA",
      "dni":23805207,
      "ieId":""
    },
    {
      "nombres":"SERRANO CUBA ANTENOR",
      "dni":23921086,
      "ieId":""
    },
    {
      "nombres":"SERRANO GAMARRA PERCY EDUARDO",
      "dni":23886605,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO QUISPE AMERICO",
      "dni":24463688,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI RODRIGUEZ NELLY",
      "dni":23826371,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA CASTILLO ZOILA",
      "dni":23848709,
      "ieId":""
    },
    {
      "nombres":"VARGAS ZAMALLOA MARIA ESTHER",
      "dni":23832044,
      "ieId":""
    },
    {
      "nombres":"VILLARRUEL CALDERON JOSE ARMANDO",
      "dni":42620801,
      "ieId":""
    },
    {
      "nombres":"LA HERMOZA CASTILLO CARMEN ROSA",
      "dni":23820035,
      "ieId":""
    },
    {
      "nombres":"LOAIZA CUSIHUALLPA MARTHA PLACIDA",
      "dni":25301528,
      "ieId":""
    },
    {
      "nombres":"MAMANI SUMERENTE DOMITILA",
      "dni":23830327,
      "ieId":""
    },
    {
      "nombres":"MANSILLA LLAMAC FORTUNATO",
      "dni":25062166,
      "ieId":""
    },
    {
      "nombres":"TACO HINOSTROZA MARIA MAGDALENA",
      "dni":23800262,
      "ieId":""
    },
    {
      "nombres":"YAPO PEREZ NATALIA",
      "dni":23951561,
      "ieId":""
    },
    {
      "nombres":"ARIAS AUCCA WALTER",
      "dni":40786864,
      "ieId":""
    },
    {
      "nombres":"AUCCA PACCO NICOLASA",
      "dni":23941110,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE ARENAZA GUIDO",
      "dni":23960151,
      "ieId":""
    },
    {
      "nombres":"CARDENAS BERNALES URSULA GABRIELA",
      "dni":23862434,
      "ieId":""
    },
    {
      "nombres":"CENTENO ARAGON LUIS",
      "dni":23806199,
      "ieId":""
    },
    {
      "nombres":"CHALCO DE LA CUBA DAVID",
      "dni":23925812,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS LINARES JANETH MIGUELINA",
      "dni":23860627,
      "ieId":""
    },
    {
      "nombres":"FALCONI CHACON DE HUARA VICENTINA",
      "dni":24674576,
      "ieId":""
    },
    {
      "nombres":"GONZALES LOPEZ RENE LEANDRO",
      "dni":42247210,
      "ieId":""
    },
    {
      "nombres":"HALANOCA PUMA RUBEN MANUEL",
      "dni":23817796,
      "ieId":""
    },
    {
      "nombres":"MALDONADO ZEVALLOS FANNY",
      "dni":40514786,
      "ieId":""
    },
    {
      "nombres":"PERALTA CUSIHUALLPA MARUJA",
      "dni":24382249,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ LEZAMA MARTHA ERNESTINA",
      "dni":23935326,
      "ieId":""
    },
    {
      "nombres":"SUYO CHOQUE BETTY",
      "dni":24004998,
      "ieId":""
    },
    {
      "nombres":"TORRES DE PALIZA DOLORES",
      "dni":23897448,
      "ieId":""
    },
    {
      "nombres":"CAMERO CARBONELLI DELFIN IGNACIO",
      "dni":23919599,
      "ieId":""
    },
    {
      "nombres":"CAÑARI LOAIZA YANET ALEIDA",
      "dni":23995916,
      "ieId":""
    },
    {
      "nombres":"CUENTAS SALAS JAIME",
      "dni":23947196,
      "ieId":""
    },
    {
      "nombres":"DELGADO GALINDO EDER",
      "dni":43630839,
      "ieId":""
    },
    {
      "nombres":"GUZMAN VILLAFUERTE EUGENIA ROSA",
      "dni":23864833,
      "ieId":""
    },
    {
      "nombres":"NAYHUA VIZA ENRRIQUETA JULIA",
      "dni":23893193,
      "ieId":""
    },
    {
      "nombres":"TORRES LARICO JAIME",
      "dni":2432330,
      "ieId":""
    },
    {
      "nombres":"YABAR DEL MAR WAGNER",
      "dni":41060742,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS FLORES DESIRE",
      "dni":29415230,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ MEJIA HONORATA",
      "dni":25186935,
      "ieId":""
    },
    {
      "nombres":"HUAMAN AFAN RITA",
      "dni":23806110,
      "ieId":""
    },
    {
      "nombres":"PRADA ORUE LUZ JULIA",
      "dni":23889685,
      "ieId":""
    },
    {
      "nombres":"SINCHI ROCA TUPAC YUPAN ASCENCION",
      "dni":23891646,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS ESPINOZA MARIO",
      "dni":23957165,
      "ieId":""
    },
    {
      "nombres":"ÑAHUI CUELA CELIA",
      "dni":24700211,
      "ieId":""
    },
    {
      "nombres":"ACUÑA ATAUCURI RENE PORTUGAL",
      "dni":23910699,
      "ieId":""
    },
    {
      "nombres":"PERALTA CASTANEDA ALFONSO SANTIAGO",
      "dni":23846291,
      "ieId":""
    },
    {
      "nombres":"BEJAR FUENTES ROSARIO DEL PILAR",
      "dni":23959653,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ QUISPE ELIANA",
      "dni":23865889,
      "ieId":""
    },
    {
      "nombres":"HUAMANI PORTOGENO MARIANO MERCEDES",
      "dni":23890496,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ EGUILETA FELIX",
      "dni":25197244,
      "ieId":""
    },
    {
      "nombres":"ROMAN MORA JORGE AMERICO",
      "dni":23876140,
      "ieId":""
    },
    {
      "nombres":"TUNQUI SIKOS EDGAR",
      "dni":23933741,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUISPE JOSE ALEJANDRO",
      "dni":23922305,
      "ieId":""
    },
    {
      "nombres":"VARGAS SANCHEZ CELSO NAZARIO",
      "dni":23894618,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VERA ROSSY VERONICA",
      "dni":29609144,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ESPINOZA GLADIS",
      "dni":23955136,
      "ieId":""
    },
    {
      "nombres":"JORDAN BACA HILDA",
      "dni":25181659,
      "ieId":""
    },
    {
      "nombres":"BECERRA QUISPE CLAUDIO AUGUSTO",
      "dni":23816650,
      "ieId":""
    },
    {
      "nombres":"CALDERON QUISPE CESAR GABINO",
      "dni":24674903,
      "ieId":""
    },
    {
      "nombres":"CRUZ VITORINO LEOPOLDO",
      "dni":23813919,
      "ieId":""
    },
    {
      "nombres":"DURAN SAIRE PATRICIA MANUELA",
      "dni":25829716,
      "ieId":""
    },
    {
      "nombres":"ESTRADA CALDERON VICENTE VIRGILIO",
      "dni":23992911,
      "ieId":""
    },
    {
      "nombres":"PEÑALOZA HUAMANHORQQUE RAUL",
      "dni":23805366,
      "ieId":""
    },
    {
      "nombres":"USCA DE ROJAS ANTONIA",
      "dni":23892603,
      "ieId":""
    },
    {
      "nombres":"AGUILAR HUGUES JUREMA",
      "dni":24703819,
      "ieId":""
    },
    {
      "nombres":"APAZA SARA FELIX",
      "dni":23876346,
      "ieId":""
    },
    {
      "nombres":"BECERRA CACERES ALIDA",
      "dni":23961921,
      "ieId":""
    },
    {
      "nombres":"CACERES PALOMINO ANTONIO",
      "dni":23802080,
      "ieId":""
    },
    {
      "nombres":"CAVERO CATALAN GLADIS",
      "dni":23937635,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS FLOREZ KATIA MARLENE",
      "dni":23840152,
      "ieId":""
    },
    {
      "nombres":"DONGO CACERES MIGUEL ANGEL",
      "dni":23931099,
      "ieId":""
    },
    {
      "nombres":"FLOREZ VALENZA ORIETA",
      "dni":23859512,
      "ieId":""
    },
    {
      "nombres":"HUAMAN AYRAMPO EDITH",
      "dni":23950019,
      "ieId":""
    },
    {
      "nombres":"LATORRE VALENZA MARIA LUZ",
      "dni":23846928,
      "ieId":""
    },
    {
      "nombres":"LAURA QUISPE ELMER",
      "dni":2411318,
      "ieId":""
    },
    {
      "nombres":"LOVON DIAZ RUTH",
      "dni":23947459,
      "ieId":""
    },
    {
      "nombres":"MAMANI RODRIGUEZ ALEJANDRINA YOLANDA",
      "dni":23823484,
      "ieId":""
    },
    {
      "nombres":"MEDINA GUZMAN REGINALDA",
      "dni":23975713,
      "ieId":""
    },
    {
      "nombres":"MIRANDA LOAYZA HUGO TOMAS",
      "dni":23809523,
      "ieId":""
    },
    {
      "nombres":"MIRANDA LOAYZA JUAN NELSON",
      "dni":23801952,
      "ieId":""
    },
    {
      "nombres":"QUISPE GONZALES LUZ MARINA",
      "dni":23840793,
      "ieId":""
    },
    {
      "nombres":"RECHARTE YAÑEZ LEONOR",
      "dni":23880149,
      "ieId":""
    },
    {
      "nombres":"ROMAN SERRANO JORGE",
      "dni":23895013,
      "ieId":""
    },
    {
      "nombres":"VALENCIA OLIVERA AUSMENIA",
      "dni":23894370,
      "ieId":""
    },
    {
      "nombres":"CANO ARAOZ AVELINA AIDEE",
      "dni":23852119,
      "ieId":""
    },
    {
      "nombres":"VALER GARCIA ENITH HELGA",
      "dni":46383095,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE PINO JHOYSSE ALINA",
      "dni":23894318,
      "ieId":""
    },
    {
      "nombres":"MAMANI PAZO HILARIA",
      "dni":23943351,
      "ieId":""
    },
    {
      "nombres":"CALANCHE AMACHE GUILLERMINA",
      "dni":23959442,
      "ieId":""
    },
    {
      "nombres":"FOLLANOS CASTILLO PAULINA",
      "dni":23805131,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ACHAHUI JACKLIN",
      "dni":40111735,
      "ieId":""
    },
    {
      "nombres":"PILLACA HUGO REGINA CONSTANTINA",
      "dni":42424568,
      "ieId":""
    },
    {
      "nombres":"RAMOS LOPEZ MARIA LUISA",
      "dni":23805925,
      "ieId":""
    },
    {
      "nombres":"YANQUE TORRES ELI ANTONIETA",
      "dni":23871759,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR FLORES GREGOBER",
      "dni":41597351,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR MORENO ROY JOSE",
      "dni":25321368,
      "ieId":""
    },
    {
      "nombres":"JORGE CHAMAN MARLENY",
      "dni":23955579,
      "ieId":""
    },
    {
      "nombres":"SOTO GARCIA BETTY",
      "dni":42148696,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO CHACALLA MARIVEL",
      "dni":23989975,
      "ieId":""
    },
    {
      "nombres":"CALDERON HILARIO SATURNINO TEOFILO",
      "dni":23896026,
      "ieId":""
    },
    {
      "nombres":"CHAPARRO FERREL ELIZABETH",
      "dni":31521816,
      "ieId":""
    },
    {
      "nombres":"GUIZADO CARRASCO TIMOTEO",
      "dni":23845601,
      "ieId":""
    },
    {
      "nombres":"FELIX TAPIA FANNY",
      "dni":31031849,
      "ieId":""
    },
    {
      "nombres":"LETONA ALFARO NIDIA OFELIA",
      "dni":23839057,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ PAREDES JHON ANDRES",
      "dni":23927110,
      "ieId":""
    },
    {
      "nombres":"RAMOS PAUCAR MARIA DEL CARMEN",
      "dni":40612075,
      "ieId":""
    },
    {
      "nombres":"VALENCIA UGARTE EVA LUZ",
      "dni":23836946,
      "ieId":""
    },
    {
      "nombres":"ZARATE RIVAS ROCIO",
      "dni":23884199,
      "ieId":""
    },
    {
      "nombres":"ENCISO RIOS ABELINO",
      "dni":24476697,
      "ieId":""
    },
    {
      "nombres":"FLORES MUÑOZ MARIA TERESA",
      "dni":23871020,
      "ieId":""
    },
    {
      "nombres":"PEÑA CARDENAS MARITZA",
      "dni":24486249,
      "ieId":""
    },
    {
      "nombres":"RAVELO QUISPE DE OCHOA LUZ MARINA",
      "dni":25319408,
      "ieId":""
    },
    {
      "nombres":"CALLO ESPIRILLA HERMENEGILDO",
      "dni":24565382,
      "ieId":"jyRjzmtXGjL2MLKaA"
    },
    {
      "nombres":"MESCCO NINA JUAN CARLOS",
      "dni":41585603,
      "ieId":"jyRjzmtXGjL2MLKaA"
    },
    {
      "nombres":"SANCHEZ AIRAMPO WILBERT",
      "dni":25321179,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ FERRO CESAR",
      "dni":24485769,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA RODRIGUEZ PATRICIA",
      "dni":25002704,
      "ieId":""
    },
    {
      "nombres":"HERMOZA LIRA JULIO",
      "dni":24460267,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHOQUE MARIA ELENA",
      "dni":40125388,
      "ieId":""
    },
    {
      "nombres":"ABAL VELARDE GLADIS",
      "dni":23930344,
      "ieId":""
    },
    {
      "nombres":"CASTILLO LOPEZ DINA HERMINIA",
      "dni":25184165,
      "ieId":""
    },
    {
      "nombres":"CORNEJO DEL CARPIO AMANDA",
      "dni":23921217,
      "ieId":""
    },
    {
      "nombres":"DEL POZO CRUZ RONALD",
      "dni":25320372,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA VILLALOBOS LUZMILA",
      "dni":23990854,
      "ieId":""
    },
    {
      "nombres":"HERMOZA HUARSAYA RUTH",
      "dni":23807617,
      "ieId":""
    },
    {
      "nombres":"MORA BARRIENTOS WILBER",
      "dni":24487925,
      "ieId":""
    },
    {
      "nombres":"MORA LLANOS JULIO LEANDRO",
      "dni":25319143,
      "ieId":""
    },
    {
      "nombres":"PEZO DIAZ APOLINARIA",
      "dni":24470350,
      "ieId":""
    },
    {
      "nombres":"LEGUIA PACHECO HERLINDA",
      "dni":9649873,
      "ieId":""
    },
    {
      "nombres":"HALLASI FERREL GIOVANA",
      "dni":23854490,
      "ieId":""
    },
    {
      "nombres":"GIBAJA MEZA CIRO LEONET",
      "dni":25317001,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ OVALLE RUTH NAIDA",
      "dni":44268836,
      "ieId":""
    },
    {
      "nombres":"LIMPE RAMOS RAMIRO",
      "dni":31020240,
      "ieId":""
    },
    {
      "nombres":"ARAGON LOAYZA MARUJA",
      "dni":23884348,
      "ieId":""
    },
    {
      "nombres":"CANDIA VARGAS NORA",
      "dni":23940711,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ QUINTANILLA NORMA EDMILA",
      "dni":23922239,
      "ieId":""
    },
    {
      "nombres":"CURASI LIMA LUCIANO",
      "dni":23888743,
      "ieId":""
    },
    {
      "nombres":"DIAZ BACA ROBERTO",
      "dni":41638383,
      "ieId":""
    },
    {
      "nombres":"FUENTES GONZALES EVARISTO",
      "dni":23871647,
      "ieId":""
    },
    {
      "nombres":"HURTADO QUISPE ROSA MARIA",
      "dni":23838035,
      "ieId":""
    },
    {
      "nombres":"ILLANES QUISPE MIGUEL ANGEL",
      "dni":24706083,
      "ieId":""
    },
    {
      "nombres":"JARA GARCIA JORGE LUIS",
      "dni":80482584,
      "ieId":""
    },
    {
      "nombres":"MAYHUIRE VALENCIA NILDA",
      "dni":24990931,
      "ieId":""
    },
    {
      "nombres":"MEJIA PEREZ WILER",
      "dni":2266867,
      "ieId":""
    },
    {
      "nombres":"OROZ MARQUEZ SONIA RAQUEL",
      "dni":23925185,
      "ieId":""
    },
    {
      "nombres":"OVIEDO MENDOZA RICHARD",
      "dni":29625187,
      "ieId":""
    },
    {
      "nombres":"PUMA PUMA VICENTINA",
      "dni":25003767,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONTRERAS JUSTINO",
      "dni":23903828,
      "ieId":""
    },
    {
      "nombres":"QUIÑONEZ NINA PEDRO FREDY",
      "dni":45236950,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ CACERES FRANCISCO",
      "dni":1683146,
      "ieId":""
    },
    {
      "nombres":"CACYA APAZA JHON DANILO",
      "dni":45744526,
      "ieId":""
    },
    {
      "nombres":"GONZALES BACA CARLA ELIANA",
      "dni":23997142,
      "ieId":""
    },
    {
      "nombres":"ORTIZ FLORES EDGAR JULIAN",
      "dni":23845015,
      "ieId":""
    },
    {
      "nombres":"QUEHUARUCHO RAMIREZ MARLENE ASCENCIA",
      "dni":23825728,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALAGON EMILIO",
      "dni":23830316,
      "ieId":""
    },
    {
      "nombres":"SOTO GUILLEN RONAL",
      "dni":44735246,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA GARRAFA FIDYS",
      "dni":23993502,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE GALLEGOS YODNA",
      "dni":42099894,
      "ieId":""
    },
    {
      "nombres":"APAZA GARRIDO SONIA ESTELA",
      "dni":23934120,
      "ieId":""
    },
    {
      "nombres":"ARAPA ZUÑIGA GLENDY DORIS",
      "dni":42323111,
      "ieId":""
    },
    {
      "nombres":"ATAMARI CONDORI JOSE ANGEL",
      "dni":43124553,
      "ieId":""
    },
    {
      "nombres":"CHIPANA ARIAS VICTOR",
      "dni":46392912,
      "ieId":""
    },
    {
      "nombres":"DIAZ TARQUI ROGER ALONZO",
      "dni":42356217,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS LATORRE MITCHAEL",
      "dni":43405672,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MUELLE JULIA AURORA",
      "dni":23825830,
      "ieId":""
    },
    {
      "nombres":"NAVIA MIRANDA JOSE VICTOR",
      "dni":24805906,
      "ieId":""
    },
    {
      "nombres":"PUMACCAHUA ARANA ANA MARIA",
      "dni":23952634,
      "ieId":""
    },
    {
      "nombres":"QUISPE CRUZ LUZ MARINA",
      "dni":23948921,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI GLADYS LEONOR",
      "dni":23944417,
      "ieId":""
    },
    {
      "nombres":"SUTTA ESCOBAR MARIA LUISA",
      "dni":23954402,
      "ieId":""
    },
    {
      "nombres":"YABAR AMESQUITA LARISA",
      "dni":41212444,
      "ieId":""
    },
    {
      "nombres":"YUNGURI CARPIO WEMER",
      "dni":40895121,
      "ieId":""
    },
    {
      "nombres":"CALVO MATAMET SALOME NELLY",
      "dni":23931160,
      "ieId":""
    },
    {
      "nombres":"CATALAN HILARES JAVIER",
      "dni":23851061,
      "ieId":""
    },
    {
      "nombres":"CCOPA QUISPE EULALIO",
      "dni":10676766,
      "ieId":""
    },
    {
      "nombres":"CONDORI CHUNCHO CIRILO JAVIER",
      "dni":23940280,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAYLLAPUMA GENARO",
      "dni":24479503,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR QUISPE CELESTINA",
      "dni":23844433,
      "ieId":""
    },
    {
      "nombres":"QUISPE JIMENEZ DAVID",
      "dni":23966826,
      "ieId":""
    },
    {
      "nombres":"RAMON PAREDES ISIDORA",
      "dni":23954673,
      "ieId":""
    },
    {
      "nombres":"SILVA CANAL BRIGIDA",
      "dni":23826006,
      "ieId":""
    },
    {
      "nombres":"INCA SINTI MARIBEL",
      "dni":40844517,
      "ieId":""
    },
    {
      "nombres":"NINA SALAZAR NERY BENILDA",
      "dni":40473074,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ RODRIGUEZ IRIS",
      "dni":40531611,
      "ieId":""
    },
    {
      "nombres":"APANCHO ROQUE GRICELDA",
      "dni":42048065,
      "ieId":""
    },
    {
      "nombres":"DELGADO NUÑEZ EVA YESICA",
      "dni":24487157,
      "ieId":""
    },
    {
      "nombres":"DIAZ RIMACHI SILVIA",
      "dni":43270831,
      "ieId":""
    },
    {
      "nombres":"JOYAS CARPIO HILDA",
      "dni":23995896,
      "ieId":""
    },
    {
      "nombres":"MAMANI CANAZA FELIZA NINFA",
      "dni":1560062,
      "ieId":""
    },
    {
      "nombres":"VILCA CHOQUE CLAUDIA LUCIA",
      "dni":43332380,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS RUIZ YASSEFA MARLENE",
      "dni":28317326,
      "ieId":""
    },
    {
      "nombres":"HANCCO HUANCA MARUJA",
      "dni":42152122,
      "ieId":""
    },
    {
      "nombres":"LINARES APARICIO LITH",
      "dni":24718509,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCASO ALICIA",
      "dni":23926736,
      "ieId":""
    },
    {
      "nombres":"CACERES MAYTA MARIA JESUS UNI",
      "dni":44764070,
      "ieId":""
    },
    {
      "nombres":"HANCCO TUPA MAURO",
      "dni":43405625,
      "ieId":""
    },
    {
      "nombres":"TECSI CAYULLA MARINA",
      "dni":80151985,
      "ieId":""
    },
    {
      "nombres":"CHINO HUILLCA ELENA",
      "dni":40234590,
      "ieId":""
    },
    {
      "nombres":"BERMUDO FIDEL JANET MONICA",
      "dni":40769295,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE ROLANDO",
      "dni":42502351,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ FLORES HAIDE",
      "dni":44198165,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA FLOREZ LOUDES",
      "dni":9324858,
      "ieId":""
    },
    {
      "nombres":"CACERES MAMANI ROSALINDA",
      "dni":43608908,
      "ieId":""
    },
    {
      "nombres":"ITUSACA CANAZA IVAN",
      "dni":42814890,
      "ieId":""
    },
    {
      "nombres":"CAHUASCANCO MONTALVO EVERTH",
      "dni":44503436,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHAUCAYANQUI SUSANA ROSA",
      "dni":30766895,
      "ieId":""
    },
    {
      "nombres":"LLALLIRE CUAREZ VICTOR",
      "dni":43514958,
      "ieId":""
    },
    {
      "nombres":"BOLIVAR LOAYZA SAYDA",
      "dni":42350871,
      "ieId":""
    },
    {
      "nombres":"SUCA CESPEDES VICTORIA",
      "dni":40879614,
      "ieId":""
    },
    {
      "nombres":"VARGAS BARBOZA BEATY CUYANY",
      "dni":43419052,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCANAHUIRE SULMA",
      "dni":42475896,
      "ieId":""
    },
    {
      "nombres":"CAMPO PFUYO ELIANA",
      "dni":45529481,
      "ieId":""
    },
    {
      "nombres":"MEDRANO JURAHUA MARIA LUZ",
      "dni":40398335,
      "ieId":""
    },
    {
      "nombres":"SALAS GARCIA TIMOTEO",
      "dni":43850199,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES GUZMAN MARISA",
      "dni":23979253,
      "ieId":""
    },
    {
      "nombres":"CHAMBI HUANACO VANESSA",
      "dni":46150088,
      "ieId":""
    },
    {
      "nombres":"HUACHACA CCACHA HILDEBRANDT FELIMON",
      "dni":41814073,
      "ieId":""
    },
    {
      "nombres":"QUISPE CURO NICOLAS LEON",
      "dni":42782892,
      "ieId":""
    },
    {
      "nombres":"PARIONA NAVARRO ENRRIQUE",
      "dni":42249931,
      "ieId":""
    },
    {
      "nombres":"TORRES MOREIRA GIOVANA",
      "dni":28605499,
      "ieId":""
    },
    {
      "nombres":"KENTE BECE AUGUSTA",
      "dni":24360864,
      "ieId":""
    },
    {
      "nombres":"HUICAÑA QUISPE VICTORIA",
      "dni":42236575,
      "ieId":""
    },
    {
      "nombres":"BANDA NINA CLEMENTE",
      "dni":24570674,
      "ieId":""
    },
    {
      "nombres":"ATAU NINAHUILLCA TEOFILO",
      "dni":40131230,
      "ieId":""
    },
    {
      "nombres":"GUILLEN QUISPE OSCAR",
      "dni":24719391,
      "ieId":""
    },
    {
      "nombres":"PAQUIYAURI PALOMINO ALFREDO",
      "dni":41248335,
      "ieId":""
    },
    {
      "nombres":"PUMA SANTA CRUZ ROCIO",
      "dni":24002260,
      "ieId":""
    },
    {
      "nombres":"CUETO DE LA CRUZ JAVIER HILBER",
      "dni":42241105,
      "ieId":""
    },
    {
      "nombres":"TACA TACA PATRICIA",
      "dni":42073220,
      "ieId":""
    },
    {
      "nombres":"PEÑA TTITO YRINUSKA",
      "dni":42324382,
      "ieId":""
    },
    {
      "nombres":"HUAMANTTUPA MAMANI KARINA",
      "dni":40701788,
      "ieId":""
    },
    {
      "nombres":"PEÑA SOTOMAYOR REYDER",
      "dni":42810043,
      "ieId":""
    },
    {
      "nombres":"CABEZAS PAREDES NELVA",
      "dni":40858570,
      "ieId":""
    },
    {
      "nombres":"ENCISO GASTELU RAUL",
      "dni":10466301,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS ANAYA ANSELMA",
      "dni":23915795,
      "ieId":""
    },
    {
      "nombres":"ALCA VELARDE JUAN",
      "dni":10498980,
      "ieId":""
    },
    {
      "nombres":"ARENAS FIGUEROA MARCIA",
      "dni":40139243,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI CALLAÑAUPA NELLY",
      "dni":40852352,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS AGUILAR ISAIAS",
      "dni":24003201,
      "ieId":""
    },
    {
      "nombres":"CCORAHUA QUISPE NANCY",
      "dni":40952406,
      "ieId":""
    },
    {
      "nombres":"DE LA CRUZ PALOMINO SONIA",
      "dni":40069006,
      "ieId":""
    },
    {
      "nombres":"DELGADO OTAZU LASTENIA",
      "dni":25321544,
      "ieId":""
    },
    {
      "nombres":"LLALLA SINTI ARDILES",
      "dni":43008569,
      "ieId":""
    },
    {
      "nombres":"PRADO YACE FELICITAS",
      "dni":28575579,
      "ieId":""
    },
    {
      "nombres":"QUISPE PUCHO JHON WILBERT",
      "dni":24721603,
      "ieId":""
    },
    {
      "nombres":"TICONA ROCA JACQUELINE ROSEMARIE",
      "dni":29707204,
      "ieId":""
    },
    {
      "nombres":"URBANO MENDEZ LUZ NERIDA",
      "dni":40724595,
      "ieId":""
    },
    {
      "nombres":"MAMANI AUCCACUSI TORIBIO",
      "dni":24489009,
      "ieId":""
    },
    {
      "nombres":"COMPERITO DELGADILLO FILOMENO CERAPIO",
      "dni":25016282,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ RICRA ESTEFANIA",
      "dni":40863736,
      "ieId":""
    },
    {
      "nombres":"ÑAUPA LOAIZA ELIZABETH",
      "dni":23944811,
      "ieId":""
    },
    {
      "nombres":"DUQUE GARCIA MAGDALY MILAGROS",
      "dni":41887511,
      "ieId":""
    },
    {
      "nombres":"VEGA ÑAHUI SANDRO",
      "dni":40329151,
      "ieId":""
    },
    {
      "nombres":"SONCCO MAXI JUAN JOSE",
      "dni":41502958,
      "ieId":""
    },
    {
      "nombres":"ANYOZA ASTUCURI MARIA",
      "dni":9239991,
      "ieId":""
    },
    {
      "nombres":"JALISTO TTITO MARTHA",
      "dni":80561206,
      "ieId":""
    },
    {
      "nombres":"MEZA CHARAJA MOISES",
      "dni":24709829,
      "ieId":""
    },
    {
      "nombres":"CHIRE UGARTE HAYDEE",
      "dni":24391028,
      "ieId":""
    },
    {
      "nombres":"QUISPE SENCIA ANGELICA",
      "dni":41380977,
      "ieId":""
    },
    {
      "nombres":"LEGUIA ROMAN BASILIO",
      "dni":41386461,
      "ieId":""
    },
    {
      "nombres":"PANTIA HUAMAN MARISELA",
      "dni":41852728,
      "ieId":""
    },
    {
      "nombres":"LEON MANGO TOMAS",
      "dni":40546647,
      "ieId":""
    },
    {
      "nombres":"CABRERA RICSE DARIO SEVERO",
      "dni":9955603,
      "ieId":""
    },
    {
      "nombres":"CASTILLO ZARATE RICHAR",
      "dni":43326651,
      "ieId":""
    },
    {
      "nombres":"HUILLCA HURTADO ROSALIA",
      "dni":30834041,
      "ieId":""
    },
    {
      "nombres":"LLALLIRE CUSI MARDONIA FELICITAS",
      "dni":28305305,
      "ieId":""
    },
    {
      "nombres":"PABLO ORIHUELA NOHELIA",
      "dni":44476992,
      "ieId":""
    },
    {
      "nombres":"SULLCARANI FLOREZ ARNANDO",
      "dni":24585799,
      "ieId":""
    },
    {
      "nombres":"VARGAS PEREZ GABRIELA",
      "dni":28317434,
      "ieId":""
    },
    {
      "nombres":"VICAÑA PACHECO KENNI NAY",
      "dni":47483094,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ TITO RAUL RENE",
      "dni":1327484,
      "ieId":""
    },
    {
      "nombres":"BENDEZU PEREZ MIGUEL",
      "dni":43728473,
      "ieId":""
    },
    {
      "nombres":"CHARALLA SALAZAR MARIA MARUJA",
      "dni":23979289,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA PINTO JUAN ALBERTO",
      "dni":29333646,
      "ieId":""
    },
    {
      "nombres":"GONZALES NUÑEZ VICTOR",
      "dni":23820739,
      "ieId":""
    },
    {
      "nombres":"HUERTAS MORAN WILMER ANTONIO",
      "dni":2768874,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI TEOFILO EUDES",
      "dni":80191139,
      "ieId":""
    },
    {
      "nombres":"SAMATA MACEDO JHON JOSUE",
      "dni":70274339,
      "ieId":""
    },
    {
      "nombres":"VALENCIA TOLA EDITH",
      "dni":21554368,
      "ieId":""
    },
    {
      "nombres":"AG?ERO MENDEZ SANDRA SULEMA",
      "dni":9372993,
      "ieId":""
    },
    {
      "nombres":"APAZA CHAMORRO MARLENY",
      "dni":2416124,
      "ieId":""
    },
    {
      "nombres":"CRUZ SANCHEZ JAVIER",
      "dni":28243246,
      "ieId":""
    },
    {
      "nombres":"MONTALVO CASTILLO RAUL BRUNO",
      "dni":24717651,
      "ieId":""
    },
    {
      "nombres":"PEREA ANGULO LUIS ALBERTO",
      "dni":40476113,
      "ieId":""
    },
    {
      "nombres":"RENGIFO DEL AGUILA ANTONIA",
      "dni":42159961,
      "ieId":""
    },
    {
      "nombres":"YTUSACA MAMANI ELOY",
      "dni":1326384,
      "ieId":""
    },
    {
      "nombres":"ZENTENO ESPIRITU RUBEN",
      "dni":20093466,
      "ieId":""
    },
    {
      "nombres":"CRUZ QUISPE JOSE LUIS",
      "dni":24710374,
      "ieId":""
    },
    {
      "nombres":"GONZALES ANDIA DIONISIA",
      "dni":24714043,
      "ieId":""
    },
    {
      "nombres":"LUQUE TTITO PERSY",
      "dni":23971646,
      "ieId":""
    },
    {
      "nombres":"MOLINA ESCOBEDO HAYDEE MONICA",
      "dni":23961850,
      "ieId":""
    },
    {
      "nombres":"ORE ANGULO GADY",
      "dni":41133708,
      "ieId":""
    },
    {
      "nombres":"RAMOS CASTILLA JUAN",
      "dni":23941287,
      "ieId":""
    },
    {
      "nombres":"SUCARI BELARDE EUGENIO",
      "dni":1561151,
      "ieId":""
    },
    {
      "nombres":"APAZA CHAMORRO LUZ YANETH",
      "dni":40316985,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ RAYMUNDEZ VICTOR",
      "dni":41054879,
      "ieId":""
    },
    {
      "nombres":"CHOQUE GIL JUAN MANUEL",
      "dni":80625284,
      "ieId":""
    },
    {
      "nombres":"CRESES TORRES RONAL",
      "dni":44739184,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CACERES NORMA",
      "dni":43519704,
      "ieId":""
    },
    {
      "nombres":"HUAMANI HILARIO ABELINO",
      "dni":41910982,
      "ieId":""
    },
    {
      "nombres":"MENDOZA PALOMINO EDGAR",
      "dni":28317067,
      "ieId":""
    },
    {
      "nombres":"QUISPE MENDOZA RAUL",
      "dni":24714123,
      "ieId":""
    },
    {
      "nombres":"QUISPE ZAPANA ANDRES AVELINO",
      "dni":30838705,
      "ieId":""
    },
    {
      "nombres":"SONCCO APAZA ANGELICA",
      "dni":23980137,
      "ieId":""
    },
    {
      "nombres":"ACOSTA POLANCO FELIX ABEL",
      "dni":7927317,
      "ieId":""
    },
    {
      "nombres":"BACA MORA RAUL",
      "dni":43168368,
      "ieId":""
    },
    {
      "nombres":"CCALLO QUISPE RAMON JUAN",
      "dni":24705225,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ LOAYZA PEDRO RAMON",
      "dni":40821581,
      "ieId":""
    },
    {
      "nombres":"HUAÑAHUI SILLOCCA JULIO",
      "dni":23941129,
      "ieId":""
    },
    {
      "nombres":"MAURTUA LEDESMA VIVIANA MARLENE",
      "dni":28298903,
      "ieId":""
    },
    {
      "nombres":"MORALES ARCOS DILSON",
      "dni":43187876,
      "ieId":""
    },
    {
      "nombres":"NUÑONCA ESPINAL SANDRA",
      "dni":40567255,
      "ieId":""
    },
    {
      "nombres":"OBREGON QUINCHO AUREA",
      "dni":45610965,
      "ieId":""
    },
    {
      "nombres":"PUMA CANSAYA DANI LUIS",
      "dni":45205573,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ OQUENDO LUIS ALBERTO",
      "dni":41113500,
      "ieId":""
    },
    {
      "nombres":"CANO QUISPE SANTOS",
      "dni":42543630,
      "ieId":""
    },
    {
      "nombres":"INCARROCA QUISPE DIONICIO",
      "dni":41368274,
      "ieId":""
    },
    {
      "nombres":"MOLLO SURCO CIRILA",
      "dni":23913852,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCOA BETSI",
      "dni":41657276,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHAMBI HERMELINDA",
      "dni":2436690,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ FLORES VIRGINIA",
      "dni":44268828,
      "ieId":""
    },
    {
      "nombres":"VILCA MANSILLA DAVID",
      "dni":40986794,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO DE LA CRUZ YENY",
      "dni":41196305,
      "ieId":""
    },
    {
      "nombres":"CONDORI HUALLA EUSEBIO",
      "dni":41895315,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR HUILLCA ROLANDO",
      "dni":25002514,
      "ieId":""
    },
    {
      "nombres":"HERRERAS VILCATOMA AURORA",
      "dni":28314665,
      "ieId":""
    },
    {
      "nombres":"AMIQUERO YAROS RUBEN ELIPIO",
      "dni":43136771,
      "ieId":""
    },
    {
      "nombres":"CORREA MEDINA LUIS ANTONIO",
      "dni":40142356,
      "ieId":""
    },
    {
      "nombres":"DOLORIER QUISPE WALTER",
      "dni":22276874,
      "ieId":""
    },
    {
      "nombres":"HUALLPA SOSA JAVIER",
      "dni":40136564,
      "ieId":""
    },
    {
      "nombres":"MORI GARCIA LUZFILDA",
      "dni":75336,
      "ieId":""
    },
    {
      "nombres":"PINEDA AQUINO BETY",
      "dni":41583825,
      "ieId":""
    },
    {
      "nombres":"VILCA ALVARO JUANA",
      "dni":44667427,
      "ieId":""
    },
    {
      "nombres":"PILARES ROJAS NICOLAS",
      "dni":24679674,
      "ieId":""
    },
    {
      "nombres":"POMA SOTO NESCAR",
      "dni":80677427,
      "ieId":""
    },
    {
      "nombres":"ALCCACUNTOR OLIVERA GRELIA MERCEDES",
      "dni":45975427,
      "ieId":""
    },
    {
      "nombres":"APAZA BOZA JULIA BERTHA",
      "dni":40129529,
      "ieId":""
    },
    {
      "nombres":"CHARCA ESCOBAR GLORIA ISABEL",
      "dni":40050863,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CUNTO LUCHO",
      "dni":42338014,
      "ieId":""
    },
    {
      "nombres":"FLOREZ DELGADO JIOVANA",
      "dni":24706647,
      "ieId":""
    },
    {
      "nombres":"MEZA HUALLPARIMACHI SOLEDAD",
      "dni":42562529,
      "ieId":""
    },
    {
      "nombres":"BEDIA SINGONA MARIZOL",
      "dni":24001837,
      "ieId":""
    },
    {
      "nombres":"LUQUE MAMANI PATRICIA MEINER",
      "dni":41859819,
      "ieId":""
    },
    {
      "nombres":"MALLQUI GARCIA YUDIT ROXANA",
      "dni":44479032,
      "ieId":""
    },
    {
      "nombres":"CAHUANA JALLO RAUL",
      "dni":24712958,
      "ieId":""
    },
    {
      "nombres":"HUAMAN JIMENEZ IRENE SANDRA",
      "dni":23943825,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE MARIA JOAQUINA",
      "dni":41360699,
      "ieId":""
    },
    {
      "nombres":"SUBIETA HUAMAN ROSA EUFEMIA",
      "dni":40289800,
      "ieId":""
    },
    {
      "nombres":"LAZARO ALVARADO MAGALI",
      "dni":10328775,
      "ieId":""
    },
    {
      "nombres":"LOZANO MAMANI VILMA",
      "dni":24706311,
      "ieId":""
    },
    {
      "nombres":"CARRION PALOMINO DEYSI",
      "dni":41610571,
      "ieId":""
    },
    {
      "nombres":"CORBACHO COVARRUBIAS JESSICA",
      "dni":25326208,
      "ieId":""
    },
    {
      "nombres":"TAPARA KALA FAUSTINO",
      "dni":24705215,
      "ieId":""
    },
    {
      "nombres":"PACHECO FIGUEROA JULIA LILIANA",
      "dni":24282241,
      "ieId":""
    },
    {
      "nombres":"VILLA HUILLCA JUAN NESTOR",
      "dni":41400715,
      "ieId":""
    },
    {
      "nombres":"PUMA VEGA MARIA JESUS",
      "dni":43612539,
      "ieId":""
    },
    {
      "nombres":"MAMANI MENDOZA MIRIAN",
      "dni":24718175,
      "ieId":""
    },
    {
      "nombres":"RONDAN AYBAR NOHEMI TOMASA",
      "dni":23929397,
      "ieId":""
    },
    {
      "nombres":"GAMBOA MENDOZA MERCEDES",
      "dni":41215184,
      "ieId":""
    },
    {
      "nombres":"QUISPE AMARU KATY",
      "dni":45394565,
      "ieId":""
    },
    {
      "nombres":"COYLA COLQUEHUANCA FIDELA",
      "dni":2167076,
      "ieId":""
    },
    {
      "nombres":"RUA GOZME KARINA",
      "dni":40697148,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAMAN FREDY",
      "dni":40218817,
      "ieId":""
    },
    {
      "nombres":"TACO MENESES GLORIA",
      "dni":43382261,
      "ieId":""
    },
    {
      "nombres":"TINEO QUISPE EDITH",
      "dni":43154339,
      "ieId":""
    },
    {
      "nombres":"TTITO SULLCA ABEL ODILON",
      "dni":43209296,
      "ieId":""
    },
    {
      "nombres":"QUISPE LAVADO SERGIO CARLOS",
      "dni":21121621,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS OLIVERA BERTHA",
      "dni":25008581,
      "ieId":""
    },
    {
      "nombres":"CHALLCO PUMA PERCY",
      "dni":44077343,
      "ieId":""
    },
    {
      "nombres":"PINEDA MERMA JHON FERNANDO",
      "dni":80292264,
      "ieId":""
    },
    {
      "nombres":"CHIPANA CALLO VICENTE",
      "dni":40834328,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE TORRES SOLEDAD",
      "dni":40829789,
      "ieId":""
    },
    {
      "nombres":"CCANAHUIRE MENDOZA MARTHA",
      "dni":40723278,
      "ieId":""
    },
    {
      "nombres":"ALEJO FUENTES JHONIA VIKI",
      "dni":41070346,
      "ieId":""
    },
    {
      "nombres":"JALISTO JALISTO GLORIA FABIANA",
      "dni":24712319,
      "ieId":""
    },
    {
      "nombres":"SUCA SUCA EFRAIN",
      "dni":43584438,
      "ieId":""
    },
    {
      "nombres":"CRUZ PRADO ALBERTINA",
      "dni":40144014,
      "ieId":""
    },
    {
      "nombres":"LATORRE VENERO AROSELLY",
      "dni":24293725,
      "ieId":""
    },
    {
      "nombres":"PANTANI ATAUSUPA ISABEL DORIS",
      "dni":23945229,
      "ieId":""
    },
    {
      "nombres":"PONCE CHAVEZ NERIDA GLADYS",
      "dni":20443993,
      "ieId":""
    },
    {
      "nombres":"GUIZADO QUISPE ERICA",
      "dni":41080939,
      "ieId":""
    },
    {
      "nombres":"PAUCAR QUISPE MARIA ELIZABETH",
      "dni":41260918,
      "ieId":""
    },
    {
      "nombres":"PINO LA ROSA MONICA",
      "dni":40338519,
      "ieId":""
    },
    {
      "nombres":"RIOS SEBASTIAN DAMARIS",
      "dni":23970415,
      "ieId":""
    },
    {
      "nombres":"CORDERO MEZA MARISOL",
      "dni":41265267,
      "ieId":""
    },
    {
      "nombres":"LEON ALEJO POLICARPO",
      "dni":24993059,
      "ieId":""
    },
    {
      "nombres":"FLORES GUTIERREZ ENRIQUETA",
      "dni":25764256,
      "ieId":""
    },
    {
      "nombres":"CALLOHUANCA MAMANI MARGARITA",
      "dni":42605712,
      "ieId":""
    },
    {
      "nombres":"FLORES PINARES MAGDALENA",
      "dni":40115836,
      "ieId":""
    },
    {
      "nombres":"GAMBOA CASTRO MISTRAL SOFIA",
      "dni":41157902,
      "ieId":""
    },
    {
      "nombres":"MELLADO DELGADO YONY",
      "dni":24970559,
      "ieId":""
    },
    {
      "nombres":"CASO SEGURA BETZABE ANA",
      "dni":10027477,
      "ieId":""
    },
    {
      "nombres":"MONTALVO CCANCHI MIGUEL ANGEL",
      "dni":42837610,
      "ieId":""
    },
    {
      "nombres":"TUNQUE COLQUE EDWIN",
      "dni":41718280,
      "ieId":""
    },
    {
      "nombres":"BACA QUIÑONES BERTHA",
      "dni":23971681,
      "ieId":""
    },
    {
      "nombres":"BOLIVAR LOAYZA GODOFREDO",
      "dni":24471188,
      "ieId":""
    },
    {
      "nombres":"CABRERA VARGAS ANA MARIA",
      "dni":28294889,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA OCHOA VALENTIN",
      "dni":24998658,
      "ieId":""
    },
    {
      "nombres":"FUENTES ESQUIVEL YOUSEMAN JUAN",
      "dni":41187732,
      "ieId":""
    },
    {
      "nombres":"GAMARRA MASIAS CIPRIANA CIRILA",
      "dni":24950167,
      "ieId":""
    },
    {
      "nombres":"HERMOZA HUILLCA PABLO",
      "dni":23978025,
      "ieId":""
    },
    {
      "nombres":"MEDINA CRISPIN EUDALIA",
      "dni":10148646,
      "ieId":""
    },
    {
      "nombres":"MEDINA GUZMAN KARINA BETTY",
      "dni":30762451,
      "ieId":""
    },
    {
      "nombres":"NINACONDO TULA JAIME",
      "dni":80195057,
      "ieId":""
    },
    {
      "nombres":"OLIVERA SUMIRE LITTMAN DALMIRO",
      "dni":40822230,
      "ieId":""
    },
    {
      "nombres":"PUMA OCHOA KARINA CARMEN",
      "dni":41311960,
      "ieId":""
    },
    {
      "nombres":"QUISPE CUSIHUAMAN FREDI",
      "dni":8176788,
      "ieId":""
    },
    {
      "nombres":"SAIRITUPAC PALOMINO MARTHA",
      "dni":23969983,
      "ieId":""
    },
    {
      "nombres":"SINTI CUTIPA DIEGO",
      "dni":41857941,
      "ieId":""
    },
    {
      "nombres":"UNTIVEROS CHAVEZ JULIA MARIBEL",
      "dni":28298798,
      "ieId":""
    },
    {
      "nombres":"ASCUÑA COLCA EDWIN",
      "dni":80114227,
      "ieId":""
    },
    {
      "nombres":"PAUCAR CONDORI GEORGINA",
      "dni":23957494,
      "ieId":""
    },
    {
      "nombres":"QUECAÑO QUECAÑO LUIS",
      "dni":24698381,
      "ieId":""
    },
    {
      "nombres":"QUISPE CALLO YENY",
      "dni":42166773,
      "ieId":""
    },
    {
      "nombres":"TARACAYA ROSADA ULISES",
      "dni":25218291,
      "ieId":""
    },
    {
      "nombres":"VARGAS LUNA PIO ANGEL",
      "dni":42403250,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE FLORES LUIS",
      "dni":25328690,
      "ieId":""
    },
    {
      "nombres":"QUISPE GUERRA BEYDI CIOMARA",
      "dni":41157431,
      "ieId":""
    },
    {
      "nombres":"SOLIER DE LA CRUZ BLANCA",
      "dni":40348167,
      "ieId":""
    },
    {
      "nombres":"FLORES HUAMAN KARLA LILIANA",
      "dni":40227722,
      "ieId":""
    },
    {
      "nombres":"CHINO BANDA JOSE EFRAIN",
      "dni":24584119,
      "ieId":""
    },
    {
      "nombres":"LICAS CARDENAS LIZBETH",
      "dni":40114535,
      "ieId":""
    },
    {
      "nombres":"BERMUDO FIDEL AMPARO JESSICA",
      "dni":40676450,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HUANCA CLEOFE",
      "dni":23862873,
      "ieId":""
    },
    {
      "nombres":"CARDEÑA QUISPE MARIA",
      "dni":40294018,
      "ieId":""
    },
    {
      "nombres":"PERALTA HUARANCCA NILA",
      "dni":42994730,
      "ieId":""
    },
    {
      "nombres":"TICONA MAMANI NORMA",
      "dni":41367593,
      "ieId":""
    },
    {
      "nombres":"AGUILAR HUGUES JOSE ANTONIO",
      "dni":24670844,
      "ieId":""
    },
    {
      "nombres":"ASTO MITMA MARITZA",
      "dni":28270598,
      "ieId":""
    },
    {
      "nombres":"BARCENA YARIN JORGE",
      "dni":40189172,
      "ieId":""
    },
    {
      "nombres":"CABANA PACOTAIPE GREDINA",
      "dni":40413678,
      "ieId":""
    },
    {
      "nombres":"CAHUANA MOSCOSO YULY LIZANDRA",
      "dni":44538514,
      "ieId":""
    },
    {
      "nombres":"CHALCO CAVIEDES EFRAIN",
      "dni":23821649,
      "ieId":""
    },
    {
      "nombres":"CHARCA ESCALANTE MARIO ALBERTO",
      "dni":23988691,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA QUECAÑO BENEDICTA",
      "dni":24697214,
      "ieId":""
    },
    {
      "nombres":"DE LA CRUZ VILLAVERDE ANTONIA",
      "dni":28283348,
      "ieId":""
    },
    {
      "nombres":"FARGE TAPAHUASCO MERI",
      "dni":28289505,
      "ieId":""
    },
    {
      "nombres":"FLORES CORITOMA AURORA",
      "dni":28577240,
      "ieId":""
    },
    {
      "nombres":"HUACHACA TERRANOVA NANCY",
      "dni":43555942,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PUMA YRMA",
      "dni":24990482,
      "ieId":""
    },
    {
      "nombres":"LICAS DE LA CRUZ VOLTAIRE",
      "dni":41945852,
      "ieId":""
    },
    {
      "nombres":"LIZANA MENDOZA CIRO",
      "dni":28317012,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHOQUE BENEDICTA",
      "dni":23822533,
      "ieId":""
    },
    {
      "nombres":"MUNAYA BAUTISTA URFELINDA ANDREA",
      "dni":40380467,
      "ieId":""
    },
    {
      "nombres":"NANCAY CCANTO ZENON",
      "dni":25321255,
      "ieId":""
    },
    {
      "nombres":"NINA SALAZAR CARMEN VIANEY",
      "dni":2168148,
      "ieId":""
    },
    {
      "nombres":"ORTIZ SULLCA MARIA FLORENCIA",
      "dni":23980236,
      "ieId":""
    },
    {
      "nombres":"PORTAL PERALTA URBANO",
      "dni":28445165,
      "ieId":""
    },
    {
      "nombres":"QUISPE SARAVIA JULIA JANETH",
      "dni":29468644,
      "ieId":""
    },
    {
      "nombres":"TTITO RAMOS DAMACENA",
      "dni":23952248,
      "ieId":""
    },
    {
      "nombres":"VELASCO MELENDEZ ATILIO",
      "dni":23947032,
      "ieId":""
    },
    {
      "nombres":"VILLALOBOS RIOS JENNY MARGOT",
      "dni":41089128,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI LUQUE TEOFILA",
      "dni":23968368,
      "ieId":""
    },
    {
      "nombres":"FUENTES SARAYA LIZBETH",
      "dni":23986099,
      "ieId":""
    },
    {
      "nombres":"LARA CHAMPI SONIA",
      "dni":42467407,
      "ieId":""
    },
    {
      "nombres":"PAREDES SILVERA KENIA YAHAVE",
      "dni":28299938,
      "ieId":""
    },
    {
      "nombres":"CHICCHI RAMOS ALEJANDRO",
      "dni":42734152,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA PUCHO ROGER",
      "dni":44748091,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ ATASI WENCESLAO",
      "dni":44131785,
      "ieId":""
    },
    {
      "nombres":"HUMPIRI QUISPE MIRIAN ANA",
      "dni":23988214,
      "ieId":""
    },
    {
      "nombres":"MENDOZA QUISPE ROSANA MARTHA",
      "dni":28250972,
      "ieId":""
    },
    {
      "nombres":"OCHOA VARGAS VILMA CARMEN",
      "dni":41127281,
      "ieId":""
    },
    {
      "nombres":"YUCRA YUCRA LIZ",
      "dni":10285761,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ LIZARBE ROBERTINA",
      "dni":43283671,
      "ieId":""
    },
    {
      "nombres":"YUCRA YUCRA CLORINDA",
      "dni":24714349,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ FLORES LOURDES",
      "dni":21546158,
      "ieId":""
    },
    {
      "nombres":"GAMBOA CHAVEZ EDMER ABRAHAM",
      "dni":31480457,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MEZA EULOGIA",
      "dni":10334804,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ PUMALIQUE ROSA",
      "dni":43576716,
      "ieId":""
    },
    {
      "nombres":"OSCCO USCAMAYTA HAYDEE",
      "dni":40948193,
      "ieId":""
    },
    {
      "nombres":"SAIRE QUISPE ALEJANDRO",
      "dni":41098934,
      "ieId":""
    },
    {
      "nombres":"MERMA QUISPE EDWAR",
      "dni":41502960,
      "ieId":""
    },
    {
      "nombres":"QUISPE SURCO ATILIO",
      "dni":24683200,
      "ieId":""
    },
    {
      "nombres":"CALA ACHAHUANCO OLGER TORIBIO",
      "dni":42153911,
      "ieId":""
    },
    {
      "nombres":"CHALLCO CORRALES FLORENCIA",
      "dni":24952281,
      "ieId":""
    },
    {
      "nombres":"ACHANCCARAY CCOPA GLORIA CONSUELO",
      "dni":40112469,
      "ieId":""
    },
    {
      "nombres":"ATAJO CHOQUEHUANCA JUDITH",
      "dni":41276877,
      "ieId":""
    },
    {
      "nombres":"CALLAPIÑA MEDINA ROSA",
      "dni":24965448,
      "ieId":""
    },
    {
      "nombres":"CARDENAS CHAMANA SAUL ALONSO",
      "dni":29571350,
      "ieId":""
    },
    {
      "nombres":"CCACYAMARCA CHALLCO BERNARDO",
      "dni":25187438,
      "ieId":""
    },
    {
      "nombres":"CHIPANA CALLO MARCIAL",
      "dni":4749297,
      "ieId":""
    },
    {
      "nombres":"ENCARNACION SALAS ESTHER JUDIT",
      "dni":41727419,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA QUISPE RONAL",
      "dni":41514085,
      "ieId":""
    },
    {
      "nombres":"HUAMANTICA DURAND PERCY HUGO",
      "dni":44101001,
      "ieId":""
    },
    {
      "nombres":"ORUE TRUJILLO HEVER",
      "dni":41782386,
      "ieId":""
    },
    {
      "nombres":"PARAVICINO FLORES MAGALY",
      "dni":28605495,
      "ieId":""
    },
    {
      "nombres":"SINGUNA CORNEJO JUVENAL",
      "dni":24495948,
      "ieId":""
    },
    {
      "nombres":"HUAMAN USCAMAYTA HECTOR RINDO",
      "dni":23965774,
      "ieId":""
    },
    {
      "nombres":"HUAYTA VILLAGARAY LUISA YOVANA",
      "dni":43382360,
      "ieId":""
    },
    {
      "nombres":"INCA PAULLO JUAN CARLOS",
      "dni":24388709,
      "ieId":""
    },
    {
      "nombres":"PAMPAÑAUPA VILLENA MIRIAM",
      "dni":24978464,
      "ieId":""
    },
    {
      "nombres":"QUISPE AUCCA BELTRAN",
      "dni":24991944,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO YOVANA",
      "dni":25320386,
      "ieId":""
    },
    {
      "nombres":"DELGADO DUEÑAS MERY",
      "dni":24988017,
      "ieId":""
    },
    {
      "nombres":"GUILLEN ESPINOZA MIGUEL",
      "dni":24970170,
      "ieId":""
    },
    {
      "nombres":"QUISPE TENIENTE ANGELICA",
      "dni":24388640,
      "ieId":""
    },
    {
      "nombres":"TTITO CHURA BENEDICTO",
      "dni":24711248,
      "ieId":""
    },
    {
      "nombres":"AGUILAR PILLCO LUIS",
      "dni":25001576,
      "ieId":""
    },
    {
      "nombres":"COA QUISPE JULIA SARA",
      "dni":4642268,
      "ieId":""
    },
    {
      "nombres":"GOMEZ PUELLES EDWIN JULIO",
      "dni":42981452,
      "ieId":""
    },
    {
      "nombres":"JALISTO TTITO WALTER",
      "dni":40094183,
      "ieId":""
    },
    {
      "nombres":"QUISPE MENDOZA DARIO",
      "dni":40760745,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ ROMERO LEOCADIO",
      "dni":1311437,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ VASQUEZ LUIS ALBERTO",
      "dni":41077382,
      "ieId":""
    },
    {
      "nombres":"TARQUI SOMOSA LEONIDAS DANIEL",
      "dni":23983745,
      "ieId":""
    },
    {
      "nombres":"HUAMANTUMA CALCINA NIEVES GENOVEVA",
      "dni":1545913,
      "ieId":""
    },
    {
      "nombres":"QUISPE CUSI RAUL MANUEL",
      "dni":29624159,
      "ieId":""
    },
    {
      "nombres":"UMPIRE QUISPE MARIO",
      "dni":24716771,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MISME ZENAIDA",
      "dni":41994822,
      "ieId":""
    },
    {
      "nombres":"CCOLQQUE RODRIGUEZ FIDEL JAVIER",
      "dni":40388129,
      "ieId":""
    },
    {
      "nombres":"CRUZ LUNA ALI",
      "dni":24494537,
      "ieId":""
    },
    {
      "nombres":"ESPIRILLA RAMOS JORGE QUINCIÑO",
      "dni":42163681,
      "ieId":""
    },
    {
      "nombres":"GONZALES CHAMBILLA JOSE LUIS",
      "dni":24000689,
      "ieId":""
    },
    {
      "nombres":"MANUELO CHOQUE WILBER",
      "dni":1834983,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MAMANI ROCIO",
      "dni":41697290,
      "ieId":""
    },
    {
      "nombres":"ORE LUNA MARINA",
      "dni":25019332,
      "ieId":""
    },
    {
      "nombres":"PINTO ALVAREZ MARIO",
      "dni":25004401,
      "ieId":""
    },
    {
      "nombres":"QUISPE AYALA CEFERINO ADRIAN",
      "dni":28267877,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHOQUE MARCELINA",
      "dni":40876501,
      "ieId":""
    },
    {
      "nombres":"QUISPE VILCA DAVID SALOMON",
      "dni":24711697,
      "ieId":""
    },
    {
      "nombres":"CORONADO ALMANZA GLADIS",
      "dni":24473152,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN JHARRITH",
      "dni":42325803,
      "ieId":""
    },
    {
      "nombres":"UMERES VARGAS RUTH GLENY",
      "dni":42447327,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA TAIPE JUAN",
      "dni":24698422,
      "ieId":""
    },
    {
      "nombres":"FLORES HUAMAN KAREN JULISSA",
      "dni":40332612,
      "ieId":""
    },
    {
      "nombres":"GAVILAN CORICHAHUA HIMLER ROBERT",
      "dni":42194738,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CCASANI RUTH",
      "dni":41535008,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ MERMA VICTOR FERNANDO",
      "dni":23990371,
      "ieId":""
    },
    {
      "nombres":"ITUSACA CANAZA RAUL",
      "dni":41144329,
      "ieId":""
    },
    {
      "nombres":"ASCUÑA COLCA HUBER",
      "dni":44110936,
      "ieId":""
    },
    {
      "nombres":"CHOQUENAIRA MAMANI ANDRES",
      "dni":42588172,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ GAMARRA DANIEL",
      "dni":23867891,
      "ieId":""
    },
    {
      "nombres":"CHUQUIMAMANI CONDORI LEONARDO",
      "dni":1322711,
      "ieId":""
    },
    {
      "nombres":"ESPIRILLA RAMOS ALFREDO JAIRZINHO",
      "dni":41291631,
      "ieId":""
    },
    {
      "nombres":"GARCIA RAMIREZ MARITZA",
      "dni":23865174,
      "ieId":""
    },
    {
      "nombres":"MAMANI HUANCACHOQUE CONCEPCION",
      "dni":43981812,
      "ieId":""
    },
    {
      "nombres":"BARRIOS AZA LUZ MARISOL",
      "dni":29560260,
      "ieId":""
    },
    {
      "nombres":"CHOQUE ALVAREZ NANCY",
      "dni":24711057,
      "ieId":""
    },
    {
      "nombres":"FLORES AIRAMPO CASIANO",
      "dni":25328602,
      "ieId":""
    },
    {
      "nombres":"LAURA CONDORCCAHUA ROGER",
      "dni":24708161,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA SULCA VICTOR JAIME",
      "dni":28292013,
      "ieId":""
    },
    {
      "nombres":"QUISPE LLACCTAHUAMAN RICHARD ALFREDO",
      "dni":28287447,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ HUAMAN ROSALYN",
      "dni":40960997,
      "ieId":""
    },
    {
      "nombres":"DIAZ QUISPE RENE",
      "dni":40113076,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS QUISPE HENRRY",
      "dni":40022885,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ALAGON POLICARPO",
      "dni":24487206,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ CONDE MARIBEL",
      "dni":23966159,
      "ieId":""
    },
    {
      "nombres":"PINO PILLCO HAYDY ZAMIRA",
      "dni":25133681,
      "ieId":""
    },
    {
      "nombres":"VALERIANO LECAROS LUZ MARY",
      "dni":41320711,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO FELIX EDWIN",
      "dni":40100333,
      "ieId":""
    },
    {
      "nombres":"LOZANO MAMANI ELOY",
      "dni":41397817,
      "ieId":""
    },
    {
      "nombres":"SARA ESQUIVEL RICHARD AMERICO",
      "dni":40025395,
      "ieId":""
    },
    {
      "nombres":"CAHUANA AUCASIMI VIDAL CIRILO",
      "dni":80121694,
      "ieId":""
    },
    {
      "nombres":"MESTAS PORTUGAL LUIS ALBERTO",
      "dni":40947421,
      "ieId":""
    },
    {
      "nombres":"REYES ROJAS JOSE ADRIAN",
      "dni":28297100,
      "ieId":""
    },
    {
      "nombres":"CHACON SANTANDER PATRICIA",
      "dni":23924432,
      "ieId":""
    },
    {
      "nombres":"VILCA YUJRA MARGARITA",
      "dni":23952299,
      "ieId":""
    },
    {
      "nombres":"CHURATA QUISPE LOLA MARINA",
      "dni":4428270,
      "ieId":""
    },
    {
      "nombres":"HUASHUA CUARESMA NAYRUTH",
      "dni":42724114,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HINOJOSA JORGE",
      "dni":24991484,
      "ieId":""
    },
    {
      "nombres":"MAMANI APAZA ROY ROBER",
      "dni":44555328,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALVARES YNOCENCIA",
      "dni":24947438,
      "ieId":""
    },
    {
      "nombres":"DIAZ BUSTAMANTE ERNESTO",
      "dni":25326449,
      "ieId":""
    },
    {
      "nombres":"YUCRA YUCRA MARIA ELENA",
      "dni":24712774,
      "ieId":""
    },
    {
      "nombres":"MAXI SOTO HECTOR",
      "dni":41531087,
      "ieId":""
    },
    {
      "nombres":"TARACAYA ROSADA PAULINA",
      "dni":25220886,
      "ieId":""
    },
    {
      "nombres":"CHATA VELASQUEZ EFRAIN LEONARDO",
      "dni":1263567,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CHAVEZ MELINDA",
      "dni":41583815,
      "ieId":""
    },
    {
      "nombres":"GARAYAR MALLQUI ELIZABETH",
      "dni":28286815,
      "ieId":""
    },
    {
      "nombres":"HUACARPUMA HUILLCA GLICERIO",
      "dni":25320254,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CASTRO VICTOR",
      "dni":28713335,
      "ieId":""
    },
    {
      "nombres":"HUANACUNI FORAQUITA RITHA MONICA",
      "dni":40080524,
      "ieId":""
    },
    {
      "nombres":"OLIVERA NINA GERMAN FRANCISCO",
      "dni":1324076,
      "ieId":""
    },
    {
      "nombres":"QUIPO CRUZ ROSA MARIA",
      "dni":41122853,
      "ieId":""
    },
    {
      "nombres":"TITO CESPEDES EUNICE",
      "dni":41051311,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE MARIO",
      "dni":40723290,
      "ieId":""
    },
    {
      "nombres":"TICONA MAMANI CARMEN LIBERTAD",
      "dni":42894866,
      "ieId":""
    },
    {
      "nombres":"VALENCIA RIVERA MARIBEL",
      "dni":41098419,
      "ieId":""
    },
    {
      "nombres":"CORIMANYA . YOVANA FLORA",
      "dni":40755711,
      "ieId":""
    },
    {
      "nombres":"JAICO CORAS MARGOT JUSTINA",
      "dni":40050991,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE EDITH SHELAH",
      "dni":40410336,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CALLAPIÑA FORTUNATA",
      "dni":25002387,
      "ieId":""
    },
    {
      "nombres":"RAMOS PUNTUSIL YOLANDA",
      "dni":25003385,
      "ieId":""
    },
    {
      "nombres":"CARDENAS SANCHEZ ESTELA",
      "dni":23952897,
      "ieId":""
    },
    {
      "nombres":"GRANADOS ROJAS NORA ENMA",
      "dni":28270933,
      "ieId":""
    },
    {
      "nombres":"AIQUE SALAS GIOVANI PILAR",
      "dni":24581369,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA MAMANI ALFREDO",
      "dni":40400397,
      "ieId":""
    },
    {
      "nombres":"ORE MEJIA LENIN",
      "dni":42887013,
      "ieId":""
    },
    {
      "nombres":"NEGRI GUTIERREZ NOE",
      "dni":25019070,
      "ieId":""
    },
    {
      "nombres":"ORE CASTILLO EVELYN",
      "dni":42803344,
      "ieId":""
    },
    {
      "nombres":"SANTANDER RAMIREZ HENRY",
      "dni":41154707,
      "ieId":""
    },
    {
      "nombres":"OSCCO CARDENAS ARMANDO",
      "dni":23901800,
      "ieId":""
    },
    {
      "nombres":"QUICHUA PALOMINO MILZA YOLANDA",
      "dni":41394264,
      "ieId":""
    },
    {
      "nombres":"VERA MOSCOSO HOLGER ALEX",
      "dni":42281117,
      "ieId":""
    },
    {
      "nombres":"CHIPANA CALLO ALFREDO",
      "dni":42782895,
      "ieId":""
    },
    {
      "nombres":"CONDORI AYALA WILFREDO",
      "dni":40770097,
      "ieId":""
    },
    {
      "nombres":"CATUNTA HUILLCA ALIPIO",
      "dni":41734243,
      "ieId":""
    },
    {
      "nombres":"CURO GUTIERREZ ANGEL ELISEO",
      "dni":42475536,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR MORENO BERTHA",
      "dni":40822797,
      "ieId":""
    },
    {
      "nombres":"CASTELO ROA JOSE LUIS",
      "dni":80053993,
      "ieId":""
    },
    {
      "nombres":"CCOLQQUE ESCALANTE FLOR KATHERINE",
      "dni":45613212,
      "ieId":""
    },
    {
      "nombres":"COLQUE CABALLERO ROMULO",
      "dni":41795801,
      "ieId":""
    },
    {
      "nombres":"CUSI YANQUE MARISOL",
      "dni":40513903,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ SOTO NESTOR",
      "dni":28448053,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ CARRILLO LYNDA KARLY",
      "dni":41074511,
      "ieId":""
    },
    {
      "nombres":"TAIPE HILARI ALAIDA INES",
      "dni":23997879,
      "ieId":""
    },
    {
      "nombres":"HUARACA CONDORI ROXANA MERY",
      "dni":44091998,
      "ieId":""
    },
    {
      "nombres":"LICAS CARDENAS ESMELIDA",
      "dni":41157020,
      "ieId":""
    },
    {
      "nombres":"ANGUIOSA HUAMAN ELVIN",
      "dni":25220809,
      "ieId":""
    },
    {
      "nombres":"CUSIRIMAY MAMANI ALICIA",
      "dni":23952168,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE CHOQUEMAQUI EDY",
      "dni":44704693,
      "ieId":""
    },
    {
      "nombres":"PACCO CONSUERO NICANOR",
      "dni":24716708,
      "ieId":""
    },
    {
      "nombres":"SUNI AYMACHOQUE ALFREDO",
      "dni":24717014,
      "ieId":""
    },
    {
      "nombres":"ACHAHUANCO CERVANTES HELAR PAUL",
      "dni":24718141,
      "ieId":""
    },
    {
      "nombres":"BACA TORRES ROXANA",
      "dni":43264141,
      "ieId":""
    },
    {
      "nombres":"GARATE VALDIVIA CESAR LEONEL",
      "dni":29480128,
      "ieId":""
    },
    {
      "nombres":"CORNEJO GONZALES ALEXIS MARCELO",
      "dni":41037465,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS QUISPE NICANOR",
      "dni":41791660,
      "ieId":""
    },
    {
      "nombres":"CUSI YANQUE DELIA EVARISTA",
      "dni":30666550,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ PELAYO JANNET RUTTI",
      "dni":25321512,
      "ieId":""
    },
    {
      "nombres":"INFANTE CUCHURI VICTOR",
      "dni":28276557,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE ESTANISLAO",
      "dni":24470873,
      "ieId":""
    },
    {
      "nombres":"JALISTO TTITO LUZMILA",
      "dni":40547909,
      "ieId":""
    },
    {
      "nombres":"TARACAYA ROSADA YANET",
      "dni":41272733,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CAJIGAS IRENE",
      "dni":23941128,
      "ieId":""
    },
    {
      "nombres":"USCAMAITA QUISPE GUILLERMINA",
      "dni":23989550,
      "ieId":""
    },
    {
      "nombres":"ESPERILLA LLALLA BUENAVENTURA",
      "dni":24683053,
      "ieId":""
    },
    {
      "nombres":"POMA SOTO FILBER",
      "dni":80093393,
      "ieId":""
    },
    {
      "nombres":"ARIZABAL TORRES PAULINA",
      "dni":24460191,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA MAMANI LUCRECIA",
      "dni":40751847,
      "ieId":""
    },
    {
      "nombres":"CALDERON RIVERA EDISON",
      "dni":40069041,
      "ieId":""
    },
    {
      "nombres":"CUEVA CCASA ZENOBIA",
      "dni":24717681,
      "ieId":""
    },
    {
      "nombres":"OSCCO PAHUARA OSCAR NICOLAS",
      "dni":31188400,
      "ieId":""
    },
    {
      "nombres":"ASTORAY SAYAS WILIAM NELSON",
      "dni":10123086,
      "ieId":""
    },
    {
      "nombres":"PAUCAR CHIPANA EDWIN",
      "dni":46181932,
      "ieId":""
    },
    {
      "nombres":"AYMA CHILE PAULINA",
      "dni":24392690,
      "ieId":""
    },
    {
      "nombres":"MINAYA SANCHEZ NELLY",
      "dni":42420100,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GARCIA WALTER",
      "dni":80626096,
      "ieId":""
    },
    {
      "nombres":"HUACARPUMA JORDAN VICTOR",
      "dni":40731771,
      "ieId":""
    },
    {
      "nombres":"YANASUPO BAUTISTA MACEDONIA",
      "dni":40944861,
      "ieId":""
    },
    {
      "nombres":"CASTRO ZANABRIA NANCY",
      "dni":28303833,
      "ieId":""
    },
    {
      "nombres":"HUASHUAYO PULLO ADRIAN",
      "dni":28444970,
      "ieId":""
    },
    {
      "nombres":"BLANCO CALDERON LETHIT",
      "dni":44792336,
      "ieId":""
    },
    {
      "nombres":"HUALLPAYUNCA HUAMAN DELIA",
      "dni":42318765,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ MEDINA DAVID",
      "dni":23930669,
      "ieId":""
    },
    {
      "nombres":"CONDORI CCALA LUCIO",
      "dni":24711984,
      "ieId":""
    },
    {
      "nombres":"JALISTO JALISTO JUVENAL",
      "dni":24716187,
      "ieId":""
    },
    {
      "nombres":"QUISPE LAURA JUANA TERESA",
      "dni":40105592,
      "ieId":""
    },
    {
      "nombres":"SUNI AYMACHOQUE WILBER",
      "dni":40731735,
      "ieId":""
    },
    {
      "nombres":"ALAGON ROLANDO MARIA DEL CARMEN",
      "dni":29409880,
      "ieId":""
    },
    {
      "nombres":"CARPIO MENDEZ FELIX",
      "dni":28206671,
      "ieId":""
    },
    {
      "nombres":"CARRASCO DELGADO WILDER",
      "dni":43807957,
      "ieId":""
    },
    {
      "nombres":"CCORALLA CHECCA JORGE ASISCLO",
      "dni":23953921,
      "ieId":""
    },
    {
      "nombres":"CHAMBI QUISPE DAVID",
      "dni":29449622,
      "ieId":""
    },
    {
      "nombres":"CHAÑI CHAÑI EDGAR",
      "dni":41718630,
      "ieId":""
    },
    {
      "nombres":"HERMOZA DE LA CRUZ VINQUI",
      "dni":24981649,
      "ieId":""
    },
    {
      "nombres":"HUANCA HUAHUALUQUE ELOY",
      "dni":43741059,
      "ieId":""
    },
    {
      "nombres":"HUILLCA GAMBOA LUISA",
      "dni":23942970,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI BENITO",
      "dni":2367008,
      "ieId":""
    },
    {
      "nombres":"MAMANI RODRIGO NESTOR",
      "dni":43348140,
      "ieId":""
    },
    {
      "nombres":"MAYORGA BARCENA ELIAS",
      "dni":23854134,
      "ieId":""
    },
    {
      "nombres":"NAVIDES PALOMINO ALEX",
      "dni":43117221,
      "ieId":""
    },
    {
      "nombres":"PALOMINO MAR HECTOR",
      "dni":40351455,
      "ieId":""
    },
    {
      "nombres":"QUISPE CANDIA JOSE RAUL",
      "dni":80043402,
      "ieId":""
    },
    {
      "nombres":"SINTI CUTIPA CELIA",
      "dni":40151356,
      "ieId":""
    },
    {
      "nombres":"SOTO SUMERINTE EUSTAQUIO",
      "dni":24988048,
      "ieId":""
    },
    {
      "nombres":"UNTIVEROS CHAVEZ SIXTA CONSOLACION",
      "dni":28237137,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE CAMARGO CLEOFE CIRILO",
      "dni":31350906,
      "ieId":""
    },
    {
      "nombres":"YARANGA CHAUPEZ MARLENE",
      "dni":28274754,
      "ieId":""
    },
    {
      "nombres":"FLORES ESPINO FREDY",
      "dni":21532438,
      "ieId":""
    },
    {
      "nombres":"LAURA ROJAS JOSE LUIS",
      "dni":28314259,
      "ieId":""
    },
    {
      "nombres":"MEDINA PALOMINO JOSE LUIS",
      "dni":80318764,
      "ieId":""
    },
    {
      "nombres":"ROSALES JANTO JULIO RIMBERTHO",
      "dni":41276346,
      "ieId":""
    },
    {
      "nombres":"SUMIRE CUEVAS ENOC MOISES",
      "dni":80053119,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA ROJAS PERSCY",
      "dni":10374847,
      "ieId":""
    },
    {
      "nombres":"CHAMBILLA MAMANI FELIX VICTOR",
      "dni":1856171,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA CONDORI MAURICIO EDGAR",
      "dni":1552065,
      "ieId":""
    },
    {
      "nombres":"CHUTAS CCOSCCO JULIO CESAR",
      "dni":42598655,
      "ieId":""
    },
    {
      "nombres":"GONZALES CHAMBILLA ROLANDO",
      "dni":10154645,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ ANDRADE JUAN ZENON",
      "dni":21524574,
      "ieId":""
    },
    {
      "nombres":"OSCCO CCAHUAY LUCILA MILAGROS",
      "dni":41336722,
      "ieId":""
    },
    {
      "nombres":"PAREDES VARGAS YANET KARINA",
      "dni":42298864,
      "ieId":""
    },
    {
      "nombres":"ROQUE ARAPA ELOY",
      "dni":2161891,
      "ieId":""
    },
    {
      "nombres":"AVILES VASQUEZ JUDITH  CARLA",
      "dni":41946824,
      "ieId":""
    },
    {
      "nombres":"CANSAYA INOFUENTE EDITH   JOHANA",
      "dni":41382247,
      "ieId":""
    },
    {
      "nombres":"JACOME SOLIS ABDEL WILIAMS",
      "dni":41933986,
      "ieId":""
    },
    {
      "nombres":"MOLINA ROJAS MARGARITA",
      "dni":23913901,
      "ieId":""
    },
    {
      "nombres":"ROBLES AYBAR REY ROGGER",
      "dni":41475341,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ QUILLATUPA VICTOR JULIAN",
      "dni":20657824,
      "ieId":""
    },
    {
      "nombres":"ALARCON QUISPE GLADYS",
      "dni":28287555,
      "ieId":""
    },
    {
      "nombres":"BARRIOS ESPERILLA ORSA",
      "dni":25009428,
      "ieId":""
    },
    {
      "nombres":"CACERES HUARACHA MIGUEL",
      "dni":40701804,
      "ieId":""
    },
    {
      "nombres":"LLACCTAHUAMAN LASTRA RORI",
      "dni":40732387,
      "ieId":""
    },
    {
      "nombres":"LLALLIRE CUSI PEDRO ALONSO",
      "dni":43233116,
      "ieId":""
    },
    {
      "nombres":"PINEDA TORRES VICTOR ANDRES",
      "dni":21538039,
      "ieId":""
    },
    {
      "nombres":"RAMOS ATUNCAR PATRICIA ARACELY",
      "dni":41587522,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ILAZACA RAPHAEL ALEXIS",
      "dni":29654777,
      "ieId":""
    },
    {
      "nombres":"ARAGON TRUJILLO JORGE LUIS",
      "dni":23962237,
      "ieId":""
    },
    {
      "nombres":"CCAHUANTICO MAMANI MELQUIADES",
      "dni":24683047,
      "ieId":""
    },
    {
      "nombres":"CCORAHUA QUISPE VALERIO",
      "dni":28288579,
      "ieId":""
    },
    {
      "nombres":"CHACON LIMA WILBER",
      "dni":43820649,
      "ieId":""
    },
    {
      "nombres":"CHINCHAY PUENTE ROBERTO ANTONIO",
      "dni":23972896,
      "ieId":""
    },
    {
      "nombres":"CHUTAS CCOSCCO FREDY HERNAN",
      "dni":42048446,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ NALVARTE FRANCISCO",
      "dni":28273024,
      "ieId":""
    },
    {
      "nombres":"LAYME MAMANI MARIBEL",
      "dni":2045037,
      "ieId":""
    },
    {
      "nombres":"LAZO ASTUCURI MELISSA",
      "dni":43808064,
      "ieId":""
    },
    {
      "nombres":"LETONA MENDOZA MARIO",
      "dni":23862665,
      "ieId":""
    },
    {
      "nombres":"MANSILLA GALVEZ DIVA CIRILA",
      "dni":41167036,
      "ieId":""
    },
    {
      "nombres":"MERMA SARA LUZ MARINA",
      "dni":23941253,
      "ieId":""
    },
    {
      "nombres":"OCHANTE RAMOS ROSA HERLINDA",
      "dni":7501715,
      "ieId":""
    },
    {
      "nombres":"ORELLANA ORIUNDO EDWIN",
      "dni":28312397,
      "ieId":""
    },
    {
      "nombres":"PEREZ TRUJILLO JUAN CARLOS",
      "dni":23860779,
      "ieId":""
    },
    {
      "nombres":"QUISPE RIVAS WEBER",
      "dni":22307310,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA CONDORI ANIBAL",
      "dni":24582134,
      "ieId":""
    },
    {
      "nombres":"VIDAL FERNANDEZ LUCHO",
      "dni":80355909,
      "ieId":""
    },
    {
      "nombres":"BAUSTISTA HUANCAHUARI TORIBIO ALBERTO",
      "dni":42780121,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL LAGOS RESPEN",
      "dni":42267581,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA CHACON JOSE",
      "dni":41879921,
      "ieId":""
    },
    {
      "nombres":"GONZALES ZAMORA LUCAS",
      "dni":44366493,
      "ieId":""
    },
    {
      "nombres":"HUAMANI FLORES URBANO",
      "dni":41828875,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ TORRES SAMUEL",
      "dni":42736080,
      "ieId":""
    },
    {
      "nombres":"ORIHUELA LAQUITA AMILCAR ABRAHAM",
      "dni":24721447,
      "ieId":""
    },
    {
      "nombres":"PEREZ UTCAÑE OLMEDO",
      "dni":42359130,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ HUAYTA EMMA BEATRIZ",
      "dni":41825650,
      "ieId":""
    },
    {
      "nombres":"ASIN HANCCO MARIA PILAR",
      "dni":23957999,
      "ieId":""
    },
    {
      "nombres":"CASTILLO ZARATE JUNE RICHARD",
      "dni":42426793,
      "ieId":""
    },
    {
      "nombres":"GARCIA APAICO DANNIA ANACE",
      "dni":28313637,
      "ieId":""
    },
    {
      "nombres":"LLACTARIMAY QUISPE BERTHA",
      "dni":43012753,
      "ieId":""
    },
    {
      "nombres":"QUISPE VILCAPAZA JUDITH MIRYAM",
      "dni":1560311,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ VALDEZ FELIX NOE",
      "dni":9959457,
      "ieId":""
    },
    {
      "nombres":"RAMOS MERMA IRMA",
      "dni":2427679,
      "ieId":""
    },
    {
      "nombres":"VALENCIA DELGADO PAUL PATRIK",
      "dni":42315992,
      "ieId":""
    },
    {
      "nombres":"ZAMORA CCENTE HECTOR",
      "dni":80541160,
      "ieId":""
    },
    {
      "nombres":"CASTRO LUCAS NANCY LILIANA",
      "dni":23965536,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ HUAHUASONCCO PERCY",
      "dni":2298077,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ PALOMINO CELIA",
      "dni":23938080,
      "ieId":""
    },
    {
      "nombres":"ARIAS MESCCO WILBER",
      "dni":23949306,
      "ieId":""
    },
    {
      "nombres":"CONDORHUACHO RAMIRES PABLO",
      "dni":41102121,
      "ieId":""
    },
    {
      "nombres":"CONZA RAMOS FRANCISCO",
      "dni":24683029,
      "ieId":""
    },
    {
      "nombres":"LAZARO PEREZ EFRAIN",
      "dni":41546697,
      "ieId":""
    },
    {
      "nombres":"MOZO LLOCCLLA JANY",
      "dni":44126179,
      "ieId":""
    },
    {
      "nombres":"PALOMINO CUELA FRIDA FARIDE",
      "dni":23863547,
      "ieId":""
    },
    {
      "nombres":"PARIONA SULCA MILTON",
      "dni":42572148,
      "ieId":""
    },
    {
      "nombres":"CCAYAHUALLPA PALOMINO MARUJA",
      "dni":45215512,
      "ieId":""
    },
    {
      "nombres":"CHUTAS CCOSCCO WILLIAN MANUEL",
      "dni":24392636,
      "ieId":""
    },
    {
      "nombres":"CONDE CALLAÑAUPA HERCULES VENTURO",
      "dni":1324506,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA GALINDO FERNANDO",
      "dni":42305025,
      "ieId":""
    },
    {
      "nombres":"HAÑARI COYLA ERWIN WILLIAM",
      "dni":2166944,
      "ieId":""
    },
    {
      "nombres":"MAMANI YANQUE VERONICA YUDIH",
      "dni":40882185,
      "ieId":""
    },
    {
      "nombres":"APAZA CATTI YUVER ABRAHAM",
      "dni":80607757,
      "ieId":""
    },
    {
      "nombres":"DAMASO LAURENCIO SAUL TEODORO",
      "dni":24952562,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR ROBLEDO PAOLA LIZBETH",
      "dni":40699913,
      "ieId":""
    },
    {
      "nombres":"GARCIA ZEVALLOS ABEL JESUS",
      "dni":21555133,
      "ieId":""
    },
    {
      "nombres":"GUERRERO ASTORAY AMILTON LEONIDAS",
      "dni":28306304,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MANCILLA SONIA",
      "dni":44921592,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ OVALLE HERNAN",
      "dni":23949521,
      "ieId":""
    },
    {
      "nombres":"SUCA SUCA ROLANDO",
      "dni":41876952,
      "ieId":""
    },
    {
      "nombres":"CARI HUAYTA ANA BEATRIZ",
      "dni":2171829,
      "ieId":""
    },
    {
      "nombres":"CORREA TORRES HEDDY",
      "dni":43033269,
      "ieId":""
    },
    {
      "nombres":"ESCATE MEDINA LUIS ALBERTO",
      "dni":21535361,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ORE LUCIO",
      "dni":28600449,
      "ieId":""
    },
    {
      "nombres":"LEZAMA ALBARRACIN EDWIN",
      "dni":23998757,
      "ieId":""
    },
    {
      "nombres":"MENDEZ CRUZ FELICIANO",
      "dni":42235878,
      "ieId":""
    },
    {
      "nombres":"TOMAYLLA HUALLPA ELIUTERIO",
      "dni":28250851,
      "ieId":""
    },
    {
      "nombres":"ATACHAO HUAMAN ELSA",
      "dni":28289485,
      "ieId":""
    },
    {
      "nombres":"AYMACHOQUE AYMACHOQUE LUIS",
      "dni":41610644,
      "ieId":""
    },
    {
      "nombres":"CORICHAHUA RUIZ FREDDY",
      "dni":41835689,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ PARRA NESTOR ROBERTO",
      "dni":7853072,
      "ieId":""
    },
    {
      "nombres":"HUARHUA MEDIANO JUAN CARLOS",
      "dni":24367511,
      "ieId":""
    },
    {
      "nombres":"PALOMINO QUISPE ELIZABET",
      "dni":24718785,
      "ieId":""
    },
    {
      "nombres":"SULLA SONCCO WENCESLAO",
      "dni":23976493,
      "ieId":""
    },
    {
      "nombres":"VALENCIA MAMANI ANDRES",
      "dni":2029183,
      "ieId":""
    },
    {
      "nombres":"CAMPOS CATUNTA HERMELINDA",
      "dni":42315835,
      "ieId":""
    },
    {
      "nombres":"CORONADO HUANACO EDWIN",
      "dni":40857949,
      "ieId":""
    },
    {
      "nombres":"CUYA FLORES ROSA MARIA",
      "dni":41943824,
      "ieId":""
    },
    {
      "nombres":"ENDARA VILLA YOLI CRISTINA",
      "dni":41006302,
      "ieId":""
    },
    {
      "nombres":"GARCIA ZEVALLOS MILAGROS VICTORIA",
      "dni":41379725,
      "ieId":""
    },
    {
      "nombres":"HUACHACA LAGOS DORA",
      "dni":44191083,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PALOMINO LIHUARTHON",
      "dni":24005201,
      "ieId":""
    },
    {
      "nombres":"MENDOZA HUILLCA JUSTO",
      "dni":25008036,
      "ieId":""
    },
    {
      "nombres":"MENDOZA HURTADO ABELARDO",
      "dni":40086117,
      "ieId":""
    },
    {
      "nombres":"CALDERON TABOADA JESSENIA ADELY",
      "dni":21560937,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA MAMANI ELENA",
      "dni":41714842,
      "ieId":""
    },
    {
      "nombres":"CASTRO TEJADA PAZ ELMER",
      "dni":29704411,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA AGUILAR ZAIDA JUDITH",
      "dni":44126532,
      "ieId":""
    },
    {
      "nombres":"CRUZ MAMANI FREDY",
      "dni":43449693,
      "ieId":""
    },
    {
      "nombres":"QUISPE CABRERA ANTONIO ANGEL",
      "dni":21437566,
      "ieId":""
    },
    {
      "nombres":"QUISPE ONCEBAY ROYER DAVY",
      "dni":44734138,
      "ieId":""
    },
    {
      "nombres":"ACUÑA ACHAHUE SULMA",
      "dni":23949002,
      "ieId":""
    },
    {
      "nombres":"LOA CARDENAS NANCY CLARA",
      "dni":23965174,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAITA FERNANDEZ MARGARITA",
      "dni":23903300,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA GUZMAN MILUSKA ANGELICA",
      "dni":23851545,
      "ieId":""
    },
    {
      "nombres":"HUALLPARIMACHI QUISPE MARY LUZ",
      "dni":43881229,
      "ieId":""
    },
    {
      "nombres":"QUISPE ROJAS ILCE TONGSHI",
      "dni":23963757,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ESTRADA MARTHA",
      "dni":24376634,
      "ieId":""
    },
    {
      "nombres":"SALGADO SCHIAFFINO SUSANA",
      "dni":40228764,
      "ieId":""
    },
    {
      "nombres":"VARGAS OROS MARNY",
      "dni":23870428,
      "ieId":""
    },
    {
      "nombres":"MARROQUIN FARFAN LILA PATRICIA",
      "dni":23929389,
      "ieId":""
    },
    {
      "nombres":"HUAMANI SOLIS ELIZABETH",
      "dni":23965869,
      "ieId":""
    },
    {
      "nombres":"JAQUEHUA VARGAS MABELTH GORETH",
      "dni":24003418,
      "ieId":""
    },
    {
      "nombres":"ROQUE HUALLPA CELIA",
      "dni":31032427,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ AVILES YEVELIN",
      "dni":23979882,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE PASTOR ANA MARIA",
      "dni":8465797,
      "ieId":""
    },
    {
      "nombres":"MORALES CORONEL PATRICIA",
      "dni":23990904,
      "ieId":""
    },
    {
      "nombres":"ROCCA CCORAHUA VICTORIA",
      "dni":40416651,
      "ieId":""
    },
    {
      "nombres":"QUISPE SILVA GIOVANA",
      "dni":40767576,
      "ieId":""
    },
    {
      "nombres":"ABRILL MITTANI NORA",
      "dni":44940199,
      "ieId":""
    },
    {
      "nombres":"HIDALGO LARA ROSMERY",
      "dni":41939907,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO MIRANDA XIOMARA",
      "dni":41769598,
      "ieId":""
    },
    {
      "nombres":"CALDERON CHAVEZ LIDA NORMA",
      "dni":42789126,
      "ieId":""
    },
    {
      "nombres":"SILVA CASTAÑEDA KERLIN",
      "dni":40645896,
      "ieId":""
    },
    {
      "nombres":"ROCCA ACOSTA MAGALI",
      "dni":40746346,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CAZORLA ROSS MARY",
      "dni":24378543,
      "ieId":""
    },
    {
      "nombres":"CONDORI PEÑA MARITZA",
      "dni":25311977,
      "ieId":""
    },
    {
      "nombres":"PANIORA MONTOYA VICENTE",
      "dni":23952253,
      "ieId":""
    },
    {
      "nombres":"ZAMORA COSIO AYDE",
      "dni":23881775,
      "ieId":""
    },
    {
      "nombres":"ZAPATA ESCOBAR AUGUSTO",
      "dni":23855824,
      "ieId":""
    },
    {
      "nombres":"AGUILAR TTITO MARIA",
      "dni":23959905,
      "ieId":""
    },
    {
      "nombres":"ARROYO HUAMAN NORMA",
      "dni":23835232,
      "ieId":""
    },
    {
      "nombres":"BARRIONUEVO ALMANACIN LIDIA",
      "dni":24803904,
      "ieId":""
    },
    {
      "nombres":"BOLIVAR QUISPE CAMILA CELMIRA",
      "dni":23901887,
      "ieId":""
    },
    {
      "nombres":"CARPIO ORDOÑEZ MARLENI",
      "dni":23953075,
      "ieId":""
    },
    {
      "nombres":"DONGO CALLO VDA.DE VALD MARIA TERESA",
      "dni":24661004,
      "ieId":""
    },
    {
      "nombres":"HUAÑEC SUYLLO ROGER",
      "dni":25003648,
      "ieId":""
    },
    {
      "nombres":"MENDIVIL UGARTE LUZ MARINA",
      "dni":24372793,
      "ieId":""
    },
    {
      "nombres":"MONZON AGUILAR CAROLINA",
      "dni":24698113,
      "ieId":""
    },
    {
      "nombres":"PILLACA CARBAJAL RAUL OSWALDO",
      "dni":31478069,
      "ieId":""
    },
    {
      "nombres":"PINTO TAPIA MIGUEL ANGEL",
      "dni":25326290,
      "ieId":""
    },
    {
      "nombres":"QUISPE TARCO FREDDY FIDEL",
      "dni":23945061,
      "ieId":""
    },
    {
      "nombres":"RECHARTE PANIURA BETI",
      "dni":31035925,
      "ieId":""
    },
    {
      "nombres":"ROJAS ARANYA BALVINA",
      "dni":23879746,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ DE FARFAN MARIA CANDELARIA",
      "dni":23881734,
      "ieId":""
    },
    {
      "nombres":"SOTO NECOCHEA LUIS SALVADOR",
      "dni":24370672,
      "ieId":""
    },
    {
      "nombres":"UGARTE LUNA MARTHA GABRIELA",
      "dni":25302864,
      "ieId":""
    },
    {
      "nombres":"VALDEZ ALMANACIN JUSTINA",
      "dni":23924950,
      "ieId":""
    },
    {
      "nombres":"VARGAS DE LA CUBA VICTOR JOSE",
      "dni":24983800,
      "ieId":""
    },
    {
      "nombres":"ZAVALA TORRES JORGE",
      "dni":23932149,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA ROJAS MARITZA",
      "dni":23941043,
      "ieId":""
    },
    {
      "nombres":"BORDA HUAMAN RUTH",
      "dni":24367361,
      "ieId":""
    },
    {
      "nombres":"CABRERA FOLLANO ESTEFA",
      "dni":23804381,
      "ieId":""
    },
    {
      "nombres":"CRUZ PALMA CARMEN MERCEDES",
      "dni":23902092,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS DELGADO DE CONDO ELSA GREGORIA",
      "dni":27741213,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ GARCIA ALEJANDRINA",
      "dni":23905042,
      "ieId":""
    },
    {
      "nombres":"NORIEGA BACA FIDELIA",
      "dni":31527105,
      "ieId":""
    },
    {
      "nombres":"ROSALES PILLCO CARMEN JULIA",
      "dni":24485235,
      "ieId":""
    },
    {
      "nombres":"YANQUI COLLADO FILIBERTO",
      "dni":24388215,
      "ieId":""
    },
    {
      "nombres":"ARONI SALGADO RUFINO",
      "dni":24698423,
      "ieId":""
    },
    {
      "nombres":"ESTRADA YBARRA PERCY",
      "dni":23998260,
      "ieId":""
    },
    {
      "nombres":"LIVANO CCOSCCO FLAVIO",
      "dni":24362653,
      "ieId":""
    },
    {
      "nombres":"LUCANA MELENDEZ LIDIA",
      "dni":23911525,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MASIAS GLADYS",
      "dni":25317270,
      "ieId":""
    },
    {
      "nombres":"TRUYENQUE ARESTEGUI PIO MAXIMO",
      "dni":31165235,
      "ieId":""
    },
    {
      "nombres":"ARANDO TORRES SANTOSA",
      "dni":31031406,
      "ieId":""
    },
    {
      "nombres":"BEJAR VILLCA DAMIANA",
      "dni":23809665,
      "ieId":""
    },
    {
      "nombres":"BELLIDO TORRES DORA",
      "dni":24379001,
      "ieId":""
    },
    {
      "nombres":"CCOMPI AMACHI JORGE",
      "dni":24378835,
      "ieId":""
    },
    {
      "nombres":"CCOPA APARICIO TOMASA",
      "dni":23841432,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA PAZ OSCAR",
      "dni":24696920,
      "ieId":""
    },
    {
      "nombres":"FLORES ZAPATA MARITZA",
      "dni":23958247,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QUISPE MARIA ELVA",
      "dni":40342962,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ CAJIGAS LEONARDA",
      "dni":24381446,
      "ieId":""
    },
    {
      "nombres":"LUZA MEZA CRISTINA LOURDES",
      "dni":23813670,
      "ieId":""
    },
    {
      "nombres":"MESTAS GOIZUETA SOLEDAD FELICIANA",
      "dni":23923183,
      "ieId":""
    },
    {
      "nombres":"OCROS LEYVA HILDA",
      "dni":24361258,
      "ieId":""
    },
    {
      "nombres":"QUISPE RAMOS ROSA",
      "dni":23955695,
      "ieId":""
    },
    {
      "nombres":"QUISPE SUCLLE GREGORIO WALTER",
      "dni":24860614,
      "ieId":""
    },
    {
      "nombres":"ROMERO HURTADO RUBEN",
      "dni":5070252,
      "ieId":""
    },
    {
      "nombres":"UGARTE SERCEDA SERGIO",
      "dni":23804613,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA QUISPE WILSON",
      "dni":45404319,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA CAMINADA NORMA",
      "dni":24381266,
      "ieId":""
    },
    {
      "nombres":"ARAGON SEGUNDO GLADYS PAULINA",
      "dni":23868394,
      "ieId":""
    },
    {
      "nombres":"CANAHUIRE CONDORI GERTRUDES",
      "dni":24701491,
      "ieId":""
    },
    {
      "nombres":"CARAZAS YABAR AGRIPINA",
      "dni":23870341,
      "ieId":""
    },
    {
      "nombres":"CENTENO ARENAS PEDRO PABLO",
      "dni":23871566,
      "ieId":""
    },
    {
      "nombres":"CUTIPA HUAMAN JUAN MARIO",
      "dni":23943264,
      "ieId":""
    },
    {
      "nombres":"HUAMANI RONDAN FELICITAS",
      "dni":24364193,
      "ieId":""
    },
    {
      "nombres":"MAYORGA BARCENA RUFINO EDVIN",
      "dni":23953442,
      "ieId":""
    },
    {
      "nombres":"NAVARRETE UMERES ELSA",
      "dni":24362280,
      "ieId":""
    },
    {
      "nombres":"OLIVO DE CAMPANA VALERIA",
      "dni":23917683,
      "ieId":""
    },
    {
      "nombres":"SALCEDO ZUNIGA YNGRID PATRICIA",
      "dni":23927164,
      "ieId":""
    },
    {
      "nombres":"SOLIS MARTINEZ GLORIA",
      "dni":23954778,
      "ieId":""
    },
    {
      "nombres":"TORRES PEÑA MARIA GLADIS",
      "dni":23828365,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI GUTIERREZ ZAMIRA",
      "dni":23865378,
      "ieId":""
    },
    {
      "nombres":"ALCCA SALAS JULIA",
      "dni":23946593,
      "ieId":""
    },
    {
      "nombres":"CAMARA DE TORRES NILDA",
      "dni":23805612,
      "ieId":""
    },
    {
      "nombres":"FARFAN YUPANQUI MARIBEL CIRILA",
      "dni":23856918,
      "ieId":""
    },
    {
      "nombres":"LEYVA VILLAVICENCIO JUSTO",
      "dni":23810577,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ AVILA JUANA SILVIA",
      "dni":23949173,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SORIA PAULINO",
      "dni":31001484,
      "ieId":""
    },
    {
      "nombres":"ARAGON CAHUANA RODOLFO",
      "dni":2301563,
      "ieId":""
    },
    {
      "nombres":"CCAPCHA AVALOS ZENAIDA FRANCISCA",
      "dni":24383155,
      "ieId":""
    },
    {
      "nombres":"CRUZ HUAMAN DANILA",
      "dni":23908051,
      "ieId":""
    },
    {
      "nombres":"ESTRADA CORONADO LUISA",
      "dni":23960713,
      "ieId":""
    },
    {
      "nombres":"GALINDO LOAIZA ITALA",
      "dni":23858582,
      "ieId":""
    },
    {
      "nombres":"VALER BARCENA NANCY BLANCA",
      "dni":23976266,
      "ieId":""
    },
    {
      "nombres":"CARPIO GUZMAN NAYDA",
      "dni":42417635,
      "ieId":""
    },
    {
      "nombres":"GARCIA ARTEAGA CARMEN ROSA",
      "dni":42928085,
      "ieId":""
    },
    {
      "nombres":"HUAMAN USCAMAYTA MARIBEL",
      "dni":42060213,
      "ieId":""
    },
    {
      "nombres":"MAMANI CONDORI NOHEMI",
      "dni":41771418,
      "ieId":""
    },
    {
      "nombres":"MORALES ACURIO MILENA RUTH",
      "dni":23893957,
      "ieId":""
    },
    {
      "nombres":"TRONCOSO GALLEGOS JACINTA",
      "dni":23913367,
      "ieId":""
    },
    {
      "nombres":"BECERRA ABAL GUILLERMINA",
      "dni":23837972,
      "ieId":""
    },
    {
      "nombres":"BERNEDO PORROA FLORA",
      "dni":23828436,
      "ieId":""
    },
    {
      "nombres":"CONCHATUPA ORTIZ DE ORU LEONOR",
      "dni":24361472,
      "ieId":""
    },
    {
      "nombres":"FARFAN MORA JORGE",
      "dni":23909552,
      "ieId":""
    },
    {
      "nombres":"MEZA QUISPE JUANA",
      "dni":23905046,
      "ieId":""
    },
    {
      "nombres":"QUISPE TARCO OLIMPIA GIOVANNA",
      "dni":23955571,
      "ieId":""
    },
    {
      "nombres":"RIOS GUILLEN ISIDORA",
      "dni":31041425,
      "ieId":""
    },
    {
      "nombres":"TTITO QUISPE MARIA ROSA",
      "dni":25000615,
      "ieId":""
    },
    {
      "nombres":"ALFARO HERRERA CAROLINA",
      "dni":23860293,
      "ieId":""
    },
    {
      "nombres":"BALLON SUELDO MARIA",
      "dni":80004769,
      "ieId":""
    },
    {
      "nombres":"MENDOZA GORVINA MARIA SOLEDAD",
      "dni":43486513,
      "ieId":""
    },
    {
      "nombres":"SERRANO PUNCCA YANET",
      "dni":25326237,
      "ieId":""
    },
    {
      "nombres":"VARGAS VILLAFUERTE FRIDA",
      "dni":24390506,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ VARGAS CIPRIANA",
      "dni":23868574,
      "ieId":""
    },
    {
      "nombres":"CORONEL MOLINA FIDEL UBALDO",
      "dni":31041473,
      "ieId":""
    },
    {
      "nombres":"DELGADO ROJAS AMERICO",
      "dni":23902507,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ANDRADE LINA",
      "dni":23831265,
      "ieId":""
    },
    {
      "nombres":"MORA GUTIERREZ SERGIO",
      "dni":23916729,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR AYTE PABLO",
      "dni":24390709,
      "ieId":""
    },
    {
      "nombres":"PINEDA CAYLLAHUA BELINDA",
      "dni":23946958,
      "ieId":""
    },
    {
      "nombres":"PUMA PUMA PLACIDA",
      "dni":23882630,
      "ieId":""
    },
    {
      "nombres":"RAMOS CRUZ FRANCISCO",
      "dni":23803225,
      "ieId":""
    },
    {
      "nombres":"RIOS QUISPE LORENZO",
      "dni":23812898,
      "ieId":""
    },
    {
      "nombres":"VARGAS MOREANO WELLINGTON",
      "dni":24711071,
      "ieId":""
    },
    {
      "nombres":"BERRIO HUAMANI JUANA SALOME",
      "dni":23804481,
      "ieId":""
    },
    {
      "nombres":"CASTRO CASTRO MANUEL GODOFREDO",
      "dni":25062844,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO LEON NEYRUT",
      "dni":23883292,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA MIRANDA PEÑAFOR",
      "dni":23831830,
      "ieId":""
    },
    {
      "nombres":"NINA ESPINOZA FRANCISCO",
      "dni":23882438,
      "ieId":""
    },
    {
      "nombres":"DELGADO QUIÑONES WILBERT LUCIO",
      "dni":23818410,
      "ieId":""
    },
    {
      "nombres":"RIOS QUISPE FRANCISCO",
      "dni":23864004,
      "ieId":""
    },
    {
      "nombres":"VARGAS HUALLPARIMACHI ROCIO",
      "dni":42437864,
      "ieId":""
    },
    {
      "nombres":"LAZO VALDIVIA ILIA",
      "dni":23956056,
      "ieId":""
    },
    {
      "nombres":"CANAL YEPEZ PERCY",
      "dni":23918817,
      "ieId":""
    },
    {
      "nombres":"PALACIOS RAMOS ALEJANDRO",
      "dni":23939351,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALMANZA ANSELMO",
      "dni":24364315,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL VALENZUELA ELSA",
      "dni":10659998,
      "ieId":""
    },
    {
      "nombres":"CABALLERO ESQUIVEL SIMION",
      "dni":23898080,
      "ieId":""
    },
    {
      "nombres":"CONZA CHOQUE KARINA",
      "dni":40486283,
      "ieId":""
    },
    {
      "nombres":"LOAYZA OLIVERA SILVIA",
      "dni":24361178,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN JOSE MIJAIL",
      "dni":42491312,
      "ieId":""
    },
    {
      "nombres":"ROCA MISME YONI",
      "dni":42465575,
      "ieId":""
    },
    {
      "nombres":"CARPIO ARENAS RINA",
      "dni":23859814,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QUISPE BALVINA",
      "dni":23875230,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN QUISPE LOURDES",
      "dni":23950878,
      "ieId":""
    },
    {
      "nombres":"ROCA SINCHI TOMAS",
      "dni":23805990,
      "ieId":""
    },
    {
      "nombres":"VALENCIA DE SANCHEZ MARIA TERESA",
      "dni":23853441,
      "ieId":""
    },
    {
      "nombres":"VERA GUZMAN CLARA",
      "dni":23986939,
      "ieId":""
    },
    {
      "nombres":"BENAVENTE TUERO DARWIN HERBERTH",
      "dni":23852648,
      "ieId":""
    },
    {
      "nombres":"MORA NUÑEZ EULOGIA",
      "dni":23803397,
      "ieId":""
    },
    {
      "nombres":"ORTIZ HUAMAN EYNAR",
      "dni":41236707,
      "ieId":""
    },
    {
      "nombres":"MENA HUAYTA ELIZABETH",
      "dni":23925795,
      "ieId":""
    },
    {
      "nombres":"EGUIA GAMARRA ROMAN CARLOS",
      "dni":23857675,
      "ieId":""
    },
    {
      "nombres":"CASTILLO FLORES PEDRO EMILIANO",
      "dni":17862332,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA BELLIDO LORENZO",
      "dni":23903275,
      "ieId":""
    },
    {
      "nombres":"CORRALES TRUJILLO MARIO NATIVIDAD",
      "dni":23873364,
      "ieId":""
    },
    {
      "nombres":"LLERENA VALCARCEL MIGUEL ANGEL",
      "dni":23981950,
      "ieId":""
    },
    {
      "nombres":"QUISPE CARRASCO WALTER ELOY",
      "dni":41756004,
      "ieId":""
    },
    {
      "nombres":"SOLIS BUSTAMANTE NILO EFRAIN",
      "dni":24383274,
      "ieId":""
    },
    {
      "nombres":"TORRES DEZA CECILIO SEVERO",
      "dni":23906235,
      "ieId":""
    },
    {
      "nombres":"TTITO CAMILO HEBERT",
      "dni":23939932,
      "ieId":""
    },
    {
      "nombres":"VILLENA ARENAS GUIDO ENCARNO",
      "dni":23921090,
      "ieId":""
    },
    {
      "nombres":"ARAGON JIMENEZ MERCEDES",
      "dni":23873659,
      "ieId":""
    },
    {
      "nombres":"ARAGON MERMA CELIN",
      "dni":24713124,
      "ieId":""
    },
    {
      "nombres":"ATAULLUCO SURIHUAYLLA JUANITA",
      "dni":23855400,
      "ieId":""
    },
    {
      "nombres":"AUCCA MENDOZA WILBERT",
      "dni":23912224,
      "ieId":""
    },
    {
      "nombres":"BARRIONUEVO OROSCO WILTON",
      "dni":23926852,
      "ieId":""
    },
    {
      "nombres":"CACERES QUISPE VICENTE",
      "dni":24365668,
      "ieId":""
    },
    {
      "nombres":"CASTILLO SALAS ELIZABETH ROSA",
      "dni":23834909,
      "ieId":""
    },
    {
      "nombres":"CCAPAIQUE COLQUE URBANO",
      "dni":41601107,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ VILCA GUIDO",
      "dni":41659532,
      "ieId":""
    },
    {
      "nombres":"HUAMAN TTITO ELENA",
      "dni":41885584,
      "ieId":""
    },
    {
      "nombres":"HUAMANQUILLA RONDAN DELFINA",
      "dni":7530161,
      "ieId":""
    },
    {
      "nombres":"LENES HUAMANTALLA ANDRES",
      "dni":24379030,
      "ieId":""
    },
    {
      "nombres":"LUQUE LOPEZ WILFREDO ROGER",
      "dni":1212632,
      "ieId":""
    },
    {
      "nombres":"PAUCARMAYTA TACURI FORTUNATO",
      "dni":23832964,
      "ieId":""
    },
    {
      "nombres":"PEÑA LOAYZA CRISTINA",
      "dni":23886571,
      "ieId":""
    },
    {
      "nombres":"POBLETE CORDOVA EFRAIN",
      "dni":24969611,
      "ieId":""
    },
    {
      "nombres":"ROCCA DIAZ ERMINIA",
      "dni":23815429,
      "ieId":""
    },
    {
      "nombres":"RODRIGO CARRASCO FRIDA",
      "dni":23926358,
      "ieId":""
    },
    {
      "nombres":"AYQUIPA ZANABRIA MARISA BASILIA",
      "dni":6801535,
      "ieId":""
    },
    {
      "nombres":"BACA VALLENAS YONI",
      "dni":23838018,
      "ieId":""
    },
    {
      "nombres":"CCOLLATUPA CABRERA NORMA SOFIA",
      "dni":40197308,
      "ieId":""
    },
    {
      "nombres":"FLORES HUAMAN ANDREA",
      "dni":23924984,
      "ieId":""
    },
    {
      "nombres":"HAÑARI COYLA EDY VIANNEY",
      "dni":23956057,
      "ieId":""
    },
    {
      "nombres":"HUALLPARIMACHI VARGAS JUAN FRANCISCO",
      "dni":24387991,
      "ieId":""
    },
    {
      "nombres":"JORGE ILLAPUMA CARMEN",
      "dni":43216562,
      "ieId":""
    },
    {
      "nombres":"LUNA HUAMANI JUAN CARLOS",
      "dni":41160566,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHOQUE LAUREANA",
      "dni":23923446,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI EDGAR",
      "dni":24390440,
      "ieId":""
    },
    {
      "nombres":"MAMANI RAMOS ISMAEL",
      "dni":23930753,
      "ieId":""
    },
    {
      "nombres":"MORALES VIVANCO IRENE",
      "dni":31004416,
      "ieId":""
    },
    {
      "nombres":"OROSCO QUISPE MARI LUZ",
      "dni":41708474,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VARGAS MARIA ANTONIETA",
      "dni":23952689,
      "ieId":""
    },
    {
      "nombres":"PARO VARGAS CARLOS DEMETRIO",
      "dni":24364873,
      "ieId":""
    },
    {
      "nombres":"PILLCO QUISPE GLADYS",
      "dni":23966541,
      "ieId":""
    },
    {
      "nombres":"QUISPE TICONA NICOLAS",
      "dni":23966927,
      "ieId":""
    },
    {
      "nombres":"RAMOS PIPA GABRIEL NOLBERTO",
      "dni":24389562,
      "ieId":""
    },
    {
      "nombres":"ROCA DONGO EFRAIN EDUARDO",
      "dni":23938117,
      "ieId":""
    },
    {
      "nombres":"ROMAN BUSTINZA HILDA",
      "dni":23975377,
      "ieId":""
    },
    {
      "nombres":"AGUILAR SEQUEIROS MARIO",
      "dni":23957080,
      "ieId":""
    },
    {
      "nombres":"CANDIA OLIVERA DONATO",
      "dni":42487241,
      "ieId":""
    },
    {
      "nombres":"CCOA MOJO VICTORIA",
      "dni":2290707,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS ANAYA MILUSKA",
      "dni":40119848,
      "ieId":""
    },
    {
      "nombres":"CRUZ TINCO ELSA",
      "dni":25002658,
      "ieId":""
    },
    {
      "nombres":"GONZALES VIZCARRA FLORENTINO",
      "dni":23890149,
      "ieId":""
    },
    {
      "nombres":"TUCO PAUCARMAITA GREGORIO",
      "dni":24389136,
      "ieId":""
    },
    {
      "nombres":"VARGAS HUACAC WILLIAM",
      "dni":24391724,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ APAZA DEYSI",
      "dni":23943368,
      "ieId":""
    },
    {
      "nombres":"BARREDA TICONA MARIBEL",
      "dni":1777311,
      "ieId":""
    },
    {
      "nombres":"CHINO CHAMBI IRMA",
      "dni":23965004,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ ROMERO RICARDO",
      "dni":23944027,
      "ieId":""
    },
    {
      "nombres":"FLORES LABRA BERNARDINA MERI",
      "dni":23887371,
      "ieId":""
    },
    {
      "nombres":"GAMARRA HUAMAN JULIO",
      "dni":23840555,
      "ieId":""
    },
    {
      "nombres":"KEHUARUCHO CARDENAS ALEJANDRINO",
      "dni":23820283,
      "ieId":""
    },
    {
      "nombres":"LEON DURAN MICHAEL",
      "dni":80029734,
      "ieId":""
    },
    {
      "nombres":"MAMANI MACHACA DE FLORE PASTORA",
      "dni":23994905,
      "ieId":""
    },
    {
      "nombres":"RIMAYHUAMAN HUAMANTTICA HUGO",
      "dni":41127045,
      "ieId":""
    },
    {
      "nombres":"ROMAN BUSTINZA DIANA",
      "dni":23943533,
      "ieId":""
    },
    {
      "nombres":"SALAS SARCCO EVA",
      "dni":23942531,
      "ieId":""
    },
    {
      "nombres":"VARGAS ZUÑIGA YENNY",
      "dni":24006104,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ URBINA EUSTAQUIO ANTONIO",
      "dni":24363690,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ HUILLCA YSABEL",
      "dni":23862378,
      "ieId":""
    },
    {
      "nombres":"ANDRADE DELGADO PEDRO",
      "dni":23918884,
      "ieId":""
    },
    {
      "nombres":"CABRERA QUIÑONES JULIO CESAR",
      "dni":24990369,
      "ieId":""
    },
    {
      "nombres":"CUSI PUMA MARGOT",
      "dni":41431959,
      "ieId":""
    },
    {
      "nombres":"GARCIA ARIAS ELIAS",
      "dni":23953507,
      "ieId":""
    },
    {
      "nombres":"HOLGUIN SEGOVIA DEVIS DANTE",
      "dni":23826327,
      "ieId":""
    },
    {
      "nombres":"HUACAC FIGUEROA ALEXANDER JUSTINO",
      "dni":25001565,
      "ieId":""
    },
    {
      "nombres":"LA HERMOZA CASTILLO JUANA ALEJANDRINA",
      "dni":23831645,
      "ieId":""
    },
    {
      "nombres":"LABRA HUILLCA PEDRO",
      "dni":23887048,
      "ieId":""
    },
    {
      "nombres":"LOAYZA AGUIRRE IVAN",
      "dni":23921288,
      "ieId":""
    },
    {
      "nombres":"LOPEZ NAHUINCAMASCCA JOVITA",
      "dni":23965546,
      "ieId":""
    },
    {
      "nombres":"MAMANI VIZA JESUS",
      "dni":40435582,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS ESCOBAR LIUDVINKA",
      "dni":23943789,
      "ieId":""
    },
    {
      "nombres":"MORA DURAN GLORIA",
      "dni":23882541,
      "ieId":""
    },
    {
      "nombres":"PEÑA CANALES SILVIO",
      "dni":23817120,
      "ieId":""
    },
    {
      "nombres":"PIZARRO ESQUIVEL ROXANA SILVIA",
      "dni":23943147,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUILLCA HILDA",
      "dni":23839440,
      "ieId":""
    },
    {
      "nombres":"RUIZ LOPEZ TOMAS",
      "dni":24382794,
      "ieId":""
    },
    {
      "nombres":"VARGAS PEÑA MIGUEL FERNANDO",
      "dni":31541159,
      "ieId":""
    },
    {
      "nombres":"YANA QUISPE JAVIER",
      "dni":2147678,
      "ieId":""
    },
    {
      "nombres":"AGUILAR PILCO ALBERTO FELIX",
      "dni":23875316,
      "ieId":""
    },
    {
      "nombres":"AUCCA VILLAFUERTE ULISES",
      "dni":23995848,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS TAMATA DENISE AMPARO",
      "dni":24001829,
      "ieId":""
    },
    {
      "nombres":"PERCCA HUAMANTALLA EDWIN EDY",
      "dni":42296287,
      "ieId":""
    },
    {
      "nombres":"ROCCA PEREZ RENE EDMUNDO",
      "dni":43471204,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ SALAS DANIEL",
      "dni":23814677,
      "ieId":""
    },
    {
      "nombres":"PEÑALVA FERNANDEZ YONY",
      "dni":23910584,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL MARCONI IVAN FITZGERALD",
      "dni":23990168,
      "ieId":""
    },
    {
      "nombres":"ESTRADA IBARRA NANCY",
      "dni":23946524,
      "ieId":""
    },
    {
      "nombres":"INCA PAULLO MARCELINA",
      "dni":24362338,
      "ieId":""
    },
    {
      "nombres":"PANIAGUA PERALTA CARMEN JULIA",
      "dni":23872760,
      "ieId":""
    },
    {
      "nombres":"CHACON MEZA NEIDA",
      "dni":24365546,
      "ieId":"mPeXRjbxrurmxAQNK"
    },
    {
      "nombres":"HUAMAN MELENDEZ ANA MARIA",
      "dni":25311953,
      "ieId":""
    },
    {
      "nombres":"LUNA PERALTA NANCY",
      "dni":24364870,
      "ieId":"mPeXRjbxrurmxAQNK"
    },
    {
      "nombres":"MOLINA ALEGRIA JANETTE",
      "dni":23966920,
      "ieId":"mPeXRjbxrurmxAQNK"
    },
    {
      "nombres":"PALOMINO VALENCIA ROSA DURGA",
      "dni":25009390,
      "ieId":"mPeXRjbxrurmxAQNK"
    },
    {
      "nombres":"PINEDA CAYLLAHUA HILDA",
      "dni":40260810,
      "ieId":"mPeXRjbxrurmxAQNK"
    },
    {
      "nombres":"VELASCO FLORES DINA",
      "dni":24002896,
      "ieId":"mPeXRjbxrurmxAQNK"
    },
    {
      "nombres":"ESPINOZA POCCO EDITH",
      "dni":44782020,
      "ieId":""
    },
    {
      "nombres":"MONTUFAR GARCIA CRISTINA",
      "dni":25200274,
      "ieId":""
    },
    {
      "nombres":"ZARATE HUILLCA ERIKA",
      "dni":24001692,
      "ieId":""
    },
    {
      "nombres":"SILVA PERALTA YADIRA",
      "dni":23860012,
      "ieId":""
    },
    {
      "nombres":"CABALLERO ALARCON LUZ MIRIAN",
      "dni":24000202,
      "ieId":""
    },
    {
      "nombres":"IBARRA DELGADO XINIA AMPARO",
      "dni":23934450,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ BOBADILLA LEONOR",
      "dni":23860306,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ DEL PRADO APARICI IRMA ROSARIO",
      "dni":23855826,
      "ieId":""
    },
    {
      "nombres":"QUISPE AMPUERO NELY",
      "dni":24985915,
      "ieId":""
    },
    {
      "nombres":"SOSA CARPIO JESSICA",
      "dni":23987171,
      "ieId":""
    },
    {
      "nombres":"LUNA PAGUADA AYDEE",
      "dni":46861990,
      "ieId":""
    },
    {
      "nombres":"NAVARRO ALTAMIRANO VICTORIA",
      "dni":23848965,
      "ieId":""
    },
    {
      "nombres":"QUISPE ICHUHUAYTA SANDRA YUDITH",
      "dni":41816192,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS VDA DE CASTRO SABINA",
      "dni":23808091,
      "ieId":""
    },
    {
      "nombres":"FERRO VASQUEZ YONY GRACIELA",
      "dni":23926515,
      "ieId":""
    },
    {
      "nombres":"FLORES RIBBECK ELIZABETH",
      "dni":40425732,
      "ieId":""
    },
    {
      "nombres":"NAVARRETE CHUQUIHUAYTA MELVIN",
      "dni":24389454,
      "ieId":""
    },
    {
      "nombres":"EDUARDO SALAZAR YOBELI MARIVEL",
      "dni":1341728,
      "ieId":""
    },
    {
      "nombres":"QUISPE TTITO HILDA",
      "dni":23976068,
      "ieId":""
    },
    {
      "nombres":"ACURIO SALAZAR YOVANA",
      "dni":23943108,
      "ieId":""
    },
    {
      "nombres":"CCOLLATUPA CHOQUECCAHUA INES",
      "dni":24389563,
      "ieId":""
    },
    {
      "nombres":"VALLE ROMERO NILDA PRIMITIVA",
      "dni":24460870,
      "ieId":""
    },
    {
      "nombres":"PAUCAR HUAYOTUMA HEINER WUALBERTO",
      "dni":40750254,
      "ieId":""
    },
    {
      "nombres":"PORROA GUDIEL DELIA",
      "dni":23985293,
      "ieId":""
    },
    {
      "nombres":"MARISCAL CAZORLA ROSA MAGNOLIA",
      "dni":24378393,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA GUEVARA LISSETH",
      "dni":41882391,
      "ieId":""
    },
    {
      "nombres":"MONTOYA CABALLERO SANDRA CAROLINA",
      "dni":43985569,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CARAZAS MARIBEL",
      "dni":43847854,
      "ieId":""
    },
    {
      "nombres":"CUTI VIZA MANUELA ROCIO",
      "dni":29539906,
      "ieId":""
    },
    {
      "nombres":"CONDORI APAZA CESAR",
      "dni":42196107,
      "ieId":""
    },
    {
      "nombres":"CANDIA OLIVERA ANA IRENE",
      "dni":40282260,
      "ieId":""
    },
    {
      "nombres":"CARPIO CARPIO LILIA MILAGROS",
      "dni":42149862,
      "ieId":""
    },
    {
      "nombres":"OLIVERA CCOLLATUPA JULIA",
      "dni":40069614,
      "ieId":""
    },
    {
      "nombres":"PEREZ ARONE YOLANDA",
      "dni":41007998,
      "ieId":""
    },
    {
      "nombres":"HUAMULLO ROSADO MONICA",
      "dni":9597899,
      "ieId":""
    },
    {
      "nombres":"GUARDAPUCLLA ESPINOZA LUZMARINA",
      "dni":24392606,
      "ieId":""
    },
    {
      "nombres":"CURO SOTO DELIA",
      "dni":24719077,
      "ieId":""
    },
    {
      "nombres":"CABRERA CANALES NANCY",
      "dni":24703186,
      "ieId":""
    },
    {
      "nombres":"CANDIA BERROCAL DORIS",
      "dni":24366032,
      "ieId":""
    },
    {
      "nombres":"DURAN LOAIZA YSABELINA",
      "dni":23830445,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAITA VDA DE MUÑ IRENE",
      "dni":23888323,
      "ieId":""
    },
    {
      "nombres":"HUILLCA TENIENTE NATIVIDAD",
      "dni":24365420,
      "ieId":""
    },
    {
      "nombres":"LUNA PERALTA ELSA FRANCISCA",
      "dni":24361616,
      "ieId":""
    },
    {
      "nombres":"OJEDA VARGAS NATIVIDAD",
      "dni":24365553,
      "ieId":""
    },
    {
      "nombres":"PACHECO FARFAN ANIBAL ERNESTO",
      "dni":23879122,
      "ieId":""
    },
    {
      "nombres":"PAREJA VARGAS CARMELA",
      "dni":23832392,
      "ieId":""
    },
    {
      "nombres":"POCCO PUMA ADRIAN",
      "dni":24363133,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE SANTIAGO AUGUSTO",
      "dni":23912218,
      "ieId":""
    },
    {
      "nombres":"ROMAN CARDENAS ISELA",
      "dni":23830443,
      "ieId":""
    },
    {
      "nombres":"SOLIS TORRES NORMA FRANCISCA",
      "dni":31300560,
      "ieId":""
    },
    {
      "nombres":"VARGAS PAREJA OLGA SEBERINA",
      "dni":24364293,
      "ieId":""
    },
    {
      "nombres":"ARRIAGA HUALLPARIMACHI LUIS",
      "dni":24360339,
      "ieId":""
    },
    {
      "nombres":"CAVERO ESPINO MARIA DEL ROSARIO",
      "dni":23964303,
      "ieId":""
    },
    {
      "nombres":"CONCHA SANCHEZ DORIS",
      "dni":23825033,
      "ieId":""
    },
    {
      "nombres":"MASIAS USCAMAITA CAYETANO",
      "dni":25318433,
      "ieId":""
    },
    {
      "nombres":"URBINA PUMA LIVIA",
      "dni":24360150,
      "ieId":""
    },
    {
      "nombres":"URRUTIA MENDOZA NORMA BEATRIZ",
      "dni":23868159,
      "ieId":""
    },
    {
      "nombres":"VALDERRAMA ACURIO MILTON",
      "dni":23878925,
      "ieId":""
    },
    {
      "nombres":"VARGAS PAREJA GRISSON",
      "dni":24365355,
      "ieId":""
    },
    {
      "nombres":"CAMPANA CACERES NELLY",
      "dni":23817854,
      "ieId":""
    },
    {
      "nombres":"CLAROS CENTENO FELIX OSCAR",
      "dni":23808003,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR SEGOVIA FELIX OCTAVIO",
      "dni":25304063,
      "ieId":""
    },
    {
      "nombres":"GONZALES CACERES DE AMA GUILLERMINA",
      "dni":24362180,
      "ieId":""
    },
    {
      "nombres":"GUEVARA CCOSCCO GAVINO",
      "dni":23827979,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ MEDINA GRIMALDO",
      "dni":24361192,
      "ieId":""
    },
    {
      "nombres":"POCCO PUMA MOISES WILFREDO",
      "dni":24360441,
      "ieId":""
    },
    {
      "nombres":"PONCE DE LEON PAGUADA ALEJANDRINA",
      "dni":24361154,
      "ieId":""
    },
    {
      "nombres":"SILVA JORDAN AYDEE",
      "dni":23849867,
      "ieId":""
    },
    {
      "nombres":"TAPIA LOPEZ LUDEK MARIETHA",
      "dni":23933795,
      "ieId":""
    },
    {
      "nombres":"ZAPATA MONTOYA CASILDA",
      "dni":23854721,
      "ieId":""
    },
    {
      "nombres":"ÑAUPAC TORRE ALEJANDRINA",
      "dni":23848600,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ACURIO ROSA MARIA",
      "dni":23816690,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO ALLAHUA CLOTILDE",
      "dni":23821398,
      "ieId":""
    },
    {
      "nombres":"CARRENO FIGUEROA ELENA",
      "dni":23844737,
      "ieId":""
    },
    {
      "nombres":"ENCALADA LUCANA ROSA",
      "dni":23910015,
      "ieId":""
    },
    {
      "nombres":"GUILLEN CAMPOS KELMA LOURDES",
      "dni":23928935,
      "ieId":""
    },
    {
      "nombres":"LEIVA MOSCOSO WALTHER",
      "dni":25326215,
      "ieId":""
    },
    {
      "nombres":"LLAVE HUAMAN MARIA",
      "dni":23870427,
      "ieId":""
    },
    {
      "nombres":"ZURITA CACERES SILVIA CAROLINA",
      "dni":24391642,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VALENCIA ANDREA ABELINA",
      "dni":23815636,
      "ieId":""
    },
    {
      "nombres":"CHALLCO OJEDA DE GUTIER YOLANDA",
      "dni":24383480,
      "ieId":""
    },
    {
      "nombres":"COLLATUPA ALAGON IRMA",
      "dni":25002088,
      "ieId":""
    },
    {
      "nombres":"HERRERA PILARES RUTH ROCIO",
      "dni":24708078,
      "ieId":""
    },
    {
      "nombres":"NU-EZ NU-EZ ANGELA ROCIO",
      "dni":2045783,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA DIAZ LUZMILA",
      "dni":23917986,
      "ieId":""
    },
    {
      "nombres":"ZARATE MENDOZA ISAURA",
      "dni":24701850,
      "ieId":""
    },
    {
      "nombres":"ALVARADO CONDORI MARGARITA ALACOQUE",
      "dni":23899395,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL MESCO MIRIAM",
      "dni":23893538,
      "ieId":""
    },
    {
      "nombres":"HUALLPARIMACHI QUISPE D SILVIA",
      "dni":23864519,
      "ieId":""
    },
    {
      "nombres":"HUANUCO DELGADO YENNY LIDIA",
      "dni":23952423,
      "ieId":""
    },
    {
      "nombres":"MARMANILLO CANSAYA MARIA JESUS",
      "dni":23878912,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ZANABRIA JULIA",
      "dni":23925106,
      "ieId":""
    },
    {
      "nombres":"PAZO QUINTANILLA LUCIANA",
      "dni":24468211,
      "ieId":""
    },
    {
      "nombres":"ROCA ACCOSTUPA ESTHER",
      "dni":41941993,
      "ieId":""
    },
    {
      "nombres":"ROSA CUSI RICARDINA",
      "dni":23994720,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA OCHOA EDITH HAIDEE",
      "dni":24991695,
      "ieId":""
    },
    {
      "nombres":"SALAS GONZALES YONY BENECIA",
      "dni":24363239,
      "ieId":""
    },
    {
      "nombres":"TINOCO FIGUEROA ADRIAN",
      "dni":23903862,
      "ieId":""
    },
    {
      "nombres":"TOCRE VILLANUEVA YONI",
      "dni":23965759,
      "ieId":""
    },
    {
      "nombres":"USNAYO MEDRANO ELSA",
      "dni":24668470,
      "ieId":""
    },
    {
      "nombres":"CORTEZ ROMAN GLADYS",
      "dni":23990804,
      "ieId":""
    },
    {
      "nombres":"FARFAN PALMA LUZ MARINA",
      "dni":23949325,
      "ieId":""
    },
    {
      "nombres":"GUEVARA CARRILLO NOHEMI",
      "dni":23885842,
      "ieId":""
    },
    {
      "nombres":"UMAN RAMIREZ TRINIDAD VILMA",
      "dni":23937778,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ALARCON TULA LUZ",
      "dni":23992861,
      "ieId":""
    },
    {
      "nombres":"ENCISO DE VARGAS ERNESTINA",
      "dni":23962925,
      "ieId":""
    },
    {
      "nombres":"ESTOFANERO VARGAS EUFRACIA",
      "dni":23990752,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CUSIRIMAY AUGUSTO",
      "dni":24362808,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ ECHEGARAY MARITZA",
      "dni":23965013,
      "ieId":""
    },
    {
      "nombres":"CAMERO ACERO YINA",
      "dni":43081282,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR SEGOVIA FELIPE",
      "dni":23946246,
      "ieId":""
    },
    {
      "nombres":"DURAN CANDIA AGUSTINA",
      "dni":25318451,
      "ieId":""
    },
    {
      "nombres":"ELGUERA CAMERO LUCIO",
      "dni":24360730,
      "ieId":""
    },
    {
      "nombres":"FARFAN CASTILLA MARIA BELEN",
      "dni":25061565,
      "ieId":""
    },
    {
      "nombres":"HUAMAN VILLAFUERTE CARLOS ALBERTO",
      "dni":24383342,
      "ieId":""
    },
    {
      "nombres":"LAZO DE PACHECO JULIA",
      "dni":24368202,
      "ieId":""
    },
    {
      "nombres":"MEZA GUILLEN IRMA",
      "dni":23952214,
      "ieId":""
    },
    {
      "nombres":"PAREDES RIOS LUCIA",
      "dni":31039650,
      "ieId":""
    },
    {
      "nombres":"TRIVEÑOS FELIX CLETO BONIFACIO",
      "dni":23865857,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR HUAMAN CELIA",
      "dni":24383201,
      "ieId":""
    },
    {
      "nombres":"ARO FLOREZ MABEL",
      "dni":23956178,
      "ieId":""
    },
    {
      "nombres":"CANAL ZEVALLOS EDWIN RODOLFO",
      "dni":23813974,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ATAULLUCO JESSICA VERONICA",
      "dni":43041356,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CHUTAS WILLIAN",
      "dni":42065719,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PAUCAR ANGEL",
      "dni":24360004,
      "ieId":""
    },
    {
      "nombres":"VARGAS PAUCAR MIGUEL",
      "dni":43117572,
      "ieId":""
    },
    {
      "nombres":"ACOSTUPA ANGULO ALEX",
      "dni":23951203,
      "ieId":""
    },
    {
      "nombres":"CRUZ MAYTA ROSA LUZ",
      "dni":24718210,
      "ieId":""
    },
    {
      "nombres":"HUILLCA PIZARRO NILO CIPRIAN",
      "dni":24368378,
      "ieId":""
    },
    {
      "nombres":"MAMANI ZARATE NICANOR",
      "dni":23877127,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ GONZALES PERCY",
      "dni":31010301,
      "ieId":""
    },
    {
      "nombres":"VARGAS HUALLPARIMACHI AURELIO",
      "dni":24361696,
      "ieId":""
    },
    {
      "nombres":"ABARCA CARRASCO ANGELICA",
      "dni":23963867,
      "ieId":""
    },
    {
      "nombres":"ACHAHUANCO AEDO MARIBEL",
      "dni":24700167,
      "ieId":""
    },
    {
      "nombres":"BLANCO LUCANA NORKA ROSANNA",
      "dni":23936137,
      "ieId":""
    },
    {
      "nombres":"BORDA QUISPE VICTORINO",
      "dni":24367053,
      "ieId":""
    },
    {
      "nombres":"CABRERA FLORES ROSARIO ALEJANDRINA",
      "dni":23984909,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA DURAN SERAPIO",
      "dni":25318586,
      "ieId":""
    },
    {
      "nombres":"DURAND SEQUEIROS ALBERTO",
      "dni":31526198,
      "ieId":""
    },
    {
      "nombres":"GARCIA RIOS VIOLETA JANETT",
      "dni":23869906,
      "ieId":""
    },
    {
      "nombres":"HUAMANTICA AUCCACUSI FLAVIO",
      "dni":23935587,
      "ieId":""
    },
    {
      "nombres":"LLACMA CHOQQUE NARCISO",
      "dni":23996069,
      "ieId":""
    },
    {
      "nombres":"RIMAYHUAMAN MONROY JENNY",
      "dni":25217981,
      "ieId":""
    },
    {
      "nombres":"TTITO POCCORI BETHY",
      "dni":40764090,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA VELASQUE JULIANA",
      "dni":23812982,
      "ieId":""
    },
    {
      "nombres":"ASTETE HANAMPA OSCAR",
      "dni":24369369,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA CONZA EFRAIN",
      "dni":24717252,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SALAS FLORENCIO",
      "dni":24362557,
      "ieId":""
    },
    {
      "nombres":"QUISPE NOA JUAN",
      "dni":41068354,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GORVENIA HALINA",
      "dni":23926307,
      "ieId":""
    },
    {
      "nombres":"CHACON RIOS FELICITAS",
      "dni":23938614,
      "ieId":""
    },
    {
      "nombres":"CORNEJO GUTIERREZ MARUJA ESTHER",
      "dni":4824932,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN LIZARASO RICARDO",
      "dni":24367000,
      "ieId":""
    },
    {
      "nombres":"LATORRE SALAZAR NELY",
      "dni":24367501,
      "ieId":""
    },
    {
      "nombres":"LOAIZA CAMPANA ISABEL JOSEFINA",
      "dni":23993660,
      "ieId":""
    },
    {
      "nombres":"PEREZ MORALES SENON",
      "dni":25303337,
      "ieId":""
    },
    {
      "nombres":"QUISPE TTITO ISABEL",
      "dni":23892098,
      "ieId":""
    },
    {
      "nombres":"RICALDE CACERES ELIAS SANTIAGO",
      "dni":23902073,
      "ieId":""
    },
    {
      "nombres":"ROMERO DE UMERES YOLANDA",
      "dni":23918342,
      "ieId":""
    },
    {
      "nombres":"TTITO GUARDAPUCLLA EDILBERTO",
      "dni":23912219,
      "ieId":""
    },
    {
      "nombres":"VALENCIA ESPINOZA PAULINA",
      "dni":23810018,
      "ieId":""
    },
    {
      "nombres":"GRANADA CCOLLATUPA HIGIDIO",
      "dni":24361680,
      "ieId":""
    },
    {
      "nombres":"MEDINA ALVA EVELYN SLY",
      "dni":45017628,
      "ieId":""
    },
    {
      "nombres":"MESCCO ROSAS JUANA",
      "dni":24383650,
      "ieId":""
    },
    {
      "nombres":"PINTO FARFAN NARDA TEODORA",
      "dni":23814604,
      "ieId":""
    },
    {
      "nombres":"UBALDE BORDA RICHARD",
      "dni":40749951,
      "ieId":""
    },
    {
      "nombres":"YLLA ROJAS PERSI",
      "dni":25314766,
      "ieId":""
    },
    {
      "nombres":"DE LA CUBA EZQUERRA NANCY FIDELIA",
      "dni":23882939,
      "ieId":""
    },
    {
      "nombres":"BERRIOS JIMENEZ SILVIA AGRIPINA",
      "dni":23877645,
      "ieId":""
    },
    {
      "nombres":"DEZA DEL CARPIO JUANA ESPERANZA",
      "dni":24951959,
      "ieId":""
    },
    {
      "nombres":"SARABIA PEZO FANI",
      "dni":24363990,
      "ieId":""
    },
    {
      "nombres":"ARQQUE QUISPE MELIZA",
      "dni":42170840,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ILLA LEONARDA",
      "dni":24000557,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI MOLLAPAZA JUAN CANCIO",
      "dni":23802663,
      "ieId":""
    },
    {
      "nombres":"CASTRO PAJA CESARIO",
      "dni":41069166,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS HUAMAN ROSA ANDREA",
      "dni":24374159,
      "ieId":""
    },
    {
      "nombres":"FRANCO QUISPE SUSANA",
      "dni":23982311,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS TENIENTE JUAN",
      "dni":23995957,
      "ieId":""
    },
    {
      "nombres":"GAMARRA HUISÑAY YONY",
      "dni":23880298,
      "ieId":""
    },
    {
      "nombres":"HUAICOCHEA PACHECO WILBER",
      "dni":10576962,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LLAMACPONCCA MARTHA",
      "dni":24389585,
      "ieId":""
    },
    {
      "nombres":"TACURI CALANCHI VICTORIANO",
      "dni":23837880,
      "ieId":""
    },
    {
      "nombres":"VERA CCOLLATUPA YADIBEL",
      "dni":42789287,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ PALOMINO CARMEN ROSA",
      "dni":23872777,
      "ieId":""
    },
    {
      "nombres":"ROMAN SEQUEIROS BERNARDINA",
      "dni":23806138,
      "ieId":""
    },
    {
      "nombres":"VARGAS MOSCOSO CARMEN",
      "dni":23902164,
      "ieId":""
    },
    {
      "nombres":"MORVELI BERROCAL TANIA",
      "dni":24003432,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO BUSTAMANTE VERONICA",
      "dni":25304413,
      "ieId":""
    },
    {
      "nombres":"MAMANI CONDORI LUIS",
      "dni":23876930,
      "ieId":""
    },
    {
      "nombres":"LOVATON BERMUDEZ NANCY VICITACION",
      "dni":23899713,
      "ieId":""
    },
    {
      "nombres":"OVIEDO GUZMAN SEGUNDINA",
      "dni":23880522,
      "ieId":""
    },
    {
      "nombres":"MONTALVO GARCIA JHONNY VICKY",
      "dni":23860094,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ JURADO MILAGROS",
      "dni":25320347,
      "ieId":""
    },
    {
      "nombres":"ANDRADE QUISPE JUSTINA",
      "dni":24365763,
      "ieId":""
    },
    {
      "nombres":"BACA MEJIA CIRIA",
      "dni":44559928,
      "ieId":""
    },
    {
      "nombres":"BACA MELENDRES JUAN DE DIOS",
      "dni":24362806,
      "ieId":""
    },
    {
      "nombres":"CANDIA GUZMAN NILO",
      "dni":23937539,
      "ieId":""
    },
    {
      "nombres":"CARPIO GARCIA SARITA MARITZA",
      "dni":23881891,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LOPEZ ANA MARIA",
      "dni":40456508,
      "ieId":""
    },
    {
      "nombres":"HUANACI QUISPE MARCELINA",
      "dni":23808153,
      "ieId":""
    },
    {
      "nombres":"HUAYPAR MARURI VILMA",
      "dni":24364367,
      "ieId":""
    },
    {
      "nombres":"MIRANDA MARTINEZ ELIZABETH",
      "dni":23874888,
      "ieId":""
    },
    {
      "nombres":"MOLINA ARANDA MARIO FREDY",
      "dni":23923635,
      "ieId":""
    },
    {
      "nombres":"PILLCO HUACAC ROSA ANGELICA",
      "dni":24364625,
      "ieId":""
    },
    {
      "nombres":"SALAZAR ROMERO PAULINA ROSA",
      "dni":23822061,
      "ieId":""
    },
    {
      "nombres":"ZAVALA MEJIA CONSUELO",
      "dni":23963211,
      "ieId":""
    },
    {
      "nombres":"CHARA DAMIAN VICTORIA",
      "dni":23960877,
      "ieId":""
    },
    {
      "nombres":"IBARRA VIVANCO CLORINDA",
      "dni":23941578,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA QUISPE TEOFILO",
      "dni":24370030,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA CASTRO ROSA ELSA",
      "dni":23904473,
      "ieId":""
    },
    {
      "nombres":"FARFAN PEREYRA ELOY ZENOBIO",
      "dni":23852020,
      "ieId":""
    },
    {
      "nombres":"HUACARPUMA MAMANI UNE",
      "dni":23935249,
      "ieId":""
    },
    {
      "nombres":"QUISPE GONZALEZ BERTHA",
      "dni":23914538,
      "ieId":""
    },
    {
      "nombres":"QUIÑONEZ GUZMAN BASILIA",
      "dni":23841966,
      "ieId":""
    },
    {
      "nombres":"MAMANI ESCOBAR EUSEBIO FAUSTINO",
      "dni":23843668,
      "ieId":""
    },
    {
      "nombres":"GONZALES CHAVEZ JULIO",
      "dni":23844865,
      "ieId":""
    },
    {
      "nombres":"APAZA KACHAHUALLPA MARIO SALOME",
      "dni":24361055,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA MOLINA DE UME MARLENI",
      "dni":42059252,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ SAYCCO SEGUNDINO",
      "dni":23822588,
      "ieId":""
    },
    {
      "nombres":"ANCCO PICHUILLA MARCO ANTONIO",
      "dni":23977629,
      "ieId":""
    },
    {
      "nombres":"ATAU SANTA CRUZ JUAN VICTOR",
      "dni":42292797,
      "ieId":""
    },
    {
      "nombres":"AUCCACUSI CHOQUE BERTHA",
      "dni":23857141,
      "ieId":""
    },
    {
      "nombres":"CALLO QUISPE EDGAR",
      "dni":1544738,
      "ieId":""
    },
    {
      "nombres":"CATACORA CARPIO GLORIA GUILLERMINA",
      "dni":23880692,
      "ieId":""
    },
    {
      "nombres":"CCORAHUA CCUMO ROMULO",
      "dni":23840583,
      "ieId":""
    },
    {
      "nombres":"CCOSCCO SURCO JORGE LUIS",
      "dni":24392712,
      "ieId":""
    },
    {
      "nombres":"CHACON ARANIBAR LUCILA",
      "dni":23826582,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA CHUQUITAPA VALENTIN",
      "dni":24707548,
      "ieId":""
    },
    {
      "nombres":"CHURA JALLASI CESARIO",
      "dni":24006941,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA QUISPE VICTOR SEGUNDO",
      "dni":24362426,
      "ieId":""
    },
    {
      "nombres":"GAMARRA BOZA CIRILO",
      "dni":24388046,
      "ieId":""
    },
    {
      "nombres":"GAMARRA MOSCOSO JULIO CESAR",
      "dni":23802840,
      "ieId":""
    },
    {
      "nombres":"GARCIA SEGOVIA CRISTOBAL",
      "dni":24360750,
      "ieId":""
    },
    {
      "nombres":"GONZALES GALLEGOS VALENTIN",
      "dni":23804787,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CHILLITUPA PORFIRIO",
      "dni":24360720,
      "ieId":""
    },
    {
      "nombres":"HANCCO QUICO NORMA",
      "dni":23961695,
      "ieId":""
    },
    {
      "nombres":"HANCO MENDOZA PIO MARTIN",
      "dni":23855601,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA HUAMAN DE MAM CLARA SILVIA",
      "dni":24383024,
      "ieId":""
    },
    {
      "nombres":"HUILLCA CCAPCHA JAVIER",
      "dni":24382456,
      "ieId":""
    },
    {
      "nombres":"LENES BORDA YOBANA",
      "dni":24366367,
      "ieId":""
    },
    {
      "nombres":"LEON HUAMANI CIRO",
      "dni":40178065,
      "ieId":""
    },
    {
      "nombres":"LUCANA CCORI RENE LEONCIO",
      "dni":23803716,
      "ieId":""
    },
    {
      "nombres":"MORALES OLAYUNCA HURBELINDA",
      "dni":23958008,
      "ieId":""
    },
    {
      "nombres":"MULTHUAPTFF ARAGON MARCO AURELIO",
      "dni":24707351,
      "ieId":""
    },
    {
      "nombres":"ORCOSUPA PAUCAR ARMANDO",
      "dni":23937750,
      "ieId":""
    },
    {
      "nombres":"OTAZU UGARTE MARTIN",
      "dni":23886177,
      "ieId":""
    },
    {
      "nombres":"PERALES PERRIGGO LAURA LUZMILA",
      "dni":23821886,
      "ieId":""
    },
    {
      "nombres":"PORROA ESPINOZA VICTOR ELECBAN",
      "dni":24388445,
      "ieId":""
    },
    {
      "nombres":"QUEHUARUCHO RAMIREZ REYNA ISABEL",
      "dni":23826070,
      "ieId":""
    },
    {
      "nombres":"QUISPE AÑO EPIFANIO",
      "dni":24364210,
      "ieId":""
    },
    {
      "nombres":"SALLO TTITO JUAN DE DIOS",
      "dni":24384143,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SALAZAR REYNALDO",
      "dni":23846130,
      "ieId":""
    },
    {
      "nombres":"SOTO QUISPE REYNALDO",
      "dni":45590111,
      "ieId":""
    },
    {
      "nombres":"SURCO HUALLPA TEODORO",
      "dni":4742370,
      "ieId":""
    },
    {
      "nombres":"TAIÑA LOAIZA RAQUEL",
      "dni":23916258,
      "ieId":""
    },
    {
      "nombres":"TAPIA GARCIA JULIAN",
      "dni":23831449,
      "ieId":""
    },
    {
      "nombres":"TICONA PAMPA ISIDRO",
      "dni":23990378,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA MOLINA CAROLINA",
      "dni":23939224,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA SILVA DRUSILA ESPERANZA",
      "dni":23936257,
      "ieId":""
    },
    {
      "nombres":"VARGAS ENRIQUEZ HARRY PETER",
      "dni":42427566,
      "ieId":""
    },
    {
      "nombres":"YUCRA CHAVEZ LUCIO",
      "dni":23857556,
      "ieId":""
    },
    {
      "nombres":"ATALLUZ ALVARADO WILBERT ROLAND",
      "dni":24365196,
      "ieId":""
    },
    {
      "nombres":"CHAUCA NAVIA JENNIFER ZADITH",
      "dni":43558777,
      "ieId":""
    },
    {
      "nombres":"CRUZ HUAMAN RAUL",
      "dni":23960295,
      "ieId":""
    },
    {
      "nombres":"GUZMAN CARPIO PAULINA CARMELA",
      "dni":23820007,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PILLCO RODOLFO",
      "dni":40257421,
      "ieId":""
    },
    {
      "nombres":"MOINA HUALLPARIMACHI GUILLERMO",
      "dni":24362787,
      "ieId":""
    },
    {
      "nombres":"OQUENDO DIAZ ANGELICA",
      "dni":23949255,
      "ieId":""
    },
    {
      "nombres":"PEÑALVA YBARRA LUIS BELTRAN",
      "dni":23819432,
      "ieId":""
    },
    {
      "nombres":"RAMOS MAMANI HUGO RICHARD",
      "dni":1340975,
      "ieId":""
    },
    {
      "nombres":"ROMAINVILLE PALMA WILBERT",
      "dni":23966298,
      "ieId":""
    },
    {
      "nombres":"SUMIRE BUSTINCIO JENNY JAKELINNE",
      "dni":23976591,
      "ieId":""
    },
    {
      "nombres":"UGARTE SUMIRE SOFIA",
      "dni":23921435,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ MAMANI CIPRIANO MAURO",
      "dni":23932010,
      "ieId":""
    },
    {
      "nombres":"CASAZOLA MONTAÑEZ ELOHIM LEVI",
      "dni":24486093,
      "ieId":""
    },
    {
      "nombres":"COTRINA SANCHEZ JOSE",
      "dni":23853374,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ QUINTANILLA LIBIA",
      "dni":23829043,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ TAPIA ALEJANDRO",
      "dni":42955997,
      "ieId":""
    },
    {
      "nombres":"LATORRE TITO ELOY ASUNCION",
      "dni":24366832,
      "ieId":""
    },
    {
      "nombres":"LAVILLA QUISPE YONY SELMI",
      "dni":24713511,
      "ieId":""
    },
    {
      "nombres":"MAMANI GOMEZ JULIAN",
      "dni":23805958,
      "ieId":""
    },
    {
      "nombres":"PILA CHULLO NARCISO PERCY",
      "dni":40567238,
      "ieId":""
    },
    {
      "nombres":"PRIETO CASTILLA CELIA",
      "dni":23880041,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHOQUE LADISLAO",
      "dni":31542706,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ ROCCA JULIA EULOGIA",
      "dni":23851952,
      "ieId":""
    },
    {
      "nombres":"SAICO ZAMATA SANTIAGO",
      "dni":24871254,
      "ieId":""
    },
    {
      "nombres":"YUCRA RAMOS PABLO MAXI",
      "dni":23911757,
      "ieId":""
    },
    {
      "nombres":"ZUBIZARRETA ROCA EDWIN HERNAN",
      "dni":80225892,
      "ieId":""
    },
    {
      "nombres":"ARAUJO OLIVERA GUIDO LEONARDO",
      "dni":24364910,
      "ieId":""
    },
    {
      "nombres":"CORONEL MOLINA SANTIAGO TOMAS",
      "dni":23936203,
      "ieId":""
    },
    {
      "nombres":"FLORES LABRA BERNARDINA MERI",
      "dni":23887371,
      "ieId":""
    },
    {
      "nombres":"FLOREZ QUISPE MAURICIA",
      "dni":23838537,
      "ieId":""
    },
    {
      "nombres":"JUAREZ PEÑA MARIA CLARISA",
      "dni":23993570,
      "ieId":""
    },
    {
      "nombres":"LEZAMA ALBARRACIN CARLOS RODOLFO",
      "dni":23839244,
      "ieId":""
    },
    {
      "nombres":"PALACIOS CONDORI RAFAELA",
      "dni":24697726,
      "ieId":""
    },
    {
      "nombres":"PALMA GAMARRA FREDY",
      "dni":24392759,
      "ieId":""
    },
    {
      "nombres":"PAZ CAJIGAS MARIA ANTONIETA",
      "dni":23894231,
      "ieId":""
    },
    {
      "nombres":"QUISPE MENDOZA LEONCIO",
      "dni":24390824,
      "ieId":""
    },
    {
      "nombres":"RIVAS LOPEZ JANETTE",
      "dni":23919441,
      "ieId":""
    },
    {
      "nombres":"SALAZAR YAUTA ESTELA",
      "dni":23829194,
      "ieId":""
    },
    {
      "nombres":"SERRANO MEZA JUAN CARLOS",
      "dni":1888710,
      "ieId":""
    },
    {
      "nombres":"VILA CONDORI WILFREDO",
      "dni":24994348,
      "ieId":""
    },
    {
      "nombres":"ATAULLUCO HUAMAN LUIS",
      "dni":24361422,
      "ieId":""
    },
    {
      "nombres":"BARRAL DURAN JUAN",
      "dni":29311142,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA MENDOZA ROBERTO",
      "dni":23901874,
      "ieId":""
    },
    {
      "nombres":"CALLA QUISPE JAVIER RAMON",
      "dni":2425382,
      "ieId":""
    },
    {
      "nombres":"CASO HUARACALLO ELSA FELICITAS",
      "dni":23832013,
      "ieId":""
    },
    {
      "nombres":"CONDORI CHUNCHO SILVIA",
      "dni":23958799,
      "ieId":""
    },
    {
      "nombres":"CRUZ VERA MARITZA",
      "dni":23899327,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL MOJONERO CONSTANTINA",
      "dni":25209296,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HUALLPAMAYTA TEOFILO",
      "dni":23892757,
      "ieId":""
    },
    {
      "nombres":"MEDINA SALAS HECTOR",
      "dni":23932435,
      "ieId":""
    },
    {
      "nombres":"MIRANDA DELGADO ALFREDO",
      "dni":23805011,
      "ieId":""
    },
    {
      "nombres":"PINARES MEDINA NARDA",
      "dni":23861983,
      "ieId":""
    },
    {
      "nombres":"SONCCO QUISPE ALFONSO",
      "dni":44587663,
      "ieId":""
    },
    {
      "nombres":"VARGAS PAREJA AQUILINO WALTER",
      "dni":24363372,
      "ieId":""
    },
    {
      "nombres":"VERA CHA-I SONIA",
      "dni":23949441,
      "ieId":""
    },
    {
      "nombres":"VERA CUSIYUPANQUI OLINDA ANTONIA",
      "dni":23871666,
      "ieId":""
    },
    {
      "nombres":"AGUILAR FLORES JOSE ALBINO",
      "dni":1319477,
      "ieId":""
    },
    {
      "nombres":"CUENTAS DE CHACON ROSA CLORINDA",
      "dni":23885456,
      "ieId":""
    },
    {
      "nombres":"CUSI CAYO EULOGIA",
      "dni":23891531,
      "ieId":""
    },
    {
      "nombres":"GOMEZ APAZA JULIA",
      "dni":23886192,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ALVAREZ RITA",
      "dni":23879605,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CASTRO OFELIA",
      "dni":23943075,
      "ieId":""
    },
    {
      "nombres":"LOPEZ MAMANI FRANCISCO",
      "dni":1551494,
      "ieId":""
    },
    {
      "nombres":"MARISCAL CAZORLA LINO ALEJANDRO",
      "dni":24378464,
      "ieId":""
    },
    {
      "nombres":"PRADO ARONE FORTUNATO",
      "dni":23846033,
      "ieId":""
    },
    {
      "nombres":"TARCO CONDORHUAMAN DOLORES",
      "dni":24381880,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO MENDOZA ZENOVIA",
      "dni":23899619,
      "ieId":""
    },
    {
      "nombres":"VALERO GUTIERREZ NOHEMY",
      "dni":23826710,
      "ieId":""
    },
    {
      "nombres":"VARGAS PAREJA DANIEL SEGUNDO",
      "dni":23849920,
      "ieId":""
    },
    {
      "nombres":"VARGAS RAMOS NESTOR FORTUNATO",
      "dni":23838791,
      "ieId":""
    },
    {
      "nombres":"AGUILAR POLO ELOY",
      "dni":24382871,
      "ieId":""
    },
    {
      "nombres":"CALLO CASTELO EULALIA DIONICIA",
      "dni":24703472,
      "ieId":""
    },
    {
      "nombres":"CARRASCO CARRION ELISA",
      "dni":23914550,
      "ieId":""
    },
    {
      "nombres":"CLEMENTE GUZMAN JUAN DE DIOS",
      "dni":23963553,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS AIQUIPA TADEA",
      "dni":25000819,
      "ieId":""
    },
    {
      "nombres":"DELGADO LEON RUFO",
      "dni":24719009,
      "ieId":""
    },
    {
      "nombres":"ESTRADA TRONCOSO JULIO",
      "dni":24368664,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA MEDINA ISABEL",
      "dni":23922510,
      "ieId":""
    },
    {
      "nombres":"GALDOS ARAOZ FANNY GRACIELA",
      "dni":23963802,
      "ieId":""
    },
    {
      "nombres":"GONZALES DELGADO MARIA MARLE",
      "dni":23980915,
      "ieId":""
    },
    {
      "nombres":"HUALLPA MONTUFAR EDITH",
      "dni":44825807,
      "ieId":""
    },
    {
      "nombres":"HUAMANQUILLA RONDAN ALFREDO RAUL",
      "dni":24382803,
      "ieId":""
    },
    {
      "nombres":"LAURA PINAZO YOLANDA MARTHA",
      "dni":1304655,
      "ieId":""
    },
    {
      "nombres":"LUCANA SEGOVIA EDGAR CECILIO",
      "dni":23980058,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE MARCELINO",
      "dni":29539175,
      "ieId":""
    },
    {
      "nombres":"NAVARRO CACERES YULI MARIANELA",
      "dni":42615812,
      "ieId":""
    },
    {
      "nombres":"QUILLI PINTO GERARDO",
      "dni":23900157,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUILLCA BRAULIO RAUL",
      "dni":40314119,
      "ieId":""
    },
    {
      "nombres":"QUISPE PERCCA RUFINO",
      "dni":24380053,
      "ieId":""
    },
    {
      "nombres":"TORIBIO ESPINOZA GABY MALU",
      "dni":41556320,
      "ieId":""
    },
    {
      "nombres":"YEPEZ AMAUT MARIA MARGARITA",
      "dni":23898020,
      "ieId":""
    },
    {
      "nombres":"CCAHUA CONDE CARLOS ALBERTO",
      "dni":24388767,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI TERESA",
      "dni":23999059,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MAMANI EDGAR",
      "dni":42396224,
      "ieId":""
    },
    {
      "nombres":"DELGADO CHAVEZ CARLOS JAVIER",
      "dni":23949343,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA QUISPE WALTER",
      "dni":24360103,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ JAVIER ISAURO JAVIER",
      "dni":23864556,
      "ieId":""
    },
    {
      "nombres":"HUAMAN JURO LUIS",
      "dni":41617283,
      "ieId":""
    },
    {
      "nombres":"MAMANI CALCINA RODOLFO",
      "dni":1321745,
      "ieId":""
    },
    {
      "nombres":"MECHE PILCO VILMA",
      "dni":23948809,
      "ieId":""
    },
    {
      "nombres":"ORTEGA ARRIAGA CESAR",
      "dni":23917501,
      "ieId":""
    },
    {
      "nombres":"SALHUA CCANAHUIRI REMIGIA",
      "dni":23871615,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI MAR DANTE",
      "dni":25000002,
      "ieId":""
    },
    {
      "nombres":"VARGAS PAREJA GLADIS SEVERINA",
      "dni":24364294,
      "ieId":""
    },
    {
      "nombres":"VILLALBA CUSI VALENTINA",
      "dni":23946133,
      "ieId":""
    },
    {
      "nombres":"BELLIDO VERA DANIEL GENARO",
      "dni":24380262,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PACCO HUGO OSWALDO",
      "dni":23921767,
      "ieId":""
    },
    {
      "nombres":"MONTENEGRO MANGA LORETT LISBETH",
      "dni":41914348,
      "ieId":""
    },
    {
      "nombres":"QQUEHUARUCHO YUPANQUI ELIZABETH",
      "dni":44094450,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUANCA BELTRAN",
      "dni":80070412,
      "ieId":""
    },
    {
      "nombres":"QUISPE ORTIZ DE ORUE SUSANA",
      "dni":24364341,
      "ieId":""
    },
    {
      "nombres":"ROCCA ACCOSTUPA LUCILA",
      "dni":24392730,
      "ieId":""
    },
    {
      "nombres":"APAZA GOMEZ ELIZABETH NILDA",
      "dni":40676236,
      "ieId":""
    },
    {
      "nombres":"CHILE LETONA IVAN",
      "dni":42109377,
      "ieId":""
    },
    {
      "nombres":"CUNO SONCCO HOLGER",
      "dni":23981466,
      "ieId":""
    },
    {
      "nombres":"GUERRA AYTE WALTER",
      "dni":24388389,
      "ieId":""
    },
    {
      "nombres":"LIZARASO FLORES AMERICO",
      "dni":23861123,
      "ieId":""
    },
    {
      "nombres":"QUISPE VILCA ANGHELA",
      "dni":23959847,
      "ieId":""
    },
    {
      "nombres":"SILVA HUAMAN JORGE",
      "dni":25002265,
      "ieId":""
    },
    {
      "nombres":"SOLANO BENITEZ ROBERTO",
      "dni":24384488,
      "ieId":""
    },
    {
      "nombres":"CRUZ BECERRA ALBERTO",
      "dni":23802617,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN LIZARAZO FRANCISCO",
      "dni":24366965,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS PAILE ALIPIO",
      "dni":41196252,
      "ieId":""
    },
    {
      "nombres":"LABRA QUISPECURO FREDY",
      "dni":40580248,
      "ieId":""
    },
    {
      "nombres":"ORTEGA GUTIERREZ MARIA CRISTINA",
      "dni":23938959,
      "ieId":""
    },
    {
      "nombres":"PALOMINO OCHOA JUSTINO",
      "dni":23884118,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN ELMER",
      "dni":24391974,
      "ieId":""
    },
    {
      "nombres":"CCOISO SUCSO SERGIO",
      "dni":23997089,
      "ieId":""
    },
    {
      "nombres":"CCOLQUE CHOQUEMAQUE JORGE",
      "dni":23856302,
      "ieId":""
    },
    {
      "nombres":"CCOSCCO ALFARO MARTIANA",
      "dni":24388433,
      "ieId":""
    },
    {
      "nombres":"CORDOVA BOCANGEL WILFREDO DEL PILAR",
      "dni":23912251,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS PUMA MARCELINA",
      "dni":23802902,
      "ieId":""
    },
    {
      "nombres":"HUILLCA QUISPE JUAN",
      "dni":24567646,
      "ieId":""
    },
    {
      "nombres":"INCA PAULLO JUAN",
      "dni":24383065,
      "ieId":""
    },
    {
      "nombres":"LUNA TURPO SABINA",
      "dni":23870934,
      "ieId":""
    },
    {
      "nombres":"CACERES VASQUEZ ROSA JULIA",
      "dni":41342886,
      "ieId":""
    },
    {
      "nombres":"CARRASCO INCA AURELIA",
      "dni":24713335,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR MUÑOZ ROSA JACQUELINE",
      "dni":42857578,
      "ieId":""
    },
    {
      "nombres":"HUAMANI AÑO GLADYS",
      "dni":24000080,
      "ieId":""
    },
    {
      "nombres":"HUMPIRI QUISPE KARINA",
      "dni":44995793,
      "ieId":""
    },
    {
      "nombres":"POMPILLA YEPEZ RUTH VERONICA",
      "dni":41030259,
      "ieId":""
    },
    {
      "nombres":"QUINTANA ESTRADA RUTH NOHEMI",
      "dni":23952489,
      "ieId":""
    },
    {
      "nombres":"RAMOS CASCAMAITA DOLORES",
      "dni":40717361,
      "ieId":""
    },
    {
      "nombres":"SALAS TTITO LUZ MARINA",
      "dni":23964703,
      "ieId":""
    },
    {
      "nombres":"PAGUADA ANDRADE MOISES",
      "dni":24365765,
      "ieId":""
    },
    {
      "nombres":"CCAHUANA ARQQUE LUZMILA",
      "dni":23940996,
      "ieId":""
    },
    {
      "nombres":"LUCANA ARAGON ANA MELVA",
      "dni":23858180,
      "ieId":""
    },
    {
      "nombres":"MENDOZA GORVENIA JOSE LUIS",
      "dni":80101171,
      "ieId":""
    },
    {
      "nombres":"PUMA MORA CARMEN CLEMENCIA",
      "dni":10487100,
      "ieId":""
    },
    {
      "nombres":"SALAS ALFARO YOSELY CAROLA",
      "dni":23830928,
      "ieId":""
    },
    {
      "nombres":"BENAVIDES CARDENAS WILBERT",
      "dni":23804632,
      "ieId":""
    },
    {
      "nombres":"CAHUANA ARQQUE DANIEL",
      "dni":25002438,
      "ieId":""
    },
    {
      "nombres":"CONDOR FRANCO MODESTO",
      "dni":23962538,
      "ieId":""
    },
    {
      "nombres":"HOLGUIN LEON WALTER",
      "dni":40052709,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CUSI PABLO",
      "dni":23860974,
      "ieId":""
    },
    {
      "nombres":"LIZARRAGA OLARTE VICTOR RAUL",
      "dni":23803124,
      "ieId":""
    },
    {
      "nombres":"MONGE HURTADO DAVID",
      "dni":23984112,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA SANCHEZ MILUSKA",
      "dni":25002184,
      "ieId":""
    },
    {
      "nombres":"CALIZAYA MAMANI ANA MARIA",
      "dni":23927162,
      "ieId":""
    },
    {
      "nombres":"CHOQQUEMAQUI SAIRE LUZ MARINA",
      "dni":23854684,
      "ieId":""
    },
    {
      "nombres":"RONDON ALVAREZ SANDRA RAQUEL",
      "dni":40231188,
      "ieId":""
    },
    {
      "nombres":"FLOREZ VALENZA JESSICA",
      "dni":40589733,
      "ieId":""
    },
    {
      "nombres":"OLIVO COSTAS CELIA",
      "dni":24940421,
      "ieId":""
    },
    {
      "nombres":"AGUILAR QUISPE YANET",
      "dni":40852877,
      "ieId":""
    },
    {
      "nombres":"CACERES FLOREZ ELIZABETH",
      "dni":23953985,
      "ieId":""
    },
    {
      "nombres":"VIDAL BELLOTA IDANIA",
      "dni":23845858,
      "ieId":""
    },
    {
      "nombres":"VALENCIA GORBEÑA BRENDA",
      "dni":24004640,
      "ieId":""
    },
    {
      "nombres":"MORALES PEREZ EDITH",
      "dni":45738253,
      "ieId":""
    },
    {
      "nombres":"CRUZ SORNOZA JULIAN",
      "dni":46433497,
      "ieId":""
    },
    {
      "nombres":"ANDRADE CACERES ROBERT",
      "dni":41342893,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ ACERO MARILUZ",
      "dni":43965617,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE RUTH ISAURA",
      "dni":41907111,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CACERES HUGO",
      "dni":23925881,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR ESPINOZA FRANCISCO",
      "dni":25303605,
      "ieId":""
    },
    {
      "nombres":"ATAUCONCHA HUAMAN JHON CHARLES",
      "dni":23861626,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ FLORES RAQUEL FRANCISCA",
      "dni":40341811,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PACCO HENRRY",
      "dni":42323115,
      "ieId":""
    },
    {
      "nombres":"ESTRADA PEREZ DINA",
      "dni":24374172,
      "ieId":""
    },
    {
      "nombres":"LUQUE CCAHUANA LEONCIA",
      "dni":23902156,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO ARAUJO CAROLINA",
      "dni":23853543,
      "ieId":""
    },
    {
      "nombres":"OCROS BACA AUGUSTO",
      "dni":24388991,
      "ieId":""
    },
    {
      "nombres":"PANTI AITE DORIS ANGELICA",
      "dni":23998219,
      "ieId":""
    },
    {
      "nombres":"PUMA APAZA EDITH",
      "dni":40701826,
      "ieId":""
    },
    {
      "nombres":"QUINTANA HEREDIA LUCRECIA",
      "dni":24001634,
      "ieId":""
    },
    {
      "nombres":"QUISPE ATAYUPANQUI EDGAR BENEDICTO",
      "dni":24946965,
      "ieId":""
    },
    {
      "nombres":"QUISPE LLANCAY APOLINARIA JULIA",
      "dni":23941097,
      "ieId":""
    },
    {
      "nombres":"SALAS CALLE YULIANA LIZETH",
      "dni":45998039,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CARDENAS HAYDEE",
      "dni":24360209,
      "ieId":""
    },
    {
      "nombres":"SEGOVIA ATAULLUCO JOSEFINA",
      "dni":24384110,
      "ieId":""
    },
    {
      "nombres":"LOPEZ LOAIZA CECILIA",
      "dni":23978816,
      "ieId":""
    },
    {
      "nombres":"MESCCO CCOLLATUPA AURELIO",
      "dni":24363882,
      "ieId":""
    },
    {
      "nombres":"ALMANZA CHUCHULLO FORTUNATA ALBINA",
      "dni":24876612,
      "ieId":""
    },
    {
      "nombres":"APUMAYTA HUAMAN LEOCADIA",
      "dni":24962123,
      "ieId":""
    },
    {
      "nombres":"AYALA CHACON CORNELIO",
      "dni":24966004,
      "ieId":""
    },
    {
      "nombres":"CHUTAS TORRES BAILON",
      "dni":23977123,
      "ieId":""
    },
    {
      "nombres":"HILARES CONDORI MANUELA NATIVIDAD",
      "dni":23985594,
      "ieId":""
    },
    {
      "nombres":"HUAMAN VERGARA MAXIMILIANA",
      "dni":24389804,
      "ieId":""
    },
    {
      "nombres":"PALOMINO LATORRE MARLENE YONY",
      "dni":23825901,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ RAMIREZ GREGORIA ANGELA",
      "dni":26952845,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS CACERES GUIDO",
      "dni":4826668,
      "ieId":""
    },
    {
      "nombres":"GAMARRA REMOND HAROL WILSON",
      "dni":23986488,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LAVILLA JUAN EUDES",
      "dni":23996424,
      "ieId":""
    },
    {
      "nombres":"HUANCA ROCA OLGA LIVIA",
      "dni":23924826,
      "ieId":""
    },
    {
      "nombres":"LENES BORDA TANY",
      "dni":41142381,
      "ieId":""
    },
    {
      "nombres":"OSCCO ALDAZABAL OFELIA",
      "dni":23953721,
      "ieId":""
    },
    {
      "nombres":"PALOMINO GUISADO CATALINA",
      "dni":24376721,
      "ieId":""
    },
    {
      "nombres":"QUISPE TABOADA HONORATO",
      "dni":23804287,
      "ieId":""
    },
    {
      "nombres":"RIVERA VILCA ALBINA",
      "dni":24460894,
      "ieId":""
    },
    {
      "nombres":"TAMAYO MACHICADO INGRID ROXANA",
      "dni":23930925,
      "ieId":""
    },
    {
      "nombres":"TANCO FERNANDEZ ADA NOEMY",
      "dni":29533293,
      "ieId":""
    },
    {
      "nombres":"TANTA DE SERPA LIDIA",
      "dni":24388083,
      "ieId":""
    },
    {
      "nombres":"YAULI YAMPI AFRIEL",
      "dni":24886577,
      "ieId":""
    },
    {
      "nombres":"ORCCOHUARANCCA TTITO HILDA",
      "dni":44850252,
      "ieId":""
    },
    {
      "nombres":"ALCAYHUAMAN GIL LUCY",
      "dni":24006742,
      "ieId":""
    },
    {
      "nombres":"ESTRADA SORIA ALEJANDRINO",
      "dni":23834005,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUILLAHUAMAN IVONE",
      "dni":46540403,
      "ieId":""
    },
    {
      "nombres":"BELLIDO FLORES ALEJANDRINA",
      "dni":24381283,
      "ieId":""
    },
    {
      "nombres":"CCACYA QUISPE JOSE RAUL",
      "dni":23868803,
      "ieId":""
    },
    {
      "nombres":"PILLCO CORVACHO EDGAR",
      "dni":42856523,
      "ieId":""
    },
    {
      "nombres":"SULLCA MISME RICARDO",
      "dni":25311943,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA CARI CELEDONIA",
      "dni":24001560,
      "ieId":""
    },
    {
      "nombres":"PUMA HUANCA CRISTINA",
      "dni":24365602,
      "ieId":""
    },
    {
      "nombres":"RIOS QUISPE WILFREDO",
      "dni":23993248,
      "ieId":""
    },
    {
      "nombres":"MORON PACSI TRINIDAD NANCY",
      "dni":23941227,
      "ieId":""
    },
    {
      "nombres":"MOSQUEIRA AUCCACUSI DAMIAN",
      "dni":23850564,
      "ieId":""
    },
    {
      "nombres":"QUISPE ZAMA ALEJANDRINA",
      "dni":23809840,
      "ieId":""
    },
    {
      "nombres":"CHALLCO PUMASUPA ROBERTO",
      "dni":24384363,
      "ieId":""
    },
    {
      "nombres":"LOPEZ LOAIZA LISBETH",
      "dni":40717343,
      "ieId":""
    },
    {
      "nombres":"PUELLES ZARATE YANET",
      "dni":25062183,
      "ieId":""
    },
    {
      "nombres":"GOMEZ DE CANDIOTTI MELITONA RAQUEL",
      "dni":23836871,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS FARFAN DE UGAR RUTH",
      "dni":23995460,
      "ieId":""
    },
    {
      "nombres":"HUISA SUCA JOSE",
      "dni":40554390,
      "ieId":""
    },
    {
      "nombres":"MENDIVIL UGARTE MANUEL JESUS",
      "dni":23843837,
      "ieId":""
    },
    {
      "nombres":"CALLO ESQUERRA KATIA CARINA",
      "dni":24006153,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ESTRADA SABINA",
      "dni":23876934,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA QUISPE ALFREDO",
      "dni":23998750,
      "ieId":""
    },
    {
      "nombres":"CARDENAS DE MOLINA YENI DORIS",
      "dni":23841526,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA CARREÑO MARIA JULIA",
      "dni":25318667,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DURAND RAMON",
      "dni":25305162,
      "ieId":""
    },
    {
      "nombres":"PEREZ CANDIA CONSTANTINO",
      "dni":24390152,
      "ieId":""
    },
    {
      "nombres":"SILVA BLANCO ROCIO",
      "dni":23984546,
      "ieId":""
    },
    {
      "nombres":"SURCO CUSIHUALLPA JUAN DE DIOS",
      "dni":24391298,
      "ieId":""
    },
    {
      "nombres":"AGUILAR PALOMINO MARUJA SALOME",
      "dni":31010198,
      "ieId":""
    },
    {
      "nombres":"MEDINA SANCHEZ SIMEON ISAIAS",
      "dni":24389128,
      "ieId":""
    },
    {
      "nombres":"MENDOZA PARRA RODOLFO ALBERTO",
      "dni":23845584,
      "ieId":""
    },
    {
      "nombres":"MOGOLLON ORTIZ RICHARD VICENTE",
      "dni":23959704,
      "ieId":""
    },
    {
      "nombres":"PORROA GUDIEL TULA",
      "dni":24379279,
      "ieId":""
    },
    {
      "nombres":"REYES DE SANTOS EUGENIA",
      "dni":23902823,
      "ieId":""
    },
    {
      "nombres":"LOAIZA USCAMAYTA SHIRLEY DAMARIS",
      "dni":41734777,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PILLCO RONAL",
      "dni":24391922,
      "ieId":""
    },
    {
      "nombres":"TINAJEROS RIVERA IRIS ANGELA",
      "dni":23986177,
      "ieId":""
    },
    {
      "nombres":"VARGAS ENRIQUEZ KETTY EDME",
      "dni":24388429,
      "ieId":""
    },
    {
      "nombres":"LIMA PILA EPIFANIA",
      "dni":24948670,
      "ieId":""
    },
    {
      "nombres":"AROQUIPA MELO SUSANA VERTHA",
      "dni":1320118,
      "ieId":""
    },
    {
      "nombres":"CCAHUANTICO YANQUI JORGE",
      "dni":24000446,
      "ieId":""
    },
    {
      "nombres":"CUELLAR CANO RAMIRO FELIPE",
      "dni":23915590,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PUMA JUAN CARLOS",
      "dni":40147374,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA JARA ADEL ELI",
      "dni":1510052,
      "ieId":""
    },
    {
      "nombres":"FLORES MOGOLLON JORGE",
      "dni":23945341,
      "ieId":""
    },
    {
      "nombres":"FLORES RAMOS ROLANDO",
      "dni":1315698,
      "ieId":""
    },
    {
      "nombres":"FLORES SAIRITUPA GIOVANA",
      "dni":1327290,
      "ieId":""
    },
    {
      "nombres":"GARCIA FERNANDEZ RAUL HERMOGENES",
      "dni":23959178,
      "ieId":""
    },
    {
      "nombres":"GONGORA SANTA CRUZ MANUEL EDMUNDO",
      "dni":23894934,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ VILCA DIEGO",
      "dni":2298870,
      "ieId":""
    },
    {
      "nombres":"HUACHANI SARAYASI ELIZABETH NOELIA",
      "dni":41834017,
      "ieId":""
    },
    {
      "nombres":"PASTOR SALCEDO MARGARITA",
      "dni":80183367,
      "ieId":""
    },
    {
      "nombres":"SALDIVAR AÑANCA MIRIAM",
      "dni":23961819,
      "ieId":""
    },
    {
      "nombres":"TARCO CONDORHUAMAN VICTOR",
      "dni":24390083,
      "ieId":""
    },
    {
      "nombres":"ULLOA DEL VILLAR CAROLA ANGELINA",
      "dni":29666486,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA AUCCATINCO ENRIQUE",
      "dni":24965404,
      "ieId":""
    },
    {
      "nombres":"VARGAS CASTILLO GINO ENRICO",
      "dni":1325044,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ MOJONERO MARIA LUISA",
      "dni":23944140,
      "ieId":""
    },
    {
      "nombres":"CHARA CACERES ABDON WILBERT",
      "dni":23979893,
      "ieId":""
    },
    {
      "nombres":"GRANDA ÑAURE HELEN",
      "dni":24384063,
      "ieId":""
    },
    {
      "nombres":"HUACAC JURO LUIS BELTRAN",
      "dni":80207903,
      "ieId":""
    },
    {
      "nombres":"HUAICHO QUISPE ALEJANDRO",
      "dni":24702464,
      "ieId":""
    },
    {
      "nombres":"HURTADO QUISPE MELCHOR",
      "dni":23942591,
      "ieId":""
    },
    {
      "nombres":"PATILLA MEJIA WILIAN",
      "dni":24287098,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ BAÑOS ANDREA",
      "dni":25304280,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ HUAMAN HERNAN",
      "dni":24365703,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CARI LUCIO",
      "dni":23992199,
      "ieId":""
    },
    {
      "nombres":"ARPHI HUAYHUA VILMA",
      "dni":25001940,
      "ieId":""
    },
    {
      "nombres":"BACA DIAZ VALENTIN",
      "dni":24376458,
      "ieId":""
    },
    {
      "nombres":"CABALLERO HURTADO ATILIO",
      "dni":23886626,
      "ieId":""
    },
    {
      "nombres":"CHECCORI HUARHUA YOVANA",
      "dni":41314167,
      "ieId":""
    },
    {
      "nombres":"CUSI LAURA ANASTACIO FREDY",
      "dni":1888265,
      "ieId":""
    },
    {
      "nombres":"ITUSACA SULLO EUSEBIO OSCAR",
      "dni":1553329,
      "ieId":""
    },
    {
      "nombres":"OJEDA LOCUMBER JUDITH",
      "dni":40112945,
      "ieId":""
    },
    {
      "nombres":"PONCE VALDIVIA GINO",
      "dni":23947785,
      "ieId":""
    },
    {
      "nombres":"PORTILLA TEJEDA MARCOS",
      "dni":24495164,
      "ieId":""
    },
    {
      "nombres":"QUISPE COLQUE TRINIDAD",
      "dni":2433953,
      "ieId":""
    },
    {
      "nombres":"TTITO SILVA MARTHA",
      "dni":10107139,
      "ieId":""
    },
    {
      "nombres":"TUTUCAYO MURILLO ROXANA YSABEL",
      "dni":29672045,
      "ieId":""
    },
    {
      "nombres":"UGARTE DIAZ BENJAMIN",
      "dni":23816164,
      "ieId":""
    },
    {
      "nombres":"UMERES ARAGON SOFIA",
      "dni":23843746,
      "ieId":""
    },
    {
      "nombres":"VALVERDE AVALOS EDUARDO",
      "dni":23956911,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ YUPANQUI IDEMERYR",
      "dni":42134711,
      "ieId":""
    },
    {
      "nombres":"AMESQUITA PEREZ ROSA VALENTINA",
      "dni":40116852,
      "ieId":""
    },
    {
      "nombres":"CABELLO BOBADILLA WALTER ALBERTO",
      "dni":29560367,
      "ieId":""
    },
    {
      "nombres":"CAHUA PARIHUANA JHON",
      "dni":42455582,
      "ieId":""
    },
    {
      "nombres":"CASTELLANOS APAZA MARLENI",
      "dni":23933956,
      "ieId":""
    },
    {
      "nombres":"CUSI CALLAÑAUPA LIZBETH",
      "dni":40124793,
      "ieId":""
    },
    {
      "nombres":"FRANCO HERRERA URIEL",
      "dni":23905866,
      "ieId":""
    },
    {
      "nombres":"MOGOLLON ORTIZ CARMEN DORIA",
      "dni":31544155,
      "ieId":""
    },
    {
      "nombres":"PANCORBO CARPIO JOHN MILLOBAN",
      "dni":42149850,
      "ieId":""
    },
    {
      "nombres":"SALAS COLQUE WALTER",
      "dni":40130416,
      "ieId":""
    },
    {
      "nombres":"SURCO ESCARCENA HILARIO MELQUIADES",
      "dni":1311678,
      "ieId":""
    },
    {
      "nombres":"TAPIA DEZA MARTHA IRMA",
      "dni":23894063,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA HUAMAN DORA",
      "dni":23885760,
      "ieId":""
    },
    {
      "nombres":"CALDERON CHAVEZ MENDER VALERIANO",
      "dni":42601844,
      "ieId":""
    },
    {
      "nombres":"CCOA PAUCAR VICTORIANO FIDEL",
      "dni":23965916,
      "ieId":""
    },
    {
      "nombres":"CONDORI JARA JUAN JOSE",
      "dni":2266299,
      "ieId":""
    },
    {
      "nombres":"LIZARASO ARANA EUSTAQUIO",
      "dni":42104213,
      "ieId":""
    },
    {
      "nombres":"PEREZ PORTUGAL DANILO",
      "dni":41866632,
      "ieId":""
    },
    {
      "nombres":"PUMA ZAVALETA HEBERT",
      "dni":40315096,
      "ieId":""
    },
    {
      "nombres":"ROMERO SIHUAYRO ALEX SANDRO",
      "dni":47796005,
      "ieId":""
    },
    {
      "nombres":"SECCA QUISPE AURELIO",
      "dni":45398147,
      "ieId":""
    },
    {
      "nombres":"CAMPOS TICONA JENNY FRANCISCA",
      "dni":29708443,
      "ieId":""
    },
    {
      "nombres":"CANAHUA QUISPE NOEMI",
      "dni":23976382,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS ANAYA MILUSKA",
      "dni":40119848,
      "ieId":""
    },
    {
      "nombres":"CUTIPA GONZALES YOVANA",
      "dni":41328953,
      "ieId":""
    },
    {
      "nombres":"HURTADO QUISPE EDWIN",
      "dni":23981618,
      "ieId":""
    },
    {
      "nombres":"OROS CABRERA VICENTE ATILIO",
      "dni":23929640,
      "ieId":""
    },
    {
      "nombres":"TOCRE VILLANUEVA EDWIN CARLOS",
      "dni":23981554,
      "ieId":""
    },
    {
      "nombres":"FARFAN ZUNIGA GINA",
      "dni":23880997,
      "ieId":""
    },
    {
      "nombres":"RUPA BACA GLADIS",
      "dni":24463608,
      "ieId":""
    },
    {
      "nombres":"CASTRO HUACO PIEDAD MARLENE",
      "dni":24495428,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA PALOMINO MARIA BEATRIZ",
      "dni":24461923,
      "ieId":""
    },
    {
      "nombres":"HUAMAN YUPANQUI ELIZABETH",
      "dni":42313723,
      "ieId":""
    },
    {
      "nombres":"ORDOÑEZ VARGAS FIDELIA",
      "dni":24485073,
      "ieId":""
    },
    {
      "nombres":"ROLANDO GRAJEDA FIORELLA",
      "dni":44664616,
      "ieId":""
    },
    {
      "nombres":"ALFARO CASAS IRIS MARGARITA",
      "dni":23848279,
      "ieId":""
    },
    {
      "nombres":"CASTILLA DIAZ NICOLASA",
      "dni":24468954,
      "ieId":""
    },
    {
      "nombres":"DELGADO COBOS MARGOT",
      "dni":24485654,
      "ieId":""
    },
    {
      "nombres":"QUISPE RICALDE AYDEE",
      "dni":24495059,
      "ieId":""
    },
    {
      "nombres":"SALAS VALENCIA VIELKA IDELZEINDA",
      "dni":24485849,
      "ieId":""
    },
    {
      "nombres":"AYALA VALENCIA ROCIO",
      "dni":23934524,
      "ieId":""
    },
    {
      "nombres":"BARRIOS LOAIZA CARMEN LUZ",
      "dni":24485447,
      "ieId":""
    },
    {
      "nombres":"CARLOS GONZALES GRETA",
      "dni":23944861,
      "ieId":""
    },
    {
      "nombres":"GIBAJA LOPEZ MARIA DEL CARMEN",
      "dni":24004748,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ CASTILLA ANDREA",
      "dni":70032045,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO FLORES LISSET",
      "dni":41416290,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ BACA YIESENIA",
      "dni":46028269,
      "ieId":""
    },
    {
      "nombres":"GARCIA DUEÑAS BEATRIZ CARLOTA",
      "dni":23926816,
      "ieId":""
    },
    {
      "nombres":"AYMA AMARU MARINA",
      "dni":47436235,
      "ieId":""
    },
    {
      "nombres":"ZARATE HUILLCA MARLENI VANESSA",
      "dni":23920487,
      "ieId":""
    },
    {
      "nombres":"CAZANI CHINO GUADALUPE MARIA",
      "dni":24007249,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS PAREDES TULA",
      "dni":40225588,
      "ieId":""
    },
    {
      "nombres":"VERA ZARATE CELIA",
      "dni":24669712,
      "ieId":""
    },
    {
      "nombres":"LOAYZA CAJIGAS PATRICIA",
      "dni":23924361,
      "ieId":""
    },
    {
      "nombres":"LOPEZ MANSILLA MITZI TANIA",
      "dni":43611110,
      "ieId":""
    },
    {
      "nombres":"ALARCON HUAMAN IRMA",
      "dni":24464789,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR BANDA MARINA",
      "dni":25326081,
      "ieId":""
    },
    {
      "nombres":"CACERES DUEÑAS TANIA",
      "dni":23925705,
      "ieId":""
    },
    {
      "nombres":"FARFAN CHAVEZ YANET MADELEINE",
      "dni":24005760,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA YEPEZ MARTHA",
      "dni":23841714,
      "ieId":""
    },
    {
      "nombres":"MORA ORIHUELA ERIKA",
      "dni":44918216,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ GARRIDO LIBERTAD",
      "dni":40572693,
      "ieId":""
    },
    {
      "nombres":"LOAYZA HUALLPARAIME JESSICA",
      "dni":24488651,
      "ieId":""
    },
    {
      "nombres":"HERMOZA CARDENAS SHAMIRA VANESSA",
      "dni":44659419,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUARANCCA ROXANA",
      "dni":46066074,
      "ieId":""
    },
    {
      "nombres":"LOVATON GUTIERREZ CENDY CRISOLOGA",
      "dni":42468349,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DORADO ASUNTA",
      "dni":41327919,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA VILLCA OLIMPIA",
      "dni":42350494,
      "ieId":""
    },
    {
      "nombres":"MONGE VEGA LUZMA",
      "dni":41423295,
      "ieId":""
    },
    {
      "nombres":"PARI HERENCIA LUZ MARINA",
      "dni":24717480,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ CONCHA FRINE SOLEDAD",
      "dni":43051400,
      "ieId":""
    },
    {
      "nombres":"QUISPE FLOREZ YONI MARIZA",
      "dni":42724453,
      "ieId":""
    },
    {
      "nombres":"TITO PIZARRO ZOILA FLOR",
      "dni":24003969,
      "ieId":""
    },
    {
      "nombres":"CONDORI SALAZAR ROXANA",
      "dni":23990305,
      "ieId":""
    },
    {
      "nombres":"TACO PEÑA DELFINA",
      "dni":24495600,
      "ieId":""
    },
    {
      "nombres":"HERRERA CALVO LUZ BELIA",
      "dni":42083724,
      "ieId":""
    },
    {
      "nombres":"PALMA CCORI RUBET",
      "dni":23986818,
      "ieId":""
    },
    {
      "nombres":"PALOMINO SAIRITUPA PRUDENCIA",
      "dni":24489495,
      "ieId":""
    },
    {
      "nombres":"ANTESANO PEÑA LUZ MARINA",
      "dni":24462858,
      "ieId":""
    },
    {
      "nombres":"CACERES SANTOS NILO",
      "dni":24460298,
      "ieId":""
    },
    {
      "nombres":"CAPARO DE COHAILA AMELIA",
      "dni":24462313,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS ALVAREZ NINOSKA DEL ROSARIO",
      "dni":23962962,
      "ieId":""
    },
    {
      "nombres":"FARFAN TORRES MARIA JESUS",
      "dni":24460763,
      "ieId":""
    },
    {
      "nombres":"JARAMILLO ECHEVARRIA UBALDINA",
      "dni":23858201,
      "ieId":""
    },
    {
      "nombres":"MADERA TOLEDO LEONICIA",
      "dni":22986223,
      "ieId":""
    },
    {
      "nombres":"MARCA SANCHEZ JHURY",
      "dni":25304616,
      "ieId":""
    },
    {
      "nombres":"MERCADO SOLORZANO DELINA",
      "dni":23813523,
      "ieId":""
    },
    {
      "nombres":"PALOMINO HUALLPAYUNCA EDGAR",
      "dni":25308581,
      "ieId":""
    },
    {
      "nombres":"PEÑA GUEVARA ARTURO",
      "dni":24485901,
      "ieId":""
    },
    {
      "nombres":"SINGUNA CORNEJO NESTOR",
      "dni":42882606,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO QUISPE GLADYS",
      "dni":24484692,
      "ieId":""
    },
    {
      "nombres":"TAIPE BOLAÑOS MARIA URSULA",
      "dni":24462217,
      "ieId":""
    },
    {
      "nombres":"VALDEZ TORRES JHOEL",
      "dni":24487536,
      "ieId":""
    },
    {
      "nombres":"VALENCIA PEÑA EDITH",
      "dni":24485177,
      "ieId":""
    },
    {
      "nombres":"VALENCIA TITO HILDA ENRIQUETA",
      "dni":24462408,
      "ieId":""
    },
    {
      "nombres":"VENERO ZUNIGA NORMA NATIVIDAD",
      "dni":24462611,
      "ieId":""
    },
    {
      "nombres":"VERA GUEVARA DE HIDALGO ALCIONE",
      "dni":24460940,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ OTERO VICTOR",
      "dni":24460086,
      "ieId":""
    },
    {
      "nombres":"CACERES CARDEÑA MARTHA",
      "dni":24466041,
      "ieId":""
    },
    {
      "nombres":"CACERES MENDOZA ELVIRA",
      "dni":23884916,
      "ieId":""
    },
    {
      "nombres":"CANO ESPINOZA MARIA DOLORES",
      "dni":24460634,
      "ieId":""
    },
    {
      "nombres":"CARRASCO TORRES SARA EDIT",
      "dni":24462764,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ LOAIZA JUDITH",
      "dni":24470810,
      "ieId":""
    },
    {
      "nombres":"CORONADO MUJICA LUZ MARINA",
      "dni":24464481,
      "ieId":""
    },
    {
      "nombres":"CUSIYUPANQUI TECSI JUANA",
      "dni":24463262,
      "ieId":""
    },
    {
      "nombres":"DELGADO CASTILLA YUDY ROSANA",
      "dni":24486274,
      "ieId":""
    },
    {
      "nombres":"DURAN CARREÑO ALFREDO",
      "dni":25319619,
      "ieId":""
    },
    {
      "nombres":"FLOREZ LEIVA VLADIMIR PORFIRIO",
      "dni":24887858,
      "ieId":""
    },
    {
      "nombres":"GAMBOA VELAZCO VICTOR IGNACIO",
      "dni":25302228,
      "ieId":""
    },
    {
      "nombres":"HUALLPA SOTO NELIDA",
      "dni":24460629,
      "ieId":""
    },
    {
      "nombres":"MAMANI TAPARA HONORATO",
      "dni":40894079,
      "ieId":""
    },
    {
      "nombres":"MOLINA SILVA FREEDY",
      "dni":24487766,
      "ieId":""
    },
    {
      "nombres":"MORALES PILCO NELYDA EUNICE",
      "dni":24464294,
      "ieId":""
    },
    {
      "nombres":"PEÑA TORRES MARIA",
      "dni":24465579,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO QUISPE FRANCISCA",
      "dni":24486575,
      "ieId":""
    },
    {
      "nombres":"TAIPE BOLAÑOS BLANCA MARTHA",
      "dni":24486549,
      "ieId":""
    },
    {
      "nombres":"VENERO AMABLE AMANDINA",
      "dni":24463456,
      "ieId":""
    },
    {
      "nombres":"VILCA VILLA RENEE",
      "dni":23976690,
      "ieId":""
    },
    {
      "nombres":"ALMONTE PALMA RONALD",
      "dni":24488685,
      "ieId":""
    },
    {
      "nombres":"CORONADO MUJICA JESUSA",
      "dni":24460060,
      "ieId":""
    },
    {
      "nombres":"CUSIYUPANQUI TECSI NORA",
      "dni":24463261,
      "ieId":""
    },
    {
      "nombres":"ESPITIA CONDORI LUCILA",
      "dni":24486567,
      "ieId":""
    },
    {
      "nombres":"GUZMAN SARCCO TANIA ISABEL",
      "dni":24487577,
      "ieId":""
    },
    {
      "nombres":"HIDALGO TORRES JOSE WALTER",
      "dni":24460559,
      "ieId":""
    },
    {
      "nombres":"HIDALGO TORRES MARISOL",
      "dni":24485074,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MENDOZA CELIA",
      "dni":24465177,
      "ieId":""
    },
    {
      "nombres":"LAGUNAS VENERO IVY ROSSINA FELICITAS",
      "dni":23978734,
      "ieId":""
    },
    {
      "nombres":"MACHADO LOVON JUAN",
      "dni":24485260,
      "ieId":""
    },
    {
      "nombres":"TAMAYO ALMANZA FELICIA",
      "dni":24460172,
      "ieId":""
    },
    {
      "nombres":"TORRES PILLCO CEFERINA",
      "dni":24462648,
      "ieId":""
    },
    {
      "nombres":"UBALDE CACERES WALTER",
      "dni":43632312,
      "ieId":""
    },
    {
      "nombres":"UNTIVEROS ALVAREZ JOHN PERCY",
      "dni":24462373,
      "ieId":""
    },
    {
      "nombres":"ZAMBRANO GARRIDO BEATRIZ",
      "dni":24486315,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ PALOMINO MARIA ELENA",
      "dni":24463097,
      "ieId":""
    },
    {
      "nombres":"ARAGON LOAIZA OLGA",
      "dni":24993969,
      "ieId":""
    },
    {
      "nombres":"AUCCA ECHARRI ELOY",
      "dni":24487048,
      "ieId":""
    },
    {
      "nombres":"COHAILA HUAMAN FAUSTINO ALDO",
      "dni":24460744,
      "ieId":""
    },
    {
      "nombres":"ESPITIA CRUZ PASCUAL",
      "dni":24484531,
      "ieId":""
    },
    {
      "nombres":"FARFAN HUALLPAYUNCA FREDY",
      "dni":25310433,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CARDENAS PAULINO",
      "dni":24460137,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ALAGON JUAN",
      "dni":24463364,
      "ieId":""
    },
    {
      "nombres":"MANSILLA LOPEZ YOLANDA",
      "dni":24464793,
      "ieId":""
    },
    {
      "nombres":"MORA ENRIQUEZ LUCRECIA",
      "dni":25304521,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VARGAS CARLOS",
      "dni":24484551,
      "ieId":""
    },
    {
      "nombres":"RAMOS OLIVERA ANGELINO",
      "dni":25327093,
      "ieId":""
    },
    {
      "nombres":"RIOS FUENTES MANUEL",
      "dni":23920675,
      "ieId":""
    },
    {
      "nombres":"TAPIA PINEDA FRANCISCA",
      "dni":24487479,
      "ieId":""
    },
    {
      "nombres":"TORRES CHAVEZ ROSA MERCEDES",
      "dni":24486935,
      "ieId":""
    },
    {
      "nombres":"TORRES CHAVEZ ZENOBIA",
      "dni":24484994,
      "ieId":""
    },
    {
      "nombres":"TORRES VENERO YUREMA",
      "dni":24487677,
      "ieId":""
    },
    {
      "nombres":"UNTIVEROS ALVAREZ LUCIA LICIDA",
      "dni":24464378,
      "ieId":""
    },
    {
      "nombres":"VALCARCEL RODRIGUEZ RONALD",
      "dni":25305153,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ NAVIDES ROSO",
      "dni":24469037,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ CANCHAYA JESUS RUBEN",
      "dni":24495242,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ SAYHUA VICTORIA MODESTA",
      "dni":24495545,
      "ieId":""
    },
    {
      "nombres":"HERRERA ENCISO GEORGINA",
      "dni":24487254,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUALPAYUNCA MARCO ANTONIO",
      "dni":25300703,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ SALCEDO ESTEBAN",
      "dni":24460605,
      "ieId":""
    },
    {
      "nombres":"CUENTAS CARRASCO WALTER AURELIO",
      "dni":24495598,
      "ieId":""
    },
    {
      "nombres":"GUEVARA FERRO ISABEL",
      "dni":24495710,
      "ieId":""
    },
    {
      "nombres":"MANGA LOPE CIRO ROMEO",
      "dni":24495349,
      "ieId":""
    },
    {
      "nombres":"NAOLA HUMPPIRE FLORA",
      "dni":25199076,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA CANO GILMAR JULIO",
      "dni":23810717,
      "ieId":""
    },
    {
      "nombres":"AUCCAPUMA BARRIENTOS ANTONIO",
      "dni":24463037,
      "ieId":""
    },
    {
      "nombres":"QUISPE CORNEJO FORTUNATO",
      "dni":25308873,
      "ieId":""
    },
    {
      "nombres":"VALDEZ TORRES ROCIO URSULA",
      "dni":24486656,
      "ieId":""
    },
    {
      "nombres":"VERA ROBLES RUTH EDELMIRA",
      "dni":23888485,
      "ieId":""
    },
    {
      "nombres":"CAMPANA RICALDE ELIANA",
      "dni":24486770,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS IBARRA FELICITAS",
      "dni":25301687,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ PALOMINO LUIS",
      "dni":24462025,
      "ieId":""
    },
    {
      "nombres":"CACERES MARCAVILLACA DELIA",
      "dni":24460945,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ OTERO PAULINA",
      "dni":24461891,
      "ieId":""
    },
    {
      "nombres":"AUCCA FIGUEROA NORMA NOEMI",
      "dni":24463299,
      "ieId":""
    },
    {
      "nombres":"CRUZ CHAPARRO AQUILES",
      "dni":24462772,
      "ieId":""
    },
    {
      "nombres":"DURAN ESPINOZA JUVENAL",
      "dni":25319574,
      "ieId":""
    },
    {
      "nombres":"GUARDAPUCLLA MACHUCA LUSMILA",
      "dni":24484650,
      "ieId":""
    },
    {
      "nombres":"HERMOZA DE CRUZ LUCIANA",
      "dni":24495616,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ESTRADA GRACIELA",
      "dni":24467209,
      "ieId":""
    },
    {
      "nombres":"LUNA ECHARRE IRMA NATALIA",
      "dni":24463518,
      "ieId":""
    },
    {
      "nombres":"LUNA ECHARRI ZENOVIA HILARIA",
      "dni":24484623,
      "ieId":""
    },
    {
      "nombres":"MEJIA MORA MARCELINA",
      "dni":23855676,
      "ieId":""
    },
    {
      "nombres":"PEÑA SORIA ELIANA",
      "dni":24482165,
      "ieId":""
    },
    {
      "nombres":"QUISPE MORALES CARMELA",
      "dni":24467235,
      "ieId":""
    },
    {
      "nombres":"RUPA ROJAS DOLORES",
      "dni":24478779,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI MORMONTOY CESAR CONSTANTINO",
      "dni":25318988,
      "ieId":""
    },
    {
      "nombres":"CACERES MARISCAL NELLY",
      "dni":24468868,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ LOAIZA JUAN DE DIOS",
      "dni":24470575,
      "ieId":""
    },
    {
      "nombres":"CORONADO MUJICA CAROLINA",
      "dni":24486794,
      "ieId":""
    },
    {
      "nombres":"COSTILLA PAGAZA MARIA ELENA",
      "dni":24470643,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ CANO JUAN ALBERTO",
      "dni":23836870,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA VILLALOBOS ZORANAYHUA",
      "dni":24708153,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CASTRO JOSE ANTONIO",
      "dni":24470817,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ CCALLUCO FANY LUISA",
      "dni":24487902,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ALAGON SANTIAGO",
      "dni":24469104,
      "ieId":""
    },
    {
      "nombres":"HUAMANTALLA QUISPE ALICIA",
      "dni":23930481,
      "ieId":""
    },
    {
      "nombres":"LOAIZA LIZARAZO LUISA",
      "dni":24486574,
      "ieId":""
    },
    {
      "nombres":"LUNA OQUENDO WILLIAM",
      "dni":41875481,
      "ieId":""
    },
    {
      "nombres":"PINO GAYOSO LEONOR",
      "dni":24460072,
      "ieId":""
    },
    {
      "nombres":"QUINO CURASCO FELICIANO",
      "dni":24467058,
      "ieId":""
    },
    {
      "nombres":"QUISPE SAMANEZ FLORA",
      "dni":40537939,
      "ieId":""
    },
    {
      "nombres":"SANTISTEBAN MATTO NILTON",
      "dni":31024641,
      "ieId":""
    },
    {
      "nombres":"VALENCIA FARFAN CARMEN GREGORIA",
      "dni":23832862,
      "ieId":""
    },
    {
      "nombres":"VARGAS CARBAJAL BALVINA",
      "dni":25319600,
      "ieId":""
    },
    {
      "nombres":"CCALLO HUARANCCA ANACLETA",
      "dni":23889403,
      "ieId":""
    },
    {
      "nombres":"DIAZ CASTILLO CONSTANTINO",
      "dni":24468860,
      "ieId":""
    },
    {
      "nombres":"DIAZ CASTILLO EUSEBIO VIGILIO",
      "dni":24469484,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR ALVAREZ HILDA FELICITAS",
      "dni":24468721,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GUTIERREZ MARIA",
      "dni":25304822,
      "ieId":""
    },
    {
      "nombres":"PUMALLOCLLA VENERO JULIO",
      "dni":24468865,
      "ieId":""
    },
    {
      "nombres":"GALVEZ PAREJA YENNY SABINE",
      "dni":24486408,
      "ieId":""
    },
    {
      "nombres":"LOVATON SOLORZANO MARITZA",
      "dni":23941248,
      "ieId":""
    },
    {
      "nombres":"MEDINA LIVANO MADELEINY",
      "dni":24470827,
      "ieId":""
    },
    {
      "nombres":"PINO CCORICASA SILVIA",
      "dni":23995482,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUISPE MATILDE",
      "dni":25211484,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA PINO LUIS",
      "dni":24485699,
      "ieId":""
    },
    {
      "nombres":"GAMARRA QUISPE ROBERTO",
      "dni":40324773,
      "ieId":""
    },
    {
      "nombres":"RAMOS CORDOVA FELIX",
      "dni":41898797,
      "ieId":""
    },
    {
      "nombres":"RIMACHI PUMAYALLI EULALIA",
      "dni":24486108,
      "ieId":""
    },
    {
      "nombres":"SUCA SALLO SONIA",
      "dni":40335622,
      "ieId":""
    },
    {
      "nombres":"COHAILA HUAMAN BRAULIO",
      "dni":23806899,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS CANTO LUZMILA",
      "dni":25310096,
      "ieId":""
    },
    {
      "nombres":"ANAYA ZUNIGA FRIDA MARIANELA",
      "dni":42368030,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ IBARRA SONIA",
      "dni":23948965,
      "ieId":""
    },
    {
      "nombres":"COSIO ÑAURY LOURDES",
      "dni":31421098,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO RIOS JESSICA AMALIA",
      "dni":42467411,
      "ieId":""
    },
    {
      "nombres":"PALMA RODRIGUEZ JORGE LUIS",
      "dni":44173376,
      "ieId":""
    },
    {
      "nombres":"VERA GUEVARA LISBETH",
      "dni":70099598,
      "ieId":""
    },
    {
      "nombres":"MENDOZA PARI CLARA MERCEDES",
      "dni":25321767,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA ESCOBAR FELIPE",
      "dni":24463520,
      "ieId":""
    },
    {
      "nombres":"MONTES FLORES ELVA",
      "dni":24486611,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN SEGUNDO NICASIO",
      "dni":24484700,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CABALLERO JOSE ROHODY",
      "dni":42226343,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SOLIS ROSA MARIA",
      "dni":24495463,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI HUAMAN JHON WILLIAN",
      "dni":43984024,
      "ieId":""
    },
    {
      "nombres":"CHUHUI ILLA ALEX EDWARD",
      "dni":42109571,
      "ieId":""
    },
    {
      "nombres":"TTITO ORMACHEA YANET VERONICA",
      "dni":43611096,
      "ieId":""
    },
    {
      "nombres":"FLOREZ HUAMANTTICA LIZBETH",
      "dni":25321282,
      "ieId":""
    },
    {
      "nombres":"MORA VASQUEZ VILMA",
      "dni":24468209,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CONTRERAS ANGEL ANTONIO",
      "dni":24485107,
      "ieId":""
    },
    {
      "nombres":"BUENO OROS SABINA",
      "dni":24462219,
      "ieId":""
    },
    {
      "nombres":"GAYOSO MAMANI TERESA",
      "dni":24486171,
      "ieId":""
    },
    {
      "nombres":"MAMANI PEDRAZA JUANA",
      "dni":24484931,
      "ieId":""
    },
    {
      "nombres":"TORREBLANCA OLIVERA GHILLMA GENARA",
      "dni":24487183,
      "ieId":""
    },
    {
      "nombres":"VILLALVA QUISPE SAIDA",
      "dni":23957728,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA PINO CATALINA",
      "dni":24463633,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA PINO REYNALDO",
      "dni":24484561,
      "ieId":""
    },
    {
      "nombres":"BACA MORA JOSE",
      "dni":45811291,
      "ieId":""
    },
    {
      "nombres":"PUMA APAZA DINA REBECA",
      "dni":45229730,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES GAMARRA GAVINA INGRIT",
      "dni":24484157,
      "ieId":""
    },
    {
      "nombres":"ASCUE SALAS FRIDA",
      "dni":24495478,
      "ieId":""
    },
    {
      "nombres":"AYALA VALENCIA ELIZABETH",
      "dni":24003714,
      "ieId":""
    },
    {
      "nombres":"AYMITUMA AYMITUMA NANCY",
      "dni":23978912,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA QUISPE PERCY FLORENCIO",
      "dni":1536220,
      "ieId":""
    },
    {
      "nombres":"CASTILLA BARBOSA LORENZA",
      "dni":24495497,
      "ieId":""
    },
    {
      "nombres":"CCASA ALVIZ NILDA",
      "dni":25002093,
      "ieId":""
    },
    {
      "nombres":"CORRALES GRISPO JORGE LUIS",
      "dni":24461327,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO GAMARRA DE C LOURDES CECILIA",
      "dni":23914766,
      "ieId":""
    },
    {
      "nombres":"DURAND VILLAFUERTE MIRIAN",
      "dni":24487719,
      "ieId":""
    },
    {
      "nombres":"GAVIDIA HINOJOSA MARIA ELENA",
      "dni":24462632,
      "ieId":""
    },
    {
      "nombres":"LUNA TORRES NILDA",
      "dni":23943834,
      "ieId":""
    },
    {
      "nombres":"MADERA TERAN EDSON",
      "dni":2429139,
      "ieId":""
    },
    {
      "nombres":"MORALES MOSCOSO AYME MONICA",
      "dni":23979128,
      "ieId":""
    },
    {
      "nombres":"MOZO HUAMAN AMELIA",
      "dni":40463530,
      "ieId":""
    },
    {
      "nombres":"OCHOA ESTRADA EULOGIA GRISELDA",
      "dni":24484890,
      "ieId":""
    },
    {
      "nombres":"OCHOA NINA CELIA",
      "dni":41393705,
      "ieId":""
    },
    {
      "nombres":"ORTEGA CALACHAHUI AMPARO",
      "dni":25003861,
      "ieId":""
    },
    {
      "nombres":"QUISPE MORALES ADELAIDA",
      "dni":24468023,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ POZO JIMMY JESUS",
      "dni":24461987,
      "ieId":""
    },
    {
      "nombres":"ROMERO CHAVEZ CLOTILDE",
      "dni":24467716,
      "ieId":""
    },
    {
      "nombres":"ROMERO MOSCOSO OSCAR JUVENAL",
      "dni":41789006,
      "ieId":""
    },
    {
      "nombres":"SOSA ARAGON ESTELA",
      "dni":23897354,
      "ieId":""
    },
    {
      "nombres":"TORRES SALAS ROSA ELENA",
      "dni":24462072,
      "ieId":""
    },
    {
      "nombres":"VALVERDE HUAMANÑAHUI ALEJO",
      "dni":24487391,
      "ieId":""
    },
    {
      "nombres":"VARGAS PINEDA GAVINO ROMULO",
      "dni":23924490,
      "ieId":""
    },
    {
      "nombres":"ABARCA FARFAN EDITH",
      "dni":23920663,
      "ieId":""
    },
    {
      "nombres":"ALAGON HUALLPA FREEDY",
      "dni":24466299,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ABUHADBA MARIO ALFREDO",
      "dni":24462342,
      "ieId":""
    },
    {
      "nombres":"CARDENAS BACA VENECIO",
      "dni":24484697,
      "ieId":""
    },
    {
      "nombres":"CUEVA ROJAS NILDA",
      "dni":23933946,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA GUERRERO DONALVAN ALEXANDER",
      "dni":24487134,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ALAGON ISIDORA CARMELA",
      "dni":24465582,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ZAMALLOA MARIA ELENA",
      "dni":24462781,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PERALTA MARY LUZ BRAULIA",
      "dni":41473854,
      "ieId":""
    },
    {
      "nombres":"HURTADO VALENCIA AMILCAR",
      "dni":41299862,
      "ieId":""
    },
    {
      "nombres":"LATORRE ALAGON DE MAR EULALIA",
      "dni":24462771,
      "ieId":""
    },
    {
      "nombres":"MOLINA MOLLAPASA FANNY",
      "dni":23956123,
      "ieId":""
    },
    {
      "nombres":"MOLINA MOLLEAPAZA JOHN",
      "dni":40658633,
      "ieId":""
    },
    {
      "nombres":"MORENO QUINTANILLA ALICIA",
      "dni":24463437,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ TUPAYACHI KEVIN ELTON",
      "dni":44745816,
      "ieId":""
    },
    {
      "nombres":"PAUCAR MAMANI DELIA",
      "dni":24711810,
      "ieId":""
    },
    {
      "nombres":"PORCEL MEDRANO EUFEMIA JACQUELINE",
      "dni":23954139,
      "ieId":""
    },
    {
      "nombres":"PUMACAHUA AGUIRRE NELIDA",
      "dni":41498257,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCORIMANYA ZAIDA",
      "dni":25310290,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ VILLACA JOSE",
      "dni":40759157,
      "ieId":""
    },
    {
      "nombres":"SALAZAR CACERES RICHAR",
      "dni":24683033,
      "ieId":""
    },
    {
      "nombres":"SALLO PAÑIHUARA VILMA",
      "dni":23996855,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO QUISPE ERNESTINA",
      "dni":24485507,
      "ieId":""
    },
    {
      "nombres":"TORRES PILLCO ENCARNACION",
      "dni":23847674,
      "ieId":""
    },
    {
      "nombres":"VARGAS PEÑA LUIS",
      "dni":23888211,
      "ieId":""
    },
    {
      "nombres":"WARTON SANCHEZ EDELMIRA",
      "dni":23876225,
      "ieId":""
    },
    {
      "nombres":"CASTRO ZARAVIA VICTOR",
      "dni":23915073,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CONDORI GIOVANNA",
      "dni":23958460,
      "ieId":""
    },
    {
      "nombres":"BLANCO MULLISACA YULY",
      "dni":45453625,
      "ieId":""
    },
    {
      "nombres":"CANAZA JUAREZ WILSON BAUTISTA",
      "dni":2415093,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY PACHECO LUIS ALBERTO",
      "dni":23907200,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PUMA NELLY",
      "dni":23993701,
      "ieId":""
    },
    {
      "nombres":"INCACUTIPA QUISPE MARIA INES",
      "dni":443784,
      "ieId":""
    },
    {
      "nombres":"JARA ARAGON CLAUDIO WILLIAM",
      "dni":23829030,
      "ieId":""
    },
    {
      "nombres":"LOVON RODRIGUEZ MARIO",
      "dni":24465098,
      "ieId":""
    },
    {
      "nombres":"MAMANI VARGAS SIXTO",
      "dni":24703577,
      "ieId":""
    },
    {
      "nombres":"MISME UÑAPILCO TEOFILA",
      "dni":23831982,
      "ieId":""
    },
    {
      "nombres":"PAZ MORA DORIS",
      "dni":24466962,
      "ieId":""
    },
    {
      "nombres":"PERLACIO HUANCA ADAN",
      "dni":80289608,
      "ieId":""
    },
    {
      "nombres":"RONDON ZUNIGA MARTHA",
      "dni":23902080,
      "ieId":""
    },
    {
      "nombres":"SAHUARAURA CAJIGAS ABEL",
      "dni":23865140,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA AYALA PEDRO PABLO",
      "dni":23841597,
      "ieId":""
    },
    {
      "nombres":"ACASI CARREÑO DAVID HUMBERTO",
      "dni":23873942,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA AUCCA NICOLASA",
      "dni":23945298,
      "ieId":""
    },
    {
      "nombres":"APAZA CALSINA JORGE ALMIR",
      "dni":23926326,
      "ieId":""
    },
    {
      "nombres":"BEJAR FARFAN AURELIO",
      "dni":24487222,
      "ieId":""
    },
    {
      "nombres":"CASTILLA DIAZ MARIO",
      "dni":24468812,
      "ieId":""
    },
    {
      "nombres":"CONDORI LOPEZ CARLOS",
      "dni":23862633,
      "ieId":""
    },
    {
      "nombres":"CRUZ DOMINGUEZ GLADYS",
      "dni":23925367,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA SEQUEIROS MAXIMILIANA",
      "dni":31031692,
      "ieId":""
    },
    {
      "nombres":"FLORES CALA YESICA",
      "dni":41752471,
      "ieId":""
    },
    {
      "nombres":"HIDALGO TORRES TITO",
      "dni":24461820,
      "ieId":""
    },
    {
      "nombres":"MORA BARRIENTOS ELSA RUTH",
      "dni":24484673,
      "ieId":""
    },
    {
      "nombres":"NAVIDES NIETO CRISTOBAL",
      "dni":24468872,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHACMANI ADVEN",
      "dni":24990857,
      "ieId":""
    },
    {
      "nombres":"SALINAS SANCHEZ DENIS JESUS",
      "dni":24488668,
      "ieId":""
    },
    {
      "nombres":"SALLO HUALLPAYUNCA NILO",
      "dni":41149752,
      "ieId":""
    },
    {
      "nombres":"TOCRE QUINTANA MARIANO ENCARNACION",
      "dni":25319416,
      "ieId":""
    },
    {
      "nombres":"VARGAS CARBAJAL MELQUIADES",
      "dni":25319438,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA ZEGARRA MARIA",
      "dni":24487326,
      "ieId":""
    },
    {
      "nombres":"ZUBIZARRETA CHALLCO HERNAN ALEXANDER",
      "dni":23998159,
      "ieId":""
    },
    {
      "nombres":"ACHAHUI CHOQUE FIDEL",
      "dni":24718357,
      "ieId":""
    },
    {
      "nombres":"CARPIO DELGADO GLORIA",
      "dni":23813841,
      "ieId":""
    },
    {
      "nombres":"CONDE VARGAS FLORENCIA",
      "dni":24463168,
      "ieId":""
    },
    {
      "nombres":"CORNEJO FLORES VICTOR RAUL",
      "dni":23839851,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LOPEZ MANUEL CIRCUNSICION",
      "dni":23876818,
      "ieId":""
    },
    {
      "nombres":"PILLCO OLAVE MARIO",
      "dni":23828409,
      "ieId":""
    },
    {
      "nombres":"VALER GARRAFA JOSEFINA ENCARNACION",
      "dni":23962841,
      "ieId":""
    },
    {
      "nombres":"AGUILAR LLAMACCHIMA CELIA",
      "dni":40315086,
      "ieId":""
    },
    {
      "nombres":"ALVARO ROCA REINALDO",
      "dni":40382707,
      "ieId":""
    },
    {
      "nombres":"ARELLANO PILLCO RUTH",
      "dni":24462765,
      "ieId":""
    },
    {
      "nombres":"CORDOVA MUJICA DE QUISP NORA",
      "dni":23869108,
      "ieId":""
    },
    {
      "nombres":"CUSI RAMOS RICHARD DAVID",
      "dni":24006218,
      "ieId":""
    },
    {
      "nombres":"DAVILA LESCANO YOVANNA MARLENNE",
      "dni":1324212,
      "ieId":""
    },
    {
      "nombres":"DEL POZO CONDORI NILTON",
      "dni":23968715,
      "ieId":""
    },
    {
      "nombres":"HUAMAN AYTE CRISOLOGO",
      "dni":23892435,
      "ieId":""
    },
    {
      "nombres":"HUAMANCCARI CJUMO JUAN CARLOS",
      "dni":42678472,
      "ieId":""
    },
    {
      "nombres":"INFANTAS FUENTES CECILIA",
      "dni":23950055,
      "ieId":""
    },
    {
      "nombres":"KEHUARUCHO TORRES WILFREDO",
      "dni":24461852,
      "ieId":""
    },
    {
      "nombres":"MAMANI MOLLINEDO ABRAHAN HIRALDO",
      "dni":797964,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE FORTUNATA",
      "dni":41164075,
      "ieId":""
    },
    {
      "nombres":"MORALES VARGAS JOSE ALBERTO",
      "dni":23815423,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ CONDE MARLY HAYDEE",
      "dni":23893614,
      "ieId":""
    },
    {
      "nombres":"PALOMINO FERNANDEZ ROSALIO",
      "dni":23999344,
      "ieId":""
    },
    {
      "nombres":"QUISPE KALLA KAREN DIANA",
      "dni":44351951,
      "ieId":""
    },
    {
      "nombres":"QUISPE PACCO VICENTE",
      "dni":24360577,
      "ieId":""
    },
    {
      "nombres":"RODRIGIEZ GARATE MOISES ABELINO",
      "dni":24462007,
      "ieId":""
    },
    {
      "nombres":"ROLANDO GRAJEDA NOHELIA",
      "dni":43694663,
      "ieId":""
    },
    {
      "nombres":"SALLO PAÑIHUARA VILMA",
      "dni":23996855,
      "ieId":""
    },
    {
      "nombres":"TINCO CACERES MERI",
      "dni":23809558,
      "ieId":""
    },
    {
      "nombres":"TORRES MAMANI MARGOT",
      "dni":40509133,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA LOAIZA GREGORIA",
      "dni":24462170,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ NIETO LUZ MARINA",
      "dni":25180872,
      "ieId":""
    },
    {
      "nombres":"ZAMBRANO DUEÑAS CESAR JOEL",
      "dni":23983657,
      "ieId":""
    },
    {
      "nombres":"CALLOHUANCA SUCARI SANTOS FELIPE",
      "dni":1497252,
      "ieId":""
    },
    {
      "nombres":"CARPIO MALDONADO JORGE",
      "dni":23937107,
      "ieId":""
    },
    {
      "nombres":"ESTRADA SARMIENTO FIDELIA GLADIS",
      "dni":24465025,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CHAUCA CATALINA",
      "dni":23812713,
      "ieId":""
    },
    {
      "nombres":"GONZALES BELTRAN MARILYN ANGIE",
      "dni":43756257,
      "ieId":""
    },
    {
      "nombres":"HUAMAN OCHOA CARLOS",
      "dni":23947982,
      "ieId":""
    },
    {
      "nombres":"HUAYTA DIAZ MELQUIADES VERNEY",
      "dni":23858465,
      "ieId":""
    },
    {
      "nombres":"JARA LOVATON RUTH",
      "dni":24463070,
      "ieId":""
    },
    {
      "nombres":"LOPEZ MARCAVILLACA ADRIAN",
      "dni":25309437,
      "ieId":""
    },
    {
      "nombres":"MARTIARENA ORMACHEA LUZMILA",
      "dni":23826743,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ FERNANDEZ JORGE LUIS",
      "dni":24465923,
      "ieId":""
    },
    {
      "nombres":"OCHOA MORMONTOY LUIS",
      "dni":25308906,
      "ieId":""
    },
    {
      "nombres":"ORTEGA GUEVARA FELIPE",
      "dni":24463829,
      "ieId":""
    },
    {
      "nombres":"PALLI CARI PATRICK CESAR",
      "dni":23980597,
      "ieId":""
    },
    {
      "nombres":"QUISOCALA PUMA LEONCIO",
      "dni":24489536,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ GUEVARA CLARA",
      "dni":24461424,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ PAUCCAR TEOFILO",
      "dni":24460007,
      "ieId":""
    },
    {
      "nombres":"ROZAS HEREDIA JUSTO",
      "dni":24468801,
      "ieId":""
    },
    {
      "nombres":"TARCO VALENCIA HUGO",
      "dni":24460315,
      "ieId":""
    },
    {
      "nombres":"VILLA GONGORA ROCIO MARISOL",
      "dni":29580067,
      "ieId":""
    },
    {
      "nombres":"SORIA AIQUIPA EDGARDO",
      "dni":23924481,
      "ieId":""
    },
    {
      "nombres":"CARDENAS VALDEZ CARLOS RAFAEL",
      "dni":24486094,
      "ieId":""
    },
    {
      "nombres":"CCASA QUISPE DAVID",
      "dni":42163674,
      "ieId":""
    },
    {
      "nombres":"CCOLQQUE QUISPE FRANCISCO",
      "dni":40773243,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUALLPA FORTUNATO",
      "dni":24482384,
      "ieId":""
    },
    {
      "nombres":"ROMERO QUISPE MARINA",
      "dni":23920557,
      "ieId":""
    },
    {
      "nombres":"SULLCA QUISPE JULIO CESAR",
      "dni":44084703,
      "ieId":""
    },
    {
      "nombres":"TICONA PUMA ELIZABETH",
      "dni":41157444,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA BARRETO ELOY",
      "dni":40339230,
      "ieId":""
    },
    {
      "nombres":"CHOQUE PALOMINO WILFREDO",
      "dni":23966667,
      "ieId":""
    },
    {
      "nombres":"GONZALES BAEZ MARIBEL",
      "dni":40330373,
      "ieId":""
    },
    {
      "nombres":"MACHUCA PORTILLA ALEX",
      "dni":23894643,
      "ieId":""
    },
    {
      "nombres":"MARCAVILLACA CASTRO ARTEMIO",
      "dni":25327252,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CHAVEZ ABRAHAM",
      "dni":42180546,
      "ieId":""
    },
    {
      "nombres":"GAMARRA CHOQUE NATALIA",
      "dni":24994158,
      "ieId":""
    },
    {
      "nombres":"LECAROS MANOTTUPA PATRICIA",
      "dni":43610892,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS HUALLPA RAUL",
      "dni":41734061,
      "ieId":""
    },
    {
      "nombres":"QUISPERROCA PALACIOS GLADYS",
      "dni":43157417,
      "ieId":""
    },
    {
      "nombres":"YUCRA PUMA EDITH VICTORIA",
      "dni":41377905,
      "ieId":""
    },
    {
      "nombres":"ANDRADE DELGADO JUAN",
      "dni":23918260,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI HUILLCA HERMENEGILDA",
      "dni":41241349,
      "ieId":""
    },
    {
      "nombres":"PADILLA PEREZ LUZ MARINA",
      "dni":23960824,
      "ieId":""
    },
    {
      "nombres":"ROMERO QUISPE MARINA",
      "dni":23920557,
      "ieId":""
    },
    {
      "nombres":"SOTA ALARCON EINAR",
      "dni":23985672,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA DIAZ EDGAR",
      "dni":25318661,
      "ieId":""
    },
    {
      "nombres":"GARCIA VARA MARLENY YOVANA",
      "dni":24487196,
      "ieId":""
    },
    {
      "nombres":"MORA MORENO SALOMON",
      "dni":24464240,
      "ieId":""
    },
    {
      "nombres":"PONCE AUCCA MARINA",
      "dni":24465545,
      "ieId":""
    },
    {
      "nombres":"ROMERO HUAMANGA ALEJANDRINA",
      "dni":24461718,
      "ieId":""
    },
    {
      "nombres":"RUPA CALDERON EMILIANO",
      "dni":24480622,
      "ieId":""
    },
    {
      "nombres":"SALLO PAÑIHUARA VILMA",
      "dni":23996855,
      "ieId":""
    },
    {
      "nombres":"VALENCIA TITO EVA MARIA",
      "dni":24462643,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ZAMALLOA SONIA FELICIA",
      "dni":24461855,
      "ieId":""
    },
    {
      "nombres":"VALENCIA TITO LUZ ESTHER",
      "dni":24462104,
      "ieId":""
    },
    {
      "nombres":"VENERO CALDERON MANUEL JESUS",
      "dni":24465774,
      "ieId":""
    },
    {
      "nombres":"CORRALES GRISPO JULIO",
      "dni":24463671,
      "ieId":""
    },
    {
      "nombres":"HUARSAYA ECHEGARAY CONCEPCION",
      "dni":23858477,
      "ieId":""
    },
    {
      "nombres":"KJURO SANCHEZ SEGUNDINA",
      "dni":24461439,
      "ieId":""
    },
    {
      "nombres":"LABRA SISA ELEUTERIO MARTIN",
      "dni":24495348,
      "ieId":""
    },
    {
      "nombres":"MASIAS USCAMAYTA CLARA",
      "dni":24487117,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ DE VENERO SILA MARINA",
      "dni":24463310,
      "ieId":""
    },
    {
      "nombres":"PAITAN PEREZ AMADOR",
      "dni":24487252,
      "ieId":""
    },
    {
      "nombres":"VELAZCO PAZ FELIPE ENRIQUE",
      "dni":24461312,
      "ieId":""
    },
    {
      "nombres":"VELAZCO PAZ JUANA FELICIA",
      "dni":24464381,
      "ieId":""
    },
    {
      "nombres":"VENERO JORGE RICARDO",
      "dni":23885663,
      "ieId":""
    },
    {
      "nombres":"DEL RIO CABEZAS EDORITA",
      "dni":6157914,
      "ieId":""
    },
    {
      "nombres":"REYNOSO PANTIGOZO CECILIA VERONICA",
      "dni":42354087,
      "ieId":""
    },
    {
      "nombres":"LOVATON MENA ROQUE",
      "dni":23848684,
      "ieId":""
    },
    {
      "nombres":"SOLIS MORA CARLOS OSCAR",
      "dni":25000768,
      "ieId":""
    },
    {
      "nombres":"TAPIA LAURA EDITH",
      "dni":44489816,
      "ieId":""
    },
    {
      "nombres":"ALVARADO CONDORI LUIS",
      "dni":23899123,
      "ieId":""
    },
    {
      "nombres":"OQUENDO GAMARRA MILUSKA KARINA",
      "dni":25000836,
      "ieId":""
    },
    {
      "nombres":"TERRAZAS BUSTAMANTE JUAN",
      "dni":23922222,
      "ieId":""
    },
    {
      "nombres":"ATASI CHACON LOURDES",
      "dni":23935676,
      "ieId":""
    },
    {
      "nombres":"FARFAN PILARES KATTY ELENA",
      "dni":40708801,
      "ieId":""
    },
    {
      "nombres":"ROJAS PANTIGOZO EDITH BEATRIZ",
      "dni":40326049,
      "ieId":""
    },
    {
      "nombres":"ROSALES CRUZ RITA ALICIA",
      "dni":29470535,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA PAREJA NORA",
      "dni":24463586,
      "ieId":""
    },
    {
      "nombres":"CUBA RIVERA SUSAN JENNIFER",
      "dni":44975378,
      "ieId":""
    },
    {
      "nombres":"ROMERO MONTESINOS ALEJANDRINA",
      "dni":23958076,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA PINO JUANA",
      "dni":10630304,
      "ieId":""
    },
    {
      "nombres":"ORTIZ DE ORUE ROJAS DALIRA CELIA",
      "dni":44397818,
      "ieId":""
    },
    {
      "nombres":"ZURITA SURCO JACHELINE JOVANA",
      "dni":41253424,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUILLAHUAMAN ZOILA",
      "dni":25308002,
      "ieId":""
    },
    {
      "nombres":"CALVO FRANCO LOURDES",
      "dni":24462179,
      "ieId":""
    },
    {
      "nombres":"VARGAS FLORES AMPARO",
      "dni":25001904,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR ESTRADA CATALINA AIDA",
      "dni":23859399,
      "ieId":""
    },
    {
      "nombres":"NOA CHACO SONIA",
      "dni":23987459,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ BACA JUANA DE DIOS",
      "dni":43300634,
      "ieId":""
    },
    {
      "nombres":"VILLA QUISPE MARTHA ALEJANDRINA",
      "dni":23996523,
      "ieId":""
    },
    {
      "nombres":"ZERECEDA SERNA GRETA",
      "dni":24486784,
      "ieId":""
    },
    {
      "nombres":"PACHECO DURAND BELIZARIO",
      "dni":23950484,
      "ieId":""
    },
    {
      "nombres":"CHURA SOTO NELLY",
      "dni":40684630,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS LINES REBECA",
      "dni":40767065,
      "ieId":""
    },
    {
      "nombres":"BOLIVAR LOAYZA BETTY",
      "dni":40232986,
      "ieId":""
    },
    {
      "nombres":"BARAZORDA CRUZ CLEOFE",
      "dni":10548870,
      "ieId":""
    },
    {
      "nombres":"BEIZAGA RAMIREZ WENDY",
      "dni":23952054,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE BECERRA GRIMALDA",
      "dni":25304373,
      "ieId":""
    },
    {
      "nombres":"CALLE ZUÑIGA MARY ISABEL",
      "dni":24490672,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LOAYZA AYDA SANTUSA",
      "dni":24490386,
      "ieId":""
    },
    {
      "nombres":"CASTRO ARTEAGA NINOSKHA",
      "dni":24994149,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUALLPA MATEO",
      "dni":24482139,
      "ieId":""
    },
    {
      "nombres":"HUARACHA COVARRUBIAS OSMAR AMERICO",
      "dni":25304711,
      "ieId":""
    },
    {
      "nombres":"KANCHA LATORRE SOFIA JUANA",
      "dni":23992126,
      "ieId":""
    },
    {
      "nombres":"MARQUINA SALAS RAFAEL",
      "dni":25302506,
      "ieId":""
    },
    {
      "nombres":"MENDOZA NUÑEZ MATILDE",
      "dni":24484694,
      "ieId":""
    },
    {
      "nombres":"NEGRON GARATE WILFREDO ALBINO",
      "dni":24487898,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ DEL PRADO VENERO EDWIN",
      "dni":24462234,
      "ieId":""
    },
    {
      "nombres":"OCON HUILLCA HUMBERTO BENITO",
      "dni":40070659,
      "ieId":""
    },
    {
      "nombres":"ORMACHEA PONCE YSIDRO",
      "dni":24460111,
      "ieId":""
    },
    {
      "nombres":"PINEDA TRIVEÑO EDDA DELIA",
      "dni":24486526,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES ESCALANTE WILLY BENIGNO",
      "dni":25214430,
      "ieId":""
    },
    {
      "nombres":"VARGAS CONDORI JUANA",
      "dni":23996577,
      "ieId":""
    },
    {
      "nombres":"VENERO MERMA ESTELA",
      "dni":24495248,
      "ieId":""
    },
    {
      "nombres":"YARAHUAMAN GONZALES YOVANNA",
      "dni":24477487,
      "ieId":""
    },
    {
      "nombres":"ALMONTE PALMA JAIDER GUSTAVO",
      "dni":24486768,
      "ieId":""
    },
    {
      "nombres":"CANTERO CANTERO OLINDA",
      "dni":23829393,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CUSIYUPANQUI SONIA",
      "dni":24461605,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ CCALLUCO AMILCAR FERNANDO",
      "dni":24485122,
      "ieId":""
    },
    {
      "nombres":"TECSI ROZAS AURELIO",
      "dni":24469077,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA PAREJA NELIDA",
      "dni":24486409,
      "ieId":""
    },
    {
      "nombres":"CALVO DE ALEGRIA CONCEPCION",
      "dni":23819222,
      "ieId":""
    },
    {
      "nombres":"CARDENAS CARBAJAL TULA",
      "dni":23915402,
      "ieId":""
    },
    {
      "nombres":"CCAHUA FLORES VICTORIA",
      "dni":23875290,
      "ieId":""
    },
    {
      "nombres":"GAMARRA GONGORA JOSE",
      "dni":24487712,
      "ieId":""
    },
    {
      "nombres":"MORALES DELGADO MARCELA",
      "dni":24487731,
      "ieId":""
    },
    {
      "nombres":"QUISPE TUPAYACHI GREGORIO",
      "dni":25308600,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS HINOJOSA AUGUSTA",
      "dni":23905462,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUISPE ELIAS",
      "dni":23951598,
      "ieId":""
    },
    {
      "nombres":"HUALLPA SOTO ESPERANZA",
      "dni":24460223,
      "ieId":""
    },
    {
      "nombres":"HUILLCANINA GIL ESTHER",
      "dni":25304403,
      "ieId":""
    },
    {
      "nombres":"ICHOHUAYTA PACHECO GUALBERTO",
      "dni":23959412,
      "ieId":""
    },
    {
      "nombres":"LEON ESTRADA BENEDICTO",
      "dni":25304354,
      "ieId":""
    },
    {
      "nombres":"TEJADA LOPEZ ODILON",
      "dni":25327262,
      "ieId":""
    },
    {
      "nombres":"ALLENDE SALAS LUIS FERNANDO",
      "dni":24484560,
      "ieId":""
    },
    {
      "nombres":"GONZALES HUAMAN ROSA",
      "dni":24486257,
      "ieId":""
    },
    {
      "nombres":"LOAYZA HUALLPARAIME EDIKA",
      "dni":24486994,
      "ieId":""
    },
    {
      "nombres":"ORTIZ CJANAHUIRE GIOVANNA ESMERALDA",
      "dni":24495665,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ APAZA ALEJANDRINO",
      "dni":24469198,
      "ieId":""
    },
    {
      "nombres":"ROJAS TORRES MERY",
      "dni":24954741,
      "ieId":""
    },
    {
      "nombres":"BACA ALVAREZ ROSA MARIA",
      "dni":23894133,
      "ieId":""
    },
    {
      "nombres":"BACA ESQUIVEL MARCO LINO",
      "dni":23899899,
      "ieId":""
    },
    {
      "nombres":"BEJAR DE MOGOLLON MARIA MARGARITA",
      "dni":24482270,
      "ieId":""
    },
    {
      "nombres":"CCORIMANYA ROCCA NARCISO",
      "dni":24479858,
      "ieId":""
    },
    {
      "nombres":"DELGADO RUPA ELIZABETH",
      "dni":24479834,
      "ieId":""
    },
    {
      "nombres":"FUENTES GRAU NEYMA DOLORES",
      "dni":23853001,
      "ieId":""
    },
    {
      "nombres":"HUAÑEC TACO ARTUR",
      "dni":44785409,
      "ieId":""
    },
    {
      "nombres":"OVIEDO FLORES DORIS",
      "dni":24495841,
      "ieId":""
    },
    {
      "nombres":"PANIHUARA ENRIQUEZ TORIBIA",
      "dni":24464486,
      "ieId":""
    },
    {
      "nombres":"QUISPE ESCALANTE EDITH MARLENE",
      "dni":23967482,
      "ieId":""
    },
    {
      "nombres":"RIVAS GARRIDO ROSSANA",
      "dni":23886788,
      "ieId":""
    },
    {
      "nombres":"TINTAYA RODRIGUEZ DELFIN",
      "dni":24486606,
      "ieId":""
    },
    {
      "nombres":"TORRES PEÑA MATILDE",
      "dni":24485313,
      "ieId":""
    },
    {
      "nombres":"VARGAS MONTAÑEZ PATRICIA ELIANA",
      "dni":25302217,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ PALOMINO VERONICA",
      "dni":24495065,
      "ieId":""
    },
    {
      "nombres":"ARAGON FARFAN OLGA",
      "dni":25003959,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI AYMA JUDITH",
      "dni":42562163,
      "ieId":""
    },
    {
      "nombres":"CALERO FARFAN DOMINGA",
      "dni":24461176,
      "ieId":""
    },
    {
      "nombres":"GONGORA TORRES MARCO JOSE",
      "dni":45229733,
      "ieId":""
    },
    {
      "nombres":"PALOMINO VARGAS ELVA ERASMA",
      "dni":24460745,
      "ieId":""
    },
    {
      "nombres":"UNTIVEROS ALVAREZ CLAY",
      "dni":24485932,
      "ieId":""
    },
    {
      "nombres":"USCAMAITA USCAMAITA ELIA",
      "dni":24486299,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA DE PARAVECINO MARTHA",
      "dni":24462375,
      "ieId":""
    },
    {
      "nombres":"AUCCA NAVARRO MARGARITA",
      "dni":40463517,
      "ieId":""
    },
    {
      "nombres":"GAYOSO MAMANI GLUSMILA",
      "dni":24488678,
      "ieId":""
    },
    {
      "nombres":"MOTTA VERA CARMELA MAGDA",
      "dni":23965321,
      "ieId":""
    },
    {
      "nombres":"PELAEZ CESPEDES GERMAN",
      "dni":25304490,
      "ieId":""
    },
    {
      "nombres":"ALMANZA URBINA YESSIN",
      "dni":24486451,
      "ieId":""
    },
    {
      "nombres":"BACA PARRA MARIBEL",
      "dni":42290729,
      "ieId":""
    },
    {
      "nombres":"FARFAN MENDOZA DULIA",
      "dni":23809636,
      "ieId":""
    },
    {
      "nombres":"MOZO HUAMAN DIONICIO",
      "dni":24487910,
      "ieId":""
    },
    {
      "nombres":"VERA QUISPE MARIA SOLEDAD",
      "dni":45273438,
      "ieId":""
    },
    {
      "nombres":"BARREDA CASTILLA ANDERLECHT GREGOR",
      "dni":25008794,
      "ieId":""
    },
    {
      "nombres":"HERMOZA BONILLA MARGOT",
      "dni":23909103,
      "ieId":""
    },
    {
      "nombres":"MANGA LOPE CRUZ",
      "dni":24486162,
      "ieId":""
    },
    {
      "nombres":"PALOMINO HUANCA CIPRIAN",
      "dni":24487004,
      "ieId":""
    },
    {
      "nombres":"CABALLERO GUTIERREZ VICENTE",
      "dni":23805328,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DORADO LIVIA",
      "dni":40146565,
      "ieId":""
    },
    {
      "nombres":"ROMERO RIMACHI VALENTIN",
      "dni":23825183,
      "ieId":""
    },
    {
      "nombres":"RUPA CCONISLLA HILDA",
      "dni":23832755,
      "ieId":""
    },
    {
      "nombres":"SOLIS HINOJOSA ANA MARIA",
      "dni":23817743,
      "ieId":""
    },
    {
      "nombres":"VALDEZ TORRES LUZGARDA",
      "dni":24495765,
      "ieId":""
    },
    {
      "nombres":"CACERES SANTOS PAKI",
      "dni":24486096,
      "ieId":""
    },
    {
      "nombres":"QUILLO ROJAS ANASTACIO",
      "dni":24476987,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE GAMARRA EUFEMIO BELARMINO",
      "dni":25200610,
      "ieId":""
    },
    {
      "nombres":"CURASCO CUSIYUPANQUI EMILIO",
      "dni":24470477,
      "ieId":""
    },
    {
      "nombres":"ACUÑA MEZA YSAAC",
      "dni":23951252,
      "ieId":""
    },
    {
      "nombres":"BACA MOSQUERA CRISOSTOMO",
      "dni":25303481,
      "ieId":""
    },
    {
      "nombres":"FARFAN MELGAREJO ENMA",
      "dni":25319601,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA CUADROS MARITZA",
      "dni":41272659,
      "ieId":""
    },
    {
      "nombres":"HALLASI NOA GERONIMO SORAN",
      "dni":42554058,
      "ieId":""
    },
    {
      "nombres":"SARMIENTO LOYOLA RUBEN",
      "dni":23972011,
      "ieId":""
    },
    {
      "nombres":"TORRES PALOMINO TORIBIA LIDIA",
      "dni":25196652,
      "ieId":""
    },
    {
      "nombres":"SAIHUA TUPAYUPANQUI GILBERTO",
      "dni":25318915,
      "ieId":""
    },
    {
      "nombres":"VARGAS SUCLLE KILDER JOSE",
      "dni":45358025,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA MORALES HERNAN DANILO",
      "dni":23956521,
      "ieId":""
    },
    {
      "nombres":"ALVARO HUALLAPA VICENTE",
      "dni":25135149,
      "ieId":""
    },
    {
      "nombres":"ANCCA CUYO DAVID",
      "dni":24891898,
      "ieId":""
    },
    {
      "nombres":"CHOQUE MANSILLA MIRIAM NELLY",
      "dni":30962807,
      "ieId":""
    },
    {
      "nombres":"CHUQUIMIA ABAL JAQUELINE",
      "dni":23988388,
      "ieId":""
    },
    {
      "nombres":"DENOS ALFARO FLORENCIA",
      "dni":23940910,
      "ieId":""
    },
    {
      "nombres":"GONGORA LAIME ALEJANDRINO",
      "dni":24479544,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUALLPARIMACHI MAURO",
      "dni":24388732,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QQUELLON MODESTA",
      "dni":23829896,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QUISPE NICOMEDES",
      "dni":23813881,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA ZUÑIGA AMERICO",
      "dni":25135574,
      "ieId":""
    },
    {
      "nombres":"HUAYCANI TICONA MARIA",
      "dni":1316560,
      "ieId":""
    },
    {
      "nombres":"NINANCURO AMAO RUBEN",
      "dni":40209492,
      "ieId":""
    },
    {
      "nombres":"OLAVE GIHUAÑA NOHEMI",
      "dni":23962784,
      "ieId":""
    },
    {
      "nombres":"QUISPITUPA PILLCO ANDREA",
      "dni":24479888,
      "ieId":""
    },
    {
      "nombres":"SUCARI MAMANI ANA MARIA",
      "dni":29616723,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO SERRANO CLOTILDE",
      "dni":23839508,
      "ieId":""
    },
    {
      "nombres":"TTITO SILVA ALIPIO",
      "dni":24001139,
      "ieId":""
    },
    {
      "nombres":"CAJAVILCA CHOQUEMAMANI JUSTINA",
      "dni":23991694,
      "ieId":""
    },
    {
      "nombres":"CARDENAS DIAZ JUAN RUBEN",
      "dni":23853704,
      "ieId":""
    },
    {
      "nombres":"CASTRO ROJAS HERNAN",
      "dni":24477990,
      "ieId":""
    },
    {
      "nombres":"CHECYA ALATA ERASMO",
      "dni":24669957,
      "ieId":""
    },
    {
      "nombres":"CONDORI GUTIERREZ FORTUNATA",
      "dni":24705986,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS CABRERA ELMER",
      "dni":23824823,
      "ieId":""
    },
    {
      "nombres":"ENCALADA FARFAN VICTOR RAUL",
      "dni":23939350,
      "ieId":""
    },
    {
      "nombres":"FLORES ZUZUNAGA EMMANOELA GIOVANA",
      "dni":10628342,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ARREDONDO DELIA",
      "dni":23850239,
      "ieId":""
    },
    {
      "nombres":"LOAIZA PEÑA ORTENCIA ESTANISLADA",
      "dni":6771940,
      "ieId":""
    },
    {
      "nombres":"LUNA LOVATON CARMEN",
      "dni":23991890,
      "ieId":""
    },
    {
      "nombres":"MATTOS YALLICO VIOLETA MILAGROS",
      "dni":80181529,
      "ieId":""
    },
    {
      "nombres":"MAYORGA CHALLCO LUCIO",
      "dni":43259533,
      "ieId":""
    },
    {
      "nombres":"PAREDES DELGADO JUDITH",
      "dni":23990001,
      "ieId":""
    },
    {
      "nombres":"PARI CHACON CRISTINA",
      "dni":23938110,
      "ieId":""
    },
    {
      "nombres":"PAZ PEÑA NANCY MADELEINE",
      "dni":23986317,
      "ieId":""
    },
    {
      "nombres":"PERALTA TTITO MIGUEL ANGEL",
      "dni":23942578,
      "ieId":""
    },
    {
      "nombres":"PEÑA CACERES JEANNY",
      "dni":23857729,
      "ieId":""
    },
    {
      "nombres":"PUMA AUCCA CARLOS",
      "dni":23989905,
      "ieId":""
    },
    {
      "nombres":"ROJAS CALLO ANA KARINA",
      "dni":23947132,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ TAFUR JOSE",
      "dni":23926036,
      "ieId":""
    },
    {
      "nombres":"SAPANA VALDIVIA NANCY",
      "dni":24670438,
      "ieId":""
    },
    {
      "nombres":"YARAHUAMAN HOLGADO ABEL",
      "dni":24490494,
      "ieId":""
    },
    {
      "nombres":"YUCRA HUAMAN LUIS OSWALDO",
      "dni":41647668,
      "ieId":""
    },
    {
      "nombres":"ALERMA APAZA CAROL MANOLI",
      "dni":40509950,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SOLIS NARCISO",
      "dni":24486067,
      "ieId":""
    },
    {
      "nombres":"ALANYA CARRASCO MARIA ANTONIETA",
      "dni":41605724,
      "ieId":""
    },
    {
      "nombres":"CARAZAS TAPIA DAMARIS LILIA ELIZAB",
      "dni":29311375,
      "ieId":""
    },
    {
      "nombres":"CRUZ AROSQUIPA FERDINAN",
      "dni":23961360,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN MENDOZA ROBERTO",
      "dni":23916014,
      "ieId":""
    },
    {
      "nombres":"HIDALGO TORRES ZAANDRA",
      "dni":24485405,
      "ieId":""
    },
    {
      "nombres":"HUAMAN TARRAGA ELEUTERIO",
      "dni":23884126,
      "ieId":""
    },
    {
      "nombres":"MENDOZA HUILLCA MARIA ISABEL",
      "dni":23864157,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ FERNANDEZ ANGELICA ROSARIO",
      "dni":24466128,
      "ieId":""
    },
    {
      "nombres":"PUELLES VASQUEZ MARIA ELENA",
      "dni":24468543,
      "ieId":""
    },
    {
      "nombres":"RAMOS LOVATON SOFIA",
      "dni":23940875,
      "ieId":""
    },
    {
      "nombres":"BLANCO HUAMAN CLAUDIO",
      "dni":23881957,
      "ieId":""
    },
    {
      "nombres":"CCAPATINTA SOLIS ANGEL",
      "dni":23849169,
      "ieId":""
    },
    {
      "nombres":"MORA MEZA CARMEN LUISA",
      "dni":23941180,
      "ieId":""
    },
    {
      "nombres":"NINA RAMOS NESTOR",
      "dni":23955335,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCAMA HAYDEE",
      "dni":23933083,
      "ieId":""
    },
    {
      "nombres":"RIOS TRUJILLO GLADYS",
      "dni":23963876,
      "ieId":""
    },
    {
      "nombres":"TICONA SOSA NESTOR VICENTE",
      "dni":23982833,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA SALAS WILBERT",
      "dni":23899890,
      "ieId":""
    },
    {
      "nombres":"DURAN DORADO EUFEMIO",
      "dni":25318583,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY VASQUEZ ROSSANA",
      "dni":24467706,
      "ieId":""
    },
    {
      "nombres":"PINEDO NORIEGA DIANITH",
      "dni":23983631,
      "ieId":""
    },
    {
      "nombres":"QUINTO CHACON JACINTO",
      "dni":24490194,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MAMANI DANIEL",
      "dni":23954972,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA CARREÑO DANIEL",
      "dni":25318554,
      "ieId":""
    },
    {
      "nombres":"SAPA FERRO MANUEL",
      "dni":23975677,
      "ieId":""
    },
    {
      "nombres":"CALVO FRANCO GERMAN",
      "dni":24485833,
      "ieId":""
    },
    {
      "nombres":"CRUZ NINA YONI",
      "dni":23998572,
      "ieId":""
    },
    {
      "nombres":"CUIRO GUEVARA LUCIO",
      "dni":24484914,
      "ieId":""
    },
    {
      "nombres":"LLAVILLA CCOYO IRMA",
      "dni":23936155,
      "ieId":""
    },
    {
      "nombres":"MAMANI HILASACA RICARDO MOISES",
      "dni":2039566,
      "ieId":""
    },
    {
      "nombres":"MONTUFAR SALCEDO HEBER",
      "dni":23803710,
      "ieId":""
    },
    {
      "nombres":"QUISPE ACHAPUMA YENNY YOVANA",
      "dni":45227987,
      "ieId":""
    },
    {
      "nombres":"ARROYO SALDIVAR YENY",
      "dni":24007064,
      "ieId":""
    },
    {
      "nombres":"CARDEÑA VASQUEZ WALTER",
      "dni":42806930,
      "ieId":""
    },
    {
      "nombres":"CUBA ALLER TEOFILO",
      "dni":24489615,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE SULLCA ROLANDO",
      "dni":25000649,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ TAIPE ELVIS",
      "dni":40469635,
      "ieId":""
    },
    {
      "nombres":"MAMANI ARIZACA ANADELA",
      "dni":2299846,
      "ieId":""
    },
    {
      "nombres":"PILA CHULLO VIDES",
      "dni":24886183,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUINO TEOFILO",
      "dni":40686153,
      "ieId":""
    },
    {
      "nombres":"ALMANZA HUALLPA JESSICA",
      "dni":23957507,
      "ieId":""
    },
    {
      "nombres":"CASAVERDE MENDOZA ROSA ZORAIDA",
      "dni":40591672,
      "ieId":""
    },
    {
      "nombres":"CCUNO QUISPE JOSE CARLOS",
      "dni":23856757,
      "ieId":""
    },
    {
      "nombres":"CORILLA SONCCO YESENIA",
      "dni":45559838,
      "ieId":""
    },
    {
      "nombres":"ERAZO QUISPE FREDY ALFREDO",
      "dni":45248443,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUARI ROMUALDO",
      "dni":23886594,
      "ieId":""
    },
    {
      "nombres":"QUISPE SICLLA ANTONIO",
      "dni":23939753,
      "ieId":""
    },
    {
      "nombres":"VALER GARCIA KARINA",
      "dni":46468310,
      "ieId":""
    },
    {
      "nombres":"VILLENA CANDIA MARLENY",
      "dni":41447686,
      "ieId":""
    },
    {
      "nombres":"ARIAS MOTTA ROQUE FAUSTINO",
      "dni":24493966,
      "ieId":""
    },
    {
      "nombres":"ASCUÑA ARCONDO HUMBERTO",
      "dni":24490673,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA OLIVERA VIOLETA  MARLENY",
      "dni":23990767,
      "ieId":""
    },
    {
      "nombres":"RAMOS INOCENCIO SONIA",
      "dni":25328828,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ OCAMPO NOEMI LUCIA",
      "dni":24485999,
      "ieId":""
    },
    {
      "nombres":"VERA ALMARAZ MARIA RUTH",
      "dni":24991813,
      "ieId":""
    },
    {
      "nombres":"DIAZ BACA ROSIO",
      "dni":25305004,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI ROBERTA",
      "dni":24470506,
      "ieId":""
    },
    {
      "nombres":"ITURRIAGA BACA BALVINA",
      "dni":25304426,
      "ieId":""
    },
    {
      "nombres":"CUSI VALER MARISOL",
      "dni":41098863,
      "ieId":""
    },
    {
      "nombres":"VEGA AMPUERO KARINA",
      "dni":23998903,
      "ieId":""
    },
    {
      "nombres":"GONZALES VILLAFUERTE JULIA",
      "dni":41147261,
      "ieId":""
    },
    {
      "nombres":"URQUIZO AUQUIPATA FLOR DE MARIA",
      "dni":25216516,
      "ieId":""
    },
    {
      "nombres":"MORA BARRIENTOS LUCRECIA",
      "dni":24486474,
      "ieId":""
    },
    {
      "nombres":"CORONADO ARAMBURU YRMA",
      "dni":24485126,
      "ieId":""
    },
    {
      "nombres":"RIMACHE HUAMANI ANDREA",
      "dni":23949871,
      "ieId":""
    },
    {
      "nombres":"SINGUNA CORNEJO EMPERATRIZ",
      "dni":24486801,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA QUINTANILLA KARINA",
      "dni":40497049,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCANA GLADYS",
      "dni":24705218,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA VARGAS BETTY",
      "dni":41784549,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAMAN LUCY",
      "dni":44240310,
      "ieId":""
    },
    {
      "nombres":"CHULLO SOTO MARIA SOLEDAD",
      "dni":42001378,
      "ieId":""
    },
    {
      "nombres":"BALLON RODRIGUEZ YOEL",
      "dni":40461966,
      "ieId":""
    },
    {
      "nombres":"BENAVENTE MALLQUI JUAN",
      "dni":24488616,
      "ieId":""
    },
    {
      "nombres":"CAMPANA LOVON RAUL",
      "dni":24486395,
      "ieId":""
    },
    {
      "nombres":"CUSIYUPANQUI HUAMAN AMILCAR",
      "dni":24488748,
      "ieId":""
    },
    {
      "nombres":"FARFAN PALACIOS ABEL CIRO",
      "dni":24462497,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ HUANCA SUSANA",
      "dni":23963965,
      "ieId":""
    },
    {
      "nombres":"MORMONTOY RODRIGUEZ MARILUZ",
      "dni":23949005,
      "ieId":""
    },
    {
      "nombres":"OROS QUISPE LUIS",
      "dni":25326156,
      "ieId":""
    },
    {
      "nombres":"PAREDES MORENO ALIDA FRESIA",
      "dni":24495691,
      "ieId":""
    },
    {
      "nombres":"SEGURA FLORES FELICIA",
      "dni":23996871,
      "ieId":""
    },
    {
      "nombres":"TAPARA QUISPE VICENTE",
      "dni":24484562,
      "ieId":""
    },
    {
      "nombres":"TORRES LOPEZ ELIZABETH",
      "dni":24495024,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA YABAR JUAN LUIS",
      "dni":24485634,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ ALMANZA ADELA DELMA",
      "dni":23872341,
      "ieId":""
    },
    {
      "nombres":"BARAZORDA CRUZ ALICIA",
      "dni":31035810,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA CANAZA MERY LUZ",
      "dni":42017057,
      "ieId":""
    },
    {
      "nombres":"CABRERA RODRIGUEZ REMO VALERIO",
      "dni":41096262,
      "ieId":""
    },
    {
      "nombres":"CAÑARI DIAZ WENCESLAO",
      "dni":25319673,
      "ieId":""
    },
    {
      "nombres":"HIDALGO VERA DIANDRA",
      "dni":41476023,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA CCAHUANA MARCO ANTONIO",
      "dni":25304385,
      "ieId":""
    },
    {
      "nombres":"TTACCA TTITO ANA AMARILES",
      "dni":44090265,
      "ieId":""
    },
    {
      "nombres":"YARIN HUALLPAYUNCA ARTURO",
      "dni":25304988,
      "ieId":""
    },
    {
      "nombres":"PONCE CALLAÑAUPA JORGE",
      "dni":25310373,
      "ieId":""
    },
    {
      "nombres":"ALCAZAR OCAMPO LUIS HUMBERTO",
      "dni":24465058,
      "ieId":""
    },
    {
      "nombres":"AYMA CONDE YOEL RONY",
      "dni":43013323,
      "ieId":""
    },
    {
      "nombres":"CUSIRIMAY QUEHUARUCHO NANCI",
      "dni":23920687,
      "ieId":""
    },
    {
      "nombres":"HURTADO MOSCOSO LUIS ALBERTO",
      "dni":24487105,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN VICTOR",
      "dni":25315140,
      "ieId":""
    },
    {
      "nombres":"TORRES RIOS WILLIAM",
      "dni":24488782,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA PAREJA JULIETA GIOVANNA",
      "dni":40336458,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ZUNIGA CLETO",
      "dni":24469214,
      "ieId":""
    },
    {
      "nombres":"ARANDO TORRES ROSA MARIA",
      "dni":31040603,
      "ieId":""
    },
    {
      "nombres":"CASAPERALTA MARTINEZ RUTH",
      "dni":41624575,
      "ieId":""
    },
    {
      "nombres":"CORONADO ALMANZA EFRAIN",
      "dni":80576638,
      "ieId":""
    },
    {
      "nombres":"HUAMANQUISPE HUANCAHUIR MATIASA EFIGENIA",
      "dni":23933820,
      "ieId":""
    },
    {
      "nombres":"PEZO RIVERA ROCIO JUDITH",
      "dni":24486283,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR PINO EDY",
      "dni":24487593,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA QUISPE VICTOR MANUEL",
      "dni":40922854,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA OVALLE SENDY",
      "dni":46548442,
      "ieId":""
    },
    {
      "nombres":"PANTOJA ORIHUELA CLOTILDE",
      "dni":25200215,
      "ieId":""
    },
    {
      "nombres":"CCOSIO PAULLO RAQUEL",
      "dni":42761581,
      "ieId":""
    },
    {
      "nombres":"COPARA ALLASI LOURDES MARIA",
      "dni":40432183,
      "ieId":""
    },
    {
      "nombres":"RAMOS ATAUSINCHI RAQUEL",
      "dni":25319658,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE OCHOA UBERT IGOR",
      "dni":45222206,
      "ieId":""
    },
    {
      "nombres":"MORALES RAMOS GHYNDA NURY",
      "dni":42195832,
      "ieId":""
    },
    {
      "nombres":"SOSA LINARES RICARDINA",
      "dni":24487897,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO QUISPE ALEJANDRO",
      "dni":24487839,
      "ieId":""
    },
    {
      "nombres":"ABARCA ALEGRE MARLENE",
      "dni":44850279,
      "ieId":""
    },
    {
      "nombres":"CANSAYA AUCCA JANET",
      "dni":24391873,
      "ieId":""
    },
    {
      "nombres":"CCORIMANYA HUILLCA JUSTINA",
      "dni":24486516,
      "ieId":""
    },
    {
      "nombres":"GONGORA TORRES FLOR  DE MARIA",
      "dni":42874562,
      "ieId":""
    },
    {
      "nombres":"MACEDO MAMANI GLADYS",
      "dni":40727346,
      "ieId":""
    },
    {
      "nombres":"CCORIMANYA HUILLCA JORGE",
      "dni":24488751,
      "ieId":""
    },
    {
      "nombres":"LUNA CAHUANA MARLENE",
      "dni":24486683,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO QUISPE LUZMILA",
      "dni":24495696,
      "ieId":""
    },
    {
      "nombres":"ELGUERA SANCHEZ FORTUNATA",
      "dni":29686562,
      "ieId":""
    },
    {
      "nombres":"ROLDAN ECHARRI SVEN MANUEL",
      "dni":23865517,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ ZUNIGA MARIA CRISTINA",
      "dni":23837093,
      "ieId":""
    },
    {
      "nombres":"MORMONTOY PINO ALINA VICTORIA",
      "dni":25319464,
      "ieId":""
    },
    {
      "nombres":"BAYONA QUISPINGA GLADIS",
      "dni":24496047,
      "ieId":""
    },
    {
      "nombres":"FLOREZ AYRAMPO LUCIO",
      "dni":25319581,
      "ieId":""
    },
    {
      "nombres":"GUEVARA SUMA MARCO ANTONIO",
      "dni":41635764,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ RAMOS DIONIA",
      "dni":23874557,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MAROCHO MAXELL",
      "dni":42989069,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN HUALLPA MARIA ALBERTINA",
      "dni":23815371,
      "ieId":""
    },
    {
      "nombres":"PAUCCARA CCALLOQUISPE CELESTINA",
      "dni":24488760,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ PINO PORFIRIO",
      "dni":23963298,
      "ieId":""
    },
    {
      "nombres":"HURTADO BEJAR DOMINGA DORIS",
      "dni":24487964,
      "ieId":""
    },
    {
      "nombres":"MEJIA CANGAHUALA JEANNE",
      "dni":23978766,
      "ieId":""
    },
    {
      "nombres":"PALOMINO OVALLE SHIRLEY NADIA",
      "dni":45453636,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CONTRERAS RICARDO LUIS",
      "dni":24486518,
      "ieId":""
    },
    {
      "nombres":"CONCHA HUALLPA VICENTE",
      "dni":23938670,
      "ieId":""
    },
    {
      "nombres":"MORENO OCAMPO JOSE",
      "dni":41350915,
      "ieId":""
    },
    {
      "nombres":"CONDE SERRANO YOLANDA",
      "dni":43757050,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ BERTO MARISOL",
      "dni":24487870,
      "ieId":""
    },
    {
      "nombres":"PERALTA HUARANCCA YONY",
      "dni":44188110,
      "ieId":""
    },
    {
      "nombres":"RIVEROS FLOREZ RHOSVER DANTE",
      "dni":42594685,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA CALVO NAY RUTH",
      "dni":40043249,
      "ieId":""
    },
    {
      "nombres":"CAVIDES MENDOZA EDGAR",
      "dni":24461268,
      "ieId":""
    },
    {
      "nombres":"CONDE CHURATA DELFIN GREGORIO",
      "dni":42263225,
      "ieId":""
    },
    {
      "nombres":"CORDOVA HUAMANI PELAGIA CIPRIANA",
      "dni":23843145,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ALAGON JUAN",
      "dni":24486322,
      "ieId":""
    },
    {
      "nombres":"MAMANI URO HILDA",
      "dni":1548015,
      "ieId":""
    },
    {
      "nombres":"MEZA GUEVARA GLENDA MARJORIE",
      "dni":23954591,
      "ieId":""
    },
    {
      "nombres":"MOLINA CANCHI LIZ SAYURI",
      "dni":42950678,
      "ieId":""
    },
    {
      "nombres":"MORA MEZA JUAN CARLOS",
      "dni":23995291,
      "ieId":""
    },
    {
      "nombres":"PINARES MEDINA NELIDA",
      "dni":31543022,
      "ieId":""
    },
    {
      "nombres":"QUISPE ACHAHUANCO MARIA MAGDALENA",
      "dni":24714464,
      "ieId":""
    },
    {
      "nombres":"RUPA CAVIEDES YESHIKA",
      "dni":40757753,
      "ieId":""
    },
    {
      "nombres":"SALAZAR JARA FLOR DEL CARMEN",
      "dni":29422166,
      "ieId":""
    },
    {
      "nombres":"CASAFRANCA LOAIZA FLORENCIO",
      "dni":24465402,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ PALMA RONALD JHONG",
      "dni":30422925,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CASTRO HILARIO",
      "dni":40639819,
      "ieId":""
    },
    {
      "nombres":"HUALLPARIMACHI CAPCHA MARLENE",
      "dni":23960218,
      "ieId":""
    },
    {
      "nombres":"LUNA RAMOS CANDELARIA JOSEFA",
      "dni":2260413,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE PATRICIO",
      "dni":10035308,
      "ieId":""
    },
    {
      "nombres":"MAMANI RAMOS FROILAN",
      "dni":2435077,
      "ieId":""
    },
    {
      "nombres":"MENDOZA QUISPE PABLO",
      "dni":24713658,
      "ieId":""
    },
    {
      "nombres":"PERALTA CCAMA ARMANDO",
      "dni":23958431,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCOPA VERONICA",
      "dni":23997614,
      "ieId":""
    },
    {
      "nombres":"VENEGAS VERGARA CIRILO FABIO",
      "dni":31174150,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA ASLLA LEONIDAS",
      "dni":41794026,
      "ieId":""
    },
    {
      "nombres":"CALCI APAZA ALCIONE",
      "dni":24712811,
      "ieId":""
    },
    {
      "nombres":"GUILLEN ORTIZ DE ORUE RUDY",
      "dni":42316995,
      "ieId":""
    },
    {
      "nombres":"HAQUEHUA LOYOLA MIGUEL ANGEL",
      "dni":25217951,
      "ieId":""
    },
    {
      "nombres":"HERMOZA CUSIYUPANQUI ROSALIO",
      "dni":24464785,
      "ieId":""
    },
    {
      "nombres":"MAMANI CONDORI JAVIER ROLANDO",
      "dni":29675222,
      "ieId":""
    },
    {
      "nombres":"OBLITAS NEGRON ANGEL CIRILO",
      "dni":23935628,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA OLIVERA JOSE LUIS",
      "dni":23859134,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN JESUS",
      "dni":24468186,
      "ieId":""
    },
    {
      "nombres":"SANCA SAPANA EVER",
      "dni":24705325,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE FLORES GRISEL",
      "dni":42449076,
      "ieId":""
    },
    {
      "nombres":"CCALA POMALEQUE NESTOR PORFIRIO",
      "dni":23947432,
      "ieId":""
    },
    {
      "nombres":"CCANA AYME FREDY",
      "dni":24486555,
      "ieId":""
    },
    {
      "nombres":"CONDORI MENDOZA OSCAR",
      "dni":24660342,
      "ieId":""
    },
    {
      "nombres":"DELGADO CHAMBILLA VILMA YALILA",
      "dni":496889,
      "ieId":""
    },
    {
      "nombres":"JUAREZ BAÑOS GUALBERTO",
      "dni":40035777,
      "ieId":""
    },
    {
      "nombres":"LOPEZ PUMA CARMEN ROSA",
      "dni":29681324,
      "ieId":""
    },
    {
      "nombres":"MONTALVO COBOS MARUJA",
      "dni":23936673,
      "ieId":""
    },
    {
      "nombres":"ALARCON CACERES HAROLDO",
      "dni":23860185,
      "ieId":""
    },
    {
      "nombres":"ARCOS DUEÑAS MARIA ANTONIETA",
      "dni":24682752,
      "ieId":""
    },
    {
      "nombres":"FUENTES APAZA EDGAR",
      "dni":41799834,
      "ieId":""
    },
    {
      "nombres":"JINCHO HUAMAN EDSON ALEJANDRO",
      "dni":40537110,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN JESUS",
      "dni":24468186,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI HAYDEE",
      "dni":23982172,
      "ieId":""
    },
    {
      "nombres":"RAMOS RAMOS KAREN PAMELA",
      "dni":44753487,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA GUERRA ROBERTO",
      "dni":24461368,
      "ieId":""
    },
    {
      "nombres":"LIVANO INCACAYO NOEMI",
      "dni":44116525,
      "ieId":""
    },
    {
      "nombres":"SUNI MENDOZA MARIA ISABEL",
      "dni":41163881,
      "ieId":""
    },
    {
      "nombres":"MAURY CAVIEDES KARLA PRISCILLA",
      "dni":44999724,
      "ieId":""
    },
    {
      "nombres":"CASTILLA CAJIGAS MARGOT HAMILE",
      "dni":24485929,
      "ieId":""
    },
    {
      "nombres":"MAMANI FERNANDEZ HILDA ROSA",
      "dni":1325869,
      "ieId":""
    },
    {
      "nombres":"MESSA RIVEROS MARITZA ESTHER",
      "dni":24485807,
      "ieId":""
    },
    {
      "nombres":"SULLCA QUISPE MARISOL",
      "dni":24715424,
      "ieId":""
    },
    {
      "nombres":"LOAIZA SALAS ROSSANA",
      "dni":24494459,
      "ieId":""
    },
    {
      "nombres":"GASTAÑAGA SANCHEZ RUTH GLENDA",
      "dni":42189312,
      "ieId":""
    },
    {
      "nombres":"QUISPE EGUILUZ OLGA",
      "dni":40756519,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES GAMARRA YULY",
      "dni":40070657,
      "ieId":""
    },
    {
      "nombres":"ROMERO HUAMANGA NIEVES",
      "dni":24468446,
      "ieId":""
    },
    {
      "nombres":"LLANOS ZARSANAULA LIZ EVELING",
      "dni":43689977,
      "ieId":""
    },
    {
      "nombres":"ROMERO LOAIZA AURELIA",
      "dni":24495041,
      "ieId":""
    },
    {
      "nombres":"TABOADA BELLOTA YANET",
      "dni":42549820,
      "ieId":""
    },
    {
      "nombres":"CHIPAYO ROMERO CELIA",
      "dni":40373308,
      "ieId":""
    },
    {
      "nombres":"MASIAS BRAVO CARMEN",
      "dni":42869755,
      "ieId":""
    },
    {
      "nombres":"ABARCA MAYTA LUCIA",
      "dni":24475510,
      "ieId":""
    },
    {
      "nombres":"ABRILL ANDRADE YAJHAYDA",
      "dni":45530077,
      "ieId":""
    },
    {
      "nombres":"APAZA GUEVARA JOSMERY",
      "dni":40775922,
      "ieId":""
    },
    {
      "nombres":"AVILES SANCHEZ MARCO ANTONIO",
      "dni":44040700,
      "ieId":""
    },
    {
      "nombres":"BANEGAS CESPEDES ARTEMIO",
      "dni":25310567,
      "ieId":""
    },
    {
      "nombres":"CAMPANA GALLEGOS FLAVIA",
      "dni":24473352,
      "ieId":""
    },
    {
      "nombres":"CHAMPI ROJAS MAXIMO",
      "dni":24491459,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ECHARRI DARIO",
      "dni":24469058,
      "ieId":""
    },
    {
      "nombres":"CUSI VALER NORMA",
      "dni":23936121,
      "ieId":""
    },
    {
      "nombres":"GUZMAN SARCCO RUBEN DARIO",
      "dni":40324774,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA GALVEZ ELVIRA",
      "dni":23932543,
      "ieId":""
    },
    {
      "nombres":"HUAMAN RAYME GLADYS REYNA",
      "dni":23873632,
      "ieId":""
    },
    {
      "nombres":"LAUREL FARFAN ALEJANDRINA",
      "dni":25318817,
      "ieId":""
    },
    {
      "nombres":"LOAYZA VALERIANO RUBEN",
      "dni":4826040,
      "ieId":""
    },
    {
      "nombres":"MASIAS SANTOS ELVA",
      "dni":41293928,
      "ieId":""
    },
    {
      "nombres":"PALOMINO DELGADO BIANCA",
      "dni":23981086,
      "ieId":""
    },
    {
      "nombres":"PEDRAZA VILLAVICENCIO MARISOL SONIA",
      "dni":25328606,
      "ieId":""
    },
    {
      "nombres":"PINAREZ GARCIA FREDY",
      "dni":31424840,
      "ieId":""
    },
    {
      "nombres":"QUISPE BERNAL ERNESTINA",
      "dni":24473328,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN BERTHA",
      "dni":24488790,
      "ieId":""
    },
    {
      "nombres":"TECSI SALAS FRIDA",
      "dni":24487455,
      "ieId":""
    },
    {
      "nombres":"TORRES VERA EDWIN",
      "dni":24485865,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA LOAIZA ELEODORA",
      "dni":24463324,
      "ieId":""
    },
    {
      "nombres":"VENEGAS VERGARA JOSE ANGEL",
      "dni":23853183,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA LOAIZA HILARIO",
      "dni":24460274,
      "ieId":""
    },
    {
      "nombres":"VICTORIA ZARAVIA JUAN CARLOS",
      "dni":25321320,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE OCHOA ROSMERY",
      "dni":42449706,
      "ieId":""
    },
    {
      "nombres":"YARIN YUCRA DONATO",
      "dni":25315029,
      "ieId":""
    },
    {
      "nombres":"ALARCON HUAMAN LUZMILA",
      "dni":24484519,
      "ieId":""
    },
    {
      "nombres":"CACERES MARCAVILLACA VILMA",
      "dni":24484855,
      "ieId":""
    },
    {
      "nombres":"CLAROS CHALLCO MARIA ROSA",
      "dni":23819878,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA CANO ISABEL",
      "dni":23801086,
      "ieId":""
    },
    {
      "nombres":"FLORES PEÑA CLEOFE",
      "dni":7632456,
      "ieId":""
    },
    {
      "nombres":"HAQUEHUA VILLALBA NESTOR",
      "dni":24001409,
      "ieId":""
    },
    {
      "nombres":"MORA YARAHUAMAN DULIA",
      "dni":24478614,
      "ieId":""
    },
    {
      "nombres":"NAVARRETE MEZA MARIA CLEOFE",
      "dni":23972010,
      "ieId":""
    },
    {
      "nombres":"ZECENARRO ESPINOZA ELOY",
      "dni":24675898,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA QUISPE NORMA",
      "dni":25310333,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA ROMERO CARMEN LUZ",
      "dni":24495998,
      "ieId":""
    },
    {
      "nombres":"DIAZ CUSIYUPANQUI JUSTINO",
      "dni":24461612,
      "ieId":""
    },
    {
      "nombres":"FARFAN PORTOCARRERO SANTOS BONIFACIO",
      "dni":23833565,
      "ieId":""
    },
    {
      "nombres":"HUILLCA ZEGARRA ROSA",
      "dni":23990028,
      "ieId":""
    },
    {
      "nombres":"MARCAVILLACA CONCHA ANGEL",
      "dni":25309157,
      "ieId":""
    },
    {
      "nombres":"MARMANILLO ALVAREZ RUBEN",
      "dni":24468989,
      "ieId":""
    },
    {
      "nombres":"PORCEL GALDOS MARISOL",
      "dni":41898798,
      "ieId":""
    },
    {
      "nombres":"CASTRO FARFAN RAUL",
      "dni":23964306,
      "ieId":""
    },
    {
      "nombres":"CHOQUE SANCHEZ CELIA",
      "dni":24495061,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA ESPINOZA JAVIER JUSTINO",
      "dni":25319751,
      "ieId":""
    },
    {
      "nombres":"JUAREZ CUSIHUAMAN JEANNYNE",
      "dni":44301758,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUINTO DOLORES",
      "dni":24465613,
      "ieId":""
    },
    {
      "nombres":"QUIROZ YUPANQUI GERMAN DOMINGO",
      "dni":24487918,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA HUALLPA MATILDE",
      "dni":24462500,
      "ieId":""
    },
    {
      "nombres":"MOLINA GUTIERREZ RUBEN",
      "dni":40309428,
      "ieId":""
    },
    {
      "nombres":"CABRERA RODRIGUEZ ROMULO FRANCISCO",
      "dni":41026090,
      "ieId":""
    },
    {
      "nombres":"GUARDAPUCLLA FARFAN EMPERATRIZ",
      "dni":25319672,
      "ieId":""
    },
    {
      "nombres":"HUILLCA QUISPE BENIGNA JOVITA",
      "dni":41728286,
      "ieId":""
    },
    {
      "nombres":"CACERES DIAZ MILLER PETERS",
      "dni":45419999,
      "ieId":""
    },
    {
      "nombres":"CARDENAS MENDEZ MARIA TERESA",
      "dni":24486945,
      "ieId":""
    },
    {
      "nombres":"CARRION BEJAR RUTH MERY",
      "dni":24970386,
      "ieId":""
    },
    {
      "nombres":"CASAPIA ALVAREZ FELICIA",
      "dni":24487132,
      "ieId":""
    },
    {
      "nombres":"CCACYAHUILLCA ÑAHUI YANETH LIDA",
      "dni":23979945,
      "ieId":""
    },
    {
      "nombres":"PRADO ALARCON MARIA YSABEL ROSA",
      "dni":23842489,
      "ieId":""
    },
    {
      "nombres":"VARGAS MONTAÑEZ ALEXANDER",
      "dni":43448552,
      "ieId":""
    },
    {
      "nombres":"LOPEZ CARAZAS NOEL",
      "dni":43187244,
      "ieId":""
    },
    {
      "nombres":"MEDINA DELGADO INA",
      "dni":25003978,
      "ieId":""
    },
    {
      "nombres":"NINA HUAMAN JUAN BAUTISTA",
      "dni":24460599,
      "ieId":""
    },
    {
      "nombres":"SOTA PULIDO ZEIDA",
      "dni":25310765,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SALLO MARCO ANTONIO",
      "dni":40958931,
      "ieId":""
    },
    {
      "nombres":"BERDEJO MONTALVO HONORIO",
      "dni":23814290,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CACERES LUIS ROBERTO",
      "dni":40105233,
      "ieId":""
    },
    {
      "nombres":"AMARU CHOCCATA NANCY",
      "dni":40507040,
      "ieId":""
    },
    {
      "nombres":"INGILTUPA APARICIO CARMEN ROSA",
      "dni":43206871,
      "ieId":""
    },
    {
      "nombres":"VELARDE CASAFRANCA JOSE LUIS",
      "dni":24495977,
      "ieId":""
    },
    {
      "nombres":"CALISIN VARGAS SARITA",
      "dni":24485460,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI YANETH BLANCA",
      "dni":40525015,
      "ieId":""
    },
    {
      "nombres":"PINO CCALLO JAVIER",
      "dni":40448702,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE BECERRA ERIBERTO",
      "dni":25301016,
      "ieId":""
    },
    {
      "nombres":"HUALLPA QUISPE RINA",
      "dni":41160595,
      "ieId":""
    },
    {
      "nombres":"TJACCA TTITO ROSA LUZ",
      "dni":46212588,
      "ieId":""
    },
    {
      "nombres":"HERRERA HUARANCCA RUTH",
      "dni":44739472,
      "ieId":""
    },
    {
      "nombres":"MARMANILLO PIMENTEL SOCRATES",
      "dni":24469370,
      "ieId":""
    },
    {
      "nombres":"VENERO RAMOS IVAN AUGUSTO",
      "dni":24486597,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ECHARRI DAVID",
      "dni":24470681,
      "ieId":""
    },
    {
      "nombres":"CANDIA QUISPE WILBERT",
      "dni":25327322,
      "ieId":""
    },
    {
      "nombres":"CONDORI CCAPA EDWARD",
      "dni":24004252,
      "ieId":""
    },
    {
      "nombres":"FLORES PEÑA JUVENAL",
      "dni":42806931,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ACUÑA NINOSCA",
      "dni":42482938,
      "ieId":""
    },
    {
      "nombres":"FLOREZ PACHECO ELAIN",
      "dni":25326441,
      "ieId":""
    },
    {
      "nombres":"SEGURA MOLINA LILIAN",
      "dni":23992927,
      "ieId":""
    },
    {
      "nombres":"CARDEÑA TAYPE LUIS",
      "dni":45725044,
      "ieId":""
    },
    {
      "nombres":"APAZA GOMEZ LAUREANO",
      "dni":23908413,
      "ieId":""
    },
    {
      "nombres":"BAÑOS JANCCO FELIX",
      "dni":24485053,
      "ieId":""
    },
    {
      "nombres":"FUENTES GRAU NEYMA AURORA",
      "dni":23899840,
      "ieId":""
    },
    {
      "nombres":"HERHUAY PORCEL ELIZABETH",
      "dni":40231427,
      "ieId":""
    },
    {
      "nombres":"NINANCURO BOCANGEL LEONOR",
      "dni":23806873,
      "ieId":""
    },
    {
      "nombres":"CHOQUE GAMARRA MARTHA",
      "dni":23893768,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ CCALLUCO CARLOS JAVIER",
      "dni":24487945,
      "ieId":""
    },
    {
      "nombres":"MANTURANO AGUILAR ROSA ALICIA",
      "dni":42616805,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO ERICK IVAN",
      "dni":42200009,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ GALDOS JORGE WASHINGTON",
      "dni":24495051,
      "ieId":""
    },
    {
      "nombres":"VARA HUAMAN JACQUELINE MARCIA",
      "dni":24495751,
      "ieId":""
    },
    {
      "nombres":"LUNA OQUENDO JOHAN",
      "dni":42869762,
      "ieId":""
    },
    {
      "nombres":"CHIRINOS QUISPE MARIA ANTONIETA",
      "dni":42553757,
      "ieId":""
    },
    {
      "nombres":"MIRANDA YARIN OMAR",
      "dni":25326536,
      "ieId":""
    },
    {
      "nombres":"QQUELLON HUAMAN HIPOLITA",
      "dni":23858785,
      "ieId":""
    },
    {
      "nombres":"CANDIA QUISPE LUIS ALBERTO",
      "dni":40749950,
      "ieId":""
    },
    {
      "nombres":"CRUCES VERGARA ERIKA LIZBETH",
      "dni":42279520,
      "ieId":""
    },
    {
      "nombres":"PONCE AUCCA MARIA PURIFICACION",
      "dni":24465290,
      "ieId":""
    },
    {
      "nombres":"RAMOS CARDENAS MARIA ELENA",
      "dni":41052136,
      "ieId":""
    },
    {
      "nombres":"SORIA QUISPE ELSA",
      "dni":80101386,
      "ieId":""
    },
    {
      "nombres":"HALIRE YEPEZ LEYDI MAGALY",
      "dni":42612675,
      "ieId":""
    },
    {
      "nombres":"LUNA OQUENDO JANSON",
      "dni":44254563,
      "ieId":""
    },
    {
      "nombres":"PACCO VERGARA ALEJANDRO",
      "dni":41141338,
      "ieId":""
    },
    {
      "nombres":"SINGUNA CORNEJO ELISA",
      "dni":24495981,
      "ieId":""
    },
    {
      "nombres":"VARGAS LOAIZA WILFREDO",
      "dni":24470872,
      "ieId":""
    },
    {
      "nombres":"FLORES PEÑA WILIAN",
      "dni":40801785,
      "ieId":""
    },
    {
      "nombres":"ANDIA MANSILLA EDWIN",
      "dni":24486732,
      "ieId":""
    },
    {
      "nombres":"PACHECO AGUILAR ARMANDO",
      "dni":23815573,
      "ieId":""
    },
    {
      "nombres":"PALMA CHACON VILMA",
      "dni":23814881,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUALLPA ADELAIDA",
      "dni":40742242,
      "ieId":""
    },
    {
      "nombres":"HUALLPA HUANCA REBECA",
      "dni":40506595,
      "ieId":""
    },
    {
      "nombres":"AVILES DALGUERRE FELIX",
      "dni":23962798,
      "ieId":""
    },
    {
      "nombres":"AVILES DALGUERRE GLADYS",
      "dni":24483294,
      "ieId":""
    },
    {
      "nombres":"CALLATA CALSINA FREDY WILLAMS",
      "dni":30842983,
      "ieId":""
    },
    {
      "nombres":"CARDEÑA APARICIO ERNESTO",
      "dni":23859050,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN TAIPE CARLA",
      "dni":42901961,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA RICALDE LUCILA MERCEDES",
      "dni":23857291,
      "ieId":""
    },
    {
      "nombres":"HANCCO CRUZ ANA ELIZABETH",
      "dni":40099553,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAYTA ZUÑIGA JOSE LUIS",
      "dni":24713113,
      "ieId":""
    },
    {
      "nombres":"HUAMAN AUCCA JACKELINE ELIANA",
      "dni":44198160,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAYLLAPUMA ERNESTINA",
      "dni":40036885,
      "ieId":""
    },
    {
      "nombres":"HUILLCA HUAMAN DORA ESPERANZA",
      "dni":23905068,
      "ieId":""
    },
    {
      "nombres":"LETONA PUMA LUZVENIA JULIA",
      "dni":23979819,
      "ieId":""
    },
    {
      "nombres":"MARCANO CCOPA ROGER ROYMIR",
      "dni":2168311,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ CARPIO GREDI GENARO",
      "dni":23809296,
      "ieId":""
    },
    {
      "nombres":"PAUCAR HUAYLLANI PONCIANO",
      "dni":24713203,
      "ieId":""
    },
    {
      "nombres":"PORROA QUISPE VICTOR WALTER",
      "dni":23831149,
      "ieId":""
    },
    {
      "nombres":"QUISPE CRUZ JORGE",
      "dni":23862705,
      "ieId":""
    },
    {
      "nombres":"QUISPEHUANCA QUISPE MARIA LUISA",
      "dni":10230927,
      "ieId":""
    },
    {
      "nombres":"ROJAS SALAS SAIDA",
      "dni":24494460,
      "ieId":""
    },
    {
      "nombres":"SUAREZ ABARCA JUAN",
      "dni":23982924,
      "ieId":""
    },
    {
      "nombres":"VERA BEJAR PERCY",
      "dni":40388162,
      "ieId":""
    },
    {
      "nombres":"VILCANINA GRANDE AMERICO LEONIDAS",
      "dni":40448666,
      "ieId":""
    },
    {
      "nombres":"VILLA QUISPE HECTOR",
      "dni":23934167,
      "ieId":""
    },
    {
      "nombres":"ZANS AGUIRRE MARCO",
      "dni":23836337,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA LOAIZA NATIVIDAD",
      "dni":23823213,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE GONGORA LADISLAO",
      "dni":25003058,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA RICALDE MARTHA",
      "dni":23860808,
      "ieId":""
    },
    {
      "nombres":"LAQUITA SICLLA SANTIAGO",
      "dni":23901663,
      "ieId":""
    },
    {
      "nombres":"MEJIA MANRIQUE MERY",
      "dni":41122840,
      "ieId":""
    },
    {
      "nombres":"PEREZ VALENCIA GENARO TEOFILO",
      "dni":21519299,
      "ieId":""
    },
    {
      "nombres":"SILVA CASTRO ELOY",
      "dni":24488663,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA USCAMAYTA SONIA",
      "dni":24487848,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO YOLANDA",
      "dni":25321574,
      "ieId":""
    },
    {
      "nombres":"YUCRA SUTTA GIOVANA",
      "dni":40363954,
      "ieId":""
    },
    {
      "nombres":"BECERRA LUNA EDGAR",
      "dni":23927096,
      "ieId":""
    },
    {
      "nombres":"BERNAL TORRES DANIEL",
      "dni":24495913,
      "ieId":""
    },
    {
      "nombres":"CAJIGAS SALAS CLORINDA",
      "dni":23835543,
      "ieId":""
    },
    {
      "nombres":"GUEVARA MEDINA MATILDE",
      "dni":24460263,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CCACYA MAGDELI",
      "dni":23943216,
      "ieId":""
    },
    {
      "nombres":"KEHUARUCHO TORRES GLORIA",
      "dni":24462626,
      "ieId":""
    },
    {
      "nombres":"QUISPE JALLASI DOROTEA",
      "dni":24489328,
      "ieId":""
    },
    {
      "nombres":"RONDON COANQUI WILLY",
      "dni":43793140,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA MEZA MARCO ANTONIO",
      "dni":23940843,
      "ieId":""
    },
    {
      "nombres":"CASTILLA VILLAVICENCIO ROGER JESUS",
      "dni":41360701,
      "ieId":""
    },
    {
      "nombres":"CHOQUE TIJERA WILLIAM",
      "dni":24707518,
      "ieId":""
    },
    {
      "nombres":"GARCIA RAMOS ROCIO AMPARO",
      "dni":29333683,
      "ieId":""
    },
    {
      "nombres":"GUIA MELO GRIMALDO EVANGELIO",
      "dni":24991997,
      "ieId":""
    },
    {
      "nombres":"HUILLCA PALOMINO WILBER HORACIO",
      "dni":25003887,
      "ieId":""
    },
    {
      "nombres":"MAMANI ROJAS PERCY",
      "dni":1297878,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ BOLIVAR ALEJANDRO",
      "dni":23873692,
      "ieId":""
    },
    {
      "nombres":"QUISPE VARGAS SAUL ALBERTO",
      "dni":24995122,
      "ieId":""
    },
    {
      "nombres":"TORRES CALLIÑAUPA MARISOL",
      "dni":24489930,
      "ieId":""
    },
    {
      "nombres":"CENTENO NAYRA LILIANA LUX",
      "dni":43759932,
      "ieId":""
    },
    {
      "nombres":"CHALLCO BERROCAL TEOFILO",
      "dni":7537040,
      "ieId":""
    },
    {
      "nombres":"GRAJEDA QUISPE LUIS ALBERTO",
      "dni":23990620,
      "ieId":""
    },
    {
      "nombres":"LICUONA HUAYLLAPUMA CYNDI MARISU",
      "dni":43656250,
      "ieId":""
    },
    {
      "nombres":"LOBATON SOSA JUAN",
      "dni":24486424,
      "ieId":""
    },
    {
      "nombres":"LUNA HUAMANI CLARA",
      "dni":40474502,
      "ieId":""
    },
    {
      "nombres":"QUIJANO RODRIGUEZ AUGUSTO MARTIN",
      "dni":7753042,
      "ieId":""
    },
    {
      "nombres":"YANQUI CAMALA DOMINGO",
      "dni":7766597,
      "ieId":""
    },
    {
      "nombres":"APAZA MAMANI CARLOS ALBERTO",
      "dni":24495034,
      "ieId":""
    },
    {
      "nombres":"BANDA QUILLO ELISEO",
      "dni":10094880,
      "ieId":""
    },
    {
      "nombres":"CUSI LAURA EUGENIO",
      "dni":80385810,
      "ieId":""
    },
    {
      "nombres":"LIMPI CANO FERNANDO",
      "dni":24701067,
      "ieId":""
    },
    {
      "nombres":"MERMA CORAHUA NELY",
      "dni":42956132,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUALLPA SANDRA MONICA",
      "dni":80006939,
      "ieId":""
    },
    {
      "nombres":"SULLCA QUISPE JACQUELIN",
      "dni":44734042,
      "ieId":""
    },
    {
      "nombres":"HUAHUASONCCO MAYO JESUS",
      "dni":42124998,
      "ieId":""
    },
    {
      "nombres":"PAUCAR HUAYLLANI VILMA",
      "dni":24706569,
      "ieId":""
    },
    {
      "nombres":"PIZARRO SUTTA LUCINDA",
      "dni":40236680,
      "ieId":""
    },
    {
      "nombres":"TORRES CALLIÑAUPA MARISOL",
      "dni":24489930,
      "ieId":""
    },
    {
      "nombres":"YAPU CACERES CAROLINA",
      "dni":44071763,
      "ieId":""
    },
    {
      "nombres":"CAMPOS TORRES ROBERTO DANIEL",
      "dni":24462488,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DORADO BEATRIZ",
      "dni":41985661,
      "ieId":""
    },
    {
      "nombres":"INQUILLAY INQUILLAY EDWEN",
      "dni":23967593,
      "ieId":""
    },
    {
      "nombres":"FLOREZ ZUÑIGA JHONNY",
      "dni":46284274,
      "ieId":""
    },
    {
      "nombres":"LUNA TUERO ALEJANDRINA",
      "dni":23877178,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO YEPEZ JUAN ALBERTO",
      "dni":23985066,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ ROJAS LIZ AURORA",
      "dni":41603201,
      "ieId":""
    },
    {
      "nombres":"NAYHUA HUISA JUAN FERNANDO",
      "dni":23859907,
      "ieId":""
    },
    {
      "nombres":"QUISPE MONTEROLA LUDWING",
      "dni":23988328,
      "ieId":""
    },
    {
      "nombres":"RUIZ YZQUIERDO LUZ ERESVITA",
      "dni":42998318,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ PACCI ISOLINO JUAN",
      "dni":80391197,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO YOLANDA",
      "dni":25321574,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA CONDORI GUIDO OVER",
      "dni":2296882,
      "ieId":""
    },
    {
      "nombres":"ACHANCARAY YARAHUAMAN KARINA",
      "dni":24490631,
      "ieId":""
    },
    {
      "nombres":"AIMITUMA RAYME MARGOTH",
      "dni":44199010,
      "ieId":""
    },
    {
      "nombres":"CALLA LOZANO ROBERT ISIDRO",
      "dni":42931757,
      "ieId":""
    },
    {
      "nombres":"CONCHA AUCAPUMA YESICA",
      "dni":25327101,
      "ieId":""
    },
    {
      "nombres":"CONDORI CUSIHUAMAN MARIA ELENA",
      "dni":41396213,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PUMA ARTURO",
      "dni":41709409,
      "ieId":""
    },
    {
      "nombres":"LAJO CHAVEZ ROXANA VALENTINA",
      "dni":23992054,
      "ieId":""
    },
    {
      "nombres":"PILLCO ENRIQUEZ JACINTA",
      "dni":24479679,
      "ieId":""
    },
    {
      "nombres":"QUISPE JALLASI DOROTEA",
      "dni":24489328,
      "ieId":""
    },
    {
      "nombres":"YALLICO EGAS DE MATTOS GLADYS PRESENTACION",
      "dni":23818082,
      "ieId":""
    },
    {
      "nombres":"AUCCA ECHARRE JESUS",
      "dni":24486039,
      "ieId":""
    },
    {
      "nombres":"INQUILTUPA MOSCOSO BENITO",
      "dni":24486679,
      "ieId":""
    },
    {
      "nombres":"MAMANI APAZA ROGELIO",
      "dni":1341548,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUALLPA SANDRA MONICA",
      "dni":80006939,
      "ieId":""
    },
    {
      "nombres":"ROCA LUQUE CIRILO",
      "dni":23936048,
      "ieId":""
    },
    {
      "nombres":"SULLCA QUISPE ANTOLIN JUSTINIANO",
      "dni":24703003,
      "ieId":""
    },
    {
      "nombres":"SULLCA QUISPE JUANA",
      "dni":24714251,
      "ieId":""
    },
    {
      "nombres":"AGUAYO MAR JULIO TEODOMIRO",
      "dni":24486826,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ALAGON LOURDES",
      "dni":24470374,
      "ieId":""
    },
    {
      "nombres":"TACO BOHORQUEZ DANILO",
      "dni":40482055,
      "ieId":""
    },
    {
      "nombres":"SAIRE LOAYZA RICHAR JON",
      "dni":24470659,
      "ieId":""
    },
    {
      "nombres":"CCOPA CCANAHUIRE LUZ MARINA",
      "dni":41113975,
      "ieId":""
    },
    {
      "nombres":"HUANCA HERMOZA SABINA",
      "dni":24716907,
      "ieId":""
    },
    {
      "nombres":"MENDOZA PINTO SOFIA",
      "dni":24813716,
      "ieId":""
    },
    {
      "nombres":"MUELLE SOTO ROSA",
      "dni":24717234,
      "ieId":""
    },
    {
      "nombres":"CHUCTAYA TORRES NORMA GREGORIA",
      "dni":29641202,
      "ieId":""
    },
    {
      "nombres":"YAURI SIVINCHA FRIDA",
      "dni":23862680,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA CCASA NEMESIA",
      "dni":24705486,
      "ieId":""
    },
    {
      "nombres":"PINEDA AQUINO MEDALI",
      "dni":40612418,
      "ieId":""
    },
    {
      "nombres":"MADUEÑO MONTUFAR ROSARIO",
      "dni":40088963,
      "ieId":""
    },
    {
      "nombres":"LEON ARIZAPANA ANTONIA",
      "dni":40508550,
      "ieId":""
    },
    {
      "nombres":"PFOCCORI PUMACALLAHUI ABELINA",
      "dni":46568855,
      "ieId":""
    },
    {
      "nombres":"SULLCA NEYRA MARLENY ROXANA",
      "dni":43490630,
      "ieId":""
    },
    {
      "nombres":"CHAMBI VELASQUEZ SILVIA",
      "dni":1554919,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHAMPI IRMA",
      "dni":24716351,
      "ieId":""
    },
    {
      "nombres":"AYMITUMA AGUILAR ERNESTINA",
      "dni":24706062,
      "ieId":""
    },
    {
      "nombres":"MONTES LANTARON MIGUEL AMERICO",
      "dni":29727083,
      "ieId":""
    },
    {
      "nombres":"ASTACIE MERMA MARUJA",
      "dni":45479016,
      "ieId":""
    },
    {
      "nombres":"ALMIRON TOMAYA TEOFILA",
      "dni":24808000,
      "ieId":""
    },
    {
      "nombres":"QUISPE AIMITUMA YOVANA",
      "dni":42875615,
      "ieId":""
    },
    {
      "nombres":"BORDA NEIRA KATHYA MILAGROS",
      "dni":40986606,
      "ieId":""
    },
    {
      "nombres":"CASTILLO PAZ ELIZABETH PAOLA",
      "dni":41433534,
      "ieId":""
    },
    {
      "nombres":"DELGADO GUERREROS EBERT",
      "dni":23892543,
      "ieId":""
    },
    {
      "nombres":"HUACHO TINUCO JULIANA",
      "dni":24799636,
      "ieId":""
    },
    {
      "nombres":"PACHECO VILLENA YANET",
      "dni":41417348,
      "ieId":""
    },
    {
      "nombres":"PAUCAR RAMOS MARYLUZ JHEOVANA",
      "dni":40644165,
      "ieId":""
    },
    {
      "nombres":"SANIZ CHOQUEHUANCA NALDA CAROLINA",
      "dni":29531289,
      "ieId":""
    },
    {
      "nombres":"YUCA QUISPE PIO ENRIQUE",
      "dni":40834344,
      "ieId":""
    },
    {
      "nombres":"APAZA MAMANI MELCHOR",
      "dni":24713320,
      "ieId":""
    },
    {
      "nombres":"BEDREGAL TRELLES GUIDO",
      "dni":80600995,
      "ieId":""
    },
    {
      "nombres":"BEDREGAL VILLENA CARMELA MELCHORA",
      "dni":24813662,
      "ieId":""
    },
    {
      "nombres":"CARRILLO GUTIERREZ JUAN REYNAR",
      "dni":24802605,
      "ieId":""
    },
    {
      "nombres":"CONTO CCOPA WILBER",
      "dni":24705389,
      "ieId":""
    },
    {
      "nombres":"COTACALLAPA VIZCARRA HILDA AZUCENA",
      "dni":24804091,
      "ieId":""
    },
    {
      "nombres":"CUSI QUISPE AQUILINO",
      "dni":24813664,
      "ieId":""
    },
    {
      "nombres":"DOMINGUEZ QUISPE JULIO ROLANDO",
      "dni":24799596,
      "ieId":""
    },
    {
      "nombres":"GARCIA QUISPE PLACIDA MARTHA",
      "dni":24813839,
      "ieId":""
    },
    {
      "nombres":"GONGORA VALENCIA RAMIRO",
      "dni":24802150,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MARQUEZ FELIPE",
      "dni":24802338,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MARQUEZ LUIS",
      "dni":24799463,
      "ieId":""
    },
    {
      "nombres":"MENDOZA PINTO BERNARDINO FELIBERTO",
      "dni":24806595,
      "ieId":""
    },
    {
      "nombres":"MENDOZA VALENCIA MAURO",
      "dni":24806625,
      "ieId":""
    },
    {
      "nombres":"OLIVARES CASTRO EDISON",
      "dni":24780173,
      "ieId":""
    },
    {
      "nombres":"PUMA TURPO VICENTE",
      "dni":25136341,
      "ieId":""
    },
    {
      "nombres":"PUMA VALENCIA SIMEON",
      "dni":24799217,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUAMANI EVANGELINA",
      "dni":24803786,
      "ieId":""
    },
    {
      "nombres":"ROMOACCA VILLAVICENCIO VICTORIA",
      "dni":24813804,
      "ieId":""
    },
    {
      "nombres":"UGARTE SULLA JOSEFA",
      "dni":24780433,
      "ieId":""
    },
    {
      "nombres":"VALENCIA MOLINA QUINA MARGOT",
      "dni":24806413,
      "ieId":""
    },
    {
      "nombres":"ZARATE CASA VIRGINIA BERTHA",
      "dni":43375121,
      "ieId":""
    },
    {
      "nombres":"BACA VEGA JUAN RENATO",
      "dni":23817744,
      "ieId":""
    },
    {
      "nombres":"CARRILLO CONTRERAS FLOR NELIDA",
      "dni":42402193,
      "ieId":""
    },
    {
      "nombres":"CASTRO LAUCATA CLAUDIA",
      "dni":42604022,
      "ieId":""
    },
    {
      "nombres":"LUNA MAMANI MATILDE VICTORIA",
      "dni":29349383,
      "ieId":""
    },
    {
      "nombres":"RAMOS APAZA SANDRA VERONICA",
      "dni":41168527,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SALCEDO RONALD",
      "dni":23947959,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SALCEDO SERGIO",
      "dni":24813646,
      "ieId":""
    },
    {
      "nombres":"DIAZ CALDERON IRMA",
      "dni":23923747,
      "ieId":""
    },
    {
      "nombres":"PINEDA TORRES FREDI",
      "dni":40291916,
      "ieId":""
    },
    {
      "nombres":"CHECYA LIMA EFRAIN",
      "dni":24718511,
      "ieId":""
    },
    {
      "nombres":"HUAMANI UGARTE ENRIQUE",
      "dni":24803863,
      "ieId":""
    },
    {
      "nombres":"CCANCHILLO QUISPE CLAUDIO",
      "dni":24813534,
      "ieId":""
    },
    {
      "nombres":"HUILLCA CHUCTAYA RAUL",
      "dni":42271458,
      "ieId":""
    },
    {
      "nombres":"SALCEDO CARBAJAL SATURNINO",
      "dni":24801168,
      "ieId":""
    },
    {
      "nombres":"PFOCCORI PUMACALLAHUI JOEL",
      "dni":24809905,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUANCA VICTOR RENE",
      "dni":2369258,
      "ieId":""
    },
    {
      "nombres":"CCOYORI MAMANI DELIA",
      "dni":43358515,
      "ieId":""
    },
    {
      "nombres":"CHACON CHIRINOS ELIZABETH AMALIA",
      "dni":29589863,
      "ieId":""
    },
    {
      "nombres":"CHOQQUECCOTA CRUZ DALMECIO",
      "dni":24792187,
      "ieId":""
    },
    {
      "nombres":"DENOS MOLINA ABEL",
      "dni":24799483,
      "ieId":""
    },
    {
      "nombres":"RIMACHI GUEVARA VICTOR",
      "dni":24806790,
      "ieId":""
    },
    {
      "nombres":"MURGUIA SANCHEZ ALEX CRISOSTOMO",
      "dni":29307537,
      "ieId":""
    },
    {
      "nombres":"NOA GARCIA RENAN",
      "dni":43987744,
      "ieId":""
    },
    {
      "nombres":"PFOCCORI PUMACALLAHUI GERREY",
      "dni":24813613,
      "ieId":""
    },
    {
      "nombres":"DENOS MOLINA ESTEBAN",
      "dni":24809857,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA CAYO DANIA SANTUSA",
      "dni":41072014,
      "ieId":""
    },
    {
      "nombres":"OBANDO SOTELO SUSANA",
      "dni":22092840,
      "ieId":""
    },
    {
      "nombres":"QUISPE RIOS ADEMIR",
      "dni":24886012,
      "ieId":""
    },
    {
      "nombres":"SALCEDO PFOCCORI MODESTO",
      "dni":42565309,
      "ieId":""
    },
    {
      "nombres":"TAIPE CHALLA ELEUTERIO",
      "dni":80086921,
      "ieId":""
    },
    {
      "nombres":"YAHUIRA PFOCCORI ALBERTO",
      "dni":42050744,
      "ieId":""
    },
    {
      "nombres":"COLQUE APAZA NELY",
      "dni":40260450,
      "ieId":""
    },
    {
      "nombres":"JARA HUAMANI WILBERT",
      "dni":24813912,
      "ieId":""
    },
    {
      "nombres":"PAIVA CASTRO SANDRA",
      "dni":29641440,
      "ieId":""
    },
    {
      "nombres":"SALCEDO CHAVEZ JAVIER",
      "dni":24813651,
      "ieId":""
    },
    {
      "nombres":"CORNEJO MAYTA VILMA",
      "dni":29725509,
      "ieId":""
    },
    {
      "nombres":"HUAYTA HUAYTA IDA RUTH",
      "dni":30842282,
      "ieId":""
    },
    {
      "nombres":"PARRA CCASO FROILAN",
      "dni":42037697,
      "ieId":""
    },
    {
      "nombres":"SALCEDO HUAMANI ERNEST",
      "dni":40572673,
      "ieId":""
    },
    {
      "nombres":"MAMANI BOLIVAR EDGAR",
      "dni":40808061,
      "ieId":""
    },
    {
      "nombres":"QUISPE PFOCCORI RUTH",
      "dni":44683886,
      "ieId":""
    },
    {
      "nombres":"SUMA GUZMAN YANET",
      "dni":42196123,
      "ieId":""
    },
    {
      "nombres":"GIRALDO ARIAS JUDITH",
      "dni":30424056,
      "ieId":""
    },
    {
      "nombres":"PERALTA CARRILLO HERMILA",
      "dni":29430358,
      "ieId":""
    },
    {
      "nombres":"CASTRO HUAMANI SONIA",
      "dni":41610628,
      "ieId":""
    },
    {
      "nombres":"SAICO PACSI MARITZA VERONICA",
      "dni":29640742,
      "ieId":""
    },
    {
      "nombres":"ALCCA ALCA WILFREDO",
      "dni":29610335,
      "ieId":""
    },
    {
      "nombres":"CASTILLO PRIETO MOISES GONZALO",
      "dni":24813660,
      "ieId":""
    },
    {
      "nombres":"CHAÑI ARAPA DEMETRIO",
      "dni":2273375,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA DE MUELLE TANIA GREGORIA",
      "dni":24801820,
      "ieId":""
    },
    {
      "nombres":"CONDORI ZEBALLOS ROGER MELITON",
      "dni":40839809,
      "ieId":""
    },
    {
      "nombres":"FARFAN BARRIGA MILENA VERONICA",
      "dni":29607200,
      "ieId":""
    },
    {
      "nombres":"GARCIA FLORES JUDITH",
      "dni":44000806,
      "ieId":""
    },
    {
      "nombres":"HERRERA CACERES ALEIDA ELODIA",
      "dni":29594280,
      "ieId":""
    },
    {
      "nombres":"JARA HUAMANI WILFREDO",
      "dni":24806462,
      "ieId":""
    },
    {
      "nombres":"LLOCCALLASI MENDOZA MIGUEL",
      "dni":23801921,
      "ieId":""
    },
    {
      "nombres":"LUQUE VILCAPAZA GERMAN",
      "dni":41901253,
      "ieId":""
    },
    {
      "nombres":"MALDONADO CUEVA JUANA",
      "dni":24717603,
      "ieId":""
    },
    {
      "nombres":"MAMANI OBANDO GLADIS MAGALI",
      "dni":43673563,
      "ieId":""
    },
    {
      "nombres":"MURILLO LAZO YOLANDA",
      "dni":24708072,
      "ieId":""
    },
    {
      "nombres":"OROSCO PINEDA ZAYURI",
      "dni":42482472,
      "ieId":""
    },
    {
      "nombres":"PACHECO DEL CASTILLO MARIA ESTHER",
      "dni":23830753,
      "ieId":""
    },
    {
      "nombres":"PACHECO HUANACO PABLO VICENTE",
      "dni":24706161,
      "ieId":""
    },
    {
      "nombres":"PINTO APAZA JHON WILMER",
      "dni":45305526,
      "ieId":""
    },
    {
      "nombres":"QUISPE BACA FREDY",
      "dni":44036216,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE PERCY JAIME",
      "dni":25199820,
      "ieId":""
    },
    {
      "nombres":"SALCEDO CHAVEZ TERESA",
      "dni":24813665,
      "ieId":""
    },
    {
      "nombres":"TAIPE CONZA DARWIN",
      "dni":40105430,
      "ieId":""
    },
    {
      "nombres":"TAIRO HUAYHUA GLADYS",
      "dni":24719257,
      "ieId":""
    },
    {
      "nombres":"BELTRAN CHITE WILY",
      "dni":29712506,
      "ieId":""
    },
    {
      "nombres":"CHARCA CONDORI EDITH ELENA",
      "dni":1544205,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA VALENCIA PABLO MAURO",
      "dni":24813799,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA VALENCIA RODRIGO",
      "dni":24813654,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA CCALA GABRIELA ROSARIO",
      "dni":29731532,
      "ieId":""
    },
    {
      "nombres":"MAMANI GAMARRA PATRICIA CHABUCA",
      "dni":29657575,
      "ieId":""
    },
    {
      "nombres":"MAMANI PARI NILDA RUTH",
      "dni":45531449,
      "ieId":""
    },
    {
      "nombres":"MENDOZA COAQUIRA ANTONIO ELISEO",
      "dni":24806677,
      "ieId":""
    },
    {
      "nombres":"MERMA HILARIO FANY RUTMERY",
      "dni":40447253,
      "ieId":""
    },
    {
      "nombres":"OLIVARES BUSTINZA MARIA YSABEL",
      "dni":30424549,
      "ieId":""
    },
    {
      "nombres":"PAZ VARGAS TANIA",
      "dni":40825713,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUAMANI RONALD",
      "dni":29723127,
      "ieId":""
    },
    {
      "nombres":"SALHUA QUISPE VICENTE",
      "dni":29600962,
      "ieId":""
    },
    {
      "nombres":"SERRANO TANCO WALTER ALBERTO",
      "dni":29686663,
      "ieId":""
    },
    {
      "nombres":"TOROCAHUA CABANA MOISES HUGO",
      "dni":29646012,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA VEGA JONNY ANGEL",
      "dni":29649281,
      "ieId":""
    },
    {
      "nombres":"ZARATE CASA PERCY GIL",
      "dni":40412460,
      "ieId":""
    },
    {
      "nombres":"CHACNAMA CORRALES LOURDES",
      "dni":40376185,
      "ieId":""
    },
    {
      "nombres":"CONDORI CHURA HILDA ANA",
      "dni":29556984,
      "ieId":""
    },
    {
      "nombres":"FLORES MUÑOZ JUAN CARLOS",
      "dni":29659213,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CUBA RICARDO",
      "dni":41825392,
      "ieId":""
    },
    {
      "nombres":"OSCA SOTO MERY SOLEDAD",
      "dni":30644057,
      "ieId":""
    },
    {
      "nombres":"POCCOHUANCA QUISPE BEATRIZ",
      "dni":24712608,
      "ieId":""
    },
    {
      "nombres":"ROJAS VILLAFUERTE KARINA",
      "dni":42748836,
      "ieId":""
    },
    {
      "nombres":"CCAPA FERNANDEZ DAVID CLAUDIO",
      "dni":41798305,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI WILBER",
      "dni":41596896,
      "ieId":""
    },
    {
      "nombres":"GIL ARAPA RODOLFO JAVIER",
      "dni":29481843,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ZEGARRA HILBERTO",
      "dni":40092983,
      "ieId":""
    },
    {
      "nombres":"PINEDA PRIETO VALENTIN",
      "dni":23911820,
      "ieId":""
    },
    {
      "nombres":"PUMACALLAHUI CHOCÑA ALIPIO NENORIO",
      "dni":24801550,
      "ieId":""
    },
    {
      "nombres":"PUMACALLAHUI PINEDA UBERT SEGUNDO",
      "dni":29630716,
      "ieId":""
    },
    {
      "nombres":"BENTURA ASTO REYNALDO",
      "dni":41481219,
      "ieId":""
    },
    {
      "nombres":"CONDORI ORDOÑEZ JOSE ANTONIO",
      "dni":29708759,
      "ieId":""
    },
    {
      "nombres":"OROSCO VERA GILBERTO",
      "dni":29641770,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHOQUENAYRA EDUVARDED",
      "dni":10672150,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUINTASI EDUARDO",
      "dni":28855035,
      "ieId":""
    },
    {
      "nombres":"SARCCO USTO LUCILA",
      "dni":24287260,
      "ieId":""
    },
    {
      "nombres":"SUCASAIRE SUCASAIRE JACINTO",
      "dni":2028978,
      "ieId":""
    },
    {
      "nombres":"ALMIRON CHOQQUECCOTA LEONARDO",
      "dni":41605899,
      "ieId":""
    },
    {
      "nombres":"CORIMANYA MAMANI AURELIA VICTORIANA",
      "dni":30848861,
      "ieId":""
    },
    {
      "nombres":"JULI MAMANI WILFREDO EUSEBIO",
      "dni":2427542,
      "ieId":""
    },
    {
      "nombres":"MENDOZA VALENCIA JAVIER",
      "dni":24813592,
      "ieId":""
    },
    {
      "nombres":"OROSCO ARENAS ERASMO",
      "dni":24809866,
      "ieId":""
    },
    {
      "nombres":"PEÑA MELENDEZ REYNA",
      "dni":24710894,
      "ieId":""
    },
    {
      "nombres":"CORCINO HUAMANI LOURDES",
      "dni":41800438,
      "ieId":""
    },
    {
      "nombres":"MAMANI CONDORI RUTH",
      "dni":24711986,
      "ieId":""
    },
    {
      "nombres":"WILDES CHAMBI JOE EDISON",
      "dni":41139023,
      "ieId":""
    },
    {
      "nombres":"ANCALLA SIVINCHA EDITH",
      "dni":44684315,
      "ieId":""
    },
    {
      "nombres":"APAZA ALMIRON MAURA",
      "dni":24808698,
      "ieId":""
    },
    {
      "nombres":"CCAHUANTICO MENDOZA EVA",
      "dni":42454102,
      "ieId":""
    },
    {
      "nombres":"BENTURA ASTO APARICIA",
      "dni":43591725,
      "ieId":""
    },
    {
      "nombres":"SENGA QUISPE EUSEBIA",
      "dni":24667528,
      "ieId":""
    },
    {
      "nombres":"YAHUIRA HUAMANI MARCELINO",
      "dni":41965450,
      "ieId":""
    },
    {
      "nombres":"ARIAS MAMANI LUZ MARINA",
      "dni":40676721,
      "ieId":""
    },
    {
      "nombres":"CHICATA AGUIRRE LUZMILA",
      "dni":24714744,
      "ieId":""
    },
    {
      "nombres":"LEON QUISPE BERNARDO",
      "dni":24583373,
      "ieId":""
    },
    {
      "nombres":"HUIZA CORRALES EDGAR",
      "dni":42861104,
      "ieId":""
    },
    {
      "nombres":"MOLLO HUAMANI CARMEN ROSA",
      "dni":44614316,
      "ieId":""
    },
    {
      "nombres":"GOMEZ RENDON TATIANA",
      "dni":42882824,
      "ieId":""
    },
    {
      "nombres":"SALDIVAR TOLEDO ROY",
      "dni":43049676,
      "ieId":""
    },
    {
      "nombres":"CESPEDES HANCCO DELIA FANY",
      "dni":40403561,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE BATALLANOS TIBURCIO",
      "dni":24791400,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE GUTIERREZ CLEOFE ESTHER",
      "dni":24785972,
      "ieId":""
    },
    {
      "nombres":"CABRERA CONTRERAS ANALI YESSICA",
      "dni":43801142,
      "ieId":""
    },
    {
      "nombres":"CASTRO CUBA OLIVARES SINTHIA ROCIO",
      "dni":41355588,
      "ieId":""
    },
    {
      "nombres":"CHICATA CARDENAS CESAR",
      "dni":24786096,
      "ieId":""
    },
    {
      "nombres":"CUBA CARABALLO ISABEL",
      "dni":24791038,
      "ieId":""
    },
    {
      "nombres":"CUELA VARGAS YANETH VICTORIA",
      "dni":29460744,
      "ieId":""
    },
    {
      "nombres":"GOMEZ ALVAREZ EDGAR",
      "dni":24790661,
      "ieId":""
    },
    {
      "nombres":"MONGE SUAREZ JULIA",
      "dni":29659060,
      "ieId":""
    },
    {
      "nombres":"OBLITAS ENRIQUEZ TEOFILA",
      "dni":24808104,
      "ieId":""
    },
    {
      "nombres":"PARAVICINO ALARCON TANIA",
      "dni":23967200,
      "ieId":""
    },
    {
      "nombres":"PAREDES HILACUNDO ROBERTO WALTER",
      "dni":45276928,
      "ieId":""
    },
    {
      "nombres":"PEÑA GALIANO MARLENI",
      "dni":41866696,
      "ieId":""
    },
    {
      "nombres":"QUISPE CACYA SOTERO LEONIDAS",
      "dni":30667754,
      "ieId":""
    },
    {
      "nombres":"RAMOS GUTIERREZ GRIMALDA",
      "dni":24495159,
      "ieId":""
    },
    {
      "nombres":"ROMERO ALVAREZ ADRIEL",
      "dni":24786564,
      "ieId":""
    },
    {
      "nombres":"ROMERO ALVAREZ JORGE",
      "dni":24789457,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ PEDRAZA LIZ MARITZA",
      "dni":45216804,
      "ieId":""
    },
    {
      "nombres":"USCA PACCO EULOGIO",
      "dni":23952231,
      "ieId":""
    },
    {
      "nombres":"USCA PACO ANASTACIA",
      "dni":40303109,
      "ieId":""
    },
    {
      "nombres":"CACERES CASTRO LUZ MARINA",
      "dni":31427003,
      "ieId":""
    },
    {
      "nombres":"ANTISINO AGUIRRE JESUS",
      "dni":24791030,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ LAYME GERVACIO",
      "dni":24803602,
      "ieId":""
    },
    {
      "nombres":"OVIEDO ATAUCURI SANTOS",
      "dni":24811845,
      "ieId":""
    },
    {
      "nombres":"QUISPE LLAMOCCA FELIPA",
      "dni":80359910,
      "ieId":""
    },
    {
      "nombres":"SALHUA TORRES RENATO",
      "dni":24893504,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA TORRES ISAIAS",
      "dni":23824724,
      "ieId":""
    },
    {
      "nombres":"ARCE BELLIDO AQUILES",
      "dni":24802103,
      "ieId":""
    },
    {
      "nombres":"CHICATA BORDA DELINA EVELING",
      "dni":23936317,
      "ieId":""
    },
    {
      "nombres":"LLANO HUAMANI FELIPE",
      "dni":42245236,
      "ieId":""
    },
    {
      "nombres":"VALDEZ CUBA AGUEDA",
      "dni":24804385,
      "ieId":""
    },
    {
      "nombres":"MERMA CRUZ MAXIMO",
      "dni":80089104,
      "ieId":""
    },
    {
      "nombres":"PACHECO GUEVARA EDWIN BENJAMIN",
      "dni":44074023,
      "ieId":""
    },
    {
      "nombres":"RAMOS MAMANI LEONARDO",
      "dni":41605838,
      "ieId":""
    },
    {
      "nombres":"ROMERO ALVAREZ MANUEL",
      "dni":24789249,
      "ieId":""
    },
    {
      "nombres":"BENTURA ASTO ISIDORO",
      "dni":24811814,
      "ieId":""
    },
    {
      "nombres":"CHAUCA SAVINA LUISA",
      "dni":24781349,
      "ieId":""
    },
    {
      "nombres":"HUAMANI LAYME MERCEDES",
      "dni":45278272,
      "ieId":""
    },
    {
      "nombres":"PEÑA QUISPE BENEDICTO",
      "dni":24789636,
      "ieId":""
    },
    {
      "nombres":"TERRAZAS DE VERANO OLGA JERONIMA",
      "dni":23961095,
      "ieId":""
    },
    {
      "nombres":"CHACNAMA LAIME LEON",
      "dni":24780439,
      "ieId":""
    },
    {
      "nombres":"MAMANI CRUZ MARIA DEL ROCIO",
      "dni":40352456,
      "ieId":""
    },
    {
      "nombres":"MENDOZA DIAZ FELICITAS",
      "dni":24808740,
      "ieId":""
    },
    {
      "nombres":"MENDOZA SIVINCHA FRANY LIDER",
      "dni":42458560,
      "ieId":""
    },
    {
      "nombres":"PEÑA PACHECO DULIO",
      "dni":24803394,
      "ieId":""
    },
    {
      "nombres":"CUBA PEÑA ROLANDO",
      "dni":44690069,
      "ieId":""
    },
    {
      "nombres":"LLAMOCCA AROTAYPE ARTURO",
      "dni":41597081,
      "ieId":""
    },
    {
      "nombres":"TICONA USCAMAITA JUAN",
      "dni":24697468,
      "ieId":""
    },
    {
      "nombres":"AG?ERO OBLITAS SEGUNDO",
      "dni":24814620,
      "ieId":""
    },
    {
      "nombres":"ANAYA PIMENTEL ALEJANDRO",
      "dni":29625845,
      "ieId":""
    },
    {
      "nombres":"CHANCAHUAÑE RENDON MARIO",
      "dni":24805562,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CRUZ SERAPIO",
      "dni":24582032,
      "ieId":""
    },
    {
      "nombres":"HUAMANI GOMEZ FLORA",
      "dni":24811846,
      "ieId":""
    },
    {
      "nombres":"MIO ARREDONDO FERNANDO",
      "dni":24789212,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA RENDON NILBERTH",
      "dni":46060704,
      "ieId":""
    },
    {
      "nombres":"GONZALES ANDIA SANTIAGO",
      "dni":42530478,
      "ieId":""
    },
    {
      "nombres":"PEÑA ARENAS NESTOR SEGUNDO",
      "dni":24787201,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SOTO FANY",
      "dni":24790426,
      "ieId":""
    },
    {
      "nombres":"SANTOS TTITO LUIS WALTER",
      "dni":25214752,
      "ieId":""
    },
    {
      "nombres":"QUISPE CORPUNA JULIAN AMILCAR",
      "dni":44659327,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI ABARCA SARA",
      "dni":40894925,
      "ieId":""
    },
    {
      "nombres":"CASTRO HUAMANI GRIMALDO",
      "dni":24811867,
      "ieId":""
    },
    {
      "nombres":"ROMERO ROMERO JENRRI",
      "dni":24809104,
      "ieId":""
    },
    {
      "nombres":"SANTISTEBAN MATTO ROGER",
      "dni":40496715,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA PAUCCAR NICOLAS",
      "dni":24780095,
      "ieId":""
    },
    {
      "nombres":"VALLEJOS VERA TOMASA ADELAYDA",
      "dni":40778618,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CRUZ SHEILA RUTH",
      "dni":40735041,
      "ieId":""
    },
    {
      "nombres":"DIAZ HUMPIRE CARLOS",
      "dni":43694682,
      "ieId":""
    },
    {
      "nombres":"PUCUTUNI VASQUEZ PATRICIA",
      "dni":40211082,
      "ieId":""
    },
    {
      "nombres":"ACERO AG?ERO CELESTINA",
      "dni":24809171,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE MENDOZA RENATO",
      "dni":24805423,
      "ieId":""
    },
    {
      "nombres":"ANCO AGUILAR JUAN ANTONIO",
      "dni":42856376,
      "ieId":""
    },
    {
      "nombres":"AUCCACUSI ACUÑA MARCO ANTONIO",
      "dni":10520705,
      "ieId":""
    },
    {
      "nombres":"CABRERA QUISPE FELIPE ADALBERTO",
      "dni":42314320,
      "ieId":""
    },
    {
      "nombres":"CANAZA INCAHUANACO MARCO ANTONIO",
      "dni":42559416,
      "ieId":""
    },
    {
      "nombres":"CHAMPI HUAMAN YENY",
      "dni":42306457,
      "ieId":""
    },
    {
      "nombres":"CHAMPI HUAMAN YESSICA",
      "dni":42272725,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA CALCINA MIGUEL",
      "dni":42240173,
      "ieId":""
    },
    {
      "nombres":"CHURQUIPA CHARCA EDSON",
      "dni":44046790,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA COAQUIRA PERCY",
      "dni":40570714,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA DE VIZCARDO JESSICA GILDA",
      "dni":40250010,
      "ieId":""
    },
    {
      "nombres":"COLQUE MOLLO RINA",
      "dni":24718508,
      "ieId":""
    },
    {
      "nombres":"CORILLA VILLANUEVA BONIFACIO",
      "dni":24700504,
      "ieId":""
    },
    {
      "nombres":"CUELA SUPO FERNANDO",
      "dni":29627418,
      "ieId":""
    },
    {
      "nombres":"GOMEZ ROMERO JUANA CLORINDA",
      "dni":24809039,
      "ieId":""
    },
    {
      "nombres":"HUAMANI PUMA BALTAZAR",
      "dni":41170912,
      "ieId":""
    },
    {
      "nombres":"MASIAS CHUTAS PERCY",
      "dni":40151783,
      "ieId":""
    },
    {
      "nombres":"MENDOZA BOZA SALOME",
      "dni":24813376,
      "ieId":""
    },
    {
      "nombres":"MOYA CAHUANA ERNESTO",
      "dni":2556057,
      "ieId":""
    },
    {
      "nombres":"PALMA VELASCO RICARDO",
      "dni":24790800,
      "ieId":""
    },
    {
      "nombres":"PAUCARA COAQUIRA MODESTO HUGO",
      "dni":2416881,
      "ieId":""
    },
    {
      "nombres":"PEÑA SALAS MAGNOLIA",
      "dni":24804053,
      "ieId":""
    },
    {
      "nombres":"PFOCCORI QUISPE MAURA",
      "dni":24813594,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI MARTIN",
      "dni":2036806,
      "ieId":""
    },
    {
      "nombres":"ROJAS QUISPE TEOFILO",
      "dni":2439968,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ SANCHEZ CECILIA CIRILA",
      "dni":29472117,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA VALDARRAGO DE AN JUANA ROSA",
      "dni":29398445,
      "ieId":""
    },
    {
      "nombres":"APAZA APAZA ABELARDO",
      "dni":2426299,
      "ieId":""
    },
    {
      "nombres":"HUAMANI ENRIQUEZ SOFIA",
      "dni":41538388,
      "ieId":""
    },
    {
      "nombres":"LOAYZA ENRIQUEZ FELIX MARIO",
      "dni":24789222,
      "ieId":""
    },
    {
      "nombres":"MOREANO BUENO RODOLFO",
      "dni":24953739,
      "ieId":""
    },
    {
      "nombres":"QUISPE CRUZ ISAI EDGAR",
      "dni":40768974,
      "ieId":""
    },
    {
      "nombres":"RIVAS OCHOA DANY ALAN",
      "dni":42792294,
      "ieId":""
    },
    {
      "nombres":"SALCEDO CCAMA SAMUEL",
      "dni":42337904,
      "ieId":""
    },
    {
      "nombres":"ZARATE ROJAS TITO ARMANDO",
      "dni":23875469,
      "ieId":""
    },
    {
      "nombres":"ARAUJO SIVINCHA GUIMEL",
      "dni":43373022,
      "ieId":""
    },
    {
      "nombres":"CHAMPI CHUCTAYA BRAULIO",
      "dni":41739222,
      "ieId":""
    },
    {
      "nombres":"KANA PUMACHARA HONORATO",
      "dni":41284646,
      "ieId":""
    },
    {
      "nombres":"QQUECCAÑO CUYO LISBETH CAROLINA",
      "dni":45959078,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCALA EVA JUDITH",
      "dni":40088956,
      "ieId":""
    },
    {
      "nombres":"ROZAS CARRILLO RUBEN",
      "dni":23911535,
      "ieId":""
    },
    {
      "nombres":"ZARATE ALVAREZ ELISEO",
      "dni":42792026,
      "ieId":""
    },
    {
      "nombres":"BARCENA CHAUCA SIXTO FREDY",
      "dni":45040840,
      "ieId":""
    },
    {
      "nombres":"CALCINA MANUELO MERY GABRIELA",
      "dni":40725324,
      "ieId":""
    },
    {
      "nombres":"CAYO RODAS CESAR ALEJANDRO",
      "dni":40638983,
      "ieId":""
    },
    {
      "nombres":"FORA CHINO ELEANA LOURDES",
      "dni":29559219,
      "ieId":""
    },
    {
      "nombres":"HUAÑAHUI MAQQUERE HENRRE",
      "dni":42225170,
      "ieId":""
    },
    {
      "nombres":"POLANCO TRONCOSO RENE",
      "dni":24804126,
      "ieId":""
    },
    {
      "nombres":"RAMOS CONDORI MATEO",
      "dni":2147239,
      "ieId":""
    },
    {
      "nombres":"CUETO ARPI HERLINDA",
      "dni":24707230,
      "ieId":""
    },
    {
      "nombres":"PAZ ZEBALLOS JESSICA BERENICE",
      "dni":30963788,
      "ieId":""
    },
    {
      "nombres":"TAPIA GOMEZ ROGER GRIMALDO",
      "dni":24807734,
      "ieId":""
    },
    {
      "nombres":"YUCA NUÑONCA YANET",
      "dni":41478816,
      "ieId":""
    },
    {
      "nombres":"CHANCAHUAÑA RENDON VICTOR",
      "dni":24791013,
      "ieId":""
    },
    {
      "nombres":"HANCCO TUNI MAGNA JULIANA",
      "dni":41117621,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MEZA ALFREDO",
      "dni":24716052,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ CHOQUEHUANCA SALVADOR",
      "dni":29712039,
      "ieId":""
    },
    {
      "nombres":"PANTI QUISPE JOSE",
      "dni":24704294,
      "ieId":""
    },
    {
      "nombres":"PFOCCOALATA HUANCAHUIRE LUZMILA",
      "dni":29724640,
      "ieId":""
    },
    {
      "nombres":"QUISPE GUTIERREZ ROSA ELENA",
      "dni":30854423,
      "ieId":""
    },
    {
      "nombres":"CALCINA GUERRA SERGIO",
      "dni":42350259,
      "ieId":""
    },
    {
      "nombres":"CCAHUAYA DELGADO JUAN PABLO",
      "dni":29613954,
      "ieId":""
    },
    {
      "nombres":"HUAMANI PUMA VICENTE",
      "dni":24812850,
      "ieId":""
    },
    {
      "nombres":"MAMANI CATO LILIAM",
      "dni":2415415,
      "ieId":""
    },
    {
      "nombres":"TACURI LEYVA MAURO",
      "dni":80566936,
      "ieId":""
    },
    {
      "nombres":"TURPO MAYTA ESTER",
      "dni":42254376,
      "ieId":""
    },
    {
      "nombres":"VALENCIA SOTO RIGOBERTO",
      "dni":42173601,
      "ieId":""
    },
    {
      "nombres":"RAMOS SANCHEZ TOMASA DIANA",
      "dni":24700379,
      "ieId":""
    },
    {
      "nombres":"HURTADO CJUNO SONIA",
      "dni":42431109,
      "ieId":""
    },
    {
      "nombres":"RICRA JERI FRESIA",
      "dni":44181525,
      "ieId":""
    },
    {
      "nombres":"CHACON CHUQUITAPA ROSA",
      "dni":42256278,
      "ieId":""
    },
    {
      "nombres":"GAMARRA YAÑAC KARINA",
      "dni":42476310,
      "ieId":""
    },
    {
      "nombres":"VALENCIA JARA ROXANA",
      "dni":42808102,
      "ieId":""
    },
    {
      "nombres":"FARFAN VEGA LINA",
      "dni":40222756,
      "ieId":""
    },
    {
      "nombres":"AGUERO SALAS SANTIAGO",
      "dni":24788931,
      "ieId":""
    },
    {
      "nombres":"ARENAS BUSTOS ROSA",
      "dni":9311259,
      "ieId":""
    },
    {
      "nombres":"ARENAS FARFAN WALTER",
      "dni":24789135,
      "ieId":""
    },
    {
      "nombres":"ARENAS MONGE FREDI",
      "dni":24789060,
      "ieId":""
    },
    {
      "nombres":"CHARCA ITO LUCIA",
      "dni":2430122,
      "ieId":""
    },
    {
      "nombres":"DIAZ QUISPE MARTHA",
      "dni":24811650,
      "ieId":""
    },
    {
      "nombres":"HURTADO SUAREZ MARIO",
      "dni":24002938,
      "ieId":""
    },
    {
      "nombres":"LLAYQUE CCAMAQQUE PEDRO NOLASCO",
      "dni":29318178,
      "ieId":""
    },
    {
      "nombres":"MERCADO GONZALES MARIA INES",
      "dni":45278404,
      "ieId":""
    },
    {
      "nombres":"MONGE ARENAS NATIVIDAD",
      "dni":24811609,
      "ieId":""
    },
    {
      "nombres":"MORALES GUTIERREZ ELODIA",
      "dni":40299224,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE DENIS KATIUSKA",
      "dni":45526465,
      "ieId":""
    },
    {
      "nombres":"SALAS QUISPE JUAN GUALBERTO",
      "dni":24363819,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ MONGE FLORA",
      "dni":24789200,
      "ieId":""
    },
    {
      "nombres":"HUAMANI HUAMAN TROYANA",
      "dni":23948307,
      "ieId":""
    },
    {
      "nombres":"PACO CAHUANA ROHJER BASILIO",
      "dni":1556964,
      "ieId":""
    },
    {
      "nombres":"QUISPE BAYONA LOURDES",
      "dni":41732196,
      "ieId":""
    },
    {
      "nombres":"AUCCAYLLA BACA EVANGELINA",
      "dni":42943988,
      "ieId":""
    },
    {
      "nombres":"BACA VEGA DAVID LEONIDAS",
      "dni":24807119,
      "ieId":""
    },
    {
      "nombres":"CCAPYAMARCA CHALLCO MIGUEL",
      "dni":25187781,
      "ieId":""
    },
    {
      "nombres":"COLQUE SANCHEZ EDITH",
      "dni":24712214,
      "ieId":""
    },
    {
      "nombres":"CRUZ CJUNO ANA LUCIA",
      "dni":44735127,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LIMA ELISEO",
      "dni":24983085,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA VIVEROS SILVIA",
      "dni":2296580,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHINO PERCY FILIBERTO",
      "dni":43872466,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHOQUEHUANCA WILBER",
      "dni":42820309,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI RAUL",
      "dni":41162499,
      "ieId":""
    },
    {
      "nombres":"MONGE ARAUJO JAIME",
      "dni":24802627,
      "ieId":""
    },
    {
      "nombres":"TOCRE VILLANUEVA RINA ROCIO",
      "dni":23991379,
      "ieId":""
    },
    {
      "nombres":"ANGULO BUSTOS FIDEL",
      "dni":24787315,
      "ieId":""
    },
    {
      "nombres":"CCAHUI CONDORI VICTORIANO TIMOTEO",
      "dni":29472151,
      "ieId":""
    },
    {
      "nombres":"FLOREZ YAPO JUAN",
      "dni":24705906,
      "ieId":""
    },
    {
      "nombres":"MAMANI CCALLA CARLOS ALBERTO",
      "dni":40138809,
      "ieId":""
    },
    {
      "nombres":"MONGE ZUNIGA VDA DE SER EUFRACINA",
      "dni":23884141,
      "ieId":""
    },
    {
      "nombres":"PALMA MALDONADO ANDRES AVELINO",
      "dni":24790444,
      "ieId":""
    },
    {
      "nombres":"AIQUE QUISPE TERESA",
      "dni":25003117,
      "ieId":""
    },
    {
      "nombres":"ASTETE FLOREZ DORIS",
      "dni":23957944,
      "ieId":""
    },
    {
      "nombres":"TICONA ALVAREZ HAYDEE ROSA",
      "dni":29709416,
      "ieId":""
    },
    {
      "nombres":"CRUZ HUARCA LORENZO",
      "dni":42551871,
      "ieId":""
    },
    {
      "nombres":"PEREZ VARGAS ELIZABETH",
      "dni":25328720,
      "ieId":""
    },
    {
      "nombres":"QUISPESIVANA CUSI YENNY",
      "dni":43395500,
      "ieId":""
    },
    {
      "nombres":"SILVA HUAMAN MARIO ANTONIO",
      "dni":40731750,
      "ieId":""
    },
    {
      "nombres":"ARENAS MONGE GERARDO",
      "dni":24811606,
      "ieId":""
    },
    {
      "nombres":"FLORES YAPO MONICA",
      "dni":45658642,
      "ieId":""
    },
    {
      "nombres":"BELLIDO MOGOLLON YANETT",
      "dni":40006216,
      "ieId":""
    },
    {
      "nombres":"CATARI CUTIPA MELITON",
      "dni":2438745,
      "ieId":""
    },
    {
      "nombres":"CAUNA YUJRA ALFREDO",
      "dni":40924860,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ NINA AMANDA",
      "dni":46171489,
      "ieId":""
    },
    {
      "nombres":"CONDORI FERRO APOLINAR CEFERINO",
      "dni":24570193,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI JUAN EDUARDINO",
      "dni":1554120,
      "ieId":""
    },
    {
      "nombres":"HANKGO PAUCCAR FRANCISCA",
      "dni":41976517,
      "ieId":""
    },
    {
      "nombres":"HUILLCA HUARAYA URBANO",
      "dni":24582867,
      "ieId":""
    },
    {
      "nombres":"HUILLCACURI MIRANDA PAULINO",
      "dni":24791800,
      "ieId":""
    },
    {
      "nombres":"LAURA HUAIHUA HUMBERTO",
      "dni":24712336,
      "ieId":""
    },
    {
      "nombres":"MAMANI APAZA JESUS WASHINGTON",
      "dni":80187204,
      "ieId":""
    },
    {
      "nombres":"MELO VILCA MARLENI",
      "dni":29703076,
      "ieId":""
    },
    {
      "nombres":"MOLINA GONZALES AXA MARIVEL",
      "dni":23935638,
      "ieId":""
    },
    {
      "nombres":"MONGE NAVEROS YUDI",
      "dni":40528800,
      "ieId":""
    },
    {
      "nombres":"QUIJHUA PALOMINO FIDEL",
      "dni":23933138,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHAMPI CLEMENTE",
      "dni":24582982,
      "ieId":""
    },
    {
      "nombres":"TAIRO PICHUILLA NEIME",
      "dni":24714246,
      "ieId":""
    },
    {
      "nombres":"TORRES CHILO CAROLINA",
      "dni":23983277,
      "ieId":""
    },
    {
      "nombres":"VILCA HUILLCA VALERIO",
      "dni":40836449,
      "ieId":""
    },
    {
      "nombres":"VILLENA TTITO FLORENCIO",
      "dni":23880125,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE ENRIQUEZ RONALD",
      "dni":42316887,
      "ieId":""
    },
    {
      "nombres":"CATARI QUISPE BALBINA",
      "dni":42634001,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ CHAMPI EDDY",
      "dni":42846272,
      "ieId":""
    },
    {
      "nombres":"HUACASI MAMANI RUDY",
      "dni":42001394,
      "ieId":""
    },
    {
      "nombres":"SUCASAIRE SUCASAIRE BENJAMIN",
      "dni":42196482,
      "ieId":""
    },
    {
      "nombres":"ZEA HUARACCALLO LIVIA MELINA",
      "dni":29723886,
      "ieId":""
    },
    {
      "nombres":"COLQUE CRUZ EDY",
      "dni":42291109,
      "ieId":""
    },
    {
      "nombres":"GUEVARA VIZARRETA MARLENY",
      "dni":29722977,
      "ieId":""
    },
    {
      "nombres":"COLQUE CRUZ YUDI",
      "dni":45869555,
      "ieId":""
    },
    {
      "nombres":"PUELLES CHAVEZ NATIVIDAD",
      "dni":40627462,
      "ieId":""
    },
    {
      "nombres":"AMBOR GARCIA MARIZA",
      "dni":25197175,
      "ieId":""
    },
    {
      "nombres":"ARENAS CHULLO DORIS VIANNEY",
      "dni":40597699,
      "ieId":""
    },
    {
      "nombres":"NINAMEZA GUTIERREZ JUANA",
      "dni":41161446,
      "ieId":""
    },
    {
      "nombres":"HUILLCACURI TORRES PAULINA",
      "dni":47301222,
      "ieId":""
    },
    {
      "nombres":"ARENAS ABARCA MARIBEL",
      "dni":40051966,
      "ieId":""
    },
    {
      "nombres":"CUSI MAMANI ALIA ESMERALDA",
      "dni":40891490,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CARPIO RINA LOLA",
      "dni":43139396,
      "ieId":""
    },
    {
      "nombres":"PUELLES VILLALOBOS VICTORIA BELINDA",
      "dni":29551811,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ GUTIERREZ ROXANA REBECA",
      "dni":41936788,
      "ieId":""
    },
    {
      "nombres":"ZARATE LOPEZ HIPOLITO",
      "dni":24812992,
      "ieId":""
    },
    {
      "nombres":"LABRA CHINO ZENOBIO",
      "dni":43720789,
      "ieId":""
    },
    {
      "nombres":"FLORES GUTIERREZ LILIANA CAROLINA",
      "dni":44655787,
      "ieId":""
    },
    {
      "nombres":"ABARCA PEÑA VICTOR ROLANDO",
      "dni":24804663,
      "ieId":""
    },
    {
      "nombres":"ANCCO ALMANACIN ALBERTO",
      "dni":25217444,
      "ieId":""
    },
    {
      "nombres":"ARIAS CARPIO SEGUNDINO",
      "dni":23807627,
      "ieId":""
    },
    {
      "nombres":"CANSAYA AGUILAR DORIS BRISAIDA",
      "dni":43377397,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA MAMANI ENRIQUE",
      "dni":41917629,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR CORRALES ENRIQUE",
      "dni":44417055,
      "ieId":""
    },
    {
      "nombres":"HUAYTO PUMAINCA BEATRIZ",
      "dni":24784679,
      "ieId":""
    },
    {
      "nombres":"HUILLCACURI MIRANDA VALERIANA",
      "dni":24791663,
      "ieId":""
    },
    {
      "nombres":"MAYHUA CHOQQUECCOTA BLAS",
      "dni":24805719,
      "ieId":""
    },
    {
      "nombres":"MAYHUA CRUZ CRISOLOGO",
      "dni":24791761,
      "ieId":""
    },
    {
      "nombres":"VILLENA MONTES HAIDEE OLIMPIA",
      "dni":23841365,
      "ieId":""
    },
    {
      "nombres":"AQUEPUCHO CRUZ ELENA NANCY",
      "dni":24804557,
      "ieId":""
    },
    {
      "nombres":"CADENA LLERENA PABLO",
      "dni":24799583,
      "ieId":""
    },
    {
      "nombres":"CRUZ FLOREZ FELIX",
      "dni":24802155,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUILLCA FILOMON",
      "dni":43987787,
      "ieId":""
    },
    {
      "nombres":"VILLENA MONTES AQUILES BENEDICTO",
      "dni":24801712,
      "ieId":""
    },
    {
      "nombres":"YAHUIRA PFOCCORI BERNABE",
      "dni":42480523,
      "ieId":""
    },
    {
      "nombres":"ZELAYA TACO JULIO",
      "dni":24810711,
      "ieId":""
    },
    {
      "nombres":"CRUZ MAYHUA ANICETO",
      "dni":24791683,
      "ieId":""
    },
    {
      "nombres":"DIAZ PEÑA ALCIDES",
      "dni":41601589,
      "ieId":""
    },
    {
      "nombres":"LAYME HUILLCAYQUIPA FELIX",
      "dni":10806805,
      "ieId":""
    },
    {
      "nombres":"PINTO HUANACO ROXANA",
      "dni":41603272,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA ASLLA JUAN CARLOS",
      "dni":42726394,
      "ieId":""
    },
    {
      "nombres":"BOLIVAR HUAMANI ELIZABETH",
      "dni":24814166,
      "ieId":""
    },
    {
      "nombres":"CHALLCO SANCHEZ ALEX",
      "dni":24700019,
      "ieId":""
    },
    {
      "nombres":"COA SANCHEZ CARLOS SANTIAGO",
      "dni":43149252,
      "ieId":""
    },
    {
      "nombres":"CONDORI MOLLOSIHUE RITA VIRGINIA",
      "dni":29709187,
      "ieId":""
    },
    {
      "nombres":"CORAHUA CHOQUEVILCA YENY",
      "dni":41212473,
      "ieId":""
    },
    {
      "nombres":"MAZA QUIÑONES NIEVES",
      "dni":24718377,
      "ieId":""
    },
    {
      "nombres":"MONTALVO MAMANI FERNANDO",
      "dni":41613400,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS GASTAÑAGA YOLA BRIGIDA",
      "dni":23924335,
      "ieId":""
    },
    {
      "nombres":"ARIAS PERALTA JULIO MANUEL",
      "dni":24792882,
      "ieId":""
    },
    {
      "nombres":"CENTENO SUAREZ JHONNY LEONIDAS",
      "dni":23846525,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISLLUYA JUVENAL",
      "dni":24721013,
      "ieId":""
    },
    {
      "nombres":"PACCO CCASA EDGAR",
      "dni":44348949,
      "ieId":""
    },
    {
      "nombres":"CANAZAS AYERBE ELVA",
      "dni":23950812,
      "ieId":""
    },
    {
      "nombres":"FLORES BACA JUVENAL",
      "dni":24718287,
      "ieId":""
    },
    {
      "nombres":"QUISPE TECSE MARIA EUGENIA",
      "dni":43828404,
      "ieId":""
    },
    {
      "nombres":"ROQUE RODRIGUEZ ROXANA",
      "dni":45395818,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ AGUILAR MARLENY",
      "dni":24884585,
      "ieId":""
    },
    {
      "nombres":"MERCADO CUBA BASILIA",
      "dni":40567120,
      "ieId":""
    },
    {
      "nombres":"PERALTA ÑAUPA MARIO",
      "dni":29626451,
      "ieId":""
    },
    {
      "nombres":"PEREZ AGUILAR MIRIAM JEANNETTE",
      "dni":41162620,
      "ieId":""
    },
    {
      "nombres":"RAMOS MAMANI HECTOR RAFAEL",
      "dni":44179965,
      "ieId":""
    },
    {
      "nombres":"BEGAZO VILCA MAGALY BEATRIZ",
      "dni":45607554,
      "ieId":""
    },
    {
      "nombres":"COLQUE TTIRA PEDRO MARGARITO",
      "dni":24793275,
      "ieId":""
    },
    {
      "nombres":"SALAS COLQUE LUCIA",
      "dni":41247447,
      "ieId":""
    },
    {
      "nombres":"BENAVIDES CUBA JOSEPH",
      "dni":41775948,
      "ieId":""
    },
    {
      "nombres":"CARDENAS TAPIA FRANKLIN",
      "dni":45069559,
      "ieId":""
    },
    {
      "nombres":"LOPINTA CHIRINOS YONY NOEMY",
      "dni":42343264,
      "ieId":""
    },
    {
      "nombres":"MERCADO YAPURA JUSTINIANO",
      "dni":23895838,
      "ieId":""
    },
    {
      "nombres":"LEON CENTENO ARTURO",
      "dni":42324354,
      "ieId":""
    },
    {
      "nombres":"TAPIA HUILLCA CEFERINA",
      "dni":40296077,
      "ieId":""
    },
    {
      "nombres":"VILLENA ARIAS MARIO",
      "dni":24793512,
      "ieId":""
    },
    {
      "nombres":"ACHAHUI CRUZ BELTRAN",
      "dni":41154700,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ CRUZ HERNAN",
      "dni":41175985,
      "ieId":""
    },
    {
      "nombres":"ROCCA ZARATE NAZARIO",
      "dni":24811114,
      "ieId":""
    },
    {
      "nombres":"ARAUJO VEGA YENNIFER",
      "dni":45227293,
      "ieId":""
    },
    {
      "nombres":"ARIAS CACERES ORFA",
      "dni":24804662,
      "ieId":""
    },
    {
      "nombres":"AYMA CONDORI MAURO",
      "dni":24715554,
      "ieId":""
    },
    {
      "nombres":"BOZA PERALTA JULIO JACINTO",
      "dni":29600539,
      "ieId":""
    },
    {
      "nombres":"CASTAÑEDA ASENCIO BRAULIA",
      "dni":45845385,
      "ieId":""
    },
    {
      "nombres":"CAYLLAHUA CHARAHUAYTA BENIGNO",
      "dni":23852058,
      "ieId":""
    },
    {
      "nombres":"CCAPAYQUE COLQUE IRMA",
      "dni":40839179,
      "ieId":""
    },
    {
      "nombres":"CCASA ERAZO JOSE LUIS",
      "dni":24717697,
      "ieId":""
    },
    {
      "nombres":"CEREZO PILCO EVA MARIA",
      "dni":29736345,
      "ieId":""
    },
    {
      "nombres":"CUNO TICONA YASSICA FAVI",
      "dni":44099674,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ HUAMAN VALERIANO",
      "dni":24702114,
      "ieId":""
    },
    {
      "nombres":"LOPEZ PARI LOLO ATILIO",
      "dni":80516449,
      "ieId":""
    },
    {
      "nombres":"LUNA ÑAUPA SIXTO",
      "dni":42324338,
      "ieId":""
    },
    {
      "nombres":"MAMANI RODRIGUEZ PATRICIA",
      "dni":29621550,
      "ieId":""
    },
    {
      "nombres":"MAMANI SURCO PEDRO",
      "dni":24668530,
      "ieId":""
    },
    {
      "nombres":"MENDOZA BACA YANETT MARGOT",
      "dni":41951448,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ CRUZ BETO",
      "dni":42456619,
      "ieId":""
    },
    {
      "nombres":"OJEDA MAYHUA FAUSTINO",
      "dni":24805665,
      "ieId":""
    },
    {
      "nombres":"PRIETO SALCEDO NILO LUCIANO",
      "dni":23806496,
      "ieId":""
    },
    {
      "nombres":"PUMA MAMANI MARCELINA",
      "dni":24711951,
      "ieId":""
    },
    {
      "nombres":"RANILLA UCHUQUICAÑA HEBERT RENZO",
      "dni":40352717,
      "ieId":""
    },
    {
      "nombres":"SALCEDO VASQUEZ ANGEL",
      "dni":43855153,
      "ieId":""
    },
    {
      "nombres":"TICONA BARRIGA ALFONSO",
      "dni":2425358,
      "ieId":""
    },
    {
      "nombres":"TORRES COILA ROY ENRIQUE",
      "dni":29568834,
      "ieId":""
    },
    {
      "nombres":"VEGA YANA JUAN CARLOS",
      "dni":40101824,
      "ieId":""
    },
    {
      "nombres":"YAURI CUBA EZEQUIEL ALBERTO",
      "dni":24806412,
      "ieId":""
    },
    {
      "nombres":"APAZA HALANOCA OLGA LUISA",
      "dni":30842993,
      "ieId":""
    },
    {
      "nombres":"APAZA HUAMAN SIXTO",
      "dni":24707018,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA QUISPE HUGO",
      "dni":41988206,
      "ieId":""
    },
    {
      "nombres":"CCANCHI CUELLAR AURELIA",
      "dni":24680568,
      "ieId":""
    },
    {
      "nombres":"GUILLEN QUISPE JUAN GUALBERTO",
      "dni":24711749,
      "ieId":""
    },
    {
      "nombres":"HUACOTO BEJAR JAIME ANTONIO",
      "dni":24701284,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ PINTO AIME EDITH",
      "dni":40352970,
      "ieId":""
    },
    {
      "nombres":"PACHECO BACA SANTOS MARCOS",
      "dni":24807148,
      "ieId":""
    },
    {
      "nombres":"PINTO CONZA CIRILO",
      "dni":24799412,
      "ieId":""
    },
    {
      "nombres":"PUMA QUISPE DINA RAQUEL",
      "dni":40380271,
      "ieId":""
    },
    {
      "nombres":"SOTO MIRANDA TOMAS",
      "dni":43040925,
      "ieId":""
    },
    {
      "nombres":"TACCA MAMANI JOSE RIVELINO",
      "dni":29627662,
      "ieId":""
    },
    {
      "nombres":"CCOAQUIRA VALENCIA BRUNO EMILIANO",
      "dni":23909618,
      "ieId":""
    },
    {
      "nombres":"CCORI HUAMANI IRENE",
      "dni":23940235,
      "ieId":""
    },
    {
      "nombres":"CHICCALLA CURASI EULOGIO",
      "dni":1315753,
      "ieId":""
    },
    {
      "nombres":"COLQUE MIRANDA LEONIDAS EMPERATRIZ",
      "dni":23894719,
      "ieId":""
    },
    {
      "nombres":"ORE BACA JAVIER ERNESTO",
      "dni":23976108,
      "ieId":""
    },
    {
      "nombres":"ORTIZ VILCA MARCO ANTONIO",
      "dni":40922827,
      "ieId":""
    },
    {
      "nombres":"PACHECO DURAND FELICIANO ABRAHAM",
      "dni":24003696,
      "ieId":""
    },
    {
      "nombres":"SENCA QUISPE EFRAIN",
      "dni":9947949,
      "ieId":""
    },
    {
      "nombres":"LOZANO QUISPE ALFREDO",
      "dni":24681957,
      "ieId":""
    },
    {
      "nombres":"MAYHUA CHOQQUECCOTA TEOFILO",
      "dni":41913541,
      "ieId":""
    },
    {
      "nombres":"PUELLES CUBA LAZARO",
      "dni":24812650,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ POMACALLAHUE SANTOS VIDAL",
      "dni":40041215,
      "ieId":""
    },
    {
      "nombres":"TINUCO JARA LUCHO",
      "dni":24813598,
      "ieId":""
    },
    {
      "nombres":"TORRES FLORES ENRIQUE",
      "dni":2167284,
      "ieId":""
    },
    {
      "nombres":"VARGAS ESPILLICO JUAN CARLOS",
      "dni":80027637,
      "ieId":""
    },
    {
      "nombres":"CORREA CUBA ROMULO",
      "dni":24812550,
      "ieId":""
    },
    {
      "nombres":"MAMANI MOLINA ANCELMO",
      "dni":23943588,
      "ieId":""
    },
    {
      "nombres":"MERMA COTOHUANCA MARLENY",
      "dni":24718542,
      "ieId":""
    },
    {
      "nombres":"MERMA MAYHUA AMERICO",
      "dni":42420627,
      "ieId":""
    },
    {
      "nombres":"QUISPE LAURA VIRGINIA BRIGIDA",
      "dni":41122469,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ ..... JESUS NATIVIDAD",
      "dni":43828055,
      "ieId":""
    },
    {
      "nombres":"SOTO AYSA RENE",
      "dni":41549663,
      "ieId":""
    },
    {
      "nombres":"OLMEDO LLALLA MARCELINA",
      "dni":41613395,
      "ieId":""
    },
    {
      "nombres":"QUISPE LAURA OLGA SABINA",
      "dni":40779241,
      "ieId":""
    },
    {
      "nombres":"BARRIOS ALVARADO CARMEN",
      "dni":24706526,
      "ieId":""
    },
    {
      "nombres":"HUAMAN NINA LUZ MARINA",
      "dni":41014102,
      "ieId":""
    },
    {
      "nombres":"VILLALOBOS JAQUEGUA EDHIT",
      "dni":41268582,
      "ieId":""
    },
    {
      "nombres":"RIVEROS OLIVERA VERONICA",
      "dni":42527295,
      "ieId":""
    },
    {
      "nombres":"FLORES LOPINTA ELENA",
      "dni":41127935,
      "ieId":""
    },
    {
      "nombres":"GUZMAN CHUCO JUAN CARLOS",
      "dni":40148537,
      "ieId":""
    },
    {
      "nombres":"GAMEZ CHOCCATA ORLANDO",
      "dni":43087208,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA NUÑEZ ROSMARY",
      "dni":42721843,
      "ieId":""
    },
    {
      "nombres":"ROCA CAHUANA ELVIS RAUL",
      "dni":80358294,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ APAZA IVET ROSSY",
      "dni":42127356,
      "ieId":""
    },
    {
      "nombres":"HUILLCA MAMANI FLAVIA",
      "dni":40087162,
      "ieId":""
    },
    {
      "nombres":"CHUQUIHUANCA HUAYLLANI VITO",
      "dni":41968645,
      "ieId":""
    },
    {
      "nombres":"ARAOZ DUEÑAS PAULINA",
      "dni":24711713,
      "ieId":""
    },
    {
      "nombres":"QUISPE TACUSI SANTUSA",
      "dni":41113972,
      "ieId":""
    },
    {
      "nombres":"CUYO CASA MARIO",
      "dni":44736590,
      "ieId":""
    },
    {
      "nombres":"JARA HUAMANI BERTHA",
      "dni":24807160,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCANAHUIRE MAURA",
      "dni":24716501,
      "ieId":""
    },
    {
      "nombres":"ALANOCCA CAPATINTA CRISTIAN",
      "dni":41851452,
      "ieId":""
    },
    {
      "nombres":"BACA ANCORI LINA",
      "dni":41706924,
      "ieId":""
    },
    {
      "nombres":"CJUNO YAULI REYNALDO",
      "dni":24715398,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA MAYHUA LUIS BELTRAN",
      "dni":24813033,
      "ieId":""
    },
    {
      "nombres":"FLORES PERALTA GUILLERMINA MARTA",
      "dni":23961666,
      "ieId":""
    },
    {
      "nombres":"HANCCO MUÑIZ MARCELINA REBECA",
      "dni":24582228,
      "ieId":""
    },
    {
      "nombres":"HUAÑAHUI PFURA ADRIAN",
      "dni":24793611,
      "ieId":""
    },
    {
      "nombres":"MOLERO OLIVARES ANABEL",
      "dni":24812881,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ MELENDEZ GONZALO",
      "dni":24794812,
      "ieId":""
    },
    {
      "nombres":"POLANCO ESCOBAR NANCY FRINE",
      "dni":24806171,
      "ieId":""
    },
    {
      "nombres":"PUMA MALDONADO LEONIDAS",
      "dni":24680954,
      "ieId":""
    },
    {
      "nombres":"TORRE ANDIA RAUL",
      "dni":41565459,
      "ieId":""
    },
    {
      "nombres":"VILCA VILLA GUIDO",
      "dni":43853880,
      "ieId":""
    },
    {
      "nombres":"VILLENA ARIAS FLORA",
      "dni":24700507,
      "ieId":""
    },
    {
      "nombres":"CASTRO LIPES LIVIA ELISABETH",
      "dni":46002329,
      "ieId":""
    },
    {
      "nombres":"CATUNTA TUPAYACHI NAUM",
      "dni":42138975,
      "ieId":""
    },
    {
      "nombres":"CHICCHI PACCAYA MARIO OSWALDO",
      "dni":24583733,
      "ieId":""
    },
    {
      "nombres":"CONDO MAMANI LEONOR",
      "dni":40416619,
      "ieId":""
    },
    {
      "nombres":"FLORES HUANCA WILBER SAMUEL",
      "dni":40714224,
      "ieId":""
    },
    {
      "nombres":"NINAMEZA GUTIERREZ WILBER",
      "dni":44734038,
      "ieId":""
    },
    {
      "nombres":"PACCO HUAMANI WILBER",
      "dni":41332046,
      "ieId":""
    },
    {
      "nombres":"SACSI QUISPE MARIO",
      "dni":43541168,
      "ieId":""
    },
    {
      "nombres":"ALVARES MOLINA EDILBERTO VICTORINO",
      "dni":24663141,
      "ieId":""
    },
    {
      "nombres":"CHINCHERO HUILLCA LUIS",
      "dni":24714247,
      "ieId":""
    },
    {
      "nombres":"RAMOS HUANCACHOQUE GRACIANO",
      "dni":43471143,
      "ieId":""
    },
    {
      "nombres":"TACUSI SONCCO BALTAZAR",
      "dni":42315848,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA CHALLCO WILBER",
      "dni":44420659,
      "ieId":""
    },
    {
      "nombres":"OCHOA MEZA NILDA",
      "dni":24494610,
      "ieId":""
    },
    {
      "nombres":"ALATA SULLA DAVID WALTER",
      "dni":42657269,
      "ieId":""
    },
    {
      "nombres":"ARAUJO VEGA ARTURO",
      "dni":40479003,
      "ieId":""
    },
    {
      "nombres":"BARRANTES YUCRA LAUREANO",
      "dni":2372316,
      "ieId":""
    },
    {
      "nombres":"HUALLPA CATUNTA EDILBERTO",
      "dni":41696065,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QUISPE RAFAEL RUBEN",
      "dni":24586180,
      "ieId":""
    },
    {
      "nombres":"HUAÑAHUI HUAMANI AUGUSTO",
      "dni":24793613,
      "ieId":""
    },
    {
      "nombres":"MERMA CCOTO SALOMON ABAD",
      "dni":42677298,
      "ieId":""
    },
    {
      "nombres":"MOLERO MOLINA RUBEN EDGAR",
      "dni":24795400,
      "ieId":""
    },
    {
      "nombres":"MOLINA ROMERO ARISTIDES VICENTE",
      "dni":23902088,
      "ieId":""
    },
    {
      "nombres":"SAYA ESPINOZA MELQUIADES",
      "dni":24669307,
      "ieId":""
    },
    {
      "nombres":"SUMA HUANCA NANCI",
      "dni":24001405,
      "ieId":""
    },
    {
      "nombres":"TORRE ANDIA WILBERT MAURO",
      "dni":43124556,
      "ieId":""
    },
    {
      "nombres":"TTITO MAMANI PERCY",
      "dni":24715391,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ COLQUE JUANA",
      "dni":41406776,
      "ieId":""
    },
    {
      "nombres":"HUACHACA BELLIDO ERNESTINA FLORENCIA",
      "dni":24794314,
      "ieId":""
    },
    {
      "nombres":"LLOCLLE PAUCCAR EDGAR",
      "dni":40090084,
      "ieId":""
    },
    {
      "nombres":"MAMANI ESQUIVEL EDWING",
      "dni":40360774,
      "ieId":""
    },
    {
      "nombres":"MOLINA HUILLCA ROBERTO",
      "dni":42190917,
      "ieId":""
    },
    {
      "nombres":"OLMEDO SANCHEZ MERCEDES",
      "dni":80060597,
      "ieId":""
    },
    {
      "nombres":"TORRES BELLIDO JUSTINO",
      "dni":24795690,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALCCA MAXIMILIANO TEOFILO",
      "dni":24806722,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAYTA MARITZA",
      "dni":41006315,
      "ieId":""
    },
    {
      "nombres":"MOLINA VILLALOBOS MARITZA",
      "dni":23979959,
      "ieId":""
    },
    {
      "nombres":"CHECCORI ARAGON MARCOS MAURO",
      "dni":41481198,
      "ieId":""
    },
    {
      "nombres":"SARAYA TINCO CYNTHIA SUCEL",
      "dni":43952634,
      "ieId":""
    },
    {
      "nombres":"VILCA SAICO LIBIA",
      "dni":42946731,
      "ieId":""
    },
    {
      "nombres":"HUAMAN USCAMAYTA ZORAIDA",
      "dni":23994556,
      "ieId":""
    },
    {
      "nombres":"HUANCACHOQUE MAMANI JOSE",
      "dni":24683136,
      "ieId":""
    },
    {
      "nombres":"HUAYNILLO HANCCO DANIEL",
      "dni":41523508,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHUCTAYA ALEJANDRO",
      "dni":40492017,
      "ieId":""
    },
    {
      "nombres":"ROSELL HUACCAUQUI VALERIO",
      "dni":24495603,
      "ieId":""
    },
    {
      "nombres":"ARAGON VILLASANTE SHIONE DENIS",
      "dni":25135796,
      "ieId":""
    },
    {
      "nombres":"AROSQUIPA QUESLLUYA WILFREDO",
      "dni":42273107,
      "ieId":""
    },
    {
      "nombres":"CCAPA HUILLCA OSCAR RENE",
      "dni":42656535,
      "ieId":""
    },
    {
      "nombres":"GUZMAN CONDORI JUAN ROBERTO",
      "dni":41732517,
      "ieId":""
    },
    {
      "nombres":"SENCIA PACCO JUAN",
      "dni":24805915,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUARCA ALAN",
      "dni":44610308,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VILLALOBOS ELBERT",
      "dni":42563532,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA VILLALOBOS RELY JULIAN",
      "dni":41172667,
      "ieId":""
    },
    {
      "nombres":"QUISPE YAPU HAYDEE",
      "dni":2431788,
      "ieId":""
    },
    {
      "nombres":"HUILLCA SOTO JORGE DONATO",
      "dni":24717563,
      "ieId":""
    },
    {
      "nombres":"MACEDO YUCA GODOFREDO",
      "dni":40435682,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA ALVAREZ YURY",
      "dni":43484666,
      "ieId":""
    },
    {
      "nombres":"ALANYA QUISPE MARITZA",
      "dni":23990193,
      "ieId":""
    },
    {
      "nombres":"ANDIA OSORIO ELSA",
      "dni":24709246,
      "ieId":""
    },
    {
      "nombres":"APAZA APAZA PRIMITIVO",
      "dni":2172068,
      "ieId":""
    },
    {
      "nombres":"CCAHUANA ESCALANTE IRMA",
      "dni":47475414,
      "ieId":""
    },
    {
      "nombres":"CHURA ALANOCA JAIME DEMETRIO",
      "dni":1491260,
      "ieId":""
    },
    {
      "nombres":"CONDORI VILCA NIEVES MARIA",
      "dni":29339397,
      "ieId":""
    },
    {
      "nombres":"CUNO MAMANI CAROLINA VERONICA",
      "dni":1545907,
      "ieId":""
    },
    {
      "nombres":"LLAIQUE TAIPE MELITON",
      "dni":24860384,
      "ieId":""
    },
    {
      "nombres":"LUPACA CUSACANI MARTIN",
      "dni":1782263,
      "ieId":""
    },
    {
      "nombres":"MACHACA MAMANI FELICIANO",
      "dni":1560271,
      "ieId":""
    },
    {
      "nombres":"MAMANI HUAHUATICO JUSTO",
      "dni":24717142,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI RAUL EDGAR",
      "dni":1861899,
      "ieId":""
    },
    {
      "nombres":"MENDOZA VILLALOBOS ALAN",
      "dni":45605376,
      "ieId":""
    },
    {
      "nombres":"MERCADO ANDRADE YANET MARLENE",
      "dni":23959310,
      "ieId":""
    },
    {
      "nombres":"MOLINA MOLERO MARIO",
      "dni":41887513,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ GANOZA CLETO MARCEL",
      "dni":40398150,
      "ieId":""
    },
    {
      "nombres":"ORTEGA FRANCO MARITZA CLOTILDE",
      "dni":1210133,
      "ieId":""
    },
    {
      "nombres":"PACHA CONDORI OSCAR",
      "dni":41877635,
      "ieId":""
    },
    {
      "nombres":"PALIZA MIRANDA URBANO RICARDO",
      "dni":23894585,
      "ieId":""
    },
    {
      "nombres":"PUMACAYO DAVILA NELLY LIDIA",
      "dni":29215563,
      "ieId":""
    },
    {
      "nombres":"TICONA AROSQUIPA TITO SALOMON",
      "dni":29571077,
      "ieId":""
    },
    {
      "nombres":"ZARATE LOPEZ CEFERINO",
      "dni":24707153,
      "ieId":""
    },
    {
      "nombres":"APAZA CHIPANA MARTHA",
      "dni":1536628,
      "ieId":""
    },
    {
      "nombres":"BEJAR MIRANDA MARIETA NATALY",
      "dni":24712033,
      "ieId":""
    },
    {
      "nombres":"ESPETIA CHARAJA EDWIN",
      "dni":42066462,
      "ieId":""
    },
    {
      "nombres":"GUEVARA PUENTE DE LA VE JULISSA",
      "dni":24718173,
      "ieId":""
    },
    {
      "nombres":"GUILLEN QUISPE ANGEL",
      "dni":24711514,
      "ieId":""
    },
    {
      "nombres":"LLAVILLA PAUCAR FILIBERTO",
      "dni":23913687,
      "ieId":""
    },
    {
      "nombres":"MAMANI HUAMANI ANTONIO RODOLFO",
      "dni":29330267,
      "ieId":""
    },
    {
      "nombres":"NINA QUISPE ALEJANDRO",
      "dni":24665087,
      "ieId":""
    },
    {
      "nombres":"YABAR HUAMANI EDWIN",
      "dni":24813040,
      "ieId":""
    },
    {
      "nombres":"ANGULO QUISPE RELY",
      "dni":41845754,
      "ieId":""
    },
    {
      "nombres":"ARONI PACCO FAUSTINO",
      "dni":24715407,
      "ieId":""
    },
    {
      "nombres":"FLOREZ MAMANI MARCO ANTONIO",
      "dni":42344297,
      "ieId":""
    },
    {
      "nombres":"HUALLPA NINA JUAN",
      "dni":42626101,
      "ieId":""
    },
    {
      "nombres":"HURTADO VEGA ALEJANDRINA",
      "dni":23947971,
      "ieId":""
    },
    {
      "nombres":"SARAYA CCOPA JUAN",
      "dni":40059434,
      "ieId":""
    },
    {
      "nombres":"SUAREZ PUELLES MARVIN",
      "dni":43513184,
      "ieId":""
    },
    {
      "nombres":"VEGA - MIGUEL ANGEL",
      "dni":29579444,
      "ieId":""
    },
    {
      "nombres":"CONDO MAMANI JOELIA",
      "dni":41555980,
      "ieId":""
    },
    {
      "nombres":"DURAND GUTIERREZ TULIO ALEXANDER",
      "dni":29337370,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS ARANCIBIA JORGE DANIEL",
      "dni":42208227,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE CARLOS ALBERTO",
      "dni":40499154,
      "ieId":""
    },
    {
      "nombres":"SANCA ZAPANA HUGO",
      "dni":42691766,
      "ieId":""
    },
    {
      "nombres":"SUMIRE HANCCO GERARDO",
      "dni":24715873,
      "ieId":""
    },
    {
      "nombres":"TACURI CALLO WILFREDO",
      "dni":24695900,
      "ieId":""
    },
    {
      "nombres":"BARRA VILCA RODOLFO",
      "dni":24707025,
      "ieId":""
    },
    {
      "nombres":"CHUCHULLO MENDOZA URIEL",
      "dni":24714480,
      "ieId":""
    },
    {
      "nombres":"MEZA HUAÑAHUI ARGELIO",
      "dni":24806014,
      "ieId":""
    },
    {
      "nombres":"PHOCCO MAMANI ZENAIDA",
      "dni":40052409,
      "ieId":""
    },
    {
      "nombres":"QUISPE PAREDES MARLENY DEL CARMEN",
      "dni":41825393,
      "ieId":""
    },
    {
      "nombres":"SUNI PUMACARI CIRILO APOLINAR",
      "dni":24697677,
      "ieId":""
    },
    {
      "nombres":"VILLA CCANSAYA BASILIDES",
      "dni":24563293,
      "ieId":""
    },
    {
      "nombres":"CALLO TINTAYA ARMANDO",
      "dni":24711945,
      "ieId":""
    },
    {
      "nombres":"CHAMPI MAMANI RAUL ROGER",
      "dni":40723274,
      "ieId":""
    },
    {
      "nombres":"CORONEL CHAMPE VITO",
      "dni":24793621,
      "ieId":""
    },
    {
      "nombres":"CUNO MAMANI BELTRAN LUIS",
      "dni":1552172,
      "ieId":""
    },
    {
      "nombres":"HANAMPA CCASANI MELITON",
      "dni":24807812,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HUAMANE GENARO",
      "dni":24806323,
      "ieId":""
    },
    {
      "nombres":"QUISPE LOPEZ BRUNE CANCIO",
      "dni":42758842,
      "ieId":""
    },
    {
      "nombres":"ROMAN CCORIMANYA KELY ELVIRA",
      "dni":42521719,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ QUISPE NANCY",
      "dni":41396212,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHOQUEPURA TOMAS",
      "dni":40445313,
      "ieId":""
    },
    {
      "nombres":"MAMANI YUCRA LORENZO",
      "dni":1320561,
      "ieId":""
    },
    {
      "nombres":"PUENTE DE LA VEGA FARFA GLADYS",
      "dni":40644196,
      "ieId":""
    },
    {
      "nombres":"SUAREZ CUBA RAUL FORTUNATO",
      "dni":24793221,
      "ieId":""
    },
    {
      "nombres":"ARAUJO CHUQUIRIMAY LIVIA",
      "dni":29613572,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL MOLLO VITA",
      "dni":24808168,
      "ieId":""
    },
    {
      "nombres":"HERRERA APAZA KARINA",
      "dni":44203811,
      "ieId":""
    },
    {
      "nombres":"HILLPA VILLAVICENCIO LAURA",
      "dni":40088953,
      "ieId":""
    },
    {
      "nombres":"LAYME ESQUIVEL MARIA LUZ",
      "dni":24808356,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ BOZA MARIA DEL PILAR",
      "dni":42997657,
      "ieId":""
    },
    {
      "nombres":"MAYTA RIVERA AYDEE",
      "dni":44794610,
      "ieId":""
    },
    {
      "nombres":"OSORIO MAYTA CLORINDA SILVIA",
      "dni":24709879,
      "ieId":""
    },
    {
      "nombres":"QUISPE LAGUNA YESENIA KATIA",
      "dni":70088080,
      "ieId":""
    },
    {
      "nombres":"VEGA VIZCARRA ELVIRA",
      "dni":24809818,
      "ieId":""
    },
    {
      "nombres":"CALLE MAXI MIRIAM SOFIA",
      "dni":41339224,
      "ieId":""
    },
    {
      "nombres":"LOPE CCALLE ALCIRA",
      "dni":24716307,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA HUAMANI MARLENI",
      "dni":44479051,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA RICALDE ASCENCIA",
      "dni":24811608,
      "ieId":""
    },
    {
      "nombres":"HUILLCA ZAVALA RAPHAEL TEOFILO",
      "dni":44259399,
      "ieId":""
    },
    {
      "nombres":"CCOMPI MAMANI SEGUNDINA",
      "dni":24704956,
      "ieId":""
    },
    {
      "nombres":"ROCCA PEREZ BACILIA",
      "dni":40359706,
      "ieId":""
    },
    {
      "nombres":"ALVIS LAIME PABLO",
      "dni":24807309,
      "ieId":""
    },
    {
      "nombres":"CHAMPI PUMA GABINO",
      "dni":24716126,
      "ieId":""
    },
    {
      "nombres":"GAMBARINI VERA MARLENI",
      "dni":24715973,
      "ieId":""
    },
    {
      "nombres":"CALLO AGUILAR ANALI",
      "dni":42256133,
      "ieId":""
    },
    {
      "nombres":"CANO CACERES ANA LUISA",
      "dni":44950229,
      "ieId":""
    },
    {
      "nombres":"ANCALLA SIVINCHA SILVIA",
      "dni":40416130,
      "ieId":""
    },
    {
      "nombres":"ROA CCANSAYA VICTORIA",
      "dni":40657256,
      "ieId":""
    },
    {
      "nombres":"CHACON CHUQUITAPA ALEJANDRINA",
      "dni":24717328,
      "ieId":""
    },
    {
      "nombres":"CESPEDES HANCCO SILVIA GLADYS",
      "dni":2296331,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALVAREZ SANDRA MARIA",
      "dni":45620463,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHACNAMA YANET",
      "dni":40989000,
      "ieId":""
    },
    {
      "nombres":"HUAMANI QUISPE ROSA",
      "dni":29420582,
      "ieId":""
    },
    {
      "nombres":"HANAMPA CCASANI DALILA",
      "dni":24811171,
      "ieId":""
    },
    {
      "nombres":"CHANCUAÑA RENDON JULIO",
      "dni":41597104,
      "ieId":""
    },
    {
      "nombres":"CCOLQUE ESPINOZA YULY",
      "dni":45299967,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ LLACMA VILMA",
      "dni":41751944,
      "ieId":""
    },
    {
      "nombres":"CHECYA TAIRO HEBERT",
      "dni":24718344,
      "ieId":""
    },
    {
      "nombres":"GAIMES VERA MARUJA",
      "dni":29698205,
      "ieId":""
    },
    {
      "nombres":"ROMERO MOLINA CLIO PHARISA",
      "dni":24719278,
      "ieId":""
    },
    {
      "nombres":"JANO SIVINCHA ANA MILAGROS",
      "dni":40756380,
      "ieId":""
    },
    {
      "nombres":"TACCA GAMARRA MARLENI",
      "dni":80160051,
      "ieId":""
    },
    {
      "nombres":"CCANA CALLO JORGE WASHINGTON",
      "dni":40148390,
      "ieId":""
    },
    {
      "nombres":"QUISPE MALDONADO JOSEFINA",
      "dni":41093137,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA QUISPESIVANA MARITZA",
      "dni":42325866,
      "ieId":""
    },
    {
      "nombres":"QUISPE CORDOVA ADAD",
      "dni":80117161,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE AUCCAHUAQUI MARGOT",
      "dni":42094420,
      "ieId":""
    },
    {
      "nombres":"HUANCA SOTO ESTHER NOHEMI",
      "dni":43008550,
      "ieId":""
    },
    {
      "nombres":"CALLE MAXI MARTHA ELIZABETH",
      "dni":47651527,
      "ieId":""
    },
    {
      "nombres":"MACEDO CASA VERONICA",
      "dni":46663962,
      "ieId":""
    },
    {
      "nombres":"SONCCO QUISPE VICTORIANO",
      "dni":42568738,
      "ieId":""
    },
    {
      "nombres":"CUBA CASTRO ROSIO",
      "dni":29658514,
      "ieId":""
    },
    {
      "nombres":"BERRIOS APARICIO MATILDE",
      "dni":40090083,
      "ieId":""
    },
    {
      "nombres":"PHOCCOHUANCA CONDORI HILDA",
      "dni":24709480,
      "ieId":""
    },
    {
      "nombres":"SAMBRANO FERNANDEZ VITO",
      "dni":80630758,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA ROMERO MATILDE",
      "dni":41238703,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUARACHA MATILDE",
      "dni":24716357,
      "ieId":""
    },
    {
      "nombres":"BACA PUMA ALEJANDRINA YONY",
      "dni":24781788,
      "ieId":""
    },
    {
      "nombres":"MORALES GUTIERREZ YOLANDA REGINA",
      "dni":42307994,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONDE MARCELINA IRMA",
      "dni":40789119,
      "ieId":""
    },
    {
      "nombres":"OBLITAS ARIAS EUSEBIA",
      "dni":24804315,
      "ieId":""
    },
    {
      "nombres":"CCOYORI PUMACCARI BEATRIZ",
      "dni":44858756,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ HUAMANI YDALIA",
      "dni":40966688,
      "ieId":""
    },
    {
      "nombres":"PAUCAR SULLCA SANDY MERIDA",
      "dni":40426426,
      "ieId":""
    },
    {
      "nombres":"DOMINGUEZ ALMIRON CIRO",
      "dni":40985615,
      "ieId":""
    },
    {
      "nombres":"CHALLA QUISPESIVANA ROSA",
      "dni":80630152,
      "ieId":""
    },
    {
      "nombres":"TORRES ALCCA VALOIS",
      "dni":24804723,
      "ieId":""
    },
    {
      "nombres":"QUISPE MENDOZA LOURDES",
      "dni":40463552,
      "ieId":""
    },
    {
      "nombres":"SOTO CASQUINA SABINA",
      "dni":29621909,
      "ieId":""
    },
    {
      "nombres":"ALVIS ROMERO MARIO",
      "dni":24807940,
      "ieId":""
    },
    {
      "nombres":"ARAPA VILCA LIDIA",
      "dni":29735368,
      "ieId":""
    },
    {
      "nombres":"ARIAS PERALTA NARCISO",
      "dni":24805635,
      "ieId":""
    },
    {
      "nombres":"ARMACTA CCOPA JOSEFINA",
      "dni":24703541,
      "ieId":""
    },
    {
      "nombres":"ARONI GUTIERREZ MERCEDES",
      "dni":24802847,
      "ieId":""
    },
    {
      "nombres":"ARONI SALHUA RAUL",
      "dni":24780021,
      "ieId":""
    },
    {
      "nombres":"BOLIVAR HUAMANI LUIS",
      "dni":24802848,
      "ieId":""
    },
    {
      "nombres":"CASTRO CUBA MONTAÑEZ MARGARITA",
      "dni":24783276,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MERCADO EUFEMIA",
      "dni":24783990,
      "ieId":""
    },
    {
      "nombres":"CORPUNA CARRILLO VILMA",
      "dni":24802752,
      "ieId":""
    },
    {
      "nombres":"CUSI PEÑA ALEJANDRO",
      "dni":24780506,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ MOLINA ELEODORO",
      "dni":24803956,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL PEÑA CELIA",
      "dni":24803408,
      "ieId":""
    },
    {
      "nombres":"GOMEZ ROMERO VLADIMIRA ODELINDA",
      "dni":24784838,
      "ieId":""
    },
    {
      "nombres":"LAZARTE CHISE MARTHA",
      "dni":24702657,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ FIGUEROA RICHAR",
      "dni":43491857,
      "ieId":""
    },
    {
      "nombres":"OLIVARES CASTRO BERTHA LUISA",
      "dni":24803075,
      "ieId":""
    },
    {
      "nombres":"OLIVARES CASTRO ESTEHER LUISA",
      "dni":24811109,
      "ieId":""
    },
    {
      "nombres":"PAREDES SALAS BETSY JENNIFER",
      "dni":42880015,
      "ieId":""
    },
    {
      "nombres":"PEZO MERMA MARCIA ANTONIA",
      "dni":45000754,
      "ieId":""
    },
    {
      "nombres":"PEÑA CANALES DIANA",
      "dni":24784820,
      "ieId":""
    },
    {
      "nombres":"PEÑA CANALES LIRIO",
      "dni":24802672,
      "ieId":""
    },
    {
      "nombres":"PINO ARONI IRENE",
      "dni":44192616,
      "ieId":""
    },
    {
      "nombres":"PINTO APAZA HIGINIO",
      "dni":24803261,
      "ieId":""
    },
    {
      "nombres":"QUISPE ANCCO NATIVIDAD",
      "dni":24785391,
      "ieId":""
    },
    {
      "nombres":"QUISPE SIVINCHA OCTAVIO",
      "dni":24804394,
      "ieId":""
    },
    {
      "nombres":"QUISPE ZUNIGA MARIA",
      "dni":24785423,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ MACHACA ELMER",
      "dni":1343597,
      "ieId":""
    },
    {
      "nombres":"SALAZAR CACERES JULIO",
      "dni":24717209,
      "ieId":""
    },
    {
      "nombres":"SALHUA PEÑA PEDRO CELESTINO",
      "dni":24791071,
      "ieId":""
    },
    {
      "nombres":"SAMATA PEÑA YOLANDA",
      "dni":42312913,
      "ieId":""
    },
    {
      "nombres":"TORIBIO LLICAHUA APOLINAR",
      "dni":41120486,
      "ieId":""
    },
    {
      "nombres":"UGARTE SULLA FRIDA",
      "dni":23833908,
      "ieId":""
    },
    {
      "nombres":"VIDAL TAIRO GERSON",
      "dni":43394278,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS SIVANA LUIS",
      "dni":24785599,
      "ieId":""
    },
    {
      "nombres":"INGA CCAHUANA FLORENCIO",
      "dni":24804164,
      "ieId":""
    },
    {
      "nombres":"RAYAN HUAMANI ANTONIETA",
      "dni":24802737,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CASTRO DOMINGA",
      "dni":24785421,
      "ieId":""
    },
    {
      "nombres":"PACHECO ZAVALA PEDRO SEVERINO",
      "dni":29393142,
      "ieId":""
    },
    {
      "nombres":"PEÑA ARENAS RENE",
      "dni":24780178,
      "ieId":""
    },
    {
      "nombres":"PIEROLA ILACCAÑA NOLBERTA",
      "dni":24803051,
      "ieId":""
    },
    {
      "nombres":"VARGAS SUMIRE EDILBERTO",
      "dni":24585059,
      "ieId":""
    },
    {
      "nombres":"BACA DENOS NICOMEDES",
      "dni":24799430,
      "ieId":""
    },
    {
      "nombres":"CONZA HUILLCA PAUL RIVET",
      "dni":40376872,
      "ieId":""
    },
    {
      "nombres":"GOMEZ CASQUINA JULIAN",
      "dni":24810901,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMANI VICTOR RAUL",
      "dni":44174360,
      "ieId":""
    },
    {
      "nombres":"UGARTE CARRILLO HERACLIO ALCIBIADES",
      "dni":24785481,
      "ieId":""
    },
    {
      "nombres":"VENERO TARIFA WILLY",
      "dni":30765048,
      "ieId":""
    },
    {
      "nombres":"VIDAL TAIRO JOSE",
      "dni":24811159,
      "ieId":""
    },
    {
      "nombres":"CASTILLO HUAMANI WILBERT JUVENAL",
      "dni":24808692,
      "ieId":""
    },
    {
      "nombres":"TRIVEÑO CCALLUCHI EDWIN",
      "dni":42911941,
      "ieId":""
    },
    {
      "nombres":"VIDAL TAIRO DAVID",
      "dni":41509585,
      "ieId":""
    },
    {
      "nombres":"ANCALLA HUAMANI EDGAR",
      "dni":42050571,
      "ieId":""
    },
    {
      "nombres":"BOZA CHACO EDWIN",
      "dni":24803515,
      "ieId":""
    },
    {
      "nombres":"MALLMA HUAMANI ALICIA",
      "dni":24810749,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ CARRILLO LUCIO EULOGIO",
      "dni":80629588,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ PATIÑO INDALECIO",
      "dni":24786153,
      "ieId":""
    },
    {
      "nombres":"MOLLO CONTRERAS TERESA",
      "dni":24782718,
      "ieId":""
    },
    {
      "nombres":"PIEROLA HUAMANI FRANCISCO",
      "dni":24804024,
      "ieId":""
    },
    {
      "nombres":"BOZA CARRILLO AQUILINO",
      "dni":24784144,
      "ieId":""
    },
    {
      "nombres":"DELGADO VERA BERNALDO ROBERTO",
      "dni":24808610,
      "ieId":""
    },
    {
      "nombres":"INGA CCAHUANA SILVESTRE",
      "dni":24810525,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA MILLIO RENATO",
      "dni":24802659,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MONTAÑEZ ISIDORO",
      "dni":24780335,
      "ieId":""
    },
    {
      "nombres":"MENDOZA CHACNAMA JULIA BERTHA",
      "dni":24808561,
      "ieId":""
    },
    {
      "nombres":"SALCEDO LLAMOCCA AVIDAN",
      "dni":41457642,
      "ieId":""
    },
    {
      "nombres":"HUANACO APAZA ROSA ROSALIA",
      "dni":41000599,
      "ieId":""
    },
    {
      "nombres":"LAYME VILLEGAS LUCIO",
      "dni":24802892,
      "ieId":""
    },
    {
      "nombres":"LLAMOCCA CCORPUNA FRANCISCO",
      "dni":24808440,
      "ieId":""
    },
    {
      "nombres":"MOLINA VALENCIA MARTIN",
      "dni":24808425,
      "ieId":""
    },
    {
      "nombres":"MURGUIA CARRILLO ROLIM",
      "dni":24808782,
      "ieId":""
    },
    {
      "nombres":"SALCEDO HUAMANI EDILUZ",
      "dni":42839689,
      "ieId":""
    },
    {
      "nombres":"ANCALLA ZUÑIGA WILFREDO",
      "dni":29549910,
      "ieId":""
    },
    {
      "nombres":"BOBADILLA SIVANA EULOGIA",
      "dni":24782591,
      "ieId":""
    },
    {
      "nombres":"CAMPOS TAIPE ANTHONY JAVIER",
      "dni":42748042,
      "ieId":""
    },
    {
      "nombres":"CCACYAHUILLCA CHISI ANASTACIO DOROTEO",
      "dni":25737031,
      "ieId":""
    },
    {
      "nombres":"CCAHUANTICO OCHOA MARIA AUGUSTA",
      "dni":29301154,
      "ieId":""
    },
    {
      "nombres":"MERCADO YUPANQUI SONIA ANSELMA",
      "dni":23953776,
      "ieId":""
    },
    {
      "nombres":"MEZA ANCCA CLARA LUZ",
      "dni":40990378,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO LIMA MIRTA YUREMA",
      "dni":41159653,
      "ieId":""
    },
    {
      "nombres":"TORRES SUCAPUCA CARMEN CANDELARIA",
      "dni":29726719,
      "ieId":""
    },
    {
      "nombres":"VILLENA TRUJILLO MIRIAM",
      "dni":23862686,
      "ieId":""
    },
    {
      "nombres":"ARAUJO VEGA MARINELA",
      "dni":24810212,
      "ieId":""
    },
    {
      "nombres":"BARRIONUEVO MONTES MARISELA",
      "dni":29322677,
      "ieId":""
    },
    {
      "nombres":"CHSALLA VEGA PRESENTACION",
      "dni":24784440,
      "ieId":""
    },
    {
      "nombres":"CORPUNA CARRILLO VICTORIANO RUSBEL",
      "dni":24783228,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ BOCANGEL JAVIER",
      "dni":24803379,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ HUAMANI JUAN PABLO",
      "dni":24786580,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR CONDE JOSE MARIA",
      "dni":24784741,
      "ieId":""
    },
    {
      "nombres":"RIVAS OCHOA NARVY MARILY",
      "dni":43061637,
      "ieId":""
    },
    {
      "nombres":"SIVANA VILLAFUERTE JOSE REMIGIO",
      "dni":24780172,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA VERA SEVERIANO",
      "dni":24783815,
      "ieId":""
    },
    {
      "nombres":"ALMIRON EHUI SALOME",
      "dni":24801363,
      "ieId":""
    },
    {
      "nombres":"ALMIRON OVIEDO NOEMI",
      "dni":43973561,
      "ieId":""
    },
    {
      "nombres":"BONIFACIO CALCINA ROSE MARY",
      "dni":41663946,
      "ieId":""
    },
    {
      "nombres":"CAHUANA ENRIQUEZ LITH",
      "dni":43473526,
      "ieId":""
    },
    {
      "nombres":"CCAPA CHUCTAYA GLORIA EVA",
      "dni":40505933,
      "ieId":""
    },
    {
      "nombres":"CHURATA CHECA ANA LUZMILA",
      "dni":41403149,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS AGUIRRE MARTHA LUCILA",
      "dni":24808653,
      "ieId":""
    },
    {
      "nombres":"DOMINGUEZ ALMIRON LILLY",
      "dni":42480536,
      "ieId":""
    },
    {
      "nombres":"DOMINGUEZ SOSA ALDO",
      "dni":24798873,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR POLANCO JUSTO",
      "dni":24798046,
      "ieId":""
    },
    {
      "nombres":"GAIMEZ ALVIS ALEJANDRO",
      "dni":24798045,
      "ieId":""
    },
    {
      "nombres":"HANCCO MAMANI RENE ATILIO",
      "dni":41832857,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ PALACIOS FELIX BERNABE",
      "dni":24798019,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ ALVIZ HUMBERTO",
      "dni":24798431,
      "ieId":""
    },
    {
      "nombres":"NINAQUISPE HUAYHUA GREGORIA",
      "dni":46069480,
      "ieId":""
    },
    {
      "nombres":"OLMEDO COLQUE JOSE LUIS",
      "dni":42748882,
      "ieId":""
    },
    {
      "nombres":"SALCEDO CONDORI CARMEN ROSA",
      "dni":40450715,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA VILLENA ANTONIA",
      "dni":24808145,
      "ieId":""
    },
    {
      "nombres":"CCAHUANA GOMEZ ARTURO",
      "dni":24810259,
      "ieId":""
    },
    {
      "nombres":"CHALLCO AYMARA PEDRO",
      "dni":24798207,
      "ieId":""
    },
    {
      "nombres":"LAYME PACHECO VALERIO",
      "dni":40259252,
      "ieId":""
    },
    {
      "nombres":"MANCHEGO LLERENA DE REG JUANA VIANNEY",
      "dni":30766484,
      "ieId":""
    },
    {
      "nombres":"MOZO CHOQUE MARIA ELENA",
      "dni":10524374,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CJULA FRANCISCO",
      "dni":24798224,
      "ieId":""
    },
    {
      "nombres":"SALCEDO LLAMOCCA ENOC",
      "dni":41597119,
      "ieId":""
    },
    {
      "nombres":"SIHUINCHA CALLATA NOEMI",
      "dni":40492014,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA MAMANI RENE",
      "dni":42703228,
      "ieId":""
    },
    {
      "nombres":"DOMINGUEZ SOSA HELBER",
      "dni":24798008,
      "ieId":""
    },
    {
      "nombres":"PUMACALLAHUI MERMA ANA MARIA",
      "dni":43709116,
      "ieId":""
    },
    {
      "nombres":"SAYA ROMERO DARWIN",
      "dni":44071278,
      "ieId":""
    },
    {
      "nombres":"TTITO CONDORI ELIASAR",
      "dni":42321655,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CONDORCHOA EDGAR DAVID",
      "dni":44274887,
      "ieId":""
    },
    {
      "nombres":"HUILLCA KANA YOBANA CIRLIA",
      "dni":29708231,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ INGA ROLANDO",
      "dni":24807670,
      "ieId":""
    },
    {
      "nombres":"NUÑONCA YUCRA WILBERT",
      "dni":30765057,
      "ieId":""
    },
    {
      "nombres":"YANQUE CHOQUEVILCA GRACIELA",
      "dni":29612841,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ZAMBRANO EUSTAQUIA",
      "dni":24810883,
      "ieId":""
    },
    {
      "nombres":"ZAMATA HUAMANI FELIX",
      "dni":24781665,
      "ieId":""
    },
    {
      "nombres":"ARAUJO MENDOZA JUAN",
      "dni":24783887,
      "ieId":""
    },
    {
      "nombres":"CORPUNA CARRILLO FRIEDRICH",
      "dni":40690991,
      "ieId":""
    },
    {
      "nombres":"HOLGADO MARTINEZ ARNULFO ANDRES",
      "dni":24813636,
      "ieId":""
    },
    {
      "nombres":"HUAMANI SILVA ROSAS",
      "dni":24796712,
      "ieId":""
    },
    {
      "nombres":"MAMANI SIVINCHA JOHNNY RAFAEL",
      "dni":42023325,
      "ieId":""
    },
    {
      "nombres":"PACCO QUISPESIVANA DANIEL",
      "dni":43398808,
      "ieId":""
    },
    {
      "nombres":"ATAUCURI JUCHARO BALTAZAR",
      "dni":24809561,
      "ieId":""
    },
    {
      "nombres":"CUBA MONTAÑEZ ANGELICA",
      "dni":23966191,
      "ieId":""
    },
    {
      "nombres":"PACCO QUISPESIVANA LUZ DALILA",
      "dni":41552036,
      "ieId":""
    },
    {
      "nombres":"ANCCO CHAMPI NAZARIO",
      "dni":24786174,
      "ieId":""
    },
    {
      "nombres":"PATIÑO MONROY URBANO MAXIMO",
      "dni":24784799,
      "ieId":""
    },
    {
      "nombres":"PFOCCOALATA HUANCAHUIRE MIGUEL ZACARIAS",
      "dni":24811281,
      "ieId":""
    },
    {
      "nombres":"SALDIVAR QUISPE ALFONSO",
      "dni":24788749,
      "ieId":""
    },
    {
      "nombres":"SONCCO MOLINA BRAULIO",
      "dni":24814046,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE ALVARO ROQUE",
      "dni":24796845,
      "ieId":""
    },
    {
      "nombres":"CHACNAMA ESQUIVEL CELINDA",
      "dni":10490662,
      "ieId":""
    },
    {
      "nombres":"ESPERILLA ESPIRILLA MARIA INES",
      "dni":44077335,
      "ieId":""
    },
    {
      "nombres":"PACHECO HUAMAN MARCO",
      "dni":40646401,
      "ieId":""
    },
    {
      "nombres":"QUISPESIVANA GUERREROS RENATO",
      "dni":24808450,
      "ieId":""
    },
    {
      "nombres":"SARAYA TINCO INGRID ROCIO",
      "dni":44857585,
      "ieId":""
    },
    {
      "nombres":"PATIÑO FERNANDEZ JESUS",
      "dni":41796550,
      "ieId":""
    },
    {
      "nombres":"ANCALLA MONGE CAYO",
      "dni":40567050,
      "ieId":""
    },
    {
      "nombres":"MASI ALVIS JULIA MARIA",
      "dni":24807941,
      "ieId":""
    },
    {
      "nombres":"OCHOA MONTES DARIO",
      "dni":24784753,
      "ieId":""
    },
    {
      "nombres":"PACO SUCLLI JACQUELINE",
      "dni":24716736,
      "ieId":""
    },
    {
      "nombres":"ROMERO PERCA SONIA",
      "dni":40776087,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA HUANCARA IVAN",
      "dni":80086930,
      "ieId":""
    },
    {
      "nombres":"VALLEJOS VERA AQUILINO",
      "dni":42312912,
      "ieId":""
    },
    {
      "nombres":"CORPUNA SALAZAR HIPOLITO",
      "dni":24807343,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MERMA MARIO CANUTO",
      "dni":24802986,
      "ieId":""
    },
    {
      "nombres":"OCHOA MONTES LUZMILA",
      "dni":24796791,
      "ieId":""
    },
    {
      "nombres":"RIVEROS OLIVERA INES",
      "dni":24706689,
      "ieId":""
    },
    {
      "nombres":"SALCEDO DELGADO TEOFILO HILARIO",
      "dni":24808383,
      "ieId":""
    },
    {
      "nombres":"ASTO HUAMANI WALTER",
      "dni":41601969,
      "ieId":""
    },
    {
      "nombres":"BACA YALLERCCO EDWIN",
      "dni":41417350,
      "ieId":""
    },
    {
      "nombres":"BARRA MAMANI LUZMILA",
      "dni":29572315,
      "ieId":""
    },
    {
      "nombres":"CUBA MONZON SANTIAGO ELMER",
      "dni":24814626,
      "ieId":""
    },
    {
      "nombres":"HUAMANI SUAREZ RUTH SANDRA",
      "dni":46489180,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ANCALLA AUGUSTO",
      "dni":80088826,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA HUSCA LEONARDO",
      "dni":24799504,
      "ieId":""
    },
    {
      "nombres":"QUISPE APAZA DANIEL ALEJANDRO",
      "dni":2299707,
      "ieId":""
    },
    {
      "nombres":"BACA VEGA ROGER ERNESTO",
      "dni":24809936,
      "ieId":""
    },
    {
      "nombres":"CJURO PUGA VICENTE",
      "dni":24800066,
      "ieId":""
    },
    {
      "nombres":"CUSI QUISPESIVANA AGAPITO",
      "dni":24806937,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA HUANCARA JUANA ROSA",
      "dni":24810007,
      "ieId":""
    },
    {
      "nombres":"PEÑA FLORES VICENTE",
      "dni":24673770,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALVAREZ ROSA VICTORIA",
      "dni":24808535,
      "ieId":""
    },
    {
      "nombres":"VENERO HUISA WILLIAM OSCAR",
      "dni":42925414,
      "ieId":""
    },
    {
      "nombres":"CARRILLO POLANCO RODOLFO",
      "dni":24804167,
      "ieId":""
    },
    {
      "nombres":"CCAMA BATALLANES JAQUELIN",
      "dni":40849531,
      "ieId":""
    },
    {
      "nombres":"CHUNGA YUCRA DAISSY AMPARO",
      "dni":29673870,
      "ieId":""
    },
    {
      "nombres":"TORRES LOPEZ DARWIN",
      "dni":45278274,
      "ieId":""
    },
    {
      "nombres":"TRELLES SULLA AURO",
      "dni":29554629,
      "ieId":""
    },
    {
      "nombres":"VELEZ BUSTAMANTE JEANETH DIANA",
      "dni":40551064,
      "ieId":""
    },
    {
      "nombres":"VIDAL TAIRO SOFIA",
      "dni":40377013,
      "ieId":""
    },
    {
      "nombres":"ARIAS PEZO CARLOS ALBERTO",
      "dni":24718875,
      "ieId":""
    },
    {
      "nombres":"CABIEDES CUENTAS GILMAR MELQUIADES",
      "dni":29624467,
      "ieId":""
    },
    {
      "nombres":"PEÑA MERMA ERADIO SEGUNDO",
      "dni":42862063,
      "ieId":""
    },
    {
      "nombres":"ANCCO CHAMPI SANTIAGO",
      "dni":23835338,
      "ieId":""
    },
    {
      "nombres":"BARRIONUEVO ALMANACIN BACILIA",
      "dni":24808157,
      "ieId":""
    },
    {
      "nombres":"PINTO HUANACO NILDA",
      "dni":24720540,
      "ieId":""
    },
    {
      "nombres":"CHOQQUE HUILLCAIQUIPA JULIAN",
      "dni":24784324,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ VILCA ANTERO",
      "dni":45376312,
      "ieId":""
    },
    {
      "nombres":"JANCCO CHARCA MARITZA",
      "dni":46348034,
      "ieId":""
    },
    {
      "nombres":"RAYAN HUAMANI JUAN CARLOS",
      "dni":24811276,
      "ieId":""
    },
    {
      "nombres":"SOLIS URBINA DANIEL",
      "dni":40316375,
      "ieId":""
    },
    {
      "nombres":"VEGA GUERREROS MERCEDES SILVIA",
      "dni":40142987,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ ALVAREZ MARCELINO",
      "dni":24803416,
      "ieId":""
    },
    {
      "nombres":"ARAUJO CASTRO CUBA FELICIANO PRIMO",
      "dni":24803800,
      "ieId":""
    },
    {
      "nombres":"BOZA CORNEJO ROGER MAXIMILIANO",
      "dni":24802707,
      "ieId":""
    },
    {
      "nombres":"CHARCCAHUANA CHACO MAURA",
      "dni":41014615,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MENDOZA ROMEO",
      "dni":80440519,
      "ieId":""
    },
    {
      "nombres":"ARESTEGUI MAMANI PASCUALA MARISA",
      "dni":29623678,
      "ieId":""
    },
    {
      "nombres":"MOLINA MOLERO SOFIA IRENE",
      "dni":24810983,
      "ieId":""
    },
    {
      "nombres":"PAREDES PAREDES SADY SEBASTIANA",
      "dni":29582395,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUISPE CELEDONIO",
      "dni":24783899,
      "ieId":""
    },
    {
      "nombres":"ARAGON SALDIVAR ANA LUISA",
      "dni":29408054,
      "ieId":""
    },
    {
      "nombres":"BONIFACIO ELME WILLIAM",
      "dni":43386336,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL PEÑA JUAN",
      "dni":24780672,
      "ieId":""
    },
    {
      "nombres":"HUAYTANI VALENCIA CAYO",
      "dni":41847654,
      "ieId":""
    },
    {
      "nombres":"OBLITAS CUBA ESTHER",
      "dni":24784826,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPESIVANA SANTIAGO",
      "dni":24780206,
      "ieId":""
    },
    {
      "nombres":"ARAUJO CASTRO CUBA VICTORIO",
      "dni":24802708,
      "ieId":""
    },
    {
      "nombres":"OCHOA MONTES OSCAR",
      "dni":24784751,
      "ieId":""
    },
    {
      "nombres":"CALLE MAXI SIXTO MARCOS",
      "dni":24715599,
      "ieId":""
    },
    {
      "nombres":"COTOHUANCA ALARCON EDUARDO",
      "dni":24677411,
      "ieId":""
    },
    {
      "nombres":"LOVON CUEVAZO RUBEN",
      "dni":41610288,
      "ieId":""
    },
    {
      "nombres":"MENDOZA NUÑEZ ALFREDO FREDY",
      "dni":29687838,
      "ieId":""
    },
    {
      "nombres":"MOLINA FERNANDEZ CONSTANTINO",
      "dni":24808778,
      "ieId":""
    },
    {
      "nombres":"PEÑA HUANCA ANTONIA",
      "dni":45650354,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA HUANCARA EULALIA",
      "dni":80087884,
      "ieId":""
    },
    {
      "nombres":"ALFEREZ MENDOZA JOSUE ASCENCIO",
      "dni":42275009,
      "ieId":""
    },
    {
      "nombres":"BARRAGAN BARRIENTOS JESUS ALEXIS",
      "dni":41402041,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA ALVAREZ GESSELTON ALAN",
      "dni":43975343,
      "ieId":""
    },
    {
      "nombres":"CASQUINA LLANLLAYA LORENZO",
      "dni":24808415,
      "ieId":""
    },
    {
      "nombres":"CCORAHUA CORDOVA URBELINDA",
      "dni":29620304,
      "ieId":""
    },
    {
      "nombres":"FLORES TRELLES BELARMINO",
      "dni":24803410,
      "ieId":""
    },
    {
      "nombres":"ANCALLA HUAMANI RAFAEL",
      "dni":24803536,
      "ieId":""
    },
    {
      "nombres":"APAZA ALMIRON JOSE",
      "dni":41417360,
      "ieId":""
    },
    {
      "nombres":"CARRILLO GUZMAN CONSTANTINO",
      "dni":24785713,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MERMA BENITA",
      "dni":24783272,
      "ieId":""
    },
    {
      "nombres":"PACCO QUISPESIVANA LUZ AMANDA",
      "dni":40330780,
      "ieId":""
    },
    {
      "nombres":"QUISPESIVANA ANCALLA YSMAEL",
      "dni":24783974,
      "ieId":""
    },
    {
      "nombres":"MENDOZA CHACNAMA EBERT WILBERT",
      "dni":24813360,
      "ieId":""
    },
    {
      "nombres":"VIDAL TAIRO ANA MARIA",
      "dni":24808736,
      "ieId":""
    },
    {
      "nombres":"SALCEDO LLAMOCCA JOSUE",
      "dni":44300898,
      "ieId":""
    },
    {
      "nombres":"TRIVEÑO QUISPE VICENTE",
      "dni":24803110,
      "ieId":""
    },
    {
      "nombres":"YAHUIRA LLACMA FREDY",
      "dni":24813963,
      "ieId":""
    },
    {
      "nombres":"DOMINGUEZ SOSA ALICIA",
      "dni":24803553,
      "ieId":""
    },
    {
      "nombres":"SALCEDO CARBAJAL LORENZO",
      "dni":24781216,
      "ieId":""
    },
    {
      "nombres":"SALCEDO HUAMANI WALTER",
      "dni":24811223,
      "ieId":""
    },
    {
      "nombres":"EGUSQUIZA YUCA WALTHER",
      "dni":24802361,
      "ieId":""
    },
    {
      "nombres":"TRIVEÑO QUISPE RENE",
      "dni":43473518,
      "ieId":""
    },
    {
      "nombres":"UMIYAURI HILACHOQUE ISAIAS",
      "dni":24803855,
      "ieId":""
    },
    {
      "nombres":"TAYPE PARI JULIA",
      "dni":41220102,
      "ieId":""
    },
    {
      "nombres":"ARONI GUTIERREZ RAUL",
      "dni":29655804,
      "ieId":""
    },
    {
      "nombres":"ALMIRON SILLCAHUI LUIS FERNANDO",
      "dni":41458069,
      "ieId":""
    },
    {
      "nombres":"ARAUJO SALINAS OLINDA",
      "dni":46098955,
      "ieId":""
    },
    {
      "nombres":"ARONI ALVIS ZACARIAS",
      "dni":24785126,
      "ieId":""
    },
    {
      "nombres":"CARZALES QUISPE TIMOTEO",
      "dni":24802546,
      "ieId":""
    },
    {
      "nombres":"CCUITO MAMANI MARINA",
      "dni":42104584,
      "ieId":""
    },
    {
      "nombres":"CHALLA VEGA ISIDORA",
      "dni":24810612,
      "ieId":""
    },
    {
      "nombres":"CCALLUCHE MENDOZA MAXIMILIANO",
      "dni":24803799,
      "ieId":""
    },
    {
      "nombres":"GONZALES GUTIERREZ JORGE",
      "dni":24808084,
      "ieId":""
    },
    {
      "nombres":"PUMA TAIPE EDWIN EVER",
      "dni":40725402,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA ALCCAHUAMAN AMERICO",
      "dni":41438784,
      "ieId":""
    },
    {
      "nombres":"CRUZ VITORINO WILLIAMS",
      "dni":41914145,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONDE MARY LUZ",
      "dni":41858479,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE GUTIERREZ OFELIA",
      "dni":24802809,
      "ieId":""
    },
    {
      "nombres":"ARAGON SALDIVAR LUIS ANGEL",
      "dni":24810066,
      "ieId":""
    },
    {
      "nombres":"ARONI SALHUA SOLEDAD",
      "dni":44816481,
      "ieId":""
    },
    {
      "nombres":"BENITO MENDOZA FLAVIO",
      "dni":24781363,
      "ieId":""
    },
    {
      "nombres":"CABRERA CANALES EVER EDUARDO",
      "dni":24661226,
      "ieId":""
    },
    {
      "nombres":"COLQUE CHOQUE AVELINO",
      "dni":24700484,
      "ieId":""
    },
    {
      "nombres":"CONDORI ROMERO LUZMILA",
      "dni":24811127,
      "ieId":""
    },
    {
      "nombres":"COSI ATAUCURI BERTHA SUSANA",
      "dni":30833981,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ ALVAREZ GLORIA",
      "dni":24803065,
      "ieId":""
    },
    {
      "nombres":"GUEVARA HUARCA CARMELA",
      "dni":24808642,
      "ieId":""
    },
    {
      "nombres":"NINAQUISPE APFATA FRUCTUOSO",
      "dni":40069685,
      "ieId":""
    },
    {
      "nombres":"OCHOA VALDEZ OLIVIA",
      "dni":45903833,
      "ieId":""
    },
    {
      "nombres":"QUISPE ARTEAGA SILVIO VALENTIN",
      "dni":24802939,
      "ieId":""
    },
    {
      "nombres":"QUISPE BORDA ALAN WENCESLAO",
      "dni":2045019,
      "ieId":""
    },
    {
      "nombres":"QUISPE HANCCO PEDRO ALFREDO",
      "dni":1548307,
      "ieId":""
    },
    {
      "nombres":"ROMERO CASTILLO JORGE UVER",
      "dni":24785597,
      "ieId":""
    },
    {
      "nombres":"SANTISTEBAN MATTO GILMAR",
      "dni":25326600,
      "ieId":""
    },
    {
      "nombres":"SIVANA CALLANTE VICENTE",
      "dni":24780304,
      "ieId":""
    },
    {
      "nombres":"SIVINCHA CHSALLA DE VIL PAULINA",
      "dni":24785594,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS PEÑA GILBER FRANCISCO",
      "dni":24781548,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ MURIEL WILBER",
      "dni":24810522,
      "ieId":""
    },
    {
      "nombres":"CASTRO CUBA MONTAÑEZ EUFEMIA",
      "dni":24786001,
      "ieId":""
    },
    {
      "nombres":"CHACNAMA LAYME ALFONSO",
      "dni":24781559,
      "ieId":""
    },
    {
      "nombres":"GAIMES ALVIS JESUSA",
      "dni":29568484,
      "ieId":""
    },
    {
      "nombres":"LAYME MANTILLA FRANCISCA",
      "dni":24780993,
      "ieId":""
    },
    {
      "nombres":"MENDOZA DIAZ BRAULIO",
      "dni":41583786,
      "ieId":""
    },
    {
      "nombres":"MOLINA MILLIO JUVENAL",
      "dni":24810618,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ CHACNAMA VICTOR",
      "dni":29387302,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ MURIEL RICARDO BENJAMIN",
      "dni":24780812,
      "ieId":""
    },
    {
      "nombres":"PACCO ACHINQUIPA NELSON LUCAS",
      "dni":24803047,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUISPE GREGORIO",
      "dni":24785579,
      "ieId":""
    },
    {
      "nombres":"VISAGA VEGA ALCIDES FELIPE",
      "dni":41679360,
      "ieId":""
    },
    {
      "nombres":"CUTIPA GONZALES YENI GLORIA",
      "dni":40867320,
      "ieId":""
    },
    {
      "nombres":"ABRIGO MENDOZA HERACLIO",
      "dni":29630741,
      "ieId":""
    },
    {
      "nombres":"ALMIRON HUAMANI EDWIN",
      "dni":24804158,
      "ieId":""
    },
    {
      "nombres":"ANCO CONTRERAS JUVENAL",
      "dni":24803513,
      "ieId":""
    },
    {
      "nombres":"APAZA JARA ISMAEL PERCY",
      "dni":45600373,
      "ieId":""
    },
    {
      "nombres":"AROQUIPA PUMALEQUE FRANCISCO",
      "dni":41574033,
      "ieId":""
    },
    {
      "nombres":"BENITO CALDERON DOLORES",
      "dni":24784181,
      "ieId":""
    },
    {
      "nombres":"BENITO CALDERON DE BOZA CARMEN",
      "dni":23926470,
      "ieId":""
    },
    {
      "nombres":"CASTRO CUBA PATIÑO MICHAEL NELSON",
      "dni":41458072,
      "ieId":""
    },
    {
      "nombres":"CATARI CUTIPA MARTHA",
      "dni":2425784,
      "ieId":""
    },
    {
      "nombres":"CCOAQUIRA CUITO MIGUEL",
      "dni":24808474,
      "ieId":""
    },
    {
      "nombres":"CHALLCO HUANCA ABRAHAM",
      "dni":40657073,
      "ieId":""
    },
    {
      "nombres":"CHOQUEPATA CAYLLAHUA LUISA PATRICIA",
      "dni":29590326,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA VALENCIA CORNELIO",
      "dni":23937420,
      "ieId":""
    },
    {
      "nombres":"COLQUE QUECAÑO ACSEL",
      "dni":23993289,
      "ieId":""
    },
    {
      "nombres":"CUTI HUILLCA NILDA",
      "dni":41101487,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ MARQUEZ DOLORES",
      "dni":24783673,
      "ieId":""
    },
    {
      "nombres":"FLORES CRUZ JOSE ALBERTO",
      "dni":29613307,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CHARA JORGE JOE",
      "dni":29651563,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ GUEVARA JUANITA CARMEN",
      "dni":29709589,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SALCEDO MARCO ANTONIO",
      "dni":42097720,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHAUCA LINO",
      "dni":24808410,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHAUCA LUCILA",
      "dni":24810590,
      "ieId":""
    },
    {
      "nombres":"HUAMANI HUANCA MONICA ROSAURA",
      "dni":30960843,
      "ieId":""
    },
    {
      "nombres":"HUAMANI LEON MARIA ELENA",
      "dni":44612562,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MERMA RAUL",
      "dni":24808524,
      "ieId":""
    },
    {
      "nombres":"HUAMANI VEGA MARIA ZENAIDA",
      "dni":41835203,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI LLACMA CEFERINO",
      "dni":24806613,
      "ieId":""
    },
    {
      "nombres":"IBARRA SALCEDO ALBERTO",
      "dni":29474184,
      "ieId":""
    },
    {
      "nombres":"LUNA MONTES BELCHA BENITA",
      "dni":23889473,
      "ieId":""
    },
    {
      "nombres":"MAMANI LIMAHUAYA GREGORIO",
      "dni":2047566,
      "ieId":""
    },
    {
      "nombres":"MAMANI MEZA VALERIA",
      "dni":24666782,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ANCALLA CLAUDIO",
      "dni":24808460,
      "ieId":""
    },
    {
      "nombres":"MOLINA VALENCIA ROBERTO",
      "dni":24781142,
      "ieId":""
    },
    {
      "nombres":"MORIEL SIVINCHA RENATO",
      "dni":24811817,
      "ieId":""
    },
    {
      "nombres":"ORTEGA PORTUGAL AYME ROSIO",
      "dni":23956970,
      "ieId":""
    },
    {
      "nombres":"PALACIOS BLANCO MARITZA",
      "dni":44458169,
      "ieId":""
    },
    {
      "nombres":"PAMPAMALLCO YANCACHAJLL GUZMAN",
      "dni":1990444,
      "ieId":""
    },
    {
      "nombres":"PEÑA SALAS KATY ALICE",
      "dni":42480541,
      "ieId":""
    },
    {
      "nombres":"PEÑA SALAS ELIANA",
      "dni":29707946,
      "ieId":""
    },
    {
      "nombres":"QQUELCCA TAYPE MILO",
      "dni":44235007,
      "ieId":""
    },
    {
      "nombres":"QUISPE GONZALES JORGE EDUARDO",
      "dni":29627840,
      "ieId":""
    },
    {
      "nombres":"QUISPE MACHICADO LIZETH",
      "dni":47228360,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAZCO JESUS",
      "dni":2411626,
      "ieId":""
    },
    {
      "nombres":"QUISPE NINA ARISTIDES",
      "dni":24717693,
      "ieId":""
    },
    {
      "nombres":"QUISPE PFOCCOALATA EDGAR",
      "dni":42460218,
      "ieId":""
    },
    {
      "nombres":"QUISPE ROCCA DAVID CESAR",
      "dni":23942978,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ LLACMA NAZARIO",
      "dni":29639572,
      "ieId":""
    },
    {
      "nombres":"RAMOS MACEDO IDALIA BENITA",
      "dni":29664175,
      "ieId":""
    },
    {
      "nombres":"RIVAS OCHOA JOSE ANTONIO",
      "dni":30426653,
      "ieId":""
    },
    {
      "nombres":"ROJAS CANO JOSE ISAAC",
      "dni":24712853,
      "ieId":""
    },
    {
      "nombres":"ROMERO CCAHUANA JULIA",
      "dni":23933499,
      "ieId":""
    },
    {
      "nombres":"SALAS PEÑA JUDITH",
      "dni":24804415,
      "ieId":""
    },
    {
      "nombres":"SALAS PINEDO JESSICA",
      "dni":43594459,
      "ieId":""
    },
    {
      "nombres":"SALDIVAR TOLEDO ROOSVEL YURY",
      "dni":29715791,
      "ieId":""
    },
    {
      "nombres":"SARMIENTO ANCALLI HECTOR",
      "dni":41979805,
      "ieId":""
    },
    {
      "nombres":"SARMIENTO ROMERO CESAR AUGUSTO",
      "dni":30960841,
      "ieId":""
    },
    {
      "nombres":"TORRES CCAHUANA FLAVIO",
      "dni":23845259,
      "ieId":""
    },
    {
      "nombres":"TURPO PUMA FREDY",
      "dni":41139011,
      "ieId":""
    },
    {
      "nombres":"CARCAUSTO APAZA ROMULO CONSTANTINO",
      "dni":1544894,
      "ieId":""
    },
    {
      "nombres":"CHAMPI SARAYA JOSE",
      "dni":43795012,
      "ieId":""
    },
    {
      "nombres":"CHURATA CHECA ANA ROSEMARY",
      "dni":41414966,
      "ieId":""
    },
    {
      "nombres":"FUENTES MAYTA JAVIER",
      "dni":29622230,
      "ieId":""
    },
    {
      "nombres":"HUAMANI SILLOCCA JOSE",
      "dni":23801702,
      "ieId":""
    },
    {
      "nombres":"HUAYTA APAZA FRANCISCO",
      "dni":41882970,
      "ieId":""
    },
    {
      "nombres":"HUISA VARGAS AMPARO SOLEDAD",
      "dni":30859133,
      "ieId":""
    },
    {
      "nombres":"LAURA CHAVEZ HELBEERT ADO",
      "dni":1557773,
      "ieId":""
    },
    {
      "nombres":"MAMANI BARREDA MARCO",
      "dni":41409643,
      "ieId":""
    },
    {
      "nombres":"MAYTA CHOQUE NORMA",
      "dni":2447796,
      "ieId":""
    },
    {
      "nombres":"MAYTA CHOQUE OLGA",
      "dni":2438114,
      "ieId":""
    },
    {
      "nombres":"MAYTA PANCA ELOY FREDDY",
      "dni":29650416,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE MONICA",
      "dni":43570681,
      "ieId":""
    },
    {
      "nombres":"SANCA ESCARCENA RUTH INES",
      "dni":40574364,
      "ieId":""
    },
    {
      "nombres":"ALFERES PURUGUAYA ISMAEL MANUEL",
      "dni":30413357,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ COAQUIRA WILMAR",
      "dni":42253814,
      "ieId":""
    },
    {
      "nombres":"CANSAYA CONDORI ROSA",
      "dni":24712019,
      "ieId":""
    },
    {
      "nombres":"CHURATA GONZALES EBER GODOFREDO",
      "dni":44632823,
      "ieId":""
    },
    {
      "nombres":"DELGADO QUISPE FLOR DE YANET",
      "dni":41197218,
      "ieId":""
    },
    {
      "nombres":"GUZMAN VALER RICHARD",
      "dni":23958285,
      "ieId":""
    },
    {
      "nombres":"IDME IDME FULGENCIO EUGENIO",
      "dni":29698069,
      "ieId":""
    },
    {
      "nombres":"LAYME OTAZU NINO ALBERTO",
      "dni":29662560,
      "ieId":""
    },
    {
      "nombres":"MALLMA HUAMANI RODRIGO",
      "dni":40693361,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MERMA ISABEL VICTORIA",
      "dni":24783598,
      "ieId":""
    },
    {
      "nombres":"MOLINA MEZA ELIAZAR",
      "dni":42093859,
      "ieId":""
    },
    {
      "nombres":"MORIEL SIVINCHA ISIDORO",
      "dni":24811915,
      "ieId":""
    },
    {
      "nombres":"PUMALEQUE CARZALES VALENTIN",
      "dni":24888417,
      "ieId":""
    },
    {
      "nombres":"QUISPE GARCIA JUDITH MARLENY",
      "dni":41675368,
      "ieId":""
    },
    {
      "nombres":"RIVAS MONROY CARLOS MANUEL",
      "dni":30422896,
      "ieId":""
    },
    {
      "nombres":"SALLO QUISPE HUGO",
      "dni":25306204,
      "ieId":""
    },
    {
      "nombres":"TAPIA GOMEZ ALEX",
      "dni":24807927,
      "ieId":""
    },
    {
      "nombres":"VEGA DELGADO VICTORIANA ROSA",
      "dni":30424713,
      "ieId":""
    },
    {
      "nombres":"ZAIRA APAZA EDWIN MAXIMO",
      "dni":1308713,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE GUTIERREZ ANABEL",
      "dni":23994544,
      "ieId":""
    },
    {
      "nombres":"APAZA CANSAYA CLETA MARGOT",
      "dni":40385859,
      "ieId":""
    },
    {
      "nombres":"APFATA ALA PEDRO",
      "dni":24811331,
      "ieId":""
    },
    {
      "nombres":"BARREROS CARHUAS ESTEBAN TITO",
      "dni":42653023,
      "ieId":""
    },
    {
      "nombres":"BARRIONUEVO DEL CASTILL NANCY",
      "dni":29724720,
      "ieId":""
    },
    {
      "nombres":"BENIQUE ARIAS YHONY",
      "dni":41768257,
      "ieId":""
    },
    {
      "nombres":"CALLATA CONDORI ANA MARIA",
      "dni":23841722,
      "ieId":""
    },
    {
      "nombres":"CHECCORI MAMANI JAIME RONAL",
      "dni":44291059,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI HERMELINDA MARIA",
      "dni":29649487,
      "ieId":""
    },
    {
      "nombres":"FLORES CRUZ RAUL PAULO",
      "dni":29645121,
      "ieId":""
    },
    {
      "nombres":"GARCIA RUIZ JAKELI ROSMELLY",
      "dni":29663457,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ LUNA MADELAYNE RUBY",
      "dni":29415295,
      "ieId":""
    },
    {
      "nombres":"HUIZA CORRALES ROSMERY",
      "dni":45154054,
      "ieId":""
    },
    {
      "nombres":"MAMANI TILA MARCO ALAN",
      "dni":42170602,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ CARRILLO VIDAL",
      "dni":24814067,
      "ieId":""
    },
    {
      "nombres":"PERALTA CARRILLO FRINE",
      "dni":29550634,
      "ieId":""
    },
    {
      "nombres":"PFUTURI TTITO MARIO",
      "dni":24712110,
      "ieId":""
    },
    {
      "nombres":"TUPA TUNI TERESA",
      "dni":43785469,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE GUTIERREZ GUMERCINDO",
      "dni":23820485,
      "ieId":""
    },
    {
      "nombres":"CALAPUJA QUISPE DAVID ERNESTO",
      "dni":41555181,
      "ieId":""
    },
    {
      "nombres":"CCAHUANA QUISPE LUCIO",
      "dni":41610634,
      "ieId":""
    },
    {
      "nombres":"CCARI TITE ELMER ROLANDO",
      "dni":80041453,
      "ieId":""
    },
    {
      "nombres":"CCORI HUAMANI VERONICA",
      "dni":23958459,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ VEGA CENTENO OSCAR REYNALDO",
      "dni":40647941,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA VEGA PETER PEDRO",
      "dni":41593514,
      "ieId":""
    },
    {
      "nombres":"COLLANA DE LA CRUZ MILAGROS VERONICA",
      "dni":41293544,
      "ieId":""
    },
    {
      "nombres":"CUBA BORDA MARITZA NORKA",
      "dni":29354569,
      "ieId":""
    },
    {
      "nombres":"CUEVA FLORES SUSY VANESSA",
      "dni":42480741,
      "ieId":""
    },
    {
      "nombres":"CUSSI RAMOS JUAN VALERY",
      "dni":24698693,
      "ieId":""
    },
    {
      "nombres":"HUAMANI DE LA CRUZ ZENIA",
      "dni":23978534,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI LLACMA CESARIO",
      "dni":24806960,
      "ieId":""
    },
    {
      "nombres":"INOFUENTE CALCINA WILMA",
      "dni":41820482,
      "ieId":""
    },
    {
      "nombres":"MONTEAGUDO PAREDES PATRICIA ANGELA",
      "dni":29605494,
      "ieId":""
    },
    {
      "nombres":"RIVAS OCHOA CARMEN NATALIA",
      "dni":42287298,
      "ieId":""
    },
    {
      "nombres":"VALENCIA MOLINA RIMBERTI",
      "dni":29224521,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CHAVEZ MARISOL",
      "dni":40920630,
      "ieId":""
    },
    {
      "nombres":"CATARI CUTIPA NANCY",
      "dni":2449506,
      "ieId":""
    },
    {
      "nombres":"CHILQQUETUMA HUARACHA YUDY NATALIA",
      "dni":40744675,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA QUISPE BERNARDINO RICHARD",
      "dni":43725038,
      "ieId":""
    },
    {
      "nombres":"CONDO QUISPE JESUS",
      "dni":30960493,
      "ieId":""
    },
    {
      "nombres":"CONDORI ARDILES EDWIN GILMER",
      "dni":1308764,
      "ieId":""
    },
    {
      "nombres":"ELME SIVINCHA ELENA",
      "dni":24785161,
      "ieId":""
    },
    {
      "nombres":"HANCCO TUNI CORINA VICTORIA",
      "dni":2298842,
      "ieId":""
    },
    {
      "nombres":"HUAMANI HUAMANVILCA ANYELA",
      "dni":41014054,
      "ieId":""
    },
    {
      "nombres":"HUANCA PAREDES ROSA",
      "dni":40625255,
      "ieId":""
    },
    {
      "nombres":"HUANCA RODRIGO ROSINA",
      "dni":29661938,
      "ieId":""
    },
    {
      "nombres":"HUANCACHOQUE QUIÑONEZ JOSE FELIPE",
      "dni":1557290,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA CONDORI PEDRO CELESTINO",
      "dni":29564747,
      "ieId":""
    },
    {
      "nombres":"HUILLCA PACCO JUAN",
      "dni":24719203,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ LAYME HILARION",
      "dni":24780169,
      "ieId":""
    },
    {
      "nombres":"ORTIZ QUILLA JUAN CARLOS",
      "dni":41225095,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONDORI PEDRO",
      "dni":24709939,
      "ieId":""
    },
    {
      "nombres":"TAUCCAYA MILLIO LINO",
      "dni":29204065,
      "ieId":""
    },
    {
      "nombres":"VERA CHAÑI KATIA",
      "dni":23947815,
      "ieId":""
    },
    {
      "nombres":"ZAPANA QUISPE VICENTA",
      "dni":1304483,
      "ieId":""
    },
    {
      "nombres":"ANCALLA HUAMANI JOSE ANTONIO",
      "dni":24803181,
      "ieId":""
    },
    {
      "nombres":"CACERES HUANCACHOQUE NICOLAS",
      "dni":24698730,
      "ieId":""
    },
    {
      "nombres":"CHIPANA LOAYZA GUIDO ERNESTO",
      "dni":80267602,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MAMANI JENNY VIRGINIA",
      "dni":29591980,
      "ieId":""
    },
    {
      "nombres":"JULI TAIRO DARWIN",
      "dni":24707394,
      "ieId":""
    },
    {
      "nombres":"UNDA CUBA GENARO",
      "dni":80629540,
      "ieId":""
    },
    {
      "nombres":"YALLERCCO CHUCTAYA HERMENEGILDO JUSTINO",
      "dni":41659366,
      "ieId":""
    },
    {
      "nombres":"FLORES JOVE DANIEL",
      "dni":1491254,
      "ieId":""
    },
    {
      "nombres":"JALLO HUMPIRI DAVID",
      "dni":1335090,
      "ieId":""
    },
    {
      "nombres":"JOVE CHOQUEMAMANI TEOFILO VIDAL",
      "dni":29504899,
      "ieId":""
    },
    {
      "nombres":"LUPACA CUSACANI JOSE",
      "dni":1782154,
      "ieId":""
    },
    {
      "nombres":"MACHACA QUENAYA HERNAN",
      "dni":40950837,
      "ieId":""
    },
    {
      "nombres":"MAMANI FRISANCHO JAVIER ERNESTO",
      "dni":41342643,
      "ieId":""
    },
    {
      "nombres":"PATIÑO MONROY FILIBERTO",
      "dni":24785169,
      "ieId":""
    },
    {
      "nombres":"QUISPE TORRES ROGER",
      "dni":2147488,
      "ieId":""
    },
    {
      "nombres":"BENAVIDES CUBA ERWIN",
      "dni":41735492,
      "ieId":""
    },
    {
      "nombres":"CONDORI FLORES MARIA LUZ",
      "dni":29651612,
      "ieId":""
    },
    {
      "nombres":"QUISPE TORRES FRANK ANTONIO",
      "dni":42048896,
      "ieId":""
    },
    {
      "nombres":"RAMOS ARAPA JAIME",
      "dni":2431806,
      "ieId":""
    },
    {
      "nombres":"RIMACHE HUAMANI JESUS",
      "dni":24809509,
      "ieId":""
    },
    {
      "nombres":"CJULA CACERES URBANO",
      "dni":40243999,
      "ieId":""
    },
    {
      "nombres":"FLORES SIERRA AMADOR BENJAMIN",
      "dni":29727590,
      "ieId":""
    },
    {
      "nombres":"ROQUE CACERES ANTONIO JAZMANI",
      "dni":41715253,
      "ieId":""
    },
    {
      "nombres":"UNDA CUBA MARTA",
      "dni":24811279,
      "ieId":""
    },
    {
      "nombres":"CCOLQQUE VELAZCO SAMUEL",
      "dni":24888431,
      "ieId":""
    },
    {
      "nombres":"HUAMAN YUCA MARIA ELENA",
      "dni":40551288,
      "ieId":""
    },
    {
      "nombres":"HUAYTA QUIZA RICHARD",
      "dni":2147774,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCALA DANIEL",
      "dni":24706427,
      "ieId":""
    },
    {
      "nombres":"QUISPE RAMOS JULIA",
      "dni":43488982,
      "ieId":""
    },
    {
      "nombres":"RUELAS VILCA SONIA",
      "dni":42772207,
      "ieId":""
    },
    {
      "nombres":"SALVADOR MADUEÑO ADRIEL",
      "dni":42575826,
      "ieId":""
    },
    {
      "nombres":"AL VARO MANTILLA EFRAIN",
      "dni":42456599,
      "ieId":""
    },
    {
      "nombres":"ALIAGA JUAREZ BETTY",
      "dni":2433981,
      "ieId":""
    },
    {
      "nombres":"CCONISLLA NOA FELIX",
      "dni":40716215,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA ROMAN CLAUDINE OFELIA",
      "dni":29665342,
      "ieId":""
    },
    {
      "nombres":"VILCA CASTILLO WILFREDO",
      "dni":24810052,
      "ieId":""
    },
    {
      "nombres":"CAPCHI HUAMANI BENERIGTO",
      "dni":45084858,
      "ieId":""
    },
    {
      "nombres":"CASTRO HUAMANI VILMA",
      "dni":40260837,
      "ieId":""
    },
    {
      "nombres":"CHARCA QUISPE LIBIA",
      "dni":40996851,
      "ieId":""
    },
    {
      "nombres":"CHURATA SULLA ELMER SALOMON",
      "dni":30858458,
      "ieId":""
    },
    {
      "nombres":"GAIMES ALVIS PEDRO",
      "dni":29613985,
      "ieId":""
    },
    {
      "nombres":"HUACHACA ALEJO PERCY",
      "dni":44113109,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHANCAHUAÑA HENRY",
      "dni":44906956,
      "ieId":""
    },
    {
      "nombres":"INGA CCAHUANA BEATRIZ",
      "dni":44690003,
      "ieId":""
    },
    {
      "nombres":"QUISPE TTITO JESUS",
      "dni":23977519,
      "ieId":""
    },
    {
      "nombres":"TAYRO JALLO ALFREDO",
      "dni":40215314,
      "ieId":""
    },
    {
      "nombres":"APAZA CHIPANA YESENIA NATALIA",
      "dni":42037445,
      "ieId":""
    },
    {
      "nombres":"CHOQUE ARAPA FRANCISCO ANTONIO",
      "dni":25000328,
      "ieId":""
    },
    {
      "nombres":"FLORES MAMANI ANGELA",
      "dni":29615190,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ATAUCURI UBER",
      "dni":42325852,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE MARIBEL REGINA",
      "dni":24718300,
      "ieId":""
    },
    {
      "nombres":"RAMOS QUISPE MARCELINO ENRIQUE",
      "dni":24712897,
      "ieId":""
    },
    {
      "nombres":"SURI CASTILLO SANTIAGO",
      "dni":24806818,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI UÑURUCO PABLO",
      "dni":24360715,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA NEGRON FRINE",
      "dni":40642728,
      "ieId":""
    },
    {
      "nombres":"CABRERA SILVA JUAN CARLOS",
      "dni":44074396,
      "ieId":""
    },
    {
      "nombres":"OJEDA DELGADO MARIA ELISA",
      "dni":41443249,
      "ieId":""
    },
    {
      "nombres":"PACHECO TRELLES ROBERTSON",
      "dni":41800644,
      "ieId":""
    },
    {
      "nombres":"RIMACHE PUGA UBALDO",
      "dni":24707087,
      "ieId":""
    },
    {
      "nombres":"SALCEDO OROSCO CELSO FELIPE",
      "dni":80076940,
      "ieId":""
    },
    {
      "nombres":"VENERO MERMA YULDER",
      "dni":41870394,
      "ieId":""
    },
    {
      "nombres":"BACA YALLERCCO SILVIO",
      "dni":43156727,
      "ieId":""
    },
    {
      "nombres":"CONDORI CHURA TEODORA ZENOBIA",
      "dni":29472263,
      "ieId":""
    },
    {
      "nombres":"OBADA QUISPE MARCIAL",
      "dni":24703141,
      "ieId":""
    },
    {
      "nombres":"PACCO HUAMANI ANA MARIA",
      "dni":42568684,
      "ieId":""
    },
    {
      "nombres":"VALCARCEL SALAZAR SANDRA",
      "dni":40975089,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI HUANCA RAMIRO",
      "dni":43921457,
      "ieId":""
    },
    {
      "nombres":"ANCALLA HUAMANI JUAN CARLOS",
      "dni":24810014,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA CONDORI LILIANA",
      "dni":29517609,
      "ieId":""
    },
    {
      "nombres":"CABRERA HUARACHA JAVIER",
      "dni":42573860,
      "ieId":""
    },
    {
      "nombres":"DELGADO QUISPE NELSON",
      "dni":29681561,
      "ieId":""
    },
    {
      "nombres":"PUMA MORALES MIGUEL BARTOLOME",
      "dni":43305476,
      "ieId":""
    },
    {
      "nombres":"PUMA VILCA JESUS MARISCAL",
      "dni":46080050,
      "ieId":""
    },
    {
      "nombres":"QUISPE TORRES PERCDY",
      "dni":2167122,
      "ieId":""
    },
    {
      "nombres":"APAZA TICONA HERIBER",
      "dni":42889421,
      "ieId":""
    },
    {
      "nombres":"BERNA MAMANI PERCY DAVID",
      "dni":40178348,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ENRIQUEZ ELEAZAR",
      "dni":24808766,
      "ieId":""
    },
    {
      "nombres":"MENDOZA HUAMANI JUAN PABLO",
      "dni":41669617,
      "ieId":""
    },
    {
      "nombres":"ROMAN RAMOS ELSA LEONCIA",
      "dni":29592170,
      "ieId":""
    },
    {
      "nombres":"TOMAILLA QUISPE NATALIA ANITA",
      "dni":29719968,
      "ieId":""
    },
    {
      "nombres":"ZAPANA QUISPE JESUS MANUEL",
      "dni":1326455,
      "ieId":""
    },
    {
      "nombres":"CAHUANA CRUZ JAQUELINE",
      "dni":24718238,
      "ieId":""
    },
    {
      "nombres":"CAMPANA QUILLE VLADIMIR",
      "dni":24707126,
      "ieId":""
    },
    {
      "nombres":"CASQUINA PORTILLA WILBERT",
      "dni":80193798,
      "ieId":""
    },
    {
      "nombres":"CHOQUE FIGUEROA PERCY",
      "dni":24283776,
      "ieId":""
    },
    {
      "nombres":"CONDORIMAY FRISANCHO NELLY",
      "dni":29559193,
      "ieId":""
    },
    {
      "nombres":"FLORES CHOQUE YONY EDWIN",
      "dni":42403493,
      "ieId":""
    },
    {
      "nombres":"FLORES PUMA LIN SILVANO",
      "dni":24667062,
      "ieId":""
    },
    {
      "nombres":"APFATA VARGAS GENARO",
      "dni":24810777,
      "ieId":""
    },
    {
      "nombres":"ATAMARI MOROCCO RAUL",
      "dni":80410771,
      "ieId":""
    },
    {
      "nombres":"CHEQQUERA HUAMANI MAURO",
      "dni":30407497,
      "ieId":""
    },
    {
      "nombres":"CHURATA ORIHUELA JULIA OLGA",
      "dni":24004514,
      "ieId":""
    },
    {
      "nombres":"CRUZ LIMA JOSE LUIS",
      "dni":44039088,
      "ieId":""
    },
    {
      "nombres":"DELGADO FLOREZ LIBERTAD VICTORIA",
      "dni":24703964,
      "ieId":""
    },
    {
      "nombres":"LAYME ALVAREZ MARIBEL ALEJANDRA",
      "dni":1889512,
      "ieId":""
    },
    {
      "nombres":"MANTILLA ATAUCURI ARTURO",
      "dni":29726774,
      "ieId":""
    },
    {
      "nombres":"ORMACHEA HUANCA GIOVANNA RUTH",
      "dni":29596846,
      "ieId":""
    },
    {
      "nombres":"REYES TURPO ANDRES RODSMI",
      "dni":42736105,
      "ieId":""
    },
    {
      "nombres":"SALAS CABALLERO ROXANA",
      "dni":40461250,
      "ieId":""
    },
    {
      "nombres":"AQUIJE DESPOSORIO JESSICA MARIA",
      "dni":25800360,
      "ieId":""
    },
    {
      "nombres":"BOZA CHOQUEHUANCA OCTAVIO",
      "dni":42034962,
      "ieId":""
    },
    {
      "nombres":"CASTAÑEDA CRUZ NILO",
      "dni":9278957,
      "ieId":""
    },
    {
      "nombres":"CHIRI VELIZ GRACIELA",
      "dni":40140437,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA ROMAN PREVER",
      "dni":29580398,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUAYTA OSIS ASUNCION",
      "dni":24003448,
      "ieId":""
    },
    {
      "nombres":"CORNEJO ROCA SANDY JESSY",
      "dni":40363883,
      "ieId":""
    },
    {
      "nombres":"GONZALES CERECEDA ALFREDO",
      "dni":24576645,
      "ieId":""
    },
    {
      "nombres":"LAURENTE CAHUAYA GLADYS ROSARIO",
      "dni":44631204,
      "ieId":""
    },
    {
      "nombres":"LUQUE ARHUIRE MOISES ALFREDO",
      "dni":29646181,
      "ieId":""
    },
    {
      "nombres":"MAMANI SALAZAR GUALDO EMILIO",
      "dni":45372936,
      "ieId":""
    },
    {
      "nombres":"OBLITAS CUBA COSME",
      "dni":24808400,
      "ieId":""
    },
    {
      "nombres":"PAUCAR SOTO MIRIAM MARIBEL",
      "dni":80431615,
      "ieId":""
    },
    {
      "nombres":"PEREZ PONCE MAXIMINO POITIERS",
      "dni":80020311,
      "ieId":""
    },
    {
      "nombres":"SALAS CENTENO JUAN",
      "dni":24812681,
      "ieId":""
    },
    {
      "nombres":"SILLOCCA CRUZ DANIEL",
      "dni":24811471,
      "ieId":""
    },
    {
      "nombres":"SUCARI ZAMBRANO SANDY MARILYN",
      "dni":30862483,
      "ieId":""
    },
    {
      "nombres":"SUCASAIRE ARAPA WILFREDO",
      "dni":43237548,
      "ieId":""
    },
    {
      "nombres":"TRIBIÑOS CASCO LISSETTE MARIELA",
      "dni":45790223,
      "ieId":""
    },
    {
      "nombres":"ALA SURCO CLAUDIO",
      "dni":40675516,
      "ieId":""
    },
    {
      "nombres":"CAMA OROSCO HUBER ALBERTO",
      "dni":24712671,
      "ieId":""
    },
    {
      "nombres":"CHAMPI QUISPE CIRILO CESAR",
      "dni":24587255,
      "ieId":""
    },
    {
      "nombres":"CONDORI CCALLO JAVIER",
      "dni":24716289,
      "ieId":""
    },
    {
      "nombres":"CONDORI HUILLCA GRACIELA",
      "dni":24718568,
      "ieId":""
    },
    {
      "nombres":"CUBA HUAMANI SANTIAGO",
      "dni":24810830,
      "ieId":""
    },
    {
      "nombres":"HUAHUATICO HUALPA JORGE HECTOR",
      "dni":24698347,
      "ieId":""
    },
    {
      "nombres":"LLAIQUE NUÑONCCA KATHERINNE FILOMENA",
      "dni":30963188,
      "ieId":""
    },
    {
      "nombres":"LLANLLAYA ROJAS RAFAEL ELMER",
      "dni":29731442,
      "ieId":""
    },
    {
      "nombres":"MOTTE FLORES MAXIMILIANO",
      "dni":29703220,
      "ieId":""
    },
    {
      "nombres":"OROSCO NUÑONCA ERIBERTO AQUILES",
      "dni":24801323,
      "ieId":""
    },
    {
      "nombres":"PORTILLA YALLERCCO JESSICA",
      "dni":41778550,
      "ieId":""
    },
    {
      "nombres":"PORTUGAL ARIAS LEONOR ALEJANDRINA",
      "dni":29473938,
      "ieId":""
    },
    {
      "nombres":"QUISPE SALAZAR SOLEDAD",
      "dni":43342848,
      "ieId":""
    },
    {
      "nombres":"SAPACAYO GARCIA MODESTO VLADIMIR",
      "dni":29731876,
      "ieId":""
    },
    {
      "nombres":"TACURI CALLO YOVANA",
      "dni":41243988,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ GIRALDO ZENAIDA",
      "dni":40065970,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MERCADO NAZARIA",
      "dni":24780363,
      "ieId":""
    },
    {
      "nombres":"HUAÑAC MORALES LEONARDO",
      "dni":24780413,
      "ieId":""
    },
    {
      "nombres":"POLANCO ESCOBAR FRIDA",
      "dni":24783279,
      "ieId":""
    },
    {
      "nombres":"BEDOYA MENDOZA PEDRO FREDY",
      "dni":24811108,
      "ieId":""
    },
    {
      "nombres":"CALDERON SIVINCHA GRIMALDO",
      "dni":24784550,
      "ieId":""
    },
    {
      "nombres":"CHAMBI CHAMBI FULLIR MANUEL",
      "dni":1554844,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ MARQUEZ CLEMENTE",
      "dni":24784408,
      "ieId":""
    },
    {
      "nombres":"LAYME NARVAEZ HECTOR",
      "dni":23981285,
      "ieId":""
    },
    {
      "nombres":"MAMANI CCANSAYA EDGAR",
      "dni":24706997,
      "ieId":""
    },
    {
      "nombres":"PINTO APAZA GIOVANA",
      "dni":24808148,
      "ieId":""
    },
    {
      "nombres":"QUISPE VIZCARRA ALEJANDRO",
      "dni":24811128,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ LLACMA MATILDE",
      "dni":24813542,
      "ieId":""
    },
    {
      "nombres":"SAMBRANO SULLCASIVINCHA MARTIN",
      "dni":24780437,
      "ieId":""
    },
    {
      "nombres":"ARAMBURU GONZALES KARIN YELENA",
      "dni":9311102,
      "ieId":""
    },
    {
      "nombres":"BARRA LLACSA RUTNEYDA MERY",
      "dni":42900462,
      "ieId":""
    },
    {
      "nombres":"FLORES LLAMOCA GUADALUPE",
      "dni":43134566,
      "ieId":""
    },
    {
      "nombres":"LAYME HUILLCAIQUIPA ROSA",
      "dni":24813377,
      "ieId":""
    },
    {
      "nombres":"PALOMINO ARENAS LEONOR",
      "dni":23831544,
      "ieId":""
    },
    {
      "nombres":"PANCORBO HUARCAYA YRMA JACQUELINE",
      "dni":23806162,
      "ieId":""
    },
    {
      "nombres":"MOSQUIPA VILLACORTA LEONOR",
      "dni":23901090,
      "ieId":""
    },
    {
      "nombres":"SALAS DE OCHANTE BERTHA",
      "dni":23984959,
      "ieId":""
    },
    {
      "nombres":"ALMANZA HUAMANI SONIA",
      "dni":23957314,
      "ieId":""
    },
    {
      "nombres":"CCOLQQUE CCACHURA AYDEE",
      "dni":23997780,
      "ieId":""
    },
    {
      "nombres":"CCORI ARIAS DORIS",
      "dni":23958111,
      "ieId":""
    },
    {
      "nombres":"QUISPE GUEVARA YONI",
      "dni":23943744,
      "ieId":""
    },
    {
      "nombres":"LOAIZA MUÑOZ CIRILA NARCISA",
      "dni":25203911,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMANI YOLANDA",
      "dni":25000400,
      "ieId":""
    },
    {
      "nombres":"AGUAYO MORALES RENE HORACIO",
      "dni":23924270,
      "ieId":""
    },
    {
      "nombres":"AYMA ROMERO TANIA",
      "dni":25062106,
      "ieId":""
    },
    {
      "nombres":"BELLIDO AGUIRRE GUALBERTO",
      "dni":25061719,
      "ieId":""
    },
    {
      "nombres":"CORDOVA GRANILLA MARIA FRIDA",
      "dni":25061523,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ OLIVERA JUAN BAUTISTA",
      "dni":25061734,
      "ieId":""
    },
    {
      "nombres":"MAR VILLAFUERTE JOSE",
      "dni":25060401,
      "ieId":""
    },
    {
      "nombres":"VARGAS ARAOZ CESAR AUGUSTO",
      "dni":4825763,
      "ieId":""
    },
    {
      "nombres":"VILLANUEVA YARIN ROSA MARIA",
      "dni":23976540,
      "ieId":""
    },
    {
      "nombres":"ALFARO HUAYLLANI LEON",
      "dni":25063984,
      "ieId":""
    },
    {
      "nombres":"AVILES MEJIA ANA CLAUDIA",
      "dni":23940344,
      "ieId":""
    },
    {
      "nombres":"CASTILLO FLORES SONIA",
      "dni":25061897,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA ANDIA NANCY TRINIDAD",
      "dni":23997233,
      "ieId":""
    },
    {
      "nombres":"HERRERA ZARATE AQUILINA",
      "dni":25061780,
      "ieId":""
    },
    {
      "nombres":"PACHECO BLANCO CESAR",
      "dni":25060008,
      "ieId":""
    },
    {
      "nombres":"PRADO RONDAN VICTOR",
      "dni":24460833,
      "ieId":""
    },
    {
      "nombres":"ALFARO TAPIA MARIO ASCENCION",
      "dni":23807042,
      "ieId":""
    },
    {
      "nombres":"CACERES MONTERROSO JESUS",
      "dni":23987497,
      "ieId":""
    },
    {
      "nombres":"CRUZ MAMANI SATURNINA SALOME",
      "dni":23911583,
      "ieId":""
    },
    {
      "nombres":"CUSI VALER PILAR",
      "dni":23939426,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA NUÑEZ CLARA",
      "dni":25321327,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ VEGA GEORGINA",
      "dni":23986308,
      "ieId":""
    },
    {
      "nombres":"PAREJA BENITEZ MADONA",
      "dni":45239644,
      "ieId":""
    },
    {
      "nombres":"ZANS LOAYZA JUAN",
      "dni":23953228,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ RODRIGUEZ LUZ CATALINA",
      "dni":23935783,
      "ieId":""
    },
    {
      "nombres":"CHALLCO SAIRE MANUEL JORGE",
      "dni":25065607,
      "ieId":""
    },
    {
      "nombres":"TTUPA CARRILLO CARLOTA",
      "dni":25066311,
      "ieId":""
    },
    {
      "nombres":"CANSAYA VALER YULI",
      "dni":23947929,
      "ieId":""
    },
    {
      "nombres":"LUZA MEZA ADRIANA MARISOL",
      "dni":23837554,
      "ieId":""
    },
    {
      "nombres":"CUELLAR HUAMAN EFRAIN",
      "dni":24961520,
      "ieId":""
    },
    {
      "nombres":"MOLERO HUARCA ZITO",
      "dni":23946490,
      "ieId":""
    },
    {
      "nombres":"SAIRE ALDAZABAL JUVENAL",
      "dni":42152140,
      "ieId":""
    },
    {
      "nombres":"FARFAN DURAN GREGORIO",
      "dni":25060358,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAYPAR RUDECINDO",
      "dni":25060030,
      "ieId":""
    },
    {
      "nombres":"GAMARRA SAHUARAURA DELIA CRISTINA",
      "dni":23808605,
      "ieId":""
    },
    {
      "nombres":"GAMARRA SAHUARAURA SALUSTIO",
      "dni":23805684,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ OLMEDA FANNY",
      "dni":40879603,
      "ieId":""
    },
    {
      "nombres":"POLO PORTILLO MARCO",
      "dni":23860358,
      "ieId":""
    },
    {
      "nombres":"SUCA TUNQUI EMERSON",
      "dni":46108216,
      "ieId":""
    },
    {
      "nombres":"VARGAS LEON LUIS",
      "dni":25063767,
      "ieId":""
    },
    {
      "nombres":"VILLAGARCIA PILARES FELIPE SANTIAGO",
      "dni":23989155,
      "ieId":""
    },
    {
      "nombres":"LEVA SUPA ALFREDO",
      "dni":25000219,
      "ieId":""
    },
    {
      "nombres":"MADERA DE BOCANGEL MARIA",
      "dni":31423382,
      "ieId":""
    },
    {
      "nombres":"RONCO SUPA GRACIELA",
      "dni":24388341,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ QUISPE SONIA MARTINA",
      "dni":25001173,
      "ieId":""
    },
    {
      "nombres":"HILASACA VARGAS LIDIA",
      "dni":1991929,
      "ieId":""
    },
    {
      "nombres":"HUALLA HUAYCOCHEA MARGOT NATALIA",
      "dni":23925603,
      "ieId":""
    },
    {
      "nombres":"CARDENAS CANCHA EDILBERTO",
      "dni":23964590,
      "ieId":""
    },
    {
      "nombres":"PAGUADA ANDRADE WILBERT",
      "dni":24383072,
      "ieId":""
    },
    {
      "nombres":"VARGAS LUNA NELY",
      "dni":45413789,
      "ieId":""
    },
    {
      "nombres":"YUCA CCORIMANYA MAGALHI",
      "dni":42323537,
      "ieId":""
    },
    {
      "nombres":"PINTO HUAMANI ANTONIO",
      "dni":24802163,
      "ieId":""
    },
    {
      "nombres":"QUISPE MOLINA HERMELINDA",
      "dni":23901921,
      "ieId":""
    },
    {
      "nombres":"TERZI YANQUE ELIZABETH OLGA",
      "dni":41774829,
      "ieId":""
    },
    {
      "nombres":"CONCHACALLE CUMPA JOSE LUIS",
      "dni":40051960,
      "ieId":""
    },
    {
      "nombres":"FRANCO QUISPE BENEDICTA",
      "dni":23942810,
      "ieId":""
    },
    {
      "nombres":"ROJAS LOPINTA CESAR RAUL",
      "dni":23842070,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ MOLINA TATIANA",
      "dni":23926174,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ VERA DE TRUJI LISSETH INES",
      "dni":23849934,
      "ieId":""
    },
    {
      "nombres":"VALENCIA FARFAN JOVITA VILMA",
      "dni":23943658,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE RIOS VICENTINA",
      "dni":25062105,
      "ieId":""
    },
    {
      "nombres":"ALFARO TAPIA ANIBAL PEDRO",
      "dni":23813605,
      "ieId":""
    },
    {
      "nombres":"APAZA APARICIO CARLOS DANIEL",
      "dni":40068591,
      "ieId":""
    },
    {
      "nombres":"ARIVILCA ALIAGA VILMA",
      "dni":23963349,
      "ieId":""
    },
    {
      "nombres":"ARREGUI LETONA DOMINGA",
      "dni":23870176,
      "ieId":""
    },
    {
      "nombres":"CALLAYMARA AYQUIPA RITA",
      "dni":41341042,
      "ieId":""
    },
    {
      "nombres":"CHACON CACERES MARIA VICTORIA",
      "dni":25012091,
      "ieId":""
    },
    {
      "nombres":"CHACON GUILLEN CARMEN ROSA",
      "dni":23942429,
      "ieId":""
    },
    {
      "nombres":"CONDORI HUISA RAUL",
      "dni":23860167,
      "ieId":""
    },
    {
      "nombres":"CRUZ TINCO CESAR",
      "dni":41271221,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN SURCO RUCKMINY",
      "dni":24003041,
      "ieId":""
    },
    {
      "nombres":"DELGADO ROJAS ROLANDO",
      "dni":23834301,
      "ieId":""
    },
    {
      "nombres":"HAÑARI CALIZAYA CEFERINO ADRIAN",
      "dni":25062066,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA CRUZ LISBET",
      "dni":24704914,
      "ieId":""
    },
    {
      "nombres":"LUNA KJURO MARLENE",
      "dni":23975899,
      "ieId":""
    },
    {
      "nombres":"MAMANI APAZA BERNARDINO BASILIO",
      "dni":23850234,
      "ieId":""
    },
    {
      "nombres":"MAMANI NINA PEDRO RAUL",
      "dni":24712385,
      "ieId":""
    },
    {
      "nombres":"MOLINA ALAGON MANUEL",
      "dni":25061806,
      "ieId":""
    },
    {
      "nombres":"PARICOTO MAYTA HONORATA",
      "dni":25062121,
      "ieId":""
    },
    {
      "nombres":"PUMA MESCCO EDGAR",
      "dni":41403640,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES MONSON ADRIELA",
      "dni":23850788,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ ROMAN MILTON JESUS",
      "dni":43621276,
      "ieId":""
    },
    {
      "nombres":"SEGOVIA QUIN MARIA FORTUNATA",
      "dni":23821809,
      "ieId":""
    },
    {
      "nombres":"TAMAYO TAMATA AURA MERCEDES",
      "dni":23953859,
      "ieId":""
    },
    {
      "nombres":"VALENCIA MOLLEDA ITALA JACINTA",
      "dni":23881769,
      "ieId":""
    },
    {
      "nombres":"VILLA SAIRE ALBERTO",
      "dni":25060064,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA ESCALANTE PEDRO NOLASCO",
      "dni":25060691,
      "ieId":""
    },
    {
      "nombres":"AGUILAR HUAMAN ANALI",
      "dni":43472268,
      "ieId":""
    },
    {
      "nombres":"ALFARO TAPIA CONNIE ENID",
      "dni":23859878,
      "ieId":""
    },
    {
      "nombres":"CARDENAS MATUTE ROMULO",
      "dni":23921021,
      "ieId":""
    },
    {
      "nombres":"COLLANTES ROMOACCA JANET",
      "dni":42710010,
      "ieId":""
    },
    {
      "nombres":"CUCHO ZAMORA SANTOS",
      "dni":23848502,
      "ieId":""
    },
    {
      "nombres":"HUAMANÑAHUI DURAND MARIA VERONICA",
      "dni":23979518,
      "ieId":""
    },
    {
      "nombres":"LOAIZA DELGADO ELBA ELIZABETH",
      "dni":23806468,
      "ieId":""
    },
    {
      "nombres":"LOZANO NINA JUAN",
      "dni":24673048,
      "ieId":""
    },
    {
      "nombres":"RONCO SUPA MARTHA VIRGINIA",
      "dni":24389546,
      "ieId":""
    },
    {
      "nombres":"SALAZAR SEGOVIA EDMUNDO",
      "dni":23955299,
      "ieId":""
    },
    {
      "nombres":"SUCNO YEPEZ YULI YANET",
      "dni":41330324,
      "ieId":""
    },
    {
      "nombres":"SULLCA SULLCA WILDER GERARDO",
      "dni":41424296,
      "ieId":""
    },
    {
      "nombres":"YUCRA CHAVEZ HILDA",
      "dni":23863535,
      "ieId":""
    },
    {
      "nombres":"CONDORI GOMEZ CESAR RUBEN",
      "dni":43697519,
      "ieId":""
    },
    {
      "nombres":"CUSI CCUNO IRMA",
      "dni":42563145,
      "ieId":""
    },
    {
      "nombres":"DAVILA PILARES MAGDA",
      "dni":24001957,
      "ieId":""
    },
    {
      "nombres":"HUAHUASONCCO PONCE DIONIDAS",
      "dni":40232987,
      "ieId":""
    },
    {
      "nombres":"MAMANI GOMEZ JUAN CARLOS",
      "dni":42982672,
      "ieId":""
    },
    {
      "nombres":"MONTEJO LINARES MERCEDES",
      "dni":23820475,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CASTRO ELMER",
      "dni":42483933,
      "ieId":""
    },
    {
      "nombres":"SUMA ERAZO ELMER",
      "dni":44603797,
      "ieId":""
    },
    {
      "nombres":"VICENTE CRUZ MARIA DEL ROSARIO",
      "dni":23852606,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHECCORI SIOBHAN",
      "dni":24296237,
      "ieId":""
    },
    {
      "nombres":"VILCA RAMOS NANCY LISBET",
      "dni":42457965,
      "ieId":""
    },
    {
      "nombres":"CARCAGNO PUMA WILLAMS MAURO",
      "dni":1487249,
      "ieId":""
    },
    {
      "nombres":"SOTELO VALER LEONIDAS ALEJANDRO",
      "dni":23853161,
      "ieId":""
    },
    {
      "nombres":"CARRASCO TAPIA GOYA",
      "dni":23875994,
      "ieId":""
    },
    {
      "nombres":"AGUIRRE PASTOR NOHEMI LUCINA",
      "dni":23859060,
      "ieId":""
    },
    {
      "nombres":"BACA ALVARADO NELIDA",
      "dni":23946083,
      "ieId":""
    },
    {
      "nombres":"PACCORI PEÑA CAROLINA",
      "dni":41348394,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE ELENA",
      "dni":42664666,
      "ieId":""
    },
    {
      "nombres":"SONCCO HUAMANI JANET",
      "dni":43381020,
      "ieId":""
    },
    {
      "nombres":"CARLOS HUALLPA SABINA",
      "dni":40979026,
      "ieId":""
    },
    {
      "nombres":"QUINO QUINO ELENA",
      "dni":24467554,
      "ieId":""
    },
    {
      "nombres":"CORDOVA SALLO MARIBEL",
      "dni":42416721,
      "ieId":""
    },
    {
      "nombres":"CARCAUSTO HUANCA ZENOVIA MARILUZ",
      "dni":40018753,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA RAMOS LOURDES AUREA",
      "dni":23825582,
      "ieId":""
    },
    {
      "nombres":"CALLOQUISPE CACERES MARIA DEL PILAR",
      "dni":23870043,
      "ieId":""
    },
    {
      "nombres":"CAJAVILCA CHOQUEMAMANI MARLENY",
      "dni":46461244,
      "ieId":""
    },
    {
      "nombres":"MEJIA ALDEA CARMEN ROSA",
      "dni":25062258,
      "ieId":""
    },
    {
      "nombres":"CHOQUE FRISANCHO YONY",
      "dni":24389356,
      "ieId":""
    },
    {
      "nombres":"SALCEDO MENDOZA EPIFANIA CARMEN",
      "dni":24703372,
      "ieId":""
    },
    {
      "nombres":"CARRILLO VALVERDE CARLOS SIXTO",
      "dni":23939041,
      "ieId":""
    },
    {
      "nombres":"LOAYZA CAJIGAS BERY GEORGINA",
      "dni":23984789,
      "ieId":""
    },
    {
      "nombres":"QUISPE ESPINOZA BERTHA",
      "dni":23943252,
      "ieId":""
    },
    {
      "nombres":"CANAHUIRE CONDORI DOMITILA",
      "dni":24705694,
      "ieId":""
    },
    {
      "nombres":"CHOQUE SANCHEZ ROSA",
      "dni":23822564,
      "ieId":""
    },
    {
      "nombres":"CRUZ MAMANI DINA",
      "dni":23935800,
      "ieId":""
    },
    {
      "nombres":"HUAMAN APAZA DELIA",
      "dni":42337672,
      "ieId":""
    },
    {
      "nombres":"MERCADO PEÑA RITA NATIVIDAD",
      "dni":23825745,
      "ieId":""
    },
    {
      "nombres":"MORA ANTITUPA SILVIA ALEJA",
      "dni":23861381,
      "ieId":""
    },
    {
      "nombres":"NECOCHEA CASTILLO PEDRO TEDY",
      "dni":23814571,
      "ieId":""
    },
    {
      "nombres":"PABLO CALLAPIÑA PLACIDA",
      "dni":23906428,
      "ieId":""
    },
    {
      "nombres":"UGARTE MOLINA MIGUEL JESUS",
      "dni":23813784,
      "ieId":""
    },
    {
      "nombres":"VICENTE PASTOR ROSARIO MILAGROS",
      "dni":23871182,
      "ieId":""
    },
    {
      "nombres":"WARTON ACUÑA JENNIFER",
      "dni":45077994,
      "ieId":""
    },
    {
      "nombres":"YANA HUILLCA SOLEDAD MARCIANA",
      "dni":24002067,
      "ieId":""
    },
    {
      "nombres":"ZAVALA CHUSPE VILMA",
      "dni":23990384,
      "ieId":""
    },
    {
      "nombres":"ANGULO ITURRIAGA AYDEE",
      "dni":23859631,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE DIAZ GLADIS",
      "dni":25008749,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA NUÑEZ LEONOR",
      "dni":25302404,
      "ieId":""
    },
    {
      "nombres":"FLOREZ FLOREZ GENARO PEDRO",
      "dni":25060055,
      "ieId":""
    },
    {
      "nombres":"FLOREZ RODRIGUEZ KERNER",
      "dni":44372946,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CHOQUE FRIDA",
      "dni":23995832,
      "ieId":""
    },
    {
      "nombres":"IDME CONDORI HAYDEE",
      "dni":1563652,
      "ieId":""
    },
    {
      "nombres":"LIMA FARFAN HENRY",
      "dni":25061842,
      "ieId":""
    },
    {
      "nombres":"PILARES BLANCO ANTONIA",
      "dni":25181750,
      "ieId":""
    },
    {
      "nombres":"QUECAÑO QUECAÑO VILMA",
      "dni":23814719,
      "ieId":""
    },
    {
      "nombres":"SAIRE HUAMAN FREDY EDMUNDO",
      "dni":25320256,
      "ieId":""
    },
    {
      "nombres":"APAZA APAZA FREDY RENE",
      "dni":23954739,
      "ieId":""
    },
    {
      "nombres":"AQUINO MAQUERA TEOFILA",
      "dni":24716958,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL GUTIERREZ MAXIMO GASPAR",
      "dni":23820622,
      "ieId":""
    },
    {
      "nombres":"CHALLCO YAÑAC LOURDES",
      "dni":25301032,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE SEGOVIA MARLENY",
      "dni":25002709,
      "ieId":""
    },
    {
      "nombres":"HOLGADO CASTILLO GREGORIA",
      "dni":24476795,
      "ieId":""
    },
    {
      "nombres":"ORCCOHUARANCCA TTITO LUCHA",
      "dni":41756013,
      "ieId":""
    },
    {
      "nombres":"TORRES HUAMAN MIGUELA",
      "dni":25304871,
      "ieId":""
    },
    {
      "nombres":"GOMEZ ZAMATA BACILIDES",
      "dni":40360765,
      "ieId":""
    },
    {
      "nombres":"JANAMPA SANTA CRUZ DANIEL",
      "dni":24392772,
      "ieId":""
    },
    {
      "nombres":"PICHIHUA MORA MARILU",
      "dni":23951818,
      "ieId":""
    },
    {
      "nombres":"RIVAS CONDORI ROSARIO",
      "dni":40022311,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BATALLANOS BERNA",
      "dni":80179928,
      "ieId":""
    },
    {
      "nombres":"ITURRIAGA BARCENA JOSE LUIS",
      "dni":23954454,
      "ieId":""
    },
    {
      "nombres":"ÑAUPA QUISPE LADY",
      "dni":40092939,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR GONZALES SANTIAGO",
      "dni":23806630,
      "ieId":""
    },
    {
      "nombres":"PERCCA CARREÑO PATRICIA",
      "dni":40869955,
      "ieId":""
    },
    {
      "nombres":"QUISPE VARGAS LUIS ALBERTO",
      "dni":44203246,
      "ieId":""
    },
    {
      "nombres":"COAYLA NOVA MARTHA EDELINA",
      "dni":23844974,
      "ieId":""
    },
    {
      "nombres":"GONZALES BEJAR MARLY AMANDA",
      "dni":25003081,
      "ieId":""
    },
    {
      "nombres":"GUZMAN ALARCON ZENOVIA",
      "dni":31427217,
      "ieId":""
    },
    {
      "nombres":"CHIPANA BORDA YOLANDA",
      "dni":23804837,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR CHAUCHAS JASMITH FABIOLA",
      "dni":41015042,
      "ieId":""
    },
    {
      "nombres":"MAYORGA LLAMOCCA DE HUA EUSEBIA CAROLINA",
      "dni":23951043,
      "ieId":""
    },
    {
      "nombres":"MENDOZA SULLCA ZORAIDA",
      "dni":25201141,
      "ieId":""
    },
    {
      "nombres":"VILLA HUARCAYA SONIA",
      "dni":7635761,
      "ieId":""
    },
    {
      "nombres":"CASTRO ARMAS VILMA",
      "dni":23958416,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI MONTIEL ANA MARIA",
      "dni":23950052,
      "ieId":""
    },
    {
      "nombres":"VALENCIA DEZA VICTOR",
      "dni":24378132,
      "ieId":""
    },
    {
      "nombres":"CHOCCATA ALCCA MARIO",
      "dni":42434177,
      "ieId":""
    },
    {
      "nombres":"CISNEROS AYQUIPA BRAULIO",
      "dni":25002985,
      "ieId":""
    },
    {
      "nombres":"CRUZ ZAMORA BELEN VIOLETA",
      "dni":40773046,
      "ieId":""
    },
    {
      "nombres":"CUSI MENDOZA DANIEL",
      "dni":23865733,
      "ieId":""
    },
    {
      "nombres":"CANSAYA VALER SILVIA",
      "dni":23987603,
      "ieId":""
    },
    {
      "nombres":"CASTRO COSIO WILDOR",
      "dni":23960475,
      "ieId":""
    },
    {
      "nombres":"MEDINA VILLEGAS JORGE",
      "dni":24460052,
      "ieId":""
    },
    {
      "nombres":"PABLO CALLAPIÑA JUAN BAUTISTA",
      "dni":25060526,
      "ieId":""
    },
    {
      "nombres":"PABLO CALLAPIÑA WILBERT SAMUEL",
      "dni":25062044,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN HUALLPAYUN NANCY",
      "dni":24006621,
      "ieId":""
    },
    {
      "nombres":"TINCO SINCE ALICIA",
      "dni":24000156,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CACERES JUAN",
      "dni":24382510,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ PINARES JUSTINO",
      "dni":23916573,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CHAVEZ HECTOR ISIDRO",
      "dni":25062031,
      "ieId":""
    },
    {
      "nombres":"PERALTA COLLQUE DANIEL",
      "dni":44151350,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MATHEUS RAFAEL SANTOS",
      "dni":23870082,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ QUISPE HERMOGENES",
      "dni":23843681,
      "ieId":""
    },
    {
      "nombres":"BRAGAGNINI FLORES ZONIA GRISELDA",
      "dni":23879218,
      "ieId":""
    },
    {
      "nombres":"FARFAN CARLOS MARIO",
      "dni":31341447,
      "ieId":""
    },
    {
      "nombres":"HUILLCA ORDOÑEZ MARIA AVELINA",
      "dni":45077994,
      "ieId":""
    },
    {
      "nombres":"BOMBILLA PUMAYALLI NAY RUTH",
      "dni":25061695,
      "ieId":""
    },
    {
      "nombres":"BELLIDO AGUIRRE ROSMERI",
      "dni":25062209,
      "ieId":""
    },
    {
      "nombres":"CACERES SILVA ISABEL",
      "dni":23865551,
      "ieId":""
    },
    {
      "nombres":"GAMBOA DE SALAZAR LUCILA SAIDA",
      "dni":23909307,
      "ieId":""
    },
    {
      "nombres":"ARENAS HUALLPAMAYTA TANIA",
      "dni":23989243,
      "ieId":""
    },
    {
      "nombres":"CARRASCO FLORES JORGE",
      "dni":25060241,
      "ieId":""
    },
    {
      "nombres":"TITO ESQUIVEL NELY",
      "dni":25200927,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CARPIO RINA",
      "dni":25062196,
      "ieId":""
    },
    {
      "nombres":"ITURRIAGA VERDURA DILMA",
      "dni":23947166,
      "ieId":""
    },
    {
      "nombres":"RAMOS ORDOÑEZ MILAGROS KARINA",
      "dni":42145742,
      "ieId":""
    },
    {
      "nombres":"BARCENA CARRASCO GINA",
      "dni":44230795,
      "ieId":""
    },
    {
      "nombres":"CHINO CHAMBI EDGAR",
      "dni":23857510,
      "ieId":""
    },
    {
      "nombres":"CRUZ VALDEZ VICTOR",
      "dni":23806172,
      "ieId":""
    },
    {
      "nombres":"DIAZ CUADROS SAMUEL",
      "dni":24717576,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ DALENS JUAN",
      "dni":25061746,
      "ieId":""
    },
    {
      "nombres":"HUALLPA QUIÑONES WILLY",
      "dni":80004484,
      "ieId":""
    },
    {
      "nombres":"HUAMAN YLLA ELIAZAR",
      "dni":23999507,
      "ieId":""
    },
    {
      "nombres":"ORCCOHUARANCCA CONDORCH TANIA",
      "dni":43040377,
      "ieId":""
    },
    {
      "nombres":"PEREZ BAEZ MAGALI ROCIO",
      "dni":23850351,
      "ieId":""
    },
    {
      "nombres":"PINARES ELGUERA EDGAR",
      "dni":23856964,
      "ieId":""
    },
    {
      "nombres":"PIZARRO VILLAR NINOSKA OLINDA",
      "dni":20724815,
      "ieId":""
    },
    {
      "nombres":"POCCO CONCHA JUAN CARLOS",
      "dni":24705310,
      "ieId":""
    },
    {
      "nombres":"QUIZA LIMA HUGO",
      "dni":23979430,
      "ieId":""
    },
    {
      "nombres":"ROJAS CCORIMANYA EDITH",
      "dni":40854893,
      "ieId":""
    },
    {
      "nombres":"SANDOVAL CABALLERO KATTY SUELEN",
      "dni":41656123,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ QUISPE VICTORIA",
      "dni":23855899,
      "ieId":""
    },
    {
      "nombres":"VALER CARPIO FANY",
      "dni":40638985,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA YMA JAVIER",
      "dni":41620684,
      "ieId":""
    },
    {
      "nombres":"APAZA MAMANI GRACIELA",
      "dni":24704268,
      "ieId":""
    },
    {
      "nombres":"CACERES DUEÑAS JORGE",
      "dni":40587438,
      "ieId":""
    },
    {
      "nombres":"CRUZ PINO LUZ ELIANA",
      "dni":42128337,
      "ieId":""
    },
    {
      "nombres":"FLORES DE LA SOTA PLACIDO",
      "dni":24006067,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CAJIGAS BERTHA",
      "dni":23958175,
      "ieId":""
    },
    {
      "nombres":"MACEDO VERA EDEVALDO",
      "dni":42450018,
      "ieId":""
    },
    {
      "nombres":"MAMANI CHOQUENAYRA DANTE",
      "dni":23856506,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE EDWIN EDDY",
      "dni":41963414,
      "ieId":""
    },
    {
      "nombres":"PINTO PAREDES LOURDES CRISTINA",
      "dni":23857449,
      "ieId":""
    },
    {
      "nombres":"PUMA ANCCO JORGE ALBERTO",
      "dni":23992110,
      "ieId":""
    },
    {
      "nombres":"PUMA CONDORI JUAN CARLOS",
      "dni":40650654,
      "ieId":""
    },
    {
      "nombres":"QUISPE ORDOÑEZ SANTIAGO",
      "dni":40450841,
      "ieId":""
    },
    {
      "nombres":"SARDON ESCOBAR SARA",
      "dni":40341047,
      "ieId":""
    },
    {
      "nombres":"VILLA SAIRE FELICIA",
      "dni":23905459,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA CHIRINOS NELLY",
      "dni":23948280,
      "ieId":""
    },
    {
      "nombres":"AYALA CARDENAS NOEMI",
      "dni":23948934,
      "ieId":""
    },
    {
      "nombres":"CCASA QUISPE JHONY",
      "dni":46543712,
      "ieId":""
    },
    {
      "nombres":"CHINO MAMANI ROBERTO",
      "dni":40457124,
      "ieId":""
    },
    {
      "nombres":"CHIRINOS GONGORA JUANA JOSEFINA",
      "dni":29515059,
      "ieId":""
    },
    {
      "nombres":"FUENTES DELGADO SONIA LUISA",
      "dni":23921722,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ RAMOS EDGAR",
      "dni":40837056,
      "ieId":""
    },
    {
      "nombres":"HERRERA CATARI HUGO",
      "dni":40236679,
      "ieId":""
    },
    {
      "nombres":"HILARI CCAMA ROBERTO",
      "dni":24705329,
      "ieId":""
    },
    {
      "nombres":"ZAVALETA SUMA BRICEIDA",
      "dni":40708839,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CCASA JUAN",
      "dni":23864058,
      "ieId":""
    },
    {
      "nombres":"ALARCON QUINTANILLA RUTH MARY",
      "dni":23947353,
      "ieId":""
    },
    {
      "nombres":"ANGULO ITURRIAGA VLADIMIRO",
      "dni":40701816,
      "ieId":""
    },
    {
      "nombres":"LUQUE QUEA SAMUEL",
      "dni":1321377,
      "ieId":""
    },
    {
      "nombres":"MONTERROSO FARFAN AMBROCIA",
      "dni":23925997,
      "ieId":""
    },
    {
      "nombres":"RUPA ROZAS YONY",
      "dni":23946295,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA VALENCIAS SILVESTRE",
      "dni":23937662,
      "ieId":""
    },
    {
      "nombres":"AVALOS CUELLAR SARA",
      "dni":42318893,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS CHILO VERONICA",
      "dni":23988602,
      "ieId":""
    },
    {
      "nombres":"ESQUIVEL RAMOS EDISON",
      "dni":23985210,
      "ieId":""
    },
    {
      "nombres":"QUICO FLORES LENI",
      "dni":40298364,
      "ieId":""
    },
    {
      "nombres":"SOTO BARRIENTOS LIZBETH",
      "dni":43975811,
      "ieId":""
    },
    {
      "nombres":"CARLOS FLOREZ JAYNE",
      "dni":23933630,
      "ieId":""
    },
    {
      "nombres":"PAZ PEÑA NELY ANTONIA",
      "dni":23959850,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA APARICIO VIQUE",
      "dni":24576881,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA PAZ RENZO DENIS",
      "dni":41219256,
      "ieId":""
    },
    {
      "nombres":"GOMEZ MAYTA DAVID EDERSON",
      "dni":44746769,
      "ieId":""
    },
    {
      "nombres":"DELGADO CUSI YESICA ROXANA",
      "dni":24301353,
      "ieId":""
    },
    {
      "nombres":"ORIHUELA SUYO YUDID",
      "dni":23949765,
      "ieId":""
    },
    {
      "nombres":"MATTO MORA FLORENTINA",
      "dni":23831415,
      "ieId":""
    },
    {
      "nombres":"HERMOZA LACUTA MARIA YSABEL",
      "dni":10425114,
      "ieId":""
    },
    {
      "nombres":"CASTRO CORDOVA LILIA BELEN",
      "dni":44955574,
      "ieId":""
    },
    {
      "nombres":"CRUZ ESCALANTE ALBERTO",
      "dni":25217607,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ SUTTA RONALD",
      "dni":23895743,
      "ieId":""
    },
    {
      "nombres":"HUISA CALLOQUISPE MARIA GUILLERMINA",
      "dni":24564515,
      "ieId":""
    },
    {
      "nombres":"LOAYZA MEDINA ELVIS",
      "dni":23863277,
      "ieId":""
    },
    {
      "nombres":"MONGE DE LOAYZA VALERIANA",
      "dni":23887072,
      "ieId":""
    },
    {
      "nombres":"PORRAS SANCHEZ EUFRACIO",
      "dni":23805373,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAÑEC NORMIÑA",
      "dni":23947575,
      "ieId":""
    },
    {
      "nombres":"ROMERO PARICAHUA GUSTAVO JULIAN",
      "dni":23802012,
      "ieId":""
    },
    {
      "nombres":"CASTRO CORDOVA MILTON",
      "dni":23992594,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA MUÑOZ PRIMITIVO",
      "dni":23948320,
      "ieId":""
    },
    {
      "nombres":"JARA RAMIREZ WALTER SIMON",
      "dni":23879722,
      "ieId":""
    },
    {
      "nombres":"LAZO RIMACHE FERRER",
      "dni":23947745,
      "ieId":""
    },
    {
      "nombres":"OJEDA UÑAPILLCO MARGOT",
      "dni":23984608,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE SONIA",
      "dni":25308157,
      "ieId":""
    },
    {
      "nombres":"TAPIA CHAMBILLA ENRIQUE",
      "dni":23822321,
      "ieId":""
    },
    {
      "nombres":"CAMPANA CURILLO MIRIAM",
      "dni":23902640,
      "ieId":""
    },
    {
      "nombres":"MASIAS USCAMAYTA MARIA GUADALUPE",
      "dni":25319494,
      "ieId":""
    },
    {
      "nombres":"SEVILLANOS GRAJEDA PAMELA",
      "dni":42465857,
      "ieId":""
    },
    {
      "nombres":"VALER CARPIO NIDIA",
      "dni":23998060,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA RAMOS GERTRUDES VICTORIA",
      "dni":23829101,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA RAMOS NIEVES LIDIA",
      "dni":23859222,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA MENDOZA JULIO ULADISLAO",
      "dni":23994816,
      "ieId":""
    },
    {
      "nombres":"OVALLE BORDA DE GUEVARA JUANA",
      "dni":23808801,
      "ieId":""
    },
    {
      "nombres":"PAREDES GIL EDITH BRISENIA",
      "dni":40923293,
      "ieId":""
    },
    {
      "nombres":"PEREZ TABOADA MARIA LUISA",
      "dni":23952519,
      "ieId":""
    },
    {
      "nombres":"BAEZ BAUTISTA MARIA ELENA",
      "dni":23991959,
      "ieId":""
    },
    {
      "nombres":"CONDORI CUSIHUAMAN JUAN ARMANDO",
      "dni":23945693,
      "ieId":""
    },
    {
      "nombres":"MUELLE CCOLQQUE JUANITA",
      "dni":23870239,
      "ieId":""
    },
    {
      "nombres":"PACHECO JURADO JORGE GUIDO",
      "dni":23918321,
      "ieId":""
    },
    {
      "nombres":"CRUZ TISNADO SEGUNDINA",
      "dni":23820039,
      "ieId":""
    },
    {
      "nombres":"BEDIA SINGONA LUCILA",
      "dni":23978846,
      "ieId":""
    },
    {
      "nombres":"MIRANDA PELAEZ MARGOT OTILIA",
      "dni":23923054,
      "ieId":""
    },
    {
      "nombres":"MOLINA LEON LUCAS",
      "dni":31024152,
      "ieId":""
    },
    {
      "nombres":"QUISPE CUITO ARISTIDES",
      "dni":23876042,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAMAN MIGUEL",
      "dni":45165018,
      "ieId":""
    },
    {
      "nombres":"LASTRA GOMEZ JULIO CESAR",
      "dni":23817501,
      "ieId":""
    },
    {
      "nombres":"SUCLLI CALLAPIÑA KELI",
      "dni":41746449,
      "ieId":""
    },
    {
      "nombres":"YUCRA YUCRA MARTINA",
      "dni":1304795,
      "ieId":""
    },
    {
      "nombres":"BEJAR CALANCHA VICTORINA",
      "dni":23915811,
      "ieId":""
    },
    {
      "nombres":"CHOQQUE USCAMAYTA VENANCIO",
      "dni":23983864,
      "ieId":""
    },
    {
      "nombres":"FLORES HUALLPA YOVANA",
      "dni":42461236,
      "ieId":""
    },
    {
      "nombres":"CHOQUE FRISANCHO JESUS NATIVIDAD",
      "dni":24371531,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR GONZALES LUZMILA",
      "dni":23875728,
      "ieId":""
    },
    {
      "nombres":"ATAUCURY GALDO HAYDEE",
      "dni":25074171,
      "ieId":""
    },
    {
      "nombres":"CABRERA CERVANTES MARY LUZ",
      "dni":23977838,
      "ieId":""
    },
    {
      "nombres":"HUAMANI ACCOSTUPA YESIKA",
      "dni":43809347,
      "ieId":""
    },
    {
      "nombres":"INQUILTUPA AUCCAPUMA FREDY",
      "dni":25311619,
      "ieId":""
    },
    {
      "nombres":"LOAIZA GOMEZ WILBERT",
      "dni":23846529,
      "ieId":""
    },
    {
      "nombres":"LOAIZA SILVA EDUARDO",
      "dni":25074172,
      "ieId":""
    },
    {
      "nombres":"LUCANA ZUÑIGA VIVIANO AURELIO",
      "dni":23803906,
      "ieId":""
    },
    {
      "nombres":"MAMANI ORMACHEA TEODORA",
      "dni":23886011,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE NATIVIDAD MARLENI",
      "dni":42094404,
      "ieId":""
    },
    {
      "nombres":"QUISPE FRISANCHO LUZ MARINA",
      "dni":41891618,
      "ieId":""
    },
    {
      "nombres":"ROJAS ZAVALETA MIRIAN",
      "dni":40612417,
      "ieId":""
    },
    {
      "nombres":"SALAS FERNANDEZ JOSE",
      "dni":23990479,
      "ieId":""
    },
    {
      "nombres":"TORRES UGARTE FELIMON",
      "dni":23928014,
      "ieId":""
    },
    {
      "nombres":"YABAR SOTO ABRAHAM",
      "dni":23959813,
      "ieId":""
    },
    {
      "nombres":"BANDA CHINO OSCAR WILFREDO",
      "dni":80267082,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS CURI CRISPIN",
      "dni":23939309,
      "ieId":""
    },
    {
      "nombres":"CALDERON CHOQUE JUAN MARIO",
      "dni":1770389,
      "ieId":""
    },
    {
      "nombres":"CASTILLO SANCHEZ WILBER JESUS",
      "dni":23801394,
      "ieId":""
    },
    {
      "nombres":"CHACON CHAVEZ SILVIA",
      "dni":23825875,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA PAUCAR BEHERTA",
      "dni":23937153,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS ATAUCHI MELQUIADES",
      "dni":25319726,
      "ieId":""
    },
    {
      "nombres":"HUACHO SALAS WILLY",
      "dni":41662794,
      "ieId":""
    },
    {
      "nombres":"HUANACO KANA MARTIN",
      "dni":25077603,
      "ieId":""
    },
    {
      "nombres":"LAUREL MONRROY WILTON",
      "dni":25062222,
      "ieId":""
    },
    {
      "nombres":"MOLERO CASTRO JULHINO",
      "dni":23950436,
      "ieId":""
    },
    {
      "nombres":"PABLO CALLAPIÑA TEOFILO",
      "dni":25061811,
      "ieId":""
    },
    {
      "nombres":"PARI HUAYTA CARMEN",
      "dni":40877244,
      "ieId":""
    },
    {
      "nombres":"PUMAHUALCCA HUARCAYA ROGER",
      "dni":46404614,
      "ieId":""
    },
    {
      "nombres":"RAMOS MUÑOZ DORIS",
      "dni":23992242,
      "ieId":""
    },
    {
      "nombres":"SUAREZ QUISPE WILFREDO",
      "dni":23994705,
      "ieId":""
    },
    {
      "nombres":"AQUINO CCUNO SABINO ELIAS",
      "dni":23883840,
      "ieId":""
    },
    {
      "nombres":"CARRASCO HUAMAN NERIO",
      "dni":23992466,
      "ieId":""
    },
    {
      "nombres":"GONZALES GARCIA JOSE",
      "dni":23920704,
      "ieId":""
    },
    {
      "nombres":"MIRANO SOTA AMILCAR",
      "dni":23938706,
      "ieId":""
    },
    {
      "nombres":"MONTEJO LINARES VILMA ALEJANDRINA",
      "dni":23815039,
      "ieId":""
    },
    {
      "nombres":"OCHOA CCAHUANA LUZ MARINA",
      "dni":40085626,
      "ieId":""
    },
    {
      "nombres":"PRIETO VALENCIA MARCO",
      "dni":24813523,
      "ieId":""
    },
    {
      "nombres":"SAYRE HUILLCANINA CELIA",
      "dni":23852202,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN KATY",
      "dni":40105372,
      "ieId":""
    },
    {
      "nombres":"MOSQUEIRA CABALLERO MARIBELL",
      "dni":24488688,
      "ieId":""
    },
    {
      "nombres":"MAR ESPINOZA IDA AURORA",
      "dni":25316269,
      "ieId":""
    },
    {
      "nombres":"MOTTA JARA EDELMIRA",
      "dni":23950163,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BACA DE LA CU DARWIN",
      "dni":23861633,
      "ieId":""
    },
    {
      "nombres":"HORQQUE TEJEIRA MARCELINA",
      "dni":23877057,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO LETONA DIANA AMPARO",
      "dni":23928027,
      "ieId":""
    },
    {
      "nombres":"SALAZAR MIRANDA YOLANDA",
      "dni":23869383,
      "ieId":""
    },
    {
      "nombres":"CHATATA OROSCO NORMA",
      "dni":41024910,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ PACCO TEODORA",
      "dni":23950767,
      "ieId":""
    },
    {
      "nombres":"PEREYRA LAUREL ROSA NELIDA",
      "dni":25062244,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CHILO CRISTINA",
      "dni":23804841,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA YABAR ANA MARIA",
      "dni":23940320,
      "ieId":""
    },
    {
      "nombres":"MAMANI BLANCO BERTHA",
      "dni":25061931,
      "ieId":""
    },
    {
      "nombres":"MURILLO MUELLE NATHALIE",
      "dni":40728831,
      "ieId":""
    },
    {
      "nombres":"BRICEÑO GAMARRA CARMEN ALEJANDRINA",
      "dni":24704038,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MERMA NESTOR",
      "dni":25000311,
      "ieId":""
    },
    {
      "nombres":"MOLINA TORRES YONNY",
      "dni":23928881,
      "ieId":""
    },
    {
      "nombres":"SUVIZARRETA MUÑOZ PILAR",
      "dni":25003875,
      "ieId":""
    },
    {
      "nombres":"LIMA CHAVEZ TERESA",
      "dni":23958852,
      "ieId":""
    },
    {
      "nombres":"DELGADO CUSI NILDA",
      "dni":24283208,
      "ieId":""
    },
    {
      "nombres":"LEON CCARAYHUA VILMA",
      "dni":24003060,
      "ieId":""
    },
    {
      "nombres":"MENDOZA CCAHUANA VERONICA",
      "dni":42947271,
      "ieId":""
    },
    {
      "nombres":"LEON CCARAYHUA JULIA",
      "dni":23963004,
      "ieId":""
    },
    {
      "nombres":"HUAMANI JALIRE LUZMILA",
      "dni":23942600,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ BARRIENTOS EDIT",
      "dni":41212437,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS HANCCO YURLENI",
      "dni":46183527,
      "ieId":""
    },
    {
      "nombres":"CARI FARFAN HAYDE",
      "dni":25062167,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CHAVEZ ROSA MARIA",
      "dni":25061862,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA ARIAS LUCRECIA",
      "dni":40089108,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA ARIAS ROSA",
      "dni":40078640,
      "ieId":""
    },
    {
      "nombres":"CHAHUAYO BATALLANOS JOSE LUIS",
      "dni":24811500,
      "ieId":""
    },
    {
      "nombres":"HUAMANI CHIPA DORIS",
      "dni":44274585,
      "ieId":""
    },
    {
      "nombres":"DELGADO SEGURA MELLCHORA MAURA",
      "dni":23949231,
      "ieId":""
    },
    {
      "nombres":"DE LA TORRE CARRASCO ANTONIO",
      "dni":25077601,
      "ieId":""
    },
    {
      "nombres":"HORQQUE LA TORRE ELIZABETH",
      "dni":23920702,
      "ieId":""
    },
    {
      "nombres":"SUMIRE SILVA SONIA CAROLINA",
      "dni":43499064,
      "ieId":""
    },
    {
      "nombres":"AGUILAR TTITO SEBASTIAN TONY",
      "dni":23936201,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ COBOS MARISOL",
      "dni":24803762,
      "ieId":""
    },
    {
      "nombres":"ARANIVAR BELLOTA LUIS SERAPIO",
      "dni":25062442,
      "ieId":""
    },
    {
      "nombres":"CANDIA GUTIERREZ JUAN CARLOS",
      "dni":44626262,
      "ieId":""
    },
    {
      "nombres":"CASTRO CORDOVA SILVIA VIOLETA",
      "dni":25069684,
      "ieId":""
    },
    {
      "nombres":"CHURA VILCA PAULINO",
      "dni":24890214,
      "ieId":""
    },
    {
      "nombres":"GONZALES GIL ZULMA",
      "dni":9753784,
      "ieId":""
    },
    {
      "nombres":"MAR BOMBILLA SORAYDA",
      "dni":41390737,
      "ieId":""
    },
    {
      "nombres":"MENDOZA SANCHEZ IRMA",
      "dni":25186088,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ BACA ALVARO",
      "dni":23837948,
      "ieId":""
    },
    {
      "nombres":"PANCORBO CANDIA JAIME PERCI",
      "dni":24283108,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUANCA EDWARD",
      "dni":24582401,
      "ieId":""
    },
    {
      "nombres":"QUISPE VARGAS MIGUEL",
      "dni":25063599,
      "ieId":""
    },
    {
      "nombres":"RAMOS ARISAPANA JOSE COSME",
      "dni":25063737,
      "ieId":""
    },
    {
      "nombres":"RAMOS SONCCO DEVORA MARISELA",
      "dni":42477694,
      "ieId":""
    },
    {
      "nombres":"SUAREZ HANCCO JULIAN",
      "dni":24460579,
      "ieId":""
    },
    {
      "nombres":"TEJADA CERVANTES LUISA MARIELA",
      "dni":30843387,
      "ieId":""
    },
    {
      "nombres":"TTITO ÑAUPA LUZ MARINA",
      "dni":23933857,
      "ieId":""
    },
    {
      "nombres":"AYME CHACON EDWIN",
      "dni":46253851,
      "ieId":""
    },
    {
      "nombres":"BLANCO GRAJEDA UBELINDA",
      "dni":25062194,
      "ieId":""
    },
    {
      "nombres":"SAPA VARGAS CLORINDA",
      "dni":10583876,
      "ieId":""
    },
    {
      "nombres":"UMERES CONDORI JULIA",
      "dni":23936382,
      "ieId":""
    },
    {
      "nombres":"AVILES MEJIA FACUNDO",
      "dni":25062097,
      "ieId":""
    },
    {
      "nombres":"FLORES VASQUEZ PEDRO ERASMO",
      "dni":23959585,
      "ieId":""
    },
    {
      "nombres":"GONGORA FERNANDEZ ENRIQUE",
      "dni":23840858,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI ELIAS",
      "dni":23979996,
      "ieId":""
    },
    {
      "nombres":"QUISPE ILLA MELCHOR",
      "dni":43389766,
      "ieId":""
    },
    {
      "nombres":"QUISPICUSI CRUZ RUTH",
      "dni":23952629,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ TAPIA LISBETH MILENA",
      "dni":45265814,
      "ieId":""
    },
    {
      "nombres":"ANCORI FARFAN ANA BERTHA",
      "dni":25062157,
      "ieId":""
    },
    {
      "nombres":"BOMBILLA PUMAYALLI WALTER",
      "dni":25061915,
      "ieId":""
    },
    {
      "nombres":"CABRERA MALDONADO MARIA YSABEL",
      "dni":23958210,
      "ieId":""
    },
    {
      "nombres":"CASTRO CORDOVA HERBERTH ROSENDO",
      "dni":25002772,
      "ieId":""
    },
    {
      "nombres":"CERVANTES LAURA ROSARIO JUANA",
      "dni":29657522,
      "ieId":""
    },
    {
      "nombres":"HUAMANI DURAN SAMUEL",
      "dni":25061863,
      "ieId":""
    },
    {
      "nombres":"HUANACO MORA ZAMARITANA",
      "dni":40764100,
      "ieId":""
    },
    {
      "nombres":"MACEDO SILVA ROLANDO",
      "dni":25218691,
      "ieId":""
    },
    {
      "nombres":"MONTALVO FLORES MARIA LUZ",
      "dni":41702321,
      "ieId":""
    },
    {
      "nombres":"PARI ROSAS YANET YOVANA",
      "dni":41379235,
      "ieId":""
    },
    {
      "nombres":"AYME CHALLCO JUANA",
      "dni":43265153,
      "ieId":""
    },
    {
      "nombres":"CHILLITUPA CCAHUANA VICENTE SABINO",
      "dni":25061224,
      "ieId":""
    },
    {
      "nombres":"CONDE HUILLCA NELLY",
      "dni":45045731,
      "ieId":""
    },
    {
      "nombres":"FLORES MAMANI HECTOR CONCEPCION",
      "dni":23932674,
      "ieId":""
    },
    {
      "nombres":"ORTEGA SARCO VICENTINA",
      "dni":25326584,
      "ieId":""
    },
    {
      "nombres":"ROJAS RODRIGUEZ MARINA",
      "dni":41929998,
      "ieId":""
    },
    {
      "nombres":"TOLEDO TINTA KARIN BETTY",
      "dni":25062187,
      "ieId":""
    },
    {
      "nombres":"CRUZ MONTERREY PEDRO",
      "dni":23900671,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CCORIMANYA ANNABEL",
      "dni":25218258,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA YAURI ANA",
      "dni":25185031,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO HUAMAN ADELMA",
      "dni":40152634,
      "ieId":""
    },
    {
      "nombres":"LOAIZA TOLEDO RAUL",
      "dni":24392269,
      "ieId":""
    },
    {
      "nombres":"MORA TEVES MARLENE ROSALVA",
      "dni":23894051,
      "ieId":""
    },
    {
      "nombres":"RAMOS INOCENCIO MIRIAM",
      "dni":25319787,
      "ieId":""
    },
    {
      "nombres":"TORRES OVIEDO MARITZA",
      "dni":23952504,
      "ieId":""
    },
    {
      "nombres":"BATALLANOS MOLERO JUAN EDIZON",
      "dni":46066096,
      "ieId":""
    },
    {
      "nombres":"DURAND HUISA ANGELICA",
      "dni":41428932,
      "ieId":""
    },
    {
      "nombres":"CONZA CHOCCATA JUAN EUDOCIO",
      "dni":25062126,
      "ieId":""
    },
    {
      "nombres":"QUISPE SUCSO JULIA",
      "dni":41190460,
      "ieId":""
    },
    {
      "nombres":"TELLO NAJARRO JULIO GRIMALDO",
      "dni":23973022,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CCOLQUESAÑA LINA",
      "dni":43283920,
      "ieId":""
    },
    {
      "nombres":"BELLIDO AGUIRRE MARIA NEREIDA",
      "dni":25062002,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE AGUIRRE LIDA",
      "dni":40956772,
      "ieId":""
    },
    {
      "nombres":"CHOQUE CCOLQUE SONIA",
      "dni":45309749,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BACA CHICATA DANIEL LORENZO",
      "dni":25062671,
      "ieId":""
    },
    {
      "nombres":"MENDOZA CCOLQUEHUANCA NORMA",
      "dni":23941274,
      "ieId":""
    },
    {
      "nombres":"QUISPE PEÑA EMILIO",
      "dni":25063672,
      "ieId":""
    },
    {
      "nombres":"RAMOS JARITA MODESTA",
      "dni":1315966,
      "ieId":""
    },
    {
      "nombres":"CARPIO VARGAS REINA",
      "dni":23913782,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA SAMANEZ LEOCADIO",
      "dni":24795000,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS VILLAVICENCIO PAULINA",
      "dni":23948987,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LAUREL RUTH",
      "dni":25061756,
      "ieId":""
    },
    {
      "nombres":"ALDAZABAL PEREIRA CALIXTO CARLOS",
      "dni":25066395,
      "ieId":""
    },
    {
      "nombres":"CARI FARFAN CARMEN",
      "dni":40356327,
      "ieId":""
    },
    {
      "nombres":"DELGADO CAMACHO ALEXKO",
      "dni":23986077,
      "ieId":""
    },
    {
      "nombres":"CHILLIHUA OBLEA RUTH",
      "dni":42204452,
      "ieId":""
    },
    {
      "nombres":"ROZAS ALVAREZ YHONI",
      "dni":23803861,
      "ieId":""
    },
    {
      "nombres":"DE LA TORRE HUAYHUA CARMEN ROSA",
      "dni":25061733,
      "ieId":""
    },
    {
      "nombres":"NINA APAZA JUVENAL",
      "dni":42339095,
      "ieId":""
    },
    {
      "nombres":"PARI DUEÑAS JULIO",
      "dni":44329866,
      "ieId":""
    },
    {
      "nombres":"PUMA ANCASI ERNESTO",
      "dni":41031576,
      "ieId":""
    },
    {
      "nombres":"VERA TEJEIRA JOSE ANTONIO",
      "dni":41603291,
      "ieId":""
    },
    {
      "nombres":"UBADA GUTIERREZ ALICIA",
      "dni":23865737,
      "ieId":""
    },
    {
      "nombres":"VARGAS CORDOVA HECTOR EFRAIN",
      "dni":23944785,
      "ieId":""
    },
    {
      "nombres":"AYALA CARDENAS ORLANDO",
      "dni":40312850,
      "ieId":""
    },
    {
      "nombres":"APAZA ZUVIETA LUZ MARINA",
      "dni":23958414,
      "ieId":""
    },
    {
      "nombres":"CUEVA ROJAS EBERTH",
      "dni":41004520,
      "ieId":""
    },
    {
      "nombres":"SUVIZARRETA MUÑOZ EBERT",
      "dni":23950683,
      "ieId":""
    },
    {
      "nombres":"VICTORIA CABALLERO YANIRA",
      "dni":41779832,
      "ieId":""
    },
    {
      "nombres":"APAZA PARHUAYO ARMANDO",
      "dni":42321637,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LOAYZA ELIANA BERTHA",
      "dni":23857755,
      "ieId":""
    },
    {
      "nombres":"ARIAS GUTIERREZ VICTOR ANDRES",
      "dni":44959590,
      "ieId":""
    },
    {
      "nombres":"CANDIA VALER ABELARDO",
      "dni":41837710,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CARDENAS ZAYDITA MARILIN",
      "dni":41005230,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CORNEJO JUSTINA",
      "dni":23978485,
      "ieId":""
    },
    {
      "nombres":"HUAÑEC SUYLLO RIMBERTY",
      "dni":23956842,
      "ieId":""
    },
    {
      "nombres":"CCOLQQUE NINA ABEL",
      "dni":24708114,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA VALDEIGLESIAS DIANA",
      "dni":41530854,
      "ieId":""
    },
    {
      "nombres":"ALFEREZ HUILLCA CRISTIAN",
      "dni":46383008,
      "ieId":""
    },
    {
      "nombres":"APAZA CCOSCCO OSCAR WASHINGTON",
      "dni":23999981,
      "ieId":""
    },
    {
      "nombres":"ARONACA AQUINO BERNARDINO",
      "dni":24715279,
      "ieId":""
    },
    {
      "nombres":"BELLIDO AGUIRRE FRANCISCO ELWIN",
      "dni":23987902,
      "ieId":""
    },
    {
      "nombres":"BELLIDO CAMPANA FRANCISCO",
      "dni":23831559,
      "ieId":""
    },
    {
      "nombres":"CARLOS FARFAN LUZMILA",
      "dni":23816263,
      "ieId":""
    },
    {
      "nombres":"CRUZ FARFAN ZUMILDA",
      "dni":41112431,
      "ieId":""
    },
    {
      "nombres":"FLOREZ RUELAS WASHINGTON",
      "dni":24703906,
      "ieId":""
    },
    {
      "nombres":"GARCIA SEVILLANOS CLAUDIO",
      "dni":40433576,
      "ieId":""
    },
    {
      "nombres":"GONGORA MEZA MIRYHAM",
      "dni":23997385,
      "ieId":""
    },
    {
      "nombres":"HUACHACA MONTEROLA PAULINA",
      "dni":29561067,
      "ieId":""
    },
    {
      "nombres":"HUAMAN APAZA RYNA",
      "dni":24287135,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MENDOZA HERMILA",
      "dni":23852837,
      "ieId":""
    },
    {
      "nombres":"LAUREL MONRROY WILIAN JAVIER",
      "dni":41930005,
      "ieId":""
    },
    {
      "nombres":"MEDINA DELGADILLO MARCO ANTONIO",
      "dni":24706395,
      "ieId":""
    },
    {
      "nombres":"MOLINA FIGUEROA BENJAMIN",
      "dni":25063907,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ ORE AMPARO ELEANA",
      "dni":29420923,
      "ieId":""
    },
    {
      "nombres":"PACCO HUILLCA HILARIO",
      "dni":4083490,
      "ieId":""
    },
    {
      "nombres":"PARISUAÑA CCAPA VIRGINIA",
      "dni":29605428,
      "ieId":""
    },
    {
      "nombres":"PAZ FLOREZ LEOPOLDO CRISOLOGO",
      "dni":23801162,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI SIXTO",
      "dni":23957783,
      "ieId":""
    },
    {
      "nombres":"SANDOVAL CABALLERO MARCO AURELIO",
      "dni":25000344,
      "ieId":""
    },
    {
      "nombres":"SERRANO ALVAREZ PORFIRIO",
      "dni":23805740,
      "ieId":""
    },
    {
      "nombres":"YAUTA ROJAS FLOR ZORAIDA",
      "dni":44114050,
      "ieId":""
    },
    {
      "nombres":"ZAVALETA SUMA CESAR AUGUSTO",
      "dni":24708043,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA CCORIMANYA RONALD JESUS",
      "dni":23990503,
      "ieId":""
    },
    {
      "nombres":"APARICIO CAMANI RAUL",
      "dni":41777923,
      "ieId":""
    },
    {
      "nombres":"AUCAPURI OLARTE LUCIO MANUEL",
      "dni":25002181,
      "ieId":""
    },
    {
      "nombres":"BAZAN SILVA JUSTINO",
      "dni":23938321,
      "ieId":""
    },
    {
      "nombres":"CUELLAR LUCANA GREGORIO",
      "dni":24948400,
      "ieId":""
    },
    {
      "nombres":"DURAN PUMATINCO JERONIMO",
      "dni":24390663,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE DELGADO MARIA CARMEN",
      "dni":23860469,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ORMACHEA ROSA",
      "dni":23885795,
      "ieId":""
    },
    {
      "nombres":"HUARACA ARIAS RUBEN",
      "dni":40707023,
      "ieId":""
    },
    {
      "nombres":"HUAYTA CORRALES APOLINAR TEOFILO",
      "dni":29720253,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ PALOMINO MIRIAM ISELA",
      "dni":23999349,
      "ieId":""
    },
    {
      "nombres":"POCCO CCALLO BERNARDINO",
      "dni":2288663,
      "ieId":""
    },
    {
      "nombres":"RAMOS LOVATON JUSTINA",
      "dni":23915232,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ OVALLE RUDY",
      "dni":23977645,
      "ieId":""
    },
    {
      "nombres":"TAPIA CANDIA JUVENAL",
      "dni":23932617,
      "ieId":""
    },
    {
      "nombres":"TUMPAY PANTI VERONICA",
      "dni":40024313,
      "ieId":""
    },
    {
      "nombres":"VILCA CCANCCAPA FIORELA",
      "dni":44124686,
      "ieId":""
    },
    {
      "nombres":"YANQUI CHARCA FREDY LINENTON",
      "dni":80390192,
      "ieId":""
    },
    {
      "nombres":"YANQUI FLORES YUDY YANETH",
      "dni":45253735,
      "ieId":""
    },
    {
      "nombres":"YNCARROCA QUISPE DINA",
      "dni":41499910,
      "ieId":""
    },
    {
      "nombres":"AMPA ARIAS EDGAR",
      "dni":45005190,
      "ieId":""
    },
    {
      "nombres":"BEJAR GARCIA JOSE NILTON",
      "dni":40121878,
      "ieId":""
    },
    {
      "nombres":"CHIPANA USCAMAYTA MARTHA",
      "dni":8144312,
      "ieId":""
    },
    {
      "nombres":"LLUSCA MONGE WILBERT",
      "dni":24006481,
      "ieId":""
    },
    {
      "nombres":"PUMA CALVO ROSA LUZ YOBANA",
      "dni":43882123,
      "ieId":""
    },
    {
      "nombres":"SALINAS ESCOBAR EDDY",
      "dni":23988424,
      "ieId":""
    },
    {
      "nombres":"YABARRENA TARCO ALEJANDRINA",
      "dni":23951742,
      "ieId":""
    },
    {
      "nombres":"ARMEJO HUARHUA EDITH",
      "dni":23985988,
      "ieId":""
    },
    {
      "nombres":"CARDENAS AYALA MARCO ANTONIO",
      "dni":40714789,
      "ieId":""
    },
    {
      "nombres":"CHANCAYAURI HUARCA FRANCISCO BELTRAN",
      "dni":24876107,
      "ieId":""
    },
    {
      "nombres":"DELGADO CAMACHO WILMER",
      "dni":40528463,
      "ieId":""
    },
    {
      "nombres":"GONZALES CACERES JEANETTE ELIZABETH",
      "dni":41212431,
      "ieId":""
    },
    {
      "nombres":"HUILLCAHUAMAN RIMACHI ALEXIS AURELIO",
      "dni":23979496,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MAMANI RONALD",
      "dni":24704172,
      "ieId":""
    },
    {
      "nombres":"OLAYUNCA ANCHARI GLADIS",
      "dni":40350420,
      "ieId":""
    },
    {
      "nombres":"PACHARI TURPO ADRIANA",
      "dni":41200250,
      "ieId":""
    },
    {
      "nombres":"SALAMANCA OVIEDO SUTTA DEYVIS",
      "dni":40789590,
      "ieId":""
    },
    {
      "nombres":"VILLENA BAEZ WILLY",
      "dni":42567794,
      "ieId":""
    },
    {
      "nombres":"YUCRA QUISPE JULIO",
      "dni":23825449,
      "ieId":""
    },
    {
      "nombres":"BACA VASQUEZ MANUEL JESUS",
      "dni":23808735,
      "ieId":""
    },
    {
      "nombres":"DIAZ TICONA OLGA CARMELA",
      "dni":1200936,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ BONIFACIO YONY",
      "dni":40915878,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ROMOACCA YOVANA",
      "dni":42502907,
      "ieId":""
    },
    {
      "nombres":"SALCEDO VALERIANO LUCY",
      "dni":23930086,
      "ieId":""
    },
    {
      "nombres":"SALCEDO VALERIANO RINA",
      "dni":23926373,
      "ieId":""
    },
    {
      "nombres":"TORRES OVIEDO LUCHA",
      "dni":24283706,
      "ieId":""
    },
    {
      "nombres":"BOMBILLA PUMAYALLI MIGUEL FRANCISCO",
      "dni":42423544,
      "ieId":""
    },
    {
      "nombres":"CARLOS RIOS JUSTO",
      "dni":24895459,
      "ieId":""
    },
    {
      "nombres":"MARON PINEDA JUAN DE LA CRUZ",
      "dni":1323316,
      "ieId":""
    },
    {
      "nombres":"QUECAÑO QUECAÑO DANTE RODRIGO",
      "dni":47707244,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA ENRIQUEZ MARIBELL LEONOR",
      "dni":23947199,
      "ieId":""
    },
    {
      "nombres":"ACOSTA VERA REBOLLAR CARLA VERONICA",
      "dni":6526904,
      "ieId":""
    },
    {
      "nombres":"CENTENO LLERENA EDY",
      "dni":24993842,
      "ieId":""
    },
    {
      "nombres":"ELORRIETA CANDIA ROSA AURORA",
      "dni":24951287,
      "ieId":""
    },
    {
      "nombres":"MIRANDA HUANCAHUIRI MABEL",
      "dni":42137000,
      "ieId":""
    },
    {
      "nombres":"PEREZ DE APARICIO MAGDA GLADYS",
      "dni":23881380,
      "ieId":""
    },
    {
      "nombres":"QUIROGA NINA VILMA",
      "dni":23858834,
      "ieId":""
    },
    {
      "nombres":"ROQUE VASQUEZ SUSANA YARINA",
      "dni":23840484,
      "ieId":""
    },
    {
      "nombres":"ZUBILETA LOPEZ ROCIO",
      "dni":43057216,
      "ieId":""
    },
    {
      "nombres":"CARRASCO GONSALES KAREM",
      "dni":23894383,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GONZALES LISBETH",
      "dni":44739531,
      "ieId":""
    },
    {
      "nombres":"MINAYA CALVO KATHERINE EUFEMIA",
      "dni":24991824,
      "ieId":""
    },
    {
      "nombres":"MORA OROSCO NATIVIDAD",
      "dni":23869937,
      "ieId":""
    },
    {
      "nombres":"QUISPE GALLEGOS NOHEMI",
      "dni":23965148,
      "ieId":""
    },
    {
      "nombres":"VALDEIGLESIAS MAMANI YONY",
      "dni":24990843,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA APARICIO PATRICIA",
      "dni":2432046,
      "ieId":""
    },
    {
      "nombres":"LEIVA WILSON EDDY",
      "dni":24942513,
      "ieId":""
    },
    {
      "nombres":"ARAGON ELORRIETA MABEL",
      "dni":42374390,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE MORALES ADAI",
      "dni":23944174,
      "ieId":""
    },
    {
      "nombres":"CAMPANA OBLITAS PATRICIA OLINDA",
      "dni":24003007,
      "ieId":""
    },
    {
      "nombres":"ORE HUACAC FLORA",
      "dni":25006277,
      "ieId":""
    },
    {
      "nombres":"TURPO BUSTINZA NELY MILIDA",
      "dni":1556990,
      "ieId":""
    },
    {
      "nombres":"BARRETO NOBLEGA JESUS SARA",
      "dni":42005095,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ VASQUEZ TULA",
      "dni":23811506,
      "ieId":""
    },
    {
      "nombres":"SALAS MEZA DALIA LOURDES",
      "dni":24993660,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA COLLADO LUZ MARINA",
      "dni":24994983,
      "ieId":""
    },
    {
      "nombres":"NAVARRO UGARTE ANGELA MARIA",
      "dni":23895647,
      "ieId":""
    },
    {
      "nombres":"ROSAS AVENDAÑO MARIBEL",
      "dni":43435367,
      "ieId":""
    },
    {
      "nombres":"SOTELO MONTES KATY",
      "dni":23996833,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA MEJIA MARIA GARDENIA",
      "dni":24946886,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI HUAMAN HILDA VIOLETA",
      "dni":40776617,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ MONGE RUTH ROXANA",
      "dni":41127635,
      "ieId":""
    },
    {
      "nombres":"SANTOS CANAL MADELEINE",
      "dni":43465218,
      "ieId":""
    },
    {
      "nombres":"RIVERO DIAZ MARTHA JANET",
      "dni":4723152,
      "ieId":""
    },
    {
      "nombres":"SILVA ANDRADE VICENTINA",
      "dni":24951157,
      "ieId":""
    },
    {
      "nombres":"CHAMBI HUAMAN FLORA",
      "dni":25214208,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA HUAMAN CARMEN",
      "dni":23963893,
      "ieId":""
    },
    {
      "nombres":"ARDILES ALVAREZ FLOR FATIMA",
      "dni":24987755,
      "ieId":""
    },
    {
      "nombres":"TARCO BARRIENTOS ROSA",
      "dni":24981800,
      "ieId":""
    },
    {
      "nombres":"BEJAR MELENDEZ EDGARDO",
      "dni":24940146,
      "ieId":""
    },
    {
      "nombres":"CAMERO ABARCA JOSE GORKY",
      "dni":23914062,
      "ieId":""
    },
    {
      "nombres":"CHAIÑA CHAVEZ GARDENIA",
      "dni":44475719,
      "ieId":""
    },
    {
      "nombres":"FLORES AYERBE JUAN ULISES",
      "dni":25304146,
      "ieId":""
    },
    {
      "nombres":"FLORES MORALES NELIDA",
      "dni":23845300,
      "ieId":""
    },
    {
      "nombres":"FLOREZ CARDENAS GLORIA AYDEE",
      "dni":24941325,
      "ieId":""
    },
    {
      "nombres":"GUZMAN FIGUEROA YOBANA",
      "dni":23969049,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA HUAMAN DANIA DOLKA",
      "dni":25326342,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ASTETE TEODORO",
      "dni":25300272,
      "ieId":""
    },
    {
      "nombres":"JAYOS ALFERES GRETA MAYTE",
      "dni":46778129,
      "ieId":""
    },
    {
      "nombres":"LAUREL LOAYZA ALEJANDRINA",
      "dni":25304408,
      "ieId":""
    },
    {
      "nombres":"MAMANI MOLINA HAYDEE",
      "dni":24965790,
      "ieId":""
    },
    {
      "nombres":"MELO VELARDE DIANA NOEMI",
      "dni":40070054,
      "ieId":""
    },
    {
      "nombres":"MEZA TORRES CORALI",
      "dni":40764116,
      "ieId":""
    },
    {
      "nombres":"MORA MORMONTOY FANY",
      "dni":23816084,
      "ieId":""
    },
    {
      "nombres":"OLIVERA PUMA IVAN",
      "dni":42141031,
      "ieId":""
    },
    {
      "nombres":"OVALLE ZAMALLOA MERCEDES",
      "dni":24965950,
      "ieId":""
    },
    {
      "nombres":"POZO UGARTE KARINA MARIELA",
      "dni":24990937,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCAMPAR SOFIA",
      "dni":23836017,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAINICTA JULIA",
      "dni":24941749,
      "ieId":""
    },
    {
      "nombres":"RIOS BERNEDO FERNANDO ASENCION",
      "dni":25301193,
      "ieId":""
    },
    {
      "nombres":"ROJAS MONTUFAR DOMINGO",
      "dni":24941765,
      "ieId":""
    },
    {
      "nombres":"ROJAS PUMA VICTOR HONORATO",
      "dni":24943614,
      "ieId":""
    },
    {
      "nombres":"ROZAS POZO MARIA JUDITH",
      "dni":24946904,
      "ieId":""
    },
    {
      "nombres":"SALAS ALTAMIRANO CLARISA",
      "dni":23844872,
      "ieId":""
    },
    {
      "nombres":"URQUIZO CAVIEDES MARISOL",
      "dni":25001437,
      "ieId":""
    },
    {
      "nombres":"VARGAS APAZA ELIZABETH",
      "dni":24997245,
      "ieId":""
    },
    {
      "nombres":"ACHAHUANCO FUENTES ROSARIO",
      "dni":24701109,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA CCAÑIHUA ENCARNACION",
      "dni":25004966,
      "ieId":""
    },
    {
      "nombres":"BORNAS BUSTAMANTE DANIEL",
      "dni":24993662,
      "ieId":""
    },
    {
      "nombres":"CANDIA HUISÑAY LEONILDA",
      "dni":24983177,
      "ieId":""
    },
    {
      "nombres":"CHOQUE MOSCOSO LUZGARDO",
      "dni":24970182,
      "ieId":""
    },
    {
      "nombres":"CONDORI PEÑALOZA MARIZOL",
      "dni":40507440,
      "ieId":""
    },
    {
      "nombres":"CONDORI QUISPE FREDY BENIGNO",
      "dni":24711765,
      "ieId":""
    },
    {
      "nombres":"FUENTES TUPAYACHI VICENTE",
      "dni":24948868,
      "ieId":""
    },
    {
      "nombres":"GUILLEN ACHAHUI FLAVIO SABINO",
      "dni":24662364,
      "ieId":""
    },
    {
      "nombres":"GUILLEN QUIJIA PAULINA",
      "dni":23968641,
      "ieId":""
    },
    {
      "nombres":"MIRANDA SEGURA ALFREDO",
      "dni":23801280,
      "ieId":""
    },
    {
      "nombres":"MOLLEHUANCA CERECEDA YANETH",
      "dni":24990102,
      "ieId":""
    },
    {
      "nombres":"NIHUA RAMIREZ MARILUZ",
      "dni":23972012,
      "ieId":""
    },
    {
      "nombres":"PERALTA ESPINOZA JESUSA",
      "dni":25008502,
      "ieId":""
    },
    {
      "nombres":"RIVERA HUANCA JOSE",
      "dni":25304631,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ CASTRO DAVID",
      "dni":24979761,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ VALDEIGLESIAS CARMEN ROSA",
      "dni":24946896,
      "ieId":""
    },
    {
      "nombres":"VIVANCO FARFAN ERNESTINA",
      "dni":24979319,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ATAU ISABEL",
      "dni":23968951,
      "ieId":""
    },
    {
      "nombres":"CALVO OCHANTE TERESA",
      "dni":24945497,
      "ieId":""
    },
    {
      "nombres":"CAYO AGUILAR FRYDDA",
      "dni":23892889,
      "ieId":""
    },
    {
      "nombres":"CCONISLLA MARTINEZ MARCO ANTONIO",
      "dni":44850271,
      "ieId":""
    },
    {
      "nombres":"CUTIPA RAMOS MAXIMO",
      "dni":2157138,
      "ieId":""
    },
    {
      "nombres":"FARFAN VILLACORTA NERY DOMITILA",
      "dni":24703099,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS FERNANDEZ MAURO",
      "dni":23821367,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ZARATE YONY",
      "dni":24949846,
      "ieId":""
    },
    {
      "nombres":"GIBAJA ARMENDARIZ CARMELINDA",
      "dni":24991597,
      "ieId":""
    },
    {
      "nombres":"HERMOZA LATORRE MARIEL",
      "dni":23937852,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MELENDEZ JANETTE",
      "dni":25304701,
      "ieId":""
    },
    {
      "nombres":"LEON WARTHON MARLENY",
      "dni":23968960,
      "ieId":""
    },
    {
      "nombres":"MIRANDA RAMOS MELINA ELIANA",
      "dni":41046176,
      "ieId":""
    },
    {
      "nombres":"MORA QUISPE HILDAURA",
      "dni":25004714,
      "ieId":""
    },
    {
      "nombres":"OCHOA CASTRO MARIA LUZ",
      "dni":23823820,
      "ieId":""
    },
    {
      "nombres":"ORTIZ CASTILLO DE MENES NAYRUTHD ROSANA",
      "dni":23930600,
      "ieId":""
    },
    {
      "nombres":"PAPA DELGADO NORMA MARTHA",
      "dni":25009081,
      "ieId":""
    },
    {
      "nombres":"QUISPE TORRES ONELIA",
      "dni":24946849,
      "ieId":""
    },
    {
      "nombres":"SIMON ECHEGARAY MARUJA IVONNE",
      "dni":25012334,
      "ieId":""
    },
    {
      "nombres":"VELASCO CHAVEZ MARGOT",
      "dni":24943001,
      "ieId":""
    },
    {
      "nombres":"WILSON PALMA AMERICO",
      "dni":24982358,
      "ieId":""
    },
    {
      "nombres":"ZAVALETA QUISPE ADOLFO",
      "dni":24702037,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA OLIVERA AMPARO",
      "dni":24941771,
      "ieId":""
    },
    {
      "nombres":"ARANZABAL QUIÑONES BRAULIO",
      "dni":24988394,
      "ieId":""
    },
    {
      "nombres":"ARAUJO SARDON LUZ AMANDA",
      "dni":24701034,
      "ieId":""
    },
    {
      "nombres":"AZURIN CARDENAS ALEJANDRINA",
      "dni":23895044,
      "ieId":""
    },
    {
      "nombres":"CABALLERO DE DIAZ ISABEL",
      "dni":24946286,
      "ieId":""
    },
    {
      "nombres":"CABRERA MEDINA HERLINDA",
      "dni":24991723,
      "ieId":""
    },
    {
      "nombres":"CHALLCO CARDENAS WILBERT NEMESIO",
      "dni":24981343,
      "ieId":""
    },
    {
      "nombres":"GUEVARA LINES SUSANA VIRGINIA",
      "dni":23810232,
      "ieId":""
    },
    {
      "nombres":"LOAIZA TUPAYACHI AMERICO",
      "dni":24954312,
      "ieId":""
    },
    {
      "nombres":"LOVATON AMAO LEONCIO",
      "dni":24956037,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ CASTRO JORGE",
      "dni":24965828,
      "ieId":""
    },
    {
      "nombres":"PACHECO CANDIA JUSTO",
      "dni":23894985,
      "ieId":""
    },
    {
      "nombres":"PAZ BARRIENTOS HILDA",
      "dni":24982234,
      "ieId":""
    },
    {
      "nombres":"QUISPE PEREZ MARIA PILAR",
      "dni":25303028,
      "ieId":""
    },
    {
      "nombres":"SALAS CACERES DINA",
      "dni":40917892,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CASTILLO MARIANELA",
      "dni":24991246,
      "ieId":""
    },
    {
      "nombres":"SERRANO OCSA TIMOTEO BELTRAN",
      "dni":24491771,
      "ieId":""
    },
    {
      "nombres":"SOTA HANCO FIDEL",
      "dni":24701078,
      "ieId":""
    },
    {
      "nombres":"VALENZA ROJAS CARMEN ROSA",
      "dni":23960560,
      "ieId":""
    },
    {
      "nombres":"VARGAS GUZMAN MARIO",
      "dni":24948208,
      "ieId":""
    },
    {
      "nombres":"DELGADO PERALTA GLORIA",
      "dni":24943786,
      "ieId":""
    },
    {
      "nombres":"HUAMAN AFAN HERMINIA",
      "dni":23818644,
      "ieId":""
    },
    {
      "nombres":"HUAYOTUMA YUCRA FERNANDO",
      "dni":23975229,
      "ieId":""
    },
    {
      "nombres":"HUILLCA SALAS MARIBEL",
      "dni":24993892,
      "ieId":""
    },
    {
      "nombres":"VALENCIA LOAYZA BERTHA",
      "dni":24946883,
      "ieId":""
    },
    {
      "nombres":"CHALLCO CORRALES NESTOR",
      "dni":24952283,
      "ieId":""
    },
    {
      "nombres":"CUEVA CACERES JAVIER",
      "dni":25320385,
      "ieId":""
    },
    {
      "nombres":"DEL CASTILLO ACUÑA VIOLETA ELENA",
      "dni":24950162,
      "ieId":""
    },
    {
      "nombres":"RETAMOZO ROMAN ELIAS SAMUEL",
      "dni":24980287,
      "ieId":""
    },
    {
      "nombres":"VEGA CENTENO RODRIGUEZ MARIA AUGUSTA",
      "dni":24951155,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GALARRETA ERIKA",
      "dni":25012227,
      "ieId":""
    },
    {
      "nombres":"ARDILES ALVAREZ LUZ",
      "dni":24956222,
      "ieId":""
    },
    {
      "nombres":"BEJAR CASTRO LUCILA",
      "dni":23971489,
      "ieId":""
    },
    {
      "nombres":"CALIZAYA MALDONADO ENRIQUE WALTHER",
      "dni":24698362,
      "ieId":""
    },
    {
      "nombres":"CHOQUE BEDOYA DAVID ALEX",
      "dni":40631096,
      "ieId":""
    },
    {
      "nombres":"COVARRUBIAS DE INFANTAS JUANA FRANCISCA",
      "dni":24946291,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY TRUJILLO ESPERANZA",
      "dni":23879480,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA HURTADO LUZ MARINA",
      "dni":24965985,
      "ieId":""
    },
    {
      "nombres":"MARIACA GUEVARA YANET",
      "dni":24990698,
      "ieId":""
    },
    {
      "nombres":"MEJIA BERDEJO FERNANDO",
      "dni":24701750,
      "ieId":""
    },
    {
      "nombres":"OCSA HUAMAN MARGARITA",
      "dni":24990807,
      "ieId":""
    },
    {
      "nombres":"PERALTA LOAIZA ROCIO DEL CARMEN",
      "dni":23839265,
      "ieId":""
    },
    {
      "nombres":"QUISPE AUCCA NELIDA",
      "dni":24991420,
      "ieId":""
    },
    {
      "nombres":"SALDIVAR YUPANQUI MIRIAM",
      "dni":40014949,
      "ieId":""
    },
    {
      "nombres":"SEGOVIA SILVA ANTONIO",
      "dni":23808023,
      "ieId":""
    },
    {
      "nombres":"ZERON DIAZ ABEL",
      "dni":24970555,
      "ieId":""
    },
    {
      "nombres":"BENDEZU VILLENA RUTH YONY",
      "dni":23809235,
      "ieId":""
    },
    {
      "nombres":"CASAVERDE PEÑA RUBEN",
      "dni":24940472,
      "ieId":""
    },
    {
      "nombres":"CACERES MONTAÑO JOEL ADOLFO",
      "dni":42589532,
      "ieId":""
    },
    {
      "nombres":"CHAUCA NINA WENCESLAO",
      "dni":24484848,
      "ieId":""
    },
    {
      "nombres":"DIAZ CUSIYUPANQUI LUZMILA",
      "dni":24991445,
      "ieId":""
    },
    {
      "nombres":"RIVAS GARRIDO VIOLETA",
      "dni":40101112,
      "ieId":""
    },
    {
      "nombres":"CUYO YAURI YONY",
      "dni":41776408,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PACCO GIRALDO DANIEL",
      "dni":23905730,
      "ieId":""
    },
    {
      "nombres":"GARCES HERMOZA ELEONOR",
      "dni":24941806,
      "ieId":""
    },
    {
      "nombres":"MELO RIVERA VICTOR NOE",
      "dni":24948707,
      "ieId":""
    },
    {
      "nombres":"BARCENA BARREDA MARIO PORFIRIO",
      "dni":23968764,
      "ieId":""
    },
    {
      "nombres":"FLOREZ TUERO JESSICA",
      "dni":23993442,
      "ieId":""
    },
    {
      "nombres":"POLANCO RIOS ROSANA",
      "dni":23968614,
      "ieId":""
    },
    {
      "nombres":"QUISPE MORMONTOY WILFREDO",
      "dni":25304493,
      "ieId":""
    },
    {
      "nombres":"YAÑEZ ARANIBAR TEODORA",
      "dni":25005171,
      "ieId":""
    },
    {
      "nombres":"CALVO GALIANO YOBANA",
      "dni":24998966,
      "ieId":""
    },
    {
      "nombres":"GONZALES CALVO MARIA ELENA",
      "dni":24940703,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ DE POVEA ALICIA",
      "dni":23963844,
      "ieId":""
    },
    {
      "nombres":"AYERBE HERRERA NANCI",
      "dni":25008745,
      "ieId":""
    },
    {
      "nombres":"BARCENA AMACHI IGNACIA",
      "dni":23905750,
      "ieId":""
    },
    {
      "nombres":"CUNO MAMANI ANA",
      "dni":24695463,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO ECHEGARAY HERMELINDA",
      "dni":24970569,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ CANO YOLANDA MARILU",
      "dni":23852556,
      "ieId":""
    },
    {
      "nombres":"FARFAN HUAMAN NICANOR",
      "dni":25303165,
      "ieId":""
    },
    {
      "nombres":"FLOREZ HUAMAN BERTHA",
      "dni":24940135,
      "ieId":""
    },
    {
      "nombres":"GAMONAL QUILLILLE EDITH",
      "dni":24990920,
      "ieId":""
    },
    {
      "nombres":"HUERTAS FERREL MARIA DEL CARMEN",
      "dni":40744765,
      "ieId":""
    },
    {
      "nombres":"MELLADO BACA LILIANA",
      "dni":24951697,
      "ieId":""
    },
    {
      "nombres":"OLIVERA GUTIERREZ YDBEN",
      "dni":23971831,
      "ieId":""
    },
    {
      "nombres":"ORTIZ BERMUDEZ MARIA LUISA",
      "dni":24943488,
      "ieId":""
    },
    {
      "nombres":"POLANCO VELASQUEZ NERIDA",
      "dni":40827323,
      "ieId":""
    },
    {
      "nombres":"POLANCO YEPEZ MARIA ALINDA",
      "dni":23871406,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE TANIA",
      "dni":24991823,
      "ieId":""
    },
    {
      "nombres":"SORIA MORMONTOY PLACIDA",
      "dni":24986395,
      "ieId":""
    },
    {
      "nombres":"TUPA RAMOS IRMA",
      "dni":42795461,
      "ieId":""
    },
    {
      "nombres":"VELARDE TORRES YONY",
      "dni":23855463,
      "ieId":""
    },
    {
      "nombres":"YARIN HUALLPAYUNCA ROSA AUGUSTA",
      "dni":25304147,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS SALAS ALICIA",
      "dni":41140523,
      "ieId":""
    },
    {
      "nombres":"MOZO RAMOS ISAIAS",
      "dni":23901798,
      "ieId":""
    },
    {
      "nombres":"CANDIA QUISPE HECTOR",
      "dni":24982079,
      "ieId":""
    },
    {
      "nombres":"CUADROS MIRANDA HEBERT",
      "dni":24940882,
      "ieId":""
    },
    {
      "nombres":"GONZALES PARI LUIS FELIPE",
      "dni":25310754,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GONZALES ROBERTINA",
      "dni":23861863,
      "ieId":""
    },
    {
      "nombres":"PEÑA CAITUIRO JULIO",
      "dni":23819792,
      "ieId":""
    },
    {
      "nombres":"SOTO CERECEDA CONCEPCION",
      "dni":24982120,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA PINTO GLADYS",
      "dni":25009271,
      "ieId":""
    },
    {
      "nombres":"VARGAS MARTINEZ GABINA",
      "dni":23913416,
      "ieId":""
    },
    {
      "nombres":"ZAPATA MONTOYA NESTOR",
      "dni":23824669,
      "ieId":""
    },
    {
      "nombres":"PEÑA ALLENDE MELVIN MARIO",
      "dni":23802797,
      "ieId":""
    },
    {
      "nombres":"UTURUNCO SURCO AYDEE",
      "dni":25004436,
      "ieId":""
    },
    {
      "nombres":"ANDIA GONZALES JHON HENRY",
      "dni":40923737,
      "ieId":""
    },
    {
      "nombres":"CARAZAS VELARDE GLADYS",
      "dni":24991697,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ZAVALETA JESUS FLORENCIO",
      "dni":23899715,
      "ieId":""
    },
    {
      "nombres":"YUCRA CACERES MARTHA",
      "dni":24988039,
      "ieId":""
    },
    {
      "nombres":"CORTEZ CAMA ABEL SATURNINO",
      "dni":24948675,
      "ieId":""
    },
    {
      "nombres":"OLIVO COSTAS NATIVIDAD",
      "dni":24956402,
      "ieId":""
    },
    {
      "nombres":"ALAGON CCALLUCHI ANA YSABEL",
      "dni":24990521,
      "ieId":""
    },
    {
      "nombres":"AUCCAPUMA VILCA SILVIA",
      "dni":24712188,
      "ieId":""
    },
    {
      "nombres":"SOTO SAYHUA ASUNTA",
      "dni":23814345,
      "ieId":""
    },
    {
      "nombres":"ARENAS VARGAS ROMY",
      "dni":24991967,
      "ieId":""
    },
    {
      "nombres":"CONDORI HERRERA RUBEN",
      "dni":24949629,
      "ieId":""
    },
    {
      "nombres":"CORTES FERNANDEZ REINA",
      "dni":24950852,
      "ieId":""
    },
    {
      "nombres":"GAMARRA GONZALES FANNI",
      "dni":24994035,
      "ieId":""
    },
    {
      "nombres":"GONZALES BEDOYA FREDY",
      "dni":24965999,
      "ieId":""
    },
    {
      "nombres":"HANCO CARAZAS EVELYN YANIRA",
      "dni":42657498,
      "ieId":""
    },
    {
      "nombres":"TAIPE SOSA MIRIAM",
      "dni":24991438,
      "ieId":""
    },
    {
      "nombres":"VARGAS QUINTANILLA RAMON",
      "dni":25005019,
      "ieId":""
    },
    {
      "nombres":"ARENAS NAVARRETE ROBERTO",
      "dni":24990217,
      "ieId":""
    },
    {
      "nombres":"BALLON SOLIS NOEMI",
      "dni":25303881,
      "ieId":""
    },
    {
      "nombres":"BRAVO CUSIHUALLPA JOSE RAIMUNDO",
      "dni":25304533,
      "ieId":""
    },
    {
      "nombres":"CABRERA QUIÑONES CELIA YANET",
      "dni":25009252,
      "ieId":""
    },
    {
      "nombres":"CCANCHA CHALLCO RAMON",
      "dni":24940559,
      "ieId":""
    },
    {
      "nombres":"CESPEDES CAMACHO EUNICE",
      "dni":23810836,
      "ieId":""
    },
    {
      "nombres":"CRUZ TORRES MARIA TERESA",
      "dni":24946466,
      "ieId":""
    },
    {
      "nombres":"GALINDO BENDEZU MILAGROS CONCEPCION",
      "dni":24990848,
      "ieId":""
    },
    {
      "nombres":"LAUREL ARIAS ERNESTO",
      "dni":24995389,
      "ieId":""
    },
    {
      "nombres":"LOVATON AMAO LUCILA",
      "dni":23972323,
      "ieId":""
    },
    {
      "nombres":"MACEDO SILVA YOLANDA",
      "dni":25217447,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE LEONIDAS",
      "dni":24990924,
      "ieId":""
    },
    {
      "nombres":"SANTOS DAZA LUZ MARINA",
      "dni":25008525,
      "ieId":""
    },
    {
      "nombres":"SORIA ALVAREZ CARLOS",
      "dni":24959575,
      "ieId":""
    },
    {
      "nombres":"SAÑAC BOLIVAR MATILDE",
      "dni":24946776,
      "ieId":""
    },
    {
      "nombres":"ALCCA ALAHUI MARIA MAGDALENA",
      "dni":40428018,
      "ieId":""
    },
    {
      "nombres":"AÑO VILLEGAS IRMA",
      "dni":24947203,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL CANAL HELIO",
      "dni":24976535,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE VARGAS AMADEO",
      "dni":24960017,
      "ieId":""
    },
    {
      "nombres":"LLOCLLA ROJAS MARUJA PAULINA",
      "dni":24948212,
      "ieId":""
    },
    {
      "nombres":"VERA APARICIO JORGE",
      "dni":24487215,
      "ieId":""
    },
    {
      "nombres":"ALMANZA BARRIGA BARI LEONCIA",
      "dni":25008432,
      "ieId":""
    },
    {
      "nombres":"GAMARRA ESQUIVEL OLGA EMILIA",
      "dni":24998566,
      "ieId":""
    },
    {
      "nombres":"MENDOZA RODRIGUEZ MARTHA SOLEDAD",
      "dni":23969061,
      "ieId":""
    },
    {
      "nombres":"PALOMINO GONZALES GIOVANA",
      "dni":24952906,
      "ieId":""
    },
    {
      "nombres":"QUISPE TORRES NAZARIO",
      "dni":23968659,
      "ieId":""
    },
    {
      "nombres":"SORIA VARGAS ROXANA",
      "dni":24990899,
      "ieId":""
    },
    {
      "nombres":"TOROBEO CHACMANA BENEDICTA",
      "dni":24980870,
      "ieId":""
    },
    {
      "nombres":"ACUÑA ROSADO JOSE EDWIN",
      "dni":23904508,
      "ieId":""
    },
    {
      "nombres":"AGRAMONTE SALAZAR PRISCA",
      "dni":23822130,
      "ieId":""
    },
    {
      "nombres":"APAZA CALLATA DAVID OSCAR",
      "dni":1204266,
      "ieId":""
    },
    {
      "nombres":"ARAPA RAMOS AGUSTIN SILVANO",
      "dni":1481643,
      "ieId":""
    },
    {
      "nombres":"BARRIGA ROBLES MARIA LUCILDA",
      "dni":23802052,
      "ieId":""
    },
    {
      "nombres":"BARRIOS VARGAS TOMAS",
      "dni":31521904,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL QUISPE AMERICO",
      "dni":24941592,
      "ieId":""
    },
    {
      "nombres":"CABRERA DEL CASTILLO MARIO",
      "dni":24946964,
      "ieId":""
    },
    {
      "nombres":"CAVERO ESQUIVEL MARTHA",
      "dni":23820377,
      "ieId":""
    },
    {
      "nombres":"CHAMPI HUANACO LUZ MARINA",
      "dni":23813781,
      "ieId":""
    },
    {
      "nombres":"CHANI MINAYA CESAR",
      "dni":41755287,
      "ieId":""
    },
    {
      "nombres":"CLAVERI VARGAS JAIME",
      "dni":24965836,
      "ieId":""
    },
    {
      "nombres":"COLLANQUI AGUIRRE MARIA LOURDES",
      "dni":23999061,
      "ieId":""
    },
    {
      "nombres":"CONDORI CUSIHUAMAN EUSEBIO",
      "dni":23801168,
      "ieId":""
    },
    {
      "nombres":"COSTAS PANDO YANET",
      "dni":24995165,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR TERAN ROBERTO",
      "dni":23834555,
      "ieId":""
    },
    {
      "nombres":"FLORES GAMARRA JUAN PABLO",
      "dni":24948220,
      "ieId":""
    },
    {
      "nombres":"FLOREZ HUACAC CHRIST GIOVANA",
      "dni":40901862,
      "ieId":""
    },
    {
      "nombres":"GERVASSI ORTIZ LUIS ALBERTO",
      "dni":40918551,
      "ieId":""
    },
    {
      "nombres":"GOMEZ ROMANI SAUL HUMBERTO",
      "dni":23802094,
      "ieId":""
    },
    {
      "nombres":"GRIFA DEA NEMECIO",
      "dni":25008830,
      "ieId":""
    },
    {
      "nombres":"GUEVARA SANCHEZ HERNAN",
      "dni":24946966,
      "ieId":""
    },
    {
      "nombres":"GUILLEN CAMPOS JULIO RICARDO",
      "dni":24990321,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MAMANI DONATO",
      "dni":24993761,
      "ieId":""
    },
    {
      "nombres":"HUAMAN NUÑEZ LUIS ANTONIO",
      "dni":23943509,
      "ieId":""
    },
    {
      "nombres":"HUARCA SANCHEZ FERNANDO",
      "dni":23946175,
      "ieId":""
    },
    {
      "nombres":"HUARHUA SARMIENTO HUGO",
      "dni":24004361,
      "ieId":""
    },
    {
      "nombres":"HUILLCA CCONISLLA MARIO",
      "dni":24467929,
      "ieId":""
    },
    {
      "nombres":"LAGUNA CONDORI MARINO",
      "dni":40674538,
      "ieId":""
    },
    {
      "nombres":"LOAYZA JUANITO MIGUEL ANGEL",
      "dni":24002739,
      "ieId":""
    },
    {
      "nombres":"MACHACA MAMANI FLAVIO APOLINAR",
      "dni":23969191,
      "ieId":""
    },
    {
      "nombres":"MAMANI ROBLES FELIPE",
      "dni":23985629,
      "ieId":""
    },
    {
      "nombres":"MARCES CAVIEDES WILFREDO",
      "dni":24981363,
      "ieId":""
    },
    {
      "nombres":"MARIN CHALLCO ALICIA",
      "dni":23998546,
      "ieId":""
    },
    {
      "nombres":"MORVELI PEREZ JUAN DE LA CRUZ",
      "dni":24945636,
      "ieId":""
    },
    {
      "nombres":"MOSQUIPA VILLACORTA DIONICIA",
      "dni":23900664,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ GARCIA IRAIDA",
      "dni":23969168,
      "ieId":""
    },
    {
      "nombres":"ORTIZ SOLIS ALEJANDRO",
      "dni":24947026,
      "ieId":""
    },
    {
      "nombres":"OVALLE VALDEZ HONORIO",
      "dni":24948474,
      "ieId":""
    },
    {
      "nombres":"PALOMINO PEREIRA KATIA ELIZABETH",
      "dni":40954964,
      "ieId":""
    },
    {
      "nombres":"PILARES VASQUEZ VIOLETA YANET",
      "dni":868099,
      "ieId":""
    },
    {
      "nombres":"PUCHO BARRIENTOS LADISLAO",
      "dni":40155957,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN NORBERTO",
      "dni":23898958,
      "ieId":""
    },
    {
      "nombres":"QUISPICHO MONTESINOS ISABEL",
      "dni":23840959,
      "ieId":""
    },
    {
      "nombres":"ROMERO BALLON JORGE ANTONIO",
      "dni":24946365,
      "ieId":""
    },
    {
      "nombres":"RUELAS ESCOBEDO PEDRO ANTONIO",
      "dni":25005167,
      "ieId":""
    },
    {
      "nombres":"SALAS ERRASQUIN LUZMILA TEOFILA",
      "dni":24946971,
      "ieId":""
    },
    {
      "nombres":"SARKA QUISPE MARIO",
      "dni":24965531,
      "ieId":""
    },
    {
      "nombres":"SOLIS OCHOA LOURDES VILMA",
      "dni":23971417,
      "ieId":""
    },
    {
      "nombres":"SORIA VARGAS NANCY",
      "dni":24941644,
      "ieId":""
    },
    {
      "nombres":"USTUA PINTO WILFREDO",
      "dni":31035642,
      "ieId":""
    },
    {
      "nombres":"VALENCIA MORA MIGUEL ANGEL",
      "dni":24940261,
      "ieId":""
    },
    {
      "nombres":"VALLE DE USCA MARLENE",
      "dni":24952208,
      "ieId":""
    },
    {
      "nombres":"VERGARA ELORRIETA JESUS TIBURCIO",
      "dni":23844359,
      "ieId":""
    },
    {
      "nombres":"VIVANCO PALANTA ELIANA",
      "dni":42569369,
      "ieId":""
    },
    {
      "nombres":"YOPLAC CASQUINO QUINY MILAGROS",
      "dni":41025341,
      "ieId":""
    },
    {
      "nombres":"ZEA URVIOLA JUAN VICTOR",
      "dni":29552067,
      "ieId":""
    },
    {
      "nombres":"ANDRADE MAMANI GENARA",
      "dni":40875254,
      "ieId":""
    },
    {
      "nombres":"CABRERA GALDO JULIO ABRAHAM",
      "dni":24948304,
      "ieId":""
    },
    {
      "nombres":"CANDIA ROMERO ELSA",
      "dni":23802574,
      "ieId":""
    },
    {
      "nombres":"ELORRIETA CURIE ELVA",
      "dni":24991025,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ ESPINOZA JOVITO",
      "dni":24945592,
      "ieId":""
    },
    {
      "nombres":"LEZAMA CUBA MERCEDES",
      "dni":24946894,
      "ieId":""
    },
    {
      "nombres":"MEJIA LETONA JAVIER ALBERTO",
      "dni":23971713,
      "ieId":""
    },
    {
      "nombres":"MORVELI APAZA NANCY",
      "dni":25009071,
      "ieId":""
    },
    {
      "nombres":"MOSQUEIRA LEON DONATO",
      "dni":23968624,
      "ieId":""
    },
    {
      "nombres":"NIHUA UMERES MARLENE",
      "dni":23841576,
      "ieId":""
    },
    {
      "nombres":"OCHOA GUILLEN EDGAR",
      "dni":23958390,
      "ieId":""
    },
    {
      "nombres":"PALOMINO NOA WILFREDO",
      "dni":23933240,
      "ieId":""
    },
    {
      "nombres":"PANIAGUA GUEVARA TEOFILO",
      "dni":24946955,
      "ieId":""
    },
    {
      "nombres":"POVES ZAVALETA PEDRO GUZMAN",
      "dni":23877471,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE SIMEON",
      "dni":23850629,
      "ieId":""
    },
    {
      "nombres":"RIVERA UREÑA GUSTAVO ENRIQUE",
      "dni":40742481,
      "ieId":""
    },
    {
      "nombres":"ROJAS PEREZ DE LETONA LOURDES",
      "dni":25008771,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ MARTINEZ LORENZO",
      "dni":24946801,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA CORNEJO JAVIER REYNALDO",
      "dni":23894237,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CAHUANA MARCIA",
      "dni":24942822,
      "ieId":""
    },
    {
      "nombres":"ATAUSUPA CASTAÑEDA JORGE",
      "dni":6036472,
      "ieId":""
    },
    {
      "nombres":"CARPIO OCHOCHOQUE ALAIN",
      "dni":25305156,
      "ieId":""
    },
    {
      "nombres":"CASTRO ARTEAGA KATHERINE",
      "dni":23940442,
      "ieId":""
    },
    {
      "nombres":"CCOSCCO JUSTINIANI MARTIN",
      "dni":24360109,
      "ieId":""
    },
    {
      "nombres":"CHALLCO CORRALES FELICITAS",
      "dni":24944689,
      "ieId":""
    },
    {
      "nombres":"CONDORI SEQUEIROS DE PA SILVIA",
      "dni":23857452,
      "ieId":""
    },
    {
      "nombres":"CONTRERAS MORENO JOSE",
      "dni":31166039,
      "ieId":""
    },
    {
      "nombres":"CORNEJO SANCHEZ PEDRO ORLANDI",
      "dni":24948331,
      "ieId":""
    },
    {
      "nombres":"CUPARA BARRETO BERTHA",
      "dni":24946990,
      "ieId":""
    },
    {
      "nombres":"DE LA TORRE DUEÑAS HERNAN",
      "dni":25009447,
      "ieId":""
    },
    {
      "nombres":"DELGADO VASCONES LUIS ANGEL",
      "dni":23993367,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS ZARATE DORIS",
      "dni":25005165,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY TRUJILLO ALEX",
      "dni":25008851,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE ALAGON RUBEN",
      "dni":24958226,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ESPINOZA ZONIA",
      "dni":25683534,
      "ieId":""
    },
    {
      "nombres":"HUAMANI GUTIERREZ JUVENAL",
      "dni":41748975,
      "ieId":""
    },
    {
      "nombres":"HUMPIRI TISNADO GENARO LUIS",
      "dni":25004900,
      "ieId":""
    },
    {
      "nombres":"IBARRA ESCALANTE JUAN DE DIOS",
      "dni":24980752,
      "ieId":""
    },
    {
      "nombres":"LEON RAMIREZ FRANCISCO",
      "dni":24965600,
      "ieId":""
    },
    {
      "nombres":"LUNA CAMACHO MIGUEL",
      "dni":24950980,
      "ieId":""
    },
    {
      "nombres":"MIRANDA NUÑEZ PATRICIA JANETT",
      "dni":23994257,
      "ieId":""
    },
    {
      "nombres":"MONTES DIAZ RENE",
      "dni":23859493,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ TAPIA FELIPE",
      "dni":23878449,
      "ieId":""
    },
    {
      "nombres":"ONTON VERA JOSE RAMON",
      "dni":23904879,
      "ieId":""
    },
    {
      "nombres":"ORCOTORIO QUIÑONES MARISOL",
      "dni":24705956,
      "ieId":""
    },
    {
      "nombres":"ORIHUELA LAQUITA OSWALDO",
      "dni":24680651,
      "ieId":""
    },
    {
      "nombres":"PALIZA VALENCIA CARMELA",
      "dni":23916173,
      "ieId":""
    },
    {
      "nombres":"PALMA GALLEGOS LOURDES",
      "dni":23830454,
      "ieId":""
    },
    {
      "nombres":"PAZ CARDENAS ALBERTO",
      "dni":24990888,
      "ieId":""
    },
    {
      "nombres":"PILCO COPACONDORI BERNARDO",
      "dni":1545253,
      "ieId":""
    },
    {
      "nombres":"PUMA ALONZO GILDA",
      "dni":23938594,
      "ieId":""
    },
    {
      "nombres":"QUISPE GONZALES TEODOMIRO",
      "dni":24949928,
      "ieId":""
    },
    {
      "nombres":"SOLIS OCHOA RUTH ALCIRA",
      "dni":24946148,
      "ieId":""
    },
    {
      "nombres":"TAMAYO VARGAS DELIA TERESA",
      "dni":23811310,
      "ieId":""
    },
    {
      "nombres":"TOCRE MINAURO UBALDO",
      "dni":24993670,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO SAAVEDRA EDGAR",
      "dni":25002160,
      "ieId":""
    },
    {
      "nombres":"VERA ALMARAZ MARIA IRIS",
      "dni":24980973,
      "ieId":""
    },
    {
      "nombres":"VIDAL VARGAS DANIEL",
      "dni":24948475,
      "ieId":""
    },
    {
      "nombres":"ACUÑA ROSAS LUIS ARTURO",
      "dni":23853542,
      "ieId":""
    },
    {
      "nombres":"BACA MENDOZA ENSUEÑO BUENAVENTURA",
      "dni":23852057,
      "ieId":""
    },
    {
      "nombres":"COTRINA SANCHEZ AGRIPINA",
      "dni":23831059,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS ECHEA ALIRIO JESUS",
      "dni":24946136,
      "ieId":""
    },
    {
      "nombres":"GUZMAN CONCHATUPA LUCILA",
      "dni":24958146,
      "ieId":""
    },
    {
      "nombres":"HERMOZA DE LA CRUZ GRULIANNO",
      "dni":24991119,
      "ieId":""
    },
    {
      "nombres":"HUANCA POLIAR LEONIDAS",
      "dni":23855822,
      "ieId":""
    },
    {
      "nombres":"LOPA VERGARA HORTENCIA",
      "dni":23945837,
      "ieId":""
    },
    {
      "nombres":"LOYOLA JARA BERNARDA ELIZABETH",
      "dni":18072029,
      "ieId":""
    },
    {
      "nombres":"LUQUE VELASCO LILY",
      "dni":24994630,
      "ieId":""
    },
    {
      "nombres":"MAZA GAYOSO DOROTEO",
      "dni":23886992,
      "ieId":""
    },
    {
      "nombres":"PACHECO CALDERON NOEMI AURORA",
      "dni":24946633,
      "ieId":""
    },
    {
      "nombres":"PIMENTEL CONDORI YONI",
      "dni":23968847,
      "ieId":""
    },
    {
      "nombres":"PONCE MEDRANO NORMA",
      "dni":23933884,
      "ieId":""
    },
    {
      "nombres":"POVEA QUINTANILLA JUAN CARLOS",
      "dni":23963843,
      "ieId":""
    },
    {
      "nombres":"RIVERA VELARDE JOHNNY RICHARD",
      "dni":25005127,
      "ieId":""
    },
    {
      "nombres":"ROMERO JALIXTO ISRAEL",
      "dni":40353011,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CAÑIHUA ISABEL",
      "dni":23957194,
      "ieId":""
    },
    {
      "nombres":"SUNI GUTIERREZ OLGER TEODORO",
      "dni":24978794,
      "ieId":""
    },
    {
      "nombres":"TRUJILLANO ORMACHEA LESLY EMPERATRIZ",
      "dni":23822860,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI SOLIS NICANOR",
      "dni":24954600,
      "ieId":""
    },
    {
      "nombres":"VILLENA HUAYLLAPUMA CESAR",
      "dni":24361310,
      "ieId":""
    },
    {
      "nombres":"APAZA VILCAZAN MAXIMO PABLO",
      "dni":2145938,
      "ieId":""
    },
    {
      "nombres":"ESTUMBELO ALLER FREDY",
      "dni":25009439,
      "ieId":""
    },
    {
      "nombres":"MAR MEZA WALKER",
      "dni":23824983,
      "ieId":""
    },
    {
      "nombres":"MOLINA HUAMAN GILDA GERARDINA",
      "dni":24965550,
      "ieId":""
    },
    {
      "nombres":"PIMENTEL CALA SARA",
      "dni":24965506,
      "ieId":""
    },
    {
      "nombres":"PIMENTEL CUADROS JESUS",
      "dni":24949169,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUARANCCA LOLO",
      "dni":24948895,
      "ieId":""
    },
    {
      "nombres":"AYALA FLORES JOHN",
      "dni":25005187,
      "ieId":""
    },
    {
      "nombres":"AYCA CANA AUGUSTO",
      "dni":24994360,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HINOJOSA LUIS ALBERTO",
      "dni":24951623,
      "ieId":""
    },
    {
      "nombres":"MAYTA LOVATON MIRIAM KARINNA",
      "dni":40092187,
      "ieId":""
    },
    {
      "nombres":"NIHUA UMERES ROSMERY",
      "dni":23964934,
      "ieId":""
    },
    {
      "nombres":"ORTIZ BERMUDEZ DANIEL",
      "dni":24945931,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI QUISPE FLOR CONCEPCION",
      "dni":25004872,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA CALDERON IVAN",
      "dni":25005000,
      "ieId":""
    },
    {
      "nombres":"ALVA LEYVA NORA YVONE",
      "dni":8497839,
      "ieId":""
    },
    {
      "nombres":"CASTILLO GALLEGOS PEDRO",
      "dni":23847935,
      "ieId":""
    },
    {
      "nombres":"CCOA ZARATE AUGUSTO",
      "dni":24994884,
      "ieId":""
    },
    {
      "nombres":"FLORES PUCHANA VICENTE",
      "dni":24941023,
      "ieId":""
    },
    {
      "nombres":"GONZALES BEDOYA MARIA",
      "dni":25008925,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA VALENCIA RICHARD",
      "dni":23995764,
      "ieId":""
    },
    {
      "nombres":"HUAMAN BACA CESAR PERCY",
      "dni":40131029,
      "ieId":""
    },
    {
      "nombres":"LEIVA WILSON FREDDY",
      "dni":24993946,
      "ieId":""
    },
    {
      "nombres":"LUNA OLIVERA LUZ ELIANA",
      "dni":40849999,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ CASTRO VICTOR",
      "dni":24941645,
      "ieId":""
    },
    {
      "nombres":"SOLIS SILVA ARMANDO",
      "dni":25008782,
      "ieId":""
    },
    {
      "nombres":"VERA ALMARAZ MARIA MILUSCA",
      "dni":24951302,
      "ieId":""
    },
    {
      "nombres":"ZAPATA LOPEZ JUAN JAVIER",
      "dni":24950085,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO ARIAS TITO",
      "dni":40209293,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CALDERON DIONICIO",
      "dni":24940753,
      "ieId":""
    },
    {
      "nombres":"CACERES UGARTE JORGE",
      "dni":7744971,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ BERRIOS DE RIVER ROSMERI",
      "dni":40608980,
      "ieId":""
    },
    {
      "nombres":"FLOREZ RODRIGUEZ JESUS",
      "dni":24941721,
      "ieId":""
    },
    {
      "nombres":"GOMEZ SALAS ROGELIO",
      "dni":1853823,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CARDENAS DONATO",
      "dni":40793835,
      "ieId":""
    },
    {
      "nombres":"MAMANI AYMA NANCY LUISA",
      "dni":2436628,
      "ieId":""
    },
    {
      "nombres":"RIMACHI YUPANQUI MARIO",
      "dni":23968691,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CAVERO DIDI ANTONIO",
      "dni":25004565,
      "ieId":""
    },
    {
      "nombres":"SERRANO FLOREZ OSCAR",
      "dni":23965232,
      "ieId":""
    },
    {
      "nombres":"TINAJEROS TAPIA EDGAR ALFREDO",
      "dni":10679145,
      "ieId":""
    },
    {
      "nombres":"TOMAYCONZA HUAHUACHAMPI HERMELINDA",
      "dni":2288069,
      "ieId":""
    },
    {
      "nombres":"VARGAS USCAPI HIGIDIO",
      "dni":24972763,
      "ieId":""
    },
    {
      "nombres":"ZAVALA CCOLQQUE BENEDICTO",
      "dni":24964677,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ JURADO JESUS",
      "dni":25004384,
      "ieId":""
    },
    {
      "nombres":"ANDRADE MUÑOZ ELVERST",
      "dni":24965849,
      "ieId":""
    },
    {
      "nombres":"BEJAR ARDILES EVA ESPERANZA",
      "dni":40891999,
      "ieId":""
    },
    {
      "nombres":"BOHORQUEZ QUISPE DELIA",
      "dni":24495017,
      "ieId":""
    },
    {
      "nombres":"CUBA MOSCOSO VITO WASHINGTON",
      "dni":24940797,
      "ieId":""
    },
    {
      "nombres":"CURO VERA SAIDA",
      "dni":41794018,
      "ieId":""
    },
    {
      "nombres":"CUTUCALLA MOLLEHUANCA FREDY GERMAN",
      "dni":41157028,
      "ieId":""
    },
    {
      "nombres":"ESTRADA LOVATON CLARENCE",
      "dni":23923475,
      "ieId":""
    },
    {
      "nombres":"HALLASI APAZA ELOY",
      "dni":24980469,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUACAC JAIME",
      "dni":23984783,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MIRANDA WILBER",
      "dni":24991454,
      "ieId":""
    },
    {
      "nombres":"POZO LAIME NANCY",
      "dni":24947253,
      "ieId":""
    },
    {
      "nombres":"QUISPE APAZA ELSA SOLEDAD",
      "dni":797718,
      "ieId":""
    },
    {
      "nombres":"VALLE HUAMAN DAVID",
      "dni":41915354,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ CUTIPA CARLOS ARTURO",
      "dni":41886169,
      "ieId":""
    },
    {
      "nombres":"VELASCO SEQUEIROS EDWIN PORFIRIO",
      "dni":24970121,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE UÑURUCO DANNY DANIEL",
      "dni":42571705,
      "ieId":""
    },
    {
      "nombres":"ACUÑA VELASQUEZ JOB DANIEL",
      "dni":30675932,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ PEREZ GLADYS",
      "dni":23860133,
      "ieId":""
    },
    {
      "nombres":"DIAZ SALDAÑA PEDRO LUIS",
      "dni":27151524,
      "ieId":""
    },
    {
      "nombres":"QUISPE CORIMANYA YESICA",
      "dni":44850289,
      "ieId":""
    },
    {
      "nombres":"ARDILES HUAYTA BLANCA FLOR",
      "dni":41426017,
      "ieId":""
    },
    {
      "nombres":"AUCCAPUMA QUILLAHUAMAN DOMINGO",
      "dni":24980348,
      "ieId":""
    },
    {
      "nombres":"CABRERA QUINTANILLA CARLOS ABEL",
      "dni":24979668,
      "ieId":""
    },
    {
      "nombres":"CHOQUECHAMBI DE CHIHUAN FELICITAS GLORIA",
      "dni":24945146,
      "ieId":""
    },
    {
      "nombres":"RONDON POBLETE FLOR DE MARIA",
      "dni":23949499,
      "ieId":""
    },
    {
      "nombres":"SALAZAR CENTENO VICTORIA",
      "dni":24941698,
      "ieId":""
    },
    {
      "nombres":"CHURA SERRANO MARIA NOHEMI",
      "dni":23971407,
      "ieId":""
    },
    {
      "nombres":"DEL POZO SOLORZANO ROSA",
      "dni":24946804,
      "ieId":""
    },
    {
      "nombres":"MUNIZ AUCAILLE FELIPA NERI",
      "dni":24953153,
      "ieId":""
    },
    {
      "nombres":"RAMOS BRAVO MARGARITA",
      "dni":24946844,
      "ieId":""
    },
    {
      "nombres":"TELLO DE USCA ROSA MARINA",
      "dni":24950916,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA DURAN CLODOMIRO RENATO",
      "dni":25300057,
      "ieId":""
    },
    {
      "nombres":"VARGAS SALAZAR GUSTAVO LEONIDAS",
      "dni":41046877,
      "ieId":""
    },
    {
      "nombres":"ARIAS DUEÑAS NORMA",
      "dni":25008538,
      "ieId":""
    },
    {
      "nombres":"BARRETO JARA DEMETRIO",
      "dni":23868960,
      "ieId":""
    },
    {
      "nombres":"CHACON DIAZ LUISA BERTHA",
      "dni":25009261,
      "ieId":""
    },
    {
      "nombres":"DEL POZO CONDORI EMMA",
      "dni":23971418,
      "ieId":""
    },
    {
      "nombres":"HURTADO PEÑA RENE MAXIMO",
      "dni":24994661,
      "ieId":""
    },
    {
      "nombres":"LEON HUARANCCA ROGER",
      "dni":23976588,
      "ieId":""
    },
    {
      "nombres":"MORVELI RAMIREZ LUZGARDA",
      "dni":24990315,
      "ieId":""
    },
    {
      "nombres":"PAYE PHOCCO RAMON",
      "dni":24985375,
      "ieId":""
    },
    {
      "nombres":"ROMERO FERNANDEZ WILLIAM",
      "dni":24965967,
      "ieId":""
    },
    {
      "nombres":"SORIA MORMONTOY JERONIMO",
      "dni":24986351,
      "ieId":""
    },
    {
      "nombres":"VALDEIGLESIAS MAMANI MARIA CECILIA",
      "dni":25008617,
      "ieId":""
    },
    {
      "nombres":"WARTHON DE URQUIZO FABIOLA",
      "dni":24948864,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA FARFAN RAUL",
      "dni":24993635,
      "ieId":""
    },
    {
      "nombres":"ZANS AGUIRRE MIGUEL",
      "dni":23800996,
      "ieId":""
    },
    {
      "nombres":"CACERES CASQUINO ERIKA ROSA LUZ",
      "dni":29620828,
      "ieId":""
    },
    {
      "nombres":"CONDORI HUANCA NELIDA",
      "dni":30863376,
      "ieId":""
    },
    {
      "nombres":"FLORES CONDORI EDDIE ROBIN",
      "dni":41315593,
      "ieId":""
    },
    {
      "nombres":"MEZA GUTIERREZ CORNELIA",
      "dni":29594232,
      "ieId":""
    },
    {
      "nombres":"UGARTE OLIVO LUZ MARINA",
      "dni":24947000,
      "ieId":""
    },
    {
      "nombres":"CCALLUCO HUALLPA ESTHER",
      "dni":24990359,
      "ieId":""
    },
    {
      "nombres":"GUZMAN MEZA HAMMI EDITH",
      "dni":40858590,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ HUAMANTICA YONI",
      "dni":40846409,
      "ieId":""
    },
    {
      "nombres":"ORUE USCA LEDDA SORINA",
      "dni":24982312,
      "ieId":""
    },
    {
      "nombres":"ELORRIETA FLOREZ CAROLA MERCEDES",
      "dni":23925156,
      "ieId":""
    },
    {
      "nombres":"GUEVARA ORTEGA EDY KARINA",
      "dni":25001184,
      "ieId":""
    },
    {
      "nombres":"OJEDA PANCORBO RAFAELA OBDULIA",
      "dni":24961856,
      "ieId":""
    },
    {
      "nombres":"ZAVALA CACERES ESTER MARIBEL",
      "dni":43633472,
      "ieId":""
    },
    {
      "nombres":"HUAYTA MENDOZA NORMA",
      "dni":43676250,
      "ieId":""
    },
    {
      "nombres":"YEPEZ REYES RAQUEL",
      "dni":24980986,
      "ieId":""
    },
    {
      "nombres":"CASAPINO GONZALES SHIRLEY",
      "dni":40137867,
      "ieId":""
    },
    {
      "nombres":"NAVARRO VILLENA VILMA VIRGINIA",
      "dni":23858204,
      "ieId":""
    },
    {
      "nombres":"QUISPE HERRERA LUZWIN ABIGAIL",
      "dni":23952718,
      "ieId":""
    },
    {
      "nombres":"QUISPE VALENCIA SUSAN",
      "dni":25004291,
      "ieId":""
    },
    {
      "nombres":"CORINTI SANI MARIA NELY",
      "dni":24946951,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MENESES CAROLINA",
      "dni":46843794,
      "ieId":""
    },
    {
      "nombres":"OVIEDO TORRES ROSA MARGOT",
      "dni":24990636,
      "ieId":""
    },
    {
      "nombres":"VARGAS APAZA UBALDINA",
      "dni":24978908,
      "ieId":""
    },
    {
      "nombres":"LOCUMBER GUILLEN LUZ MARINA",
      "dni":23946101,
      "ieId":""
    },
    {
      "nombres":"LOVATON PERALTA YENNY",
      "dni":44086628,
      "ieId":""
    },
    {
      "nombres":"MENDOZA BOLIVAR ELISA",
      "dni":42311455,
      "ieId":""
    },
    {
      "nombres":"ARIAS OLARTE FELICIA",
      "dni":23970392,
      "ieId":""
    },
    {
      "nombres":"CRUZ COLLANTES CAROLINA",
      "dni":23970177,
      "ieId":""
    },
    {
      "nombres":"MENTIANI CRUZ LIZBETH",
      "dni":44241220,
      "ieId":""
    },
    {
      "nombres":"MORALES DIAZ GLADIZ",
      "dni":43452950,
      "ieId":""
    },
    {
      "nombres":"PANDURO RIOS VILMA",
      "dni":23970136,
      "ieId":""
    },
    {
      "nombres":"AMPICHI FEDERICO ROSA MERCEDES",
      "dni":24992858,
      "ieId":""
    },
    {
      "nombres":"VALLES AMPICHI ROSA MARILI",
      "dni":46169473,
      "ieId":""
    },
    {
      "nombres":"HUIRCY PANTOJA KATY",
      "dni":41405091,
      "ieId":""
    },
    {
      "nombres":"JAYOS CRUZ PAULI",
      "dni":24991730,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE MEDINA LUZ MARINA",
      "dni":24979025,
      "ieId":""
    },
    {
      "nombres":"DIAZ SEBASTIAN DIANA KATATO",
      "dni":46415360,
      "ieId":""
    },
    {
      "nombres":"DIAZ SEBASTIAN EMA",
      "dni":24992810,
      "ieId":""
    },
    {
      "nombres":"PITEANI CHAVEZ SABEL ARELI",
      "dni":47716127,
      "ieId":""
    },
    {
      "nombres":"SHIVITUERORI ANDRES FIDELIA",
      "dni":70220093,
      "ieId":""
    },
    {
      "nombres":"SIMON SALAZAR IRMA",
      "dni":60103852,
      "ieId":""
    },
    {
      "nombres":"RIOS SEBASTIAN OLGA",
      "dni":23970231,
      "ieId":""
    },
    {
      "nombres":"MENKORI MATIIAS DALI LUZ",
      "dni":70219895,
      "ieId":""
    },
    {
      "nombres":"MIQUEAS DEMETRIZ NALVINA",
      "dni":43401272,
      "ieId":""
    },
    {
      "nombres":"RIOS SHERIGOROMPI AYDE",
      "dni":44194884,
      "ieId":""
    },
    {
      "nombres":"NAVEROS VALDERRAMA FLOR MELINA",
      "dni":25001429,
      "ieId":""
    },
    {
      "nombres":"SIMON FRANCO FLORINDA",
      "dni":23970746,
      "ieId":""
    },
    {
      "nombres":"SIMON RODRIGUEZ EUDOCIA",
      "dni":80388705,
      "ieId":""
    },
    {
      "nombres":"VARGAS PACAYA PATRICIA",
      "dni":23970236,
      "ieId":""
    },
    {
      "nombres":"VARGAS PACAYA TRINI",
      "dni":80151651,
      "ieId":""
    },
    {
      "nombres":"PEREIRA KASHIARI MERCEDES",
      "dni":23970108,
      "ieId":""
    },
    {
      "nombres":"SEBASTIAN CALEB ERLITA",
      "dni":41892683,
      "ieId":""
    },
    {
      "nombres":"ISACIO LANDA ALCIRA",
      "dni":41293881,
      "ieId":""
    },
    {
      "nombres":"MATIAS BERNALDEZ DINA",
      "dni":24996951,
      "ieId":""
    },
    {
      "nombres":"BINARI PANGOA MARIA DE LOS REYES",
      "dni":46302521,
      "ieId":""
    },
    {
      "nombres":"METAKI TIPE AIDEE",
      "dni":45834102,
      "ieId":""
    },
    {
      "nombres":"CHORONTO VICENTE LISBETH CANETH",
      "dni":44276457,
      "ieId":""
    },
    {
      "nombres":"KATEGARI HIVIS VIOLETA",
      "dni":42891989,
      "ieId":""
    },
    {
      "nombres":"RIOS DIAZ SADIH",
      "dni":70221119,
      "ieId":""
    },
    {
      "nombres":"SAPAPOARI PINEDO BETHY MARTELL",
      "dni":45330056,
      "ieId":""
    },
    {
      "nombres":"ISHAY TYORIRORI NEREDITH",
      "dni":47754141,
      "ieId":""
    },
    {
      "nombres":"CARDENAS RAMIREZ FELICITA",
      "dni":24996456,
      "ieId":""
    },
    {
      "nombres":"PALOMINO HUAMAN JUAN",
      "dni":46049878,
      "ieId":""
    },
    {
      "nombres":"JARA VALDEZ GABRIELA",
      "dni":45229880,
      "ieId":""
    },
    {
      "nombres":"BENAVENTE BARRETO SONIA BEBELU",
      "dni":24953874,
      "ieId":""
    },
    {
      "nombres":"CARPIO ROSA ALEJANDRO",
      "dni":24996626,
      "ieId":""
    },
    {
      "nombres":"DURAND TORRES ELISABETH",
      "dni":25010470,
      "ieId":""
    },
    {
      "nombres":"FLORES MORALES EDITH",
      "dni":25008783,
      "ieId":""
    },
    {
      "nombres":"OLAVE QUIÑONEZ JESUS GERARDO",
      "dni":25009084,
      "ieId":""
    },
    {
      "nombres":"PRUDENCIO PINEDO PILAR",
      "dni":24960826,
      "ieId":""
    },
    {
      "nombres":"CUELLAR HUAMAN LUZ",
      "dni":24987577,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO AYALA NORMA CAROLINA",
      "dni":23968810,
      "ieId":""
    },
    {
      "nombres":"FERRO LOAIZA NILDA NICOLASA",
      "dni":23835927,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SANCHEZ RAUL SATURNINO",
      "dni":24940325,
      "ieId":""
    },
    {
      "nombres":"PAREJA CLAVERI WASHINGTON",
      "dni":24958727,
      "ieId":""
    },
    {
      "nombres":"PEZO POHCORI FREDY",
      "dni":24886730,
      "ieId":""
    },
    {
      "nombres":"SILVA ZUÑIGA RAUL",
      "dni":24956370,
      "ieId":""
    },
    {
      "nombres":"USCA CARAYHUA ROSALIA",
      "dni":23861390,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS MEZA SUSANA",
      "dni":24982237,
      "ieId":""
    },
    {
      "nombres":"PUMA QUISPE ANTONINA",
      "dni":24992051,
      "ieId":""
    },
    {
      "nombres":"TINTAYA FELIX ISAIAS",
      "dni":25010169,
      "ieId":""
    },
    {
      "nombres":"AQUINO SULLCA JULIO CESAR",
      "dni":43665696,
      "ieId":""
    },
    {
      "nombres":"BUENO ALOSILLA HILDA CLORINDA",
      "dni":24957994,
      "ieId":""
    },
    {
      "nombres":"CENTENO SALAS NOHEMI",
      "dni":25009012,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ HALANOCCA JESUS",
      "dni":24663052,
      "ieId":""
    },
    {
      "nombres":"DELGADO RAMIREZ YESSICA",
      "dni":40016573,
      "ieId":""
    },
    {
      "nombres":"ESTOMBELO TACO CASIMIRO",
      "dni":25304681,
      "ieId":""
    },
    {
      "nombres":"FLOREZ RODRIGUEZ MARTHA NANCI",
      "dni":24942910,
      "ieId":""
    },
    {
      "nombres":"GARCIA HUAMAN ISABELINA",
      "dni":24956394,
      "ieId":""
    },
    {
      "nombres":"GONZALES HUAMAN JORGE RICARDO",
      "dni":43692591,
      "ieId":""
    },
    {
      "nombres":"GUZMAN MEZA YOANY",
      "dni":40181296,
      "ieId":""
    },
    {
      "nombres":"HERRERA BUSTAMANTE ROSARIO",
      "dni":24960698,
      "ieId":""
    },
    {
      "nombres":"HUARACHA DIAZ JUANA GLADIS",
      "dni":24987600,
      "ieId":""
    },
    {
      "nombres":"LATORRE DE MEZA MARIA",
      "dni":24958382,
      "ieId":""
    },
    {
      "nombres":"MATHEUS PALMA BERTHA NOHEMI",
      "dni":23809821,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MASIAS MARUJA",
      "dni":25302131,
      "ieId":""
    },
    {
      "nombres":"MEZA BERRIO CARMELA",
      "dni":23935996,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ AYALA FRANCISCO",
      "dni":23840824,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ PALOMINO PRISCA",
      "dni":24958557,
      "ieId":""
    },
    {
      "nombres":"TUPIA SALAZAR ERWIN JOSE",
      "dni":24993069,
      "ieId":""
    },
    {
      "nombres":"ROJAS CCAPATINTA CARYLADY",
      "dni":25012135,
      "ieId":""
    },
    {
      "nombres":"SALAS ERRASQUIN NESTOR",
      "dni":24951111,
      "ieId":""
    },
    {
      "nombres":"GUZMAN TORRES ROSANA",
      "dni":24983785,
      "ieId":""
    },
    {
      "nombres":"YANCCAY ORTIZ NOEMI",
      "dni":24978612,
      "ieId":""
    },
    {
      "nombres":"ACHIRCANO RIOS RUTH MERY",
      "dni":41845773,
      "ieId":""
    },
    {
      "nombres":"ATAYUPANQUI QUISPE AGRIPINO",
      "dni":25321673,
      "ieId":""
    },
    {
      "nombres":"CENTENO CATALAN BLASCO ANTONIO",
      "dni":9396381,
      "ieId":""
    },
    {
      "nombres":"MEJIA ESCOBEDO ROSA ELVIRA",
      "dni":24941707,
      "ieId":""
    },
    {
      "nombres":"QUISPICHO AMAT NELLY",
      "dni":24710735,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO VILLAFUERTE MARINA",
      "dni":24981740,
      "ieId":""
    },
    {
      "nombres":"IRAGAKORI BINARI MARTA AMPARO",
      "dni":23842450,
      "ieId":""
    },
    {
      "nombres":"CONTO QUISPE CATALINA",
      "dni":28997857,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ ARREDONDO LEONARDO",
      "dni":24940133,
      "ieId":""
    },
    {
      "nombres":"OROS ESCOBAR REDI",
      "dni":24988242,
      "ieId":""
    },
    {
      "nombres":"TTITO LUPE ESTEFANIA",
      "dni":24949094,
      "ieId":""
    },
    {
      "nombres":"CHACON RICALDE FRIDA",
      "dni":41496592,
      "ieId":""
    },
    {
      "nombres":"CASTRO PALOMINO VISITACION",
      "dni":24993070,
      "ieId":""
    },
    {
      "nombres":"SIMON ECHEGARAY GLADYS",
      "dni":24965658,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL CANAL JESUS",
      "dni":24974655,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PUMA ALBERTO",
      "dni":24951065,
      "ieId":""
    },
    {
      "nombres":"QUISPE GOMEZ CARMEN ANGELINA",
      "dni":41061405,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ TORRES ROSALIO",
      "dni":24961174,
      "ieId":""
    },
    {
      "nombres":"CANDIA VALDEZ NAY RUTH",
      "dni":24982394,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA SOLIS MAXIMO",
      "dni":24940578,
      "ieId":""
    },
    {
      "nombres":"ZUZUNAGA CARRASCO FRIDA",
      "dni":24956427,
      "ieId":""
    },
    {
      "nombres":"CARPIO MARTIARENA MAURO FRANCISCO",
      "dni":24378148,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO PEÑA ALEJANDRO",
      "dni":24956532,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ LAZO ERNESTO",
      "dni":24966921,
      "ieId":""
    },
    {
      "nombres":"GRANADOS CALLAYMARA JUVISSA",
      "dni":43528480,
      "ieId":""
    },
    {
      "nombres":"QUISPE HERRERA DARWIN JAIME",
      "dni":23864429,
      "ieId":""
    },
    {
      "nombres":"RAMOS ESCALANTE LUCILA",
      "dni":24993841,
      "ieId":""
    },
    {
      "nombres":"DAVALOS DAVALOS MAGALY",
      "dni":24990223,
      "ieId":""
    },
    {
      "nombres":"HUILLCARA CORONADO SANTA CRUZ",
      "dni":28997856,
      "ieId":""
    },
    {
      "nombres":"MALPARTIDA CORRALES YANET MARIA",
      "dni":25010270,
      "ieId":""
    },
    {
      "nombres":"SURCO YUCRA JUAN",
      "dni":24940069,
      "ieId":""
    },
    {
      "nombres":"FRISANCHO VILLENA LUIS ALBERTO",
      "dni":40410368,
      "ieId":""
    },
    {
      "nombres":"LLANCAY CHALLCO MARCELINA",
      "dni":23989317,
      "ieId":""
    },
    {
      "nombres":"PEREZ ALAGON LAURA",
      "dni":24947493,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VARGAS GLORIA",
      "dni":23812774,
      "ieId":""
    },
    {
      "nombres":"CACERES ARIAS ELISEO",
      "dni":24959686,
      "ieId":""
    },
    {
      "nombres":"CANDIA QUISPE JAVIER DARWIN",
      "dni":25009064,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ SAÑAC YESICA LISBETH",
      "dni":25004541,
      "ieId":""
    },
    {
      "nombres":"DAVALOS PEÑA MARINA",
      "dni":24982088,
      "ieId":""
    },
    {
      "nombres":"ECHARRY GAMARRA FERNANDO EMILIO",
      "dni":23915371,
      "ieId":""
    },
    {
      "nombres":"GAMARRA RIOS MARIA SOLEDAD",
      "dni":24460777,
      "ieId":""
    },
    {
      "nombres":"GUEVARA ZAPATA VERONICA",
      "dni":25009417,
      "ieId":""
    },
    {
      "nombres":"JUAREZ GARCIA JOSE",
      "dni":24948264,
      "ieId":""
    },
    {
      "nombres":"LEIVA GUZMAN HILARIA SONIA",
      "dni":25004576,
      "ieId":""
    },
    {
      "nombres":"MIRANDA YUPANQUI ALINA CATALINA",
      "dni":23830252,
      "ieId":""
    },
    {
      "nombres":"MOLLO CHOQUE TERESA",
      "dni":23826966,
      "ieId":""
    },
    {
      "nombres":"MONROY GAMBOA VANESSA AMALIS",
      "dni":43143460,
      "ieId":""
    },
    {
      "nombres":"ROMERO ESCOBEDO HERNANI",
      "dni":24950274,
      "ieId":""
    },
    {
      "nombres":"VALVERDE LOPEZ MARIBEL",
      "dni":23934574,
      "ieId":""
    },
    {
      "nombres":"VILA CONDORI ANGELICA",
      "dni":24993628,
      "ieId":""
    },
    {
      "nombres":"YARIN ALVAREZ LUIS GERMAN",
      "dni":23926332,
      "ieId":""
    },
    {
      "nombres":"ENRIQUEZ QUINTANA NESTOR",
      "dni":23926871,
      "ieId":""
    },
    {
      "nombres":"ZERON BASCOPE ROMEO",
      "dni":24990798,
      "ieId":""
    },
    {
      "nombres":"OLAZABAL AVILES ROSARIO",
      "dni":24965530,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA USCA BENEDICTO",
      "dni":25304100,
      "ieId":""
    },
    {
      "nombres":"HILARES CALDERON SARA",
      "dni":24995651,
      "ieId":""
    },
    {
      "nombres":"LAURA SALAS NIDIA MABEL",
      "dni":40050903,
      "ieId":""
    },
    {
      "nombres":"ROJAS CCASA LUZ MARINA",
      "dni":42335950,
      "ieId":""
    },
    {
      "nombres":"SUAREZ VALCARCEL MENDEL",
      "dni":24990908,
      "ieId":""
    },
    {
      "nombres":"LOVON PALOMINO MARGOT MIANNY",
      "dni":40553332,
      "ieId":""
    },
    {
      "nombres":"MORVELI APAZA ROBELIO",
      "dni":24948989,
      "ieId":""
    },
    {
      "nombres":"ZAMORA PALOMINO ANTONIA",
      "dni":25012119,
      "ieId":""
    },
    {
      "nombres":"MADERA TORRES LUCRECIA",
      "dni":24944465,
      "ieId":""
    },
    {
      "nombres":"MEDINA CANDIA JULIA",
      "dni":23908375,
      "ieId":""
    },
    {
      "nombres":"ALMIRON QUISPE PAULINA",
      "dni":24981655,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS CHAVEZ RUTH",
      "dni":40757782,
      "ieId":""
    },
    {
      "nombres":"RAMOS SANCHEZ VILMA HAYDEE",
      "dni":41910280,
      "ieId":""
    },
    {
      "nombres":"RIMACHI ALEGRIA MARILUZ",
      "dni":24994353,
      "ieId":""
    },
    {
      "nombres":"ROMAN QUISPE ELISA",
      "dni":23865895,
      "ieId":""
    },
    {
      "nombres":"CHAMPI VARGAS JUANA",
      "dni":24980196,
      "ieId":""
    },
    {
      "nombres":"CHIRINOS ESTRADA JULIAN",
      "dni":42677676,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI DURAN LUZ MARINA",
      "dni":24947885,
      "ieId":""
    },
    {
      "nombres":"DELGADO FIGUEROA CARLOS",
      "dni":23995694,
      "ieId":""
    },
    {
      "nombres":"POZO TUPAYACHI HERMILA",
      "dni":24991541,
      "ieId":""
    },
    {
      "nombres":"VALLE ASCUE RAUL BERNARDO",
      "dni":24982055,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ SAÑAC CHARO",
      "dni":24991580,
      "ieId":""
    },
    {
      "nombres":"HANCCO MONTESINOS HUGO",
      "dni":25320213,
      "ieId":""
    },
    {
      "nombres":"QUISPE MORALES RAUL",
      "dni":24994523,
      "ieId":""
    },
    {
      "nombres":"CHALLCO CORRALES AVELINO",
      "dni":24994208,
      "ieId":""
    },
    {
      "nombres":"HUAMANI GUZMAN DIONICIO",
      "dni":24991130,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCAMA NANCY",
      "dni":42205055,
      "ieId":""
    },
    {
      "nombres":"JARA ZUÑIGA KAROL YNGRITH",
      "dni":43851843,
      "ieId":""
    },
    {
      "nombres":"MEDINA GUZMAN EFRAIN",
      "dni":24943637,
      "ieId":""
    },
    {
      "nombres":"GONZALES SOLIS RUTH NOEMI",
      "dni":24997980,
      "ieId":""
    },
    {
      "nombres":"PANIGUARA PALOMINO PAULINO",
      "dni":24944399,
      "ieId":""
    },
    {
      "nombres":"MINAURO VILLAVICENCIO LUCIANO",
      "dni":24980333,
      "ieId":""
    },
    {
      "nombres":"QUISPE PUMA SERGIO",
      "dni":40410381,
      "ieId":""
    },
    {
      "nombres":"AGUILAR CHOQUE ALBERTINA",
      "dni":41156159,
      "ieId":""
    },
    {
      "nombres":"ANDRADE COCHAN PERCY",
      "dni":24958716,
      "ieId":""
    },
    {
      "nombres":"CHIPANA HUAMAN YESICA",
      "dni":24951619,
      "ieId":""
    },
    {
      "nombres":"HUARI QUISPE ALFREDO",
      "dni":41393703,
      "ieId":""
    },
    {
      "nombres":"RIOS RODAS GUIDO",
      "dni":40567491,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA ESPINO YOANS YANNETT",
      "dni":80120335,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA ITURRIAGA LUZ MARIA",
      "dni":23989454,
      "ieId":""
    },
    {
      "nombres":"ARAGON MEZA OSCAR HONORIO",
      "dni":24702230,
      "ieId":""
    },
    {
      "nombres":"CACERES POBLETE MARIO",
      "dni":24952439,
      "ieId":""
    },
    {
      "nombres":"CALVO FARFAN LUZ MARINA",
      "dni":31543067,
      "ieId":""
    },
    {
      "nombres":"CAMERO ARREDONDO JUDITH",
      "dni":45051318,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO DEL CARPIO BEATRIZ",
      "dni":24970568,
      "ieId":""
    },
    {
      "nombres":"DOLMOS CORTEZ ROLANDO SEBASTIAN",
      "dni":23874458,
      "ieId":""
    },
    {
      "nombres":"GARRIDO LOZANO SARA",
      "dni":24994096,
      "ieId":""
    },
    {
      "nombres":"HUALLPA SUYO ELISABET",
      "dni":24982091,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PEDRAZA JOSEFINA",
      "dni":24981589,
      "ieId":""
    },
    {
      "nombres":"LOAYZA DUEÑAS ROSA",
      "dni":80474481,
      "ieId":""
    },
    {
      "nombres":"MAMANI MAMANI HUGO",
      "dni":7344163,
      "ieId":""
    },
    {
      "nombres":"ORTIZ YUTO ANA YOVANNA",
      "dni":25012064,
      "ieId":""
    },
    {
      "nombres":"RAMOS SANCHEZ MARGOT",
      "dni":24990337,
      "ieId":""
    },
    {
      "nombres":"RIVERA LIMASCCA WILBERT",
      "dni":25006964,
      "ieId":""
    },
    {
      "nombres":"SALLO LEON CLORINDA",
      "dni":23862865,
      "ieId":""
    },
    {
      "nombres":"YUPANQUI UMERES YORLENI ZADIA",
      "dni":24965487,
      "ieId":""
    },
    {
      "nombres":"FARFAN SAIRE BADIK",
      "dni":40089103,
      "ieId":""
    },
    {
      "nombres":"MONTEVILLER ARAGON MARIA SOLEDAD",
      "dni":40735049,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CARDENAS FRIZELL",
      "dni":25001004,
      "ieId":""
    },
    {
      "nombres":"ESTRADA SAMATA HILARIO",
      "dni":24946744,
      "ieId":""
    },
    {
      "nombres":"MIRANDA SILVA SENAYDA EUFEMIA",
      "dni":24994459,
      "ieId":""
    },
    {
      "nombres":"PAREDES MAMANI JOSE LUIS",
      "dni":24670488,
      "ieId":""
    },
    {
      "nombres":"ZAMORA PUMA VICTOR",
      "dni":24975699,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA ALVAREZ ALCIRA",
      "dni":24991067,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ TOCRE ROGER",
      "dni":40280025,
      "ieId":""
    },
    {
      "nombres":"OCHOA CCORIMANYA FLORENCIO",
      "dni":24947766,
      "ieId":""
    },
    {
      "nombres":"QUISPE SERRANO LUZ MARINA",
      "dni":24994624,
      "ieId":""
    },
    {
      "nombres":"CCOTOHUANCA MAMANI JOSE",
      "dni":24719307,
      "ieId":""
    },
    {
      "nombres":"MARCAVILLACA QUISPE KATHERINE",
      "dni":40036006,
      "ieId":""
    },
    {
      "nombres":"CISNEROS SULLCAHUAMAN CECILIO ALFREDO",
      "dni":24956210,
      "ieId":""
    },
    {
      "nombres":"LONCONI HUAMAN WENDY",
      "dni":24001844,
      "ieId":""
    },
    {
      "nombres":"MOGROVEJO DELGADO EMILIANA",
      "dni":24991204,
      "ieId":""
    },
    {
      "nombres":"PUMACCAHUA QUISPE NOEMI",
      "dni":44535560,
      "ieId":""
    },
    {
      "nombres":"VALDERRAMA AÑO ANEL FLORINDA",
      "dni":24995313,
      "ieId":""
    },
    {
      "nombres":"PUMA MAMANI EFRAIN",
      "dni":40255527,
      "ieId":""
    },
    {
      "nombres":"CACERES QUISPE MERCEDES ERIKA",
      "dni":24389539,
      "ieId":""
    },
    {
      "nombres":"PEREA SANCHEZ OSCAR",
      "dni":25326048,
      "ieId":""
    },
    {
      "nombres":"FARFAN SINCHI KARINA",
      "dni":10179662,
      "ieId":""
    },
    {
      "nombres":"MONTEAGUDO LUNA NATIVIDAD MERCEDES",
      "dni":23885224,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ UMERES ERNESTO",
      "dni":40326258,
      "ieId":""
    },
    {
      "nombres":"FARFAN TELLO CARMEN YARUSKA",
      "dni":24391701,
      "ieId":""
    },
    {
      "nombres":"QUISPE VALENZUELA ELIANA",
      "dni":43827838,
      "ieId":""
    },
    {
      "nombres":"CABALLERO ESQUIVEL ERWIN EFRAIN",
      "dni":24705373,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ HANCCO FROILAN",
      "dni":41611673,
      "ieId":""
    },
    {
      "nombres":"QUISPE BASCOPE CESAR",
      "dni":41548740,
      "ieId":""
    },
    {
      "nombres":"CATALAN CAMAN JAIME",
      "dni":24966764,
      "ieId":""
    },
    {
      "nombres":"DIAZ OCHOA MARGARETH",
      "dni":41427152,
      "ieId":""
    },
    {
      "nombres":"HUALLPA ZUNIGA REBECA",
      "dni":23971550,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL ASPAJO YENCY MILENA",
      "dni":25012440,
      "ieId":""
    },
    {
      "nombres":"CCARI QUISPE YANE SANDRA",
      "dni":40432030,
      "ieId":""
    },
    {
      "nombres":"CHILO ORTIZ DE ORUE JHON EDGAR",
      "dni":40431913,
      "ieId":""
    },
    {
      "nombres":"CUSSI TIMPO RAUL",
      "dni":40663565,
      "ieId":""
    },
    {
      "nombres":"LUPINTA BUSTINZA ANGELICA VARQUILE",
      "dni":40197980,
      "ieId":""
    },
    {
      "nombres":"MONTALVO ESPINOZA ALICIA",
      "dni":40855844,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ BUSTAMANTE JENNY REYNALDO",
      "dni":24982950,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN HILDA",
      "dni":44013981,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUILLCA ROSALVINA",
      "dni":40347180,
      "ieId":""
    },
    {
      "nombres":"CCAYHUARI ESPINOZA TIMOTEA",
      "dni":120942,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ATAUCHI ANDRES AUGUSTO",
      "dni":42186582,
      "ieId":""
    },
    {
      "nombres":"GONZALES QUISPE ROBERT OSWALDO",
      "dni":24994758,
      "ieId":""
    },
    {
      "nombres":"GUZMAN CACERES MARLENY",
      "dni":24993810,
      "ieId":""
    },
    {
      "nombres":"OLIVERA HUARAYA ABEL",
      "dni":23804956,
      "ieId":""
    },
    {
      "nombres":"VILLAVICENCIO SARZANAUL PATRICIA",
      "dni":23976466,
      "ieId":""
    },
    {
      "nombres":"ZAPATA BANDERA RUTH",
      "dni":41757285,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA CCORIMANYA FLAVIO",
      "dni":24486896,
      "ieId":""
    },
    {
      "nombres":"PEÑA QUISPE VILMA",
      "dni":24994052,
      "ieId":""
    },
    {
      "nombres":"AGUILAR QUISPE DALMECIA",
      "dni":40512074,
      "ieId":""
    },
    {
      "nombres":"DIAZ OCHOA ROLANDO",
      "dni":25012570,
      "ieId":""
    },
    {
      "nombres":"IBARRA HUAMANI SELMA",
      "dni":25007708,
      "ieId":""
    },
    {
      "nombres":"CONDORI ROJAS BELU",
      "dni":42383044,
      "ieId":""
    },
    {
      "nombres":"MAMANI CUEVA LUIS GERARDO",
      "dni":43296123,
      "ieId":""
    },
    {
      "nombres":"OROYA JAYOS JOSE ANTONIO",
      "dni":24990885,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ PALOMINO PEPE",
      "dni":9915478,
      "ieId":""
    },
    {
      "nombres":"HUAHUAMAMANI CATUNTA OLGA",
      "dni":42043090,
      "ieId":""
    },
    {
      "nombres":"MAMANI HANCCO HUMBERTO",
      "dni":24948259,
      "ieId":""
    },
    {
      "nombres":"CHIPANA NINANQUI CESAR AUGUSTO",
      "dni":42482651,
      "ieId":""
    },
    {
      "nombres":"DEL POZO ACUÑA CARLOS PLACIDO",
      "dni":24980896,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HUAYHUA MERCEDES",
      "dni":41611678,
      "ieId":""
    },
    {
      "nombres":"CANDIA CARAZAS JUANA",
      "dni":23863511,
      "ieId":""
    },
    {
      "nombres":"DIAZ QUISPE MARCOS",
      "dni":25315146,
      "ieId":""
    },
    {
      "nombres":"ARDILES ESPINOZA JAMIRO",
      "dni":24981324,
      "ieId":""
    },
    {
      "nombres":"AYALA VILLAR LISBETH",
      "dni":25004697,
      "ieId":""
    },
    {
      "nombres":"CABRERA CHUMPISUCA JULIO CESAR",
      "dni":1343264,
      "ieId":""
    },
    {
      "nombres":"CALLAÑAUPA CARPIO IMELDA",
      "dni":41296097,
      "ieId":""
    },
    {
      "nombres":"CANDIA ESTRADA MONICA",
      "dni":24994817,
      "ieId":""
    },
    {
      "nombres":"CANO CORNEJO EDGAR",
      "dni":40574250,
      "ieId":""
    },
    {
      "nombres":"CUTIPA PARI ALEJANDRINO",
      "dni":1805558,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LUQUE MARTIN",
      "dni":24978345,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PALOMINO JUAN PABLO",
      "dni":24983000,
      "ieId":""
    },
    {
      "nombres":"HUILLCA OSCCO JORGE",
      "dni":44808995,
      "ieId":""
    },
    {
      "nombres":"LAURA HUALLPA JESSICA PAOLA",
      "dni":43958649,
      "ieId":""
    },
    {
      "nombres":"LLOCLLE ALVAREZ FELIX",
      "dni":24953595,
      "ieId":""
    },
    {
      "nombres":"MEZA QUISPE YANET",
      "dni":43527686,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ GARCIA ALICIA",
      "dni":23902801,
      "ieId":""
    },
    {
      "nombres":"PACHECO SOLIS KELLY",
      "dni":44889619,
      "ieId":""
    },
    {
      "nombres":"PANDO OLARTE URBANO",
      "dni":43466246,
      "ieId":""
    },
    {
      "nombres":"QUISPE VALDEZ SOSIMA",
      "dni":24990524,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUAMANI ELARD",
      "dni":42758500,
      "ieId":""
    },
    {
      "nombres":"ROMUACCA CARLOS LISBET",
      "dni":43236115,
      "ieId":""
    },
    {
      "nombres":"UMERES DELGADO ISABEL",
      "dni":24946794,
      "ieId":""
    },
    {
      "nombres":"COTRADO COTRADO ANGEL BERNABE",
      "dni":23883574,
      "ieId":""
    },
    {
      "nombres":"GARRIDO LOZANO ATILIO",
      "dni":24982093,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SANCHES RUDI",
      "dni":23928153,
      "ieId":""
    },
    {
      "nombres":"HUAYCOCHEA MORA NOHEMI",
      "dni":42761578,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA VARGAS SONIA",
      "dni":40397927,
      "ieId":""
    },
    {
      "nombres":"MOLINA HUAMAN MARTHA",
      "dni":24990901,
      "ieId":""
    },
    {
      "nombres":"VEGA CENTENO MOSCOSO RONALD",
      "dni":24994334,
      "ieId":""
    },
    {
      "nombres":"NIHUA UMERES WILFREDO",
      "dni":24982109,
      "ieId":""
    },
    {
      "nombres":"PEÑA CCURO MARIA ROSA",
      "dni":42387900,
      "ieId":""
    },
    {
      "nombres":"AUCCAHUALLPA FERNANDEZ JANET",
      "dni":41759715,
      "ieId":""
    },
    {
      "nombres":"CALLER CERECEDA NATALY",
      "dni":41358540,
      "ieId":""
    },
    {
      "nombres":"LOPEZ CACERES RICARDO",
      "dni":24990336,
      "ieId":""
    },
    {
      "nombres":"QUISPE ATAYUPANQUI RUFINA",
      "dni":23855366,
      "ieId":""
    },
    {
      "nombres":"PUMASUPA RAMOS SANDY",
      "dni":41288940,
      "ieId":""
    },
    {
      "nombres":"HERMOZA PILLCO MILKA",
      "dni":44721545,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI ROSO",
      "dni":24470884,
      "ieId":""
    },
    {
      "nombres":"DELGADO OBLITAS GLADYS",
      "dni":41164492,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HINOJOSA JUAN CARLOS",
      "dni":24981632,
      "ieId":""
    },
    {
      "nombres":"MIRANDA GUDIEL ANA KARINA",
      "dni":23981795,
      "ieId":""
    },
    {
      "nombres":"AYALA USCA NEMECIA ANTONIETA",
      "dni":24943777,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA HUAMAN DORELLY DOLLY",
      "dni":40720798,
      "ieId":""
    },
    {
      "nombres":"BELLIDO HILARES VICTOR ROMMILL",
      "dni":24293353,
      "ieId":""
    },
    {
      "nombres":"HUINCHONTI MOSQUITER ALCIDES",
      "dni":40863767,
      "ieId":""
    },
    {
      "nombres":"URQUIA VALERA FELIMON",
      "dni":43826525,
      "ieId":""
    },
    {
      "nombres":"QUISPE CAHUANA RUSELL",
      "dni":41934994,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ TUNQUI MAURICIO",
      "dni":25012043,
      "ieId":""
    },
    {
      "nombres":"MORVELI APAZA AMELIA",
      "dni":24948213,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ MARQUEZ ELIZABETH",
      "dni":25007700,
      "ieId":""
    },
    {
      "nombres":"PINTO PILLCO LUZ MARINA",
      "dni":23989092,
      "ieId":""
    },
    {
      "nombres":"AGUILAR GARCIA RICARDO",
      "dni":24990351,
      "ieId":""
    },
    {
      "nombres":"FRANCO BACA LUZ ERIKA",
      "dni":24994109,
      "ieId":""
    },
    {
      "nombres":"GOMEZ OSORIO WALTER",
      "dni":23941490,
      "ieId":""
    },
    {
      "nombres":"ARQQUE ARANGURI HUGO LUIS",
      "dni":43984036,
      "ieId":""
    },
    {
      "nombres":"SANTILLAN CAMACHO ZULEMA LAURA",
      "dni":41156170,
      "ieId":""
    },
    {
      "nombres":"TAPIA VALENZUELA JUANA",
      "dni":23899983,
      "ieId":""
    },
    {
      "nombres":"HUAMANI GUZMAN HAYDE",
      "dni":40718592,
      "ieId":""
    },
    {
      "nombres":"LAUREL LOAIZA DE OCHOA MARTHA",
      "dni":25304847,
      "ieId":""
    },
    {
      "nombres":"SALAS BARRIONUEVO SAIDA MASHELL",
      "dni":46362650,
      "ieId":""
    },
    {
      "nombres":"DAZA VASQUEZ EUSEBIO EDILBERTO",
      "dni":25004265,
      "ieId":""
    },
    {
      "nombres":"SINCHI JUAREZ ARMENDRA",
      "dni":24997242,
      "ieId":""
    },
    {
      "nombres":"DAVALOS PEÑA ELIZABETH",
      "dni":41036120,
      "ieId":""
    },
    {
      "nombres":"SOTO PINARES DIANIK",
      "dni":25003830,
      "ieId":""
    },
    {
      "nombres":"OVALLE VILLAFUERTE CARMEN LUZ",
      "dni":24995275,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ TTITO CARMEN ROSA",
      "dni":24990702,
      "ieId":""
    },
    {
      "nombres":"LOAIZA SERI CRISTINA",
      "dni":42225640,
      "ieId":""
    },
    {
      "nombres":"LOAIZA SERI LEONOR",
      "dni":24006554,
      "ieId":""
    },
    {
      "nombres":"CHINCHIQUITI RIVAS LIZBETH",
      "dni":42064290,
      "ieId":""
    },
    {
      "nombres":"DIAZ SIMON EDITH",
      "dni":42529187,
      "ieId":""
    },
    {
      "nombres":"ROMERO MAYTA JOEL",
      "dni":80587912,
      "ieId":""
    },
    {
      "nombres":"SAPAPOARE MENKORI BOCQUINI",
      "dni":25010410,
      "ieId":""
    },
    {
      "nombres":"CHOQUE HUAMAN SONIA",
      "dni":40560372,
      "ieId":""
    },
    {
      "nombres":"ROJAS CCASA UNESIMA",
      "dni":44736591,
      "ieId":""
    },
    {
      "nombres":"BARRIENTOS SANTOS IVAN JHONNY",
      "dni":40807428,
      "ieId":""
    },
    {
      "nombres":"CUBA KILCA FELIX",
      "dni":80630422,
      "ieId":""
    },
    {
      "nombres":"HILAHUALA CATUNTA ANTONIO",
      "dni":42315843,
      "ieId":""
    },
    {
      "nombres":"RIOS HUARANCA EVA",
      "dni":25005104,
      "ieId":""
    },
    {
      "nombres":"CCARITA MAMANI LUIS BELTRAN",
      "dni":23942996,
      "ieId":""
    },
    {
      "nombres":"COSTAS PANDO MARIA ESTHER",
      "dni":25012011,
      "ieId":""
    },
    {
      "nombres":"MASIAS MORA RODOLFO",
      "dni":80020720,
      "ieId":""
    },
    {
      "nombres":"JEREMIAS DELFIN LEONIDAS",
      "dni":23970406,
      "ieId":""
    },
    {
      "nombres":"JUAN PEREZ MANUEL",
      "dni":43121395,
      "ieId":""
    },
    {
      "nombres":"LOPEZ CASTRO CECILIA",
      "dni":42886446,
      "ieId":""
    },
    {
      "nombres":"SEBASTIAN RIOS GERARDO",
      "dni":43649435,
      "ieId":""
    },
    {
      "nombres":"PACAYA PEÑA MARIANO",
      "dni":23970331,
      "ieId":""
    },
    {
      "nombres":"PEREIRA PEREIRA FANNY MARGOT",
      "dni":24996218,
      "ieId":""
    },
    {
      "nombres":"PEREZ PACAYA FELICIA",
      "dni":158378,
      "ieId":""
    },
    {
      "nombres":"RIOS SHERIGOROMPI TERESA",
      "dni":155489,
      "ieId":""
    },
    {
      "nombres":"KORIKI MUÑOZ JORGE LUIS",
      "dni":45041370,
      "ieId":""
    },
    {
      "nombres":"RIOS ARAÑA EULALIA",
      "dni":25009045,
      "ieId":""
    },
    {
      "nombres":"SANDOVAL LOPEZ SOFIA",
      "dni":43062433,
      "ieId":""
    },
    {
      "nombres":"SEBASTIAN ETENE LEONIDAS",
      "dni":23970951,
      "ieId":""
    },
    {
      "nombres":"SIMON RAMIREZ NOEMI",
      "dni":44850289,
      "ieId":""
    },
    {
      "nombres":"VICENTE RICARDO HERNAN",
      "dni":41293843,
      "ieId":""
    },
    {
      "nombres":"YOTONI MAINE BERNABE",
      "dni":24992341,
      "ieId":""
    },
    {
      "nombres":"AHUANARI SEBASTIAN GAMANIEL",
      "dni":42724428,
      "ieId":""
    },
    {
      "nombres":"DIAZ OLIVERA PERCY PERICO",
      "dni":157848,
      "ieId":""
    },
    {
      "nombres":"DIAZ ZAPATA EDITH",
      "dni":45426781,
      "ieId":""
    },
    {
      "nombres":"GREGORIO SERGIO FREDY",
      "dni":43533065,
      "ieId":""
    },
    {
      "nombres":"MORALES DIAZ JHORDAN",
      "dni":47246852,
      "ieId":""
    },
    {
      "nombres":"RIOS MAVETINI LORENZO",
      "dni":23970225,
      "ieId":""
    },
    {
      "nombres":"GUEVARA GRAJEDA JORGE ABEL",
      "dni":25320982,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE HUAYLLANI JULIA",
      "dni":23968731,
      "ieId":""
    },
    {
      "nombres":"QUISPE BOLAÑOS GILMAR",
      "dni":43143457,
      "ieId":""
    },
    {
      "nombres":"SARMIENTO MAMANI HIGIDIO",
      "dni":25004997,
      "ieId":""
    },
    {
      "nombres":"FILIPIS ITALIANO MARIBEL ROSA",
      "dni":45252015,
      "ieId":""
    },
    {
      "nombres":"RIOS CORAL ANITA",
      "dni":152772,
      "ieId":""
    },
    {
      "nombres":"QUISPE CENTENO JESSICA",
      "dni":25012514,
      "ieId":""
    },
    {
      "nombres":"MONTALVO PAUCAR MARISOL",
      "dni":41622524,
      "ieId":""
    },
    {
      "nombres":"ROMAN MAYTA RENE ROGER",
      "dni":42757754,
      "ieId":""
    },
    {
      "nombres":"TUYA AUCCAPUMA VILMA",
      "dni":40147572,
      "ieId":""
    },
    {
      "nombres":"ARAGON LOAYZA ALFREDO",
      "dni":24982085,
      "ieId":""
    },
    {
      "nombres":"BAEZ MANCHA VILMA",
      "dni":24990106,
      "ieId":""
    },
    {
      "nombres":"COAQUIRA CCAHUA ROSA MARIA",
      "dni":43393393,
      "ieId":""
    },
    {
      "nombres":"CAJIGAS OLIVARES MERY",
      "dni":25305081,
      "ieId":""
    },
    {
      "nombres":"CORDOVA SOLIS MARITZA",
      "dni":25004776,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR ARANIBAR NOELIA MAYDANA",
      "dni":29671332,
      "ieId":""
    },
    {
      "nombres":"LEZAMA ALBARRACIN WILBERT RENEE",
      "dni":23864481,
      "ieId":""
    },
    {
      "nombres":"SANTOS GARMENDIA NORMA",
      "dni":23973057,
      "ieId":""
    },
    {
      "nombres":"VELASQUE HUAMAN TEOFILO",
      "dni":23986947,
      "ieId":""
    },
    {
      "nombres":"DIAZ SIMON NOYDA",
      "dni":40505183,
      "ieId":""
    },
    {
      "nombres":"LIMA ISACIO CARLOS",
      "dni":23970760,
      "ieId":""
    },
    {
      "nombres":"ROSAS GOSHI JAMES",
      "dni":41091320,
      "ieId":""
    },
    {
      "nombres":"URQUIA VALERA AMACIAS",
      "dni":40795501,
      "ieId":""
    },
    {
      "nombres":"APARICIO PIÑARREAL JANE CELMIRA",
      "dni":24995563,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE ENRIQUEZ NANCY",
      "dni":41017616,
      "ieId":""
    },
    {
      "nombres":"CARDENAS AUGUSTO DARIO",
      "dni":25010081,
      "ieId":""
    },
    {
      "nombres":"CARPIO ROJAS JENNY EDYTH",
      "dni":4439778,
      "ieId":""
    },
    {
      "nombres":"CHINCHIQUITI CHINCHIQUI GERSON RICHARD",
      "dni":48507252,
      "ieId":""
    },
    {
      "nombres":"HUACHACA MONTEROLA MARLENI",
      "dni":42845821,
      "ieId":""
    },
    {
      "nombres":"METAKI ROSAS BERNABE",
      "dni":44001574,
      "ieId":""
    },
    {
      "nombres":"MIRANDA HUAMAN MICHAEL",
      "dni":43733328,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ ECHEGARAY CYNTHIA CAROL",
      "dni":24993870,
      "ieId":""
    },
    {
      "nombres":"RIVAS ALVAREZ GLINNY DILENIA",
      "dni":40173704,
      "ieId":""
    },
    {
      "nombres":"CELESTINO BRANEZ ODISA DRUCILA",
      "dni":43467401,
      "ieId":""
    },
    {
      "nombres":"FEDERICO PIÑO JUAN JOSE",
      "dni":5868025,
      "ieId":""
    },
    {
      "nombres":"LIMA ISACIO DANIEL",
      "dni":24992829,
      "ieId":""
    },
    {
      "nombres":"PACAYA BRANEZ DANNER ERLIN",
      "dni":44112654,
      "ieId":""
    },
    {
      "nombres":"URQUIA SEBASTIAN ZETTI",
      "dni":155438,
      "ieId":""
    },
    {
      "nombres":"ALVERA SEBASTIAN ROMITO",
      "dni":23970263,
      "ieId":""
    },
    {
      "nombres":"BALDOCEDA VARGAS LIONEL",
      "dni":43817196,
      "ieId":""
    },
    {
      "nombres":"DIAZ VARGAS LINDIZ CESIA",
      "dni":42906350,
      "ieId":""
    },
    {
      "nombres":"DIAZ VARGAS MIGUEL ANGEL",
      "dni":43847114,
      "ieId":""
    },
    {
      "nombres":"HERNANDEZ SEBASTIAN DELFIN",
      "dni":23970370,
      "ieId":""
    },
    {
      "nombres":"SIMON RODRIGUEZ ELIDA",
      "dni":42218799,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ROCA MIRIAN",
      "dni":41657923,
      "ieId":""
    },
    {
      "nombres":"VALER BARCENA HUGO ERNESTO",
      "dni":24951204,
      "ieId":""
    },
    {
      "nombres":"VARGAS PEREIRA ARMANDO",
      "dni":24944612,
      "ieId":""
    },
    {
      "nombres":"CCANCHI BARRIOS YONNY",
      "dni":42925880,
      "ieId":""
    },
    {
      "nombres":"CUIRO GUEVARA RONAL",
      "dni":24495773,
      "ieId":""
    },
    {
      "nombres":"KATEGARI KASHIARI LALI BELINDA",
      "dni":44387813,
      "ieId":""
    },
    {
      "nombres":"KATEGARI SANTOS ELIANA",
      "dni":24996578,
      "ieId":""
    },
    {
      "nombres":"MENTIANI PEREIRA ROSA",
      "dni":24996801,
      "ieId":""
    },
    {
      "nombres":"MENTIANI PEREYRA ABRAHAM",
      "dni":23970183,
      "ieId":""
    },
    {
      "nombres":"CANAYO ETENE JORGE",
      "dni":23970102,
      "ieId":""
    },
    {
      "nombres":"LIMA ISACIO PEDRO",
      "dni":164586,
      "ieId":""
    },
    {
      "nombres":"NEITE PALOMINO FRANCISCO ALFONSO",
      "dni":78284,
      "ieId":""
    },
    {
      "nombres":"SEBASTIAN CANAYO RUBEN",
      "dni":164677,
      "ieId":""
    },
    {
      "nombres":"CRUZ COLLANTES DEBORA",
      "dni":23970787,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ FRANCO JULIO",
      "dni":23970786,
      "ieId":""
    },
    {
      "nombres":"HANDA ZAMALLOA AMERICO WILBERT",
      "dni":24990372,
      "ieId":""
    },
    {
      "nombres":"VALDEZ QUISPE NORMA",
      "dni":24952703,
      "ieId":""
    },
    {
      "nombres":"CUTIPA MAMANI FLOR NELIDA",
      "dni":25009429,
      "ieId":""
    },
    {
      "nombres":"AMPICHI FEDERICO LUZ ELIZABETH",
      "dni":45025610,
      "ieId":""
    },
    {
      "nombres":"AZA GONZALES CARMEN LUZ",
      "dni":24965910,
      "ieId":""
    },
    {
      "nombres":"CANDIA YUPANQUI LEYDEN",
      "dni":40624321,
      "ieId":""
    },
    {
      "nombres":"HUACAC OSORIO ROMULO",
      "dni":23991053,
      "ieId":""
    },
    {
      "nombres":"CHORI YONICAITERI ADIEL",
      "dni":43356846,
      "ieId":""
    },
    {
      "nombres":"GONZALES PINO EDWIN",
      "dni":123554,
      "ieId":""
    },
    {
      "nombres":"TRIGOSO SEBASTIAN EDITH",
      "dni":24992830,
      "ieId":""
    },
    {
      "nombres":"KATEGARI KASHIARI NIDIA JAMILET",
      "dni":73377791,
      "ieId":""
    },
    {
      "nombres":"SHANTIRO CHONTIO VALENTIN",
      "dni":25010223,
      "ieId":""
    },
    {
      "nombres":"TAQUIRE BERROCAL RENE MARIBEL",
      "dni":4327240,
      "ieId":""
    },
    {
      "nombres":"CCORIMANYA AUCCAPIÑA VERONICA",
      "dni":41899102,
      "ieId":""
    },
    {
      "nombres":"VARGAS CRUZ MARLENY",
      "dni":24992603,
      "ieId":""
    },
    {
      "nombres":"CONDE MAQQUE JUAN JOSE",
      "dni":42396223,
      "ieId":""
    },
    {
      "nombres":"TORVISCO SARMIENTO MARIA LUZ",
      "dni":23964981,
      "ieId":""
    },
    {
      "nombres":"CHAUCA RODRIGUEZ RUTH MERY",
      "dni":42200680,
      "ieId":""
    },
    {
      "nombres":"PORTILLA LLAVE NANCY",
      "dni":41497370,
      "ieId":""
    },
    {
      "nombres":"RIOS TACULI ROSA LUZ",
      "dni":42122398,
      "ieId":""
    },
    {
      "nombres":"TURCO GUEVARA DANIEL",
      "dni":23970589,
      "ieId":""
    },
    {
      "nombres":"VARGAS PEREIRA JOSE",
      "dni":24959835,
      "ieId":""
    },
    {
      "nombres":"HILASACA MAMANI WILFREDO",
      "dni":2046327,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO MOTTA HERBERT",
      "dni":40990039,
      "ieId":""
    },
    {
      "nombres":"CACERES ARIAS ARTURO",
      "dni":24961253,
      "ieId":""
    },
    {
      "nombres":"VARGAS PACAYA FELIX",
      "dni":43658993,
      "ieId":""
    },
    {
      "nombres":"VARGAS PEREIRA ROHOLDAN ABSALON",
      "dni":43139533,
      "ieId":""
    },
    {
      "nombres":"BAZAN MONTES HUGO",
      "dni":25008625,
      "ieId":""
    },
    {
      "nombres":"PEREYRA CARDENAS DANTE",
      "dni":46619219,
      "ieId":""
    },
    {
      "nombres":"BENITES ALIAGA MARCO ANTONIO",
      "dni":25009832,
      "ieId":""
    },
    {
      "nombres":"CABALLERO ROJAS VILMA",
      "dni":24952742,
      "ieId":""
    },
    {
      "nombres":"YAPO CALLE FREDY PERCY",
      "dni":42564633,
      "ieId":""
    },
    {
      "nombres":"KATEGARI IRATSIMERI WALTER",
      "dni":24992437,
      "ieId":""
    },
    {
      "nombres":"NINASHO FERNANDEZ CAMILO",
      "dni":43013981,
      "ieId":""
    },
    {
      "nombres":"ORIHUELA LAQUITA NOE DAVID",
      "dni":44195275,
      "ieId":""
    },
    {
      "nombres":"QUISPE CESPEDES VALERIO",
      "dni":24961861,
      "ieId":""
    },
    {
      "nombres":"SERRANO MONTES CARLOS ALBERTO",
      "dni":40498969,
      "ieId":""
    },
    {
      "nombres":"CENTENO TTITO ELIZABETH",
      "dni":42218803,
      "ieId":""
    },
    {
      "nombres":"MARQUINA SALAS ROCIO",
      "dni":42300759,
      "ieId":""
    },
    {
      "nombres":"TRINIDAD GUILLEN NIEVES",
      "dni":23971552,
      "ieId":""
    },
    {
      "nombres":"APAZA PACOMBIA ROSA ELENA",
      "dni":41338647,
      "ieId":""
    },
    {
      "nombres":"CURAHUA GUEVARA MARISOL",
      "dni":42962433,
      "ieId":""
    },
    {
      "nombres":"ACOSTUPA VALDEZ ALVARO",
      "dni":42428862,
      "ieId":""
    },
    {
      "nombres":"AIMARA TAYPICURI RAUL",
      "dni":23806954,
      "ieId":""
    },
    {
      "nombres":"AITE HUILLCA LUIS",
      "dni":4824224,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CHAMBI LIZARDO WEDER",
      "dni":2543114,
      "ieId":""
    },
    {
      "nombres":"ARELLANO HUAYCHO CIRILO SEGUNDO",
      "dni":23849437,
      "ieId":""
    },
    {
      "nombres":"LANDIO MALAGA RAUL",
      "dni":23834912,
      "ieId":""
    },
    {
      "nombres":"MORALES ESTRADA RAMIRO",
      "dni":23805271,
      "ieId":""
    },
    {
      "nombres":"PANTIGOSO SICOS HEBERT VLADIMIRO",
      "dni":23988436,
      "ieId":""
    },
    {
      "nombres":"QUILLILLI QUIÑONES WILAR",
      "dni":24990304,
      "ieId":""
    },
    {
      "nombres":"REYES COLCA EVANGELINO",
      "dni":24950149,
      "ieId":""
    },
    {
      "nombres":"ROBLES CONDORI VIDAL",
      "dni":44913103,
      "ieId":""
    },
    {
      "nombres":"UMERES MAMANI JESUS BERNABE",
      "dni":24941434,
      "ieId":""
    },
    {
      "nombres":"VERGARA PUENTE DE LA VE ROBERTO",
      "dni":24994194,
      "ieId":""
    },
    {
      "nombres":"VILCA LAURA WEENDY DAYLEE",
      "dni":45037496,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA CUELLAR EDITH",
      "dni":40567417,
      "ieId":""
    },
    {
      "nombres":"AYMACHOQUE CONDORI JULIO ROSEL",
      "dni":23957328,
      "ieId":""
    },
    {
      "nombres":"GONZALES BEDOYA REASILVIA",
      "dni":24991554,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAYTA MEZA JOSE LUIS",
      "dni":23957401,
      "ieId":""
    },
    {
      "nombres":"MOLERO MALPARTIDA JORGE EFRAIN",
      "dni":24944785,
      "ieId":""
    },
    {
      "nombres":"QUISPE PEREZ VICTOR",
      "dni":24988251,
      "ieId":""
    },
    {
      "nombres":"RAMOS CARI EXALTACION",
      "dni":10024649,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA APAZA JESSICA LEONOR",
      "dni":10239449,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA SALLO LIBNY",
      "dni":42747335,
      "ieId":""
    },
    {
      "nombres":"ARAGON CASTRO JOSE LEONIDAS",
      "dni":23989141,
      "ieId":""
    },
    {
      "nombres":"BORDA LUZA LIZARDO",
      "dni":43624998,
      "ieId":""
    },
    {
      "nombres":"BUSTINZA CHACARA SONIA",
      "dni":24460846,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAMANI ANTONIA",
      "dni":25000253,
      "ieId":""
    },
    {
      "nombres":"QUISPE PERALTA BENITO",
      "dni":25301581,
      "ieId":""
    },
    {
      "nombres":"SERNA SILVA MIRIAN ZULEMA",
      "dni":40094803,
      "ieId":""
    },
    {
      "nombres":"TARAZONA SOSAYA LEONARDO",
      "dni":42655515,
      "ieId":""
    },
    {
      "nombres":"ANCCOTA PHATI RUBEN",
      "dni":1314240,
      "ieId":""
    },
    {
      "nombres":"AUCCACUSI ZUNIGA MARIA",
      "dni":23828199,
      "ieId":""
    },
    {
      "nombres":"CALLAPIÑA OCHOA CALEB",
      "dni":41147285,
      "ieId":""
    },
    {
      "nombres":"CHILO ORTIZ DE ORUE MARIA VICTORIA",
      "dni":25004463,
      "ieId":""
    },
    {
      "nombres":"GUEVARA MAQUERA EDDY",
      "dni":1864578,
      "ieId":""
    },
    {
      "nombres":"HUALLPAYUNCA VALENCIA ANGEL",
      "dni":41490100,
      "ieId":""
    },
    {
      "nombres":"MAMANI MIRANO MOISES",
      "dni":42712806,
      "ieId":""
    },
    {
      "nombres":"MAR ESPINOZA LUZ HAYDEE",
      "dni":23813805,
      "ieId":""
    },
    {
      "nombres":"MENDOZA JOVE NESTOR",
      "dni":41804869,
      "ieId":""
    },
    {
      "nombres":"MEZA LATORRE PERCY ALEXI",
      "dni":23985208,
      "ieId":""
    },
    {
      "nombres":"POMA CRUZ EFRAIN DOMINGO",
      "dni":80035068,
      "ieId":""
    },
    {
      "nombres":"QUISPE APAZA JAIME SABINO",
      "dni":444469,
      "ieId":""
    },
    {
      "nombres":"RIMACHI GAMARRA CARMEN LUZ",
      "dni":29648035,
      "ieId":""
    },
    {
      "nombres":"RIMACHI RODRIGUEZ SARA",
      "dni":23862343,
      "ieId":""
    },
    {
      "nombres":"ROJAS PEÑA ALEX GUILLERMO",
      "dni":24993165,
      "ieId":""
    },
    {
      "nombres":"SAMA QUISPE DINA",
      "dni":25008529,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ HERRERA MIRIAM JANETH",
      "dni":29731665,
      "ieId":""
    },
    {
      "nombres":"SULLCA CAÑARI LINO",
      "dni":24997615,
      "ieId":""
    },
    {
      "nombres":"YAÑAC CCOTO ROSA MARIA",
      "dni":40504117,
      "ieId":""
    },
    {
      "nombres":"CCASANI HUILLCA ALEJANDRO",
      "dni":24360310,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO MORALES ANTONINA",
      "dni":23879570,
      "ieId":""
    },
    {
      "nombres":"HUALLPA SUYO JOSE",
      "dni":24991545,
      "ieId":""
    },
    {
      "nombres":"HUAYNACHO HUANCA ELISEO",
      "dni":40115235,
      "ieId":""
    },
    {
      "nombres":"IGNACIO PEREZ ANA ISABEL",
      "dni":24988445,
      "ieId":""
    },
    {
      "nombres":"INOFUENTE JUAREZ LEONIDAS",
      "dni":1544405,
      "ieId":""
    },
    {
      "nombres":"MERCADO FIGUEROA ORLANDO",
      "dni":23984360,
      "ieId":""
    },
    {
      "nombres":"MORMONTOY AVENDAÑO CARMELINDA",
      "dni":23948624,
      "ieId":""
    },
    {
      "nombres":"OVIEDO LINARES GIOVANNA ELIZABETH",
      "dni":29724763,
      "ieId":""
    },
    {
      "nombres":"PALOMINO CARRILLO TORIBIO",
      "dni":25008592,
      "ieId":""
    },
    {
      "nombres":"PINEDA FLORES MARILU",
      "dni":23909080,
      "ieId":""
    },
    {
      "nombres":"PUMACAYO HUAMANIRE JOSE MANUEL",
      "dni":23902977,
      "ieId":""
    },
    {
      "nombres":"QUISPE MOROCCO ROSMERY DIANETH",
      "dni":44694306,
      "ieId":""
    },
    {
      "nombres":"QUISPE RODRIGUEZ EMETERIO",
      "dni":40863763,
      "ieId":""
    },
    {
      "nombres":"RIOS MIRANO JHON",
      "dni":24290660,
      "ieId":""
    },
    {
      "nombres":"SUMIRE PALOMINO CECILIA FELICIANA",
      "dni":29667222,
      "ieId":""
    },
    {
      "nombres":"TICONA OVIEDO GLADYS MARTHA",
      "dni":29692405,
      "ieId":""
    },
    {
      "nombres":"YUCRA BUSTAMANTE MAURO JUAN",
      "dni":42163687,
      "ieId":""
    },
    {
      "nombres":"ZUZUNAGA CARRASCO RODOLFO",
      "dni":24957070,
      "ieId":""
    },
    {
      "nombres":"ACUÑA GUTIERREZ ADRIAN REINALDO",
      "dni":24950290,
      "ieId":""
    },
    {
      "nombres":"ALLENDE LOAIZA POLICARPO",
      "dni":25318243,
      "ieId":""
    },
    {
      "nombres":"AYCAYA CHIQUE VIDAL",
      "dni":1869622,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ QUISPE ANGEL OWER",
      "dni":1560252,
      "ieId":""
    },
    {
      "nombres":"OCON HUAMAN GUILLERMO",
      "dni":23838636,
      "ieId":""
    },
    {
      "nombres":"PEREZ PALOMINO MARIZOL",
      "dni":23865774,
      "ieId":""
    },
    {
      "nombres":"QUISPE TUMI JORGE",
      "dni":2172386,
      "ieId":""
    },
    {
      "nombres":"CALCIN CCAPCHI NICOLAS",
      "dni":23968811,
      "ieId":""
    },
    {
      "nombres":"CALDERON HUAMAN ERIKA",
      "dni":42764514,
      "ieId":""
    },
    {
      "nombres":"FLOREZ ROZAS JORGE",
      "dni":24950076,
      "ieId":""
    },
    {
      "nombres":"PUMA QUISPE EDILBERTO",
      "dni":23945107,
      "ieId":""
    },
    {
      "nombres":"QUINTANA CAVIEDES LILLIAN CENILUZ",
      "dni":23945026,
      "ieId":""
    },
    {
      "nombres":"SOLIS PINTO FERNANDO",
      "dni":24944985,
      "ieId":""
    },
    {
      "nombres":"SUCARI CUTISACA BRAULIO LUIS",
      "dni":1551140,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS SALAS CARLOS",
      "dni":24952400,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ORTIZ MARTHA",
      "dni":24952278,
      "ieId":""
    },
    {
      "nombres":"PIZANGO PUA MARIO",
      "dni":45344914,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUALLPA NORMA",
      "dni":44751024,
      "ieId":""
    },
    {
      "nombres":"RIOS LIZARDO MARCOS",
      "dni":23970678,
      "ieId":""
    },
    {
      "nombres":"ROJAS ALMIRON JUDITH",
      "dni":42666961,
      "ieId":""
    },
    {
      "nombres":"SEBASTIAN PACAYA SUSAN PAMELA",
      "dni":47669218,
      "ieId":""
    },
    {
      "nombres":"SEBASTIAN SANDOVAL DONALDO",
      "dni":23970075,
      "ieId":""
    },
    {
      "nombres":"ALCCA PAREJA FELICIANO",
      "dni":24988610,
      "ieId":""
    },
    {
      "nombres":"ARAPA CAHUANA RUBEN",
      "dni":42809731,
      "ieId":""
    },
    {
      "nombres":"ARMENDARIZ MEZA FELICIA",
      "dni":24984154,
      "ieId":""
    },
    {
      "nombres":"CALAPUJA PURACA MARY NELIDA",
      "dni":44860633,
      "ieId":""
    },
    {
      "nombres":"CHACON CANAL LUZ MARINA",
      "dni":23928904,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CALLER SONIA",
      "dni":40997499,
      "ieId":""
    },
    {
      "nombres":"CONCHA REVILLA FAUSTINO TOMAS",
      "dni":30586027,
      "ieId":""
    },
    {
      "nombres":"COYA MACEDO EDGAR",
      "dni":80443475,
      "ieId":""
    },
    {
      "nombres":"FLORES MORA FREDY",
      "dni":41597195,
      "ieId":""
    },
    {
      "nombres":"LAYME RAMIREZ LUIS JACINTO",
      "dni":42038542,
      "ieId":""
    },
    {
      "nombres":"MAMANI MENACHO HERBER MELANIO",
      "dni":42136206,
      "ieId":""
    },
    {
      "nombres":"MEDINA ESPINOZA DAVID MODESTO",
      "dni":23810295,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ LAZO EDGAR",
      "dni":24993866,
      "ieId":""
    },
    {
      "nombres":"YUCRA BUSTAMANTE MARIBEL",
      "dni":24718504,
      "ieId":""
    },
    {
      "nombres":"GONZALES VARGAS COLATINO",
      "dni":24996811,
      "ieId":""
    },
    {
      "nombres":"MALDONADO TITI DANTE ISIDRO",
      "dni":1534959,
      "ieId":""
    },
    {
      "nombres":"MEZA QUISPE RAUL",
      "dni":42258910,
      "ieId":""
    },
    {
      "nombres":"PINEDO VALERA LUIS HUMBERTO",
      "dni":24997066,
      "ieId":""
    },
    {
      "nombres":"PORTILLA HUARSA HELARD RODOLFO",
      "dni":40664307,
      "ieId":""
    },
    {
      "nombres":"QUIÑONEZ HUILLCA PERCY",
      "dni":24714084,
      "ieId":""
    },
    {
      "nombres":"RIOS RODRIGUEZ WILSON",
      "dni":47262223,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ GONZALES ERIC RODNEY",
      "dni":56257,
      "ieId":""
    },
    {
      "nombres":"YAVIRERI KASHIARI FIDELIA",
      "dni":23971170,
      "ieId":""
    },
    {
      "nombres":"HUAMAN TUERO MARTINA",
      "dni":24950750,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CANSAYA ADOLFO",
      "dni":24982174,
      "ieId":""
    },
    {
      "nombres":"CALEB MANUEL ELICIA",
      "dni":155320,
      "ieId":""
    },
    {
      "nombres":"DAVILA CUSHICHINARI ERNESTO",
      "dni":164714,
      "ieId":""
    },
    {
      "nombres":"PINEDO BENITES WALBER",
      "dni":42543314,
      "ieId":""
    },
    {
      "nombres":"PONCIANO SEBASTIAN GILBERTO",
      "dni":23970024,
      "ieId":""
    },
    {
      "nombres":"URQUIA SEBASTIAN MIRIAM",
      "dni":164378,
      "ieId":""
    },
    {
      "nombres":"CANCHA CAMPOS CORY ISABEL",
      "dni":45196044,
      "ieId":""
    },
    {
      "nombres":"CARRASCO DELGADO EPIFANIO",
      "dni":24966149,
      "ieId":""
    },
    {
      "nombres":"CRUZ CERVANTES LOURDES",
      "dni":25012222,
      "ieId":""
    },
    {
      "nombres":"GUEVARA GAMIO ISIDRO MANUEL",
      "dni":25326473,
      "ieId":""
    },
    {
      "nombres":"PEREYRA VARGAS JOSE SANTOS",
      "dni":44794734,
      "ieId":""
    },
    {
      "nombres":"ROJAS CLAVERI PAOLA ACLLA",
      "dni":42206958,
      "ieId":""
    },
    {
      "nombres":"SAPAPOARE MENKORI YAIROMBARI",
      "dni":40773640,
      "ieId":""
    },
    {
      "nombres":"ANGULO YEPEZ ADOLFO",
      "dni":23971480,
      "ieId":""
    },
    {
      "nombres":"APAZA SUCASACA JUAN EDGAR",
      "dni":1334027,
      "ieId":""
    },
    {
      "nombres":"BARRAGAN CONDORI SMITH WILSON",
      "dni":40490990,
      "ieId":""
    },
    {
      "nombres":"CRUZ ZAPANA ORLANDO",
      "dni":41921161,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ AYERBE ADRIAN",
      "dni":9187309,
      "ieId":""
    },
    {
      "nombres":"PILLCO HUAMAN JUSTINA LORENZA",
      "dni":23860803,
      "ieId":""
    },
    {
      "nombres":"QUISPE CONDORI PERCY",
      "dni":80040418,
      "ieId":""
    },
    {
      "nombres":"VIRRUETA DE LA SOTA ROSA ANGELICA",
      "dni":4815182,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SUSAYA MELQUIADES",
      "dni":46797829,
      "ieId":""
    },
    {
      "nombres":"ANCO CAMACHO JULIAN ALEJANDRO",
      "dni":29640439,
      "ieId":""
    },
    {
      "nombres":"ARNADO TRUJILLO YANET",
      "dni":24995089,
      "ieId":""
    },
    {
      "nombres":"CORNEJO FLOREZ FREDY",
      "dni":24996096,
      "ieId":""
    },
    {
      "nombres":"LIMA RIVAS ELARD",
      "dni":23988501,
      "ieId":""
    },
    {
      "nombres":"OLIVARES SARMIENTO AMERICO",
      "dni":23963877,
      "ieId":""
    },
    {
      "nombres":"ORTEGA SANCHEZ NAYDA",
      "dni":23971592,
      "ieId":""
    },
    {
      "nombres":"TITO ZAMALLOA RENE",
      "dni":23809131,
      "ieId":""
    },
    {
      "nombres":"VELASCO JAUREGUI IRMA",
      "dni":23814576,
      "ieId":""
    },
    {
      "nombres":"VIVANCO CJURO HUGO",
      "dni":25004039,
      "ieId":""
    },
    {
      "nombres":"AÑANCA ZUNIGA FAUSTO",
      "dni":23819761,
      "ieId":""
    },
    {
      "nombres":"CALLAPIÑA OCHOA SAMUEL",
      "dni":40175750,
      "ieId":""
    },
    {
      "nombres":"CCAHUA HUAMAN CARMEN ROSA",
      "dni":23939120,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ HUAMAN FRANCISCO",
      "dni":24391826,
      "ieId":""
    },
    {
      "nombres":"DE LA CRUZ VILCHEZ WILBERT WILLIAM",
      "dni":80669278,
      "ieId":""
    },
    {
      "nombres":"DONGO HUARHUA JOHN",
      "dni":41632343,
      "ieId":""
    },
    {
      "nombres":"ESTRADA VERGARA SATURNINO",
      "dni":44175812,
      "ieId":""
    },
    {
      "nombres":"OSORIO CHAPARRO KARY",
      "dni":24003146,
      "ieId":""
    },
    {
      "nombres":"QUISPE GUZMAN NELLY",
      "dni":24994016,
      "ieId":""
    },
    {
      "nombres":"QUISPE YUCA FRANCISCO",
      "dni":25198953,
      "ieId":""
    },
    {
      "nombres":"SUCAPUCA MAMANI SUSANA CAROLINA",
      "dni":43980740,
      "ieId":""
    },
    {
      "nombres":"TUNQUE SUYO JUDYHT MABEL",
      "dni":42748866,
      "ieId":""
    },
    {
      "nombres":"UMIÑA ITO PORFIRIO ROGER",
      "dni":1295538,
      "ieId":""
    },
    {
      "nombres":"YEPEZ SILVA MARLIZ",
      "dni":40762454,
      "ieId":""
    },
    {
      "nombres":"APAZA CCOSCO BARTOLOME",
      "dni":42111813,
      "ieId":""
    },
    {
      "nombres":"BARRA YUPANQUI JORGE ABRAHAN",
      "dni":42658039,
      "ieId":""
    },
    {
      "nombres":"CABRERA CJUÑO FLORENTINO CAYETANO",
      "dni":41103357,
      "ieId":""
    },
    {
      "nombres":"CHOQUE FARFAN ROLANDO OLIVER",
      "dni":40754094,
      "ieId":""
    },
    {
      "nombres":"CHOQUENAIRA MAMANI ROGER",
      "dni":24584093,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE VARGAS MARIO",
      "dni":24992417,
      "ieId":""
    },
    {
      "nombres":"FLORES MELO NAYDA",
      "dni":44088770,
      "ieId":""
    },
    {
      "nombres":"GALINDO PEREZ ROBER",
      "dni":42071706,
      "ieId":""
    },
    {
      "nombres":"HANCCO PILLCO GLADYS",
      "dni":2292123,
      "ieId":""
    },
    {
      "nombres":"QUISPE LUQUE FLORENTINO",
      "dni":24975974,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI HUGO",
      "dni":46765576,
      "ieId":""
    },
    {
      "nombres":"SALVATIERRA UTANI SARA ANGELICA",
      "dni":21548838,
      "ieId":""
    },
    {
      "nombres":"CUEVA ESCALANTE JULIAN",
      "dni":23977085,
      "ieId":""
    },
    {
      "nombres":"DIAZ MASIAS FAUSTINO",
      "dni":24994394,
      "ieId":""
    },
    {
      "nombres":"GUSHI NOCHOMI ELISEO",
      "dni":45865354,
      "ieId":""
    },
    {
      "nombres":"LICONA TARCO EUFEMIO",
      "dni":24493498,
      "ieId":""
    },
    {
      "nombres":"LIMA MANCHINARI MARILYN JOVANA",
      "dni":46233901,
      "ieId":""
    },
    {
      "nombres":"QUISPE RODRIGUEZ SULMAYUGAR MARICRUZ",
      "dni":47538644,
      "ieId":""
    },
    {
      "nombres":"SUCARI CCASO MARIO CELESTINO",
      "dni":1557573,
      "ieId":""
    },
    {
      "nombres":"SULLCA ALVAREZ HUGO",
      "dni":24986355,
      "ieId":""
    },
    {
      "nombres":"HILARES HANCCO LYAMNA",
      "dni":41427154,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE ROGER",
      "dni":41425511,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ HUAMAN LUIS DRIAN",
      "dni":44024740,
      "ieId":""
    },
    {
      "nombres":"CHACON CHAVEZ VICTORINO",
      "dni":40042207,
      "ieId":""
    },
    {
      "nombres":"CHECCA QUISPE LEONIDAS",
      "dni":45362951,
      "ieId":""
    },
    {
      "nombres":"CHUMBES CATALAN MARTHA MARIA",
      "dni":40845502,
      "ieId":""
    },
    {
      "nombres":"CUSI CAYO MARIO",
      "dni":23889820,
      "ieId":""
    },
    {
      "nombres":"FLORES RAMOS IRMA",
      "dni":1320845,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA NUÑEZ MARIA MARTINA",
      "dni":29725845,
      "ieId":""
    },
    {
      "nombres":"HOLGUIN LEON WALTER",
      "dni":40052709,
      "ieId":""
    },
    {
      "nombres":"PINARES CAMPOS CATHIA",
      "dni":45913212,
      "ieId":""
    },
    {
      "nombres":"QUISPE JAUREGUI NISHMENTH AYESHA",
      "dni":40129027,
      "ieId":""
    },
    {
      "nombres":"SANTOTY ANDRES MARITZA",
      "dni":41529271,
      "ieId":""
    },
    {
      "nombres":"SOTELO CARBAJAL JOSE",
      "dni":41130722,
      "ieId":""
    },
    {
      "nombres":"PEREYRA CHAVEZ MAXIMO",
      "dni":23970135,
      "ieId":""
    },
    {
      "nombres":"BACA BUSTOS CARMEN",
      "dni":23832901,
      "ieId":""
    },
    {
      "nombres":"MANRIQUE VILCA VERONICA",
      "dni":42970674,
      "ieId":""
    },
    {
      "nombres":"MAMANI CACERES LOURDES MARNI",
      "dni":42770255,
      "ieId":""
    },
    {
      "nombres":"JANCCO QQUECCAÑO LUCIA",
      "dni":42339282,
      "ieId":""
    },
    {
      "nombres":"MORANTE CATACORA ALINA MABETH",
      "dni":23984454,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ CENTENO RINA",
      "dni":42390848,
      "ieId":""
    },
    {
      "nombres":"PAPEL ALVAREZ ROSA",
      "dni":24997485,
      "ieId":""
    },
    {
      "nombres":"HUALLPAYUNCA CCOA ROSSMERY",
      "dni":43020327,
      "ieId":""
    },
    {
      "nombres":"BEJAR LLAVE LIZBETH",
      "dni":25315075,
      "ieId":""
    },
    {
      "nombres":"BERRIO RIOJA DARWIN ANDRES",
      "dni":23880246,
      "ieId":""
    },
    {
      "nombres":"CANAHUA CCAMATO DORIS",
      "dni":25009229,
      "ieId":""
    },
    {
      "nombres":"CARDENAS MAR IRENE",
      "dni":25005908,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY PACHECO MARINA",
      "dni":23859483,
      "ieId":""
    },
    {
      "nombres":"FLOREZ YLLA YSAIAS",
      "dni":25319535,
      "ieId":""
    },
    {
      "nombres":"LIANAJE BOCANGEL VILMA",
      "dni":24964701,
      "ieId":""
    },
    {
      "nombres":"MEJIA GUTIERREZ YSABEL",
      "dni":24983318,
      "ieId":""
    },
    {
      "nombres":"VALDEZ MAR LUCHO",
      "dni":24983756,
      "ieId":""
    },
    {
      "nombres":"ACURIO VILLENA PASCUAL",
      "dni":23903677,
      "ieId":""
    },
    {
      "nombres":"CARPIO TAPIA LUZGARDO",
      "dni":24965802,
      "ieId":""
    },
    {
      "nombres":"DIAZ TEJADA MARIO RAMIRO",
      "dni":25005556,
      "ieId":""
    },
    {
      "nombres":"VALENZUELA APAZA PAOLO CESAR",
      "dni":40820457,
      "ieId":""
    },
    {
      "nombres":"VILLENA LETONA ERNESTINA",
      "dni":23913650,
      "ieId":""
    },
    {
      "nombres":"GONZALES QUISPE SILVERIANA",
      "dni":24983791,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MORA MARIA CLEOFE",
      "dni":25300335,
      "ieId":""
    },
    {
      "nombres":"SOLIS CARDENAS REMO",
      "dni":40128354,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ RODRIGUEZ EDWIN",
      "dni":42423554,
      "ieId":""
    },
    {
      "nombres":"FLORES OYEMA LUIS CIRILO",
      "dni":24962746,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ MARTINEZ VICTORIA CEFERINA",
      "dni":23829749,
      "ieId":""
    },
    {
      "nombres":"PANTOJA PALOMINO JULIO",
      "dni":23870516,
      "ieId":""
    },
    {
      "nombres":"SALAS DAVALOS LUIS",
      "dni":24946991,
      "ieId":""
    },
    {
      "nombres":"SOTOMAYOR GONZALES GLADYS GLORIA",
      "dni":24964080,
      "ieId":""
    },
    {
      "nombres":"VALDERRAMA ALVAREZ HILDA",
      "dni":24970779,
      "ieId":""
    },
    {
      "nombres":"AGUILAR ROJAS PORFIRIO",
      "dni":25005940,
      "ieId":""
    },
    {
      "nombres":"APARICIO PACHECO EBERT",
      "dni":24963806,
      "ieId":""
    },
    {
      "nombres":"BUTRON CONZA HUGO",
      "dni":24964278,
      "ieId":""
    },
    {
      "nombres":"CAMARA VILLEGAS WILBERT",
      "dni":24964148,
      "ieId":""
    },
    {
      "nombres":"CUBA LAZO ROCIO",
      "dni":24983217,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS ROMERO EZEQUIEL",
      "dni":24978835,
      "ieId":""
    },
    {
      "nombres":"LAZO VALENCIA ROMULO",
      "dni":24965310,
      "ieId":""
    },
    {
      "nombres":"MONTOYA MONTUFAR VICENTE FREDY",
      "dni":24998662,
      "ieId":""
    },
    {
      "nombres":"NAVARRO CASTILLO ERASMA",
      "dni":24998665,
      "ieId":""
    },
    {
      "nombres":"OCHOA GUILLEN DINA",
      "dni":23939317,
      "ieId":""
    },
    {
      "nombres":"OJEDA PANCORBO AUGUSTA",
      "dni":24983738,
      "ieId":""
    },
    {
      "nombres":"OTAZU GUILLEN JULIO",
      "dni":24964193,
      "ieId":""
    },
    {
      "nombres":"ROZAS HEREDIA ADRIAN",
      "dni":25005946,
      "ieId":""
    },
    {
      "nombres":"SAIRE CARDENAS BELEN",
      "dni":24983541,
      "ieId":""
    },
    {
      "nombres":"TECSI FLORES EMILIO",
      "dni":24992678,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA ESCALANTE LUCAS",
      "dni":24964522,
      "ieId":""
    },
    {
      "nombres":"ZAVALA PALOMINO DAVID",
      "dni":24997655,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS APARICIO RENATO",
      "dni":25305171,
      "ieId":""
    },
    {
      "nombres":"ARAGON ZARATE RITA SABINA",
      "dni":24675053,
      "ieId":""
    },
    {
      "nombres":"CORDOVA LUCANA ARTURO",
      "dni":23826633,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA MENDOZA CARMEN MERCEDES",
      "dni":28295330,
      "ieId":""
    },
    {
      "nombres":"LAUREL LOAIZA CARLOS",
      "dni":25315081,
      "ieId":""
    },
    {
      "nombres":"PALIZA VALENCIA CELMIRA",
      "dni":24966343,
      "ieId":""
    },
    {
      "nombres":"QUISPE MEDINA MARIA JESUS",
      "dni":25312574,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA PALOMINO DANIEL HUGO",
      "dni":25304415,
      "ieId":""
    },
    {
      "nombres":"CASAFRANCA ALVAREZ LUCY",
      "dni":24993937,
      "ieId":""
    },
    {
      "nombres":"MAMANI ALVAREZ JUAN",
      "dni":24976134,
      "ieId":""
    },
    {
      "nombres":"PAPA DELGADO TIBET NEDA",
      "dni":25004456,
      "ieId":""
    },
    {
      "nombres":"ZERON DIAZ YURI",
      "dni":8199320,
      "ieId":""
    },
    {
      "nombres":"VALVERDE HUAMANI OLGA MARLENY",
      "dni":24995057,
      "ieId":""
    },
    {
      "nombres":"DELGADO GUEVARA VICTOR RAUL",
      "dni":23903619,
      "ieId":""
    },
    {
      "nombres":"NAVARRO CASTILLO JULIO",
      "dni":24998575,
      "ieId":""
    },
    {
      "nombres":"VERA YUCRA ELOY",
      "dni":40057315,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA CAMINADA ADRIEL",
      "dni":24983701,
      "ieId":""
    },
    {
      "nombres":"APARICIO PACHECO HERNANDO",
      "dni":25302893,
      "ieId":""
    },
    {
      "nombres":"ATAULLUCO HUAMAN VALVINO",
      "dni":23804544,
      "ieId":""
    },
    {
      "nombres":"BORDA GOMEZ JULIA",
      "dni":25005534,
      "ieId":""
    },
    {
      "nombres":"CARHUANI CABALLERO EDGAR",
      "dni":42395124,
      "ieId":""
    },
    {
      "nombres":"CASTILLO SAAVEDRA ABEL",
      "dni":23802760,
      "ieId":""
    },
    {
      "nombres":"CONDORPUSA CAHUANA ESTEBAN JUVENAL",
      "dni":31039699,
      "ieId":""
    },
    {
      "nombres":"DELGADO GARRIDO KAREM AIDEE",
      "dni":43172216,
      "ieId":""
    },
    {
      "nombres":"DONGO OCHOA VICTOR",
      "dni":24963025,
      "ieId":""
    },
    {
      "nombres":"GALINDO FLORES VALERIA NANCY",
      "dni":2420332,
      "ieId":""
    },
    {
      "nombres":"GARCIA ESPINOZA NANCY RUTH",
      "dni":23836520,
      "ieId":""
    },
    {
      "nombres":"GUZMAN REYES ANGELICA",
      "dni":23881084,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUAÑEC MARIA",
      "dni":23843712,
      "ieId":""
    },
    {
      "nombres":"HUAYCHAU CRUZ LUCILA",
      "dni":23829033,
      "ieId":""
    },
    {
      "nombres":"LOAIZA RODRIGUEZ MARIA MATILDE",
      "dni":23869848,
      "ieId":""
    },
    {
      "nombres":"LUCANA QUINTANILLA LUZ MARINA",
      "dni":23827920,
      "ieId":""
    },
    {
      "nombres":"MALDONADO ORTEGA SANDRA CAROLA",
      "dni":23950279,
      "ieId":""
    },
    {
      "nombres":"MERCADO BAYONA SIXTO JAVIER",
      "dni":24707244,
      "ieId":""
    },
    {
      "nombres":"MORA QUISPE GILBERTO",
      "dni":24983740,
      "ieId":""
    },
    {
      "nombres":"SAIRE QUISPE HERNAN",
      "dni":23935756,
      "ieId":""
    },
    {
      "nombres":"ÑAHUI HUILLCA PASCUAL",
      "dni":24964145,
      "ieId":""
    },
    {
      "nombres":"ALAGON RICALDE FREDY",
      "dni":24978656,
      "ieId":""
    },
    {
      "nombres":"CAMARA VILLEGAS SAMUEL",
      "dni":24986310,
      "ieId":""
    },
    {
      "nombres":"CUMPA AGUILAR WILSON",
      "dni":2418292,
      "ieId":""
    },
    {
      "nombres":"LAQUITA SICLLA EDILBERTO",
      "dni":24964577,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ FLORES IGNACIA",
      "dni":40694009,
      "ieId":""
    },
    {
      "nombres":"ORCOTORIO QUIÑONES IRMA",
      "dni":9608838,
      "ieId":""
    },
    {
      "nombres":"PARRA PIZARRO EDWAR",
      "dni":24991765,
      "ieId":""
    },
    {
      "nombres":"RIVERA INISUY ROGER GERARDO",
      "dni":4963742,
      "ieId":""
    },
    {
      "nombres":"SIERRA CRUZ NORMA",
      "dni":24995791,
      "ieId":""
    },
    {
      "nombres":"VELAZCO AGUILAR AUGUSTA VILMA",
      "dni":25300599,
      "ieId":""
    },
    {
      "nombres":"CASTILLO CHACMA VIDAL",
      "dni":23841301,
      "ieId":""
    },
    {
      "nombres":"GOMEZ MUÑOZ CELIA",
      "dni":23850149,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LIMACHI MARIO DAVID",
      "dni":23813996,
      "ieId":""
    },
    {
      "nombres":"MEZA CHAVEZ NARCISO",
      "dni":23824141,
      "ieId":""
    },
    {
      "nombres":"PINEDO GIRON JESSICA DEL CARMEN",
      "dni":41362534,
      "ieId":""
    },
    {
      "nombres":"SALAS GUTIERREZ CELSO ALEJANDRO",
      "dni":23907551,
      "ieId":""
    },
    {
      "nombres":"UGARTE ALVAREZ JESUS EUGENIO",
      "dni":24978341,
      "ieId":""
    },
    {
      "nombres":"ATAULLUCO HUAMAN GENARO",
      "dni":23905407,
      "ieId":""
    },
    {
      "nombres":"SUAREZ PACHECO FELIPE",
      "dni":25005990,
      "ieId":""
    },
    {
      "nombres":"TAPIA FARFAN JORGE",
      "dni":24998586,
      "ieId":""
    },
    {
      "nombres":"MEJIA CATALAN MARIEL VANESSA",
      "dni":41621520,
      "ieId":""
    },
    {
      "nombres":"MIRANDA CONDORI FLORINDA",
      "dni":41069932,
      "ieId":""
    },
    {
      "nombres":"PALMA BACA MARISOL",
      "dni":23941384,
      "ieId":""
    },
    {
      "nombres":"CAMPOS SAÑAC INGRID JHERLLY",
      "dni":40766760,
      "ieId":""
    },
    {
      "nombres":"AYBAR ZAMORA DRUSILA VIRGINIA",
      "dni":23844523,
      "ieId":""
    },
    {
      "nombres":"BERNAL PILCO VALENTIN",
      "dni":24462390,
      "ieId":""
    },
    {
      "nombres":"CHAMBI VILCA MIGUEL",
      "dni":25004687,
      "ieId":""
    },
    {
      "nombres":"CJUNO SANTOS CIRILA",
      "dni":23879161,
      "ieId":""
    },
    {
      "nombres":"DARGENT HOLGADO CARLOS",
      "dni":25004988,
      "ieId":""
    },
    {
      "nombres":"MAMANI FLORES ISAAC CONSUELO",
      "dni":80111092,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ QUISPE ALICIA",
      "dni":40103939,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES CARRASCO MODESTO",
      "dni":23936669,
      "ieId":""
    },
    {
      "nombres":"SALAZAR CANAL EDWIN",
      "dni":24978216,
      "ieId":""
    },
    {
      "nombres":"SERRANO PAUCCAR JUVENAL",
      "dni":44880547,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LINARES RUTH",
      "dni":25311980,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA PAREDES PAVEL GUSTAVO",
      "dni":23807998,
      "ieId":""
    },
    {
      "nombres":"CONCHATUPA CUSIPAUCAR JESUS AMILCAR",
      "dni":25321461,
      "ieId":""
    },
    {
      "nombres":"GIRONDAS MAR ROMULO",
      "dni":25311849,
      "ieId":""
    },
    {
      "nombres":"HERRERA SUAREZ NILDA",
      "dni":25004452,
      "ieId":""
    },
    {
      "nombres":"MIRANDA DE CUBA FELICIA",
      "dni":23867454,
      "ieId":""
    },
    {
      "nombres":"SALAS ALOSILLA YBIS ALCIONE",
      "dni":23892463,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CCORIMANYA FAUSTINA",
      "dni":23851638,
      "ieId":""
    },
    {
      "nombres":"QUISPE LEIVA ALCIDES",
      "dni":41910294,
      "ieId":""
    },
    {
      "nombres":"ALEGRE NUÑEZ MARIA NATIVIDAD",
      "dni":23981798,
      "ieId":""
    },
    {
      "nombres":"ACUÑA CHAMBI JESUS",
      "dni":25008612,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GUEVARA YULINA",
      "dni":42226368,
      "ieId":""
    },
    {
      "nombres":"LOVON RODRIGUEZ TIMOTEA",
      "dni":24460305,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ OLARTE ESCOLASTICA",
      "dni":23829025,
      "ieId":""
    },
    {
      "nombres":"HUAMANGA VERA NICASIO",
      "dni":24468854,
      "ieId":""
    },
    {
      "nombres":"CALIZAYA CLAVIJO EULALIA",
      "dni":24715243,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ SOLIS PALMIR",
      "dni":25004219,
      "ieId":""
    },
    {
      "nombres":"CHIPANA NINANQUI JAVIER RODRIGO",
      "dni":45239204,
      "ieId":""
    },
    {
      "nombres":"CUBA KILLCA EUSTAQUIO",
      "dni":24951975,
      "ieId":""
    },
    {
      "nombres":"HUAMAN AUCCACUSI TEOFILO",
      "dni":25321311,
      "ieId":""
    },
    {
      "nombres":"LUNA CAHUANA HILDA",
      "dni":24495601,
      "ieId":""
    },
    {
      "nombres":"MINAURO VILLAVICENCIO PAULINO",
      "dni":24948289,
      "ieId":""
    },
    {
      "nombres":"SOTO GALLEGOS SOCRATES",
      "dni":24485907,
      "ieId":""
    },
    {
      "nombres":"TINAJEROS QUICOHUAMAN EDELMIRA",
      "dni":23978630,
      "ieId":""
    },
    {
      "nombres":"GONZA ARCONDO GERMAN",
      "dni":23969001,
      "ieId":""
    },
    {
      "nombres":"ACURIO ARROYO GRICHEL",
      "dni":24994522,
      "ieId":""
    },
    {
      "nombres":"OTAZU VARGAS SAUL",
      "dni":24965834,
      "ieId":""
    },
    {
      "nombres":"PILLCO ILLA EULOGIA",
      "dni":25310718,
      "ieId":""
    },
    {
      "nombres":"SURCO IBARRA HIPOLITA",
      "dni":25320292,
      "ieId":""
    },
    {
      "nombres":"ALARCON ANDRADE EDELMIRA",
      "dni":24950680,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CHAVEZ GIONAIDA GIANINA",
      "dni":42087037,
      "ieId":""
    },
    {
      "nombres":"SUCARI CCASO PERCY RENE",
      "dni":1500511,
      "ieId":""
    },
    {
      "nombres":"MOLLO PUMA JORGE",
      "dni":41610631,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA CISNEROS WALTER",
      "dni":23992506,
      "ieId":""
    },
    {
      "nombres":"TORRES HUAMAN ALIPIO",
      "dni":25320361,
      "ieId":""
    },
    {
      "nombres":"AGUILAR MELLADO ESBERT FELIMON",
      "dni":23990554,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS CAVERO YIRKA EVANGELINA",
      "dni":23859875,
      "ieId":""
    },
    {
      "nombres":"FARFAN URBANO JULIO CESAR",
      "dni":44659369,
      "ieId":""
    },
    {
      "nombres":"FUENTES TAIPE ALIDA",
      "dni":41535187,
      "ieId":""
    },
    {
      "nombres":"GIL CORTES ANALY YESSENIA",
      "dni":41761151,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MENDOZA MIGUEL EDWIN",
      "dni":40787632,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HUAMANI GILBER",
      "dni":42147684,
      "ieId":""
    },
    {
      "nombres":"OCAMPO CALLE JULIO CESAR",
      "dni":42912365,
      "ieId":""
    },
    {
      "nombres":"QUISPE PUMA EDGAR",
      "dni":80159589,
      "ieId":""
    },
    {
      "nombres":"QUISPE YUCRA PIO",
      "dni":42110906,
      "ieId":""
    },
    {
      "nombres":"ROMAN CUTIPA EDGAR RUBEN",
      "dni":23932142,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS SALAS ZENAIDA",
      "dni":24994355,
      "ieId":""
    },
    {
      "nombres":"TORRE MONROY WILIAM",
      "dni":41140859,
      "ieId":""
    },
    {
      "nombres":"VEGA VALASQUEZ MARLENI",
      "dni":43893315,
      "ieId":""
    },
    {
      "nombres":"AICA QUISPE MARIO",
      "dni":42015395,
      "ieId":""
    },
    {
      "nombres":"CASTILLO NUÑEZ FRANCISCO BERNARDO",
      "dni":23942693,
      "ieId":""
    },
    {
      "nombres":"FARFAN TORRE ERASMO",
      "dni":24971742,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GONZALES MARLENY",
      "dni":41405092,
      "ieId":""
    },
    {
      "nombres":"LOZANO VERGARA ISAAC",
      "dni":24957756,
      "ieId":""
    },
    {
      "nombres":"TAPARA PUMA ARTHUR DIOGENES",
      "dni":42036606,
      "ieId":""
    },
    {
      "nombres":"VARGAS CAMA VICTOR",
      "dni":2028159,
      "ieId":""
    },
    {
      "nombres":"VIVANCO CJURO WALTER",
      "dni":24965539,
      "ieId":""
    },
    {
      "nombres":"CUBA KILCA VALENTIN",
      "dni":24972216,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CRUZ GENARO MERCEDES",
      "dni":23854179,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DUEÑAS RAUL",
      "dni":41498276,
      "ieId":""
    },
    {
      "nombres":"JANCCO HUAHUASONCCO EXALTACION",
      "dni":24471101,
      "ieId":""
    },
    {
      "nombres":"ORTEGA RIOS VERONICA",
      "dni":41378607,
      "ieId":""
    },
    {
      "nombres":"QUISPE SERRANO ROBERTO PABLO",
      "dni":23891028,
      "ieId":""
    },
    {
      "nombres":"RIVERO ESCALANTE AYDEE",
      "dni":23995604,
      "ieId":""
    },
    {
      "nombres":"ROJAS TORRES BETHI",
      "dni":24979396,
      "ieId":""
    },
    {
      "nombres":"CAMPUJO HERVIAS MARILU",
      "dni":25834218,
      "ieId":""
    },
    {
      "nombres":"CCAHUANA SERNA FELICITAS",
      "dni":24965832,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO BRAVO SOLEDAD VICTORIA",
      "dni":24700674,
      "ieId":""
    },
    {
      "nombres":"LAIME LLOCLLA WILLIAM",
      "dni":23966998,
      "ieId":""
    },
    {
      "nombres":"MIRANDA QUISPE CARMEN",
      "dni":25004877,
      "ieId":""
    },
    {
      "nombres":"TARCO CARLOS LIDIA",
      "dni":25199742,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE MEDINA SOLEDAD",
      "dni":24979030,
      "ieId":""
    },
    {
      "nombres":"AGUILAR LOZANO LIDA",
      "dni":41243964,
      "ieId":""
    },
    {
      "nombres":"GONZALES OLIVO FLOR ELIZABETH",
      "dni":40373832,
      "ieId":""
    },
    {
      "nombres":"VIVANCO ROZAS RUTH MERY",
      "dni":41224532,
      "ieId":""
    },
    {
      "nombres":"RAMOS CARDENAS RENE",
      "dni":24995127,
      "ieId":""
    },
    {
      "nombres":"CHARALLA CHACO DELIA",
      "dni":41427174,
      "ieId":""
    },
    {
      "nombres":"UMERES GAMARRA YANET",
      "dni":23996305,
      "ieId":""
    },
    {
      "nombres":"JIMENEZ HUAMAN MARIA MAGDALENA",
      "dni":40069199,
      "ieId":""
    },
    {
      "nombres":"PATILLA PEREZ ASUNCION",
      "dni":24985432,
      "ieId":""
    },
    {
      "nombres":"GUILLEN CAVIEDES RENE",
      "dni":80397097,
      "ieId":""
    },
    {
      "nombres":"CCAHUANA HUAMAN ELIZABET",
      "dni":41259703,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ MONGE RUTH AMPARO",
      "dni":41153684,
      "ieId":""
    },
    {
      "nombres":"DIAZ CASTRO SHELMA",
      "dni":25009060,
      "ieId":""
    },
    {
      "nombres":"HUARANCCA SALAS PAULINA",
      "dni":23855299,
      "ieId":""
    },
    {
      "nombres":"GONZALES LOAYZA ROY JOSELO",
      "dni":24005303,
      "ieId":""
    },
    {
      "nombres":"MARIÑO MORVELI LUCIO",
      "dni":24460543,
      "ieId":""
    },
    {
      "nombres":"BAZAN SULLCA MIRIAM",
      "dni":23974084,
      "ieId":""
    },
    {
      "nombres":"BEDOYA MENDOZA SONIA",
      "dni":40917034,
      "ieId":""
    },
    {
      "nombres":"HUAYLLA ORCCOSUPA SAHARA",
      "dni":40687478,
      "ieId":""
    },
    {
      "nombres":"JIHUAÑA CUCHO ROSARIO",
      "dni":23820579,
      "ieId":""
    },
    {
      "nombres":"OCHOA CCORIMANYA ANTONIO",
      "dni":24940747,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ GUEVARA ROSMERY",
      "dni":43673612,
      "ieId":""
    },
    {
      "nombres":"CACERES DIAZ PAULTH JUNIOR",
      "dni":42249708,
      "ieId":""
    },
    {
      "nombres":"DELGADO AGUIRRE ROMALDA ALIZ",
      "dni":23851702,
      "ieId":""
    },
    {
      "nombres":"LANADO DALES LUIS",
      "dni":24663277,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA SELIS ELVA",
      "dni":25303027,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS QUIPO MARCO",
      "dni":42328087,
      "ieId":""
    },
    {
      "nombres":"HUACAC OLAVE ERIC",
      "dni":41360698,
      "ieId":""
    },
    {
      "nombres":"JANCCO QQUECAÑO BERNABE",
      "dni":43818511,
      "ieId":""
    },
    {
      "nombres":"ALAGON MORVELI BASILISA",
      "dni":25005048,
      "ieId":""
    },
    {
      "nombres":"LLANCAY CABRERA RICARDO",
      "dni":24965960,
      "ieId":""
    },
    {
      "nombres":"MONDACA HUAMAN FLOR",
      "dni":24991902,
      "ieId":""
    },
    {
      "nombres":"OLIVERA RICALDE JUAN EUDES",
      "dni":25310366,
      "ieId":""
    },
    {
      "nombres":"PAREDES OJEDA ARISTIDES",
      "dni":23816882,
      "ieId":""
    },
    {
      "nombres":"SALOMA QUISPE CONSTANTINO",
      "dni":24966874,
      "ieId":""
    },
    {
      "nombres":"SARAYA APAZA ARMANDO",
      "dni":42332362,
      "ieId":""
    },
    {
      "nombres":"UGARTE CANAL LINDA LIZ",
      "dni":24978518,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO ARIAS FLOR MARITSA",
      "dni":24984660,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL GARAY ANGEL ROLANDO",
      "dni":24974930,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL GARAY RENE HORTENCIA",
      "dni":24974516,
      "ieId":""
    },
    {
      "nombres":"CHIPANA HUAMAN JUANITA",
      "dni":24990856,
      "ieId":""
    },
    {
      "nombres":"GONZALES BEDOYA AIDA",
      "dni":41259706,
      "ieId":""
    },
    {
      "nombres":"HUILLCA RICALDE REGOBERTO",
      "dni":44655722,
      "ieId":""
    },
    {
      "nombres":"LIMASCCA RICALDE DE QUI MARCELINA",
      "dni":24989986,
      "ieId":""
    },
    {
      "nombres":"MORA ARIAS JORGE",
      "dni":24967651,
      "ieId":""
    },
    {
      "nombres":"ÑAHUI CASTILLO ZACARIAS",
      "dni":24976426,
      "ieId":""
    },
    {
      "nombres":"ACUÑA GUTIERREZ JUAN JOSE",
      "dni":40851483,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VILLAFUERTE DANIEL",
      "dni":23863842,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LIMA JUANA",
      "dni":24991694,
      "ieId":""
    },
    {
      "nombres":"DELGADO AUCCAILLE CARMEN",
      "dni":23997782,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GUEVARA ELIANA",
      "dni":25327091,
      "ieId":""
    },
    {
      "nombres":"HUAMAN QUISPE JULIO CESAR",
      "dni":42610820,
      "ieId":""
    },
    {
      "nombres":"LIMA UMERES EDY SANTIAGO",
      "dni":24978591,
      "ieId":""
    },
    {
      "nombres":"LUQUE PUMA GERVER",
      "dni":43976017,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCASO FREDY FROILAN",
      "dni":42374535,
      "ieId":""
    },
    {
      "nombres":"QUISPE SONCCO DAVID",
      "dni":25005103,
      "ieId":""
    },
    {
      "nombres":"UGARTE FUENTES LUZ KARINA",
      "dni":23934481,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MEDINA JOSE",
      "dni":24974429,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CALDERON JUAN",
      "dni":24967692,
      "ieId":""
    },
    {
      "nombres":"LEON OCSA RAUL VALERIO",
      "dni":24975440,
      "ieId":""
    },
    {
      "nombres":"NIHUA RAMIREZ BERTHA",
      "dni":23841771,
      "ieId":""
    },
    {
      "nombres":"RICALDE CARDENAS EDGAR",
      "dni":24975598,
      "ieId":""
    },
    {
      "nombres":"UMERES HUAMAN KARIN",
      "dni":25321354,
      "ieId":""
    },
    {
      "nombres":"DIAZ CASTRO ERIKA",
      "dni":43906466,
      "ieId":""
    },
    {
      "nombres":"FARFAN MORA CLAUDIA",
      "dni":23911140,
      "ieId":""
    },
    {
      "nombres":"LOPEZ DE ZAMORA MARIA JESUS",
      "dni":24976756,
      "ieId":""
    },
    {
      "nombres":"PEREZ VELARDE SOLANO",
      "dni":24984198,
      "ieId":""
    },
    {
      "nombres":"QUISPICUSI DUEÑAS BERTHA",
      "dni":24978658,
      "ieId":""
    },
    {
      "nombres":"TROCONES HUAMAN JAIME",
      "dni":24984740,
      "ieId":""
    },
    {
      "nombres":"VILA DORADO DIANA",
      "dni":45755589,
      "ieId":""
    },
    {
      "nombres":"ZAMORA COBOS ASTERIO",
      "dni":24976755,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO MEDINA LINIERS FERNANDO",
      "dni":41092800,
      "ieId":""
    },
    {
      "nombres":"DINOS CASTRO ALEXANDER",
      "dni":23990217,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA SALOMA CIRILO",
      "dni":25327029,
      "ieId":""
    },
    {
      "nombres":"MIRANDA SAUÑE MIRIAM",
      "dni":10409704,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO BRAVO ELENA CALIXTA",
      "dni":24702244,
      "ieId":""
    },
    {
      "nombres":"PEREIRA GONZALES ESTEBAN",
      "dni":31011949,
      "ieId":""
    },
    {
      "nombres":"ROJAS MONARES NATALIE",
      "dni":42712954,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CONDORI NELVIO",
      "dni":24984791,
      "ieId":""
    },
    {
      "nombres":"LUQUE CCAHUANA MARIO ALFONSO",
      "dni":24984675,
      "ieId":""
    },
    {
      "nombres":"CATUNTA HUILLCA JAVIER",
      "dni":42347955,
      "ieId":""
    },
    {
      "nombres":"QUISPE FLORES JHONNY",
      "dni":41856754,
      "ieId":""
    },
    {
      "nombres":"SALLO CHAVEZ JOEL",
      "dni":24994732,
      "ieId":""
    },
    {
      "nombres":"ACURIO ARROYO ALEXANDER",
      "dni":40567435,
      "ieId":""
    },
    {
      "nombres":"FUENTES CCARAYHUA ZOILA",
      "dni":24968575,
      "ieId":""
    },
    {
      "nombres":"PELAYZA TERAN JESSICA PILAR",
      "dni":41267687,
      "ieId":""
    },
    {
      "nombres":"SALAS APARICIO JHON EUDES",
      "dni":40473844,
      "ieId":""
    },
    {
      "nombres":"GIBAJA ARMENDARIZ ESTHER",
      "dni":24991466,
      "ieId":""
    },
    {
      "nombres":"HUARACHA YUPANQUI YONY",
      "dni":43958653,
      "ieId":""
    },
    {
      "nombres":"TICONA CHAVEZ ELIZABETH LIDIA",
      "dni":24991297,
      "ieId":""
    },
    {
      "nombres":"ACHAHUE CARAYHUA HEBERT",
      "dni":45998563,
      "ieId":""
    },
    {
      "nombres":"ESTRADA ESPINOZA OSCAR",
      "dni":24978651,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN ZEGARRA JOSE",
      "dni":40751262,
      "ieId":""
    },
    {
      "nombres":"FLORES QUISPE NICOMEDES",
      "dni":24991518,
      "ieId":""
    },
    {
      "nombres":"LLALLA SALCEDO MERCEDES",
      "dni":41113999,
      "ieId":""
    },
    {
      "nombres":"QUISPICUSI ALVAREZ TOMAS IRENEO",
      "dni":23813722,
      "ieId":""
    },
    {
      "nombres":"RIVERA GUEVARA MARCO ANTONIO",
      "dni":25012567,
      "ieId":""
    },
    {
      "nombres":"TROCONES HUAMAN KIME",
      "dni":42792835,
      "ieId":""
    },
    {
      "nombres":"UCHUPE QUIPO POLICARPO",
      "dni":24975380,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO GAMARRA CIRILO AMILCAR",
      "dni":24976267,
      "ieId":""
    },
    {
      "nombres":"DIAZ MONTES ADOLFO COSME",
      "dni":23974033,
      "ieId":""
    },
    {
      "nombres":"ESTALLA LEON MARGOT",
      "dni":41899870,
      "ieId":""
    },
    {
      "nombres":"LOAYZA MUÑOZ ALBERTO",
      "dni":41597216,
      "ieId":""
    },
    {
      "nombres":"VENERO HUAMAN ALCIVIADES",
      "dni":24989753,
      "ieId":""
    },
    {
      "nombres":"AYMACHOQUE CHALLCO AMERICO",
      "dni":25214747,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI MONTALVO JULIO",
      "dni":24581097,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CACERES BENITO",
      "dni":23871190,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA MENDOZA ALICIA",
      "dni":24978249,
      "ieId":""
    },
    {
      "nombres":"TORRES QUISPICUSI ZENON CIRILO",
      "dni":23972563,
      "ieId":""
    },
    {
      "nombres":"FLORES QUISPE JUAN",
      "dni":24995030,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CCASA LENIN",
      "dni":43974805,
      "ieId":""
    },
    {
      "nombres":"SUAREZ VALCARCEL VIRGINIA",
      "dni":24981783,
      "ieId":""
    },
    {
      "nombres":"FLORES ILLACUTIPA ROBERTO",
      "dni":42221293,
      "ieId":""
    },
    {
      "nombres":"GONZALES MARIN CARLOS JORGE",
      "dni":24987789,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ MAR LORENA",
      "dni":25310363,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ALVAREZ JULIO CESAR",
      "dni":43708721,
      "ieId":""
    },
    {
      "nombres":"APANA SILVESTRE LELIS JHOVANA",
      "dni":43620683,
      "ieId":""
    },
    {
      "nombres":"BULEJE ALCARRAZ RICHARD",
      "dni":41880411,
      "ieId":""
    },
    {
      "nombres":"POMA ESPINOZA AURELIO",
      "dni":23974045,
      "ieId":""
    },
    {
      "nombres":"CONDORI QUIPO DANIEL",
      "dni":24976368,
      "ieId":""
    },
    {
      "nombres":"PAULLO MOLINA ALICIA",
      "dni":43973566,
      "ieId":""
    },
    {
      "nombres":"TAIPICURI SUCA LUCIA",
      "dni":24978535,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA ALEGRIA EDWIN",
      "dni":25062178,
      "ieId":""
    },
    {
      "nombres":"ALTAMIRANO VENERO FLAVIO",
      "dni":23802872,
      "ieId":""
    },
    {
      "nombres":"BEINGOLEA VASQUEZ TOMASA RAQUEL",
      "dni":41280045,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL ENRIQUEZ JOSE LUIS",
      "dni":23981368,
      "ieId":""
    },
    {
      "nombres":"AZURIN QUILLILLI EYELIT",
      "dni":40299236,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE SILVA MERCEDES",
      "dni":25311892,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA TINOCO YOLANDA",
      "dni":41005506,
      "ieId":""
    },
    {
      "nombres":"OLAZABAL ECHEGARAY EVER",
      "dni":24965407,
      "ieId":""
    },
    {
      "nombres":"PACHECO SAÑAC SILVIA",
      "dni":24990565,
      "ieId":""
    },
    {
      "nombres":"TRELLES ALVAREZ PERCY",
      "dni":23985110,
      "ieId":""
    },
    {
      "nombres":"VARGAS RUIZ NILA",
      "dni":24990894,
      "ieId":""
    },
    {
      "nombres":"WARTHON SERRANO CLETO",
      "dni":31541392,
      "ieId":""
    },
    {
      "nombres":"CABALLERO CARLO LUCIA ANGELICA",
      "dni":25136472,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ NIEVE FREDY VIDAL",
      "dni":42315461,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL CANAL MOISES",
      "dni":23974156,
      "ieId":""
    },
    {
      "nombres":"CONDORI ECHEA JOSE CARLOS",
      "dni":24978588,
      "ieId":""
    },
    {
      "nombres":"HUARCA CUADROS LUIS",
      "dni":24991988,
      "ieId":""
    },
    {
      "nombres":"PALOMINO LUQUE ILARIO SALUSTIO",
      "dni":24976444,
      "ieId":""
    },
    {
      "nombres":"POCCOHUANCA QUISPE URLANDA",
      "dni":41031598,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR CEINSE CARMEN LUZ",
      "dni":25009209,
      "ieId":""
    },
    {
      "nombres":"QUISPE GALLEGOS CIPRIAN",
      "dni":24994321,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ TTITO ANA",
      "dni":40708853,
      "ieId":""
    },
    {
      "nombres":"PAULLO DAVALOS HUGO",
      "dni":24989707,
      "ieId":""
    },
    {
      "nombres":"CHACON SALAS SARA",
      "dni":40485876,
      "ieId":""
    },
    {
      "nombres":"DIAZ OCHOA NELSON",
      "dni":42534099,
      "ieId":""
    },
    {
      "nombres":"OLAZABAL ECHEGARAY MARCO ANTONIO",
      "dni":24994626,
      "ieId":""
    },
    {
      "nombres":"CARDENAS ORTIZ CARMEN",
      "dni":24954750,
      "ieId":""
    },
    {
      "nombres":"CARAZAS ZAPATA MARIA ELENA",
      "dni":25318356,
      "ieId":""
    },
    {
      "nombres":"ROJO CASTELO JUAN PABLO",
      "dni":23835736,
      "ieId":""
    },
    {
      "nombres":"MAMANI USCAMAYTA WILFREDO",
      "dni":44106939,
      "ieId":""
    },
    {
      "nombres":"CABRERA BENAVIDES LISBETH MILUSKA",
      "dni":24495222,
      "ieId":""
    },
    {
      "nombres":"ESTRADA MORMONTOY CELESTINA",
      "dni":23971887,
      "ieId":""
    },
    {
      "nombres":"MAYTA RAMOS TEOFILO",
      "dni":41794301,
      "ieId":""
    },
    {
      "nombres":"TUYA AUCCAPUMA MIGUEL ANGEL",
      "dni":25004773,
      "ieId":""
    },
    {
      "nombres":"ARIAS VENERO SAMUEL",
      "dni":25006956,
      "ieId":""
    },
    {
      "nombres":"MONARES PALOMINO AMBROCIO",
      "dni":23974028,
      "ieId":""
    },
    {
      "nombres":"PEREZ ARONE GLADYS",
      "dni":31344034,
      "ieId":""
    },
    {
      "nombres":"PRO MAMANI RONAL",
      "dni":40553315,
      "ieId":""
    },
    {
      "nombres":"VENERO BRISEÑO MARIO",
      "dni":23974024,
      "ieId":""
    },
    {
      "nombres":"CANDIA ACUÑA ADOLFO",
      "dni":25012476,
      "ieId":""
    },
    {
      "nombres":"COPACONDORI PACO FROILAN WILFREDO",
      "dni":41204675,
      "ieId":""
    },
    {
      "nombres":"HERRERA PAUCAR WILFREDO",
      "dni":40116713,
      "ieId":""
    },
    {
      "nombres":"ROJAS USCAMAYTA ESTANISLAO",
      "dni":25319463,
      "ieId":""
    },
    {
      "nombres":"SAYCO BARRIENTOS EDGAR",
      "dni":40531800,
      "ieId":""
    },
    {
      "nombres":"SOTO QUEA ROSALYN",
      "dni":42325800,
      "ieId":""
    },
    {
      "nombres":"AGUILAR RAMIREZ GRACIELA",
      "dni":42362626,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA CCORAHUA HEBERTH",
      "dni":41976506,
      "ieId":""
    },
    {
      "nombres":"BEZAÑO TARCO ORLANDO",
      "dni":40917854,
      "ieId":""
    },
    {
      "nombres":"HILARES ROMERO EDITH",
      "dni":24994748,
      "ieId":""
    },
    {
      "nombres":"MIRANDA CANAZA CLEVER",
      "dni":2429354,
      "ieId":""
    },
    {
      "nombres":"NAHUAMEL JACINTO WALTHER",
      "dni":24965486,
      "ieId":""
    },
    {
      "nombres":"QUISPE ORTIZ JACINTO",
      "dni":23847353,
      "ieId":""
    },
    {
      "nombres":"QUISPE RIVERO ROMULO",
      "dni":41597005,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUARCAYA ROSARIO",
      "dni":23986062,
      "ieId":""
    },
    {
      "nombres":"CHOQUEHUANCA CONDORI ISABEL MARGARITA",
      "dni":1552239,
      "ieId":""
    },
    {
      "nombres":"FLOREZ VALERIANO IVAN",
      "dni":42667977,
      "ieId":""
    },
    {
      "nombres":"RIVERA BUSTAMANTE JUAN FERNANDO",
      "dni":24965925,
      "ieId":""
    },
    {
      "nombres":"LOAYZA LOPEZ EDDY YUBAL",
      "dni":42246691,
      "ieId":""
    },
    {
      "nombres":"OVIEDO CUBA RUTH MERI",
      "dni":41117928,
      "ieId":""
    },
    {
      "nombres":"SOLOAGA CCOYSO DELFINA",
      "dni":23969012,
      "ieId":""
    },
    {
      "nombres":"ZANS GIL WILBERTH",
      "dni":42325806,
      "ieId":""
    },
    {
      "nombres":"HUAMANI ARONI ISMAEL",
      "dni":40915865,
      "ieId":""
    },
    {
      "nombres":"QUISPE ALAGON WALTER IRMO",
      "dni":25004240,
      "ieId":""
    },
    {
      "nombres":"MACHACA PORTILLO ROGER",
      "dni":40541579,
      "ieId":""
    },
    {
      "nombres":"RAMOS VIZA GUILLERMO",
      "dni":80039605,
      "ieId":""
    },
    {
      "nombres":"OLMEDO QUISPE MELQUIADES",
      "dni":42782897,
      "ieId":""
    },
    {
      "nombres":"REYES RICALDE RICARDINA",
      "dni":23858456,
      "ieId":""
    },
    {
      "nombres":"CHALLCO LUQUE JUDITH",
      "dni":40348206,
      "ieId":""
    },
    {
      "nombres":"OTAZU VARGAS ROGER",
      "dni":41140534,
      "ieId":""
    },
    {
      "nombres":"APAZA PAULLO ALEXANDER",
      "dni":24383093,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ ALAGON JULIAN METORINO",
      "dni":23974446,
      "ieId":""
    },
    {
      "nombres":"ANCCO RAYME WILSON",
      "dni":7465104,
      "ieId":""
    },
    {
      "nombres":"CARPIO LLERENA JULIO CESAR",
      "dni":29712736,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ RICRA MATILDE",
      "dni":23980431,
      "ieId":""
    },
    {
      "nombres":"LARA HUAMAN FREDY",
      "dni":42034681,
      "ieId":""
    },
    {
      "nombres":"LAYME ANCCASI RAMIRO",
      "dni":24001378,
      "ieId":""
    },
    {
      "nombres":"LOAYZA LOPEZ TEREZA ROSARIO",
      "dni":29587413,
      "ieId":""
    },
    {
      "nombres":"MAMANI CCOSI JUAN TEOFILO",
      "dni":1301962,
      "ieId":""
    },
    {
      "nombres":"MASIAS SALDIVAR BRAULIO",
      "dni":42865842,
      "ieId":""
    },
    {
      "nombres":"UMERES VILLENA TEOFILO ARTURO",
      "dni":24993595,
      "ieId":""
    },
    {
      "nombres":"VARGAS VELASQUEZ MARILU",
      "dni":23863830,
      "ieId":""
    },
    {
      "nombres":"ACURIO HERMOZA FREDY GUSTAVO",
      "dni":23980288,
      "ieId":""
    },
    {
      "nombres":"AMBOR GARCIA MARCIAL",
      "dni":40704324,
      "ieId":""
    },
    {
      "nombres":"COSIO DIAZ FRANCISCA",
      "dni":23829462,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ LARA GILBERTO",
      "dni":42253631,
      "ieId":""
    },
    {
      "nombres":"GUEVARA DALENS VESNA",
      "dni":23976268,
      "ieId":""
    },
    {
      "nombres":"HUAMAN HUAMAN PAULINO FLAVIO",
      "dni":23879436,
      "ieId":""
    },
    {
      "nombres":"LIMA UMERES EDWARDS",
      "dni":41050938,
      "ieId":""
    },
    {
      "nombres":"MORA SACA VICENTE",
      "dni":23905075,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR INCARROCA ENRIQUE",
      "dni":23986949,
      "ieId":""
    },
    {
      "nombres":"SUCSA VILLEGAS ROLANDO",
      "dni":24984402,
      "ieId":""
    },
    {
      "nombres":"TORRES QUISPICUSI CRISOLOGO",
      "dni":23974423,
      "ieId":""
    },
    {
      "nombres":"USCAPI PACHECO FAYE",
      "dni":40748059,
      "ieId":""
    },
    {
      "nombres":"ALAGON CACERES FREDY",
      "dni":25005157,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL GARAY MARCO FERNANDO",
      "dni":23826491,
      "ieId":""
    },
    {
      "nombres":"CERECEDA CORDOVA MARTIN",
      "dni":23901796,
      "ieId":""
    },
    {
      "nombres":"FLORES CJURO FREDY",
      "dni":43277828,
      "ieId":""
    },
    {
      "nombres":"FLORES HUILLCA ALEJANDRINA",
      "dni":24981180,
      "ieId":""
    },
    {
      "nombres":"HUALLPA RICALDE ARLEY",
      "dni":40365342,
      "ieId":""
    },
    {
      "nombres":"ORUE ROJAS WALTER",
      "dni":24966078,
      "ieId":""
    },
    {
      "nombres":"PERALTA CRUZ JUANA",
      "dni":23857319,
      "ieId":""
    },
    {
      "nombres":"RICALDE CACERES JUVENAL",
      "dni":24999434,
      "ieId":""
    },
    {
      "nombres":"RIVERA ANGULO SAMUEL",
      "dni":25302448,
      "ieId":""
    },
    {
      "nombres":"TORRES CONDORI OMAR ADRIAN",
      "dni":2427745,
      "ieId":""
    },
    {
      "nombres":"UGARTE ALATRISTA ELISEO",
      "dni":24975873,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS COVARRUBIAS MARIO",
      "dni":25305014,
      "ieId":""
    },
    {
      "nombres":"ACUÑA SALAS ELIAS JHON",
      "dni":40142503,
      "ieId":""
    },
    {
      "nombres":"AYMARA TAIPICURI JUAN CLIMACO",
      "dni":24978498,
      "ieId":""
    },
    {
      "nombres":"BUSTOS PEREIRA TEOFILO",
      "dni":24946080,
      "ieId":""
    },
    {
      "nombres":"COPACONDORI PACO HECTOR WILBER",
      "dni":41151542,
      "ieId":""
    },
    {
      "nombres":"FLORES QUISPE GUIDO",
      "dni":42491974,
      "ieId":""
    },
    {
      "nombres":"HUAMAN TACURI RUTH MABEL",
      "dni":43122335,
      "ieId":""
    },
    {
      "nombres":"JARA GARCIA FLOR DE MARIA",
      "dni":41659384,
      "ieId":""
    },
    {
      "nombres":"LUCANA TORRES JORGE",
      "dni":23987653,
      "ieId":""
    },
    {
      "nombres":"MAMANI LIMACHI ASENCION",
      "dni":24661897,
      "ieId":""
    },
    {
      "nombres":"MAMANI NINA ROSA",
      "dni":24704302,
      "ieId":""
    },
    {
      "nombres":"PALOMINO GALINDO PERCY",
      "dni":41618729,
      "ieId":""
    },
    {
      "nombres":"SOLANO TUNQUE MERCEDES",
      "dni":23979121,
      "ieId":""
    },
    {
      "nombres":"UGARTE CANAL JUAN RAMIRO",
      "dni":24978496,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA AGUERO CLAUDIO",
      "dni":23939691,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MOLER OMAR",
      "dni":24706404,
      "ieId":""
    },
    {
      "nombres":"CERVANTES HUAMANRICRA ADRIEL REYNALDO",
      "dni":41953880,
      "ieId":""
    },
    {
      "nombres":"HUAMAN ALTAMIRANO FELIX",
      "dni":24993773,
      "ieId":""
    },
    {
      "nombres":"LLANCAY VALDEZ VALOIS",
      "dni":23994689,
      "ieId":""
    },
    {
      "nombres":"NAVARRO ALTAMIRANO JUAN PABLO",
      "dni":40359723,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ PACHECO GREGORIO",
      "dni":24965414,
      "ieId":""
    },
    {
      "nombres":"QUISPE AYMACHOQUE ABEL",
      "dni":44404419,
      "ieId":""
    },
    {
      "nombres":"RAMPAS VALLE LUCIO",
      "dni":25302622,
      "ieId":""
    },
    {
      "nombres":"SALAZAR CHAMPI ROLANDO",
      "dni":24989957,
      "ieId":""
    },
    {
      "nombres":"VALENCIA ESPINOZA MARCO ANTONIO",
      "dni":23836728,
      "ieId":""
    },
    {
      "nombres":"ARENAS QUISPE JUAN HUGO",
      "dni":41557517,
      "ieId":""
    },
    {
      "nombres":"ASCARZA CISNEROS DANINE",
      "dni":25004328,
      "ieId":""
    },
    {
      "nombres":"DIAZ LEZAMA RUTH MERY",
      "dni":44467299,
      "ieId":""
    },
    {
      "nombres":"GALARRETA UMERES ERNESTO",
      "dni":24965624,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CCORIMANYA CARMEN ROSA",
      "dni":23982394,
      "ieId":""
    },
    {
      "nombres":"SAICO ALCCAMARI ERNESTO",
      "dni":24887160,
      "ieId":""
    },
    {
      "nombres":"GUARDAPUCLLA MORMONTOY YSABEL",
      "dni":25305002,
      "ieId":""
    },
    {
      "nombres":"MASIAS USCAMAYTA AMERICO IVAN",
      "dni":23819452,
      "ieId":""
    },
    {
      "nombres":"PARIPANCA ROQUE ROBER",
      "dni":42447797,
      "ieId":""
    },
    {
      "nombres":"SORIA VARGAS MARLENE",
      "dni":24970544,
      "ieId":""
    },
    {
      "nombres":"SUYO MAR LUDWING",
      "dni":24982321,
      "ieId":""
    },
    {
      "nombres":"VARGAS MAMANI EDWIN",
      "dni":42006238,
      "ieId":""
    },
    {
      "nombres":"VIVAS ENRIQUEZ URBANO",
      "dni":40059103,
      "ieId":""
    },
    {
      "nombres":"CANDIA QUISPE FERMIN",
      "dni":40315747,
      "ieId":""
    },
    {
      "nombres":"GASPAR CCOICCA OSCAR",
      "dni":42941168,
      "ieId":""
    },
    {
      "nombres":"GONZALES SEGOVIA ELCHER",
      "dni":42876806,
      "ieId":""
    },
    {
      "nombres":"MARISCAL TERAN GUSTAVO RAUL",
      "dni":29410004,
      "ieId":""
    },
    {
      "nombres":"MONTALVO ESPINOZA MARIO FERNANDO",
      "dni":24978974,
      "ieId":""
    },
    {
      "nombres":"NINA TORRES JUAN GUALBERTO",
      "dni":23916457,
      "ieId":""
    },
    {
      "nombres":"PERALTA OVIEDO RICHARD",
      "dni":40458155,
      "ieId":""
    },
    {
      "nombres":"SAICO ALCCAMARI BACILIA",
      "dni":23974030,
      "ieId":""
    },
    {
      "nombres":"UÑURUCO TOLEDO CINTHIA",
      "dni":45344192,
      "ieId":""
    },
    {
      "nombres":"CORNEJO ALOSILLA MIRIAN",
      "dni":41695692,
      "ieId":""
    },
    {
      "nombres":"FERRO CACERES JUAN CLIMACO",
      "dni":24970615,
      "ieId":""
    },
    {
      "nombres":"HUAYTA MENDOZA FREDY CELSO",
      "dni":1556178,
      "ieId":""
    },
    {
      "nombres":"JARA VASQUEZ WALKER ZENON",
      "dni":42681365,
      "ieId":""
    },
    {
      "nombres":"KCANAHUIRE MAMANI ALEXIS",
      "dni":45265816,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUICO HECTOR FREDI",
      "dni":80294669,
      "ieId":""
    },
    {
      "nombres":"VALENCIA GUISADO OCTAVIO",
      "dni":24993600,
      "ieId":""
    },
    {
      "nombres":"ZAVALA CONDORI FAUSTINO LUPE",
      "dni":1553346,
      "ieId":""
    },
    {
      "nombres":"BOBADILLA MACEDO MARCO",
      "dni":23974447,
      "ieId":""
    },
    {
      "nombres":"CACHI SEGOVIA RICHARD",
      "dni":41588268,
      "ieId":""
    },
    {
      "nombres":"CANDIA HUAMAN ALEX",
      "dni":80014358,
      "ieId":""
    },
    {
      "nombres":"CASTILLO COLQUE EDGAR",
      "dni":40704859,
      "ieId":""
    },
    {
      "nombres":"HUAMANGUILLAS ESTALLA WILIAM ALBARO",
      "dni":42318235,
      "ieId":""
    },
    {
      "nombres":"LUNA QUISPE JUAN CARLOS",
      "dni":24993917,
      "ieId":""
    },
    {
      "nombres":"QUISPE PANDIA GABRIELA ANGELICA",
      "dni":2422789,
      "ieId":""
    },
    {
      "nombres":"HUALLPAMAYTA FERNANDEZ ALEJANDRO",
      "dni":23935726,
      "ieId":""
    },
    {
      "nombres":"MASCO PAREDES VICTOR",
      "dni":2147328,
      "ieId":""
    },
    {
      "nombres":"OSCCO HUAMAN JOSE",
      "dni":23813442,
      "ieId":""
    },
    {
      "nombres":"OSCCO PAHUARA NICOLAS",
      "dni":42551789,
      "ieId":""
    },
    {
      "nombres":"OSCCO PEÑA NICOLAS",
      "dni":23968470,
      "ieId":""
    },
    {
      "nombres":"PICHINI MULLUNI PERCY",
      "dni":1328321,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUARCA ORLANDO",
      "dni":42700686,
      "ieId":""
    },
    {
      "nombres":"SACA ALVARADO ALEXI",
      "dni":41814057,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ APAZA MARTIN",
      "dni":29680674,
      "ieId":""
    },
    {
      "nombres":"VILLANO CCORAHUA VICTOR",
      "dni":24993994,
      "ieId":""
    },
    {
      "nombres":"APAZA TORRES DANY CAROLINA",
      "dni":70377391,
      "ieId":""
    },
    {
      "nombres":"CABRERA VELASQUEZ MARGARITA",
      "dni":40915857,
      "ieId":""
    },
    {
      "nombres":"CANAL ZEVALLOS BRAULIO EUFEMIO",
      "dni":8295879,
      "ieId":""
    },
    {
      "nombres":"CARIAPAZA CONDORI VIRGINIA",
      "dni":40040423,
      "ieId":""
    },
    {
      "nombres":"LIMASCA RAIME ADRIAN",
      "dni":24997797,
      "ieId":""
    },
    {
      "nombres":"MAMANI MONTESINOS CONCEPCION",
      "dni":23857146,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE GENOVEO",
      "dni":23838679,
      "ieId":""
    },
    {
      "nombres":"RAMOS CARI BONIFACIO",
      "dni":2442478,
      "ieId":""
    },
    {
      "nombres":"REMACHE AYMA YANETH ISELA",
      "dni":80387066,
      "ieId":""
    },
    {
      "nombres":"SALAS CHALLCO EVA",
      "dni":24990175,
      "ieId":""
    },
    {
      "nombres":"YANCAY ORTIZ HERNAN",
      "dni":24978512,
      "ieId":""
    },
    {
      "nombres":"ARAPA CALLATA ABEL",
      "dni":30858625,
      "ieId":""
    },
    {
      "nombres":"CANAZA PANDIA DAVID",
      "dni":2427387,
      "ieId":""
    },
    {
      "nombres":"CARI ARAPA ERNESTO",
      "dni":80042219,
      "ieId":""
    },
    {
      "nombres":"GUZMAN VALER ELIOT",
      "dni":23936331,
      "ieId":""
    },
    {
      "nombres":"POCCORIMAYLLA GALLEGOS PABLO",
      "dni":41707937,
      "ieId":""
    },
    {
      "nombres":"USCA HUAMAN JUAN",
      "dni":23999484,
      "ieId":""
    },
    {
      "nombres":"ARIZACA ARAPA SAMUEL",
      "dni":2298767,
      "ieId":""
    },
    {
      "nombres":"CONTO QUISPE BIVIANA",
      "dni":24991430,
      "ieId":""
    },
    {
      "nombres":"ECHEA BOCANGEL HUMBERTO",
      "dni":40032344,
      "ieId":""
    },
    {
      "nombres":"PACHECO VALENZUELA ADELAIDA",
      "dni":42413693,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE EMILIO",
      "dni":40032355,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ TAPIA YANET AMPARO",
      "dni":23812264,
      "ieId":""
    },
    {
      "nombres":"QUINO JARA BETZA ROCIO",
      "dni":42902332,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ BUSTINZA CARMEN",
      "dni":23943129,
      "ieId":""
    },
    {
      "nombres":"QUISPE CHANCO PERPETUA",
      "dni":24994747,
      "ieId":""
    },
    {
      "nombres":"ZUBIZARRETA RIMACHI RUTH",
      "dni":44101003,
      "ieId":""
    },
    {
      "nombres":"QUILLILLI SINCHI MARIA ANGELES",
      "dni":41036118,
      "ieId":""
    },
    {
      "nombres":"ROJAS FARFAN WILBERT",
      "dni":24954481,
      "ieId":""
    },
    {
      "nombres":"TORREBLANCA PUMACCAJIA LETICIA",
      "dni":2279166,
      "ieId":""
    },
    {
      "nombres":"BLANCO SOTO YOLANDA",
      "dni":23954437,
      "ieId":""
    },
    {
      "nombres":"DEL CASTILLO ALARCON CARMEN",
      "dni":23827640,
      "ieId":""
    },
    {
      "nombres":"FUENTES MORALES HILDA",
      "dni":25005092,
      "ieId":""
    },
    {
      "nombres":"TAPIA GONGORA MARCO",
      "dni":23885566,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ QUISPE YOLANDA SOFIA",
      "dni":24974012,
      "ieId":""
    },
    {
      "nombres":"ARENAS NAVARRETE MIGUEL",
      "dni":24991480,
      "ieId":""
    },
    {
      "nombres":"CANO CALLAÑAUPA KARINA",
      "dni":40448618,
      "ieId":""
    },
    {
      "nombres":"MIRANDA PAZ JUAN",
      "dni":24460260,
      "ieId":""
    },
    {
      "nombres":"TEJADA MERCADO WALDYR",
      "dni":23930995,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ PALOMINO HERDER",
      "dni":23968854,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL GARAY YOLANDA JESUS",
      "dni":25300151,
      "ieId":""
    },
    {
      "nombres":"CENTENO HUAMANI GLORIA",
      "dni":31020645,
      "ieId":""
    },
    {
      "nombres":"GUEVARA RIVAS MAXIMO",
      "dni":24973661,
      "ieId":""
    },
    {
      "nombres":"JUAREZ TORRES RHONI",
      "dni":24997434,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HUAIHUA NOEMI",
      "dni":24994843,
      "ieId":""
    },
    {
      "nombres":"MACEDO PUMA JANET",
      "dni":41722907,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ DEL PRADO SANTAND AMIRA",
      "dni":23869667,
      "ieId":""
    },
    {
      "nombres":"OLIVERA TRIVE-O YSKRA",
      "dni":24711117,
      "ieId":""
    },
    {
      "nombres":"ORTIZ DE ORUE DIAZ WASHINGTON",
      "dni":25326386,
      "ieId":""
    },
    {
      "nombres":"PACHECO GONZALES VICTOR EDGARDO",
      "dni":23968873,
      "ieId":""
    },
    {
      "nombres":"PEREZ BAEZ ODALIS",
      "dni":23926720,
      "ieId":""
    },
    {
      "nombres":"PUMA UGARTE ARTURO",
      "dni":24989712,
      "ieId":""
    },
    {
      "nombres":"QUISPE AGUILAR ADELA",
      "dni":24984150,
      "ieId":""
    },
    {
      "nombres":"ROJAS CORNEJO LIZBETH",
      "dni":42089192,
      "ieId":""
    },
    {
      "nombres":"TAIPE DE LOS RIOS CALEB",
      "dni":23974633,
      "ieId":""
    },
    {
      "nombres":"TAPIA MELENDEZ RODOLFO AURELIO",
      "dni":24978036,
      "ieId":""
    },
    {
      "nombres":"USCAMAYTA QUISPE FLORENCIO",
      "dni":23808635,
      "ieId":""
    },
    {
      "nombres":"VARGAS APAZA FELICIANO",
      "dni":24966670,
      "ieId":""
    },
    {
      "nombres":"HUAMAN SANCHEZ PAULINA",
      "dni":24949581,
      "ieId":""
    },
    {
      "nombres":"SUAREZ QUIROGA WALTHER",
      "dni":24965354,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI PEÑA TITO RUBEN",
      "dni":25301502,
      "ieId":""
    },
    {
      "nombres":"SERRANO PAUCCAR ROGER",
      "dni":80154259,
      "ieId":""
    },
    {
      "nombres":"COLQUE SANCHEZ EVERTH RAUL",
      "dni":24718643,
      "ieId":""
    },
    {
      "nombres":"JAVIER DEZA ALEJO TEODOCIO",
      "dni":23835418,
      "ieId":""
    },
    {
      "nombres":"QUISPE RAMOS EDWAR",
      "dni":25327218,
      "ieId":""
    },
    {
      "nombres":"GALARRETA MORA EFRAIN",
      "dni":24994467,
      "ieId":""
    },
    {
      "nombres":"GOMEZ TORRES ROMULO",
      "dni":25004112,
      "ieId":""
    },
    {
      "nombres":"PELAYZA TERAN ENRIQUE ROY",
      "dni":40697306,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ AGUILAR WILGEN NESTOR",
      "dni":43272540,
      "ieId":""
    },
    {
      "nombres":"BRAVO CUSIHUALLPA LUCIO",
      "dni":25326035,
      "ieId":""
    },
    {
      "nombres":"CANDIA HUAMAN GENRRY",
      "dni":44382245,
      "ieId":""
    },
    {
      "nombres":"CONDORI CAMERO MARITZA",
      "dni":42530595,
      "ieId":""
    },
    {
      "nombres":"LUCANA GONGORA ANDRES AVELINO",
      "dni":25300188,
      "ieId":""
    },
    {
      "nombres":"PAZ BARRIENTOS BLANCA RUTH",
      "dni":24991158,
      "ieId":""
    },
    {
      "nombres":"RIVERA AGUILA MARITZA",
      "dni":40238666,
      "ieId":""
    },
    {
      "nombres":"CASTRO GOMEZ LOURDES",
      "dni":23929151,
      "ieId":""
    },
    {
      "nombres":"LOPEZ CALLA CHRISTIAN",
      "dni":10725590,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ MEJIA GUILLERMO",
      "dni":23870976,
      "ieId":""
    },
    {
      "nombres":"QUISPE YUPANQUI NORMA",
      "dni":40532109,
      "ieId":""
    },
    {
      "nombres":"APARICIO MIRANDA JOSE LUIS",
      "dni":23876792,
      "ieId":""
    },
    {
      "nombres":"RIOS RODAS ESTELA",
      "dni":24990016,
      "ieId":""
    },
    {
      "nombres":"UGARTE LUNA JUDIT NAZARIA",
      "dni":25302865,
      "ieId":""
    },
    {
      "nombres":"MONTES CAMACHO ORLANDO",
      "dni":40797706,
      "ieId":""
    },
    {
      "nombres":"ORTIZ DE ORUE DIAZ CRISOLOGO",
      "dni":43410160,
      "ieId":""
    },
    {
      "nombres":"ALMANZA ZAMALLOA YENNY CAROLY",
      "dni":44594105,
      "ieId":""
    },
    {
      "nombres":"PUCYURA MOLINA SILVIA",
      "dni":40032541,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ CJUIRO CORALIA",
      "dni":46052336,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR ALTAMIRANO FREDY",
      "dni":8129846,
      "ieId":""
    },
    {
      "nombres":"ARRIBASPLATA REYES SAUL",
      "dni":15742919,
      "ieId":""
    },
    {
      "nombres":"BEDREGAL TOLENTINO ZOILA MABEL",
      "dni":40234929,
      "ieId":""
    },
    {
      "nombres":"BOLAÑOS PACCO EUSEBIO",
      "dni":23835905,
      "ieId":""
    },
    {
      "nombres":"CANCINAS MOGROVEJO ELIBRANDO",
      "dni":23998074,
      "ieId":""
    },
    {
      "nombres":"CENTENO CHILO SIXTO",
      "dni":24972817,
      "ieId":""
    },
    {
      "nombres":"COLLANTES CAJAMARCA ROXANA",
      "dni":25006207,
      "ieId":""
    },
    {
      "nombres":"CORTEZ CAMA ENOC NARCISO",
      "dni":24704889,
      "ieId":""
    },
    {
      "nombres":"KANCHA SUCNO DE QUIPO ANA MARIA",
      "dni":23898743,
      "ieId":""
    },
    {
      "nombres":"LIMO CUITO BIVIANA VILMA",
      "dni":23852301,
      "ieId":""
    },
    {
      "nombres":"MENDOZA CANDIA CARLOS ALBERTO",
      "dni":24712433,
      "ieId":""
    },
    {
      "nombres":"PERCCA ASTO ZENAIDA",
      "dni":41567124,
      "ieId":""
    },
    {
      "nombres":"QUIPO HUAMAN JUAN",
      "dni":23900629,
      "ieId":""
    },
    {
      "nombres":"ROMERO ARIAS NANCIA ARMIDA",
      "dni":24680838,
      "ieId":""
    },
    {
      "nombres":"ROZAS VELAZCO ELENA EMPERATRIZ",
      "dni":23849881,
      "ieId":""
    },
    {
      "nombres":"SEGOVIA DE RAMIREZ NANCI NELI",
      "dni":24969439,
      "ieId":""
    },
    {
      "nombres":"SEGOVIA GUERRERO WALTER VICTOR",
      "dni":29621115,
      "ieId":""
    },
    {
      "nombres":"USCA PACCO MAXIMILIANO",
      "dni":23811058,
      "ieId":""
    },
    {
      "nombres":"YNOFUENTE QUISPE FRANZ LISZT",
      "dni":41945878,
      "ieId":""
    },
    {
      "nombres":"APAZA CCALLI WILDER",
      "dni":40704139,
      "ieId":""
    },
    {
      "nombres":"FLORES LEMA RAUL",
      "dni":1888772,
      "ieId":""
    },
    {
      "nombres":"LAIME PACHECO RUBEN",
      "dni":40477999,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR INCARROCCA MARIO",
      "dni":23941040,
      "ieId":""
    },
    {
      "nombres":"PUENTE DE LA VEGA OVIED RINA",
      "dni":29533328,
      "ieId":""
    },
    {
      "nombres":"SULLCA CAÑARI CLIMACO",
      "dni":24979092,
      "ieId":""
    },
    {
      "nombres":"VARGAS YLLA MARLENI",
      "dni":24000932,
      "ieId":""
    },
    {
      "nombres":"VIZARRETA CASTRO OCTAVIO",
      "dni":23806714,
      "ieId":""
    },
    {
      "nombres":"CABRERA PEREIRA FRANCISCO",
      "dni":24986102,
      "ieId":""
    },
    {
      "nombres":"CAMACHO AMPUERO ALEJANDRO",
      "dni":24999197,
      "ieId":""
    },
    {
      "nombres":"HUACAC HUILLCA BERTHA",
      "dni":24985671,
      "ieId":""
    },
    {
      "nombres":"HUAYLLANI YUCRA EMILIO RUBEN",
      "dni":24703200,
      "ieId":""
    },
    {
      "nombres":"LEIVA WILSON JUAN ENRIQUE",
      "dni":24940847,
      "ieId":""
    },
    {
      "nombres":"PAREDES CANAZA WILY",
      "dni":2436278,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN JUVENAL",
      "dni":41794923,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAROCHO JUVENAL",
      "dni":23827950,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES BASCOPE GUIDO",
      "dni":24984171,
      "ieId":""
    },
    {
      "nombres":"TABOADA GOMEZ NERY",
      "dni":23836200,
      "ieId":""
    },
    {
      "nombres":"ARAOZ PUELLES ENRIQUE",
      "dni":23996803,
      "ieId":""
    },
    {
      "nombres":"BACA OVIEDO JUVENAL",
      "dni":24283737,
      "ieId":""
    },
    {
      "nombres":"MARISCAL HUILLCA ZENON",
      "dni":25314328,
      "ieId":""
    },
    {
      "nombres":"MEJIA BUSTINZA FABIAN ALFREDO",
      "dni":23944817,
      "ieId":""
    },
    {
      "nombres":"MIRANDA CARPIO VICTOR VICTORINO",
      "dni":23838794,
      "ieId":""
    },
    {
      "nombres":"TORVISCO SARMIENTO FERDINAN",
      "dni":23994973,
      "ieId":""
    },
    {
      "nombres":"ZARATE ROMERO EDGAR",
      "dni":23954773,
      "ieId":""
    },
    {
      "nombres":"GONZALEZ FLOREZ LICELITH",
      "dni":23965005,
      "ieId":""
    },
    {
      "nombres":"MORVELI CANAL MERY",
      "dni":24999475,
      "ieId":""
    },
    {
      "nombres":"NOBLEGA VIVANCO MELVA",
      "dni":24982152,
      "ieId":""
    },
    {
      "nombres":"CRUZ HUILLCA LUZ MARINA",
      "dni":24994022,
      "ieId":""
    },
    {
      "nombres":"JUAREZ HUAMAN JUDIT",
      "dni":25004277,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA ALVAREZ NELIDA",
      "dni":24981990,
      "ieId":""
    },
    {
      "nombres":"LAURA VALVERDE ROSA",
      "dni":24997523,
      "ieId":""
    },
    {
      "nombres":"PAMPA VILLAR FLOR EDITH",
      "dni":25009121,
      "ieId":""
    },
    {
      "nombres":"ROMAN VELASQUEZ NELY GENOVEVA",
      "dni":23823575,
      "ieId":""
    },
    {
      "nombres":"SORIA CCONCHOY MARTHA",
      "dni":23815545,
      "ieId":""
    },
    {
      "nombres":"CANALES SIERRA LIMIT",
      "dni":23975238,
      "ieId":""
    },
    {
      "nombres":"ELORRIETA CURIE TANIA",
      "dni":24965611,
      "ieId":""
    },
    {
      "nombres":"GUZMAN CACERES YESSICA",
      "dni":41605926,
      "ieId":""
    },
    {
      "nombres":"MONTOYA MASIAS MARILUZ",
      "dni":23936964,
      "ieId":""
    },
    {
      "nombres":"POVES ZAVALETA FRANCISCO UVALDO",
      "dni":23968779,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE VILMA",
      "dni":24949346,
      "ieId":""
    },
    {
      "nombres":"TTITO LUQUE CLEMENCIA",
      "dni":24991306,
      "ieId":""
    },
    {
      "nombres":"VALLE ACUÑA MAXIMO JAIME",
      "dni":24944873,
      "ieId":""
    },
    {
      "nombres":"MORVELI RAMIREZ AGRIPINA",
      "dni":25004615,
      "ieId":""
    },
    {
      "nombres":"CONSA APAZA RITA",
      "dni":24718246,
      "ieId":""
    },
    {
      "nombres":"FLOREZ LUCANA ALEJANDRO",
      "dni":25314379,
      "ieId":""
    },
    {
      "nombres":"MASIAS VERA NORMA",
      "dni":23978844,
      "ieId":""
    },
    {
      "nombres":"SANTOS RIOS FREDDY",
      "dni":24991572,
      "ieId":""
    },
    {
      "nombres":"LLOCLLE RIMACHI JORGE",
      "dni":24986272,
      "ieId":""
    },
    {
      "nombres":"LOZANO QUISPE MELITON",
      "dni":24966124,
      "ieId":""
    },
    {
      "nombres":"ROCA HILARES ANA ROCIO",
      "dni":23968648,
      "ieId":""
    },
    {
      "nombres":"ALARCON MELENDEZ TANIA",
      "dni":31182751,
      "ieId":""
    },
    {
      "nombres":"BACA MOGROVEJO NORA MATILDE",
      "dni":23980184,
      "ieId":""
    },
    {
      "nombres":"BALAREZO UGARTE BIDMARK",
      "dni":25326349,
      "ieId":""
    },
    {
      "nombres":"BARRIOS FERRO SATURNINO RONAL",
      "dni":24465115,
      "ieId":""
    },
    {
      "nombres":"CONDORI FLORES MARCELINA GUILLERMINA",
      "dni":24997631,
      "ieId":""
    },
    {
      "nombres":"CUSI TIMPO JUAN CARLOS",
      "dni":24698714,
      "ieId":""
    },
    {
      "nombres":"DAVALOS MARIACA HIBERTIA",
      "dni":23971636,
      "ieId":""
    },
    {
      "nombres":"DEL CARPIO ECHEGARAY GUILLERMO",
      "dni":24994731,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS MERCADO ALICIA",
      "dni":24947422,
      "ieId":""
    },
    {
      "nombres":"MENDOZA CHIRINOS ROSA AMELIA",
      "dni":24969994,
      "ieId":""
    },
    {
      "nombres":"MORA DE GARCIA ADELA",
      "dni":24986280,
      "ieId":""
    },
    {
      "nombres":"QUISPE HERMOZA AMADOR",
      "dni":24997223,
      "ieId":""
    },
    {
      "nombres":"RICALDE BAYONA RINI",
      "dni":23971494,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN YUDY MARLENE",
      "dni":25304404,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS QUISPE YANETH",
      "dni":24990499,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ ARTEAGA HAROLD",
      "dni":29624078,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ VILLAFUERTE ROBERTO",
      "dni":24953888,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE BECERRA DORA",
      "dni":25300490,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE HUANACO TADEO",
      "dni":23971345,
      "ieId":""
    },
    {
      "nombres":"JUSTINIANI SALAS GUILLERMINA",
      "dni":24978958,
      "ieId":""
    },
    {
      "nombres":"LOPEZ CCARI SOFIA SALOME",
      "dni":23986987,
      "ieId":""
    },
    {
      "nombres":"LOPEZ TERRAZAS SONIA",
      "dni":23806382,
      "ieId":""
    },
    {
      "nombres":"PAUCAR SOLORZANO ROSANA",
      "dni":23873822,
      "ieId":""
    },
    {
      "nombres":"RIOS CARDENAS ELVIRA",
      "dni":23929509,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO MAURO",
      "dni":25301484,
      "ieId":""
    },
    {
      "nombres":"AGUILAR JIMENEZ ROSA MARIA",
      "dni":23968607,
      "ieId":""
    },
    {
      "nombres":"PAZ BARRIENTOS ROSA MARIA",
      "dni":24990329,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA BARRIENTOS GLADIS",
      "dni":40764120,
      "ieId":""
    },
    {
      "nombres":"ZEVALLOS QUIÑONES JUDITH ROSIDA",
      "dni":24945961,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ACHAYA SENA",
      "dni":23996827,
      "ieId":""
    },
    {
      "nombres":"OQUENDO LOAIZA ANTONIA",
      "dni":24967987,
      "ieId":""
    },
    {
      "nombres":"ABARCA PAREDES RUBEN",
      "dni":23875346,
      "ieId":""
    },
    {
      "nombres":"GUZMAN OVIEDO ANTONIA",
      "dni":24965202,
      "ieId":""
    },
    {
      "nombres":"VENERO AZORZA FRANCISCO",
      "dni":23814594,
      "ieId":""
    },
    {
      "nombres":"ALATRISTA LUQUE CARMEN ROSA",
      "dni":23950072,
      "ieId":""
    },
    {
      "nombres":"DIAZ CRUZ MARIO",
      "dni":25209582,
      "ieId":""
    },
    {
      "nombres":"HUAMAN VARGAS CRISTINA",
      "dni":24282939,
      "ieId":""
    },
    {
      "nombres":"HUILLCA MAMANI CIRILO",
      "dni":42557065,
      "ieId":""
    },
    {
      "nombres":"MORANTE GAMARRA CARLOS",
      "dni":24995380,
      "ieId":""
    },
    {
      "nombres":"TICONA COTACALLAPA HERLINDA",
      "dni":29613379,
      "ieId":""
    },
    {
      "nombres":"TTITO VILLALOBOS DORIS",
      "dni":24953379,
      "ieId":""
    },
    {
      "nombres":"VARGAS HUAMAN ISABEL",
      "dni":23876057,
      "ieId":""
    },
    {
      "nombres":"VARGAS POBLETE PAULINA",
      "dni":23906900,
      "ieId":""
    },
    {
      "nombres":"ABARCA DURAN VICENTE",
      "dni":23814982,
      "ieId":""
    },
    {
      "nombres":"AGUILAR PEREZ ROSA",
      "dni":24991243,
      "ieId":""
    },
    {
      "nombres":"APAZA TINTAYA OSCAR NENO",
      "dni":1302013,
      "ieId":""
    },
    {
      "nombres":"CHAUCA RODRIGUEZ WALTER",
      "dni":25008483,
      "ieId":""
    },
    {
      "nombres":"COANQUI COAQUIRA PEDRO PERCY",
      "dni":42466719,
      "ieId":""
    },
    {
      "nombres":"COBOS VERGARA JORGE",
      "dni":24950801,
      "ieId":""
    },
    {
      "nombres":"CRUZ AGUIRRE ALEJANDRINA",
      "dni":23814970,
      "ieId":""
    },
    {
      "nombres":"GARCIA CAMPANA ALFREDO",
      "dni":24986281,
      "ieId":""
    },
    {
      "nombres":"LLACTAHUAMANI HUACHACA ADRIEL",
      "dni":25000513,
      "ieId":""
    },
    {
      "nombres":"MENDOZA POZO LUIS",
      "dni":23809531,
      "ieId":""
    },
    {
      "nombres":"MEZA COSI EVERY YULIANA",
      "dni":40919831,
      "ieId":""
    },
    {
      "nombres":"NUÑEZ FRANCO MIGUEL ANGEL",
      "dni":24000436,
      "ieId":""
    },
    {
      "nombres":"PALACIOS GONZALES JUAN CARLOS",
      "dni":23963934,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCAHUA JOSE LUIS",
      "dni":24970380,
      "ieId":""
    },
    {
      "nombres":"SARA HUILLCA DAVID",
      "dni":24705036,
      "ieId":""
    },
    {
      "nombres":"TTITO CAMILO WALTER",
      "dni":23909799,
      "ieId":""
    },
    {
      "nombres":"ALARCON MARTINEZ GUIDO RICARDO",
      "dni":25328517,
      "ieId":""
    },
    {
      "nombres":"CAHUANA ALVAREZ BRID",
      "dni":42721663,
      "ieId":""
    },
    {
      "nombres":"DEL SOLAR QUIROGA YANET",
      "dni":25006025,
      "ieId":""
    },
    {
      "nombres":"ALVARADO QUINTANA DORIS CARMEN",
      "dni":24967646,
      "ieId":""
    },
    {
      "nombres":"BENAVENTE BARRETO JORGE JAVIER",
      "dni":23883170,
      "ieId":""
    },
    {
      "nombres":"CRUZ CALDERON ASUNCION ESMERANIA",
      "dni":24968884,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ LEON CELIA",
      "dni":25005492,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LUQUE MARIO",
      "dni":29694146,
      "ieId":""
    },
    {
      "nombres":"INGALUQUE APAZA ALDO",
      "dni":80177546,
      "ieId":""
    },
    {
      "nombres":"LAIME QUISPE JULIO",
      "dni":24968302,
      "ieId":""
    },
    {
      "nombres":"LAIME QUISPE JUSTO",
      "dni":24945056,
      "ieId":""
    },
    {
      "nombres":"LOAYZA CONDORI JOSE CARLOS",
      "dni":41093194,
      "ieId":""
    },
    {
      "nombres":"LOVATON PALMA MIGUEL ANGEL",
      "dni":23823270,
      "ieId":""
    },
    {
      "nombres":"PADILLA HUAMAN GREGORIO",
      "dni":23904261,
      "ieId":""
    },
    {
      "nombres":"QUISPE LOPEZ JORGE ROBERTO",
      "dni":23944577,
      "ieId":""
    },
    {
      "nombres":"RAMPAS VALLE NICANOR",
      "dni":25300540,
      "ieId":""
    },
    {
      "nombres":"RIOS ROSADO EDGARDO ANDRES",
      "dni":29444544,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO FEIJOO JUAN PASTOR",
      "dni":24971509,
      "ieId":""
    },
    {
      "nombres":"VALENCIA VEGA MELQUIADES",
      "dni":23946398,
      "ieId":""
    },
    {
      "nombres":"VARGAS MISME PATRICIA",
      "dni":40446769,
      "ieId":""
    },
    {
      "nombres":"JARA BAUTISTA BUENAVENTURO FRANCISCO",
      "dni":24997635,
      "ieId":""
    },
    {
      "nombres":"LOZANO NINANTAY ENRIQUE",
      "dni":24968347,
      "ieId":""
    },
    {
      "nombres":"QUISPE PERALTA WALTER",
      "dni":23852988,
      "ieId":""
    },
    {
      "nombres":"SOTOMAYOR ARTEAGA PEDRO",
      "dni":24999173,
      "ieId":""
    },
    {
      "nombres":"CHICLLA LAUCATA RUZVENIA",
      "dni":40505596,
      "ieId":""
    },
    {
      "nombres":"CONZA HUAMAN LUCHA",
      "dni":25008801,
      "ieId":""
    },
    {
      "nombres":"HUARCA CONCHA YENY ASUNCION",
      "dni":23860321,
      "ieId":""
    },
    {
      "nombres":"JARA SANTOS YOBANNA",
      "dni":23998554,
      "ieId":""
    },
    {
      "nombres":"OVIEDO GUZMAN NORA",
      "dni":41280040,
      "ieId":""
    },
    {
      "nombres":"AYMA AMARU YANET",
      "dni":42543638,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ PEREZ ZULLY GLENDA",
      "dni":23933615,
      "ieId":""
    },
    {
      "nombres":"TREJO METAKI CARMEN ROSA",
      "dni":71031833,
      "ieId":""
    },
    {
      "nombres":"PFUÑO AGUILAR CRISTINA",
      "dni":24994785,
      "ieId":""
    },
    {
      "nombres":"MACCAPA ROQUE ROSARIO LUCY",
      "dni":40518970,
      "ieId":""
    },
    {
      "nombres":"CABRERA TARCO CALIXTO",
      "dni":23940261,
      "ieId":""
    },
    {
      "nombres":"CONCHA SANCHEZ CONSUELO",
      "dni":23943419,
      "ieId":""
    },
    {
      "nombres":"CONDORI VILCA FORTUNATO",
      "dni":2172174,
      "ieId":""
    },
    {
      "nombres":"GONZALES VALER FRANKLIN NESTOR",
      "dni":25005093,
      "ieId":""
    },
    {
      "nombres":"HUAMAN MAMANI CORNELIA",
      "dni":24943221,
      "ieId":""
    },
    {
      "nombres":"LOZANO ESPINOZA CESAR AUGUSTO",
      "dni":24972579,
      "ieId":""
    },
    {
      "nombres":"QUINTANILLA SOLORZANO LIDA",
      "dni":23985338,
      "ieId":""
    },
    {
      "nombres":"ROJAS MONTUFAR PAULINO",
      "dni":24982081,
      "ieId":""
    },
    {
      "nombres":"TERRAZAS DE LOZANO ALCIONE FELICIDAD",
      "dni":24972616,
      "ieId":""
    },
    {
      "nombres":"UGARTE ARTEAGA RINA HAYDEE",
      "dni":24672248,
      "ieId":""
    },
    {
      "nombres":"VARGAS GALARRETA ROMULO",
      "dni":25009080,
      "ieId":""
    },
    {
      "nombres":"LUJAN DE LA TORRE YARIDA AMERICA",
      "dni":41137412,
      "ieId":""
    },
    {
      "nombres":"CHOQUE PERALTA FREDI MAGNO",
      "dni":44650335,
      "ieId":""
    },
    {
      "nombres":"GOMEZ CUBA YARITZA",
      "dni":43031482,
      "ieId":""
    },
    {
      "nombres":"CABRERA JUSTINIANI DELIA",
      "dni":24993654,
      "ieId":""
    },
    {
      "nombres":"ECHEGARAY CONTRERAS JESSICA LESLIE",
      "dni":10116498,
      "ieId":""
    },
    {
      "nombres":"OLAZABAL ECHEGARAY MIGUEL ANGEL",
      "dni":25008675,
      "ieId":""
    },
    {
      "nombres":"PAREJA CLAVERI HERBERTH",
      "dni":24995867,
      "ieId":""
    },
    {
      "nombres":"VELARDE VASQUEZ OSCAR",
      "dni":25004087,
      "ieId":""
    },
    {
      "nombres":"MASIAS USCAMAYTA TERESA",
      "dni":25319477,
      "ieId":""
    },
    {
      "nombres":"MORALES VARGAS SUSANA",
      "dni":25302746,
      "ieId":""
    },
    {
      "nombres":"CALLAÑAUPA SANCHEZ VICTORIA",
      "dni":25302892,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PAZ RONILDO",
      "dni":25008492,
      "ieId":""
    },
    {
      "nombres":"USCA MELGAREJO ALAIN",
      "dni":45246054,
      "ieId":""
    },
    {
      "nombres":"ARIAS YUCRA VILMA",
      "dni":24993803,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR CALLIÑAUPA LIBED",
      "dni":41427153,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA YABAR JOSEFINA",
      "dni":23960043,
      "ieId":""
    },
    {
      "nombres":"CORDOVA SOLIS ERICK WILLMAR",
      "dni":25012604,
      "ieId":""
    },
    {
      "nombres":"DIAZ SIMON LLESICA",
      "dni":23970747,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ GONZALES NILDA",
      "dni":96776,
      "ieId":""
    },
    {
      "nombres":"ARAGON GIL ROSA SALKA",
      "dni":24990951,
      "ieId":""
    },
    {
      "nombres":"CONDORI PEÑA ELIE",
      "dni":25304998,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ MONTEAGUDO NAIDA",
      "dni":41529258,
      "ieId":""
    },
    {
      "nombres":"MARQUEZ CASTRO MABEL",
      "dni":42584001,
      "ieId":""
    },
    {
      "nombres":"TAPARA QUISPE YULISA MILAGRITOS",
      "dni":42764043,
      "ieId":""
    },
    {
      "nombres":"YARIN HUALLPAYUNCA CARLOTA",
      "dni":25326159,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR CEINSE MAGALY",
      "dni":43976042,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR CEINSE TULA",
      "dni":41619323,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CALLAÑAUPA CARLOS ENRIQUE",
      "dni":24970570,
      "ieId":""
    },
    {
      "nombres":"HUAYLLA DE ASTETE JUANA",
      "dni":23915631,
      "ieId":""
    },
    {
      "nombres":"DELGADO HERMOZA FLOR",
      "dni":41293853,
      "ieId":""
    },
    {
      "nombres":"SELIS ESCALANTE ROSA MARIA",
      "dni":23971593,
      "ieId":""
    },
    {
      "nombres":"CASSA QUISPE YANET",
      "dni":44738469,
      "ieId":""
    },
    {
      "nombres":"CHURATA QUISPE DORA CARMEN",
      "dni":40890386,
      "ieId":""
    },
    {
      "nombres":"MAMANI CCANA FEDERICO WILLIAM",
      "dni":24704171,
      "ieId":""
    },
    {
      "nombres":"MANASAYA PAUCAR SONIA",
      "dni":45247087,
      "ieId":""
    },
    {
      "nombres":"ARI ROJAS RUTH SALOME",
      "dni":40541038,
      "ieId":""
    },
    {
      "nombres":"ALAGON CACERES MARCIA ADELA",
      "dni":24981914,
      "ieId":""
    },
    {
      "nombres":"PAREDES RUIZ ARMANDO RAFAEL",
      "dni":23928985,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ TINTAYA ISAAC",
      "dni":43303685,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ DURAN YAOSCA LISBETH",
      "dni":46077270,
      "ieId":""
    },
    {
      "nombres":"BRAVO ILLATTUPA IRMA EVARISTA",
      "dni":23878964,
      "ieId":""
    },
    {
      "nombres":"LOPEZ VALDEZ CLEMENTE",
      "dni":25310538,
      "ieId":""
    },
    {
      "nombres":"CANAZA RIVERO DAVID ABDAUL",
      "dni":29438337,
      "ieId":""
    },
    {
      "nombres":"FLORES CHAHUIN WALTER",
      "dni":23977323,
      "ieId":""
    },
    {
      "nombres":"HUILLCA CHINO FREDY",
      "dni":43898867,
      "ieId":""
    },
    {
      "nombres":"MANTURANO AGUILAR YOSEDT",
      "dni":24496081,
      "ieId":""
    },
    {
      "nombres":"MONTAÑEZ ALARCON WILMARD",
      "dni":46942450,
      "ieId":""
    },
    {
      "nombres":"MUÑOZ PELAYZA LILIA DEL CARMEN",
      "dni":42966851,
      "ieId":""
    },
    {
      "nombres":"PALOMINO ZAMALLOA NANCY",
      "dni":24465031,
      "ieId":""
    },
    {
      "nombres":"QUISPICUSI SALCEDO MARIZOL",
      "dni":41130045,
      "ieId":""
    },
    {
      "nombres":"SUCA FERATA MARLENY",
      "dni":44475741,
      "ieId":""
    },
    {
      "nombres":"ZULOAGA CCORIMANYA MARIBEL",
      "dni":24005220,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CARPIO MARTIR MARLENY",
      "dni":41338709,
      "ieId":""
    },
    {
      "nombres":"PUMA FABIAN YELA",
      "dni":40924087,
      "ieId":""
    },
    {
      "nombres":"TTITO JALIXTO EFRAIN",
      "dni":24716725,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ECHARRI GUIDO",
      "dni":24471178,
      "ieId":""
    },
    {
      "nombres":"HUAMANI MIRANDA MARIA ELENA",
      "dni":40052130,
      "ieId":""
    },
    {
      "nombres":"MAITA QUISPE SANTIAGO",
      "dni":41370425,
      "ieId":""
    },
    {
      "nombres":"SALHUA CAMONES YVONNE ALEJANDRINA",
      "dni":41405538,
      "ieId":""
    },
    {
      "nombres":"CURAHUA GUEVARA ANNY",
      "dni":44171396,
      "ieId":""
    },
    {
      "nombres":"PUMA INCARROCA RONALD RUFFO",
      "dni":41877632,
      "ieId":""
    },
    {
      "nombres":"VERA YUCRA GABI",
      "dni":41406774,
      "ieId":""
    },
    {
      "nombres":"OVIEDO MEDINA JOSE",
      "dni":23949206,
      "ieId":""
    },
    {
      "nombres":"ANDRADE DURAND ASUNTA",
      "dni":25008500,
      "ieId":""
    },
    {
      "nombres":"CANAZAS RIVERO IVANOVA",
      "dni":29517457,
      "ieId":""
    },
    {
      "nombres":"CATALAN QUISPE VILMA",
      "dni":40113095,
      "ieId":""
    },
    {
      "nombres":"FLORES GARRIDO WALTER",
      "dni":43935209,
      "ieId":""
    },
    {
      "nombres":"GOMEZ HUAMANI MARIA ANTONIETA",
      "dni":44467274,
      "ieId":""
    },
    {
      "nombres":"GONZALES VALER ARNOLD",
      "dni":23968967,
      "ieId":""
    },
    {
      "nombres":"HUILLCA QUISPE FORTUNATO",
      "dni":23972390,
      "ieId":""
    },
    {
      "nombres":"MASCO PAREDES FELIX",
      "dni":1541509,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS HERRERA RIMBERTH",
      "dni":80070098,
      "ieId":""
    },
    {
      "nombres":"NINA CABALLERO FORTUNATA",
      "dni":24997939,
      "ieId":""
    },
    {
      "nombres":"PARARI MASCO ANGELA",
      "dni":42369206,
      "ieId":""
    },
    {
      "nombres":"PERALTA ALVAREZ SONIA",
      "dni":23961383,
      "ieId":""
    },
    {
      "nombres":"RIMACHI HANCCO EFRAIN",
      "dni":41243971,
      "ieId":""
    },
    {
      "nombres":"VERANO TERRAZAS IVETH",
      "dni":24006543,
      "ieId":""
    },
    {
      "nombres":"YUGRA MARCE ALFONSO",
      "dni":42740018,
      "ieId":""
    },
    {
      "nombres":"CCASA CUCHO HENRY WILFREDO",
      "dni":41898682,
      "ieId":""
    },
    {
      "nombres":"CHIRA HILTAIPE LESLY YASINA",
      "dni":42512453,
      "ieId":""
    },
    {
      "nombres":"MAROCHO POBLETE ODILA",
      "dni":24979070,
      "ieId":""
    },
    {
      "nombres":"PERCCA INQUILLA JULIO POLICARPO",
      "dni":45723294,
      "ieId":""
    },
    {
      "nombres":"QUISPE SALAZAR YOLY",
      "dni":40051550,
      "ieId":""
    },
    {
      "nombres":"SUCARI MAMANI RAUL",
      "dni":40752267,
      "ieId":""
    },
    {
      "nombres":"TORRES CHURO DEYSI VIRGINIA",
      "dni":40034405,
      "ieId":""
    },
    {
      "nombres":"VARGAS CAYANI ALICIA YOLANDA",
      "dni":41335476,
      "ieId":""
    },
    {
      "nombres":"BORDA SALDIVAR VICENTE",
      "dni":23822268,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ CCUNO PABLO GUZMAN",
      "dni":1546636,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ TOCRE RUBEN",
      "dni":24982370,
      "ieId":""
    },
    {
      "nombres":"CUMPA ZAVALA CARLOS",
      "dni":41603322,
      "ieId":""
    },
    {
      "nombres":"FIGUEROA FARFAN EDWIN",
      "dni":40958939,
      "ieId":""
    },
    {
      "nombres":"INGALUQUE APAZA NANCY",
      "dni":2442198,
      "ieId":""
    },
    {
      "nombres":"QUISPE AYME ROSA BARTOLINA",
      "dni":23945717,
      "ieId":""
    },
    {
      "nombres":"MENDOZA ANQUISE LIZANDRO",
      "dni":23924344,
      "ieId":""
    },
    {
      "nombres":"QUISPICHU AMAT DELFINA",
      "dni":40851462,
      "ieId":""
    },
    {
      "nombres":"VILCA QUISPE MODESTO",
      "dni":41153097,
      "ieId":""
    },
    {
      "nombres":"CRUZ MAMANI PATRICIA",
      "dni":23940973,
      "ieId":""
    },
    {
      "nombres":"ILLANES TTAMIÑA NESTOR",
      "dni":43140548,
      "ieId":""
    },
    {
      "nombres":"MONTERROSO YUPANQUI MARIO",
      "dni":24984933,
      "ieId":""
    },
    {
      "nombres":"DELGADO TAYPE NAZARIO",
      "dni":42734173,
      "ieId":""
    },
    {
      "nombres":"MAMANI CONDO MARITZA",
      "dni":42616806,
      "ieId":""
    },
    {
      "nombres":"PEDRAZA SANCHEZ ELOY",
      "dni":31122502,
      "ieId":""
    },
    {
      "nombres":"TAIPICURI ZUÑIGA MARCELO ONORIO",
      "dni":23923335,
      "ieId":""
    },
    {
      "nombres":"YUCRA QUISPE ROXANA",
      "dni":41456638,
      "ieId":""
    },
    {
      "nombres":"AYMA MOLLAPAZA MARIA REYNA",
      "dni":40808056,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CARDENAS YEZENIA",
      "dni":40435673,
      "ieId":""
    },
    {
      "nombres":"ATAYUPANQUI GUEVARA MARITZA",
      "dni":42090845,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ PUMACCAHUA VILMA",
      "dni":25305039,
      "ieId":""
    },
    {
      "nombres":"LOPEZ MUÑOZ RAFAEL MARIO",
      "dni":25315045,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA COLQUE ANA MARIA",
      "dni":23936332,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MARQUINA ELIZABETH ADELINA",
      "dni":23852752,
      "ieId":""
    },
    {
      "nombres":"ALZAMORA CHAVEZ ADELA SERGIA",
      "dni":25300469,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ ROJAS MARY",
      "dni":25304282,
      "ieId":""
    },
    {
      "nombres":"PAREDES COBARRUBIAS JACQUELINE ISABEL",
      "dni":24002407,
      "ieId":""
    },
    {
      "nombres":"CUEVAS HUILLCANINA YAQUELIN",
      "dni":41361920,
      "ieId":""
    },
    {
      "nombres":"DELGADO OCAMPO KARINA",
      "dni":41523535,
      "ieId":""
    },
    {
      "nombres":"QUIN ARANIBAR MARIBEL",
      "dni":25326045,
      "ieId":""
    },
    {
      "nombres":"RUPA ROZAS BERTHA",
      "dni":23848144,
      "ieId":""
    },
    {
      "nombres":"VALDIVIA VILLAFUERTE URBANA",
      "dni":25321382,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO MEJIA ANA BEATRIZ",
      "dni":29365991,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI MORA CYNTHIA",
      "dni":43390474,
      "ieId":""
    },
    {
      "nombres":"CONCHA ALVAREZ JASMINA YANETTE",
      "dni":25310140,
      "ieId":""
    },
    {
      "nombres":"CRUZ JARA MONICA",
      "dni":40556968,
      "ieId":""
    },
    {
      "nombres":"CUMPA VERA MARIA DE LA O",
      "dni":25303075,
      "ieId":""
    },
    {
      "nombres":"DELGADO ACURIO ESPERANZA",
      "dni":25303791,
      "ieId":""
    },
    {
      "nombres":"ROJAS CONCHA ROCIO MARLENY",
      "dni":25304177,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ LUNA MARIZOL",
      "dni":23803782,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ ARANIBAR TESALIA NORKA",
      "dni":25320212,
      "ieId":""
    },
    {
      "nombres":"MENDOZA RAMOS YANET",
      "dni":44010938,
      "ieId":""
    },
    {
      "nombres":"ACUÑA VARGAS YENI ELIZABET",
      "dni":25310701,
      "ieId":""
    },
    {
      "nombres":"YARIN QUISPE ROXANA",
      "dni":25321744,
      "ieId":""
    },
    {
      "nombres":"ARZUBIALDE ZAMALLOA ALEXANDRA",
      "dni":41603205,
      "ieId":""
    },
    {
      "nombres":"CAVERO CARDENAS RUTH MERY",
      "dni":24946960,
      "ieId":""
    },
    {
      "nombres":"CHOQQUEPURI CHAMPI DELFINA",
      "dni":41793455,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA GAMARRA DE TINA YOSSY ANAHI",
      "dni":40373908,
      "ieId":""
    },
    {
      "nombres":"PUNTACA PELAYO ROCIO",
      "dni":25305060,
      "ieId":""
    },
    {
      "nombres":"MEZA ALVAREZ GABRIELA",
      "dni":45564468,
      "ieId":""
    },
    {
      "nombres":"FLOREZ CHULLO DELFINA",
      "dni":41816664,
      "ieId":""
    },
    {
      "nombres":"DAVILA CHAVEZ ROXANA",
      "dni":23921756,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ BACA MELINA",
      "dni":23980858,
      "ieId":""
    },
    {
      "nombres":"FLORES VILLACORTA CARMEN JANET",
      "dni":23947825,
      "ieId":""
    },
    {
      "nombres":"BLANCO SOTO GLORIA ELIZABETH",
      "dni":25301188,
      "ieId":""
    },
    {
      "nombres":"CARHUASUICA AIRAMPO EUFEMIA",
      "dni":25300426,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ FARFAN CRISOSTOMO",
      "dni":24468818,
      "ieId":""
    },
    {
      "nombres":"CORNEJO ARAPA ANTONIO SAMUEL",
      "dni":2398726,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA MISME JUANA YRENE",
      "dni":25303828,
      "ieId":""
    },
    {
      "nombres":"DURAN GALLEGOS JUANA",
      "dni":23868780,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA NUÑEZ JUANA",
      "dni":25301430,
      "ieId":""
    },
    {
      "nombres":"FARFAN PEREYRA ENRIQUE",
      "dni":25301041,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GUTIERREZ LUCIA",
      "dni":25301013,
      "ieId":""
    },
    {
      "nombres":"LAUREL LOAIZA EUGENIO",
      "dni":25300989,
      "ieId":""
    },
    {
      "nombres":"LAUREL LOAIZA GABRIEL",
      "dni":25300742,
      "ieId":""
    },
    {
      "nombres":"LIMA GALLEGOS ABRAHAM",
      "dni":23850104,
      "ieId":""
    },
    {
      "nombres":"MIRANDA YARIN LIZ MERCEDES",
      "dni":25301891,
      "ieId":""
    },
    {
      "nombres":"MORMONTOY PINO ARMANDO",
      "dni":25319570,
      "ieId":""
    },
    {
      "nombres":"SUAREZ MEDINA ALI",
      "dni":25310794,
      "ieId":""
    },
    {
      "nombres":"TICONA UGARTE RAUL",
      "dni":25302636,
      "ieId":""
    },
    {
      "nombres":"VALENCIA HONOR ULDA",
      "dni":25303293,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO TERESA",
      "dni":25302366,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ CHAVEZ JUSTINO",
      "dni":25301242,
      "ieId":""
    },
    {
      "nombres":"CORNEJO MAMANI CELSO",
      "dni":25300464,
      "ieId":""
    },
    {
      "nombres":"DURAN ESPINOZA JORGE CARLOS",
      "dni":25318873,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA CONTRERAS MARIBEL LUZ",
      "dni":21521546,
      "ieId":""
    },
    {
      "nombres":"GAMBOA VELAZCO MARIA ANTONIETA",
      "dni":25301130,
      "ieId":""
    },
    {
      "nombres":"ITURRIAGA CAVIEDES TRINIDAD",
      "dni":25303610,
      "ieId":""
    },
    {
      "nombres":"LOAIZA CHAVEZ SILVIA NINOSKA",
      "dni":25301289,
      "ieId":""
    },
    {
      "nombres":"MAMANI ESENARRO INES",
      "dni":1685310,
      "ieId":""
    },
    {
      "nombres":"PINARES ANTONIO JUANA UBALDINA",
      "dni":25301695,
      "ieId":""
    },
    {
      "nombres":"RIVERA ANGULO MARIA SALOME",
      "dni":24460379,
      "ieId":""
    },
    {
      "nombres":"SAMANEZ CASTRO TOMAS DOMINGO",
      "dni":24940920,
      "ieId":""
    },
    {
      "nombres":"YARIN ZAMATA OCTAVIO",
      "dni":25300449,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO CAJIGAS LIZ BEBA",
      "dni":24002638,
      "ieId":""
    },
    {
      "nombres":"CERVANTES TAPIA MARIA VICTORIA",
      "dni":25300397,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR LOAIZA FRANCISCO ALFREDO",
      "dni":25302650,
      "ieId":""
    },
    {
      "nombres":"FLORES GALDOS REYNER ANDILZAN",
      "dni":45546220,
      "ieId":""
    },
    {
      "nombres":"FLOREZ CAMARA ROCIO",
      "dni":24002158,
      "ieId":""
    },
    {
      "nombres":"TALAVERA GONZALEZ ELSA ROCIO",
      "dni":25305036,
      "ieId":""
    },
    {
      "nombres":"BOCANGEL DE CACERES JUANA PAULA",
      "dni":25300436,
      "ieId":""
    },
    {
      "nombres":"CACERES CHALLCO JULIO JACINTO",
      "dni":25303095,
      "ieId":""
    },
    {
      "nombres":"CARDENAS HINOJOSA HONORATA",
      "dni":25315020,
      "ieId":""
    },
    {
      "nombres":"MONGE PERALTA CARMEN",
      "dni":23955553,
      "ieId":""
    },
    {
      "nombres":"VARGAS ARIAS ISIDORA",
      "dni":25300279,
      "ieId":""
    },
    {
      "nombres":"VARGAS MONTANEZ FERNANDO ALFREDO",
      "dni":25302002,
      "ieId":""
    },
    {
      "nombres":"DELGADO LOAYZA HERNAN VICENTE",
      "dni":25321188,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GUTIERREZ LIA",
      "dni":25315119,
      "ieId":""
    },
    {
      "nombres":"MURGUIA FLORES JACKELINE",
      "dni":23842532,
      "ieId":""
    },
    {
      "nombres":"NINANTAY PEDRAZA PERCY",
      "dni":25310094,
      "ieId":""
    },
    {
      "nombres":"OLIVERA TITO ALCIDES",
      "dni":25309540,
      "ieId":""
    },
    {
      "nombres":"PAUCCAR LUNA ERIKA",
      "dni":40152630,
      "ieId":""
    },
    {
      "nombres":"SOLORIO CARDENAS MARIA ZONIA",
      "dni":25301403,
      "ieId":""
    },
    {
      "nombres":"VALENCIA QUISPE PEDRO DAVID",
      "dni":25309862,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA PARILLO LOURDES",
      "dni":25300340,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ GUZMAN JUAN GUALBERTO",
      "dni":25301303,
      "ieId":""
    },
    {
      "nombres":"AYMA CONDE JULIAN",
      "dni":25310090,
      "ieId":""
    },
    {
      "nombres":"CARDENAS SANTOS GLADYS ERIBERTA",
      "dni":25309864,
      "ieId":""
    },
    {
      "nombres":"CJUNO MAMANI ROSABELLA",
      "dni":42963237,
      "ieId":""
    },
    {
      "nombres":"ABARCA CABALLERO DOLORES",
      "dni":25309758,
      "ieId":""
    },
    {
      "nombres":"ALEGRIA CAUSTO ELSA",
      "dni":25319753,
      "ieId":""
    },
    {
      "nombres":"CESPEDES FERRO TERESA",
      "dni":25304053,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA DURAN EMILIA",
      "dni":25319050,
      "ieId":""
    },
    {
      "nombres":"DE LA CRUZ ENRIQUEZ EUTROPIA",
      "dni":24492681,
      "ieId":""
    },
    {
      "nombres":"DORADO LEZAMA ELEUTERIA NIMIA",
      "dni":25318743,
      "ieId":""
    },
    {
      "nombres":"LLAMACPONCCA CHILLITUPA ALFREDO",
      "dni":25320356,
      "ieId":""
    },
    {
      "nombres":"MORALES HERMOZA BERNARDINA",
      "dni":25319008,
      "ieId":""
    },
    {
      "nombres":"RIVAS GAMBOA YURI",
      "dni":25319623,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA VILLANUEVA HUGO",
      "dni":25324214,
      "ieId":""
    },
    {
      "nombres":"LIRA DORADO LEONARDO",
      "dni":25319187,
      "ieId":""
    },
    {
      "nombres":"MEDINA CHUQUIMIA LEOPOLDO",
      "dni":25327195,
      "ieId":""
    },
    {
      "nombres":"AGUAYO MAR MARIA ELIZABETH",
      "dni":24465953,
      "ieId":""
    },
    {
      "nombres":"CALLAPIÑA ANGELINO ELISEO",
      "dni":25318754,
      "ieId":""
    },
    {
      "nombres":"CCORI MORENO DANILA",
      "dni":25321797,
      "ieId":""
    },
    {
      "nombres":"DURAN ROSAS MAXIMA",
      "dni":25319329,
      "ieId":""
    },
    {
      "nombres":"HUAYOTUMA MASIAS JUDIT",
      "dni":25319767,
      "ieId":""
    },
    {
      "nombres":"MASIAS DE ZUNIGA FIDELIA",
      "dni":25318681,
      "ieId":""
    },
    {
      "nombres":"MISME CHAMBI NANCY JUANA",
      "dni":25318805,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO AYTE SUNILDA",
      "dni":25320872,
      "ieId":""
    },
    {
      "nombres":"RADO ZUÑIGA MARTIN ARTURO",
      "dni":25319663,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA DORADO PABLO ALBERTO",
      "dni":25315062,
      "ieId":""
    },
    {
      "nombres":"MENDOZA MEJIA MELISA",
      "dni":46824004,
      "ieId":""
    },
    {
      "nombres":"MISME MEDINA AGUSTINA",
      "dni":25319424,
      "ieId":""
    },
    {
      "nombres":"ORCCOHUARANCCA TTITO YANET",
      "dni":25328657,
      "ieId":""
    },
    {
      "nombres":"ZEVILLANOS NINANCURO GERTRUDES",
      "dni":25304297,
      "ieId":""
    },
    {
      "nombres":"ACUÑA CARDENAS JHON CARLOS",
      "dni":25301042,
      "ieId":""
    },
    {
      "nombres":"FARFAN TOCRE FELIX",
      "dni":25300304,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA TOCRE JUSTINA",
      "dni":25303278,
      "ieId":""
    },
    {
      "nombres":"LEVA TOCRE MATEO",
      "dni":25304414,
      "ieId":""
    },
    {
      "nombres":"SANTISTEBAN MATTO MARLENY",
      "dni":25304719,
      "ieId":""
    },
    {
      "nombres":"SURCO IBARRA RUDECINDO",
      "dni":25300980,
      "ieId":""
    },
    {
      "nombres":"VILLAR VELARDE MARIA ANTONIETA",
      "dni":25301243,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA MASIAS ALBERTINA",
      "dni":25302223,
      "ieId":""
    },
    {
      "nombres":"CACERES NUÑEZ LURDES",
      "dni":42313720,
      "ieId":""
    },
    {
      "nombres":"DIAZ FERRO EULALIA",
      "dni":25302572,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MORA ARISTIDES",
      "dni":25304537,
      "ieId":""
    },
    {
      "nombres":"SULLCA MISME ROSALIA",
      "dni":45309752,
      "ieId":""
    },
    {
      "nombres":"YARIN PEREZ MOISES",
      "dni":24986367,
      "ieId":""
    },
    {
      "nombres":"SERRANO FLOREZ DE CORVA BERTHA ZORAIDA",
      "dni":23865230,
      "ieId":""
    },
    {
      "nombres":"LA TORRE NUÑEZ ERNESTO",
      "dni":25301774,
      "ieId":""
    },
    {
      "nombres":"MADERA ROJAS LAURA",
      "dni":25309968,
      "ieId":""
    },
    {
      "nombres":"UBALDE PEREA FELIO",
      "dni":25300158,
      "ieId":""
    },
    {
      "nombres":"VALLENAS ESPINOZA GLADIS",
      "dni":25326293,
      "ieId":""
    },
    {
      "nombres":"YAÑAC ALVAREZ VICTOR",
      "dni":25302791,
      "ieId":""
    },
    {
      "nombres":"CORNEJO ENRIQUEZ HERMITANIO",
      "dni":25300273,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO FERNANDEZ CELIA ALCIRA",
      "dni":25310792,
      "ieId":""
    },
    {
      "nombres":"PUMA UGARTE FREDY",
      "dni":25304428,
      "ieId":""
    },
    {
      "nombres":"QUISPE MOSCOSO EDWIN",
      "dni":25309417,
      "ieId":""
    },
    {
      "nombres":"SALOMA TOCRE VICTOR",
      "dni":25309741,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO GAMARRA HILDA GREGORIA",
      "dni":23825857,
      "ieId":""
    },
    {
      "nombres":"TORRES USCAMAYTA ALEJANDRO",
      "dni":25300729,
      "ieId":""
    },
    {
      "nombres":"VILLENA HINOJOSA PETRONILA",
      "dni":25300392,
      "ieId":""
    },
    {
      "nombres":"CORAZAO CCANTO ELEUTERIO",
      "dni":23820343,
      "ieId":""
    },
    {
      "nombres":"ESCOBAR OLIVARES BERTHA",
      "dni":25315021,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA RONDAN HILDA",
      "dni":23845554,
      "ieId":""
    },
    {
      "nombres":"MAR SERRANO VICTOR",
      "dni":25301696,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA CAMACHO DENIA",
      "dni":43906414,
      "ieId":""
    },
    {
      "nombres":"ABARCA ACHIHUANCA NICOLAS FEDERICO",
      "dni":25301953,
      "ieId":""
    },
    {
      "nombres":"ACUÑA CARDENAS LOURDES DOMINGA",
      "dni":25303164,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ FRISANCHO ALICIA",
      "dni":40533599,
      "ieId":""
    },
    {
      "nombres":"ARIZA ROJAS ASCENCIA",
      "dni":25300463,
      "ieId":""
    },
    {
      "nombres":"BACA HERENCIA SERAPIA",
      "dni":25301609,
      "ieId":""
    },
    {
      "nombres":"CASTILLO ESPINOZA RONALD",
      "dni":25300513,
      "ieId":""
    },
    {
      "nombres":"CESPEDES FERRO DELIO",
      "dni":25303836,
      "ieId":""
    },
    {
      "nombres":"DORADO HINOJOSA ANGELICA",
      "dni":25319186,
      "ieId":""
    },
    {
      "nombres":"DURAND ZAMALLOA LAURA TANIA",
      "dni":25301280,
      "ieId":""
    },
    {
      "nombres":"LUZA CUBA EMILY RUTH",
      "dni":23814417,
      "ieId":""
    },
    {
      "nombres":"LUZA DEL CASTILLO DE MU ELSA",
      "dni":23877451,
      "ieId":""
    },
    {
      "nombres":"MEZA SAIRE ERNESTO",
      "dni":23860602,
      "ieId":""
    },
    {
      "nombres":"MIRANDA YARIN JEANETTE JUANA",
      "dni":25304181,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO ABARCA DE CARDE ROCIO",
      "dni":25304402,
      "ieId":""
    },
    {
      "nombres":"PUMACCAHUA MOSCOSO AURORA CATALINA",
      "dni":25300928,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE GRACIELA BRUNILDA",
      "dni":25321052,
      "ieId":""
    },
    {
      "nombres":"RAMOS MASIAS CORINA",
      "dni":25318673,
      "ieId":""
    },
    {
      "nombres":"RIOS BERNEDO JACINTA AMALIA",
      "dni":25302115,
      "ieId":""
    },
    {
      "nombres":"ROJAS CONCHA ELIZABETH",
      "dni":25326087,
      "ieId":""
    },
    {
      "nombres":"SURCO IBARRA CIRIACO",
      "dni":25300132,
      "ieId":""
    },
    {
      "nombres":"TECSERUPAY DELGADO ADA FLORENTINA",
      "dni":25318963,
      "ieId":""
    },
    {
      "nombres":"VARGAS MONTAÑEZ GIOVANNA ELIZABETH",
      "dni":25305184,
      "ieId":""
    },
    {
      "nombres":"VARGAS VILLEGAS ANTONIETA",
      "dni":23827925,
      "ieId":""
    },
    {
      "nombres":"VELARDE CASAFRANCA LIDIA",
      "dni":24484696,
      "ieId":""
    },
    {
      "nombres":"HUAMAN RONDAN ROSALIO",
      "dni":25312076,
      "ieId":""
    },
    {
      "nombres":"TORRES CABRERA OLGA",
      "dni":25311989,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI MENDOZA CELINDA",
      "dni":25319583,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI DE HERMOZA PAULINA",
      "dni":25319322,
      "ieId":""
    },
    {
      "nombres":"BERRIOS QUIÑONEZ CRISOSTOMO",
      "dni":25320288,
      "ieId":""
    },
    {
      "nombres":"BLANCO SOTO HERMINIA",
      "dni":25304995,
      "ieId":""
    },
    {
      "nombres":"CARPIO ROMERO ALFREDO",
      "dni":23901752,
      "ieId":""
    },
    {
      "nombres":"FLORES AYERBE MARILU",
      "dni":25303584,
      "ieId":""
    },
    {
      "nombres":"GAMBOA DE ORAICA LIDIA GUADALUPE",
      "dni":25301540,
      "ieId":""
    },
    {
      "nombres":"MELENDEZ PUMA VILMA",
      "dni":25326589,
      "ieId":""
    },
    {
      "nombres":"MUZAURIETA ALLENDE ERIS VIHT",
      "dni":24486954,
      "ieId":""
    },
    {
      "nombres":"OLIVERA CALLAÑAUPA ROSA MARIA",
      "dni":25326361,
      "ieId":""
    },
    {
      "nombres":"ORTIZ DE ORUE BOCANGEL SONIA",
      "dni":25311955,
      "ieId":""
    },
    {
      "nombres":"RIOS VELARDE SAMUEL",
      "dni":25302885,
      "ieId":""
    },
    {
      "nombres":"TAPIA TRELLES GIOVANNA",
      "dni":44408765,
      "ieId":""
    },
    {
      "nombres":"ORTEGA SARCO WILFREDO",
      "dni":40783940,
      "ieId":""
    },
    {
      "nombres":"ALOSILLA VARGAS FELICIA",
      "dni":24460798,
      "ieId":""
    },
    {
      "nombres":"CAVIEDES NANCAY EDUARDA",
      "dni":25300465,
      "ieId":""
    },
    {
      "nombres":"FARFAN TOCRE PAULINO",
      "dni":25302033,
      "ieId":""
    },
    {
      "nombres":"PALOMINO QUISPILLO RUBEN SATURNINO",
      "dni":25310722,
      "ieId":""
    },
    {
      "nombres":"SILVA MONDRAGON RINA PRUDENCIA",
      "dni":25320978,
      "ieId":""
    },
    {
      "nombres":"SULLCA MISME ROCIO",
      "dni":25326379,
      "ieId":""
    },
    {
      "nombres":"VILLEGAS COVARRUBIAS RAMIRO",
      "dni":25304111,
      "ieId":""
    },
    {
      "nombres":"ZANABRIA ABARCA TEOFILA",
      "dni":25302522,
      "ieId":""
    },
    {
      "nombres":"AZPILCUETA PAZ VICKY MARIA MANUELITA",
      "dni":23881127,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE RODRIGUEZ LIZBETH RENY",
      "dni":25321605,
      "ieId":""
    },
    {
      "nombres":"CALDERON HIDALGO ERIK ROGER",
      "dni":19254078,
      "ieId":""
    },
    {
      "nombres":"CAMPANA CAJIGAS ALCIRA",
      "dni":23920524,
      "ieId":""
    },
    {
      "nombres":"CASTRO ARANIBAR MARIA JESUS",
      "dni":25300631,
      "ieId":""
    },
    {
      "nombres":"CCORIHUAMAN FARFAN LUZ MARINA",
      "dni":24003680,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA HINOJOSA ARCADIO",
      "dni":25318749,
      "ieId":""
    },
    {
      "nombres":"GARCIA NINANCURO EDITH MARLENE",
      "dni":23998384,
      "ieId":""
    },
    {
      "nombres":"LEON QUISPE LUIS",
      "dni":23966755,
      "ieId":""
    },
    {
      "nombres":"LIZARAZO VALENCIA JAVIER",
      "dni":24495961,
      "ieId":""
    },
    {
      "nombres":"MAROCHO TAPARA DELFINA",
      "dni":40958936,
      "ieId":""
    },
    {
      "nombres":"MORVELI DELGADO MELITON",
      "dni":23903185,
      "ieId":""
    },
    {
      "nombres":"QUISPE MOLINA CRISTINA",
      "dni":23940186,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ GOMEZ REGINA",
      "dni":25303984,
      "ieId":""
    },
    {
      "nombres":"RIOS ORTIZ HEBER",
      "dni":40512063,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CARAZAS YELMANDO",
      "dni":80522999,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUAMANI RUTH",
      "dni":23985008,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA ORTIZ DE ORUE NEMESIA",
      "dni":23806145,
      "ieId":""
    },
    {
      "nombres":"SALAS DE RAMIREZ MARCELINA",
      "dni":23819157,
      "ieId":""
    },
    {
      "nombres":"SALAS GOMEZ JUAN JOSE",
      "dni":23964773,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ FARFAN JESELICA GABY",
      "dni":23951285,
      "ieId":""
    },
    {
      "nombres":"SOLORZANO TAPIA ROSSI",
      "dni":23963906,
      "ieId":""
    },
    {
      "nombres":"SOSA APARICIO MARIA ELENA",
      "dni":23987422,
      "ieId":""
    },
    {
      "nombres":"TOMAICONZA RODRIGUEZ KAREN",
      "dni":23948262,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ VALDIVIA ENRIQUE",
      "dni":23899924,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ FRISANCHO EMPERATRIZ ELENA",
      "dni":25321455,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ JURADO JULIO SIMON",
      "dni":25300381,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI PEÑA ELENA ROSA",
      "dni":25302141,
      "ieId":""
    },
    {
      "nombres":"CABRERA ROCA HENRY",
      "dni":25304985,
      "ieId":""
    },
    {
      "nombres":"CARPIO ROMERO NORMA",
      "dni":23918550,
      "ieId":""
    },
    {
      "nombres":"CAÑARI DIAZ JUSTINIANO VICTORIANO",
      "dni":25318408,
      "ieId":""
    },
    {
      "nombres":"CHOQUE ALATA RODOLFO",
      "dni":25300174,
      "ieId":""
    },
    {
      "nombres":"CHOQUE MANRIQUE CARMEN ELIANA",
      "dni":29655623,
      "ieId":""
    },
    {
      "nombres":"CONCHA CASTRO WASHINGTON",
      "dni":25310001,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCCAR YEPEZ RUDY",
      "dni":41895255,
      "ieId":""
    },
    {
      "nombres":"CUTIMBO QUISPE RITA MAURA",
      "dni":2146041,
      "ieId":""
    },
    {
      "nombres":"FLORES NEYRA DAISY DORIS",
      "dni":4438205,
      "ieId":""
    },
    {
      "nombres":"FRANCO QUISPE MARIZOL",
      "dni":42935309,
      "ieId":""
    },
    {
      "nombres":"GONZALES PARI YANET ROSARIO",
      "dni":23882093,
      "ieId":""
    },
    {
      "nombres":"HUAMAN LAUREL ALEJANDRO",
      "dni":25304245,
      "ieId":""
    },
    {
      "nombres":"HUANCAHUIRE YAÑEZ OSCAR NOE",
      "dni":25321526,
      "ieId":""
    },
    {
      "nombres":"HUARACALLO MU-OZ LINO FREDY",
      "dni":23862008,
      "ieId":""
    },
    {
      "nombres":"HUAYTA VERA ANGEL",
      "dni":23825547,
      "ieId":""
    },
    {
      "nombres":"JORGE ROJAS RUPERTO",
      "dni":25309657,
      "ieId":""
    },
    {
      "nombres":"LA TORRE NUÑEZ LEANDRO",
      "dni":25304916,
      "ieId":""
    },
    {
      "nombres":"MORA NUÑEZ YSABEL",
      "dni":23859992,
      "ieId":""
    },
    {
      "nombres":"MORALES ABAL ROSIO",
      "dni":25320280,
      "ieId":""
    },
    {
      "nombres":"ONOFRE TTITO JUAN DE LA CRUZ",
      "dni":25303466,
      "ieId":""
    },
    {
      "nombres":"ORTEGA MORA FRANCISCO SOLANO",
      "dni":23854191,
      "ieId":""
    },
    {
      "nombres":"OTAZU UGARTE ELISEO MELCHOR",
      "dni":25300489,
      "ieId":""
    },
    {
      "nombres":"PINEDO VASQUEZ JENE",
      "dni":23989902,
      "ieId":""
    },
    {
      "nombres":"POZO GONZALES MARIA TERESA",
      "dni":23965219,
      "ieId":""
    },
    {
      "nombres":"QUILCA VILA GLADIS BERTHA",
      "dni":23985987,
      "ieId":""
    },
    {
      "nombres":"QUISPE BENGOA VICENTINA",
      "dni":23922381,
      "ieId":""
    },
    {
      "nombres":"QUIÑO CHACON WILFREDO",
      "dni":23803196,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN YEHELIN MARICELA",
      "dni":25303307,
      "ieId":""
    },
    {
      "nombres":"TAIRO HUILLCA TIMOSIN",
      "dni":24714735,
      "ieId":""
    },
    {
      "nombres":"TELLO YLLA JUAN CARLOS",
      "dni":23958660,
      "ieId":""
    },
    {
      "nombres":"UGARTE DIAZ ROSALBA MILAGROS",
      "dni":23933704,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ INCAQUIHUE ELIZABETH SOFIA",
      "dni":1316664,
      "ieId":""
    },
    {
      "nombres":"ZANS HERRERA CESAR FLORENTINO",
      "dni":25303187,
      "ieId":""
    },
    {
      "nombres":"AUCCA BACA MARIVEL GRICELDA",
      "dni":41074548,
      "ieId":""
    },
    {
      "nombres":"BERRIO CALDERON GUICELLY DEISSY",
      "dni":43664742,
      "ieId":""
    },
    {
      "nombres":"CALCINA ALVAREZ SERAPIO FABIAN",
      "dni":23872141,
      "ieId":""
    },
    {
      "nombres":"CAVIEDES CHOQUE MARIO",
      "dni":25326592,
      "ieId":""
    },
    {
      "nombres":"CHEVARRIA ANDIA JORGE",
      "dni":23985418,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA CURILLO BETY",
      "dni":40697290,
      "ieId":""
    },
    {
      "nombres":"LIZARRAGA MORALES HENRY ABEL",
      "dni":23957276,
      "ieId":""
    },
    {
      "nombres":"MASIAS SANTOS JAMES",
      "dni":25319263,
      "ieId":""
    },
    {
      "nombres":"PALOMINO DAVALOS WENDEL ALBERTO",
      "dni":23979857,
      "ieId":""
    },
    {
      "nombres":"PANTIGOSO CURO YENNY",
      "dni":40234948,
      "ieId":""
    },
    {
      "nombres":"PILLCO MEZA CRISTINA",
      "dni":24484474,
      "ieId":""
    },
    {
      "nombres":"QUILCA VERGARA JOSE ABDIAS",
      "dni":23810522,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ CARAZAS HERBER",
      "dni":23806850,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ SOLORZANO EDSON LEONID",
      "dni":40562191,
      "ieId":""
    },
    {
      "nombres":"SOCLLY MEDINA HIPOLITO",
      "dni":23978965,
      "ieId":""
    },
    {
      "nombres":"SUTTA SALAS ZAIDA JOSEFA",
      "dni":40650655,
      "ieId":""
    },
    {
      "nombres":"AGUILAR HUAMAN SABINO",
      "dni":25302331,
      "ieId":""
    },
    {
      "nombres":"AIRAMPO FARFAN BERNARDINA",
      "dni":25302995,
      "ieId":""
    },
    {
      "nombres":"ASCUE CURILLO SILVERIO",
      "dni":25309649,
      "ieId":""
    },
    {
      "nombres":"BUSTAMANTE BECERRA CELESTINO",
      "dni":25300306,
      "ieId":""
    },
    {
      "nombres":"CAÑARI DIAZ JUAN UBALDINO",
      "dni":25318711,
      "ieId":""
    },
    {
      "nombres":"CCAPAIQUE COLQUE ISAAC",
      "dni":2549888,
      "ieId":""
    },
    {
      "nombres":"CHULLO SILVA CARLOS",
      "dni":44173384,
      "ieId":""
    },
    {
      "nombres":"CONCHA TUPAYACHI HERNAN",
      "dni":23914291,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA MORMONTOY EMILIO",
      "dni":25321175,
      "ieId":""
    },
    {
      "nombres":"DUEÑAS MANCHA PERCY OSCAR",
      "dni":23966400,
      "ieId":""
    },
    {
      "nombres":"ESCOBEDO QUIN JUAN",
      "dni":25303889,
      "ieId":""
    },
    {
      "nombres":"FLOREZ ORTIZ JUDITH MONICA",
      "dni":23809323,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS ATAUCHI LUCILA",
      "dni":25328835,
      "ieId":""
    },
    {
      "nombres":"HERRERA VARGAS MAGDA ANTONIETA",
      "dni":23816645,
      "ieId":""
    },
    {
      "nombres":"HUARACALLO MUÑOZ ERWIN",
      "dni":24003560,
      "ieId":""
    },
    {
      "nombres":"IBARRA CALLAÑAUPA REYNALDO",
      "dni":25301225,
      "ieId":""
    },
    {
      "nombres":"LAURENTE CALISAYA ELVA INES",
      "dni":499625,
      "ieId":""
    },
    {
      "nombres":"ORTIZ COVARRUBIAS MELCHOR",
      "dni":25302552,
      "ieId":""
    },
    {
      "nombres":"OVIEDO CJUNO JESSICA KARIN",
      "dni":23977579,
      "ieId":""
    },
    {
      "nombres":"PFOCCOALATA ZUNIGA EUSEBIO",
      "dni":23885195,
      "ieId":""
    },
    {
      "nombres":"RAMOS MORA MILAGROS",
      "dni":43861257,
      "ieId":""
    },
    {
      "nombres":"RIOS VERA GLADYS",
      "dni":25302356,
      "ieId":""
    },
    {
      "nombres":"ROJAS BOLIVAR JUDITH",
      "dni":23870451,
      "ieId":""
    },
    {
      "nombres":"TINTAYA RODRIGUEZ DELIA",
      "dni":25321233,
      "ieId":""
    },
    {
      "nombres":"TORRES PATANA LUCIO",
      "dni":2008704,
      "ieId":""
    },
    {
      "nombres":"VALENCIA CARDENAS SERGIA",
      "dni":25304487,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA PALOMINO ERIBERTA",
      "dni":24460655,
      "ieId":""
    },
    {
      "nombres":"CACERES OJEDA GUILLERMO VITALIANO",
      "dni":23861049,
      "ieId":""
    },
    {
      "nombres":"CASTRO ESCOBAR LUSVENIA",
      "dni":23954891,
      "ieId":""
    },
    {
      "nombres":"CONDO CASTELO ANA GINA",
      "dni":23882069,
      "ieId":""
    },
    {
      "nombres":"CORONADO LOAIZA NESTOR HUGO",
      "dni":40122851,
      "ieId":""
    },
    {
      "nombres":"CRUZ ANDRADE WASHINGTON",
      "dni":23894192,
      "ieId":""
    },
    {
      "nombres":"GONZALES QUISPE BENEDICTA",
      "dni":25308948,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ ARANIBAR TANIA ROSSANA",
      "dni":25320336,
      "ieId":""
    },
    {
      "nombres":"HUAMAN CALLAÑAUPA FERNANDO",
      "dni":25308238,
      "ieId":""
    },
    {
      "nombres":"HUAMAN RODRIGUEZ CATALINA",
      "dni":25305058,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ ESPINOZA CARMELA GRISELDA",
      "dni":25303415,
      "ieId":""
    },
    {
      "nombres":"MORA CHAVEZ MELQUIADES",
      "dni":25326366,
      "ieId":""
    },
    {
      "nombres":"ORTIZ MURILLO HUGO ROGER",
      "dni":1545286,
      "ieId":""
    },
    {
      "nombres":"QUISPE MENDOZA AUGUSTO",
      "dni":23999264,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ CHAVEZ BRAULIA YANETH",
      "dni":25303628,
      "ieId":""
    },
    {
      "nombres":"ROQUE MAMANI NANCY TEODORA",
      "dni":1322013,
      "ieId":""
    },
    {
      "nombres":"SANTA CRUZ BAÑOS VIRGINIA",
      "dni":24367500,
      "ieId":""
    },
    {
      "nombres":"VIDAL RODAS DAVID",
      "dni":31020755,
      "ieId":""
    },
    {
      "nombres":"APAZA CARMONA LIZBET ROCIO",
      "dni":41615834,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI ATAUCHI HILARIO",
      "dni":25318703,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA RAMOS JULIA",
      "dni":23975222,
      "ieId":""
    },
    {
      "nombres":"CASTRO DE MORMONTOY DORA NACIANCENA",
      "dni":23822158,
      "ieId":""
    },
    {
      "nombres":"CASTRO MAMANI FILOMENA",
      "dni":24469145,
      "ieId":""
    },
    {
      "nombres":"COLQUE DURAND ARNALDO",
      "dni":40712032,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA HINOJOSA LEONCIO HILARIO",
      "dni":25318748,
      "ieId":""
    },
    {
      "nombres":"FARFAN MENDOZA JULIO",
      "dni":23855118,
      "ieId":""
    },
    {
      "nombres":"GAMARRA LOAIZA EDILBERTO",
      "dni":40694458,
      "ieId":""
    },
    {
      "nombres":"GIL QUINTEROS GARY POOL",
      "dni":45666141,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ CORDOVA DELIA",
      "dni":25328710,
      "ieId":""
    },
    {
      "nombres":"HUANCA GONZALES EDWIN",
      "dni":23947348,
      "ieId":""
    },
    {
      "nombres":"MAR PINARES LETICIA",
      "dni":41924084,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ AVILES DECIDE",
      "dni":40852347,
      "ieId":""
    },
    {
      "nombres":"MOLLEHUANCA TORRES NICASIO EDGAR",
      "dni":25319435,
      "ieId":""
    },
    {
      "nombres":"MONTESINOS PORTILLO PAULINO",
      "dni":25301275,
      "ieId":""
    },
    {
      "nombres":"MOSTACERO MONTOYA MIGUEL ANGEL",
      "dni":23948940,
      "ieId":""
    },
    {
      "nombres":"OLIVERA QUINTANILLA RICARDO",
      "dni":25319633,
      "ieId":""
    },
    {
      "nombres":"PAUCAR VALER NEPTALI NATIVIDAD",
      "dni":42186415,
      "ieId":""
    },
    {
      "nombres":"QUISPE AYMACHOQUE MARIZOL",
      "dni":23975960,
      "ieId":""
    },
    {
      "nombres":"RAVELO QUISPE DE VILCA DINA MAXIMILIANA",
      "dni":25318684,
      "ieId":""
    },
    {
      "nombres":"VIVANCO CARDENAS ESKARLETH",
      "dni":21566632,
      "ieId":""
    },
    {
      "nombres":"YAÑE ZUÑIGA LUCAS",
      "dni":4960761,
      "ieId":""
    },
    {
      "nombres":"ZARSANAULA OLIVERA IVAN",
      "dni":25319785,
      "ieId":""
    },
    {
      "nombres":"ABARCA GOMEZ GENNER",
      "dni":42143494,
      "ieId":""
    },
    {
      "nombres":"APOLAYA CANCHUA YULIANA AURORA",
      "dni":41901624,
      "ieId":""
    },
    {
      "nombres":"BARRIOS MONTES ROLANDO PEDRO",
      "dni":29540259,
      "ieId":""
    },
    {
      "nombres":"LINARES VILLAFUERTE ESPERANZA DE JESUS",
      "dni":23926488,
      "ieId":""
    },
    {
      "nombres":"LOAIZA RODRIGUEZ MARIA DEL PILAR",
      "dni":23957445,
      "ieId":""
    },
    {
      "nombres":"MORALES QUISPE MARILLY ROSY",
      "dni":43131566,
      "ieId":""
    },
    {
      "nombres":"OCHOA TAPIA ANANI",
      "dni":40129779,
      "ieId":""
    },
    {
      "nombres":"PUNTACA PELAYO HERNAN",
      "dni":25326523,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ ROZAS HERNANDO",
      "dni":25321063,
      "ieId":""
    },
    {
      "nombres":"CANA CABALLERO CARLOS VICTOR",
      "dni":24717358,
      "ieId":""
    },
    {
      "nombres":"CCORI PALOMINO MARCO",
      "dni":25304883,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE JORGE CARLOS IVAN",
      "dni":44820470,
      "ieId":""
    },
    {
      "nombres":"MAMANI SOTO BALVINO",
      "dni":40816141,
      "ieId":""
    },
    {
      "nombres":"ROMERO SALAS HUGO WILLIAM",
      "dni":25303804,
      "ieId":""
    },
    {
      "nombres":"YUCRA MARURI QUISSINGHER",
      "dni":45043598,
      "ieId":""
    },
    {
      "nombres":"AVALOS CUELLAR RAQUEL",
      "dni":40809693,
      "ieId":""
    },
    {
      "nombres":"CABRERA ZEGARRA RAUL",
      "dni":25320833,
      "ieId":""
    },
    {
      "nombres":"HUISA LOPEZ MARIA ELENA",
      "dni":23861639,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI CABRERA GABINA",
      "dni":25302266,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LINARES WILLY",
      "dni":25303927,
      "ieId":""
    },
    {
      "nombres":"INFANTAS VARGAS MARIA LOURDES",
      "dni":23843196,
      "ieId":""
    },
    {
      "nombres":"OLIVERA TRIVEÑO KOKSVINE",
      "dni":24716919,
      "ieId":""
    },
    {
      "nombres":"RIVERO ESCALANTE ALICIA",
      "dni":23939144,
      "ieId":""
    },
    {
      "nombres":"CALLANAUPA HUAMAN HERNAN",
      "dni":25306017,
      "ieId":""
    },
    {
      "nombres":"COILA HUAMAN SONIA MARISA",
      "dni":2306840,
      "ieId":""
    },
    {
      "nombres":"CONDORI MAMANI GIOVANNA",
      "dni":44118251,
      "ieId":""
    },
    {
      "nombres":"CORDOVA CARREÑO LUIS",
      "dni":25318547,
      "ieId":""
    },
    {
      "nombres":"DIAZ SOLIS PLACIDA",
      "dni":25303465,
      "ieId":""
    },
    {
      "nombres":"DURAN CARREÑO HECTOR",
      "dni":25328611,
      "ieId":""
    },
    {
      "nombres":"IBARRA AQUINO MARIA MARGARITA",
      "dni":25300221,
      "ieId":""
    },
    {
      "nombres":"VICTORIA FERNANDEZ BACA MANUEL",
      "dni":25303043,
      "ieId":""
    },
    {
      "nombres":"VILLALOBOS PEÑA HIGIDIA",
      "dni":25301837,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA BECERRA RUPERTA",
      "dni":25319113,
      "ieId":""
    },
    {
      "nombres":"GUZMAN QUISPE MARIO",
      "dni":23981138,
      "ieId":""
    },
    {
      "nombres":"QUISPE FELIPE YESSICA",
      "dni":42905308,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN HILDA",
      "dni":44861169,
      "ieId":""
    },
    {
      "nombres":"APAZA MEDRANO RENE ESTANISLAO",
      "dni":25321225,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHE RIVAS HERMITAÑO",
      "dni":25319340,
      "ieId":""
    },
    {
      "nombres":"BAUTISTA VALERIANO JORGE",
      "dni":23995269,
      "ieId":""
    },
    {
      "nombres":"CARHUASUICA AIRAMPO ADELAIDO",
      "dni":25303426,
      "ieId":""
    },
    {
      "nombres":"CONCHA HUALLPA VICENTE",
      "dni":23938670,
      "ieId":""
    },
    {
      "nombres":"CURASI BEJAR ROBERTO",
      "dni":23945673,
      "ieId":""
    },
    {
      "nombres":"DEL VILLAR VARGAS EDGAR MARGARITO",
      "dni":23836847,
      "ieId":""
    },
    {
      "nombres":"GALIANO MELLADO JULIA ALEJANDRINA",
      "dni":24366474,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS FLORES YOLANDA",
      "dni":23946735,
      "ieId":""
    },
    {
      "nombres":"GIRALDO ASCENCIO ROGER  CHRISTIAM",
      "dni":40208142,
      "ieId":""
    },
    {
      "nombres":"HERMOZA MORA BUENAVENTURA",
      "dni":25318777,
      "ieId":""
    },
    {
      "nombres":"HUILLCA HUAMAN ALEX FERNANDO",
      "dni":40363957,
      "ieId":""
    },
    {
      "nombres":"JARA SANCHEZ LUZ MARINA",
      "dni":25320302,
      "ieId":""
    },
    {
      "nombres":"JIHUAÑA QUISPE EDGAR RUBI",
      "dni":46644872,
      "ieId":""
    },
    {
      "nombres":"MARIN HERRERA SEGUNDO MANUEL",
      "dni":31042355,
      "ieId":""
    },
    {
      "nombres":"MASIAS SANTOS DE ATAUSI CELINA MICAELA",
      "dni":25319269,
      "ieId":""
    },
    {
      "nombres":"NINA GONZALES SOFIA JUANA",
      "dni":23976510,
      "ieId":""
    },
    {
      "nombres":"OCAMPO FIGUEROA URIEL",
      "dni":41832355,
      "ieId":""
    },
    {
      "nombres":"OLIVERA BRAVO LUIS ALBERTO",
      "dni":23994293,
      "ieId":""
    },
    {
      "nombres":"PARI HERENCIA VILMA AYDEE",
      "dni":24707514,
      "ieId":""
    },
    {
      "nombres":"PORTUGAL GARCIA JOSE MANUEL",
      "dni":41374174,
      "ieId":""
    },
    {
      "nombres":"QUISPE TITO ERIBERTO",
      "dni":25320364,
      "ieId":""
    },
    {
      "nombres":"RENGIFO HINOJOSA JOSUE",
      "dni":10645294,
      "ieId":""
    },
    {
      "nombres":"SANTISTEBAN MATTO HUBER SANTOS",
      "dni":25301950,
      "ieId":""
    },
    {
      "nombres":"TAPIA ALOSILLA MARCO ANTONIO",
      "dni":24487480,
      "ieId":""
    },
    {
      "nombres":"TAPIA PINEDA GABINO",
      "dni":24488643,
      "ieId":""
    },
    {
      "nombres":"TITO LUNA DE GASTAÑAGA CONCEPCION NICOLAZA",
      "dni":25310726,
      "ieId":""
    },
    {
      "nombres":"TOCRE HANCCO WALDIR",
      "dni":25310532,
      "ieId":""
    },
    {
      "nombres":"VADILLO GARCIA JOSE LUIS",
      "dni":59082,
      "ieId":""
    },
    {
      "nombres":"VASQUEZ MORA CARMEN ROSA",
      "dni":25315046,
      "ieId":""
    },
    {
      "nombres":"VIDAL RODAS DAVID",
      "dni":31020755,
      "ieId":""
    },
    {
      "nombres":"MAGUIÑA PIMENTEL MARYURI",
      "dni":25326333,
      "ieId":""
    },
    {
      "nombres":"PIMENTEL ZEGARRA JOSE LUIS",
      "dni":493247,
      "ieId":""
    },
    {
      "nombres":"VILLENA VILLENA ALFREDO ANACLETO",
      "dni":23843023,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE POBLETE GUSTAVO EFRAIN",
      "dni":23845402,
      "ieId":""
    },
    {
      "nombres":"OBANDO VALDIVIA SUSANA",
      "dni":23803391,
      "ieId":""
    },
    {
      "nombres":"PALOMINO CUSIPAUCAR ROCIO CARMEN",
      "dni":23904322,
      "ieId":""
    },
    {
      "nombres":"MORVELI ROJAS MARIA CASILDA",
      "dni":24940361,
      "ieId":""
    },
    {
      "nombres":"ZANS GIL MARIA ANANY",
      "dni":25320955,
      "ieId":""
    },
    {
      "nombres":"VILLAR VELARDE CARMEN",
      "dni":25304979,
      "ieId":""
    },
    {
      "nombres":"MASIAS OLAVE FLOR DE MARIA",
      "dni":25328660,
      "ieId":""
    },
    {
      "nombres":"RAMOS LOAIZA ELIZABETH",
      "dni":23919269,
      "ieId":""
    },
    {
      "nombres":"AEDO QUISPE FERNANDO",
      "dni":46423647,
      "ieId":""
    },
    {
      "nombres":"ARROYO SANTOS SONIA",
      "dni":25302211,
      "ieId":""
    },
    {
      "nombres":"AUCCA ECHARRI LUIS MIGUEL",
      "dni":24487963,
      "ieId":""
    },
    {
      "nombres":"AUCCAPUMA TTITO MANUEL EXALTACION",
      "dni":25319325,
      "ieId":""
    },
    {
      "nombres":"CARDENAS MORA JOSE CARLOS",
      "dni":25301465,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ARENAS RUTH",
      "dni":25304458,
      "ieId":""
    },
    {
      "nombres":"CUEVA LUCANA RODOLFO",
      "dni":41080068,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN BRAVO PEDRO",
      "dni":25308653,
      "ieId":""
    },
    {
      "nombres":"GAMARRA LOVATON SABINA NANCI",
      "dni":23820320,
      "ieId":""
    },
    {
      "nombres":"GAMARRA LOVATON SONIA",
      "dni":25305141,
      "ieId":""
    },
    {
      "nombres":"GAMBOA GIL JENNY JESSYKA",
      "dni":25320215,
      "ieId":""
    },
    {
      "nombres":"GIRALDO OLARTE CARLOS",
      "dni":25304094,
      "ieId":""
    },
    {
      "nombres":"GOMEZ WARTHON NAYDA",
      "dni":23995682,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ ESCOBEDO ESTHER",
      "dni":23804849,
      "ieId":""
    },
    {
      "nombres":"HUILLCA DE MENDOZA VICTORIA",
      "dni":23807705,
      "ieId":""
    },
    {
      "nombres":"MASIAS SANTOS EDILMA",
      "dni":25319327,
      "ieId":""
    },
    {
      "nombres":"OLGUIN USCA VALENTINA",
      "dni":25300972,
      "ieId":""
    },
    {
      "nombres":"PAREJA COVARRUBIAS WILLIAM EDGARD",
      "dni":25304678,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN DE HUARHUA FRANCISCA",
      "dni":25306503,
      "ieId":""
    },
    {
      "nombres":"QUISPE ESPINOZA LUCILA",
      "dni":25302742,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN JAVIER",
      "dni":25321670,
      "ieId":""
    },
    {
      "nombres":"SERRANO SALAS MARCELINA",
      "dni":23873578,
      "ieId":""
    },
    {
      "nombres":"TARCO QUILLO HAYDEE",
      "dni":23863165,
      "ieId":""
    },
    {
      "nombres":"VILLALOBOS YUPANQUI SIMON",
      "dni":25304920,
      "ieId":""
    },
    {
      "nombres":"YAÑAC ALVAREZ RICARDO",
      "dni":25304382,
      "ieId":""
    },
    {
      "nombres":"ARREDONDO RIVAS ZURI",
      "dni":23940347,
      "ieId":""
    },
    {
      "nombres":"CUSI GONZALES RENE EULALIA",
      "dni":25324031,
      "ieId":""
    },
    {
      "nombres":"FARFAN MELGAREJO TERESA",
      "dni":25318943,
      "ieId":""
    },
    {
      "nombres":"PEDRAZA TEJADA EUFEMIA",
      "dni":25303137,
      "ieId":""
    },
    {
      "nombres":"AUCCAYSI ORTIZ DE ORUE MARGARITA",
      "dni":25304369,
      "ieId":""
    },
    {
      "nombres":"HUAMAN PALMA ANA YSABEL",
      "dni":23941442,
      "ieId":""
    },
    {
      "nombres":"PEREZ MORALES ELIANA",
      "dni":25310639,
      "ieId":""
    },
    {
      "nombres":"ATAYUPANQUI QUISPE LUCILA",
      "dni":25303665,
      "ieId":""
    },
    {
      "nombres":"TAPIA DEZA NELLY HERMELINDA",
      "dni":23933970,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA ARRIAGA JUSTINA",
      "dni":25319195,
      "ieId":""
    },
    {
      "nombres":"ORTIZ DE ORUE DIAZ JOVITA",
      "dni":25304559,
      "ieId":""
    },
    {
      "nombres":"PEREZ ORTIZ DE ORUE NERI DORIS",
      "dni":23838785,
      "ieId":""
    },
    {
      "nombres":"ABARCA MORA VILMA",
      "dni":25321077,
      "ieId":""
    },
    {
      "nombres":"VILLACORTA ZAMBRANO ALEJANDRO",
      "dni":25304637,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE NANCY",
      "dni":24990017,
      "ieId":""
    },
    {
      "nombres":"TAPIA TORRES PORFIRIO AMERICO",
      "dni":25300583,
      "ieId":""
    },
    {
      "nombres":"DIAZ QUISPE TERESA",
      "dni":25319654,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCOILA JUANA",
      "dni":24701736,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI CASTILLO EFRAIN",
      "dni":25310773,
      "ieId":""
    },
    {
      "nombres":"ARAMBURU MENDOZA EPIFANIO",
      "dni":25328815,
      "ieId":""
    },
    {
      "nombres":"BEIZAGA GUARDAPUCLLA WENCESLAO",
      "dni":23992160,
      "ieId":""
    },
    {
      "nombres":"CCANTO JORGE HERMITAÑO",
      "dni":25310179,
      "ieId":""
    },
    {
      "nombres":"SAIRE HUILLCANINA LUZ MARINA",
      "dni":23851413,
      "ieId":""
    },
    {
      "nombres":"TEJADA ZAMBRANO JULIA",
      "dni":25319564,
      "ieId":""
    },
    {
      "nombres":"TRUJILLO MORMONTOY MARITZA",
      "dni":25310719,
      "ieId":""
    },
    {
      "nombres":"DELGADO CHAVEZ NELLIDA",
      "dni":23940599,
      "ieId":""
    },
    {
      "nombres":"MEZA HUAMAN YENY",
      "dni":25304813,
      "ieId":""
    },
    {
      "nombres":"UBALDE VELARDE PAULINO",
      "dni":25301764,
      "ieId":""
    },
    {
      "nombres":"VIZCARRA MERCADO ARMANDO",
      "dni":23962613,
      "ieId":""
    },
    {
      "nombres":"CACERES MARCAVILLACA DE NELY",
      "dni":24465347,
      "ieId":""
    },
    {
      "nombres":"ABARCA ESCALANTE CELESTINA CARMEN",
      "dni":31421053,
      "ieId":""
    },
    {
      "nombres":"GALVAN VALENCIA IVONNE PATRICIA",
      "dni":23952179,
      "ieId":""
    },
    {
      "nombres":"MORALES ABAL SONIA",
      "dni":25304504,
      "ieId":""
    },
    {
      "nombres":"AIRAMPO FARFAN LUCILA",
      "dni":25303076,
      "ieId":""
    },
    {
      "nombres":"MOSCOSO AYTE GRACIELA",
      "dni":40861964,
      "ieId":""
    },
    {
      "nombres":"SALAS APARICIO ALEXI",
      "dni":25310616,
      "ieId":""
    },
    {
      "nombres":"HANCCO CACERES PASCUAL RENEE",
      "dni":25303885,
      "ieId":""
    },
    {
      "nombres":"IBARRA CALLAÑAUPA GRACIELA CORINA",
      "dni":25304461,
      "ieId":""
    },
    {
      "nombres":"ACERO VELO CIRO JIRON",
      "dni":1869356,
      "ieId":""
    },
    {
      "nombres":"ALANYA HUALLPAYUNCA JACINTO",
      "dni":25311728,
      "ieId":""
    },
    {
      "nombres":"ANCO FLORES VICTOR HUGO",
      "dni":1866855,
      "ieId":""
    },
    {
      "nombres":"ASTETE JUAREZ EDITH",
      "dni":23946900,
      "ieId":""
    },
    {
      "nombres":"AYMA CCUIRO JUAN DE LA CRUZ",
      "dni":25308491,
      "ieId":""
    },
    {
      "nombres":"CACERES FLORES KARIN",
      "dni":23998727,
      "ieId":""
    },
    {
      "nombres":"CAMPANA UGARTE MARITZA",
      "dni":24712368,
      "ieId":""
    },
    {
      "nombres":"CHILLITUPA CARRASCO GLORIA ELENA",
      "dni":40472393,
      "ieId":""
    },
    {
      "nombres":"CUMPA VERA ELENA",
      "dni":25321155,
      "ieId":""
    },
    {
      "nombres":"CUNO GONZALES ANGEL",
      "dni":23877056,
      "ieId":""
    },
    {
      "nombres":"CUSIHUAMAN SALLO VALENTIN",
      "dni":23803442,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE HUAMANI FREDDY GARY",
      "dni":42084439,
      "ieId":""
    },
    {
      "nombres":"FARFAN SULLCA GERMAN",
      "dni":23907836,
      "ieId":""
    },
    {
      "nombres":"GIBAJA NAVARRO ALFREDO ENRIQUE",
      "dni":24987607,
      "ieId":""
    },
    {
      "nombres":"HUANCA GONZALES ROSA MARIA",
      "dni":23936350,
      "ieId":""
    },
    {
      "nombres":"LEZAMA ALBARRACIN NILDA",
      "dni":23864250,
      "ieId":""
    },
    {
      "nombres":"LOZANO PULLA MARIZA",
      "dni":25003096,
      "ieId":""
    },
    {
      "nombres":"MAMANI CATI FRANCISCO",
      "dni":2424307,
      "ieId":""
    },
    {
      "nombres":"MAMANI USECA SALVADOR ARTEMIO",
      "dni":1863190,
      "ieId":""
    },
    {
      "nombres":"MEZA QUISPE ROBERTO PABLO",
      "dni":24711695,
      "ieId":""
    },
    {
      "nombres":"OLIVERA BRAVO JUAN ABELARDO",
      "dni":25310204,
      "ieId":""
    },
    {
      "nombres":"PACHECO CHAVEZ JOB DAVID",
      "dni":23911459,
      "ieId":""
    },
    {
      "nombres":"PALOMINO DAVALOS YSAIAS",
      "dni":23980984,
      "ieId":""
    },
    {
      "nombres":"PALOMINO GONZALES ROBERTO",
      "dni":23828775,
      "ieId":""
    },
    {
      "nombres":"PEREZ ALVARADO OMAR HUMBERTO",
      "dni":23869172,
      "ieId":""
    },
    {
      "nombres":"PEÑALVA IBARRA LILIA",
      "dni":23997559,
      "ieId":""
    },
    {
      "nombres":"QUECAÑO DE LAVILLA MARIA NIEVES",
      "dni":23962979,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN QUISPE TOMAS",
      "dni":25307907,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ HUANCAHUIRE JULIAN",
      "dni":23852523,
      "ieId":""
    },
    {
      "nombres":"ROJAS ARANYA JUSTINA",
      "dni":23879940,
      "ieId":""
    },
    {
      "nombres":"SEQUEIROS LAUREL FELIPE",
      "dni":23913412,
      "ieId":""
    },
    {
      "nombres":"SILVA ZALDIVAR DELIA",
      "dni":25003629,
      "ieId":""
    },
    {
      "nombres":"SOSA ARAGON SIRA CLARA",
      "dni":23838958,
      "ieId":""
    },
    {
      "nombres":"SUPO AMANQUI BENITO",
      "dni":30836566,
      "ieId":""
    },
    {
      "nombres":"VARGAS CORNEJO ABEL",
      "dni":24966547,
      "ieId":""
    },
    {
      "nombres":"YABAR VILLA JOSE JAIME",
      "dni":40075958,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA ALVAREZ LUIS NICANOR",
      "dni":23856468,
      "ieId":""
    },
    {
      "nombres":"ASTORGA CESPEDES ELSA ISABEL",
      "dni":25327045,
      "ieId":""
    },
    {
      "nombres":"CCOYURI GONZALES MARIA ELIZABETH",
      "dni":40304535,
      "ieId":""
    },
    {
      "nombres":"CHACON CHAÑI FROILAN ROQUE",
      "dni":42887154,
      "ieId":""
    },
    {
      "nombres":"CONDORI CONDORI MANUEL",
      "dni":24703026,
      "ieId":""
    },
    {
      "nombres":"CUEVA QUILLAHUAMAN GRACIELA",
      "dni":23976202,
      "ieId":""
    },
    {
      "nombres":"HUARACHA COVARRUBIAS ELSA",
      "dni":25304251,
      "ieId":""
    },
    {
      "nombres":"LLACTA TOVAR LENINA IRIS",
      "dni":40952408,
      "ieId":""
    },
    {
      "nombres":"LUNA ORTIZ LUIS ENRIQUE",
      "dni":23979907,
      "ieId":""
    },
    {
      "nombres":"MAQUERA ESQUIVEL LUZ MARINA",
      "dni":23925794,
      "ieId":""
    },
    {
      "nombres":"MENGOA MONTES DE OCA FREDYJOB",
      "dni":1772801,
      "ieId":""
    },
    {
      "nombres":"PFARI LEVITA CRISTOBAL",
      "dni":25307877,
      "ieId":""
    },
    {
      "nombres":"SILVA FARFAN FISCHER PECK",
      "dni":25315176,
      "ieId":""
    },
    {
      "nombres":"TEJADA AUCCACUSI ROSALYNN",
      "dni":23999204,
      "ieId":""
    },
    {
      "nombres":"VARGAS JARA CARMEN MONICA",
      "dni":23847671,
      "ieId":""
    },
    {
      "nombres":"AYALA CARRASCO ANGEL DONATO",
      "dni":23847680,
      "ieId":""
    },
    {
      "nombres":"DIAZ CHIPANA HENRY ROGER",
      "dni":40461984,
      "ieId":""
    },
    {
      "nombres":"QUISPE PUMAYALLI WILFREDO",
      "dni":40211103,
      "ieId":""
    },
    {
      "nombres":"SOTO PAUCAR RUTH MARINA",
      "dni":41403638,
      "ieId":""
    },
    {
      "nombres":"TOLEDO VASQUEZ KARINA",
      "dni":44022920,
      "ieId":""
    },
    {
      "nombres":"DURAN CABALLERO NILDA ZORAIDA",
      "dni":23824257,
      "ieId":""
    },
    {
      "nombres":"HUAMAN DURAN JOSE",
      "dni":25321637,
      "ieId":""
    },
    {
      "nombres":"MOLERO VEGA DAPHNEE",
      "dni":24719335,
      "ieId":""
    },
    {
      "nombres":"QUISPE QUISPE RENE",
      "dni":40481256,
      "ieId":""
    },
    {
      "nombres":"YBERICO GUEVARA JAIME SILVERIO",
      "dni":25319219,
      "ieId":""
    },
    {
      "nombres":"CABALLERO CONCHA YULISA",
      "dni":43410114,
      "ieId":""
    },
    {
      "nombres":"CARDENAS LINARES MAGNA",
      "dni":25305150,
      "ieId":""
    },
    {
      "nombres":"MORA CORDOVA MARIA ANTONIETA",
      "dni":40232198,
      "ieId":""
    },
    {
      "nombres":"SERRANO PUNCCA VILMA",
      "dni":40748271,
      "ieId":""
    },
    {
      "nombres":"ITURRIAGA AYRAMPO ROXANA",
      "dni":42314828,
      "ieId":""
    },
    {
      "nombres":"ALMANZA ZUÑIGA ANGELICA",
      "dni":40991239,
      "ieId":""
    },
    {
      "nombres":"ECHARRI ROZAS GENY MARLENY",
      "dni":25302459,
      "ieId":""
    },
    {
      "nombres":"FLOREZ BOCANGEL MARIA",
      "dni":25304088,
      "ieId":""
    },
    {
      "nombres":"LOVATON BOCANGEL EDELMIRA",
      "dni":25303707,
      "ieId":""
    },
    {
      "nombres":"MAGUIÑA PIMENTEL MARIELA",
      "dni":25310640,
      "ieId":""
    },
    {
      "nombres":"OLAZABAL DELGADO NEPTALI",
      "dni":25304712,
      "ieId":""
    },
    {
      "nombres":"VILLENA HUAMAN MARIO",
      "dni":25301044,
      "ieId":""
    },
    {
      "nombres":"ZUNIGA MASIAS SUCY YOVENCA",
      "dni":40924626,
      "ieId":""
    },
    {
      "nombres":"AGUILAR LUCANA JUAN PABLO",
      "dni":25313694,
      "ieId":""
    },
    {
      "nombres":"AGUILAR LUCANA MARIO",
      "dni":25312048,
      "ieId":""
    },
    {
      "nombres":"ATAPAUCAR YAÑAC LUZ MARINA",
      "dni":25314904,
      "ieId":""
    },
    {
      "nombres":"CCOISO ARCONDO MARIO",
      "dni":25301407,
      "ieId":""
    },
    {
      "nombres":"CONDORI RAMOS GLADYS",
      "dni":24007312,
      "ieId":""
    },
    {
      "nombres":"DORADO CCORIMANYA FRANCISCA ALICIA",
      "dni":25309954,
      "ieId":""
    },
    {
      "nombres":"FARFAN VARGAS EMMA CONCEPCION",
      "dni":24670424,
      "ieId":""
    },
    {
      "nombres":"HUILLCANINA GIL LIBERATA",
      "dni":25301036,
      "ieId":""
    },
    {
      "nombres":"MORALES ABAL RINA",
      "dni":25301548,
      "ieId":""
    },
    {
      "nombres":"RAMOS MASIAS AUGUSTA",
      "dni":25319543,
      "ieId":""
    },
    {
      "nombres":"TORRES NAVARRO KARINA",
      "dni":43419433,
      "ieId":""
    },
    {
      "nombres":"HUAYHUA CCAHUANA YENY EMPERATRIZ",
      "dni":25301143,
      "ieId":""
    },
    {
      "nombres":"YARIN QUISPE ALBERTO",
      "dni":40997003,
      "ieId":""
    },
    {
      "nombres":"AGUILAR SANTANDER FLORENCIO",
      "dni":25300294,
      "ieId":""
    },
    {
      "nombres":"BERRIO CASTRO MARIO ALFREDO",
      "dni":23872735,
      "ieId":""
    },
    {
      "nombres":"CHAVEZ ATAUCHI YHENY",
      "dni":25326234,
      "ieId":""
    },
    {
      "nombres":"FARFAN ZAMBRANO MATILDE",
      "dni":25303921,
      "ieId":""
    },
    {
      "nombres":"JARAMILLO PAREDES LOURDES",
      "dni":23926987,
      "ieId":""
    },
    {
      "nombres":"MAMANI QUISPE VICTORIA",
      "dni":40006154,
      "ieId":""
    },
    {
      "nombres":"QUISPE CAHUANA ULDARICO",
      "dni":25303996,
      "ieId":""
    },
    {
      "nombres":"RADO ZUNIGA WILBERT",
      "dni":25328798,
      "ieId":""
    },
    {
      "nombres":"SULLCA MISME RONY",
      "dni":42482946,
      "ieId":""
    },
    {
      "nombres":"YARIN PEREZ FEDERICO FRUCTUOSO",
      "dni":25302917,
      "ieId":""
    },
    {
      "nombres":"ACCOSTUPA PUMASUPA ADRIAN",
      "dni":80097015,
      "ieId":""
    },
    {
      "nombres":"CALDERON GUARDAPUCLLA MELITON",
      "dni":25300189,
      "ieId":""
    },
    {
      "nombres":"CONCHOY OCHOA ALEJANDRA",
      "dni":25319788,
      "ieId":""
    },
    {
      "nombres":"COVARRUBIAS GAMARRA RAUL FROILAN",
      "dni":25303749,
      "ieId":""
    },
    {
      "nombres":"LLAMACPONCCA CHILLITUPA ROSAURO",
      "dni":25300067,
      "ieId":""
    },
    {
      "nombres":"MUÑIZ AUCCAYLLE MAURO WALDEMAR",
      "dni":23962963,
      "ieId":""
    },
    {
      "nombres":"TORRES CABRERA EMPERATRIZ",
      "dni":25305062,
      "ieId":""
    },
    {
      "nombres":"CARDENAS SANTOS ANDRES ROLANDO",
      "dni":25309889,
      "ieId":""
    },
    {
      "nombres":"ARROYO QUISPE MARIA",
      "dni":10422323,
      "ieId":""
    },
    {
      "nombres":"CONDORI FLOREZ JUANA FRANCISCA",
      "dni":40458412,
      "ieId":""
    },
    {
      "nombres":"DORADO LEZAMA YANET",
      "dni":25328771,
      "ieId":""
    },
    {
      "nombres":"MELGAREJO SANCHEZ NERIO",
      "dni":25328605,
      "ieId":""
    },
    {
      "nombres":"RADO VILLALOBOS LEONIDAS",
      "dni":25326505,
      "ieId":""
    },
    {
      "nombres":"VALDERRAMA CARRASCO JUAN JUSTO",
      "dni":25314803,
      "ieId":""
    },
    {
      "nombres":"VILLAR VELARDE HUGO",
      "dni":25315093,
      "ieId":""
    },
    {
      "nombres":"MENACHO FARFAN RICARDO HUMBERTO",
      "dni":25303742,
      "ieId":""
    },
    {
      "nombres":"RAMOS CABALLERO ALIPIO",
      "dni":25301140,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI SONCCO GRISELDA VILMA",
      "dni":25301888,
      "ieId":""
    },
    {
      "nombres":"BEGAZO LOAIZA NANCY",
      "dni":40401336,
      "ieId":""
    },
    {
      "nombres":"CALLAÑAUPA QUILLAHUAMAN YGNACIA",
      "dni":23825671,
      "ieId":""
    },
    {
      "nombres":"CARBAJAL TORRES MARCO ANTONIO",
      "dni":23814530,
      "ieId":""
    },
    {
      "nombres":"CHATTA CALLAPIÑA ROSS MERY",
      "dni":40347179,
      "ieId":""
    },
    {
      "nombres":"CRUZ CAHUANA YLDA RITA",
      "dni":1324714,
      "ieId":""
    },
    {
      "nombres":"CUSI TIMPO JOSE CARLOS",
      "dni":24717239,
      "ieId":""
    },
    {
      "nombres":"FLOREZ PACHECO ELIO",
      "dni":25310710,
      "ieId":""
    },
    {
      "nombres":"GUEVARA MONTESINOS YURI",
      "dni":25323244,
      "ieId":""
    },
    {
      "nombres":"LICUONA GARCIA MARITZA",
      "dni":24003735,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ QUISPE SOFIA",
      "dni":25320225,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES ESCALANTE GLADIZ JULIA",
      "dni":25211209,
      "ieId":""
    },
    {
      "nombres":"ROMERO TTITO LUZ MARINA",
      "dni":40349745,
      "ieId":""
    },
    {
      "nombres":"SAAVEDRA ORTIZ DE ORUE ELENA",
      "dni":25313775,
      "ieId":""
    },
    {
      "nombres":"VELASQUEZ TTITO LUZ EVELIN",
      "dni":40965343,
      "ieId":""
    },
    {
      "nombres":"VILLAFUERTE NAVARRETE ALFREDO",
      "dni":25321777,
      "ieId":""
    },
    {
      "nombres":"ZAMALLOA GAMARRA VERONICA",
      "dni":42723280,
      "ieId":""
    },
    {
      "nombres":"ATAULLUCO ARQQUE ROXANA",
      "dni":40281675,
      "ieId":""
    },
    {
      "nombres":"AYMA RAIME GENARO",
      "dni":25310488,
      "ieId":""
    },
    {
      "nombres":"BAEZ VIZARRETA MARIO",
      "dni":23844069,
      "ieId":""
    },
    {
      "nombres":"BORNAS MAMANI HERMELINDA",
      "dni":23949986,
      "ieId":""
    },
    {
      "nombres":"CCAPATINTA NINANTAY ROBERTO",
      "dni":23854499,
      "ieId":""
    },
    {
      "nombres":"CURASI BEJAR ROBERTO",
      "dni":23945673,
      "ieId":""
    },
    {
      "nombres":"GUTIERREZ HUAMAN JUDITH",
      "dni":23948603,
      "ieId":""
    },
    {
      "nombres":"LOAIZA PERCCA CEFERINA",
      "dni":23825414,
      "ieId":""
    },
    {
      "nombres":"MAMANI AYMA HILDA BEATRIZ",
      "dni":25321146,
      "ieId":""
    },
    {
      "nombres":"MANYA CHECORI ADELAIDE",
      "dni":42808092,
      "ieId":""
    },
    {
      "nombres":"MIRANDA FARFAN ENRIQUE ISAIAS",
      "dni":23877535,
      "ieId":""
    },
    {
      "nombres":"QUILLAHUAMAN HUALLPAYUN MARIO",
      "dni":23802307,
      "ieId":""
    },
    {
      "nombres":"QUISPE VILCA FIDEL",
      "dni":24003303,
      "ieId":""
    },
    {
      "nombres":"TORRES QUISPE YOLI RITA",
      "dni":29424393,
      "ieId":""
    },
    {
      "nombres":"VARGAS PANTOJA YONI",
      "dni":23978869,
      "ieId":""
    },
    {
      "nombres":"WARTHON VARGAS LUZ ANDINA",
      "dni":31545786,
      "ieId":""
    },
    {
      "nombres":"ARNALDO ARAUJO DAISY MONICA",
      "dni":23860540,
      "ieId":""
    },
    {
      "nombres":"GUARDAPUCLLA MASIAS AIDEE",
      "dni":24996704,
      "ieId":""
    },
    {
      "nombres":"MARTINEZ AVILES CARMELA",
      "dni":25321313,
      "ieId":""
    },
    {
      "nombres":"MESCCO HUALLPAYUNCA WILFREDO",
      "dni":40638355,
      "ieId":""
    },
    {
      "nombres":"NINA GONZALES JOSE WASHINGTON",
      "dni":25321487,
      "ieId":""
    },
    {
      "nombres":"ROMERO MOLERO WANDA ALY",
      "dni":24712664,
      "ieId":""
    },
    {
      "nombres":"SUCSO HUAMAN ELVIN",
      "dni":25328848,
      "ieId":""
    },
    {
      "nombres":"VIVANCO CARMONA MILKA YVONNE",
      "dni":23919381,
      "ieId":""
    },
    {
      "nombres":"CARDENAS SALOMA PERCY",
      "dni":25310300,
      "ieId":""
    },
    {
      "nombres":"CARDENAS SALOMA WILFREDO",
      "dni":42308223,
      "ieId":""
    },
    {
      "nombres":"GUARDAPUCLLA MORMONTOY JOSEFINA",
      "dni":25321341,
      "ieId":""
    },
    {
      "nombres":"HUAMAN JAIMES FABIAN",
      "dni":40135439,
      "ieId":""
    },
    {
      "nombres":"LLOCLLE HUANCA CESAR",
      "dni":23893970,
      "ieId":""
    },
    {
      "nombres":"LOPEZ HUAMANRAYME RICHAR",
      "dni":24583700,
      "ieId":""
    },
    {
      "nombres":"MOSQUERA AUCCAPUMA MARIA ANTONIETA",
      "dni":23927171,
      "ieId":""
    },
    {
      "nombres":"VARGAS CHAVEZ DANY GALU",
      "dni":41702317,
      "ieId":""
    },
    {
      "nombres":"DELGADO COBOS MARISOL",
      "dni":24486859,
      "ieId":""
    },
    {
      "nombres":"JARA ESTRADA ANA LUISA",
      "dni":5071296,
      "ieId":""
    },
    {
      "nombres":"GUZMAN GUZMAN ISABEL MERCEDES",
      "dni":40038059,
      "ieId":""
    },
    {
      "nombres":"MILON GAMARRA SONIA ASUNCION",
      "dni":23841220,
      "ieId":""
    },
    {
      "nombres":"PAUCAR FERNANDEZ BACA MILENA",
      "dni":23960204,
      "ieId":""
    },
    {
      "nombres":"POLAR AIQUIPA ROSA MARIA",
      "dni":23979079,
      "ieId":""
    },
    {
      "nombres":"RAMOS FLORES MARIA LUISA",
      "dni":23942641,
      "ieId":""
    },
    {
      "nombres":"TTICA ARCONDO YOVANA",
      "dni":45597366,
      "ieId":""
    },
    {
      "nombres":"QUISPIALAYA ESCOBAR CECILIA ELIZABETH",
      "dni":23808081,
      "ieId":""
    },
    {
      "nombres":"ROJAS DE GIBAJA LIDIA DOMINGA",
      "dni":25303898,
      "ieId":""
    },
    {
      "nombres":"VARGAS MENDOZA ANA MARIA",
      "dni":25328758,
      "ieId":""
    },
    {
      "nombres":"APAZA DIAZ DINA MARIA",
      "dni":42544226,
      "ieId":""
    },
    {
      "nombres":"RIVERA SILVA HAYDEE PATRICIA",
      "dni":23983431,
      "ieId":""
    },
    {
      "nombres":"PUMA BEJAR ROSA",
      "dni":23920642,
      "ieId":""
    },
    {
      "nombres":"CONCHATUPA TUPAYACHI BEHELINDA",
      "dni":43681748,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR BANDA MAGDA",
      "dni":25320291,
      "ieId":""
    },
    {
      "nombres":"ATAUSINCHI CABRERA ELVIRA",
      "dni":25301184,
      "ieId":""
    },
    {
      "nombres":"BEJAR MORMONTOY HAYDEE",
      "dni":25304864,
      "ieId":""
    },
    {
      "nombres":"DELGADO ACURIO YONI",
      "dni":25303427,
      "ieId":""
    },
    {
      "nombres":"GUEVARA GUEVARA JORGE ALBERTO",
      "dni":25300259,
      "ieId":""
    },
    {
      "nombres":"MASIAS LEZAMA EUSTAQUIO",
      "dni":25318441,
      "ieId":""
    },
    {
      "nombres":"MASIAS TORRE ARMINDA",
      "dni":25300745,
      "ieId":""
    },
    {
      "nombres":"MEDRANO MAYHUA JANETT",
      "dni":23912429,
      "ieId":""
    },
    {
      "nombres":"MORA HINOJOSA ANTONIO ABAD",
      "dni":25302307,
      "ieId":""
    },
    {
      "nombres":"PACCO LETONA DORIS",
      "dni":24967342,
      "ieId":""
    },
    {
      "nombres":"SANTANDER ATAUCHI NORA SONIA",
      "dni":25326304,
      "ieId":""
    },
    {
      "nombres":"YARIN ALAGON JULIO",
      "dni":25300931,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ MARQUINA JORGE JAVIER",
      "dni":25300383,
      "ieId":""
    },
    {
      "nombres":"CANTORAL ORE WENCESLAO",
      "dni":25310665,
      "ieId":""
    },
    {
      "nombres":"CARDENAS SALAS DE ARIZA FORTUNATA MERCEDES",
      "dni":25303511,
      "ieId":""
    },
    {
      "nombres":"DORADO CCORIMANYA FRANCISCO SALUSTIO",
      "dni":25308488,
      "ieId":""
    },
    {
      "nombres":"FERNANDEZ SAIHUA BLAZ",
      "dni":25319490,
      "ieId":""
    },
    {
      "nombres":"GUILLEN ORTIZ DE ORUE WILFREDO",
      "dni":43611330,
      "ieId":""
    },
    {
      "nombres":"JORGE OLIVERA ANTENOR",
      "dni":25310480,
      "ieId":""
    },
    {
      "nombres":"OLIVERA RICALDE NIEVES",
      "dni":25309637,
      "ieId":""
    },
    {
      "nombres":"ORMACHEA GAMARRA LUISA SOLEDAD",
      "dni":25321478,
      "ieId":""
    },
    {
      "nombres":"PELAYZA SOEL PEDRO",
      "dni":25320895,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA MISME FRANCISCA",
      "dni":25321184,
      "ieId":""
    },
    {
      "nombres":"PILARES TORRES SILVIA",
      "dni":23852669,
      "ieId":""
    },
    {
      "nombres":"BACA COVARRUBIAS MARGARITA",
      "dni":25318224,
      "ieId":""
    },
    {
      "nombres":"CHINO SONCCO VALENTINA",
      "dni":23882573,
      "ieId":""
    },
    {
      "nombres":"GRAJEDA RODRIGUEZ CARLOS RUTILIO",
      "dni":25303136,
      "ieId":""
    },
    {
      "nombres":"MORALES ABAL ARTURO",
      "dni":25305160,
      "ieId":""
    },
    {
      "nombres":"RAYA SALAS MARITZA",
      "dni":42398811,
      "ieId":""
    },
    {
      "nombres":"VILLAR VELARDE LUZ MARINA",
      "dni":25304564,
      "ieId":""
    },
    {
      "nombres":"CHAMPI OCSA LUCILA",
      "dni":25319982,
      "ieId":""
    },
    {
      "nombres":"HUALLPACUNA MARCAVILLAC MANUEL",
      "dni":25318534,
      "ieId":""
    },
    {
      "nombres":"LEVITA CCORIMANYA DINA",
      "dni":42727330,
      "ieId":""
    },
    {
      "nombres":"PARI ARTEAGA ROSA",
      "dni":25303374,
      "ieId":""
    },
    {
      "nombres":"SANCHEZ LOAIZA YOVANA",
      "dni":25304394,
      "ieId":""
    },
    {
      "nombres":"VEGA HUALLPA MARIANO",
      "dni":25301116,
      "ieId":""
    },
    {
      "nombres":"YARIN ALAGON SANTOS",
      "dni":25301416,
      "ieId":""
    },
    {
      "nombres":"CENTENO CORDOVA SIXTA",
      "dni":25318177,
      "ieId":""
    },
    {
      "nombres":"GIBAJA LUNA MAXIMILIANA NELLY",
      "dni":25309742,
      "ieId":""
    },
    {
      "nombres":"PAUCAR CERVAN JUANA MARIA",
      "dni":41405111,
      "ieId":""
    },
    {
      "nombres":"BEJAR MORMONTOY LINO NICANOR",
      "dni":25300029,
      "ieId":""
    },
    {
      "nombres":"CUBA VILCA YURI",
      "dni":29597664,
      "ieId":""
    },
    {
      "nombres":"CUSIHUALLPA GIL MARIO",
      "dni":24997638,
      "ieId":""
    },
    {
      "nombres":"CUSSI TIMPO ELIKA",
      "dni":24717048,
      "ieId":""
    },
    {
      "nombres":"DURAND FLORES YURI ROBINSON",
      "dni":25305045,
      "ieId":""
    },
    {
      "nombres":"PEÑALVA FERNANDEZ ROSARIO",
      "dni":23913606,
      "ieId":""
    },
    {
      "nombres":"DIAZ QUISPE VILMA",
      "dni":46913462,
      "ieId":""
    },
    {
      "nombres":"HANCO HUAMANI OLGA",
      "dni":40449248,
      "ieId":""
    },
    {
      "nombres":"HINOJOSA ALEGRE SILVIA",
      "dni":25326485,
      "ieId":""
    },
    {
      "nombres":"MAR ABARCA NARCISO",
      "dni":25316683,
      "ieId":""
    },
    {
      "nombres":"MASIAS CONDORI MAURO CRISOSTOMO",
      "dni":24486589,
      "ieId":""
    },
    {
      "nombres":"NINANTAY PEDRAZA RICHARD",
      "dni":25327308,
      "ieId":""
    },
    {
      "nombres":"PAUCAR QUISPE CARMEN ROSA",
      "dni":25321573,
      "ieId":""
    },
    {
      "nombres":"QUISPE AGUILAR JOSE CARLOS",
      "dni":43658444,
      "ieId":""
    },
    {
      "nombres":"QUISPE BECERRA NANCY ROSA",
      "dni":23976902,
      "ieId":""
    },
    {
      "nombres":"SAIRE APUMAYTA HEBER",
      "dni":23889992,
      "ieId":""
    },
    {
      "nombres":"CHULLO MONTEAGUDO HELEN YANNIRA",
      "dni":47671130,
      "ieId":""
    },
    {
      "nombres":"QUISPE HUAMAN SAMUEL",
      "dni":24494593,
      "ieId":""
    },
    {
      "nombres":"CCONISLLA PALOMINO GAVINO",
      "dni":25316319,
      "ieId":""
    },
    {
      "nombres":"ATAUCHI SONCCO ROSANNA",
      "dni":25304784,
      "ieId":""
    },
    {
      "nombres":"MINAYA OTAZU HILDA LEONOR",
      "dni":25305008,
      "ieId":""
    },
    {
      "nombres":"QUISPE LEVA MARCELINA",
      "dni":24387094,
      "ieId":""
    },
    {
      "nombres":"ARAGON RAMIREZ CELINDA",
      "dni":25327566,
      "ieId":""
    },
    {
      "nombres":"AYALA MARIACA HEBER",
      "dni":23826547,
      "ieId":""
    },
    {
      "nombres":"CHALLCO DIAZ GABINO",
      "dni":25300857,
      "ieId":""
    },
    {
      "nombres":"CHIPANA GALIANO SAMANTA",
      "dni":25321164,
      "ieId":""
    },
    {
      "nombres":"CUSIPAUCAR VILCA JESSICA GIOVANNA",
      "dni":40525873,
      "ieId":""
    },
    {
      "nombres":"ESPINOZA YARIN BELU",
      "dni":41204879,
      "ieId":""
    },
    {
      "nombres":"GALLEGOS QUIPO ALBERTO",
      "dni":42290747,
      "ieId":""
    },
    {
      "nombres":"HUACARPUMA HUILLCA AURELIO",
      "dni":40660991,
      "ieId":""
    },
    {
      "nombres":"LOZANO LAZARTE GLUDY",
      "dni":24704217,
      "ieId":""
    },
    {
      "nombres":"MARQUINA MORA DORIS",
      "dni":25326184,
      "ieId":""
    },
    {
      "nombres":"MEZA SAIRE ELSA",
      "dni":23955010,
      "ieId":""
    },
    {
      "nombres":"OLIVERA GUTIERREZ LUZ MARINA",
      "dni":23851410,
      "ieId":""
    },
    {
      "nombres":"TAGLE GUTIERREZ LUZ MAGDALENA",
      "dni":25321099,
      "ieId":""
    },
    {
      "nombres":"ZUÑIGA ESCOBEDO WILBERT",
      "dni":25324107,
      "ieId":""
    },
    {
      "nombres":"TORRES USCAMAYTA LOURDES",
      "dni":25326216,
      "ieId":""
    },
    {
      "nombres":"RODRIGUEZ MORA WILBERT",
      "dni":25300765,
      "ieId":""
    },
    {
      "nombres":"ALVAREZ JURADO ASUNCION",
      "dni":25301205,
      "ieId":""
    },
    {
      "nombres":"GIRALDO GIRONDAS VICTOR",
      "dni":25300690,
      "ieId":""
    },
    {
      "nombres":"HANCO HUAMANI IMELDA",
      "dni":25315042,
      "ieId":""
    },
    {
      "nombres":"RIOS LOVATON JULIO",
      "dni":25304020,
      "ieId":""
    },
    {
      "nombres":"BACA MAR LILIBHETS",
      "dni":40686148,
      "ieId":""
    },
    {
      "nombres":"QUIÑONES CARDENAS FREDDY",
      "dni":25321472,
      "ieId":""
    },
    {
      "nombres":"CALLAÑAUPA CARDENAS HILDA",
      "dni":25315188,
      "ieId":""
    },
    {
      "nombres":"CHOQUENAIRA CCAHUANA ROLANDO",
      "dni":25311873,
      "ieId":""
    },
    {
      "nombres":"IBARRA PUMAYALLI YOLANDA",
      "dni":25304485,
      "ieId":""
    },
    {
      "nombres":"SALAS PEREZ WILBERTH",
      "dni":25319533,
      "ieId":""
    },
    {
      "nombres":"CASTILLO ESPINOZA DELIA",
      "dni":25318234,
      "ieId":""
    },
    {
      "nombres":"ROJAS CONCHA BERTHA",
      "dni":25310700,
      "ieId":""
    },
    {
      "nombres":"TAPIA YUPANQUI MARIANO",
      "dni":25303436,
      "ieId":""
    },
    {
      "nombres":"OTAZU MORALES VETYA CATIANA",
      "dni":40228309,
      "ieId":""
    },
    {
      "nombres":"DURAND ZAMALLOA GONZALO EDUARDO",
      "dni":25303331,
      "ieId":""
    },
    {
      "nombres":"CANSAYA CALLOHUANCA MARIA ESTHER",
      "dni":23808729,
      "ieId":""
    },
    {
      "nombres":"LOAYZA DIAZ MARTHA",
      "dni":25321457,
      "ieId":""
    },
    {
      "nombres":"PEDRAZA HUALLPACUNA FORTUNATO",
      "dni":25318836,
      "ieId":""
    },
    {
      "nombres":"ARANIBAR ESPINOZA PEDRO",
      "dni":7311228,
      "ieId":""
    },
    {
      "nombres":"BEJAR ROMERO EBERTH ANTONIO",
      "dni":23801371,
      "ieId":""
    },
    {
      "nombres":"CABRERA VIOLETA PEDRO FERNANDO",
      "dni":28206603,
      "ieId":""
    },
    {
      "nombres":"CANDIA CCOTO PERCY",
      "dni":23975419,
      "ieId":""
    },
    {
      "nombres":"CANDIA CCOTO VILMA ISABEL",
      "dni":40839326,
      "ieId":""
    },
    {
      "nombres":"CCOPA HUILLCA OLGA LIDIA",
      "dni":24390606,
      "ieId":""
    },
    {
      "nombres":"CHIPA DELGADO HANS",
      "dni":23978785,
      "ieId":""
    },
    {
      "nombres":"CHOQUE ARAPA YOBANA TERESA",
      "dni":23976511,
      "ieId":""
    },
    {
      "nombres":"CONCHA CARDENAS HERBERT",
      "dni":41405109,
      "ieId":""
    },
    {
      "nombres":"CUBA ALFARO VERONIKA LUCY",
      "dni":23983537,
      "ieId":""
    },
    {
      "nombres":"FLORES KJURO FELIX",
      "dni":23989126,
      "ieId":""
    },
    {
      "nombres":"HUILLCANINA MIRANO CARLOS",
      "dni":25000387,
      "ieId":""
    },
    {
      "nombres":"MAMANI TERRAZAS EUSEBIO",
      "dni":1545306,
      "ieId":""
    },
    {
      "nombres":"OCHOA OLIVERA AUDRY",
      "dni":41164499,
      "ieId":""
    },
    {
      "nombres":"QUISPE MAMANI ALICIA",
      "dni":40716209,
      "ieId":""
    },
    {
      "nombres":"QUISPIROCA HUANCA HILDA SUSANA",
      "dni":42275354,
      "ieId":""
    },
    {
      "nombres":"RAMIREZ DIAZ HORACIO",
      "dni":23985733,
      "ieId":""
    },
    {
      "nombres":"TOCRE TUPAYACHI TOMAS",
      "dni":25327528,
      "ieId":""
    },
    {
      "nombres":"ALCOS QUISPE FELIPE HUGO",
      "dni":1855643,
      "ieId":""
    },
    {
      "nombres":"ALLENDE ORTIZ DE ORUE VICTOR RAUL",
      "dni":25304752,
      "ieId":""
    },
    {
      "nombres":"CAMERO MEDINA IGNACIA",
      "dni":40735027,
      "ieId":""
    },
    {
      "nombres":"CASTILLO MARTIARENA ROLANDO",
      "dni":25184783,
      "ieId":""
    },
    {
      "nombres":"CORDOVA CORNEJO NELLY",
      "dni":23824555,
      "ieId":""
    },
    {
      "nombres":"DE LA CRUZ PALOMINO VILMA YANET",
      "dni":23865719,
      "ieId":""
    },
    {
      "nombres":"FLOWER CARAZAS MANUEL FEDERICO",
      "dni":24388934,
      "ieId":""
    },
    {
      "nombres":"HUAYTA OJEDA GRISEL",
      "dni":45357654,
      "ieId":""
    },
    {
      "nombres":"MEDRANO OLIVERA JOSE LUIS",
      "dni":25318215,
      "ieId":""
    },
    {
      "nombres":"MIRANDA OLAVE EUFEMIA",
      "dni":23820634,
      "ieId":""
    },
    {
      "nombres":"MORALES CHAVEZ JULIA",
      "dni":23812189,
      "ieId":""
    },
    {
      "nombres":"MORMONTOY SANTANDER FLOR DE MARIA",
      "dni":23856043,
      "ieId":""
    },
    {
      "nombres":"OROE ROJAS YENI",
      "dni":25310550,
      "ieId":""
    },
    {
      "nombres":"QUIROZ VELEZ HENRY",
      "dni":23949370,
      "ieId":""
    },
    {
      "nombres":"QUISPE CCOPA ELIZABETH",
      "dni":23932894,
      "ieId":""
    },
    {
      "nombres":"QUISPE CINSANO MARIO",
      "dni":24391659,
      "ieId":""
    },
    {
      "nombres":"TICONA GOMEZ ROSA BLANCA",
      "dni":41287491,
      "ieId":""
    },
    {
      "nombres":"TUPAYACHI ROJAS YOLANDA",
      "dni":25303706,
      "ieId":""
    },
    {
      "nombres":"VALVERDE LOPEZ EDSON",
      "dni":23994070,
      "ieId":""
    },
    {
      "nombres":"ZEGARRA AGUIRRE YESSICA PAMELA",
      "dni":42723942,
      "ieId":""
    },
    {
      "nombres":"ALVARADO ATAULLUCO MARLENY",
      "dni":23939073,
      "ieId":""
    },
    {
      "nombres":"ARONI CHUNGA NICOLAS",
      "dni":2287728,
      "ieId":""
    },
    {
      "nombres":"CARDENAS QUISPE YESICA",
      "dni":40953057,
      "ieId":""
    },
    {
      "nombres":"CHUQUITAPA PAZ BELISARIO",
      "dni":24717397,
      "ieId":""
    },
    {
      "nombres":"CONDE MEZA NATIVIDAD",
      "dni":23920426,
      "ieId":""
    },
    {
      "nombres":"HUAMAN GUEVARA CIRO",
      "dni":25310221,
      "ieId":""
    },
    {
      "nombres":"LUQUE LIVISI RAYMUNDO LEONCIO",
      "dni":1543282,
      "ieId":""
    },
    {
      "nombres":"RAMOS VALDEZ CARLOS JUSTINO",
      "dni":40006155,
      "ieId":""
    },
    {
      "nombres":"APAZA QUISPE VICTOR RAUL",
      "dni":2041832,
      "ieId":""
    },
    {
      "nombres":"CHILE LOPEZ ELSA",
      "dni":40518018,
      "ieId":""
    },
    {
      "nombres":"CONCHA LOVATON MERCEDES",
      "dni":25318375,
      "ieId":""
    },
    {
      "nombres":"ESCALANTE PUMA CRISTOBAL",
      "dni":23877986,
      "ieId":""
    },
    {
      "nombres":"IDME RAMOS WILFREDO AUGUSTO",
      "dni":30833767,
      "ieId":""
    },
    {
      "nombres":"IPENZA TORBISCO LIZ",
      "dni":41133012,
      "ieId":""
    },
    {
      "nombres":"MACEDO SANCHEZ IVONNE",
      "dni":41715101,
      "ieId":""
    },
    {
      "nombres":"MOLLEHUANCA ALVARO EDGAR RURICK",
      "dni":44195409,
      "ieId":""
    },
    {
      "nombres":"POBLETE FARFAN YURI MIJAIL",
      "dni":23998164,
      "ieId":""
    },
    {
      "dni":23985680,
    },
    {