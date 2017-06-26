function findLongestWord1(array1) {
  var wordCount = []
  for (i=0; i<array1.length; i++) {
    wordCount.push(array1[i].length)
  }
  var longestWordCount = Math.max(...wordCount)
  var indexOfLongestWord = wordCount.indexOf(longestWordCount)
  return array1[indexOfLongestWord]
}

console.log(findLongestWord1(['The', 'quick']))
