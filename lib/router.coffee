Router.configure
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'

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

  @route 'ieNew',
    path: '/ie-nuevo'
    waitOn: ->
      Meteor.subscribe 'distritos'

    fastRender: true

Router.onBeforeAction 'loading'
Router.onBeforeAction -> clearErrors()
