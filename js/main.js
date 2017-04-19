// Traemos los elementos que vamos a necesitar
var contenedor= document.getElementsByClassName("contenedor")[0];
var rojo= document.getElementById("rojo");
var azul= document.getElementById("azul");
var verde= document.getElementById("verde");
var amarilla= document.getElementById("amarilla");
//Definimos las propiedades del contenedor desde js
contenedor.style.position="relative";
contenedor.style.background="DarkGray";
contenedor.style.width="600px";
contenedor.style.padding="50px";
//Definimos las propiedades de la caja azul
azul.style.position="absolute";
azul.style.top="250px";
azul.style.right="0";
