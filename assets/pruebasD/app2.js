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
        $.each(listarick.results, (index, value) => {
          output += `
          <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body" class='row mt-2'>
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text">${value.species}</p>
              </div>           
                `;
        });
        apiHTML.innerHTML = output; 
      },
      error: (e) => {
        console.log(e);
      },
    });
  };