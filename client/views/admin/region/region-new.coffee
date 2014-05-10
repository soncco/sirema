Template.regionNew.events 'submit .form': (e) ->
  e.preventDefault()
  codigo = $('#codigo').val()
  nombre = $('#nombre').val()
  
  region =
    codigo: codigo
    nombre: nombre

  Meteor.call 'saveRegion', region, (error, id) ->
    if error
      throwError error.reason
      
      #Router.go('regionList', {_id: error.details});
      FlashMessages.sendError error.reason  if error.error is 302
    else
      FlashMessages.sendSuccess 'Se creó la región ' + nombre
      Router.go 'regionList',
        _id: id
