Template.test.created = function() {
  var handle = Regiones.find({}).observe({
    addedAt: function (doc, atIndex, before) {
      jQuery("#table").jqGrid('addRowData', atIndex + 1, doc);
    },
    changedAt: function(newDoc, oldDoc, atIndex) {
      jQuery("#table").jqGrid('setRowData', atIndex, newDoc);
    },
    removedAt: function(oldDoc, atIndex) {
      jQuery("#table").jqGrid('delRowData', atIndex, oldDoc);
    }
  });
};

Template.test.rendered = function() {
  jQuery("#table").jqGrid({
    datatype: 'local',
    data: Regiones.find({}).fetch(),
    colNames: ['Código', 'Región'],
    colModel: [
      {name: 'codigo', index: 'codigo', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
      {name: 'nombre', index: 'nombre', searchoptions: {sopt: ['cn','nc','eq','bw','bn','ew','en']}},
    ],
    rowNum: 10,
    rowList: [10, 20, 30, 40, 50],
    pager: '#pager',
    sortname: 'nombre',
    viewrecords: true,
    sortorder: 'desc',
    caption: 'Regiones',
    height: '100%',
    gridview: true,
    ignoreCase: true,
    autoencode: true,
    autowidth: true
  })
  .jqGrid('filterToolbar',{searchOperators : true, searchOnEnter: false});

};

Template.test.destroyed = function() {
  jQuery(".ui-jqgrid").remove();
  // Remove jqGrid, working to use GridDestroy() method.
};

Template.test.events({
  'click .test': function(e) {
    jQuery("#table").GridDestroy();
  }
});
