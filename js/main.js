/**
 * de daviplata se puede retirar maximo $720'000
 * de nequi se puede retirar maximo $2'700.000
 * 
 */

let tipo_retiro = 0;

function seleccionar_tipo_retiro(tipo){
    tipo_retiro = tipo;
    document.getElementById('titulo-telefono').innerHTML = tipo_retiro == 0 ? 'Retiro Nequi' : 'Retiro Daviplata';
    quitar_poner_vista(vista_principal,vista_telefono);
}

  for (let i = 0; i < 20; i++) {
    let documento = `${randomnum()}${randomnum()}${randomnum()}`;
    let telefono = `${randomnum()}${randomnum()}${randomnum()}${randomnum()}`.substring(0,10);
    let nombre = nombres[Math.floor(Math.random() * 100)];
    let apellido = apellidos[Math.floor(Math.random() * 100)];
    let saldo = parseInt(`${randomnum()}${randomnum()}`)*100;
    let intentos = 0;
    let retiros = [];
    let tipo_cuenta = Math.floor(Math.random() * 2);
    let codigo = `${randomnum()}${randomnum()}`;
    let usuario = new Usuario(documento,telefono,nombre,apellido,saldo,codigo,intentos,retiros,tipo_cuenta)
    usuarios.push(usuario)
  }

  function randomnum(){
    let min = Math.ceil(100);
    let max = Math.floor(999);
    return Math.floor(Math.random() * (max - min + 1) + min);
    
  }