class Retiro{
    constructor(valor, fecha, cien, cincuenta, veinte, diez){
        this.valor = valor;
        this.fecha = fecha;
        this.cien = cien;
        this.cincuenta = cincuenta;
        this.veinte = veinte;
        this.diez = diez;
    }
    get parse_fecha(){
        return Date(this.fecha);
    }
    static fromMap(map){
        this.valor = map['valor'];
        this.fecha = map['fecha'];
        this.cien = map['cien'];
        this.cincuenta = map['cincuenta'];
        this.veinte = map['veinte'];
        this.diez = map['diez'];
    }
}


function retirar(valor){
    if(tipo_retiro==0 && valor>2700000){
        mostrar_alerta('Error...',`valor invalido, no puede retirar mas de $2'700.000`);
        return;
    }
    
    if(tipo_retiro==1 && valor>720000){
        mostrar_alerta('Error...','valor invalido, no puede retirar mas de $720.000');
        return;
    }
    

    let str = `${valor}`;
    const vuelto = str.substring(str.length - 4,str.length);
    const nivelado = valor - parseInt(vuelto);

    let entregar = [];

    let aux = nivelado;
    let NV = 0

    for (let i = 0; i < 4; i++) {
        NV = parseInt(aux/dinero[i].valor);

        if(dinero[i].cantidad == 0){
            entregar[i] = 0;
        }else if(dinero[i].cantidad < NV){
            entregar[i] = NV - dinero[i].cantidad;
        }else{
            entregar[i] = NV;
        }

        if(dinero[i].valor == 100000){
            if(entregar[i] > limite_villetes_cien){
                entregar[i] = limite_villetes_cien;
            }
        }

        dinero[i].cantidad = dinero[i].cantidad - entregar[i];

        aux = aux - (entregar[i] * dinero[i].valor); 
    }

    let fecha = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let retiro = new Retiro(
        nivelado,
        fecha,
        entregar[0],
        entregar[1],
        entregar[2],
        entregar[3],
    );

    agregar_retiro(retiro);
    
    quitar_poner_vista(vista_cantidad,vista_dinero);


    document.getElementById('cantidad-100').innerHTML = entregar[0];
    document.getElementById('cantidad-50').innerHTML = entregar[1];
    document.getElementById('cantidad-20').innerHTML = entregar[2];
    document.getElementById('cantidad-10').innerHTML = entregar[3];


    console.log(retiro);
}