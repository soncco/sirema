Template.docenteList.helpers
  docentes: ->
    Docentes.find {}, {limit: 1000}

Template.docenteList.ie = ->
  Meteor.subscribe 'ie', @ieId
  Ies.findOne _id: @ieId

Template.docenteList.rendered = siremaTableSorter