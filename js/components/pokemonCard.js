export const renderPokemonCard = (pokemon) => {
    return `
         <div class="col">
             <div class="card h-100">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                            
                                <div class="card-body">
                                  <h3 class="card-title">${pokemon.name}</h3>

                                </div>
                           
                 </div>
           </div>
   `        
};