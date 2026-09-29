

export const mostrarAlerta = () => {
  
    Swal.fire({template:"#templateErrorPokemon"});

};

export const limpiarInput = () => {
  document.querySelector("#inputPokemon").value = "";
};

export const alertaCargarTodos = () => {
  
    Swal.fire({template:"#templateErrorCargartodos"});

};


export const alertaInputVacio = () => {
  Swal.fire({template:"#templateInputVacio"});
};

export const mostrarSpinner = () => {
  document.querySelector("#spinner").classList.remove("d-none");
};

export const ocultarSpinner = () => {
  document.querySelector("#spinner").classList.add("d-none");
};