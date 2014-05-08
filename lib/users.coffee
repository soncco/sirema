@isAdmin = (user) ->
  if typeof user == 'undefined'
    Meteor.user()
  else
    user

  !!user and !!_.find user.roles, (r) ->
    r == 'admin'
