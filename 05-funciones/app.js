
//Funciones 

//Función que salude al usuario 
let nombreUsuario = prompt('Dime tu nombre'); 

//Declaración de una función 
function saludar ( nombre = 'desconocido' ){
    console.log('Función ejecutada ...')
    return `Bienvenido ${nombre}`

}
//Llamado de una función
console.log(saludar (  nombreUsuario ) ) 


//EJERCICIOS
//Hacer una función que multiplique dos números. La función debe retornar el resultado de la operación. Llamar a la función "multiplicar"
let n1 = prompt('número 1');
let n2 = prompt('número 2'); 

function multiplicar(num1,num2){
    return num1 * num2
}

console.log( `El resultado es: ${ multiplicar(n1,n2) }` )

//Crear una función que le diga al usuario cúanto debe ahorrar al mes según sus ingresos. Que la función se llame "calcularAhorro"


