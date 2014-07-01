Template.provinciaList.helpers provincias: ->
  Provincias.find {}

Template.provinciaList.region = ->
  Meteor.subscribe "region", @regionId
  Regiones.findOne _id: @regionId

Template.provinciaList.rendered = siremaTableSorter