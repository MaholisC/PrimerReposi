/*
        ------------------
        RECOGIDA DE DATOS
        ------------------

En este ejercicio, como ya lo vimos 
desde el anterior ejercicio, con el método getElementById() 
1. DONDE, lograbamos elegir y apuntar aun lugar concreto
del Doctype, este mismo método nos ayudará a apuntar también 
a donde recogeremos los datos. Para ello nos apoyaremos en 
la propiedad .value
2. Sintaxis:
document.getElementById('nombredelId').value
(No olvidemos que los datos que recogemos son del tipo string)
3. El escenario más plausible para la recogida de datos será un 
elemento de html denominados los input.
Estos son la puerta de unión entre el usuario, su interfaz y el navegador
con nuestra aplicación*/

function login() {
    
   /*  1º Definimos las variables y de forma implicita asocio el método y recogemos 
    EL VALOR de la variable */
    var eMail = document.getElementById('eMail').value;
    var password = document.getElementById('contraseña').value;
    swal({
        title:'Acceso Autorizado a:     ' + eMail,
        text:'clave correcta:   ' + password,
        button:false,
        timer:2500  
    })
    /* 2º El método como uso para soltar las variable o conjunto de variables */
    document.getElementById('resultado').innerHTML= eMail;
}

function reenvio() {

/*Metodo de localizacion entendido location()
utilizando la propiedad de .href  */

location.href='0_entrada.html';    
}


