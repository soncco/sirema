Template.myforms.helpers
  docentes: ->
    FormDocentes.find {usuario: Meteor.userId()}
  directivos: ->
    FormDirectivos.find {usuario: Meteor.userId()}

  formulario: ->
    Meteor.subscribe 'formulario', @formId
    Formularios.findOne {'_id': @formId}

  momentFecha: ->
    moment.lang('es');
    moment(@fecha).format("LL")