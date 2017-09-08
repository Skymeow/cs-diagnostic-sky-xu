// problem 5;
// algorithm is the logic of your code, the basic function of manipulating data


// problem 6:
// if a numble with in start and end numver is divisible by both 3 and 5, then prints FizzBuzz,
// if it's divisible by only 3, prints Fizz , else if it's divisible by 5, prints Buzz, otherwise print the number itself



var i;
var start;
var end;
for(i=start;i<=end;i++){
  if (i%3==0 &&i%5==0){
  console.log('FizzBuzz');
}
else if (i%3==0){

  console.log('Fizz');
}
else if (i%5==0){

  console.log('Buzz');
}
else{
  console.log(i);
}
}
