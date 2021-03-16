const ages = [12,13,14,15];
const ages1 = [22,33,44];
const ages2 = [ 36,28,46];
//const boro = ages.concat(ages1).concat([5]).concat(ages2);
const total = [...ages,5,...ages1,...ages2]
console.log(total);

const business = 650;
const nat = 450;
const sochib = 250;
const takapoisha = [650,450,250];
//const res = Math.max(business,nat,sochib);
const maximum = Math.max(...takapoisha);
console.log(maximum);
