## Estructuras

### Regiones

  ```javascript
  region = {
    'nombre': 'UGEL Cusco',
    'codigo': '1326546'
  };

  regiones = [
    {'nombre': 'UGEL Cusco','codigo': '1326546'},
    {'nombre': 'UGEL XXX','codigo': '1326546'},
    {'nombre': 'UGEL YYY','codigo': '1326546'},
    {'nombre': 'UGEL ZZZ','codigo': '1326546'},
    // ...
  ];

  ```

### Provincias

  ```javascript
  provincia = {
    'nombre': 'Cusco',
    'regionId': 'cuscoid'
  };

  provincias = [
    {'nombre': 'Cusco','regionId': 'cuscoid'},
    {'nombre': 'Anta','regionId': 'cuscoid'},
    {'nombre': 'Sicuani','regionId': 'cuscoid'},
    // ...
    {'nombre': 'Canchis','regionId': 'canchisid'},
    {'nombre': 'Canchis','regionId': 'canchisid'},
    {'nombre': 'Sicuani','regionId': 'canchisid'},
  ];

  ```

### Distritos

  ```javascript
  distrito = {
    'nombre': 'Wanchaq',
    'provinciaId': 'provcuscoid'
  };

  distritos = [
    {'nombre': 'Cusco','provinciaId': 'provcuscoid'},
    {'nombre': 'Anta','provinciaId': 'provcuscoid'},
    {'nombre': 'Sicuani','provinciaId': 'provcuscoid'},
    // ...
  ];

  ```

### IE

  ```javascript
  // Para tomar en cuenta.
  erbs = {
    hispano: 'Hispano',
    eib: 'EIB'
  };
  niveles = {
    inicial_cuna: 'Inicial - Cuna',
    inicial_cuna_jardin: 'Inicial - Cuna - Jardín',
    inicial_jardin: 'Inicial - Jardín',
    primaria: 'Primaria',
    secundaria: 'Secundaria'
  };
  generos = {
    mixto: 'Mixto',
    mujeres: 'Mujeres',
    varones: 'Varones'
  };
  areas = {
    urbana: 'Urbana',
    rural: 'Rural'
  };
  ```javascript


  ```javascript
  ie = {
    'nombre': 'Ciencias',
    'modular': '56546546',
    'codigo': '9879879',
    'ebr': 'hispano',
    'direccion': 'Av de la Cultura',
    'distritoId': 'wanchaqid',
    'nivel': 'inicial_jardin',
    'genero': 'varones',
    'area': 'urbana',
    'director': 'Chespirito',
    'telefono': '',
    'email': '',
    'url': ''
  };

  ies = [
    {'nombre': 'Ciencias','modular': '56546546','codigo': '9879879','ebr': 'hispano','direccion': 'Av de la Cultura','distritoId': 'wanchaqid','nivel': 'inicial_jardin','genero': 'varones','area': 'urbana','director': 'Chespirito','telefono': '','email': '','url': ''},
    {'nombre': 'Ciencias','modular': '56546546','codigo': '9879879','ebr': 'hispano','direccion': 'Av de la Cultura','distritoId': 'wanchaqid','nivel': 'inicial_jardin','genero': 'varones','area': 'urbana','director': 'Chespirito','telefono': '','email': '','url': ''},
    {'nombre': 'Ciencias','modular': '56546546','codigo': '9879879','ebr': 'hispano','direccion': 'Av de la Cultura','distritoId': 'wanchaqid','nivel': 'inicial_jardin','genero': 'varones','area': 'urbana','director': 'Chespirito','telefono': '','email': '','url': ''},
    // ....
  ]
  