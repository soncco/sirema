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

Handlebars.registerHelper 'optionObject', (obj, opts) ->
  for key, value of obj
    "<option value=#{key}>#{value}</option>"

Handlebars.registerHelper 'optionObjectCompare', (obj, val, opts) ->
  sel = ""
  for key, value of obj
    if val = key then sel = "selected"
    "<option value=#{key} #{sel}>#{value}</option>"

Handlebars.registerHelper 'objectKey', (obj, opts) ->
  for key, value of obj
    val = userTypes[value]
    " #{val}"