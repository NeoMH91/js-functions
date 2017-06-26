function sillySum(arrayOfNumbers) {
  var outputArray = []
  var counter = 0
  var counter2 = 0

  while (arrayOfNumbers.length !== outputArray.length) {
    var numToAppend = arrayOfNumbers[counter] * counter2
    outputArray.push(numToAppend)
    counter += 1
    counter2 += 1
  }
  return outputArray
}

console.log(sillySum([2,4,4]))
