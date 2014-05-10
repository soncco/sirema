Template.distritoEdit.events "submit .form": (e) ->
  e.preventDefault()
  nombre = $("#nombre").val()
  provincia = $("#provincia").val()
  distrito =
    _id: @_id
    nombre: nombre
    provinciaId: provincia

  Meteor.call "updateDistrito", distrito, (error, id) ->
    if error
      throwError error.reason
      
      #Router.go('distritoList', {_id: error.details});
      FlashMessages.sendError error.reason  if error.error is 302
    else
      FlashMessages.sendSuccess "Se editó el distrito correctamente"
      Router.go "distritoList",
        _id: id



Template.distritoEdit.helpers
  provincias: ->
    Provincias.find {}

  region: ->
    Meteor.subscribe "region", @regionId
    Regiones.findOne _id: @regionId

  isSelected: (provinciaId) ->
    (if provinciaId and @_id is provinciaId then "selected" else "")
