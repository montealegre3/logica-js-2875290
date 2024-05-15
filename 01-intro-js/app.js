//Programa que pregunte la edad al usuario (prompt) y depende del valor, decirle si es mayor o menor de edad. 

//let edadUsuario = prompt('cuál es tu edad');

/* if( edadUsuario >= 18 ){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
} */

//Depende del color del semaforo le damos un mensaje al usuario, si pone un color diferente a rojo, amarillo o verde dirá "no se que hacer"
//.tolowerCase() // transforma el texto en minúscula

/* let color = prompt('¿Color semaforo?').toLowerCase(); 

if( color === 'rojo' ){
    console.log('Detente')
}else if( color === 'amarillo' ){
    console.log('Prepararse')
}else if( color === 'verde' ){
    console.log('Arranque')
}else{
    console.log( 'No se que hacer')
} */

let edadUsuario = prompt('¿Cuál es tu edad?');

if( edadUsuario >= 18){
    console.log('Puedes ingresar a la discoteca')
}else{
    console.log('No puedes ingresar a la discoteca')
}
    
let nombreUsuario = prompt('Ingresa tu nombre').toLowerCase();
if(nombreUsuario === 'Mario'){
    console.log('Puede ingresar')
}else if(nombreUsuario === 'Carlos'){
    console.log('Puede ingresar')
}else if( nombreUsuario === 'Mario' || nombreUsuario === 'Carlos' && edadUsuario >= 18){
    console.log('VIP') 
}


