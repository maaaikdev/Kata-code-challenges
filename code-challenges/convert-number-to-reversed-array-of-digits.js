function digitize(n) {
  //First one we tranform incoming value to string
  //Second one we convert string to array each letter
  //Third one we reverse to array
  //Finally we convert each element of array in number
  return n.toString().split('').reverse().map(Number)
}
digitize(35231)
