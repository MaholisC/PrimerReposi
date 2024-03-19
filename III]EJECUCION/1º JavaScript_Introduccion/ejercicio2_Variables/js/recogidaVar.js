// 1º Declarar las variable de forma implicita + propiedad
/* Tebdremos una propiedad tales como el .write, en este caso
la propiedad será prompt, llamando a la interfaz del usuario
windws (al sistema operativo del usuario;
*/
var nombre = window.prompt('Introduce tu nick: 📛 ');
var email = window.prompt('Introduce e-mail 📩');
var password = window.prompt('Introduce clave: 🔑');
console.log(password); //Nos ayuda a ver que variable se ha recogido

document.write(
    ' <div> Bienvenido:  ' + nombre + 'con el correo:' + email + '<br>' +
    'con clave' + password + '<br>' 
    // + '<h3>ACCESO AUTORIZADO'
    );
    swal({
    title: ('ACCESO AUTORIZADO'),
    button:false, 
    timer: 3000,
    icon:'success'  



    });



