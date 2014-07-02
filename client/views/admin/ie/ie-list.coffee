Template.ieList.helpers
  ies: ->
    Ies.find {}
  ebr: ->
    ebrs[@ebr]
  nivel: ->
    niveles[@nivel]
  genero: ->
    generos[@genero]
  area: ->
    areas[@area]

Template.ieList.lugar = ->
  Meteor.subscribe "distrito", @distritoId
  Distritos.findOne _id: @distritoId

Template.ieList.rendered = siremaTableSorter