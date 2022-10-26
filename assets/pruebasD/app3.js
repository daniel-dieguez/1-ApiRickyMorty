$(() => {
    $("#btnApi").click(() => {
      viewData();
    });
  });
  
  const viewData = () => {
    $.ajax({
      url: `https://rickandmortyapi.com/api/character`,
      method: "GET",
      success: (listarick) => {
        var output = "";
        var apiHTML = document.getElementById("api");
        $.each(listarick.results, (index,value) => {
            new Promise((resolved, reject) => {
            $.ajax({
              url: value.url,
              method:'GET',
              success: (ricky) =>{  //recordemos que en 'ricky' es una nueva variante por decirlo de aalguna forma que nos ayudara
                resolved (ricky);         // en lo que es variante para llamar a una nueva forma y sea usada para la api
              },
              error: (e) => {
                reject(e);
            }
  
          }); 
          
        }).then ((ricky)=> {
          output += `
                      <div class="card" style="width: 18rem;">
                <img src="${ricky.image}" class="card-img-top" alt="..."> 
                <div class="card-body">
                  <h5 class="card-title">${value.name}</h5>
                  <p class="card-text">${value.species}</p>
                  <a href="#" class="btn btn-primary">${value.gender}</a>
                </div>
              </div>
             `; 
      apiHTML.innerHTML = output;         // en el rick image dependera de como este desarrollada la api
  
        }).catch((e) =>{
          console.log(e);
        })
  
        });
      },
      error: (e) => {
        console.log(e);
      },
    });
}