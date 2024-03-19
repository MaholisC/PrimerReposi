function abrir() {
    /* 1º Variable hora, esta variable es un objects:
    Construye y desconstruye valores desprendiendo del momento a su llamada 
    */

    var pamplona = new Date();
    /* 
    2º Llamamos al método getElementById():
    */
   document.getElementById('resultado').innerHTML=
   /* Las propiedades deñ objeto */
   pamplona.getHours() + ':' + pamplona.getMinutes() +':' + pamplona.getSeconds()

}
function cerrar() {
    document.getElementById('resultado').innerHTML='';
}