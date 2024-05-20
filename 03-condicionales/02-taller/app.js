console.log('ejecutando') 

//Punto 1 (altura de una persona)

let altura = prompt("Ingresa tu altura en cm");

if (altura <= 150){
    console.log("Persona de altura baja")
}else if(altura >= 151 && altura <= 170){
    console.log("Persona de altura media")
}else if (altura >= 171){
    console.log("Persona de altura alta")
}

//Punto 2 (promedio de notas)

let nota1 = prompt("Ingresa la nota de matemáticas");
let nota2 = prompt("Ingresa la nota de español");
let nota3 = prompt("Ingresa la nota de sociales");

let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

console.log("tu promedio es de " + promedio);

if (promedio === 10){
    console.log("Promedio excelente")
}else if (promedio >= 7 && promedio <= 9.9){
    console.log("Promedio bueno")
}else {
    console.log("Promedio insuficiente")
}



//Punto 3 (jugadores)

let estatura = prompt("¿Cúal es tu estatura?").toLowerCase();
let velocidad = prompt("¿Cúal es tu velocidad?").toLowerCase();
let edad = prompt("¿Cúal es tu edad?").toLowerCase();


if (estatura >= 175  && velocidad >= 15 && edad >= 18){
    console.log("Bienvenido al equipo profesional de mayores")
}else if (estatura >= 120  && velocidad >= 10 && edad >= 7){
    console.log("Bienvenido al equipo profesional de menores")
}else{
    console.log("No puedes ingresar al equipo")
}

//Punto 4 (ddescuento de tienda)
let total = prompt ("Ingrese la cantidad de escritorios comprados");
let totalescritorios = (parseFloat(total)) *100;
let precioescritorio = 200;

let diez = (parseFloat(totalescritorios)) *0.1;
let veinte = (parseFloat(totalescritorios)) *0.2;
let cuarenta = (parseFloat(totalescritorios)) *0.4;
let menos5 = (parseFloat(totalescritorios)) - (parseFloat(diez));
let menos10 = (parseFloat(totalescritorios)) - (parseFloat(veinte));
let mas10 = (parseFloat(totalescritorios)) - (parseFloat(cuarenta));
if (total >= 5 & total <10){
    console.log("el precio normal " + totalescritorios + " pero con los descuentos su precio es " + menos10)
}else if (total > 10){
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + mas10)
}else {
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + menos5)
}

//Punto 5 (listado de frutas)
alert("Listado de frutas disponibles:\n- Manzana\n- sandía\n- Mango\n- Fresa\n- Uva");

let frutaelegida = prompt("Ingresa el nombre de la fruta que quieras comprar").toLowerCase();
let cantidad = prompt("Ingresa la cantidad que deseas comprar");

let valores = {
    "manzana": 1500,
    "sandía": 1000,
    "Mango": 1100,
    "fresa": 800,
    "Uva": 3000,
};
let valorporunidad = valores[frutaelegida];
let pagar = valorporunidad * cantidad;

alert("Fruta: " + frutaelegida + "\nValor por unidad: $" + parseFloat(valorporunidad) + "\nValor total: $" + parseFloat(pagar));
  