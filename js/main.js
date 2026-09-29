import { obtenerPokemon, obtenerlistaPokemones } from "./services/pokemonServices.js";
import { renderPokemonCard, renderTodos } from "./components/pokemonCard.js";
import { mostrarAlerta,limpiarInput,alertaInputVacio, mostrarSpinner, ocultarSpinner,alertaCargarTodos} from './helpers/sweetAlert.js';


const inputPokemon = document.querySelector("#inputPokemon");
const botonBuscar = document.querySelector("#btnBuscar");
const contenedorResultado = document.querySelector("#resultado");
const botonVolver = document.querySelector("#btnVolver");

//cargarpokemones inicio
const cargarPokemones = async () => {
   mostrarSpinner();
 try {
    
  const lista = await  obtenerlistaPokemones();
  const detalle = await Promise.all(lista.map(p=> obtenerPokemon(p.name)));
  contenedorResultado.innerHTML=renderTodos(detalle);

 } catch (error) {
  alertaCargarTodos();
 
 }
  finally {
    ocultarSpinner();
   }
  
}

//buscar pokemon
const buscarPokemon = async () => {
  const busqueda = inputPokemon.value.toLowerCase().trim();

  if (!busqueda){
    alertaInputVacio();   
    return;
  }
  mostrarSpinner();
  contenedorResultado.innerHTML = "";
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 800);
      });
     const pokemon = await obtenerPokemon(busqueda);

   contenedorResultado.innerHTML = renderPokemonCard(pokemon);
  
     limpiarInput();

  } catch (error) {
    
   mostrarAlerta();
   cargarPokemones();
  }
   finally {
    ocultarSpinner();
   }
};

cargarPokemones();

const reinicialPantalla = async ()=> {

 limpiarInput();
  contenedorResultado.innerHTML = "";

 await cargarPokemones(); 
}

botonBuscar.addEventListener("click", buscarPokemon);

botonVolver.addEventListener("click", reinicialPantalla);

