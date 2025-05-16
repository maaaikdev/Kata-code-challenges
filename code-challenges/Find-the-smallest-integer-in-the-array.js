//Option 1
function findSmallestInt(arr) {
  //your code here
  return Math.min(...arr)
}

findSmallestInt([34, 15, 88, 2]);

//Option 2

function findSmallestInt(arr) {
  //your code here
  console.log(arr);
  let smallest = arr[0]; // Supone que el primero es el menor
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]; // Actualiza si encuentra uno más pequeño
    }
  }
  return smallest;
}

console.log(findSmallestInt([34, 15, 88, 2]));
