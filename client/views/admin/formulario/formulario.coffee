Template.formularioNew.helpers
  dominios: ->
    Dominios.find {}
  aspectos: ->
    Aspectos.find {}
  indicadores: ->
    Indicadores.find {}

Template.formularioNew.events
  'click .dominio': (e) ->
    $this = $(e.target)
    $aspectos = $('input[data-parent-aspecto=' + $this.data('dominio') + ']')
    $aspectos.each (i) ->
      $(@).trigger('click')
      $(@).attr('checked', $this.is(':checked'))
    return

  'click .aspecto': (e) ->
    $this = $(e.target)
    $indicadores = $('input[data-parent-indicador=' + $this.data('aspecto') + ']')
    $indicadores.each (i) ->
      $(@).trigger('click')
      $(@).attr('checked', $this.is(':checked'))
    return

  'click .data-chk': (e) ->
    $chk = $(e.target).parent().find('input')
    $chk.trigger('click')
    $chk.attr('checked', !$chk.attr('checked'))
    return

  'submit .form': (e) ->
    e.preventDefault()
    nombre = $('#nombre').val()
    dominios = $('.dominio')
    aspectos = $('.aspecto')

    formulario =
      nombre: nombre
      dominios: []
      aspectos: []

    dominios.each (d) ->
      if $(@).is(':checked')
        formulario.dominios.push {'dominioId': $(@).val()}
      return

    aspectos.each (d) ->
      if $(@).is(':checked')
        formulario.aspectos.push {'aspectoId': $(@).val()}
      return

    _id = Formularios.insert(formulario)

    FlashMessages.sendSuccess 'Se creó un Formulario'
    Router.go 'formularioNew',
      _id: id

    return

Template.formularioList.helpers
  formularios: ->
    Formularios.find {}