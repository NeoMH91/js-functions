function sumArray(arr) {

  function getSum(a, b) {
    return a + b;
}

var total = arr.reduce(getSum)
  return total
}

sumArray([1,2,3,4,5])
