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

    console.log(ie)

    _id = Ies.insert(ie)

    if(_id)
      console.log(_id)
      FlashMessages.sendSuccess 'Se creó la Institución Educativa'
      Router.go 'ieList',
        _id: _id
    else
      FlashMessages.sendError 'Hubo un problema al crear la Institución Educativa'

Template.ieEdit.settings = ->
  position: 'bottom'
  limit: 5
  rules: [
    collection: Distritos
    field: 'nombre'
    matchAll: true
    template: Template.dataPieceEdit
    callback: ->
    onSelected: ->
      console.log(this)
   ]

Template.dataPieceEdit.helpers
  parents: ->
    Meteor.subscribe 'provincia', @provinciaId
    p = Provincias.findOne 
      '_id': @provinciaId

    r = {}
    if p
      Meteor.subscribe 'region', p.regionId
      r = Regiones.findOne 
        '_id': p.regionId

    'provincia': p, 'region': r

Template.dataPieceEdit.events
  'click span': (e) ->
    $distritoId = $(e.delegateTarget.ownerDocument).find('#distritoId')
    id = $(e.target).data('id')
    $distritoId.val(id)
