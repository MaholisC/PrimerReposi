/* Declaración de las variables: 2 planteamientos
Globales? o Locales?
Mis variables secundarias?
*/
/* a) */
var contador = 0;  /* el '=' es una asignación, no significa que sea igual a cero, es que está esperando una asignación númerica */
/* b) */
var respuesta = 0;

/* desarrollar una función anidada */
function ventaTotal() {
    agregar(++contador); /* Conseguimos el click transformarlo a número */
    venta();
}

function venta() {
    respuesta = (contador*69);
    document.getElementById('resultado').innerHTML ='Importe a abonar: ' + respuesta + '€'
}

function agregar(contador) {
    
    document.getElementById('nºClick').innerHTML=contador
}

function borrar() {
    contador = 0;
    document.getElementById('nºClick').innerHTML=contador;
    document.getElementById('resultado').innerHTML=contador;
}

