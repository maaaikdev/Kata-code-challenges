
//Option 1
function validatePIN (pin) {
  //return true or false
  if(pin.length !== 4 && pin.length !== 6){
    return false
  }
  
  for(let i = 0; i < pin.length; i++){
    if(pin[i] < '0' || pin[i] > '9'){
      return false;
    }
  }
  
  return true;
}

validatePIN("1234")

// Option 2 - REGEX - How works REGEX

// ^ y $: aseguran que toda la cadena se valide completa.
// \d{4}: exactamente 4 dígitos.
// \d{6}: exactamente 6 dígitos.
// |: significa "o" (4 o 6 dígitos).
// .test(pin): retorna true si cumple.

function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

validatePIN2("1234")
