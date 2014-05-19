Template.dominioNew.events 'submit .form': (e) ->
  e.preventDefault()
  nombre = $('#nombre').val()
  
  dominio =
    nombre: nombre

  id = Dominios.insert(dominio)

  FlashMessages.sendSuccess 'Se creó un Dominio'
  Router.go 'dominioList',
    _id: id


Template.dominioEdit.events 'submit .form': (e) ->
  e.preventDefault()
  nombre = $('#nombre').val()
  
  dominio =
    nombre: nombre

  Dominios.update @_id,
    $set: dominio

  FlashMessages.sendSuccess 'Se editó un Dominio'
  Router.go 'dominioList',
    _id: @id


Template.dominioList.helpers dominios: ->
  Dominios.find {}
