//Interface Segregation Principle
// چند اینترفیس کوچک و خورد شده همیشه بهتر از یک اینترفیس کلی و بزرگ است.


// bad 
class Base {
    Method1(){}
    Method2(){}
}

class Child extends Base {
    //verride
    Method1() {
        throw new Error('Method1 not implemented');
    }

   
}

// good

class Base1{
    Method1(){}
}
class Base2{
    Method2(){}
}
class ChildInGoodWay extends Base1 {

    Method1(){}

}