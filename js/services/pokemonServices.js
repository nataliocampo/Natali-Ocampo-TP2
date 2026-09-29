const API_URL = 'https://pokeapi.co/api/v2/pokemon/';


export const obtenerPokemon = async (pokeBuscado) => {
 
  const resp = await fetch(`${API_URL}${pokeBuscado}`);
 
  if (!resp.ok){
       throw new Error("Pokemon no encontrado")
  }
  const datos = await resp.json();

   return datos;
  
  }

 



export const obtenerlistaPokemones = async () => {
 
  const resp = await fetch(`${API_URL}?limit=25`);
   if (!resp.ok){
       throw new Error("Error obtencion de lista")
  }

    const datos = await resp.json();
     return datos.results;
  }
  

 



