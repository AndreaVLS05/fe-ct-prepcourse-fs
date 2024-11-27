function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (n === 0) {
    return 0;
  } 
  let prueba = 1;
  let resultado = 1;
  while (prueba < n) {
    prueba++;
    resultado += prueba;
  }
  return resultado;
}

module.exports = sumarHastaN;
