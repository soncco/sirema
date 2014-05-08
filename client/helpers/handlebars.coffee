Handlebars.registerHelper 'ifEqual', (a, b, opts) ->
  if a is b
    opts.fn this
  else
    opts.inverse this

Handlebars.registerHelper 'isAdmin', (showError) ->
  if isAdmin(Meteor.user())
    return true
  else
    if typeof showError == 'string' and showError == true
      throw new Meteor.Error(403, 'No estás autorizado para aceder a esta página')
      return false