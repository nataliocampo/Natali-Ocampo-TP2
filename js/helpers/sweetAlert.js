

export const mostrarAlerta = () => {
  
    Swal.fire({template:"#templateErrorPokemon"});

};

export const limpiarInput = () => {
  document.querySelector("#inputPokemon").value = " ";
};
