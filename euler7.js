//Start at index=2 because isPrime() function works from number 3 upwards
let index = 2;
num = 3;

//logging all the first 10001 prime numbers
while(index<=10001){
  if (isPrime(num)){
    console.log("Index: "+index+", num: "+num)
    //If number is a primer index is added by one
    index +=1
  }
  //num added by one on every loop of the while
  num+=1
}

//define if number is prime
function isPrime(x){
  let res = true
  for(let i=2; i<x; i++){
    //if it's divisible by a number, then it's not a prime. Break and return
    if(x%i==0){
      res = false
      break
    }
  }
  return res
}
