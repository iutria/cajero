class Dinero{
    constructor(valor,cantidad){
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

let limite_villetes_cien = 5;

// let dinero = [
//     new Dinero("100000",0),
//     new Dinero("50000",0),
//     new Dinero("20000",0),
//     new Dinero("10000",0),
// ];
let dinero = [
    new Dinero("100000",17),
    new Dinero("50000",28),
    new Dinero("20000",15),
    new Dinero("10000",64),
];

function disminuir_cantidad(valor,cantidad){
    for (const key in dinero) {
        if (dinero[key].valor == valor) {
            dinero[key].cantidad = dinero[key].cantidad - cantidad;          
        }
    }
}