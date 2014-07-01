Template.insertData.helpers
  renderTree: ->
    tree = []
    dominios = @.dominios
    aspectos = @.aspectos
    indicadores = @.indicadores
    console.log @.tipo

    if @.tipo == 'directivo'
      dominios.forEach (d) ->
        row = {}
        row.dominioId = d.dominioId

        child = _.filter aspectos, (aspecto) ->
          aspecto.parent == d.dominioId

        child.forEach (a) ->
          grandchild = _.filter indicadores, (indicador) ->
            indicador.parent == a.aspectoId
          a.indicadores = grandchild
          return

        row.aspectos = child

        tree.push row
        return

      console.log JSON.stringify tree
    else
      aspectos.forEach (a) ->
        row = {}
        row.aspectoId = a.aspectoId

        child = _.filter indicadores, (indicador) ->
          indicador.parent == a.aspectoId

        row.indicadores = child

        tree.push row
        return

      console.log JSON.stringify tree
    return