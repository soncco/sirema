Meteor.publish 'regiones', ->
  Regiones.find {}

Meteor.publish 'region',  (id) ->
  id and Regiones.find id

Meteor.publish 'provincias', ->
  Provincias.find {}

Meteor.publish 'provinciasRegion', (id) ->
  Regiones.find {regionId: id}

Meteor.publish 'provincia', (id) ->
  id and Provincias.find id

Meteor.publish 'distritos', ->
  Distritos.find {}

Meteor.publish 'distrito', (id) ->
  id && Distritos.find id

Meteor.publish 'ies', ->
  Ies.find {}

Meteor.publish 'ie', (id) ->
  id && Ies.find id

Meteor.publish 'docentes', ->
  Docentes.find {}, {limit: 2000}

Meteor.publish 'docente', (id) ->
  id && Docentes.find id

Meteor.publish 'dominios', ->
  Dominios.find {}

Meteor.publish 'dominio', (id) ->
  id && Dominios.find id

Meteor.publish 'aspectos', ->
  Aspectos.find {}

Meteor.publish 'aspecto', (id) ->
  id && Aspectos.find id

Meteor.publish 'indicadores', ->
  Indicadores.find {}

Meteor.publish 'indicador', (id) ->
  id && Indicadores.find id

Meteor.publish 'formularios', ->
  Formularios.find {}

Meteor.publish 'formulario', (id) ->
  id && Formularios.find id

Meteor.publish 'usuarios', ->
  Meteor.users.find {}

Meteor.publish 'currentUser', ->
  user = Meteor.users.find {_id: this.userId}
  user

Meteor.publish 'directivoForms', (uid) ->
  FormDirectivos.find {usuario: uid}

Meteor.publish 'docenteForms', (uid) ->
  FormDocentes.find {usuario: uid}