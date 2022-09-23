
function validar_retiro(e){
    if(e!=null){
        if (e.code != "Enter") {
            return;
        }
    }

    cantidad = txt_cantidad.value.trim();

    if(cantidad.length == 0){
        mostrar_alerta('Advertencia','Debe ingresar la cantidad que desea retirar');
        return;
    }
    if(cantidad < 10000){
        mostrar_alerta('Advertencia','Valor no valido');
        return;
    }
    if(cantidad > usuarios[posicion_usuario_actual].saldo){
        mostrar_alerta('Error...','No cuenta con saldo suficiente para retirar esta cantidad');
        return;
    }

    retirar(cantidad);
}