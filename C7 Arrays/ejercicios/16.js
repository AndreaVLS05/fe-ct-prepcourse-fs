function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiplicacion = array.map((num) => {
    return num * array.indexOf(num);
  })
  return multiplicacion;
   
 
}



module.exports = multiplicarElementosPorIndice;
