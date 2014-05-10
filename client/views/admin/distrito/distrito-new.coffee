Template.distritoNew.events "submit .form": (e) ->
  e.preventDefault()
  nombre = $("#nombre").val()
  provincia = $("#provincia").val()
  distrito =
    nombre: nombre
    provinciaId: provincia

  Meteor.call "saveDistrito", distrito, (error, id) ->
    if error
      throwError error.reason
      
      #Router.go('distritoList', {_id: error.details});
      FlashMessages.sendError error.reason  if error.error is 302
    else
      FlashMessages.sendSuccess "Se creó el distrito " + nombre
      Router.go "distritoList",
        _id: id



Template.distritoNew.helpers
  provincias: ->
    Provincias.find {}

  region: ->
    Meteor.subscribe "region", @regionId
    Regiones.findOne _id: @regionId
