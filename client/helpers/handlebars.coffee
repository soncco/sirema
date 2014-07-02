Handlebars.registerHelper "ifEqual", (v1, v2, options) ->
  debugger
  return options.fn(this)  if v1 is v2
  options.inverse this

# {{#ifCond var1 '==' var2}}
Handlebars.registerHelper "ifCond", (v1, operator, v2, options) ->
  debugger
  switch operator
    when "=="
      (if (v1 is v2) then options.fn(@) else options.inverse(@))
    when "==="
      (if (v1 is v2) then options.fn(@) else options.inverse(@))
    when "<"
      (if (v1 < v2) then options.fn(@) else options.inverse(@))
    when "<="
      (if (v1 <= v2) then options.fn(@) else options.inverse(@))
    when ">"
      (if (v1 > v2) then options.fn(@) else options.inverse(@))
    when ">="
      (if (v1 >= v2) then options.fn(@) else options.inverse(@))
    when "&&"
      (if (v1 and v2) then options.fn(@) else options.inverse(@))
    when "||"
      (if (v1 or v2) then options.fn(@) else options.inverse(@))
    else
      options.inverse @


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