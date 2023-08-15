/*function fx(p1) {
    function fy(p2){
        //aca podemos usar variables propias de fx
        return p2+p1;
    }
    return fy;
}

const fy = fx(10) //invoca
const valor = fy(20) // invoca la funcion interna

console.log(valor)*/
 

function adaptador1(obj) {
    return obj.abilities;
}
function adaptador2(obj) {
    return [{}];
}

function getPokemon(adapt) { 
    const urlBase = 'https://pokeapi.co/api/v2';//externo con config

    //de aca sale Promise
    async function exec(pokemonName) {
        const pathParticular = `/pokemon/${pokemonName}`;
        //adapte la respuesta
        const urlPokemon = `${urlBase}${pathParticular}`;

        //api fetch permite hacer consultas a recursos externos (endpoint)
        const resp = await fetch(urlPokemon);
        
        const obj = await resp.json();

        //adapto la respuesta
        return adapt(obj);
    }
    return exec;
}

async function buscarPokemon(name) {
    const aux = getPokemon(adaptador1);
    const resp = await aux(name);
    mostrarPokemon(resp);
}
function mostrarPokemon(pokemon) {
    document.getElementById('pokemon').innerHTML = JSON.stringify(pokemon);
}
