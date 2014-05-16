@Provincias = new Meteor.Collection 'provincias'

Provincias.allow
  insert: isAdminById
  update: isAdminById
  remove: isAdminById


Meteor.methods
  saveProvincia: (attrs) ->
    provinciaConMismoNombre = Provincias.findOne(nombre:
      $regex: attrs.nombre
      $options: 'i'
    )
    
    # Revisa el mismo nombre.
    throw new Meteor.Error(302, 'Ya existe una provincia con el mismo nombre', provinciaConMismoNombre._id)  if attrs.nombre and provinciaConMismoNombre
    provincia =
      nombre: attrs.nombre
      regionId: attrs.regionId

    provinciaId = Provincias.insert(provincia)
    provinciaId

  updateProvincia: (attrs) ->
    provinciaConMismoNombre = Provincias.findOne(
      nombre:
        $regex: attrs.nombre
        $options: 'i'

      _id:
        $ne: attrs._id
    )
    
    # Revisa el mismo nombre.
    throw new Meteor.Error(302, 'Ya existe una provincia con el mismo nombre', provinciaConMismoNombre._id)  if attrs.nombre and provinciaConMismoNombre
    provincia =
      nombre: attrs.nombre
      regionId: attrs.regionId

    Provincias.update attrs._id,
      $set: provincia

    attrs._id
