var numArray = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30]
var fizzBuzz = a => {
    return a.map(num => {
    if(num % 3 === 0 && num % 5 === 0 ){
     return "FizzBuzz";
     } else {
       if(num % 3 === 0){
        return "Fizz"
       } else if( num % 5 === 0){
       return "Buzz";
       } else {
      
         return num;
    
      }
   
    }
 
  });
}

fizzBuzz(numArray);

/*
2,Buzz,7,Buzz,Fizz,13,47,Fizz,32,Fizz,31,94,17,FizzBuzz
*/
