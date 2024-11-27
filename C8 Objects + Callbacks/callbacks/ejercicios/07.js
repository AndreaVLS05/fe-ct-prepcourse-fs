function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArr = [];
   for (let i = 0; i < arrayOfStrings.length; i++) {
      for (let j = 0; j < arrayOfStrings[i].length; j++) {
         newArr = arrayOfStrings.filter((word) => word[0] === 'a' );
         
      } 
   }  return newArr
  
}




   

module.exports = filter;
