/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

*/

if (4 > 3 && 6 > 5) {
    console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
    console.log("Esta condición también se cumple?");

}


// La rama condicional que vamos a ver por el terminal va a ser la primera porque el valor boleano que predomina es el true, ya que, 4 es mayor que 3 y 6 es mayor que 5.

// En el caso de la segunda rama condicional, 4 es mayor que 3 pero -1 no es mayor que 0. Con lo cual el valor boleano es un false.