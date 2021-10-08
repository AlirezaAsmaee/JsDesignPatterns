//Single Responsibility Principle
// هر کلاس باید فقط و فقط یک مسئولیت بر عهده داشته باشد

//wrong
class A {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  taskone() {return true}
  tasktwo() { if(this.taskone)return true}
}


//good 
class B{
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
    }
    taskone() {return true}
}

class C extends B{
    constructor(p1, p2){
        super(p1, p2);
    }
    tasktwo() { if(this.taskone)return true}
}

var testA= new A().tasktwo()
var testC = new C().tasktwo()

console.log(testA , testC)