
function validar_telefono(e) {

    if(e!=null){
        if (e.code != "Enter") {
            return;
        }
    }

    telefono = txt_telefono.value.trim();

    if(telefono.length==0){
        mostrar_alerta('Error...','Debe ingresar un número de teléfono valido');
        return;
    }
    
    obtener_usuario();    
    
    if(posicion_usuario_actual == null){
        mostrar_alerta('Error...','El número de teléfono no esta registrado');
        return;
    }
    
    if(usuarios[posicion_usuario_actual].intentos==3){
        mostrar_alerta('Advertencia','ya no puedes realizar solicitud de retiro');
        cancelar();
        return;
    }

    quitar_poner_vista(vista_telefono,vista_codigo);
}