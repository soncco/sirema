Template.treeDirectivo.helpers
  directivoTree: ->
    tree = []
    dominios = @.dominios
    aspectos = @.aspectos
    indicadores = @.indicadores

    dominioData = (id) ->
      Meteor.subscribe 'dominio', id
      Dominios.findOne {_id: id}

    aspectoData = (id) ->
      Meteor.subscribe 'aspecto', id
      Aspectos.findOne {_id: id}

    indicadorData = (id) ->
      Meteor.subscribe 'indicador', id
      Indicadores.findOne {_id: id}

    dominios.forEach (d) ->
      row = {}
      row.dominioId = d.dominioId
      row.data = dominioData d.dominioId

      child = _.filter aspectos, (aspecto) ->
        aspecto.parent == d.dominioId

      child.forEach (a) ->
        a.data = aspectoData a.aspectoId
        grandchild = _.filter indicadores, (indicador) ->
          indicador.parent == a.aspectoId
        a.indicadores = grandchild

        a.indicadores.forEach (i) ->
          i.data = indicadorData i.indicadorId
          return

        return

      row.aspectos = child

      tree.push row
      return
    return tree


Template.treeDocente.helpers
  docenteTree: ->
    tree = []
    dominios = @.dominios
    aspectos = @.aspectos
    indicadores = @.indicadores

    aspectoData = (id) ->
      Meteor.subscribe 'aspecto', id
      Aspectos.findOne {_id: id}

    indicadorData = (id) ->
      Meteor.subscribe 'indicador', id
      Indicadores.findOne {_id: id}
      
    aspectos.forEach (a) ->
      row = {}
      row.aspectoId = a.aspectoId
      row.data = aspectoData a.aspectoId

      child = _.filter indicadores, (indicador) ->
        indicador.parent == a.aspectoId

      row.indicadores = child

      row.indicadores.forEach (i) ->
        i.data = indicadorData i.indicadorId
        return

      tree.push row
      return

    return tree