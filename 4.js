// Ejercicio 4
// Dado el siguiente trozo de código queremos que imprima primero 'Hola' y luego 'Adiós' pero no queremos alterar la función principal.
// Por algún motivo este código no funciona como se espera y está imprimiendo en consola dos veces 'Adiós'.
// Podriamos corregir esto de alguna manera modificando sólo el código entre las líneas 15 y 19

const showText = function() {
  return {
    text: 'Adiós',
    init: function() {
      return console.log(this.text);
    }
  }
}();

// --------------- Solo puedes tocar desde aquí ------------- //
showText.text = 'Hola';
// showText2 = showText; <--- de esta forma se esta creando una referencia al objeto retornado por la funcion showTest 
showText2 = Object.assign({},showText); // de esta forma no se esta creando tal referencia... es un objeto diferente 
showText2.text = 'Adiós';
// --------------- hasta aquí ------------------------------- //

showText.init();  // Hola
showText2.init(); // Adiós
