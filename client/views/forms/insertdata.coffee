Template.insertData.helpers
  directivo: ->
    @.tipo is 'directivo'

  renderedTree: ->
    tree = []
    dominios = @.dominios
    aspectos = @.aspectos
    indicadores = @.indicadores

    dominioData = (id) ->
      Meteor.subscribe 'dominio', id
      Dominios.findOne {_id: id}

    aspectoData = (id) ->
      Meteor.subscribe 'aspecto', id
      Aspectos.findOne {_id: id}

    indicadorData = (id) ->
      Meteor.subscribe 'indicador', id
      Indicadores.findOne {_id: id}

    if @.tipo == 'directivo'
      dominios.forEach (d) ->
        row = {}
        row.dominioId = d.dominioId
        row.data = dominioData d.dominioId

        child = _.filter aspectos, (aspecto) ->
          aspecto.parent == d.dominioId

        child.forEach (a) ->
          a.data = aspectoData a.aspectoId
          grandchild = _.filter indicadores, (indicador) ->
            indicador.parent == a.aspectoId
          a.indicadores = grandchild

          a.indicadores.forEach (i) ->
            i.data = indicadorData i.indicadorId
            return

          return

        row.aspectos = child

        tree.push row
        return

    if @.tipo == 'docente'
      aspectos.forEach (a) ->
        row = {}
        row.aspectoId = a.aspectoId
        row.data = aspectoData a.aspectoId

        child = _.filter indicadores, (indicador) ->
          indicador.parent == a.aspectoId

        row.indicadores = child

        row.indicadores.forEach (i) ->
          i.data = indicadorData i.indicadorId
          return

        tree.push row
        return

    return tree

Template.insertData.settings = ->
  position: 'bottom'
  limit: 10
  rules: [
    collection: Ies
    field: 'nombre'
    matchAll: true
    template: Template.acIe
  ]

Template.acIe.events
  'click span': (e) ->
    id = $(e.target).data('id')
    $('#ieId').val(id)

    ieData = (id) ->
      Meteor.subscribe 'ie', id
      Ies.findOne(_id: id)

    ie = ieData id

    if ie
      $('#director').val(ie.director)
    return

Template.acIe.helpers
  distrito: ->
    Meteor.subscribe 'distrito', @distritoId
    #debugger
    x = Distritos.findOne {'_id': @distritoId}
    if x
      return x


Template.insertData.events
  'submit .form': (e) ->
    e.preventDefault()
    rows = $('.irow').length
    radios = $('.indicador:checked').length
    if radios < rows
      FlashMessages.sendError 'No haz llenado todos los indicadores'
      return false

    


