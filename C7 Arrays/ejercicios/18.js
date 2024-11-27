function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var cantidad = 0
  for (let i = 0; i < resultadosTest.length; i++) {
    cantidad = cantidad += resultadosTest[i]
  } return cantidad / resultadosTest.length;

}



module.exports = promedioResultadosTest;
