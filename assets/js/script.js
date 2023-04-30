// const formulario = document.querySelector('form');
// formulario.addEventListener('submit', (event) => {event.preventDefault()});

class Usuario {
    constructor(nombre, trabajo, correo, telefono, descripcion) {
        this.name = nombre;
        this.work = trabajo;
        this.email = correo;
        this.phone = telefono;
        this.description = descripcion;
    }
};

function capturar() {

    let nombre = document.getElementById('nombre').value;
    let trabajo = document.getElementById('trabajo').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let descripcion = document.getElementById('descripcion').value;

    let nuevoUsuario = new Usuario(nombre, trabajo, correo, telefono, descripcion);

    document.getElementById('parrafoNombre').textContent = nuevoUsuario.name;
    document.getElementById('parrafoTrabajo').textContent = nuevoUsuario.work;
    document.getElementById('parrafoCorreo').textContent = nuevoUsuario.email;
    document.getElementById('parrafoTelefono').textContent = nuevoUsuario.phone;
    document.getElementById('parrafoDescripcion').textContent = nuevoUsuario.description;

    // document.getElementById('parrafoNombre').textContent = user.name;
    // document.getElementById('parrafoTrabajo').textContent = user.work;
    // document.getElementById('parrafoCorreo').textContent = user.email;
    // document.getElementById('parrafoTelefono').textContent = user.phone;
    // document.getElementById('parrafoDescripcion').textContent = user.description;
    // llenarPerfil(nuevoUsuario);
    borrarCampos();


};



// function llenarPerfil (user) {

//     document.getElementById('parrafoNombre').textContent = user.name;
//     document.getElementById('parrafoTrabajo').textContent = user.work;
//     document.getElementById('parrafoCorreo').textContent = user.email;
//     document.getElementById('parrafoTelefono').textContent = user.phone;
//     document.getElementById('parrafoDescripcion').textContent = user.description;

// };

function borrarCampos() {

    document.getElementById('nombre').value = '';
    document.getElementById('trabajo').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('descripcion').value = '';

};
