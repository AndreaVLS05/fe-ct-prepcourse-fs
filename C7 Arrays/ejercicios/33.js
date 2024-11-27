function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var letras1 = str1.split('');
  var letras2 = str2.split('');
  var letras3 = str3.split('');
  var tamaño1 = str1.length;
  var tamaño2 = str2.length;
  var tamaño3 = str3.length;
  var maximo = Math.max(tamaño1, tamaño2, tamaño3);
  var union1 = [];
  var union2 = [];
  var union3 = [];
  var union4 = [];
   for (let i = tamaño1; i < maximo; i++) {
    letras1.push(' ');
   } 
   for (let i = tamaño2; i < maximo; i++) {
    letras2.push(' ');
   } 
   for (let i = tamaño3; i < maximo; i++) {
    letras3.push(' ');
   } 
   for (let i = 0; i < maximo; i++) {
    union1.push(letras1[i] + letras2[i] + letras3[i]);
   } union2 = union1.join('');
     union3 = union2.split('');
     union4 = union3.filter((letra) => letra != ' ');
    
    return union4.join('')
 
}

 
module.exports = combine;