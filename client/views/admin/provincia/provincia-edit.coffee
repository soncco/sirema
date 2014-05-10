Template.provinciaEdit.events "submit .form": (e) ->
  e.preventDefault()
  nombre = $("#nombre").val()
  region = $("#region").val()
  provincia =
    _id: @_id
    nombre: nombre
    regionId: region

  Meteor.call "updateProvincia", provincia, (error, id) ->
    if error
      throwError error.reason
      
      #Router.go('provinciaList', {_id: error.details});
      FlashMessages.sendError error.reason  if error.error is 302
    else
      FlashMessages.sendSuccess "Se editó la provincia correctamente"
      Router.go "provinciaList",
        _id: id



Template.provinciaEdit.helpers
  regiones: ->
    Regiones.find {}

  region: ->
    Meteor.subscribe "region", @regionId
    Regiones.findOne _id: @regionId

  isSelected: (regionId) ->
    (if regionId and @_id is regionId then "selected" else "")
