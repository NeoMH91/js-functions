function letterCount (word) {
  words = word.replace(/[!,&@.]|_/g, '').replace(/\s/g, '').toLowerCase()
  var arr = words.split('')
  var ansObj = {}

  for (var i = 0; i < arr.length; i++) {
    var letter = arr[i]
    if (ansObj[letter]) { ansObj[letter] += 1 } else { ansObj[letter] = 1 }
  }
  return ansObj
}

console.log(letterCount('aPpl!e'))
