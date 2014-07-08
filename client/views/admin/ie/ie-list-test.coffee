Template.ieListt.ies = -> return {
  
  # ## Id
  #   * While not required, setting a unique table id makes external manipulation possible through jquery
  id: "ieList"
  
  # ## Columns
  #   * Map your dataset to columns you want displayed
  columns: [{
    title: "Nombre"
    data: "nombre"
  },{
    title: "Código"
    data: "codigo"
  },{
    title: "Director"
    data: "director"
  }]
  
  # ## Subscription
  #   * the datatables publication providing the data on the server
  subscription: "ies"
  
  # ## Query
  #   * the initial client filter on the dataset
}
