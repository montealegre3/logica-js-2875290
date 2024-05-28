//Ciclos y arrays 

//                     0            1           2          3
let materias = [ 'matemáticas', 'sociales', 'español', 'física']


//Juntando datos con + (concatenar)
console.log( "Tu materia es: " + materias[2])//español
console.log(' materia 1: ' + materias[0]  + ' materia 2 '+ materias[1])

//Template literals 
console.log( `Materia 1: ${materias[2]} y después ${materias[0]}`) 

console.log( materias[4] );
materias[4] = 'deporte';
console.log(materias)
console.log(`El array materias tiene ${materias.length} elementos`)
console.log( materias[5] );

console.log( Boolean( materias.length >=6 ) ); //false

//Añadir un elemento al final del array con length
materias[materias.length] = 'pintura';
materias[materias.length] = 'ciencias';
materias.push('lo que sea')
materias.push('música')
materias.pop()

console.log(materias)




//Ciclos y arrays 
//Primera práctica: imprimir en una lista numerada todos los elementos de un array 'películas' con ayuda del ciclo for 

//Paso 1, crear el array:
//                      0                  1               2               3                    4                 5           6          7 
let peliculas = ['Harry Potter', 'Back to the future', 'Bataman', 'Los 4 fantásticos', 'Rapidos y furiosos', 'El chavo', 'Chapulin', 'Avatar'];

//Crear el for: inicialización, condición, incremento 
for(let i = 0; i < peliculas.length; i++){
    console.log( `${i+1}. ${peliculas[i]}`)
}

/* Realizar un programa que le pida artistas o bandas musicales al usuario con ayuda del ciclo while, 
cuando el usuario escriba "salir" se debe imprimir la lista de artistas que el usuario ingresó. 
Cada artista añadido se debe guardar es un array */ 

//Empezar por una variable 
let artistas = [];
let inputUsuario = prompt('dime un artista o "salir" para cerrar') 

while(inputUsuario != 'salir'){
    artistas.push(inputUsuario)
    inputUsuario = prompt('dime un artista o "salir" para cerrar')
}
for(let i = 0; i<artistas.length; i++){
    console.log(`${i+1}. ${artistas[i]}`)
} 
    


