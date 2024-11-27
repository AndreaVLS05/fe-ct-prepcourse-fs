function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var cantidad = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    cantidad += arrayOfNums[i];
  } return cantidad

}

module.exports = agregarNumeros;
