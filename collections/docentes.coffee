@Docentes = new Meteor.Collection 'docentes'

Docentes.allow
  insert: isAdminById
  update: isAdminById
  remove: isAdminById
