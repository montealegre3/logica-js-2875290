//1. Primera parte, definir las varibales  
//Variable para las imágenes 
var img = document.getElementsByTagName("img")[0]; 

//Variable para los botones 
var btn = document.getElementsByClassName("btn");

//Variable para el texto y párrafo 
var txt1 = document.getElementsByTagName("h1")[0];
var txt2 = document.getElementsByTagName("p")[0];

//2. Segunda parte definir las funciones 

function cambio1 (){    // Al decir cambio 1 nos referimos al cambio que tiene el botón 1 
    img.setAttribute("src","img1.jpg");
    txt1.innerHTML = "Imagen1";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
}

function cambio2 (){  //Cambio2 es el cambio que le vamos hacer al botón 2 
    img.setAttribute("src","img2.jpg");
    txt1.innerHTML = "Imagen2";
    txt2.innerHTML = "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo, contenido aquí, contenido aquí";
}

function cambio3 (){  //Cambio3 es el cambio que le hacemos al tercer botón
    img.setAttribute("src","img3.jpg");
    txt1.innerHTML = "Imagen3";
    txt2.innerHTML = "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.";
}

//3. Tercer paso eventos 
btn[0].addEventListener("click",cambio1);
btn[1].addEventListener("click",cambio2);
btn[2].addEventListener("click",cambio3); 


