class Student{
  constructor(sId, sName){
    this.id = sId;
    this.name = sName;
  }
}

const student1 = new Student(22, "shuvo");
const student2 = new Student(26, "mahiya");

console.log(student1, student2);