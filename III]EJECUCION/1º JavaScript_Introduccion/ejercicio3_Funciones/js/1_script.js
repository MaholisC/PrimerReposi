/* 
        -----------------
        LAS FUNCIONES
        _________________
    Entendidas como declaraciones de expresiones con 
    finalidad funcional.
    Principios:
    1. Palabra reservada- function()
    2. La acotación de la función esta entre corchetes {}
    será el entorno de ejecución de la función definida 
    3. Los parámetros que use la función estan dentro de sus parentesis 
    es decir, function(parametro1,parametro2,....)
    4. Sintaxis: 
    function(parámetros,...){
        lugar de intervención, declaración o ejecución de la función
    } 
    */
   var nombre = prompt('Introduce tu nombre');
   /* swal({
    title:'Bienvenido '  + nombre
   }) */
   function saludar() {
    /* Controlamos un script */
    swal({
        title:'Bienvenido Señor/a '  + nombre
       })
   }
   function despedida() {
    swal({
        title:'Hasta pronto Señor/a '  + nombre
       })
    
   }