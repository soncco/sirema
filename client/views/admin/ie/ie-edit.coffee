Template.ieEdit.events
  'submit .form': (e) ->

    distritoId = $('#distritoId').val()

    if distritoId == ''
      FlashMessages.sendError 'Revisa el campo "Pertenece a"'
      $('#distritoId').focus()
      return false

    e.preventDefault()
    nombre = $('#nombre').val()
    modular = $('#modular').val()
    codigo = $('#codigo').val()
    ebr = $('#ebr').val()
    direccion = $('#direccion').val()
    nivel = $('#nivel').val()
    genero = $('#genero').val()
    area = $('#area').val()
    director = $('#director').val()
    telefono = $('#telefono').val()
    email = $('#email').val()
    url = $('#url').val()
    
    ie =
      'nombre': nombre
      'modular': modular
      'codigo': codigo
      'ebr': ebr
      'direccion': direccion
      'distritoId': distritoId
      'nivel': nivel
      'genero': genero
      'area': area
      'director': director
      'telefono': telefono
      'email': email
      'url': url

    Ies.update @_id,
      $set: ie

    FlashMessages.sendSuccess 'Se editó la Institución Educativa'
    Router.go 'ieList',
      _id: @_id

    return

Template.ieEdit.helpers
  ebrs: -> ebrs
  niveles: -> niveles
  generos: -> generos
  areas: -> areas
  distrito: ->
    Meteor.subscribe 'distrito', @distritoId
    Distritos.findOne '_id': @distritoId

Template.ieEdit.settings = ->
  position: 'bottom'
  limit: 15
  rules: [
    collection: Distritos
    field: 'nombre'
    matchAll: true
    template: Template.dataPiece
  ]
