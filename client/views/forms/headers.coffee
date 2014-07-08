Template.headerDirectivo.settings = ->
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

    ie = ieData id

    if ie
      distritoId = ie.distritoId
      $('#director').val(ie.director)
      $('#distritoId').val(distritoId)

      distrito = distritoData distritoId

      if distrito
        provinciaId = distrito.provinciaId
        provincia = provinciaData provinciaId
        $('#provinciaId').val(provinciaId)

        if provincia
          regionId = provincia.regionId
          region = regionData regionId

          if region
            $('#regionId').val(region._id)

    console.log 'd ' + $('#distritoId').val()
    console.log 'p ' + $('#provinciaId').val()
    console.log 'r ' + $('#regionId').val()
    return

Template.acIe.helpers
  distrito: ->
    Meteor.subscribe 'distrito', @distritoId
    #debugger
    x = Distritos.findOne {'_id': @distritoId}
    if x
      return x

Template.headerDocente.settings = ->
  position: 'bottom'
  limit: 10
  rules: [
    collection: Docentes
    field: 'nombres'
    matchAll: true
    template: Template.acDocente
  ]

Template.headerDocente.rendered = ->
  $('.datepicker').datepicker()
    #onSelect: ->
    #  console.log $('.datepicker').datepicker('getDate').getTime()

Template.headerDirectivo.rendered = ->
  $('.datepicker').datepicker()

Template.acDocente.events
  'click span': (e) ->
    id = $(e.target).data('id')
    $('#idDocente').val(id)

    docente = docenteData id

    if docente
      ie = ieData docente.ieId

      if ie
        distritoId = ie.distritoId
        $('#director').val(ie.director)
        $('#ie').val(ie.nombre)
        $('#ieId').val(ie._id)
        $('#distritoId').val(distritoId)

        distrito = distritoData distritoId

        if distrito
          provinciaId = distrito.provinciaId
          provincia = provinciaData provinciaId
          $('#provinciaId').val(provinciaId)

          if provincia
            regionId = provincia.regionId
            region = regionData regionId

            if region
              $('#regionId').val(region._id)

    console.log 'd ' + $('#distritoId').val()
    console.log 'p ' + $('#provinciaId').val()
    console.log 'r ' + $('#regionId').val()

    return

Template.acDocente.helpers
  ie: ->
    Meteor.subscribe 'ie', @ieId
    x = Ies.findOne {'_id': @ieId}
    if x
      return x
