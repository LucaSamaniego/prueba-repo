/*1- crear un array */
//                 0   1 
const vector = ['casa','perro'];

//tamaño
console.log('tamaño',vector.length)

//posición? 'arrancan' en 0
console.log('edificio[0]',vector[0]); // el valor 1

//último length -1
console.log(vector[vector.length - 1]);

//recorro un array? con un ciclo, for! while,do-while!
for (let piso = 0; piso < vector.length; piso++) {
    const element = vector[piso];
    console.log(element);   
}

//ingresar los datos del alumno:
/*
nombre
-apellido
-dni (!=0)
-curso
la carga finaliza con dni=0
----------------------------
necesito un objeto alumnos para agrupar las variables
*/

const alumnos = [];
let nombre,apellido,dni,curso;

dni = Number(prompt('dni'));
while(dni !=0){
    nombre = prompt('nombre');
    apellido =promp('apellido');
    curso = prompt('curso');
    edad = Number(promp('edad'));
    //creo el objeto alumno
    const alumno = {
        dni,
        nombre,
        apellido,
        curso,
        edad
    }
    //agregar el alumno al vector de alumnos
    alumnos.push(alumno);

    dni = Number(prompt('dni'));    
}

//mostrar los datos del vector de alumnos
//recorro el vector
//el foreach es lo mismo que hacer: 
let suma = 0;

for (let index = 0; index < alumnos.length; index++){
    const alumno = array[index];
    console.log(element)
    suma+=alumno.edad; // += es lo mismo que hacer suma = suma+alumno.edad
}
console.log(suma/alumnos.length);

    /*
alumnos.forEach(); 
*/

function saludarDesdeArchivo() {
    alert('alumno agregado')
}



