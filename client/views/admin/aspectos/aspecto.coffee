Template.aspectoNew.events 'submit .form': (e) ->
  e.preventDefault()
  nombre = $('#nombre').val()
  dominioId = $('#dominioId').val()
  
  aspecto =
    nombre: nombre
    dominioId: dominioId

  id = Aspectos.insert(aspecto)

  FlashMessages.sendSuccess 'Se creó un Aspecto'
  Router.go 'aspectoList',
    _id: id

Template.aspectoNew.helpers
  dominios: ->
    Dominios.find {}


Template.aspectoEdit.events 'submit .form': (e) ->
  e.preventDefault()
  nombre = $('#nombre').val()
  dominioId = $('#dominioId').val()
  
  aspecto =
    nombre: nombre
    dominioId: dominioId

  Aspectos.update @_id,
    $set: aspecto

  FlashMessages.sendSuccess 'Se editó un Aspecto'
  Router.go 'aspectoList',
    _id: @id

Template.aspectoEdit.helpers
  dominios: ->
    Dominios.find {}
  isSelected: (dominioId) ->
    (if dominioId and @_id is dominioId then "selected" else "")

Template.aspectoList.helpers
  aspectos: ->
    Aspectos.find {}
  dominio: ->
    Meteor.subscribe 'dominio', @dominioId
    Dominios.findOne _id: @dominioId
