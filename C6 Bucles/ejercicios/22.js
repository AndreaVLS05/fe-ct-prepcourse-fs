function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let repeticion = 0
  while (repeticion < 8) {
    repeticion += 1;
    num += 5;
  } return num
}

module.exports = doWhile;