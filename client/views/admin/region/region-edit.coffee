Template.regionEdit.events 'submit .form': (e) ->
  e.preventDefault()
  nombre = $(e.target).find('#nombre').val()
  codigo = $(e.target).find('#codigo').val()
  
  region =
    _id: @_id
    codigo: codigo
    nombre: nombre

  Meteor.call 'updateRegion', region, (error, id) ->
    if error
      throwError error.reason
      
      #Router.go('regionList', {_id: error.details});
      FlashMessages.sendError error.reason  if error.error is 302
    else
      FlashMessages.sendSuccess 'Se editó la región correctamente.'
      Router.go 'regionList',
        _id: id
