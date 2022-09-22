/**
 * de daviplata se puede retirar maximo $720'000
 * de nequi se puede retirar maximo $2'700.000
 * 
 */

function metodo(precio){
    
    if(precio>2700000 || precio<10000){
        alert('valor invalido, no puede retirar mas de 2700000 o menos de 10000');
        return;
    }

    let str = `${precio}`;
    const vuelto = str.substring(str.length - 4,str.length);
    const nivelado = precio - parseInt(vuelto);

    console.log(precio,parseInt(vuelto),nivelado);
    
    str = `${nivelado}`;

    
}

let usuarios = [];
let dinero = [];
cargar_dinero();
cargar_usuarios();

async function cargar_dinero(){

    let json = await fetch('../json/dinero_cajero.json').then(res => res.json());
    
    for (const item in json) {
        let billete = new Dinero(
            json[item]['valor'],
            json[item]['cantidad'],
        );
        dinero.push(billete);
    }
}
    
async function cargar_usuarios(){
        
    let json = await fetch('../json/usuarios.json').then(res => res.json());
        
    for (const item in json) {
        let usuario = new Usuario(
            json[item]['documento'],
            json[item]['telefono'],
            json[item]['nombre'],
            json[item]['apellido'],
            json[item]['saldo'],
            json[item]['codigo'],
            0
        );
        usuarios.push(usuario);
    }
}

const vista_principal = 'vista-principal';
const vista_telefono = 'vista-telefono';
const vista_codigo = 'vista-codigo';
const vista_cantidad = 'vista-cantidad';
const vista_error = 'vista-error';
const vista_dinero = 'vista-dinero';


const txt_telefono = document.getElementById('txt-telefono');
const txt_codigo = document.getElementById('txt-codigo');
const txt_cantidad = document.getElementById('txt-cantidad');


let telefono;
let codigo;
let cantidad;
let usuario_actual;

function pedir_numero(){
    quitar_poner_vista(vista_principal,vista_telefono);
}


function validar_telefono() {
    
    telefono = txt_telefono.value.trim();

    if(telefono.length==0){
        alert('debe ingresar un numero de telefono');
        return;
    }
    
    obtener_usuario();
    
    
    if(usuario_actual==null){
        alert('el numero de telefono no esta registrado');
        return;
    }
    
    if(usuario_actual.intentos==3){
        alert('ya no puedes realizar solicitud de retiro');
        cancelar();
        return;
    }

    quitar_poner_vista(vista_telefono,vista_codigo);
}

function obtener_usuario(){
    for (let index = 0; index < usuarios.length; index++) {
        if(usuarios[index].telefono==telefono){
            usuario_actual = usuarios[index];
        }
    }
    return null;
}

function validar_codigo(){

    codigo = txt_codigo.value.trim();

    if(codigo.length==0){
        alert('debe ingresar el codigo de confirmacion');
        return;
    }

    if(codigo!=usuario_actual.codigo){
        alert('codigo incorrecto');
        aumentar_intentos();
        cancelar();
        return;
    }

    quitar_poner_vista(vista_codigo,vista_cantidad);
}

function aumentar_intentos(){
    for (let index = 0; index < usuarios.length; index++) {
        if(usuarios[index].telefono==usuario_actual.telefono){
            usuarios[index].intentos = usuarios[index].intentos + 1;
            console.log(usuarios[index].intentos);
        }
    }
}

function validar_cantidad(){

    cantidad = txt_cantidad.value.trim();

    if(cantidad.length == 0){
        alert('debe ingresar la cantidad');
        return;
    }
    if(cantidad <= 0){
        alert('debe ingresar una cantidad valida');
        return;
    }
    if(cantidad > usuario_actual.saldo){
        alert('no cuenta con saldo suficiente para retirar');
        return;
    }

    metodo(cantidad);
    
    // quitar_poner_vista(vista_cantidad,vista_dinero);
}


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
            vista_dinero
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
/*
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
myModal.show()*/