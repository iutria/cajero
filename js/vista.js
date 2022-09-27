
const vista_principal = 'vista-principal';
const vista_telefono = 'vista-telefono';
const vista_codigo = 'vista-codigo';
const vista_cantidad = 'vista-cantidad';
const vista_error = 'vista-error';
const vista_dinero = 'vista-dinero';
const vista_usuarios = 'vista-usuarios';


const txt_telefono = document.getElementById('txt-telefono');
const txt_codigo = document.getElementById('txt-codigo');
const txt_cantidad = document.getElementById('txt-cantidad');


let telefono;
let codigo;
let cantidad;


function quitar_poner_vista(quitar,poner){

    if(typeof(quitar)=='string'){
        try {
            document.getElementById(quitar).classList.add('d-none');
        } catch (error) {}
    }else if(typeof(quitar)=='object'){
        for (let i = 0; i < quitar.length; i++) {
            try {
                document.getElementById(quitar[i]).classList.add('d-none');
            } catch (error) {}
        }
    }

    if(typeof(poner)=='string'){
        try {
            document.getElementById(poner).classList.remove('d-none');
        } catch (error) {}
    }else if(typeof(poner)=='object'){
        for (let i = 0; i < poner.length; i++) {
            try {
                document.getElementById(poner[i]).classList.add('d-none');
            } catch (error) {}
        }
    }
}

function cancelar(){
    quitar_poner_vista(
        [
            vista_telefono,
            vista_codigo,
            vista_cantidad,
            vista_error,
            vista_dinero,
            vista_usuarios
        ],
        vista_principal
    );
    txt_telefono.value = '';
    txt_codigo.value = '';
    txt_cantidad.value = '';
    telefono = null;
    codigo = null;
    cantidad = null;
    usuario_actual = null;
}

const myModal = new bootstrap.Modal(document.getElementById('alerta'));
function mostrar_alerta(txt_titulo,txt_texto){
    let titulo = document.getElementById('alerta-titulo');
    let mensaje = document.getElementById('alerta-mensaje');
    titulo.innerHTML = txt_titulo;
    mensaje.innerHTML = txt_texto;
    myModal.show();
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})