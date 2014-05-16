Meteor.publish 'regiones', ->
  Regiones.find {}

Meteor.publish 'region',  (id) ->
  id and Regiones.find id

Meteor.publish 'provincias', ->
  Provincias.find {}

Meteor.publish 'provincia', (id) ->
  id && Provincias.find id

Meteor.publish 'distritos', ->
  Distritos.find {}

Meteor.publish 'distrito', (id) ->
  id && Distritos.find id

Meteor.publish 'ies', ->
  Ies.find {}

Meteor.publish 'ie', (id) ->
  id && Ies.find id

Meteor.publish 'docentes', ->
  Docentes.find {}

Meteor.publish 'docente', (id) ->
  id && Docentes.find id

Meteor.publish 'currentUser', ->
  user = Meteor.users.find {_id: this.userId}
  user