function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var numeroRepetido = []
  for (let i = 0; i < numeros.length; i++) {
    if (numeroRepetido.includes(numeros[i])) {
      return numeros[i];
    } numeroRepetido.push(numeros[i])
  } 
}

module.exports = encontrarElementoRepetido;