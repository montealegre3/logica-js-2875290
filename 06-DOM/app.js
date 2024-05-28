
const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');



//Crear el evento 
miBtn.addEventListener('click', function (){
    pantalla.style.color = 'blueviolet'; //Cambia el color
    pantalla.innerText = "Ejecutando script ✨"; //Cambia el texto dentro de las etiquetas 
    miBtn.innerText = "🎁";
    pantalla.style.textAlign = "center";
})

//Crear un contador que incremente hasta 20
//No puede mostrar números por debajo de cero 

const valor = document.getElementById("valor");
const drecremento = document.getElementById("boton1");
const incremento = document.getElementById("boton2");

let i = 0; 
drecremento.addEventListener("click", function(){
    if(parseFloat(valor.innerHTML)>0){
        i--;
        valor.innerHTML = i;
    }
})

incremento.addEventListener("click", function(){
    if(parseFloat(valor.innerHTML)<20){
        i++;
        valor.innerHTML = i;
    }
})




