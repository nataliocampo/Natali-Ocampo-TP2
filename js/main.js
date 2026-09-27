import { obtenerPokemon } from "./services/pokemonServices";
import { renderPokemonCard } from "./components/pokemonCard";
import { renderTodos } from "./components/pokemonCard";
import { listaPokemon } from "./services/pokemonServices";


const init = async () => {
  const res = await obtenerPokemon();
  
   const pokemon = await obtenerPokemon(res);

};

init();