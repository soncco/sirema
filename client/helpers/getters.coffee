@ieData = (id) ->
  Meteor.subscribe 'ie', id
  Ies.findOne(_id: id)

@docenteData = (id) ->
  Meteor.subscribe 'docente', id
  Docentes.findOne(_id: id)

@distritoData = (id) ->
  Meteor.subscribe 'distrito', id
  Distritos.findOne(_id: id)

@provinciaData = (id) ->
  Meteor.subscribe 'provincia', id
  Provincias.findOne(_id: id)

@regionData = (id) ->
  Meteor.subscribe 'region', id
  Regiones.findOne(_id: id)