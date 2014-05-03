Template.provinciaNew.events "submit .form": (e) ->
  e.preventDefault()
  nombre = $(e.target).find("#nombre").val()
  region = $(e.target).find("#region").val()
  provincia =
    nombre: nombre
    regionId: region

  Meteor.call "saveProvincia", provincia, (error, id) ->
    if error
      throwError error.reason
      
      #Router.go('provinciaList', {_id: error.details});
      FlashMessages.sendError error.reason  if error.error is 302
    else
      FlashMessages.sendSuccess "Se creó la provincia " + nombre
      Router.go "provinciaList",
        _id: id



Template.provinciaNew.helpers regiones: ->
  Regiones.find {}
