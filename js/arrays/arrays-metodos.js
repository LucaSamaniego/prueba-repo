//defino una lista global
/**
 * 
 * @returns listado de string guardados en localStorage
 */
const listFromStorage = () => {
    return JSON.parse(localStorage.getItem('miListado')) || [];
}
/**
 * 
 * @param {list of strings} list 
 */
const saveInStorage = (list) => {
    localStorage.setItem('miListado', JSON.stringify(list));
}

const clearList = () => {
    removeFromStorage('miListado');
}

const removeFromStorage = (key) => {
    localStorage.removeItem(key);
}

const clearStorage = () => {
    localStorage.clear();
}

const list = listFromStorage();

/*
arrow function
*/
const add = () => {
    const htmlElement = document.getElementById('txt');
    const value = htmlElement.value;//porque es un input

    if (value.trim() === '') {
        console.log('vacio');
        return;
    }

    list.push(value);//0,1,2,3,4,...N-1 N

    //limpie la caja
    htmlElement.value = '';

    //invoke de la funcion
    dibujar(list);

    //guardar la lista en el localStorage|JSON =>existen de fabrica
    saveInStorage(list);
}

const dibujar = (list) => {
    //guars
    if (!validate(list)) {
        return;
    }

    addLiToUl(list[list.length - 1]);
}

const validate = (list) => {
    let isValid = true;
    if (list.length === 0) {
        isValid = false;
    }
    //si hay mas validaciones agregar aca
    return isValid;
}

const dibujarV2 = (list) => {
    //appendChild: agrega un hijo al elemento padre
    for (let i = 0; i < list.length; i++) {
        addLiToUl(list[i]);
    }
}

const addLiToUl = (text) => {

    const ulElement = document.getElementById('list');

    const li = document.createElement('li');
    li.innerText = text;

    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'X';
    btnRemove.addEventListener('click', remove)

    //agrego como hijo de li a btnRemove
    li.appendChild(btnRemove);

    ulElement.appendChild(li); //porque es un div
}

const remove = (btn) => {
    const li = btn.target.parentNode;
    //const ulElement = document.getElementById('list');
    const ulElement = li.parentNode;

    ulElement.removeChild(li);
}

//MAIN
dibujarV2(list);