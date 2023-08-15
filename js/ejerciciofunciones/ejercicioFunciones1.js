//funciones 

/*alert ("ingrese las 3 notas del alumno");
const nota1 =prompt("nota1");
const nota2 =prompt("nota2");
const nota3 =prompt("nota3");
*/
//cosnt promedio =..;
//las tres notas deben ser >00 && <=10

/*if (validarRango(0,10,nota1) 
    && validarRango(0,10,nota2) 
        && validarRango(0,10,nota3)) {
    alert((nota1+nota2+nota3) / 3);
}else {
    alert('notas validas');
}*/

if (validarRango(0,10,nota1)){
    alert ('nota1 valida')
}
if (validarRango(0,10,nota2)){
    alert ('nota2 valida')
}

if (validarRango(0,10,nota3)){
    alert ('nota2 valida')
}


function validarRango(inf, sup, valor){
    (valor >= inf && valor <=sup) 
    return true
}

let nota1;
do {
    nota1 = promp('ingrese la nota 1')
}  while (!validarRango(0,10,nota1))

