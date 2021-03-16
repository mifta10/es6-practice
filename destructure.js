//object destructure
const person = { name :'Jack William', gfName:'Ema Watson', phone:'01721727272'};

const { phone ,gfName}= person;

console.log(phone , gfName);
console.log(phone , gfName);
console.log(phone , gfName);
console.log(phone , gfName);
const complexObject= {
  name:'abc',
  info:{
    address:'kola bagan',
    leader:'tiger'
  }
}
const {leader}= complexObject.info;
console.log(leader);


//Array destructure

const friends= ['Shakib Kahn','Amir Khan','Umar Khan','Slaman'];
const [firstFurend,...olders] = friends;

console.log(firstFurend, olders);
