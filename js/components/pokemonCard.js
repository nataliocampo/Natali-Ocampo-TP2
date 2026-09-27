export const renderPokemonCard = (pokemon) => {
    return `
         <div class="col">
             <div class="card h-100">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.nombre}">
                            
                        <div class="card-body">
                            <h3 class="card-title">${pokemon.nombre}</h3>

                            <p class="card-text">
                               <strong>N°:</strong>
                                ${pokemon.id}
                            </p>

                            <p class="card-text">
                                <strong>Altura:</strong>
                                ${pokemon.altura}
                            </p>

                            <p class="card-text">
                                <strong>Peso:</strong>
                                ${pokemon.peso}
                           </p>
                           
                        </div>
                 </div>
            </div>
         `        
};


export const renderTodos = (listaPokemones) => {
  return listaPokemones.map(p => `
    <tr>
      <td>${p.nombre}</td>

        <p class="card-text">
        <strong>N°:</strong>
         ${pokemon.id}
        </p>

        <p class="card-text">
        <strong>Altura:</strong>
        ${pokemon.altura}
        </p>

        <p class="card-text">
        <strong>Peso:</strong>
        ${pokemon.peso}
      
    </tr>`
  ).join("");
};

