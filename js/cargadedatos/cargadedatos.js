const nombre = 'lucas' //prompt('ingresa nombre');
const apellido = 'samaniego'//prompt('ingresa apellido');
const edad = '23'//prompt('ingresa edad');

//armar un json con los datos que cargue


const datos = {
    name: nombre,
    surname: apellido,
    age: edad 
};

// Object.keys(datos); 
const datosTexto = JSON.stringify(datos);
console.log('ingreso:',datosTexto);

const elNombre = datos['name'];

console.log('elNombre:',elNombre);

const cantidadAtributos = Object.keys(datos).length; //numero de atributos que tiene el objeto datos
console.log('cantidadAtributos',cantidadAtributos);

//convertir datosTexto, que es un tipo text, a un objeto
const datosObjeto = JSON.parse(datosTexto);
console.log('datosObjeto:',JSON.stringify(datosObjeto));

const iguales = datosObjeto === datos; /*igualdad de tipo y contenido */
console.log('iguales',iguales);

//igualdad de atributos de los objetos
const igualName = datos.name === datosObjeto.name;
const igualAge = datos.age === datosObjeto.age; /*case sentive */
const igualSurname = datos.surname === datosObjeto.surname;
console.log('iguales en atributos',igualName,igualSurname,igualAge);

//compara el mismo objeto 
const igualMismoObjeto = (datos === datos);
const igualMismoObjetoDatos = (datosObjeto === datosObjeto);
console.log('igualMismoObjeto',igualMismoObjeto);
console.log('confirm.',igualMismoObjetoDatos);

//comparo dos numeros/string/boolean
const altura = 175;
const altu = 175;
console.log(altu===altura);

const alturaStr = '175'
console.log('===', altura === alturaStr); //=== compara tipo y valor
console.log ('==', altura== alturaStr) //== compara valor)

//convertir string a number!
// + variable
//Number(variable)
//ParseInt(variable)

console.log(+alturaStr);
console.log(Number(alturaStr));
console.log(parseInt(alturaStr)) //el parseInt no toma en cuenta los decimales
console.log(parseFloat(alturaStr)) //  parseFloa toma los decimales