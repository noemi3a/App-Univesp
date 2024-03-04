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


  


  
