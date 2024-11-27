function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
for (let i = 0; i < array.length; i++) {
  const sonIguales = (num) => num === array[i];
  return array.every(sonIguales)
}

}

module.exports = todosIguales;
