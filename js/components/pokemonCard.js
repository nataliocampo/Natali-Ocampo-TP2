const contenidoPokemonCard= (pokemon)=> 
`
             <div class="card h-100">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                            
                        <div class="card-body">
                            <h3 class="card-title">${pokemon.name}</h3>

                            <p class="card-text mb-1">
                               <strong>N°:</strong>
                                ${pokemon.id}
                            </p>

                            <p class="card-text mb-1">
                                <strong>Altura:</strong>
                                ${pokemon.height}
                            </p>

                            <p class="card-text mb-0">
                                <strong>Peso:</strong>
                                ${pokemon.weight}
                           </p>
                           
                        </div>
                 </div>
            </div>
         `       
;
export const renderPokemonCard = (pokemon) => {
    return  `<div class="col-8 col-md-3 mx-auto"">   ${contenidoPokemonCard(pokemon) } </div>`
};


export const renderTodos = (listaPokemones) => {
  return listaPokemones.map(pokemon => `<div class="col">${contenidoPokemonCard(pokemon)}</div>`).join("");
};

