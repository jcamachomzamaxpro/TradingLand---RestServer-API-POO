import { addTraders, allTraders, deleteTraders, selectOne, updateTraders } from "./API.js";

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
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs update" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalEditar">
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
const selectBorrar = document.querySelector('main');
selectBorrar.addEventListener("click", borrar);

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
};


// Seleccionar para editar
const selectUpdate = document.querySelector('main');
selectUpdate.addEventListener('click', getInfo);


async function getInfo(e) {
    if (e.target.classList.contains('update')) {
        const id = e.target.getAttribute('id');
        const info = await selectOne(id);

        const {_id, nombre, edad, presupuesto, nacionalidad} = info;


        const editarId = document.querySelector('#editarId');
        const editarNombre = document.querySelector('#editarNombre');
        const editarEdad = document.querySelector('#editarEdad');
        const editarNacionalidad = document.querySelector('#editarNacionalidad');
        const editarPresupuesto = document.querySelector('#editarPresupuesto');

        editarId.value = _id;
        editarNombre.value = nombre;
        editarEdad.value = edad;
        editarNacionalidad.value = nacionalidad;
        editarPresupuesto.value = presupuesto;

        console.log(info);
    }
};

// Update

const formEditar = document.querySelector('#formEditar');
formEditar.addEventListener('submit', update);

function update(e) {
    e.preventDefault();
    const id = document.querySelector('#editarId').value;
    const nombre = document.querySelector('#editarNombre').value;
    const edad = Number(document.querySelector('#editarEdad').value);
    const nacionalidad = document.querySelector('#editarNacionalidad').value;
    const presupuesto = Number(document.querySelector('#editarPresupuesto').value);

    const datos = {
        id,
        nombre,
        edad,
        nacionalidad,
        presupuesto
    };

    console.log(datos);

    alert("Se ha actualizado exitosamente");

    return updateTraders(datos, id);

    
}




