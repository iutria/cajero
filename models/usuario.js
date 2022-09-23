class Usuario{
    constructor(documento,telefono,nombre,apellido,saldo,codigo,intentos,retiros,tipo_cuenta){
        this.documento = documento;
        this.telefono = telefono;
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
        this.codigo = codigo;
        this.intentos = intentos;
        this.retiros = retiros;
        this.tipo_cuenta = tipo_cuenta;
    }
    get nombre_completo(){
        return `${this.nombre} ${this.apellido}`;
    }
    get id(){
        return `ID_${this.documento}`;
    }
    get retirados(){
        let ret = [0,0,0,0];
        for (let i = 0; i < this.retiros.length; i++) {
            ret[0] = ret[0] + this.retiros[i].cien;
            ret[1] = ret[1] + this.retiros[i].cincuenta;
            ret[2] = ret[2] + this.retiros[i].veinte;
            ret[3] = ret[3] + this.retiros[i].diez;
        }
        return ret;
    }
}

let posicion_usuario_actual = 0;

let usuarios = [
    new Usuario('157984769','3045510432','cristina','alvarez',3500000,'11234',0,[],0),
    new Usuario('263927192','3052852880','ivan','utria',270000,'42321',0,[
        new Retiro(500000, '2022/07/03', 4, 1, 2, 1)
    ],1),
    new Usuario('145','1','jesus','molina',3000000,'1',0,[],0)
];

function agregar_retiro(retiro){
    usuarios[posicion_usuario_actual].saldo = usuarios[posicion_usuario_actual].saldo - retiro.valor;
    usuarios[posicion_usuario_actual].retiros.push(retiro);
}

function aumentar_intentos(){
    usuarios[posicion_usuario_actual].intentos = usuarios[posicion_usuario_actual].intentos + 1;
}

function obtener_usuario(){
    for (let index = 0; index < usuarios.length; index++) {
        if(usuarios[index].telefono == `${telefono}` && usuarios[index].tipo_cuenta == tipo_retiro){
            posicion_usuario_actual = index;
            return;
        }
    }
    posicion_usuario_actual = null;
}