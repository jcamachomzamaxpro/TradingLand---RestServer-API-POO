import { addTraders, allTraders, deleteTraders } from "./API.js";

document.addEventListener('DOMContentLoaded', loadTraders);

async function loadTraders() {
    const traders = await allTraders();

    const container = document.querySelector('tbody');
    
    traders.forEach((trader) => {
        const {_id, nombre, edad, nacionalidad, presupuesto} = trader
        container.innerHTML += `
        
        <tr>
            <td>
            <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">${nombre}</h6>
                </div>
            </div>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">${edad}</p>
            </td>
            <td class="align-middle text-center text-sm">
                <p class="text-xs font-weight-bold mb-0">${nacionalidad}</p>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">${presupuesto}</span>
            </td>
            <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs">
                    Editar
                </a>
            </td> 
            <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs borrar" id="${_id}">
                    Borrar
                </a>
            </td>
                      
        </tr>

        `
    });
};


// insertar 
const form = document.querySelector('#formAgregar');
form.addEventListener("submit", insertarTrader);

function insertarTrader(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const edad = document.querySelector('#edad').value;
    const nacionalidad = document.querySelector('#nacionalidad').value;
    const presupuesto = document.querySelector('#presupuesto').value;

    const datos = {
        nombre,
        edad,
        nacionalidad,
        presupuesto
    };

    if (validation(datos)) {
        alert("Todos los datos son obligatorios");
    } else {
        alert("Datos guardados correctamente.");
        return addTraders(datos);
    }
        
    
    function validation(Objeto) {
      return !Object.values(Objeto).every((element) => element !== "");
    };
}



// borrar
const main = document.querySelector('main');
main.addEventListener("click", borrar);

function borrar(e) {
    if (e.target.classList.contains("borrar")) {
        console.log(e.target);
        const id = e.target.getAttribute("id");
        console.log(id);

        const confirmacion = confirm("Quiere eleminar este trader?")
    
        if (confirmacion) {
            deleteTraders(id);
        }
        

    }
}

