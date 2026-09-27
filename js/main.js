import { obtenerPokemon } from "./services/pokemonServices";
import { renderPokemonCard } from "./components/pokemonCard";

const init = async () => {
  const res = await obtenerPokemon();
  
   const pokemon = await obtenerPokemon(res);
   
};

init();