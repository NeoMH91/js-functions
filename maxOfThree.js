function maxOf3(a,b,c) {
  var array = [a,b,c]
  var largestNumber = Math.max(...array)
  return largestNumber
}

console.log(maxOf3(10,2,3))
