function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var cantidad = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      cantidad += 1;
    }
  } return cantidad;
}

module.exports = contarElementosMayoresA10;
