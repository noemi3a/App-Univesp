const containerVideos = document.querySelector(".videos__container");

  fetch("http://localhost:3000/videos")
    .then(res => res.json())
    .then((videos) => {
      videos.forEach((video) => {
        containerVideos.innerHTML += `
          <li class="videos__item">
            <iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
              <p class="descricao">${video.descricao}</p>
              <p class="categoria">${video.categoria}</p>

            </div>
          </li>
        `;
      });
    })
    .catch(error => console.error('Erro ao buscar vídeos:', error));


  


  
//Código omitido

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
      }
    }
