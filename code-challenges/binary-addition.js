//Convierte un número a texto (string) en la base que tú indiques.
//console.log((10).toString(10)); // '10'  en base 10 (decimal)
//console.log((10).toString(2));  // '1010' en base 2  (binario)
//console.log((10).toString(16)); // 'a'    en base 16 (hexadecimal)

function addBinary(a,b) {
  const sum = a + b;
  return sum.toString(2);
}
addBinary(5,9)
