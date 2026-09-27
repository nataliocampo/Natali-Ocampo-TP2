const API_URL = 'https://pokeapi.co/api/v2/pokemon/';


export const obtenerPokemon = async (pokeBuscado) => {
 
  const resp = await fetch('${API_URL}${pokeBuscado}');

  
  const datos = await resp.json();

  return datos};