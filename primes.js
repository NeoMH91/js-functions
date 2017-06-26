//primes
function isPrime(x){
  for (var i=2;i<x;i++){
    if( x%i=== 0 ){
      return false;
    }
  }
return true;
}
console.log(isPrime(5))

//check if number is prime, if it is add it to array,
//if length of array is less than numberOfTimes, keep repeating the checking and adding
function primes(numberOfTimes) {
  var arrayOfPrimes = []
  var counter = 2

  while (arrayOfPrimes.length<numberOfTimes === true) {
    if (isPrime(counter) === true) {
    arrayOfPrimes.push(counter)
  }
    counter += 1
  }
  return arrayOfPrimes
}
primes(10)
