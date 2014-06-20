Accounts.onCreateUser (options, user) ->
  userProperties =
    profile: options.profile || {}
    roles: options.roles || []

  user = _.extend user, userProperties

  if !user.profile.name
    user.profile.name = user.username

  if !Meteor.users.find().count()
    user.roles.push 'admin', 'boss', 'specialist'

  user
