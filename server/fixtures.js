// Fixture Data.
if(Regiones.find({}).count() === 0) {
  regiones = [
    {"_id": "hxQgnvmw27NFK5dfF","nombre": "UGEL Cusco","codigo": "080001"},
    {"_id": "iYap52mjiozTM6psP","nombre": "UGEL Acomayo","codigo": "080002"},
    {"_id": "WrdbTESh8S5BA7TnS","nombre": "UGEL Anta","codigo": "080003"},
    {"_id": "NpusuKyT8ZhNvZ3N8","nombre": "UGEL Calca","codigo": "080004"},
    {"_id": "t4ciiym9xpSprd7Ao","nombre": "UGEL Canas","codigo": "080005"},
    {"_id": "A9tPrBvwi3JamXzYf","nombre": "UGEL Canchis","codigo": "080006"},
    {"_id": "qQDoscyjj6NABKxYi","nombre": "UGEL Chumbivilcas","codigo": "080007"},
    {"_id": "CXWM7nQnxTCWJCzbw","nombre": "UGEL Espinar","codigo": "080008"},
    {"_id": "TsFe8uDkgzRij9tit","nombre": "UGEL La Convencion","codigo": "080009"},
    {"_id": "aSrnTpe9jCeXik78r","nombre": "UGEL Paruro","codigo": "080010"},
    {"_id": "SxkuQRBornE7ydzno","nombre": "UGEL Paucartambo","codigo": "080011"},
    {"_id": "h28Hd3fsa3wayHojo","nombre": "UGEL Quispicanchi","codigo": "080012"},
    {"_id": "P3ZXwfdqmGhAPCdkE","nombre": "UGEL Urubamba","codigo": "080013"}
  ].forEach(function(r) {
    Regiones.insert(r);
  });
  
}

if(Provincias.find({}).count() === 0) {
  provincias = [
    {"_id": "kyZp8XraGYAkxEAvz","nombre": "Cusco","regionId": "hxQgnvmw27NFK5dfF"},
    {"_id": "wyLJfQizE6kdnZuDy","nombre": "Acomayo","regionId": "iYap52mjiozTM6psP"},
    {"_id": "hmFJc7dWCCHrGf82Y","nombre": "Anta","regionId": "WrdbTESh8S5BA7TnS"},
    {"_id": "Hcap6jrkhLdnYahGm","nombre": "Calca","regionId": "NpusuKyT8ZhNvZ3N8"},
    {"_id": "qZwGcYjurcjp7QP66","nombre": "Canas","regionId": "t4ciiym9xpSprd7Ao"},
    {"_id": "HKJdrb2XcthTYB5cQ","nombre": "Canchis","regionId": "A9tPrBvwi3JamXzYf"},
    {"_id": "JYY6C9yA6fjjcsGeF","nombre": "Chumbivilcas","regionId": "qQDoscyjj6NABKxYi"},
    {"_id": "FFxjtPii9AHGCLEfe","nombre": "Espinar","regionId": "CXWM7nQnxTCWJCzbw"},
    {"_id": "qvFmtM976RGNS8fC9","nombre": "La Convencion","regionId": "TsFe8uDkgzRij9tit"},
    {"_id": "ENvxePvTdDQ65zLh4","nombre": "Paruro","regionId": "aSrnTpe9jCeXik78r"},
    {"_id": "D2PhYJEYLpcJkduou","nombre": "Paucartambo","regionId": "SxkuQRBornE7ydzno"},
    {"_id": "3mjZzBp99CkjS3WHj","nombre": "Quispicanchi","regionId": "h28Hd3fsa3wayHojo"},
    {"_id": "y7KzAmSexa7bSyiKW","nombre": "Urubamba","regionId": "P3ZXwfdqmGhAPCdkE"}
  ].forEach(function(p) {
    Provincias.insert(p);
  });
}

if(Distritos.find({}).count() === 0) {
  distritos = [
    {"_id": "DvJw3qRG42fEWsgiu", "nombre": "219 Virgen de Fatima", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "jDRyHdFpTgAF6AnZ4", "nombre": "Accha", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "5Jy7rdroqcrZqJAJP", "nombre": "Acomayo", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "z4podpTxYRGugmh9W", "nombre": "Acopia", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "R3LQfEcghReTkCbvZ", "nombre": "Acos", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "b6fo5HsZTmZ9uZf65", "nombre": "Alto Pichigua", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "8WDcHG4r6kNuFXpaC", "nombre": "Ancahuasi", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "XzJ6FuidcYz3witFc", "nombre": "Andahuaylillas", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "4zP2RHdXjJxkB7Exk", "nombre": "Anta", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "a4QZ5zTNgrDLGhZng", "nombre": "Cachimayo", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "efCQDoSA6nHSA9kgG", "nombre": "Caicay", "provinciaId": "D2PhYJEYLpcJkduou"},
    {"_id": "mp2XoFtxa2jYfuYYA", "nombre": "Calca", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "7xRz9MncQmrxMsgxm", "nombre": "Camanti", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "DTPNesx9v96mmaXRy", "nombre": "Capacmarca", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "wKRKgSiA2PGXigraL", "nombre": "Ccapi", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "oZThc9Nr4qjeP6TM4", "nombre": "Ccarhuayo", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "Lnuoqnvj9LN5E3Fuu", "nombre": "Ccatca", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "AcC7W8XJMvYCbT73H", "nombre": "Ccorca", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "pQt2hnMcBWKoK6h8E", "nombre": "Challabamba", "provinciaId": "D2PhYJEYLpcJkduou"},
    {"_id": "GGeNcAHgxGiKAQW5Y", "nombre": "Chamaca", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "6qjsrbARsZABMPv2g", "nombre": "Checacupe", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "XYrXmiMxbhAQM67Ae", "nombre": "Checca", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "herMPD4FGHKhkFcqx", "nombre": "Chinchaypujio", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "9raWD7SWjtve4eX72", "nombre": "Chinchero", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "yvPS5RWGW5CdGptRY", "nombre": "Colcha", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "iyjmnjYXmJGnwvZvy", "nombre": "Colquemarca", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "J97FNRBafESCDbq3W", "nombre": "Colquepata", "provinciaId": "D2PhYJEYLpcJkduou"},
    {"_id": "sNPaeP8fnft38jvtK", "nombre": "Combapata", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "iYNe7o5c8YeZEvQTw", "nombre": "Condoroma", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "GG6yxEtZm9w5To9mK", "nombre": "Coporaque", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "gPKMcovYfGyw9ttNx", "nombre": "Coya", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "5xRDq3zxNPyZzwSEG", "nombre": "Cusco", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "6DkBmjB6tBftd9oK9", "nombre": "Cusipata", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "MFcC7M9Sad95P3F7d", "nombre": "Echarate", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "2w7Dps8KyYqsez5d9", "nombre": "Espinar", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "JLpYFRt6RtSn9cucL", "nombre": "Huanoquite", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "9pEFHMfxyChvaKBqw", "nombre": "Huaro", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "LZ4oy8XQq9cvpG6mJ", "nombre": "Huarocondo", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "3XY72c7L5uQey7dLK", "nombre": "Huayllabamba", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "2WRkHw6uFHCaQSNem", "nombre": "Huayopata", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "xEyt5Sf2ofJe9ep6e", "nombre": "Kimbiri", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "6ucDaPhe6WDnmZs2B", "nombre": "Kosñipata", "provinciaId": "D2PhYJEYLpcJkduou"},
    {"_id": "ypDASm8r42nD9F2ww", "nombre": "Kunturkanki", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "QskQ63hAPSjcMFwYM", "nombre": "Lamay", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "cQa89ijrrpKrxbCvc", "nombre": "Langui", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "JycHsLaNBNmawDALp", "nombre": "Lares", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "o5SHfnaJrnoZt7bnm", "nombre": "Layo", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "7SX5nzPkuGKzPMFqS", "nombre": "Limatambo", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "ufk99DxDyjdtyADPj", "nombre": "Livitaca", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "3JF5iqACzET4h4gtW", "nombre": "Llusco", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "N69Qa2GQapApDrHZM", "nombre": "Los Organos", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "MCWxAH76kX9pZYPrj", "nombre": "Lucre", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "Dr6SbL26wyXWAaETD", "nombre": "Machupicchu", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "sHtZ3mgiCuwtvJHb4", "nombre": "Marangani", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "Pzuvp8cSWCeyWXLBT", "nombre": "Maranura", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "DdMu5DaRDotPxvYpA", "nombre": "Maras", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "bpJN5ryNPd9tkaZzH", "nombre": "Marcapata", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "t4ej3C5FaPH6k6MAN", "nombre": "Mollepata", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "r7e8gf3ybyojqKWm2", "nombre": "Mosoc Llacta", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "mdtCzHQGoqAxQo8HQ", "nombre": "Ocobamba", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "q923FNwJ28QRCXG8Q", "nombre": "Ocongate", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "3W9Rb5wgr42idXzoB", "nombre": "Ocoruro", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "LZWaWfzwp2wY8XccR", "nombre": "Ollantaytambo", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "nT4oseDwLyjPkTC9u", "nombre": "Omacha", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "GfgBq2SWWGGjJEAe7", "nombre": "Oropesa", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "7tKSngGbkw4fnaucG", "nombre": "Paccaritambo", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "m5EATwqHaRmR8JviZ", "nombre": "Pallpata", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "MEvfbSJRWeN8YYvgc", "nombre": "Pampamarca", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "gvbJXgG6jattPXeEg", "nombre": "Pichari", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "QxEFevhxiktMfxwnn", "nombre": "Pichigua", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "hCEwkFFXZ9KX5gv25", "nombre": "Pillpinto", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "urQyh2iEbHXfTKerj", "nombre": "Pisac", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "NCjJ7Svt8sMyeTrzk", "nombre": "Pitumarca", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "RHz25wQPmkv2T8p8D", "nombre": "Pomacanchi", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "hmjFR742gqy58qs7d", "nombre": "Poroy", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "xJML5L6LAfj2iBuH7", "nombre": "Pucyura", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "idFLQ3EBuTWh9t9fh", "nombre": "Quehue", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "bFPXnkrDu4xDJYZ72", "nombre": "Quellouno", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "BDisAATdd5hiPbYKp", "nombre": "Quiquijana", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "QReGgPLZGBxL4hcF9", "nombre": "Rondocan", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "EkvheQQoqgdEzEZPJ", "nombre": "San Jeronimo", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "nRhoHgZjwqK935XrZ", "nombre": "San Pablo", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "tEiHMw8e7W7q7Fixw", "nombre": "San Pedro", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "pihCpFpKQMdueNj8Z", "nombre": "San Salvador", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "r2NrQCeY47M7xDEyj", "nombre": "San Sebastian", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "rwsZAyB99maZX9Gkq", "nombre": "Sangarara", "provinciaId": "wyLJfQizE6kdnZuDy"},
    {"_id": "5fsjdbmHLkfMNTCb3", "nombre": "Santa Ana", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "ihR5anjJWYF7sWRqy", "nombre": "Santa Teresa", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "iTnRJPoB6kLQeduCg", "nombre": "Santiago", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "dvZgvDA9WhqqxwEpd", "nombre": "Santo Tomas", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "iyKwf6PeF535LPraM", "nombre": "Saylla", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "DdnBeLtkDNxDAMQq2", "nombre": "SECTOR I LICENCIADOS S/N MZ T-5 LOTE 11", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "YmdE52CiX6xYKiFBe", "nombre": "Sicuani", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "FB49qSbiaNcoDimie", "nombre": "Suyckutambo", "provinciaId": "FFxjtPii9AHGCLEfe"},
    {"_id": "mGRZSC8D6qgNfuPnC", "nombre": "Taray", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "yZPNaDw6Qb84EEi3k", "nombre": "Tinta", "provinciaId": "HKJdrb2XcthTYB5cQ"},
    {"_id": "tmpQLkjFgp6wEmWTq", "nombre": "Tupac Amaru", "provinciaId": "qZwGcYjurcjp7QP66"},
    {"_id": "55Ne6hAMC4HPsRKs9", "nombre": "Urcos", "provinciaId": "3mjZzBp99CkjS3WHj"},
    {"_id": "rFpPBA4bQKxvGEy32", "nombre": "Urubamba", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "55fcPRPbJxvE96d3f", "nombre": "Velille", "provinciaId": "JYY6C9yA6fjjcsGeF"},
    {"_id": "2NCk7FgQ5rowDoS5w", "nombre": "Vilcabamba", "provinciaId": "qvFmtM976RGNS8fC9"},
    {"_id": "hpoYNi8BxupkYPqca", "nombre": "Wanchaq", "provinciaId": "kyZp8XraGYAkxEAvz"},
    {"_id": "Wfro9PgAmr5ZEo6qH", "nombre": "Yaurisque", "provinciaId": "ENvxePvTdDQ65zLh4"},
    {"_id": "rizP4MgB2wFok4ntb", "nombre": "Yucay", "provinciaId": "y7KzAmSexa7bSyiKW"},
    {"_id": "99YH2ttnYTH5gZu7k", "nombre": "Zurite", "provinciaId": "hmFJc7dWCCHrGf82Y"},
    {"_id": "LBvzZxScLpftK5Qct", "nombre": "Yanatile", "provinciaId": "Hcap6jrkhLdnYahGm"},
    {"_id": "A75R3LRLkQoGkkbnc", "nombre": "Yanaoca", "provinciaId": "qZwGcYjurcjp7QP66"}
  ].forEach(function(d) {
    Distritos.insert(d);
  });
}

if(Dominios.find({}).count() === 0) {
  dominios = [
    {"_id":"7ik77igvRr5b4QCRu","nombre":"2. Gestión de las condiciones para la mejora de los aprendizajes"},
    {"_id":"xHcWGbdv4PAA8AAE2","nombre":"3. Orientación de los Procesos Pedagógicos para la mejora de los aprendizajes"}
  ].forEach(function(d) {
    Dominios.insert(d);
  });
}

if(Aspectos.find({}).count() === 0) {
  aspectos = [
    {"_id": "FfkPaSkxDWMZSgqpg", "dominioId": "7ik77igvRr5b4QCRu", "nombre": "1.1. Planificación Institucional"},
    {"_id": "CBz2znS8f2Tr98j5y", "dominioId": "7ik77igvRr5b4QCRu", "nombre": "1.2. Participación Democrática"},
    {"_id": "A9pYcrpCeaEbX8dbY", "dominioId": "7ik77igvRr5b4QCRu", "nombre": "1.3. Condiciones Operativas para el Aprendizaje de Calidad"},
    {"_id": "jENbqyRd9eMhGpeLS", "dominioId": "xHcWGbdv4PAA8AAE2", "nombre": "3.1. Liderazgo de una comunidad de aprendizaje"},
    {"_id": "oKsucSpaZ3pTBjGeG", "dominioId": "", "nombre": "II. Organización y Clima del Aula"},
    {"_id": "fsMK7BKrinZ8DsDAW", "dominioId": "", "nombre": "VI. Participación en la Gestión Pedagógica de la Escuela"},
    {"_id": "SHWPG2B4EwMLSyhWA", "dominioId": "7ik77igvRr5b4QCRu", "nombre": "1.4. Evaluación de la Gestión y Rendición de Cuentas"},
    {"_id": "SmbHme7dHeNwhRuJP", "dominioId": "xHcWGbdv4PAA8AAE2", "nombre": "3.2. Gestión de Procesos Pedagógicos"},
    {"_id": "N5RZvKzKXmM6qpbnz", "dominioId": "", "nombre": "III. Planificación Curricular"},
    {"_id": "rEt7JJYxTaKjFeTvp", "dominioId": "", "nombre": "V. Evaluación del Aprendizaje"},
    {"_id": "EPSThx6HsqxJ4Gy9a", "nombre": "IV. Proceso de Enseñanza", "dominioId": ""}
  ].forEach(function(d) {
    Aspectos.insert(d);
  });
}

if(Indicadores.find({}).count() === 0) {
 indicadores = [
    {"_id": "928QrKSyPZGKN7ZkS", "aspectoId": "FfkPaSkxDWMZSgqpg","numero": "1", "descripcion": "Conduce de manera participativa la planificación institucional sobre la base del conocimiento de los procesos pedagógicos, el clima escolar, las características de los estudiantes y su entorno; y la orienta hacia el logro de metas de aprendizaje."},
    {"_id": "LcizaiBj9NkunhWoA", "aspectoId": "FfkPaSkxDWMZSgqpg","numero": "2", "descripcion": "Diseña de manera participativa los instrumentos de gestión escolar teniendo en cuenta las características del entorno institucional, familiar y social; estableciendo metas de aprendizaje."},
    {"_id": "oAnvvQTi7DKoENnGT", "aspectoId": "oKsucSpaZ3pTBjGeG","numero": "1", "descripcion": "Organiza el aula y otros espacios (sectores) de forma segura, accesible y adecuada para el trabajo pedagógico y el aprendizaje, atendiendo a la diversidad."},
    {"_id": "FPHJLGFNFcBrjzBoQ", "aspectoId": "oKsucSpaZ3pTBjGeG","numero": "2", "descripcion": "Construye, de manera asertiva y empática, relaciones interpersonales con y entre los estudiantes, basados en el afecto, la justifica, la confianza, el respeto mutuo y la colaboración basados en el reconocimiento de la diversidad."},
    {"_id": "iPnqpagB5BDsW6EK8", "aspectoId": "oKsucSpaZ3pTBjGeG","numero": "3", "descripcion": "Orienta su práctica a conseguir logros en sus estudiantes y les comunica altas expectativas sobre sus posibilidades de aprendizaje."},
    {"_id": "GdK7J4moxFYE7B8Ex", "aspectoId": "oKsucSpaZ3pTBjGeG","numero": "4", "descripcion": "Genera relaciones de respeto, cooperación y soporte entre estudiantes."},
    {"_id": "tyY2HPTSok2vrwiWa", "aspectoId": "oKsucSpaZ3pTBjGeG","numero": "5", "descripcion": "Resuelve conflictos en diálogo con los estudiantes sobre la base de criterios éticos, normas concertadas de convivencia, códigos culturales y mecanismos pacíficos."},
    {"_id": "fapKGFcMvHAiNfh8d", "aspectoId": "CBz2znS8f2Tr98j5y","numero": "1", "descripcion": "Promueve espacios y mecanismos de organización y participación del coelctivo escolar en la forma de decisiones, y en el desarrollo de acciones previstas para el cumplimiento de las metas de aprendizaje."},
    {"_id": "8Fu4zZHSro3N3MHwm", "aspectoId": "CBz2znS8f2Tr98j5y","numero": "2", "descripcion": "Genera un clima escolar basado en el respeto a la diversidad, coaboración y comunicación permanente."},
    {"_id": "97TDGMHwPS85vxpW3", "aspectoId": "CBz2znS8f2Tr98j5y","numero": "3", "descripcion": "Maneja estrategias de prevención y resolución pacífica de conflictos mediante el diálogo, el consenso y la negociación."},
    {"_id": "Rz2agume4s48JSzZ6", "aspectoId": "CBz2znS8f2Tr98j5y","numero": "4", "descripcion": "Promueve la participación organizada de las familias, y otras instancias de la comunidad, para el logro de las metas de aprendizaje a partir del reconocimiento de su capital cultural."},
    {"_id": "GmeugkDJRDTgxEKte", "aspectoId": "A9pYcrpCeaEbX8dbY","numero": "1", "descripcion": "Gestiona el uso óptimode la infraestructura, equipamiento y material educativo disponible, en beneficio de una enseñanza de calidad y el logro de las metas de aprendizaje de los estudiantes."},
    {"_id": "Huix6iTQHP2Hknxho", "aspectoId": "A9pYcrpCeaEbX8dbY","numero": "2", "descripcion": "Gestiona el uso óptimo de los recursos financieros en beneficio de las metas de aprendizaje trazadas por la institución educativa, bajo un enfoque orientado a los resultados."},
    {"_id": "8WtpTRbcBr9nMvPet", "aspectoId": "A9pYcrpCeaEbX8dbY","numero": "3", "descripcion": "Gestiona el uso óptimo de los recursos financieros en beneficio de las metas de aprendizaje trazadas por la institución educativa, bajo un enfoque orientado a resultados."},
    {"_id": "8vWd4v2EZSrRANzDn", "aspectoId": "A9pYcrpCeaEbX8dbY","numero": "4", "descripcion": "Gestiona el desarrollo de estrategias de prevención y manejo de situaciones de riesgo que aseguren la seguridad e integridad de los miembros de la comunidad educativa."},
    {"_id": "ZtqjnG3Rnmvm9QgrA", "aspectoId": "A9pYcrpCeaEbX8dbY","numero": "5", "descripcion": "Dirige el equipo administrativo y/o de soporte de la institución educativa orientando su desempeño hacia el logro de los objetivos institucionales."},
    {"_id": "WarXdwLYdgswq4rMp", "aspectoId": "SHWPG2B4EwMLSyhWA","numero": "1", "descripcion": "Gestiona la información que produce la escuela y la emplea como insumo en la toma de decisiones institucionales en favor de la mejora de los aprendizajes."},
    {"_id": "k2bzreTcmpw7dKHbH", "aspectoId": "SHWPG2B4EwMLSyhWA","numero": "2", "descripcion": "Implementa estrategias y mecanismos de transparencia y rendición de cuentas sobre la gestión escolar ante la comunidad educativa."},
    {"_id": "GAELfKcNNrKJ7KdZb", "aspectoId": "SHWPG2B4EwMLSyhWA","numero": "3", "descripcion": "Conduce de manera participativa los procesos de autoevaluación y mejora continua, orientándolos al logro de las metas de aprendizaje."},
    {"_id": "nGfnmCiK8bf4RcQzj", "aspectoId": "jENbqyRd9eMhGpeLS","numero": "1", "descripcion": "Gestiona oportunidades de formación continua para los docentes, orientada a mejorar su desempeño en función al logro de las metas de aprendizaje."},
    {"_id": "cKwZfpEKoRfkweYxE", "aspectoId": "jENbqyRd9eMhGpeLS","numero": "2", "descripcion": "Genera especios y mecanismos para el trabajo colaborativo entre los docentes, y la reflexión sobre las prácticas pedagógicas que contribuyen a la mejora de la enseñanza y del clima escolar."},
    {"_id": "Rvzome6spgbxtt587", "aspectoId": "jENbqyRd9eMhGpeLS","numero": "3", "descripcion": "EStimula las iniciativas de los docentes relacionadas a innovacionse e investigaciones pedagógicas, e impulsa su sistematización."},
    {"_id": "DkcDyXt7ervETM8xa", "aspectoId": "SmbHme7dHeNwhRuJP","numero": "1", "descripcion": "Orienta y promueve la participación del equipo docente en los procesos de planificación curricular, a partir de los lineamientos del sistema curricular y en la articulación con la propuesta curricular regional."},
    {"_id": "qnKF7yRdFA3EshsKN", "aspectoId": "SmbHme7dHeNwhRuJP","numero": "2", "descripcion": "Propicia una práctica docente basada en el aprendizaje colaborativo y por indagación; y el conocimiento de la diversidad existente en el aula y lo que es pertinente a ella."},
    {"_id": "a8HmGSG8ANnLAdk4x", "aspectoId": "SmbHme7dHeNwhRuJP","numero": "3", "descripcion": "Monitorea y orieta el uso de estrategias y rescursos metodológicos, así como el uso efectivo del tiempo y materiales educativos, en función del logro de las metas de aprendizaje de los estudiantes y considerando la atención de sus necesidades específicas."},
    {"_id": "P9mD7W3NaYEwENZHW", "aspectoId": "SmbHme7dHeNwhRuJP","numero": "4", "descripcion": "Monitorea y orienta el proceso de evaluación de los aprendizajes a partir de criterios claros y coherentes con los aprendizajes que se desean lograr, asegurando la comunicación oportuna de los resultados y la implementación de acciones de mejora."}
  ].forEach(function(d) {
    Indicadores.insert(d);
  });
}
