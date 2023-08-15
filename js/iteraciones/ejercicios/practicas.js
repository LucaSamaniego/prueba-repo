/*
    Realizá un programa que permita al usuario ingresar el valor unitario de cierto
     artículo y la cantidad de artículos vendidos por un vendedor, del cual se 
     sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. 
     Con tales datos, la computadora debe calcular el monto a cobrar por el vendedor
     y mostrarlo

     valor (ingrsar)
     cantidad de aticulos (ingresar)
     sueldo fijo = 14.000
     porcentaje que gana 16%
     monto a cobrar = x
     el ingreso de los valores deben estar validados:
     -valor >0 && <10000000
    -cantidad >0 && (opcion)
    -valor y cantidad deben ser numericos
    -desarrollar funciones (minimo 3)
*/


/*let valor
let cantidadArticulos
const sueldo = 14000
valor = leerValorArticulo()
cantidadArticulos = leerCantidad()

let venta = valor*cantidadArticulos
let montoACobrar = sueldo+(venta*0.16)



function leerValorArticulo() {
    let precio 
    do {
        precio = Number(prompt('ingrese el precio del articulo'))
    }while(!precio || precio<0)
    return precio;
}


function leerCantidad() {
    let precio 
    do {
        cantidad = Number(prompt('ingrese cantidad de articulos'))
    }while(!cantidad || cantidad<0)
    return cantidad;
}

alert('el monto a cobrar es de ' + montoACobrar)*/

const porcentaje = leerComision();
const salario = leerSalario();
let salarioAdicional;
let valorArticulo = leerValorArticulo();
let cantVendidos = leerCantidad();

salarioAdicional = calcularSueldoTotal();

mostrarResultado();
//-MAIN


/*
    Realizá un programa que permita al usuario ingresar la cantidad de empleados a procesar.
    Para cada registro se pide el ingreso se:
    El valor unitario de cierto
     artículo y la cantidad de artículos vendidos por un vendedor(ingresado por el usuario), el salario 
     el el % de  comisión del monto total vendido. 
     Con tales datos, la computadora debe calcular el monto a cobrar por el vendedor
     y mostrarlo.

    El ingreso de los valores deben estar validados:
    - valorUnitario y cantidad
    - valorUnitario > 0 (opcion)
    - cantidad > 0 && (opcional)

    Desarrollar funciones (mínimo 3)

    El % de comision: > 0 && 20
    El salario: > 14000 && < 999 999 999

    Al finilizar la carga se pide:
    - el mayor sueldo
    - el menor sueldo
    - la posicion del mayor
    - la posicion del menor
    - el promedio de sueldo
    - la cantidad de sueldos por debajo de 10000
    - la cantidad de sueldos enicma de 50000
    - la mayor comisión obtenida
    - la menor comisión obtenida
    - el nombre del mejor vendedor
    - el nombre del peor vendedor

    Nota:  los datos de salida debe estar agrupados en un objeto
    AYUDA :)
    const resultados = {
        mayorSueldo: 10000,
        menorSueldo: 5000,
        promedioSueldo: 7500,
        atr:valor,
    }
*/
const cantidadAProcesar = Number(prompt('Ingrese cantidad a procesar'));

for(let i=0;i < cantidadAProcesar; i++) {
    const porcentaje = leerComision();
    const cantVendidos = leerCantidad();
    const valorArticulo = leerValorArticulo();
    const salarioAdicional = calcularSueldoAdicional(valorArticulo, cantVendidos, porcentaje);
    const salario = leerSalario();
    const salarioTotal = calcularSueldoTotal(salario,salarioAdicional);
    mostrarResultado(salarioTotal);
}

//sobre la lista calculamos todo lo que piden

//sale el resultado final


