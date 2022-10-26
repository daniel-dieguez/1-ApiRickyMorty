$(() => {
    $("#btnApi").click(() => {
      viewData();
    });
  });
  
  const viewData = () => {
    $.ajax({
      url: `https://rickandmortyapi.com/api/character`,
      method: "GET",
      success: (data) => {            // el success sirve para cuando se cumpla la peticion
        console.log(data.results);
      },
      error: (e) => {
        console.log(e);
      },
    });
  };
  
  
  //Todo esto es para que tenga una funcion correcta en la consola



  // https://rickandmortyapi.com/api/character
  