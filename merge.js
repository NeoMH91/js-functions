function merge(a,b) {

  var combinedArray = a.concat(b)
  var sortedArray = combinedArray.sort(sortNumber)

  function sortNumber(a,b) {
    return a - b;
}

  return sortedArray
}

console.log(merge([10,20,3],[4,5,6]))
