function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var letras = texto.split('');
  var texto2 = letras.reverse();
  var textoInvertido = texto2.join('');
  return textoInvertido


}



module.exports = invertirTexto;
