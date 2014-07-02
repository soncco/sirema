Template.indicadorNew.events 'submit .form': (e) ->
  e.preventDefault()
  aspectoId = $('#aspectoId').val()
  numero = $('#numero').val()
  descripcion = $('#descripcion').val()
  
  indicador =
    aspectoId: aspectoId
    numero: numero
    descripcion: descripcion

  id = Indicadores.insert(indicador)

  FlashMessages.sendSuccess 'Se creó un Indicador'
  Router.go 'indicadorList',
    _id: id

Template.indicadorNew.helpers
  aspectos: ->
    Aspectos.find {}


Template.indicadorEdit.events 'submit .form': (e) ->
  e.preventDefault()
  aspectoId = $('#aspectoId').val()
  numero = $('#numero').val()
  descripcion = $('#descripcion').val()
  
  indicador =
    aspectoId: aspectoId
    numero: numero
    descripcion: descripcion

  Indicadores.update @_id,
    $set: indicador

  FlashMessages.sendSuccess 'Se editó un Indicador'
  Router.go 'indicadorList',
    _id: @id

Template.indicadorEdit.helpers
  aspectos: ->
    Aspectos.find {}
  isSelected: (aspectoId) ->
    (if aspectoId and @_id is aspectoId then "selected" else "")

Template.indicadorList.helpers
  indicadores: ->
    Indicadores.find {}
  aspecto: ->
    Meteor.subscribe 'aspecto', @aspectoId
    Aspectos.findOne _id: @aspectoId

Template.indicadorList.rendered = siremaTableSorter