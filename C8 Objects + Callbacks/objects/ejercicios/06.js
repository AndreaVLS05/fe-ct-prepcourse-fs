const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var total = 0;
  for (var prop in objeto) {
     total += 1;
  }   return total;
  } 


module.exports = contarPropiedades;
