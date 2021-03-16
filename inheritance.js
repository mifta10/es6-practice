class Parents{
  constructor(){
    this.fatherName = "schewenstiger"
  }
}

class Child extends Parents{
  constructor(name){
    super();
    this.name = name;
  }
  getFullName(){
    return this.name +" "+ this.fatherName;
  }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());