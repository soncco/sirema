Router.configure
  layoutTemplate: 'layout'
  loadingTemplate: 'loading'
  waitOn: ->
    return Meteor.subscribe 'currentUser'

filters =
  isAdmin: (pause)->
    #if @ready()
    #  return
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

  # IEs.
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

  @route 'forbidden'

Router.onBeforeAction 'loading'
Router.onBeforeAction -> clearErrors()
Router.onBeforeAction filters.isAdmin,
  only: ['regionNew']
Router.onBeforeAction filters.isLoggedIn,
  only: ['regionNew']