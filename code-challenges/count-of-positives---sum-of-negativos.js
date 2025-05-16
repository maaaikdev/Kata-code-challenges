function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) return [];
  // your code here
  let sum = 0;
  let neg = 0;

  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      sum++;
    } else {
      neg += input[i];
    }
  }
  console.log("total", [sum, neg])
  return [sum, neg]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
