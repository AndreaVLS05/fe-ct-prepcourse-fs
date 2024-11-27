/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arr2 = [];
  var total = [];
   for (var prop in objeto) {
  arr2 = Array.of(prop, objeto[prop]);
  total.push(arr2);
  }
 return total;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

   var letrasNoOrdenadas = [];
   var cantidad2 = 0;
   var cantidades2 = [];
   var  union2 = [];
   for (let i = 0; i < string.length; i++) {
    if (letrasNoOrdenadas.includes(string[i]) === false) {
      letrasNoOrdenadas.push(string[i]);
     } 
     }
     var j = 0;
  for (let i = 0; i < string.length; i++) {
      if (letrasNoOrdenadas[j] === string[i]) {
        cantidad2 += 1;
        cantidades2[j] = cantidad2;
      }
      if (i === string.length - 1 & j < letrasNoOrdenadas.length) {
        arr2 = Array.of(letrasNoOrdenadas[j], cantidades2[j]);
        union2.push(arr2);
        i = 0
        j++;
        cantidad2 = 0;
        continue; 
      }  
      var objeto2 = Object.fromEntries(union2);
      
     } return objeto2
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var cambio = [];
for (let i = 0; i < string.length; i++ ) {
  if (string[i] === string[i].toUpperCase()) {
    cambio.push(string[i]);
  }
  }
   for (let j = 0; j < string.length; j++ ) {
    if (string[j] === string[j].toLowerCase()) {
      cambio.push(string[j]);
    }
  }
  return cambio.join('');
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var fraseDividida = frase.split(' ');
  var arrFrases = [];
  var fraseEspejo1 = [];
  var fraseEspejo2 = [];
  for (let i = 0; i < fraseDividida.length; i++) {
   arrFrases.push(fraseDividida[i]); 
   }
   fraseEspejo1 = arrFrases.map((element) =>
   element.split('').reverse().join(''));
   fraseEspejo2 = fraseEspejo1.join(' ');
   return fraseEspejo2;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  function dividirNumero(numero) {
    return numero.toString().split('').map(Number);
  }
  var digitos = dividirNumero(numero);
  var invertido = [];
  invertido = digitos.reverse();
  var invertidoUnido = []
  invertidoUnido = invertido.join('');
  
  if (numero == invertidoUnido) {
     return "Es capicua";
  } else
  return"No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var sinABC = [];
var sinABCPalabra = [];
for (let i = 0; i < string.length; i++) {
  if (string[i] != 'a' &
    string[i] != 'b' &
    string[i] != 'c'
  ) {
    sinABC.push(string[i]);
  }
}
  sinABCPalabra = sinABC.join('');
  return sinABCPalabra;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var ordenado = [];
ordenado = arrayOfStrings.sort((a, b) => a.length - b.length);
return ordenado;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var newArray = [];
  var maximo = Math.max(array1.length, array2.length);
  for (let i = 0; i < maximo; i++) {
    if (array1.includes(array2[i])) {
      newArray.push(array2[i]);
    }
} return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
