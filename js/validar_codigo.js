
function validar_codigo(e){
    if(e!=null){
        if (e.code != "Enter") {
            return;
        }
    }

    codigo = txt_codigo.value.trim();

    if(codigo.length==0){
        mostrar_alerta('Advertencia','debe ingresar el codigo de confirmacion');
        return;
    }

    if(codigo!=usuarios[posicion_usuario_actual].codigo){
        mostrar_alerta('Error...','codigo incorrecto');
        aumentar_intentos();
        cancelar();
        return;
    }

    quitar_poner_vista(vista_codigo,vista_cantidad);
}