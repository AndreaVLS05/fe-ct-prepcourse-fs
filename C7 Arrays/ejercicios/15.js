function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var maximo = array.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  if (array.length === 0) {
    return 0;
  } else
  return array.indexOf(maximo);

}


module.exports = encontrarIndiceMayor;
