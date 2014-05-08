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

Meteor.publish 'currentUser', ->
  user = Meteor.users.find {_id: this.userId}
  user