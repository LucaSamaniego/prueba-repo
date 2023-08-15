/*variables globales: pueden cambiar su valor*/
var miNombre = 'lucas';
var miApellido = 'samaniego';
var miSegundoNombre = 'martin';

/*constantes o variables no modificables */
const altura = 173;
const colorDeOjos = 'marrones';

/*variables de bloque: variables que pueden ser modificadas*/
let colorDePelo = 'negro';
let edad = 37;
let peso = 80;

/* saber el tipo de variable*/
/*console.log() es un metodo de consola */
//guardar el tipo de dato en una variable
let tipoMiApellido = typeof(miApellido);
//Breakpoint
console.log(typeof{miApellido});

tipoMiApellido = typeof(altura);
console.log(tipoMiApellido);

//definir una variable tipo object


const peach = {
    name: 'peach',
    edad: 3
};

const negro = {
    name: 'negro',
    fechaDeNacimiento: Date(),
    esGato: true
};
// pecach=negro no se puede porque son const

//a un objeto le puedo agregasr atributos "on the fly"
negro.altura =200;

//con objetc.keys se obtiene las claves del objeto "peach"
console.log('keys', Object.keys(negro)); 

peach.hairColor = colorDePelo;

//obtener la fecha de nacimient ode negro (que son milisegundos) y lo voy a convertir a un date

const fechaDeNacimiento = Date(negro.fechaDeNacimiento);
console.log('fecha de nac negro', fechaDeNacimiento);

//JSON.stringify es un .. de fabrica
//document.write(`los datos de negro son:${JSON.stringify(negro)}`)