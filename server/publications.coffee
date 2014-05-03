Meteor.publish 'regiones', ->
  Regiones.find {}

Meteor.publish 'region',  (id) ->
  id and Regiones.find id

Meteor.publish 'provincias', ->
  return Provincias.find {}

Meteor.publish 'provincia', (id) ->
  return id && Provincias.find id;

Meteor.publish 'distritos', ->
  return Distritos.find {}

Meteor.publish 'distritometa', ->
  return DistritoMeta.find {}

Meteor.publish 'distrito', (id) ->
  return id && Distritos.find id;
