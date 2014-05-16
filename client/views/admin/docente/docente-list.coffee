Template.docenteList.helpers
  docentes: ->
    Docentes.find {}

Template.docenteList.ie = ->
  Meteor.subscribe 'ie', @ieId
  Ies.findOne _id: @ieId