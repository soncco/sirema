Template.ieNew.events
  'submit .form': (e) ->
    e.preventDefault()
    nombre = $(e.target).find('#nombre').val()
    modular = $(e.target).find('#modular').val()
    codigo = $(e.target).find('#codigo').val()
    ebr = $(e.target).find('#ebr').val()
    direccion = $(e.target).find('#direccion').val()
    distritoId = $(e.target).find('#distritoId').val()
    nivel = $(e.target).find('#nivel').val()
    genero = $(e.target).find('#genero').val()
    area = $(e.target).find('#area').val()
    telefono = $(e.target).find('#telefono').val()
    email = $(e.target).find('#email').val()
    url = $(e.target).find('#url').val()
    
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
      'telefono': telefono
      'email': email
      'url': url

Template.ieNew.settings = ->
  position: 'bottom'
  limit: 5
  rules: [
    collection: Distritos
    field: 'nombre'
    matchAll: true
    template: Template.dataPiece
    callback: ->
    onSelected: ->
      console.log(this)
   ]

Template.dataPiece.helpers
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

Template.dataPiece.events
  'click span': (e) ->
    $distritoId = $(e.delegateTarget.ownerDocument).find('#distritoId')
    id = $(e.target).data('id')
    $distritoId.val(id)
