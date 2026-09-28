

export const mostrarAlerta = () => {
  
    Swal.fire({template:"#templateErrorPokemon"});

};

export const limpiarInput = () => {
  document.querySelector("#inputPokemon").value = " ";
};




export const alertaInputVacio = () => {
  Swal.fire({template:"#templateInputVacio"});
};