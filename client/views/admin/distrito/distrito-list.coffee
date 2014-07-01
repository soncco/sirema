Template.distritoList.helpers distritos: ->
  Distritos.find {}

Template.distritoList.provincia = ->
  Meteor.subscribe "provincia", @provinciaId
  Provincias.findOne _id: @provinciaId

Template.distritoList.rendered = siremaTableSorter
