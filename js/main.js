import { obtenerPokemon, obtenerlistaPokemones } from "./services/pokemonServices.js";
import { renderPokemonCard, renderTodos } from "./components/pokemonCard.js";

const inputPokemon = document.querySelector("#pokemon");

const botonBuscar = document.querySelector("#btnBuscar");

const contenedorResultado = document.querySelector("#resultado");

//cargarpokemones inicio
const cargarPokemones = async () => {
 
  const lista = await  obtenerlistaPokemones();
  const detalle = await Promise.all(lista.map(p=> obtenerPokemon(p.nombre)));
  

  contenedorResultado.innerHTML=renderTodos(detalle);
}




//buscar pokemon
const buscarPokemon = async () => {
  const id = inputPokemon.value;

  contenedorResultado.innerHTML = "";

  if (!id) {
    mostrarMensaje("agregar alertas1!.");

    return;
  }


}


// const init = async () => {
//   const res = await obtenerPokemon();
  
//    const pokemon = await obtenerPokemon(res);

// };

window.addEventListener('DOMContentLoaded', cargarPokemones);