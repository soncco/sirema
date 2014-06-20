Router.configure
  layoutTemplate: 'layout'
  loadingTemplate: 'loading'
  waitOn: ->
    return Meteor.subscribe 'currentUser'

filters =
  isAdmin: (pause)->
    if (!isAdmin(Meteor.user()))
      @render 'forbidden'
      pause()
    return

  isLoggedIn: (pause)->
    if !(Meteor.loggingIn() or Meteor.user())
      @render 'forbidden'
      pause()
    return


Router.map ->
  @route 'home', 
    path: '/'

  # Regiones.
  @route 'regionList',
    path: '/regiones'
    waitOn: ->
      Meteor.subscribe 'regiones'
    fastRender: true

  @route 'regionNew', 
    path: '/region-nuevo'
    progress: 
      enabled: false

  @route 'regionEdit', 
    path: '/region/:_id'
    waitOn: ->
      Meteor.subscribe 'region', @params._id
    data: ->
      Regiones.findOne
        _id: @params._id
    fastRender: true

  # Provincias.
  @route 'provinciaList',
    path: '/provincias'
    waitOn: ->
      [ Meteor.subscribe('provincias') ]
    fastRender: true

  @route 'provinciaNew',
    path: '/provincia-nuevo'
    waitOn: ->
      Meteor.subscribe 'regiones'
    fastRender: true

  @route 'provinciaEdit',
    path: '/provincia/:_id'
    waitOn: ->
      [ Meteor.subscribe('provincia', @params._id), Meteor.subscribe('regiones') ]

    data: ->
      Provincias.findOne _id: @params._id
    fastRender: true

  # Distritos.
  @route 'distritoList',
    path: '/distritos'
    waitOn: ->
      Meteor.subscribe 'distritos'
    fastRender: true

  @route 'distritoNew',
    path: '/distrito-nuevo'
    waitOn: ->
      Meteor.subscribe 'provincias'
    fastRender: true

  @route 'distritoEdit',
    path: '/distrito/:_id'
    waitOn: ->
      [ Meteor.subscribe('distrito', @params._id), Meteor.subscribe('provincias') ]
    data: ->
      Distritos.findOne '_id': @params._id

    fastRender: true

  # Ies.
  @route 'ieNew',
    path: '/ie-nuevo'
    waitOn: ->
      Meteor.subscribe 'distritos'

    fastRender: true

  @route 'ieList',
    path: '/ies'
    waitOn: ->
      Meteor.subscribe 'ies'
    fastRender: true

  @route 'ieEdit',
    path: '/ie/:_id'
    waitOn: ->
      [ Meteor.subscribe('ie', @params._id), Meteor.subscribe('distritos') ]
    data: ->
      Ies.findOne '_id': @params._id
    fastRender: true

  # Docentes.
  @route 'docenteNew',
    path: '/docente-nuevo'
    waitOn: ->
      Meteor.subscribe 'ies'
    fastRender: true

  @route 'docenteList',
    path: '/docentes'
    waitOn: ->
      Meteor.subscribe 'docentes'
    fastRender: true

  @route 'docenteEdit',
    path: '/docente/:_id'
    waitOn: ->
      [ Meteor.subscribe('docente', @params._id), Meteor.subscribe('ies')]
    data: ->
      Docentes.findOne '_id': @params._id

  # Aspectos.
  @route 'dominioNew',
    path: 'dominio-nuevo'
    loading: false

  @route 'dominioList',
    path: 'dominios'
    waitOn: ->
      Meteor.subscribe 'dominios'
    fastRender: true

  @route 'dominioEdit',
    path: '/dominio/:_id'
    waitOn: ->
      Meteor.subscribe('dominio', @params._id)
    data: ->
      Dominios.findOne '_id': @params._id


  @route 'aspectoNew',
    path: 'aspecto-nuevo'
    waitOn: ->
      Meteor.subscribe 'dominios'
    fastRender: true

  @route 'aspectoList',
    path: '/aspectos'
    waitOn: ->
      Meteor.subscribe 'aspectos'
    fastRender: true

  @route 'aspectoEdit',
    path: '/aspecto/:_id'
    waitOn: ->
      [ Meteor.subscribe('aspecto', @params._id), Meteor.subscribe('dominios')]
    data: ->
      Aspectos.findOne '_id': @params._id


  @route 'indicadorNew',
    path: 'indicador-nuevo'
    waitOn: ->
      Meteor.subscribe 'aspectos'
    fastRender: true

  @route 'indicadorList',
    path: '/indicadores'
    waitOn: ->
      Meteor.subscribe 'indicadores'
    fastRender: true

  @route 'indicadorEdit',
    path: '/indicador/:_id'
    waitOn: ->
      [ Meteor.subscribe('indicador', @params._id), Meteor.subscribe('aspectos')]
    data: ->
      Indicadores.findOne '_id': @params._id

  # Formularios.
  @route 'formularioNew',
    path: 'formulario-nuevo'
    waitOn: ->
      [
        Meteor.subscribe('dominios'),
        Meteor.subscribe('aspectos'),
        Meteor.subscribe('indicadores')
      ]
    fastRender: true

  @route 'formularioList',
    path: 'formularios'
    waitOn: ->
      Meteor.subscribe 'formularios'

  # Usuarios.
  @route 'usuarioList',
    path: 'usuarios'
    waitOn: ->
      Meteor.subscribe 'usuarios'

  @route 'usuarioNew', 
    path: '/usuario-nuevo'
    progress: 
      enabled: false

  @route 'usuarioEdit', 
    path: '/usuario/:_id'
    waitOn: ->
      Meteor.subscribe 'usuario', @params._id
    data: ->
      usuario.findOne
        _id: @params._id
    fastRender: true

  @route 'forbidden',

  @route 'error404'

Router.onBeforeAction 'loading'
Router.onBeforeAction -> clearErrors()
Router.onBeforeAction filters.isAdmin,
  only: [
    'regionNew', 'regionEdit', 'regionList',
    'provinciaNew', 'provinciaEdit', 'provinciaList',
    'distritoNew', 'distritoEdit', 'distritoList',
    'ieNew', 'ieEdit', 'ieList',
    'dominioNew', 'dominioEdit', 'dominioList',
    'aspectoNew', 'aspectoEdit', 'aspectoList',
    'indicadorNew', 'indicadorEdit', 'indicadorList',
    'formularioNew', 'formularioList'
  ]
Router.onBeforeAction filters.isLoggedIn,
  only: [
    'regionNew', 'regionEdit', 'regionList',
    'provinciaNew', 'provinciaEdit', 'provinciaList',
    'distritoNew', 'distritoEdit', 'distritoList',
    'ieNew', 'ieEdit', 'ieList',
    'dominioNew', 'dominioEdit', 'dominioList',
    'aspectoNew', 'aspectoEdit', 'aspectoList',
    'indicadorNew', 'indicadorEdit', 'indicadorList',
    'formularioNew', 'formularioList'
  ]
