Template.docenteNew.events
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

    _id = Docentes.insert(docente)

    if(_id)
      FlashMessages.sendSuccess 'Se creó el Docente'
      Router.go 'docenteList',
        _id: _id
    else
      FlashMessages.sendError 'Hubo un problema al crear el Docente'

Template.docenteNew.settings = ->
  position: 'bottom'
  limit: 15
  rules: [
    collection: Ies
    field: 'nombre'
    matchAll: true,
    template: Template.dataIes
  ]

Template.dataIes.events
  'click span': (e) ->
    $ieId = $('#ieId')
    id = $(e.target).data('id')
    $ieId.val(id)
