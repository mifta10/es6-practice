const  numbers = [12,88];
//numbers = [12,56,88];---It will not okay
numbers[2] = 33;
numbers.push(23);
numbers.pop();
console.log(numbers);


//let
let sum = 0;
for(let i =0;i<10;i++){
  sum = sum +i;
}
//console.log(i)---it wil not work outside the curly bracket bcoz it is declared inside;
console.log(sum);