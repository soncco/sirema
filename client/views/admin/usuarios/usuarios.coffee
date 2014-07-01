Template.usuarioList.helpers
  users: ->
    Meteor.users.find {}

Template.usuarioNew.helpers regiones: ->
    Regiones.find {}

Template.usuarioNew.events
  'submit .form': (e) ->
    e.preventDefault()
    username = $('#username').val()
    name = $('#name').val()
    password = $('#password').val()

    roles = $('.role:checked')

    if roles.length == 0
      FlashMessages.sendWarning 'Escoge al menos un rol'
      return

    user =
      'username': username
      'password': password
      'profile':
        'name': name
      'roles': []

    roles.each (i) ->
      user.roles.push $(@).val()
      return

    Accounts.createUser user
    FlashMessages.sendSuccess 'Se ha creado un usuario'
    Router.go('/')

    return