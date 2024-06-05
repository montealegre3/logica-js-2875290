//Ejercicio 1 (del boton)
//Paso 1. variables
const miInput = document.getElementById("boton");

//Paso 2. funciones 
function cambiarValue (){
    console.log(miInput.value)
    miInput.value = 'Lanzamiento exitoso!'
}

//Paso 3. eventos 
miInput.addEventListener('click', cambiarValue)

//Ejercicio 2 (cuadro de colores)
//1. Variables 
const cajaColor = document.getElementById('caja');
const botonesColores = document.querySelectorAll('.btnColores');

console.log(cajaColor)
console.log(botonesColores)

//2. Funciones 
function pintarCaja(e){
    console.log(e.target.getAttribute('data-color'))
    let newColor = e.target.getAttribute('data-color');
    cajaColor.style.backgroundColor = newColor;
}

//3. Eventos 
botonesColores[0].addEventListener('click', pintarCaja);
botonesColores[1].addEventListener('click', pintarCaja);
botonesColores[2].addEventListener('click', pintarCaja);
botonesColores[3].addEventListener('click', pintarCaja);

//Ejercicio 4 (mover circulo)
//1. Variables 
const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover'); 
let e = 0;

console.log(pelota)
console.log(btnMover)

//2. Funciones
function mover (){

    if (e == 0){
        pelota.style.marginLeft = '400px'; 
        pelota.style.backgroundColor = 'yellow'; 
        pelota.style.transitionDuration = '.5s'; 
        e=1;
    }else{
        pelota.style.marginLeft = '0px'; 
        pelota.style.backgroundColor = '#232323'; 
        pelota.style.transitionDuration = '.5s'; 
        e=0;
    } 
    } 
     
//3. eventos
btnMover.addEventListener('click', mover); 

