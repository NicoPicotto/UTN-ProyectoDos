fetch("https://hp-api.onrender.com/api/characters")
   .then((response) => response.json())
   .then((data) => {
      const $grid = document.querySelector(".grid");
      data.forEach((character) => {
         // Algunas no tienen foto y queda feo así que agregué condicional para mostrar las que tienen foto nomas
         if (character.image) {
            const card = document.createElement("div");
            card.classList.add("card");

            // Para ponerle vivo o muerto en vez de true o false
            let estado;
            if (character.alive === true) {
               estado = "Vivo ✅";
            } else {
               estado = "Muerto 💀";
            }

            card.innerHTML = `
                                <img src="${character.image}" alt="${character.name}">
                                <div class="card-content">
                                    <h3>${character.name}</h3>
                                    <p><strong>🧬 Especie:</strong> ${character.species}</p>
                                    <p><strong>🎥 Intérprete:</strong> ${character.actor}</p>
                                    <p><strong>🩺 Estado:</strong> ${estado}</p>
                                </div>
                            `;
            $grid.appendChild(card);
         }
      });
   })
   .catch((error) => {
      console.error("algo salió mal: ", error);
   });
