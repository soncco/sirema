Template.docenteEdit.events
  'submit .form': (e) ->

    ieId = $('#ieId').val()

    if ieId == ''
      FlashMessages.sendError 'Revisa el campo "Institución Educativa"'
      $('#ieId').focus()
      return false

    e.preventDefault()
    nombres = $('#nombres').val()
    dni = $('#dni').val()
    ieId = $('#ieId').val()
 
    docente =
      'nombres': nombres
      'dni': dni
      'ieId': ieId

    Docentes.update @_id,
      $set: docente

    FlashMessages.sendSuccess 'Se editó el Docente'
    Router.go 'docenteList',
      _id: @_id

Template.docenteEdit.helpers
  ie: ->
    Meteor.subscribe 'ie', @ieId
    Ies.findOne '_id': @ieId

Template.docenteEdit.settings = ->
  position: 'bottom'
  limit: 15
  rules: [
    collection: Ies
    field: 'nombre'
    matchAll: true,
    template: Template.dataIes
  ]
