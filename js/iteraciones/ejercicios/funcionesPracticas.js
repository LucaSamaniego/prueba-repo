
function mostrarResultado() {
    alert('El salario total es: ' + (salario + salarioAdicional));
}

function calcularSueldoTotal() {
    return (valorArticulo * cantVendidos) * (porcentaje / 100);
}

function leerValorArticulo() {
    let precio;
    do {
        precio = Number(prompt('ingrese precio del articulo $$$'))
        // precio no sea numerico > NaN => !NaN => true
        // -inf + inf
    }while(!precio || precio < 0);

    return precio;
}

function leerCantidad() {
    let cantidad;
    do {
        cantidad = Number(prompt('ingrese cantidad vendida'));        
    }while(!cantidad || cantidad < 0);

    return cantidad;
}

function leerComision() {
    let comision;
    do {
        comision = Number(prompt('ingrese el % de comisión'))
    }while(!comision || comision < 0);

    return comision;
}

function leerSalario() {
    let salario; //all +shit + r > keymap de eclipse
    do {
        salario = Number(prompt('Ingrese el salario: (> 0 && < 999 999 999)'))
        debugger;
    }while(!salario || salario < 0  || salario > 999999999);

    return salario;
}