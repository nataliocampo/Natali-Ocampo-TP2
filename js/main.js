import { obtenerPokemon, obtenerlistaPokemones } from "./services/pokemonServices.js";
import { renderPokemonCard, renderTodos } from "./components/pokemonCard.js";
import { mostrarAlerta,limpiarInput,alertaInputVacio, mostrarSpinner, ocultarSpinner} from './helpers/sweetAlert.js';


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
    
    return;
  }
  mostrarSpinner();
  contenedorResultado.innerHTML = "";


  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
      });


     const pokemon = await obtenerPokemon(busqueda);

   contenedorResultado.innerHTML = renderPokemonCard(pokemon);
     limpiarInput();


  } catch (error) {
   mostrarAlerta();
  
  
  }
   finally {
  
    ocultarSpinner();
   }
};

 cargarPokemones();

const reinicialPantalla = async ()=> {

 limpiarInput();
 await cargarPokemones(); 

 

}

botonBuscar.addEventListener("click", buscarPokemon);

botonVolver.addEventListener("click", reinicialPantalla);

