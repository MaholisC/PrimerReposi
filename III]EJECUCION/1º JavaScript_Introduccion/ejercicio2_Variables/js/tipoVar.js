
/* 
                -----------------
                Tipos de Variables
                __________________

        Tipos de variables, solo aclarar 4 conceptos generales:
        a) Declaración .
        b) Tipo de Variable (descripción)
        c) Valor de la variable (númerico o no)
        d) Asignación (=)
        💡Hay un conflicto cognitivo cuando el tipo y el valor se declaran
        a la vezy se definen en si misma.       
*/

//a) ver 
var texto; // Var string, siempre serán caracteres
var numero; // Var number, siempre serán números reales 
var buleana; // Var boolean (true o false)
//b) y c) Tipo de variable y asignación de valor 
texto='cadena de Texto';
numero=4;
buleana= true;

/* RECORDAR: 
Volver a visualizar el + como concatenador y además 
como absorbe desde js, un elemento html
*/

document.write('<div>Esto es una variable string: ' +   texto  +  '<br> </div> ');
document.write('<div> Esto es una variable number: ' +   numero +  '<br>');
document.write('Esto es una variable boolean: ' +   buleana +  '<br>');

/* Backslash, o caracteres de escape, solo utilizables fuera del 
doctype
Sintaxis:               Resultado
\n                      Salto de línea 
\t                      Tabulacion
\simbolo                \'

*/
alert(texto + '\n' + numero + '\n' + buleana); 
console.log(texto + '\n'+ numero + '\n' + buleana);



