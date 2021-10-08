//Liskov Substitution Principle
// باید کلاس های فرزند بتوانند جایگزین والد خود شوند ینی نتوانیم بگوییم اگر یک ویژگی در والد نبود میشد فززند را جایگزین آن کرد

//bad 
class Bird {
    constructor(name){
        this.name = name
    }
    fly(){

    }
}

class Duck extends Bird{
    fly(){

    }
}

// good 
// اردک نیمتواند پرواز کند
class Bird {
    constructor(name){
        this.name = name
    }
}
class UnFlightFulBird extends Bird{
    constructor(name){
        super(name)
    }
}
class FlightfulBird extends Bird{
    constructor(name){
        super(name)
    }
    fly(){

    }
}
class Duck extends UnFlightFulBird{
}
