fetch("https://hp-api.onrender.com/api/characters")
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      console.log(data);
      const grid = document.querySelector(".grid");
      data.forEach((character) => {
         const card = document.createElement("div");
         card.classList.add("card");

         // Para ponerle vivo o muerto en vez de true o false
         let estado;
         if (character.alive === true) {
            estado = "Vivo";
         } else {
            estado = "Muerto";
         }

         card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <div class="card-content">
                <h3>${character.name}</h3>
                <p><strong>Especie:</strong> ${character.species}</p>
                <p><strong>Actor:</strong> ${character.actor}</p>
                <p><strong>Estado:</strong> ${
                   character.alive ? "Vivo" : "Muerto"
                }</p>
            </div>
        `;
         grid.appendChild(card);
      });
   })
   .catch((error) => {
      console.error("algo salió mal: ", error);
   });
