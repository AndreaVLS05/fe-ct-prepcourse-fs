function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
if (a > b){
  [a, b] = [b, a];
}

resultado = 1;
for (var i = a; i <= b; i++) {
  resultado *= i;
}
if (resultado === -0){
  return resultado = 0;
} else
return resultado;
}

module.exports = productoEntreNúmeros;