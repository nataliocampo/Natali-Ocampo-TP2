import { obtenerPokemon, obtenerlistaPokemones } from "./services/pokemonServices.js";
import { renderPokemonCard, renderTodos } from "./components/pokemonCard.js";
import { mostrarAlerta,limpiarInput,alertaInputVacio} from './helpers/sweetAlert.js';


const inputPokemon = document.querySelector("#inputPokemon");

const botonBuscar = document.querySelector("#btnBuscar");

const contenedorResultado = document.querySelector("#resultado");
const botonVolver = document.querySelector("#btnVolver");




//cargarpokemones inicio
const cargarPokemones = async () => {
 
  const lista = await  obtenerlistaPokemones();
  
  const detalle = await Promise.all(lista.map(p=> obtenerPokemon(p.name)));
  

  contenedorResultado.innerHTML=renderTodos(detalle);
}




//buscar pokemon
const buscarPokemon = async () => {
  const busqueda = inputPokemon.value.toLowerCase().trim();
  if (!busqueda){
    alertaInputVacio();
    limpiarInput();

    return;
  }

  try {
     const pokemon = await obtenerPokemon(busqueda);

   contenedorResultado.innerHTML = renderPokemonCard(pokemon);
     limpiarInput();


  } catch (error) {
   mostrarAlerta();
  
  }

}

cargarPokemones(); 

botonBuscar.addEventListener("click", buscarPokemon);

botonVolver.addEventListener("click", cargarPokemones);

