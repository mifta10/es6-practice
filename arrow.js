// function doubleIt(num){
//   return num*2;
// }
// const result = doubleIt(5);

// const doubleIt = function(num){
//   return num*2;
// }
// const result = doubleIt(5);

const doubleIt = num => num*2;
const add = (x , y) => x + y;
const give5 = () => 5;
const doMath = (a,b) => {
  sum=a+b;
  diff=a-b;
  mul = sum * diff;
  return mul;
}
const result = doubleIt(5);
const result1 = add(5,3);
const result2 = give5();
const result3 = doMath(2,3);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);