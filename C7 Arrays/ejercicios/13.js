function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var sonPares = array.filter((num) => num % 2 === 0);
  return sonPares;
}

module.exports = filtrarNumerosPares;
