Template.insertData.helpers
  directivo: ->
    @.tipo is 'directivo'
  docente: ->
    @.tipo is 'docente'

Template.insertData.events
  'submit .formdirectivo': (e) ->
    e.preventDefault()
    rows = $('.irow').length
    radios = $('.indicador:checked').length
    
    if radios < rows
      FlashMessages.sendError 'No haz llenado todos los indicadores'
      return false

    if $('#director').val() == ''
      FlashMessages.sendError 'Por favor escoge nuevamente la Institución Educativa'
      return false

    data =
      formId: $('#formId').val()
      ie: ieData $('#ieId').val()
      distritoId: $('#distritoId').val()
      provinciaId: $('#provinciaId').val()
      regionId: $('#regionId').val()
      director: $('#director').val()
      situacion: $('#situacion').val()
      dni: $('#dni').val()
      nro_docentes: $('#nro_docentes').val()
      nro_varones: $('#nro_varones').val()
      nro_mujeres: $('#nro_mujeres').val()
      indicadores: []
      fecha: $('#fecha').datepicker('getDate').getTime()
      hora_inicio: $('#hora_inicio').val()
      hora_fin: $('#hora_fin').val()
      usuario: Meteor.userId()

    
    chk = $('.indicador:checked');
    chk.each (i) ->
      row = {}
      row.valor = $(@).val()
      row.indicadorId = $(@).data('id')
      row.evidencia = $('#t-' + row.indicadorId).val()
      data.indicadores.push row
      return

    if $('#regionId').val() != ''
      data.regionId = $('#regionId').val()
    else
      region = regionData data.provinciaId
      if region
        data.regionId = region._id

    _id = FormDirectivos.insert(data)
    
    if(_id)
      FlashMessages.sendSuccess 'Se guardó la información'
      Router.go 'myforms',
        _id: _id
    else
      FlashMessages.sendError 'Hubo un problema al guardar los datos'
    return


  'submit .formdocente': (e) ->
    e.preventDefault()
    rows = $('.irow').length
    radios = $('.indicador:checked').length
    
    if radios < rows
      FlashMessages.sendError 'No haz llenado todos los indicadores'
      return false

    if $('#director').val() == ''
      FlashMessages.sendError 'Por favor escoge nuevamente el docente'
      return false

    if $('#ie').val() == ''
      FlashMessages.sendError 'Por favor escoge nuevamente el docente'
      return false

    data =
      formId: $('#formId').val()
      docente: docenteData $('#idDocente').val()
      ie: ieData = $('#ieId').val()
      distritoId: $('#distritoId').val()
      provinciaId: $('#provinciaId').val()
      regionId: $('#regionId').val()
      director: $('#director').val()
      situacion: $('#situacion').val()
      dni: $('#dni').val()
      grado: $('#grado').val()
      seccion: $('#seccion').val()
      nro_estudiantes: $('#nro_estudiantes').val()
      nro_varones: $('#nro_varones').val()
      nro_mujeres: $('#nro_mujeres').val()
      indicadores: []
      fecha: $('#fecha').datepicker('getDate').getTime()
      hora_inicio: $('#hora_inicio').val()
      hora_fin: $('#hora_fin').val()
      usuario: Meteor.userId()

    
    chk = $('.indicador:checked')
    chk.each (i) ->
      row = {}
      row.valor = $(@).val()
      row.indicadorId = $(@).data('id')
      data.indicadores.push row
      return

    if $('#provinciaId').val() != ''
      data.provinciaId = $('#provinciaId').val()
    else
      provincia = provinciaData data.distritoId
      if provincia
        data.provinciaId = provincia._id

    if $('#regionId').val() != ''
      data.regionId = $('#regionId').val()
    else
      region = regionData data.provinciaId
      if region
        data.regionId = region._id

    _id = FormDocentes.insert(data)
    
    if(_id)
      FlashMessages.sendSuccess 'Se guardó la información'
      Router.go 'myforms',
        _id: _id
    else
      FlashMessages.sendError 'Hubo un problema al guardar los datos'
