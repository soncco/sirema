@Regiones = new Meteor.Collection 'regiones'

Meteor.methods
  saveRegion: (attrs) ->
    regionConMismoNombre = Regiones.findOne(nombre:
      $regex: attrs.nombre
      $options: 'i'
    )
    
    # Revisa el mismo nombre.
    throw new Meteor.Error(302, 'Ya existe una región con el mismo nombre', regionConMismoNombre._id)  if attrs.nombre and regionConMismoNombre
    region =
      codigo: attrs.codigo
      nombre: attrs.nombre

    regionId = Regiones.insert(region)
    regionId

  updateRegion: (attrs) ->
    regionConMismoNombre = Regiones.findOne(
      nombre:
        $regex: attrs.nombre
        $options: 'i'

      _id:
        $ne: attrs._id
    )
    
    # Revisa el mismo nombre.
    throw new Meteor.Error(302, 'Ya existe una región con el mismo nombre', regionConMismoNombre._id)  if attrs.nombre and regionConMismoNombre
    region =
      codigo: attrs.codigo
      nombre: attrs.nombre

    Regiones.update attrs._id,
      $set: region

    attrs._id
