/* 1º Recogida de las variables  */

function primerEvento() {
    
/* onmouseover */
var eMail = document.getElementById('eMail').value;
var password = document.getElementById('contraseña').value;

document.getElementById('resultado2').innerHTML='esta es: ' +  eMail + ' & ' + password

}

function segundoEvento() {
    /* target.addEventListener ('click') */
    
}

function tercerEvento() {
    /* el click2, donde podemos redirigir o ejecutar algún otro script  */
    location.href='https://github.com/MaholisC'

}

function cuartoEvento() {
    /* Salga del entorno ofrezca o respuesta o UX (experiencia de usuarios) */
    document.getElementById('resultado2').innerHTML=''
}