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

    if $('#director').val() == ''
      FlashMessages.sendError 'Por favor escoge nuevamente la Institución Educativa'
      return false

    tipo = $('#tipo').val()

    ieData = (id) ->
      Meteor.subscribe 'ie', id
      Ies.findOne '_id': id

    distritoData = (id) ->
      Meteor.subscribe 'distrito', id
      distrito = Distritos.findOne '_id': id
      if distrito
        distrito

    provinciaData = (id) ->
      Meteor.subscribe 'provincia', id
      provincia = Provincias.findOne '_id': id
      if provincia
        provincia

    regionData = (id) ->
      Meteor.subscribe 'region', id
      region = Regiones.findOne '_id': id
      if region
        region

    if tipo == 'directivo'
      data =
        ie: ieData $('#ieId').val()
        director: $('#director').val()
        situacion: $('#situacion').val()
        dni: $('#dni').val()
        nro_docentes: $('#nro_docentes').val()
        nro_varones: $('#nro_varones').val()
        nro_mujeres: $('#nro_mujeres').val()
        indicadores: []

      
      chk = $('.indicador:checked');
      chk.each (i) ->
        row = {}
        row.valor = $(@).val()
        row.indicadorId = $(@).data('id')
        row.evidencia = $('#t-' + row.indicadorId).val()
        data.indicadores.push row
        return

      #console.log data
      if data.ie
        data.distrito = distritoData(data.ie.distritoId)
      if data.distrito
        data.provincia = provinciaData(data.distrito.provinciaId)
      if data.provincia
        data.region = regionData(data.provincia.regionId)

      _id = FormDirectivos.insert(data)
      
      if(_id)
        FlashMessages.sendSuccess 'Se guardó la información'
        Router.go 'formularioList',
          _id: _id
      else
        FlashMessages.sendError 'Hubo un problema al guardar los datos'
      return



