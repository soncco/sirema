Template.regionList.helpers regiones: ->
    Regiones.find {}


Template.regionList.rendered = siremaTableSorter
