@Ies = new Meteor.Collection 'ies'

Ies.allow
  insert: isAdminById
  update: isAdminById
  remove: isAdminById
