erbs = 
  hispano: 'Hispano'
  eib: 'EIB'

niveles = 
  inicial_cuna: 'Inicial - Cuna'
  inicial_cuna_jardin: 'Inicial - Cuna - Jardín'
  inicial_jardin: 'Inicial - Jardín'
  primaria: 'Primaria'
  secundaria: 'Secundaria'

generos =
  mixto: 'Mixto'
  mujeres: 'Mujeres'
  varones: 'Varones'

areas = 
  urbana: 'Urbana'
  rural: 'Rural'

theEbr = (cellValue, options, rowData) -> erbs[rowData.ebr]
theNivel = (cellValue, options, rowData) -> niveles[rowData.nivel]
theGenero = (cellValue, options, rowData) -> generos[rowData.genero]
theArea = (cellValue, options, rowData) -> areas[rowData.area]
theDistrito = (cellValue, options, rowData) -> 
  Meteor.subscribe('distrito', rowData.distritoId)
  Distritos.findOne
    _id: rowData.distritoId

theActions = (cellValue, options, rowData) ->
  str = '<a href="/ie/' + rowData._id + '" title="Ver o editar"><span class="text-primary fa fa-edit fa-lg"></span></a>'
  str

Template.ieList.created = ->
  handle = Ies.find({}).observe
    addedAt: (doc, atIndex, before) ->
      jQuery('#grid').jqGrid('addRowData', (atIndex + 1), doc)

    changedAt: (newDoc, oldDoc, atIndex) ->
      jQuery('#grid').jqGrid('setRowData', atIndex, doc)


Template.ieList.rendered = ->
  jQuery('#grid').jqGrid
    datatype: 'local',
    data: Ies.find({}).fetch(),
    colNames: ['Nombre', 'Código Modular', 'Código Institución', 'EBRRaW', 'DistritoRaw', 'NivelRaw', 'GeneroRaw', 'AreaRaw',
    'EBR', 'Localizado en', 'Nivel', 'Genero', 'Área', 'Acciones'],
    colModel: [
      {name: 'nombre', index: 'nombre', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
      {name: 'modular', index: 'modular', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
      {name: 'codigo', index: 'codigo', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
      {name: 'ebr', index: 'ebr', hidden: true, search: false},
      {name: 'distritoId', index: 'distritoId', hidden: true, search: false},
      {name: 'nivel', index: 'nivel', hidden: true, search: false},
      {name: 'genero', index: 'genero', hidden: true, search: false},
      {name: 'area', index: 'area', hidden: true, search: false},

      {name: 'ebrP', index: 'ebrP', formatter: theEbr, stype: 'select',searchoptions: {value: _.extend({'': 'Todos'},erbs)}},
      {name: 'distritoIdP', index: 'distritoIdP', formatter: theDistrito, stype: 'select', searchoptions: {value: _.extend({'': 'Todos'}, '')}},
      {name: 'nivelP', index: 'nivelP', formatter: theNivel, stype: 'select', searchoptions: {value: _.extend({'': 'Todos'}, niveles)}},
      {name: 'generoP', index: 'generoP', formatter: theGenero, stype: 'select', searchoptions: {value: _.extend({'': 'Todos'}, generos)}},
      {name: 'areaP', index: 'areaP', formatter: theArea, stype: 'select', searchoptions: {value: _.extend({'': 'Todos'}, areas)}}
      {name: 'actions', index: 'actions', formatter: theActions, search: false, sortable: false, title: false},
    ],
    rowNum: 10
    rowList: [10, 20, 30, 40, 50],
    pager: '#pager',
    sortname: 'first',
    viewrecords: true,
    sortorder: 'desc',
    height: '100%',
    gridview: true,
    ignoreCase: true,
    autoencode: true,
    autowidth: true
  .jqGrid('filterToolbar', {searchOperators : true, searchOnEnter: false})

Template.ieList.destroyed = ->
  jQuery('.ui-jqgrid').remove()
