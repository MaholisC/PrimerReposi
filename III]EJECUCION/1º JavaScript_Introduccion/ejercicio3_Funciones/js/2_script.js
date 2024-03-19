/* 
            -------------------------------
            DEFINIR AMBITO DE LAS VARIABLES
            _______________________________
        Los ambitos de las variables son dos: 
        1.Globales(var generales que me plantea la propia ejecución, Variables eje)
             Caracteristicas:
             --> Se accede desde cualquier lugar desde el script (a su valor, tipo,...)
             --> Declaradas fuera de cualquier ambito, liberadas de su acotación
             --> Ventaja: uso de transversalidad
             --> Desventaja: Carga de la variable y uso de memoria 
        2.Locales(var secundaria o sucedaneas, var de apoyo lograr determinados
            resultados)   
            Caracteristicas:
            -->Siempre rondarán el entorno de alguna función o anidación de función
            -->Ejecutan solo en el ambito
            -->Carga la variable en el uso de la función pero solo utiliza la carga
            de la misma en su desarrollo, porteriormente desaloja la memoria(Ventaja)
            -->Limita el acceso a dicha varible (Desventaja)

*/
/* var Global */
var n1=parseInt(prompt('Introduce el 1º numero'));
var n2=parseInt(prompt('Introduce el 2º numero'));

function sumar() {
    /* var Local */
    var resultado = n1+n2;
    swal({
        title:'el resultado de la suma es: ' + resultado
    })
}

function restar(n1,n2) {
    swal('el resultado de la resta es: '+ (n1-n2));
    
}
function multiplicar() {
    swal('el resultado de la multiplicacion es: '+ (n1*n2));
    
}
function dividir() {
    swal('el resultado de la division es: '+ (n1/n2));
    
}