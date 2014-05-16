@Distritos = new Meteor.Collection 'distritos'

Distritos.allow
  insert: isAdminById
  update: isAdminById
  remove: isAdminById


Meteor.methods
  saveDistrito: (attrs) ->
    distritoConMismoNombre = Distritos.findOne(nombre:
      $regex: attrs.nombre
      $options: 'i'
    )
    
    # Revisa el mismo nombre.
    throw new Meteor.Error(302, 'Ya existe una distrito con el mismo nombre', distritoConMismoNombre._id)  if attrs.nombre and distritoConMismoNombre
    distrito =
      nombre: attrs.nombre
      provinciaId: attrs.provinciaId

    distritoId = Distritos.insert(distrito)
    distritoId

  updateDistrito: (attrs) ->
    distritoConMismoNombre = Distritos.findOne(
      nombre:
        $regex: attrs.nombre
        $options: 'i'

      _id:
        $ne: attrs._id
    )
    
    # Revisa el mismo nombre.
    throw new Meteor.Error(302, 'Ya existe una distrito con el mismo nombre', distritoConMismoNombre._id)  if attrs.nombre and distritoConMismoNombre
    distrito =
      nombre: attrs.nombre
      provinciaId: attrs.provinciaId

    Distritos.update attrs._id,
      $set: distrito

    attrs._id

@DistritoMeta = new Meteor.Collection('distritometa')
