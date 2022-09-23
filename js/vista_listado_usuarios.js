let vista_usu = document.getElementById(vista_usuarios);

// vista_usu.innerHTML = `
    
//     `;

function ver_usuarios(){
    quitar_poner_vista(
        [
            vista_principal,
            vista_telefono,
            vista_codigo,
            vista_cantidad,
            vista_error,
            vista_dinero,
        ],
        vista_usuarios
    );


    let tabla_listado = document.getElementById('listado-usuarios');
    let lista = '';

    let cien = 0;
    let cincuenta = 0;
    let veinte = 0;
    let diez = 0;


    for (const item in usuarios) {
        let usu = usuarios[item];
        let retirados = usu.retirados;
        cien += retirados[0];
        cincuenta += retirados[1];
        veinte += retirados[2];
        diez += retirados[3];
        lista += `
            <tr>
                <td scope="row">${usu.documento}</td>
                <td>${usu.nombre_completo}</td>
                <td>${usu.telefono}</td>
                <td>$${usu.saldo}</td>
                <td>${usu.codigo}</td>
                <td>
                    <a class="btn btn-primary" 
                    data-bs-toggle="collapse" 
                    href="#${usu.id}" 
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="${usu.id}">
                    <i class="bi bi-eye"></i>
                    </a>
                </td>
            </tr>
            <tr class="collapse" id="${usu.id}">
                <td colspan="6" class="table-secondary">
                    ${obtener_lista_retiros(usu.retiros)}
                    
                </td>
            </tr>
        `;
    }
    tabla_listado.innerHTML = lista;
    document.getElementById('ret-100').innerHTML = cien;
    document.getElementById('ret-50').innerHTML = cincuenta;
    document.getElementById('ret-20').innerHTML = veinte;
    document.getElementById('ret-10').innerHTML = diez;
}

function obtener_lista_retiros(retiros){
    
    if(retiros.length == 0){
        return `
        <div class="alert alert-primary" role="alert">
            no ha realizados retiros
        </div>`;
    }
        
    let listado = '';

    for (const key in retiros) {
        let retiro = retiros[key];
        listado += `
        <tr>
            <th scope="row">${retiro.fecha}</th>
            <td>$${retiro.valor}</td>
            <td>${retiro.cien}</td>
            <td>${retiro.cincuenta}</td>
            <td>${retiro.veinte}</td>
            <td>${retiro.diez}</td>
        </tr>`;
    }
    return `<table class="table table-bordered border-primary">
        <thead>
        <tr>
            <th scope="col">fecha</th>
            <th scope="col">Valor</th>
            <th scope="col">$100.000</th>
            <th scope="col">$50.000</th>
            <th scope="col">$20.000</th>
            <th scope="col">$10.000</th>
        </tr>
        </thead>
        <tbody>
            ${listado}
        </tbody>
    </table>`;
}