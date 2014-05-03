Handlebars.registerHelper 'ifEqual', (a, b, opts) ->
  if a is b
    opts.fn this
  else
    opts.inverse this
