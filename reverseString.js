function reverseString(word) {
  var arrayOfLetters = word.split("")
  var arrayOfReverseLetters = []

  var counter = arrayOfLetters.length
  while (arrayOfLetters.length > arrayOfReverseLetters.length) {
    arrayOfReverseLetters.push(arrayOfLetters[counter-1])
    counter -= 1
  }


  return arrayOfReverseLetters
}

console.log(reverseString("jet star"))
