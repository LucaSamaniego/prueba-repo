/*
operadores relacionales
>mayor
<menor
>= mayor o igual
<= menor o igual
!=  distinto operador logico
!== distinto "           "
todos los operadores r elacionales retornan un booleano
*/

const a = 10;
const b = 20;

console.log ('>', a > b);
console.log ('<', a < b);
console.log ('>=', a >= b);
console.log ('<=', a <=b );
console.log ('!=', a != b);
console.log('!==', a !== b)

/* 
Operadores logicos
tambien retornan un booleano
and = &&
or = ||
not = !
xor = ^ //alt+94
*/

const usuario = 'root';
const password = '1234';

//alert(username === 'root' && password === '1234');
let valido = username === 'root' && password == '1234';
console.log ('&&', username, password, valiod);

valido = username === 'root' || password === '1234';
console.log ('||', username, password, valido);

valido = username === ' root' ^ password === '1234';
console.log ('^', username, password, valido ===1) //se pone ===1 porque el xor (^) devuelve 1 o 0, entonces al ponerlo con el ===1 devuelve true

//sistema de numeracion
const aux = 8; 
const aux2 = 2;
console.log (8 && 2);  //el 8 en binario es 1000
 