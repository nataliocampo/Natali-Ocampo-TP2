import { obtenerPokemon, obtenerlistaPokemones } from "./services/pokemonServices.js";
import { renderPokemonCard, renderTodos } from "./components/pokemonCard.js";

const inputPokemon = document.querySelector("#inputPokemon");

const botonBuscar = document.querySelector("#btnBuscar");

const contenedorResultado = document.querySelector("#resultado");

//cargarpokemones inicio
const cargarPokemones = async () => {
 
  const lista = await  obtenerlistaPokemones();
  
  const detalle = await Promise.all(lista.map(p=> obtenerPokemon(p.name)));
  

  contenedorResultado.innerHTML=renderTodos(detalle);
}




//buscar pokemon
const buscarPokemon = async () => {
  const busqueda = inputPokemon.value.toLowerCase();

  contenedorResultado.innerHTML = "";

  if (!busqueda) {
    mostrarMensaje("agregar alertas1!.");

    return;
  }
  const pokemon = await obtenerPokemon(busqueda);

  contenedorResultado.innerHTML = renderPokemonCard(pokemon);

}

cargarPokemones(); 
botonBuscar.addEventListener("click", buscarPokemon);
