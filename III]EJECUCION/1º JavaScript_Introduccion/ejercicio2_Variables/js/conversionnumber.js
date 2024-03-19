/* Declaramos la variable */

var dato = prompt ('Escribe un nº del 1 al 9 para conocer tu descuento'); //no sé necesita llamar ningún sistema operativo con prompt
console.log(dato + ' es de tipo: ' + typeof(dato) );
/* 
1º Se confirma la teoria que todo valor recogido de la interfaz del usuario
es string, como caracteres 
*/

/* 2º Declaro variable secedaneas ↓ */

var maholis = parseFloat(dato);
console.log(maholis + ' es un tipo: ' + typeof(maholis) );
/* Percibimos no solo que esta variable se ha convertid en número, sino que 
además acepta decimales, es decir, punto flotante */

var daniela = parseInt(dato);
console.log(daniela + ' es de tipo: ' + typeof(daniela));

/* Juego dirigido de las variables */
document.write('<h2> Tu descuento es: ' + maholis*0.20 + '€ para tu próxima compra </h2>') 




